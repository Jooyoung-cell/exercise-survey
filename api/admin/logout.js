const { clearSessionCookie, json } = require("../_lib");

module.exports = async function handler(req, res) {
  res.setHeader("Set-Cookie", clearSessionCookie());
  return json(res, 200, { ok: true });
};
