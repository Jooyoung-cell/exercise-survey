const crypto = require("crypto");
const { json, makeSessionCookie, readBody, requireEnv } = require("../_lib");

function safeEqual(a, b) {
  const left = Buffer.from(a || "");
  const right = Buffer.from(b || "");
  return left.length === right.length && crypto.timingSafeEqual(left, right);
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return json(res, 405, { error: "Method not allowed" });
  }

  try {
    const { password } = await readBody(req);
    if (!safeEqual(password, requireEnv("ADMIN_PASSWORD"))) {
      return json(res, 401, { error: "비밀번호가 올바르지 않습니다." });
    }
    res.setHeader("Set-Cookie", makeSessionCookie());
    return json(res, 200, { ok: true });
  } catch (error) {
    return json(res, 500, { error: error.message });
  }
};
