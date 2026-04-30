const { isAdmin, json, supabase } = require("../_lib");

module.exports = async function handler(req, res) {
  if (!isAdmin(req)) {
    return json(res, 401, { error: "관리자 로그인이 필요합니다." });
  }

  try {
    if (req.method === "GET") {
      const rows = await supabase("survey_responses?select=*&order=created_at.desc", { method: "GET" });
      return json(res, 200, { responses: rows.map(fromRow) });
    }

    if (req.method === "DELETE") {
      const params = new URL(req.url, "https://local").searchParams;
      if (params.get("all") === "1") {
        await supabase("survey_responses?id=not.is.null", { method: "DELETE" });
        return json(res, 200, { ok: true });
      }
      const id = params.get("id");
      if (!id) return json(res, 400, { error: "id is required" });
      await supabase(`survey_responses?id=eq.${encodeURIComponent(id)}`, { method: "DELETE" });
      return json(res, 200, { ok: true });
    }

    return json(res, 405, { error: "Method not allowed" });
  } catch (error) {
    return json(res, 500, { error: error.message });
  }
};

function fromRow(row) {
  return {
    id: row.id,
    createdAt: row.created_at,
    profile: row.profile,
    answers: row.answers,
    scores: row.scores
  };
}
