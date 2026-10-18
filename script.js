// Map the dropdown values to the variables defined in your set files
const questionSets = {
  'set1': typeof quizSet1 !== 'undefined' ? quizSet1 : [],
  'set2': typeof quizSet2 !== 'undefined' ? quizSet2 : [],
  'set3': typeof quizSet3 !== 'undefined' ? quizSet3 : []
};

let quizData = [];
let userAnswers = {};
let pendingSelections = {};
let activeFilter = 'all';

const quizMount = document.getElementById('quiz-mount');
const hudScore = document.getElementById('hud-score');
const hudAttempted = document.getElementById('hud-attempted');
const hudPct = document.getElementById('hud-pct');
const hudAnswered = document.getElementById('hud-answered');
const hudTotal = document.getElementById('hud-total');
const hudProgressBar = document.getElementById('hud-progress-bar');
const btnFilterMissed = document.getElementById('btn-filter-missed');
const btnReset = document.getElementById('btn-reset');
const setSelector = document.getElementById('set-selector');

const modal = document.getElementById('scorecard-modal');
const modalScorePct = document.getElementById('modal-score-pct');
const modalScoreRatio = document.getElementById('modal-score-ratio');
const modalFeedback = document.getElementById('modal-feedback');
const modalBtnRestart = document.getElementById('modal-btn-restart');
const modalBtnReview = document.getElementById('modal-btn-review');

function loadQuestionSet(setName) {
  quizData = questionSets[setName] || [];
  userAnswers = {};
  pendingSelections = {};
  activeFilter = 'all';
  btnFilterMissed.classList.remove('active');
  hudTotal.textContent = quizData.length;
  renderQuiz();
}

function renderQuiz() {
  quizMount.innerHTML = '';
  quizData.forEach((item) => {
    const isMissed = userAnswers[item.num] && !userAnswers[item.num].isCorrect;
    if (activeFilter === 'missed' && !isMissed) {
      return;
    }

    const card = document.createElement('div');
    card.className = `question-card ${userAnswers[item.num] ? 'answered' : ''}`;
    card.id = `q-card-${item.num}`;

    const header = document.createElement('div');
    header.className = 'card-header';
    header.innerHTML = `
      <div class="card-title">Question ${item.num}</div>
      <span class="badge-kind">${item.kind === 'multi' ? 'Select Multiple' : 'Select One'}</span>
    `;
    card.appendChild(header);

    const stem = document.createElement('div');
    stem.className = 'question-text';
    stem.textContent = item.q;
    card.appendChild(stem);

    const optionsGroup = document.createElement('div');
    optionsGroup.className = 'options-group';
    optionsGroup.id = `opt-group-${item.num}`;

    const isAnswered = !!userAnswers[item.num];

    Object.keys(item.options).forEach((key) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.dataset.key = key;

      if (isAnswered) {
        btn.disabled = true;
        const isUserSelected = userAnswers[item.num].selected.includes(key);
        const isTargetAnswer = item.answer.includes(key);

        if (isTargetAnswer) {
          btn.classList.add('correct');
        } else if (isUserSelected && !isTargetAnswer) {
          btn.classList.add('incorrect');
        }
      } else {
        if (item.kind === 'single') {
          btn.addEventListener('click', () => handleSingleSelect(item.num, key));
        } else {
          btn.addEventListener('click', () => toggleMultiOption(item.num, key, btn));
        }
      }

      btn.innerHTML = `
        <span class="opt-badge">${key}</span>
        <span class="opt-text">${item.options[key]}</span>
      `;
      optionsGroup.appendChild(btn);
    });

    card.appendChild(optionsGroup);

    if (item.kind === 'multi' && !isAnswered) {
      const submitBtn = document.createElement('button');
      submitBtn.className = 'btn-multi-submit';
      submitBtn.id = `multi-submit-${item.num}`;
      submitBtn.textContent = 'Lock In Choices';
      submitBtn.disabled = true;
      submitBtn.addEventListener('click', () => handleMultiSubmit(item.num));
      card.appendChild(submitBtn);
    }

    const explanation = document.createElement('div');
    explanation.className = 'explanation-box';
    explanation.id = `exp-${item.num}`;
    if (isAnswered) {
      explanation.style.display = 'block';
    }
    explanation.innerHTML = `
      <strong>Explanation:</strong>
      ${item.explanation}
    `;
    card.appendChild(explanation);

    quizMount.appendChild(card);
  });

  updateHUD();
}

