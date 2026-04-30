const crypto = require("crypto");

const cookieName = "exercise_admin_session";

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(body));
}

function requireEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is not configured`);
  return value;
}

function sign(value) {
  const secret = requireEnv("ADMIN_SESSION_SECRET");
  return crypto.createHmac("sha256", secret).update(value).digest("base64url");
}

function makeSessionCookie() {
  const payload = Buffer.from(JSON.stringify({ role: "admin", exp: Date.now() + 1000 * 60 * 60 * 12 })).toString("base64url");
  const token = `${payload}.${sign(payload)}`;
  return `${cookieName}=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=43200`;
}

function clearSessionCookie() {
  return `${cookieName}=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0`;
}

function isAdmin(req) {
  const cookie = req.headers.cookie || "";
  const match = cookie.match(new RegExp(`${cookieName}=([^;]+)`));
  if (!match) return false;
  const [payload, signature] = match[1].split(".");
  if (!payload || !signature || sign(payload) !== signature) return false;
  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return parsed.role === "admin" && parsed.exp > Date.now();
  } catch {
    return false;
  }
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        req.destroy();
        reject(new Error("Body too large"));
      }
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

async function supabase(path, options = {}) {
  const url = `${requireEnv("SUPABASE_URL").replace(/\/$/, "")}/rest/v1/${path}`;
  const key = requireEnv("SUPABASE_SERVICE_ROLE_KEY");
  const response = await fetch(url, {
    ...options,
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
      ...(options.headers || {})
    }
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    throw new Error(data?.message || "Supabase request failed");
  }
  return data;
}

module.exports = {
  clearSessionCookie,
  isAdmin,
  json,
  makeSessionCookie,
  readBody,
  requireEnv,
  supabase
};
