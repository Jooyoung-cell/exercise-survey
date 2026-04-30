const questions = [
  { id: "Q1", text: "나는 어릴 때 활동적이었다.", categories: ["운동성향", "운동 적응력"] },
  { id: "Q2", text: "나는 현재 활동적이다.", categories: ["운동성향", "운동 적응력"] },
  { id: "Q3", text: "나는 운동을 좋아한다.", categories: ["운동성향", "운동 적응력"] },
  { id: "Q4", text: "나는 운동을 많이 하는 편이다.", categories: ["운동성향", "운동 적응력"] },
  { id: "Q5", text: "나는 운동할 때 즐겁다.", categories: ["운동성향", "운동 적응력"] },
  { id: "Q6", text: "나는 힘든 운동도 잘 견딘다.", categories: ["운동성향", "운동 적응력"] },
  { id: "Q7", text: "나는 운동경험이 많다.", categories: ["운동성향", "효율성"] },
  { id: "Q8", text: "나는 어릴 때 힘이 세었다.", categories: ["유전", "근력"] },
  { id: "Q9", text: "나는 근육질이다.", categories: ["유전", "단백질 합성력", "근력"] },
  { id: "Q10", text: "나는 물살이다.", categories: ["유전"] },
  { id: "Q11", text: "나는 근력이 세다.", categories: ["근력"] },
  { id: "Q12", text: "나는 뼈대가 굵다.", categories: ["유전", "물리성 1"] },
  { id: "Q13", text: "나는 팔 다리가 길다.", categories: ["유전", "물리성 2"] },
  { id: "Q14", text: "나의 부모 두분 모두 운동을 잘했(한)다.", categories: ["유전", "협응력", "운동 적응력"] },
  { id: "Q15", text: "나는 팔씨름이 세다.", categories: ["근력"] },
  { id: "Q16", text: "나는 100 미터 달리기가 빠르다.", categories: ["유전", "협응력", "순발력"] },
  { id: "Q17", text: "나는 오래달리기나 마라톤을 잘한다.", categories: ["유전", "운동 적응력", "지구력"] },
  { id: "Q18", text: "나는 춤을 잘 춘다.", categories: ["협응력"] },
  { id: "Q19", text: "나는 심한 운동 후 회복력이 빠르다.", categories: ["효율성", "운동 적응력"] },
  { id: "Q20", text: "나는 운동신경이 좋다.", categories: ["효율성", "협응력"] },
  { id: "Q21", text: "나는 빨리 걷는다.", categories: ["운동성향"] },
  { id: "Q22", text: "나는 목둘레가 두껍다.", categories: ["물리성 1", "근력", "순발력"] },
  { id: "Q23", text: "나는 다리통이 굵다.", categories: ["물리성 1", "근력", "순발력"] },
  { id: "Q24", text: "나는 종아리(아킬레스건)가 길다.", categories: ["효율성", "물리성 2", "지구력"] },
  { id: "Q25", text: "나는 다리가 짧다.", categories: ["물리성 1", "근력"] },
  { id: "Q26", text: "나는 점프력이 좋다.", categories: ["협응력", "운동 적응력", "순발력"] },
  { id: "Q27", text: "나는 많이 먹는다.", categories: ["대사량"] },
  { id: "Q28", text: "나는 다른 사람들에 비해 운동을 빠르게 배운다.", categories: ["협응력", "운동 적응력"] },
  { id: "Q29", text: "나는 같은 운동을 해도 남들보다 힘을 덜쓰고 덜 지친다.", categories: ["효율성"] },
  { id: "Q30", text: "나는 근력운동을 하면 근육이 빨리 생긴다.", categories: ["단백질 합성력"] },
  { id: "Q31", text: "나는 체중조절을 하지 않음에도 최근 체중이 거의 일정하다.", categories: ["운동 적응력"] },
  { id: "Q32", text: "나는 땀을 많이 흘린다.", categories: ["대사량"] }
];

const categoryOrder = [
  "운동성향",
  "유전",
  "효율성",
  "단백질 합성력",
  "대사량",
  "협응력",
  "운동 적응력",
  "물리성 1",
  "물리성 2",
  "근력",
  "순발력",
  "지구력"
];