function toggleMultiOption(num, key, btn) {
  if (!pendingSelections[num]) pendingSelections[num] = new Set();
  if (pendingSelections[num].has(key)) {
    pendingSelections[num].delete(key);
    btn.style.borderColor = 'var(--border-color)';
    btn.style.background = '#0f1626';
  } else {
    pendingSelections[num].add(key);
    btn.style.borderColor = 'var(--brand)';
    btn.style.background = 'rgba(56, 189, 248, 0.08)';
  }

  const submitBtn = document.getElementById(`multi-submit-${num}`);
  if (submitBtn) {
    submitBtn.disabled = pendingSelections[num].size === 0;
  }
}

function handleSingleSelect(num, chosenKey) {
  const q = quizData.find((d) => d.num === num);
  const isCorrect = q.answer.includes(chosenKey);

  userAnswers[num] = {
    selected: [chosenKey],
    isCorrect: isCorrect
  };

  finalizeQuestion(num);
}

function handleMultiSubmit(num) {
  const q = quizData.find((d) => d.num === num);
  const selected = Array.from(pendingSelections[num] || []);
  const isCorrect =
    selected.length === q.answer.length &&
    selected.every((val) => q.answer.includes(val));

  userAnswers[num] = {
    selected: selected,
    isCorrect: isCorrect
  };

  finalizeQuestion(num);
}

function finalizeQuestion(num) {
  const q = quizData.find((d) => d.num === num);
  const answerRecord = userAnswers[num];
  const card = document.getElementById(`q-card-${num}`);
  if (card) card.classList.add('answered');

  const group = document.getElementById(`opt-group-${num}`);
  const buttons = group.querySelectorAll('.option-btn');
  buttons.forEach((btn) => {
    btn.disabled = true;
    const key = btn.dataset.key;
    if (q.answer.includes(key)) {
      btn.classList.add('correct');
    } else if (answerRecord.selected.includes(key)) {
      btn.classList.add('incorrect');
    }
  });

  const multiBtn = document.getElementById(`multi-submit-${num}`);
  if (multiBtn) multiBtn.style.display = 'none';

  const exp = document.getElementById(`exp-${num}`);
  if (exp) exp.style.display = 'block';

  updateHUD();
  checkCompletion();
}

function updateHUD() {
  const answeredKeys = Object.keys(userAnswers);
  const answeredCount = answeredKeys.length;
  const totalCount = quizData.length;

  let correctCount = 0;
  answeredKeys.forEach((key) => {
    if (userAnswers[key].isCorrect) correctCount++;
  });

  const pct = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
  const progressPct = totalCount > 0 ? (answeredCount / totalCount) * 100 : 0;

  hudScore.textContent = correctCount;
  hudAttempted.textContent = answeredCount;
  hudPct.textContent = `${pct}%`;
  hudAnswered.textContent = answeredCount;
  hudProgressBar.style.width = `${progressPct}%`;
}

function checkCompletion() {
  if (Object.keys(userAnswers).length === quizData.length && quizData.length > 0) {
    showScorecard();
  }
}

function showScorecard() {
  let correct = 0;
  quizData.forEach((q) => {
    if (userAnswers[q.num]?.isCorrect) correct++;
  });
  const total = quizData.length;
  const pct = Math.round((correct / total) * 100);

  modalScorePct.textContent = `${pct}%`;
  modalScoreRatio.textContent = `${correct} / ${total} Correct`;

  if (pct >= 85) {
    modalFeedback.textContent = "Outstanding! You demonstrate exceptional mastery of Salesforce Platform Developer patterns.";
  } else if (pct >= 65) {
    modalFeedback.textContent = "Solid performance! Review missed items to sharpen your apex trigger and governor limit nuances.";
  } else {
    modalFeedback.textContent = "Keep practicing! Review the detailed explanations on the cards to reinforce core principles.";
  }

  modal.classList.add('active');
}

btnReset.addEventListener('click', () => {
  if (confirm('Restart quiz and clear all answers?')) {
    for (const k in userAnswers) delete userAnswers[k];
    for (const k in pendingSelections) delete pendingSelections[k];
    activeFilter = 'all';
    btnFilterMissed.classList.remove('active');
    renderQuiz();
  }
});

btnFilterMissed.addEventListener('click', () => {
  if (activeFilter === 'missed') {
    activeFilter = 'all';
    btnFilterMissed.classList.remove('active');
  } else {
    activeFilter = 'missed';
    btnFilterMissed.classList.add('active');
  }
  renderQuiz();
});

setSelector.addEventListener('change', (e) => {
  loadQuestionSet(e.target.value);
});

modalBtnRestart.addEventListener('click', () => {
  modal.classList.remove('active');
  btnReset.click();
});

modalBtnReview.addEventListener('click', () => {
  modal.classList.remove('active');
  activeFilter = 'missed';
  btnFilterMissed.classList.add('active');
  renderQuiz();
});

// Load Set 1 by default on startup
loadQuestionSet('set1');