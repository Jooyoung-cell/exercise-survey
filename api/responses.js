const { json, readBody, supabase } = require("./_lib");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return json(res, 405, { error: "Method not allowed" });
  }

  try {
    const body = await readBody(req);
    const created = await supabase("survey_responses", {
      method: "POST",
      body: JSON.stringify({
        profile: body.profile,
        answers: body.answers,
        scores: body.scores
      })
    });
    return json(res, 201, { response: created[0] });
  } catch (error) {
    return json(res, 500, { error: error.message });
  }
};
