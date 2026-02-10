// 动物塑测试应用主逻辑
// 数据变量已从data.js加载

class AnimalTest {
  constructor() {
    this.currentPage = "home"
    this.currentQuestion = 0
    this.answers = []
    this.result = null
    this.currentLang = localStorage.getItem('animal_test_lang') || 'zh'
    this.updateData()
    this.init()
    this.setupMobileOptimizations()
  }

  updateData() {
    this.questions = this.currentLang === 'zh' ? questions_zh : questions_en
    this.animals = this.currentLang === 'zh' ? animals_zh : animals_en
    this.t = locales[this.currentLang]
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'zh' ? 'en' : 'zh'
    localStorage.setItem('animal_test_lang', this.currentLang)
    this.updateData()
    this.render()
  }

  init() {
    this.render()
  }

  render() {
    const app = document.getElementById("app")
    // Update document title
    document.title = this.t.title

    // Update lang toggle button text if it exists outside app
    const langBtnText = document.querySelector('#lang-toggle .lang-text')
    if (langBtnText) {
        langBtnText.textContent = this.currentLang === 'zh' ? 'English' : '中文'
    }

    if (this.currentPage === "home") {
      app.innerHTML = this.renderHome()
    } else if (this.currentPage === "test") {
      app.innerHTML = this.renderTest()
      this.attachTestEvents()
    } else if (this.currentPage === "result") {
      app.innerHTML = this.renderResult()
      this.attachResultEvents()
    } else if (this.currentPage === "animals") {
      app.innerHTML = this.renderAnimals()
      this.attachAnimalsEvents()
    }
  }

  renderHome() {
    const t = this.t
    const introHtml = t.intro_items.map(item => `
        <div class="intro-item">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        </div>
    `).join('')

    return `
            <div class="container home-page">
                <div class="hero-section">
                    <div class="logo-wrapper">
                        <span class="logo-emoji">🦁</span>
                        <span class="logo-emoji">🦊</span>
                        <span class="logo-emoji">🐺</span>
                        <span class="logo-emoji">🦅</span>
                        <span class="logo-emoji">🐱</span>
                        <span class="logo-emoji">🐶</span>
                    </div>
                    <h1>${t.title}</h1>
                    <h2>${t.subtitle}</h2>
                    <div class="intro-text">
                        ${introHtml}
                    </div>
                </div>
                
                <div class="warning-box">
                    <span class="warning-icon">⚠️</span>
                    <div class="warning-content">
                        <strong>${t.warning_title}</strong>${t.warning_text}
                    </div>
                </div>
                
                <div class="start-section">
                    <div class="test-info">
                        <span class="info-item">${t.time_info}</span>
                        <span class="info-item">${t.count_info}</span>
                        <span class="info-item">${t.privacy_info}</span>
                    </div>
                    <button class="start-btn" onclick="app.startTest()">
                        <span class="btn-icon">🚀</span>
                        ${t.start_btn}
                    </button>
                </div>
            </div>
        `
  }

  renderTest() {
    const t = this.t
    const question = this.questions[this.currentQuestion]
    const progress = ((this.currentQuestion + 1) / this.questions.length) * 100

    let optionsHtml = ""
    const options = Array.isArray(question.options) 
      ? question.options 
      : Object.values(question.options)
    
    options.forEach((option, index) => {
      const checked = this.answers[this.currentQuestion] === index ? "checked" : ""
      const selected = this.answers[this.currentQuestion] === index ? "selected" : ""
      optionsHtml += `
                <label class="option ${selected}">
                    <input type="radio" name="option" value="${index}" ${checked} onchange="app.selectOption(${index})">
                    ${option}
                </label>
            `
    })

    return `
            <div class="container test-page">
                <div class="test-header">
                    <div class="progress">
                        <div class="progress-bar" style="width: ${progress}%"></div>
                    </div>
                    <h3>${t.question_label} ${this.currentQuestion + 1}/${this.questions.length}</h3>
                </div>

                <div class="question-container">
                    <div class="question-text">${question.question || question.text}</div>
                    <div class="options">
                        ${optionsHtml}
                    </div>
                </div>

                <div class="test-footer">
                    <button class="btn btn-secondary" onclick="app.previousQuestion()" ${this.currentQuestion === 0 ? "disabled" : ""}>${t.prev_btn}</button>
                    <button class="btn btn-primary" onclick="app.nextQuestion()" ${this.answers[this.currentQuestion] === undefined ? "disabled" : ""}>
                        ${this.currentQuestion === this.questions.length - 1 ? t.submit_btn : t.next_btn}
                    </button>
                </div>
            </div>
        `
  }