const descriptions = {
  "운동성향": [
    "신체가 감당해야할 긴장성에 익숙하지 않음 / 운동과 동반되는 육체적 고통을 넘지 못함",
    "운동이 힘들고 부담스러울 수 있으나 운동에 대한 도전성이 잠재함",
    "신체적으로 운동에 대한 부담과 어려움이 없음 / 대뇌의 운동에 대한 적응력과 수용성이 존재함"
  ],
  "유전": [
    "신체능력에 대한 발굴을 위해 다양한 운동경험이 필요함",
    "거의 모든 유형의 운동에 적응능력을 발휘하는 신체임",
    "유전적으로 타인에 비해 명확하고 강력한 신체적 능력을 보유하고 있음"
  ],
  "효율성": [
    "운동 중 에너지 사용이 많고 쉽게 지칠 수 있음",
    "신체적 훈련을 통해 에너지 효율성이 높아질 수 있음",
    "신체의 에너지 효율성이 매우 우수한 상태임"
  ],
  "단백질 합성력": [
    "근육질 체형을 만들기에 적합하지 않은 신체임 / 체중운동에 유리한 신체임",
    "근육형성을 위해 최적의 방법을 동원해야 하는 신체임",
    "근육질 체형에 근육합성 능력이 우수함 / 부하운동에 유리한 신체임"
  ],
  "대사량": [
    "운동 중 사용되는 에너지가 체계적으로 관리되어야 하는 신체임",
    "운동에 필요한 에너지가 적절하게 공급되어야하는 신체임",
    "운동에 필요한 에너지를 축적하고 사용하는데 유리한 신체임"
  ],
  "협응력": [
    "운동기능을 습득하는데 시간이 필요하며 천천히 배워야 함 / 과다한 운동으로 부상의 위험이 높아질 수 있음 / 큰동작의 운동에 유리함",
    "어떤 운동을 배우는가에 따라 습득 시간과 능력에 차이가 존재함",
    "운동을 빠르게 배우며, 코치나 지도자가 매우 편하게 가르칠 수 있음 / 운동자세와 동작이 바르며 부상의 위험도 상대적으로 적음 / 미세동작이 필요한 기술운동에 적합함"
  ],
  "운동 적응력": [
    "갑작스런 운동이나 강한 운동은 몸에 부담을 줄 수 있음",
    "몸에 맞는 운동을 하는 경우 최상의 기량을 발휘할 수 있음",
    "운동 적응력이 매우 뛰어남 / 모든 운동을 신체적으로 정신적으로 견딜 수 있는 준비가 되어 있음"
  ],
  "물리성 1": [
    "해당없음",
    "해당없음",
    "짧고 굵은 체형으로 안정적인 운동이 가능함 / 도구와 장비를 이용한 운동에서 부상의 위험이 상대적으로 낮음"
  ],
  "물리성 2": [
    "해당없음",
    "해당없음",
    "마르고 긴 체형으로 체온조절 능력이 우수함 / 무게중심 이동에 유리함"
  ],
  "근력": [
    "근력에 의존하지 않는 운동에 적합함",
    "근지구력 운동이 적합함",
    "근골격계가 강인하고 근력 운동에 적합한 신체임"
  ],
  "순발력": [
    "순발력이 부족함",
    "해당없음",
    "순발력이 좋으며 일반적으로 금방 지칠 수 있음"
  ],
  "지구력": [
    "심폐지구력이 낮음",
    "해당없음",
    "심폐지구력이 좋은 대신 강하고 빠른 동작은 우수하지 않음"
  ]
};

const scaleLabels = ["전혀 아니다", "아니다", "보통이다", "그렇다", "매우 그렇다"];
const storageKey = "exercise-survey-responses-v1";
let selectedResponseId = null;
const $ = (selector) => document.querySelector(selector);

function getResponses() {
  return JSON.parse(localStorage.getItem(storageKey) || "[]");
}

function saveResponses(responses) {
  localStorage.setItem(storageKey, JSON.stringify(responses));
}

function getBand(score) {
  if (score < 3) return 0;
  if (score < 4) return 1;
  return 2;
}

function calculateScores(answers) {
  return categoryOrder.reduce((acc, category) => {
    const values = questions
      .filter((question) => question.categories.includes(category))
      .map((question) => Number(answers[question.id]))
      .filter(Boolean);
    const total = values.reduce((sum, value) => sum + value, 0);
    const average = values.length ? total / values.length : 0;
    acc[category] = {
      count: values.length,
      total,
      average: Number(average.toFixed(2)),
      description: descriptions[category][getBand(average)]
    };
    return acc;
  }, {});
}