  renderResult() {
    const t = this.t
    if (!this.result) {
      return `
                <div class="container result-page">
                    <h2>${t.result_title}</h2>
                    <div class="result-loading">
                        <div class="spinner"></div>
                        <p style="margin-top: 16px;">${t.result_loading}</p>
                    </div>
                </div>
            `
    }

    const animal = this.animals.find(a => a.id === this.result.animalId)
    if (!animal) return "Error: Animal not found"

    const traitHtml = animal.traits.map((trait) => `<span class="trait">${trait}</span>`).join("")
    
    // Direct access to analysis from data
    const detailedAnalysis = animal.analysis

    return `
      <div class="result-container">
        <div class="result-header">
          <div class="animal-emoji">${animal.emoji}</div>
          <h2 class="animal-name">${animal.name}</h2>
          <p class="animal-traits">${traitHtml}</p>
        </div>
        
        <div class="animal-description">
          <h3>${t.analysis_titles.desc}</h3>
          <p>${animal.description}</p>
        </div>

        <div class="detailed-analysis">
          <h3>${t.analysis_titles.deep}</h3>
          
          <div class="analysis-section">
            <h4>${t.analysis_titles.core}</h4>
            <p>${detailedAnalysis.coreTraits}</p>
          </div>
          
          <div class="analysis-section">
            <h4>${t.analysis_titles.social}</h4>
            <p>${detailedAnalysis.socialStyle}</p>
          </div>
          
          <div class="analysis-section">
            <h4>${t.analysis_titles.work}</h4>
            <p>${detailedAnalysis.workStyle}</p>
          </div>
          
          <div class="analysis-section">
            <h4>${t.analysis_titles.emotional}</h4>
            <p>${detailedAnalysis.emotionalExpression}</p>
          </div>
          
          <div class="analysis-section">
            <h4>${t.analysis_titles.growth}</h4>
            <p>${detailedAnalysis.growthAdvice}</p>
          </div>
        </div>

        <div class="compatibility-analysis">
          <h3>${t.analysis_titles.compat}</h3>
          
          <div class="compatibility-section">
            <h4>${t.analysis_titles.best}</h4>
            <p>${detailedAnalysis.bestMatches}</p>
          </div>
          
          <div class="compatibility-section">
            <h4>${t.analysis_titles.conflict}</h4>
            <p>${detailedAnalysis.potentialConflicts}</p>
          </div>
        </div>

        <div class="result-actions">
          <button onclick="app.retestQuestion()" class="btn-secondary">${t.actions.retest}</button>
          <button onclick="app.goToAnimals()" class="btn-primary">${t.actions.all_animals}</button>
        </div>
      </div>
    `
  }

  renderAnimals() {
    const t = this.t
    let animalsHtml = ""
    this.animals.forEach((animal) => {
      animalsHtml += `
                <div class="animal-card">
                    <div class="emoji">${animal.emoji}</div>
                    <div class="name">${animal.name}</div>
                    <div class="desc">${animal.description.substring(0, 50)}...</div>
                </div>
            `
    })

    return `
            <div class="container animals-page">
                <div class="back-header" onclick="app.goToHome()">${t.actions.back}</div>
                <h2>${t.actions.animals_title}</h2>
                <div class="subtitle">${t.actions.animals_subtitle}</div>
                <div class="animals-grid">
                    ${animalsHtml}
                </div>
            </div>
        `
  }

  selectOption(index) {
    this.answers[this.currentQuestion] = index
    this.render()
  }

  nextQuestion() {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++
      this.render()
    } else {
      this.submitTest()
    }
  }

  previousQuestion() {
    if (this.currentQuestion > 0) {
      this.currentQuestion--
      this.render()
    }
  }

  startTest() {
    this.currentPage = "test"
    this.currentQuestion = 0
    this.answers = []
    this.render()
  }

  submitTest() {
    this.currentPage = "result"
    this.result = null
    this.render()

    setTimeout(() => {
      this.calculateResult()
    }, 2000)
  }

  calculateResult() {
    const scores = {}
    animalTypes.forEach((type) => {
      scores[type.key] = 0
    })

    this.answers.forEach((answerIndex, questionIndex) => {
      animalTypes.forEach((type) => {
        const animalScores = animalMap[type.key]
        if (animalScores) {
             scores[type.key] += animalScores[questionIndex] === answerIndex ? 1 : 0
        }
      })
    })

    let maxScore = -1
    let maxScoreType = null

    Object.entries(scores).forEach(([type, score]) => {
      if (score > maxScore) {
        maxScore = score
        maxScoreType = type
      }
    })

    const resultType = animalTypes.find((type) => type.key === maxScoreType)
    
    this.result = {
      animalId: resultType.id,
      scores: scores
    }
    this.render()
  }
  
  setupMobileOptimizations() {
    document.addEventListener("dblclick", (e) => {
      e.preventDefault()
    }, { passive: false })
  }
  
  attachTestEvents() {}
  attachResultEvents() {}
  attachAnimalsEvents() {}
  
  retestQuestion() {
      this.startTest();
  }
  
  goToAnimals() {
      this.currentPage = "animals";
      this.render();
  }
  
  goToHome() {
      this.currentPage = "home";
      this.render();
  }
}

const app = new AnimalTest()
window.app = app;