function makeId() {
  if (crypto.randomUUID) return crypto.randomUUID();
  return `response-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function switchView(view) {
  $("#homeView").classList.toggle("is-visible", view === "home");
  $("#surveyView").classList.toggle("is-visible", view === "survey");
  $("#resultView").classList.toggle("is-visible", view === "result");
  $("#adminView").classList.toggle("is-visible", view === "admin");
  if (view === "admin") renderAdmin();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showProfileStep() {
  $("#profileStep").hidden = false;
  $("#questionStep").hidden = true;
}

function showQuestionStep() {
  $("#profileStep").hidden = true;
  $("#questionStep").hidden = false;
  renderQuestionsList();
  updateProgress();
}

function renderQuestionsList() {
  const answeredCount = questions.filter((item) => new FormData($("#surveyForm")).get(item.id)).length;
  $("#questionCount").textContent = `응답 완료 ${answeredCount} / ${questions.length}`;
  $("#questionsList").innerHTML = questions.map((question, questionIndex) => {
    const savedValue = new FormData($("#surveyForm")).get(question.id);
    return `
      <article class="survey-card question-card">
        <div class="question-heading">
          <span>${question.id}</span>
          <h2>${question.text}</h2>
        </div>
        <div class="scale-list" role="radiogroup" aria-label="${question.text}">
          ${scaleLabels.map((label, index) => {
            const value = index + 1;
            const checked = String(value) === savedValue ? "checked" : "";
            return `
              <label class="scale-option">
                <input type="radio" name="${question.id}" value="${value}" ${checked} required>
                <span>${label}</span>
              </label>
            `;
          }).join("")}
        </div>
      </article>
    `;
  }).join("");
}

function updateProgress() {
  const answeredCount = questions.filter((item) => new FormData($("#surveyForm")).get(item.id)).length;
  const percent = Math.round((answeredCount / questions.length) * 100);
  $("#questionCount").textContent = `응답 완료 ${answeredCount} / ${questions.length}`;
  $("#progressText").textContent = `${percent}%`;
  $("#progressBar").style.width = `${percent}%`;
}

function collectFormData(form) {
  const data = new FormData(form);
  const profile = {
    name: data.get("name").trim(),
    birthdate: data.get("birthdate"),
    gender: data.get("gender"),
    height: data.get("height"),
    weight: data.get("weight")
  };
  const answers = Object.fromEntries(questions.map((question) => [question.id, Number(data.get(question.id))]));
  return { profile, answers };
}

function isProfileValid() {
  const fields = ["name", "birthdate", "gender", "height", "weight"].map((name) => $(`[name="${name}"]`));
  const invalid = fields.find((field) => !field.checkValidity());
  if (invalid) {
    invalid.reportValidity();
    return false;
  }
  return true;
}

function saveCurrentResponse() {
  const missing = questions.find((question) => !new FormData($("#surveyForm")).get(question.id));
  if (missing) {
    alert(`${missing.id} 문항에 응답해주세요.`);
    document.querySelector(`[name="${missing.id}"]`).closest(".question-card").scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  const { profile, answers } = collectFormData($("#surveyForm"));
  const response = {
    id: makeId(),
    createdAt: new Date().toISOString(),
    profile,
    answers,
    scores: calculateScores(answers)
  };
  const responses = getResponses();
  responses.push(response);
  saveResponses(responses);
  showResult(response);
  renderAdmin();
}

function makeScoreCards(scores) {
  return categoryOrder.map((category) => `
    <article class="score-card">
      <div class="score-top">
        <h3>${category}</h3>
        <strong class="score-value">${scores[category].average.toFixed(2)}</strong>
      </div>
      <p class="description">${scores[category].description}</p>
    </article>
  `).join("");
}

function showResult(response) {
  $("#resultProfile").textContent = `${response.profile.name} · ${response.profile.gender} · ${response.profile.birthdate} · ${response.profile.height}cm / ${response.profile.weight}kg`;
  $("#finalResultSummary").innerHTML = makeScoreCards(response.scores);
  switchView("result");
}

function renderAdmin() {
  const responses = getResponses().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const query = $("#searchInput").value.trim().toLowerCase();
  const filtered = responses.filter((response) => response.profile.name.toLowerCase().includes(query));
  const list = $("#responseList");
  $("#totalCount").textContent = `${responses.length}명`;
  list.innerHTML = filtered.length ? "" : `<div class="empty-state">저장된 응답이 없습니다.</div>`;

  filtered.forEach((response) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `response-row${response.id === selectedResponseId ? " is-active" : ""}`;
    button.innerHTML = `
      <strong>${response.profile.name}</strong>
      <small>${response.profile.gender} · ${response.profile.birthdate} · ${formatDate(response.createdAt)}</small>
    `;
    button.addEventListener("click", () => {
      selectedResponseId = response.id;
      renderAdmin();
      renderDetail(response);
    });
    list.append(button);
  });

  if (selectedResponseId) {
    const selected = responses.find((response) => response.id === selectedResponseId);
    if (selected) renderDetail(selected);
  }
  renderStats(responses);
}

function renderDetail(response) {
  $("#adminDetail").innerHTML = `
    <div class="section-title">
      <div>
        <p class="kicker">Response Detail</p>
        <h2>${response.profile.name}</h2>
        <p class="meta-line">${formatDate(response.createdAt)} 저장</p>
      </div>
      <button class="secondary" type="button" data-delete="${response.id}">삭제</button>
    </div>
    <div class="profile-grid">
      ${profileItem("생년월일", response.profile.birthdate)}
      ${profileItem("성별", response.profile.gender)}
      ${profileItem("신장", `${response.profile.height}cm`)}
      ${profileItem("체중", `${response.profile.weight}kg`)}
      ${profileItem("문항", "32개 완료")}
    </div>
    <div class="score-grid">${makeScoreCards(response.scores)}</div>
    <h3 style="margin-top:22px">문항별 응답</h3>
    <div class="answer-grid">
      ${questions.map((question) => `
        <div class="answer-item">
          <span>${question.id}</span>
          <strong>${response.answers[question.id]}점</strong>
          <p>${question.text}</p>
        </div>
      `).join("")}
    </div>
  `;
  $("#adminDetail [data-delete]").addEventListener("click", () => deleteResponse(response.id));
}

function profileItem(label, value) {
  return `<div class="profile-item"><span>${label}</span><strong>${value}</strong></div>`;
}

function renderStats(responses) {
  const grid = $("#statsGrid");
  if (!responses.length) {
    grid.innerHTML = `<div class="empty-state">통계로 볼 응답이 아직 없습니다.</div>`;
    return;
  }
  grid.innerHTML = categoryOrder.map((category) => {
    const average = responses.reduce((sum, response) => sum + response.scores[category].average, 0) / responses.length;
    return `
      <article class="stat-card">
        <div class="stat-top">
          <h3>${category}</h3>
          <strong class="score-value">${average.toFixed(2)}</strong>
        </div>
        <p class="description">전체 응답 평균</p>
      </article>
    `;
  }).join("");
}

function deleteResponse(id) {
  if (!confirm("선택한 응답을 삭제할까요?")) return;
  const responses = getResponses().filter((response) => response.id !== id);
  saveResponses(responses);
  selectedResponseId = null;
  $("#adminDetail").innerHTML = `<div class="empty-state">저장된 응답을 선택하면 상세 결과가 표시됩니다.</div>`;
  renderAdmin();
}

function formatDate(value) {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function exportExcel() {
  const responses = getResponses();
  if (!responses.length) {
    alert("내보낼 응답이 없습니다.");
    return;
  }
  const headers = [
    "저장일시", "이름", "생년월일", "성별", "신장(cm)", "체중(kg)",
    ...categoryOrder.map((category) => `${category} 평균`),
    ...questions.map((question) => question.id)
  ];
  const rows = responses.map((response) => [
    formatDate(response.createdAt),
    response.profile.name,
    response.profile.birthdate,
    response.profile.gender,
    response.profile.height,
    response.profile.weight,
    ...categoryOrder.map((category) => response.scores[category].average),
    ...questions.map((question) => response.answers[question.id])
  ]);
  const html = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">
      <head><meta charset="utf-8"></head>
      <body><table>${[headers, ...rows].map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(String(cell ?? ""))}</td>`).join("")}</tr>`).join("")}</table></body>
    </html>
  `;
  const blob = new Blob([html], { type: "application/vnd.ms-excel;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `운동성향_응답_${new Date().toISOString().slice(0, 10)}.xls`;
  a.click();
  URL.revokeObjectURL(url);
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function resetSurvey() {
  $("#surveyForm").reset();
  showProfileStep();
  updateProgress();
}

function bindEvents() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });
  $("#startSurveyBtn").addEventListener("click", () => {
    resetSurvey();
    switchView("survey");
  });
  $("#profileNextBtn").addEventListener("click", () => {
    if (!isProfileValid()) return;
    showQuestionStep();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  $("#questionsList").addEventListener("change", updateProgress);
  $("#submitSurveyBtn").addEventListener("click", saveCurrentResponse);
  $("#backToProfileBtn").addEventListener("click", () => {
    showProfileStep();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  $("#surveyForm").addEventListener("submit", (event) => event.preventDefault());
  $("#newSurveyBtn").addEventListener("click", () => {
    resetSurvey();
    switchView("survey");
  });
  $("#goAdminBtn").addEventListener("click", () => switchView("admin"));
  $("#searchInput").addEventListener("input", renderAdmin);
  $("#exportBtn").addEventListener("click", exportExcel);
  $("#clearDataBtn").addEventListener("click", () => {
    if (!confirm("저장된 모든 응답을 삭제할까요?")) return;
    saveResponses([]);
    selectedResponseId = null;
    $("#adminDetail").innerHTML = `<div class="empty-state">저장된 응답을 선택하면 상세 결과가 표시됩니다.</div>`;
    renderAdmin();
  });
}

bindEvents();
resetSurvey();
renderAdmin();
