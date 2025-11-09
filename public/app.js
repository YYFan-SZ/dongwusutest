// 动物塑测试应用主逻辑
// 数据变量已从data.js加载，这里直接使用

class AnimalTest {
  constructor() {
    this.currentPage = "home"
    this.currentQuestion = 0
    this.answers = []
    this.result = null
    this.init()
  }

  init() {
    this.render()
  }

  render() {
    const app = document.getElementById("app")

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
                    <h1>动物塑测试</h1>
                    <h2>发现你内心的动物本能</h2>
                    <div class="intro-text">
                        <p>🧠 <strong>60道专业设计题目</strong> - 基于心理学和动物行为学</p>
                        <p>🎯 <strong>12种动物原型</strong> - 从狼的领导力到猫的独立性</p>
                        <p>🔍 <strong>深度性格分析</strong> - 了解你的优势、特质和潜在能力</p>
                        <p>✨ <strong>个性化建议</strong> - 基于你的动物塑形象的成长指导</p>
                    </div>
                </div>
                
                <div class="warning-box">
                    <span class="warning-icon">⚠️</span>
                    <div class="warning-content">
                        <strong>温馨提示：</strong>本测试仅供娱乐和自我探索参考，结果并非绝对标准。每个人的性格都是独特的，动物塑形象只是帮助你更好地了解自己的一个有趣视角。
                    </div>
                </div>
                
                <div class="start-section">
                    <div class="test-info">
                        <span class="info-item">⏱️ 预计用时：8-12分钟</span>
                        <span class="info-item">📊 题目数量：60道</span>
                        <span class="info-item">🔒 完全匿名</span>
                    </div>
                    <button class="start-btn" onclick="app.startTest()">
                        <span class="btn-icon">🚀</span>
                        开始探索你的动物本能
                    </button>
                </div>
                
                <div class="footer">
                    
                </div>
            </div>
        `
  }

  renderTest() {
    const question = questions[this.currentQuestion]
    const progress = ((this.currentQuestion + 1) / questions.length) * 100

    let optionsHtml = ""
    question.options.forEach((option, index) => {
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
                    <h3>← 上一题</h3>
                    <div class="progress">
                        <div class="progress-bar" style="width: ${progress}%"></div>
                    </div>
                    <h3>问题 ${this.currentQuestion + 1}/${questions.length}</h3>
                </div>

                <div class="question-container">
                    <div class="question-text">${question.text}</div>
                    <div class="options">
                        ${optionsHtml}
                    </div>
                </div>

                <div class="test-footer">
                    <button class="btn btn-secondary" onclick="app.previousQuestion()" ${this.currentQuestion === 0 ? "disabled" : ""}>上一题</button>
                    <button class="btn btn-primary" onclick="app.nextQuestion()" ${this.answers[this.currentQuestion] === undefined ? "disabled" : ""}>
                        ${this.currentQuestion === questions.length - 1 ? "提交" : "下一题"}
                    </button>
                </div>
            </div>
        `
  }

  renderResult() {
    if (!this.result) {
      return `
                <div class="container result-page">
                    <h2>动物塑解析 · 完成</h2>
                    <div class="result-loading">
                        <div class="spinner"></div>
                        <p style="margin-top: 16px;">正在解析你的动物塑形象</p>
                    </div>
                </div>
            `
    }

    const animal = this.result.animal
    const traitHtml = animal.traits.map((trait) => `<span class="trait">${trait}</span>`).join("")

    return `
            <div class="container result-page">
                <div class="back-header" onclick="app.goToHome()">← 返回结果</div>
                <h2>你的动物塑原型是：</h2>
                
                <div class="animal-result">
                    <div class="animal-emoji">${animal.emoji}</div>
                    <div class="animal-name">${animal.name}</div>
                    <div class="traits">${traitHtml}</div>
                    <div class="animal-description">${animal.description}</div>
                </div>

                <div class="result-actions">
                    <button class="btn btn-primary" onclick="app.retestQuestion()">再测一次</button>
                    <button class="btn btn-secondary" onclick="app.goToAnimals()">浏览所有动物塑</button>
                </div>
            </div>
        `
  }

  renderAnimals() {
    let animalsHtml = ""
    animals.forEach((animal) => {
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
                <div class="back-header" onclick="app.goToHome()">← 返回结果</div>
                <h2>动物塑图鉴</h2>
                <div class="subtitle">这里是所有可能的动物塑原型及其解析：</div>
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
    if (this.currentQuestion < questions.length - 1) {
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

    // 模拟延迟后计算结果
    setTimeout(() => {
      this.calculateResult()
    }, 2000)
  }

  calculateResult() {
    const scores = {}
    animalTypes.forEach((type) => {
      scores[type.key] = 0
    })

    // 计算每种动物类型的分数
    this.answers.forEach((answerIndex, questionIndex) => {
      animalTypes.forEach((type) => {
        const animalScores = animalMap[type.key]
        scores[type.key] += animalScores[questionIndex] === answerIndex ? 1 : 0
      })
    })

    // 找出得分最高的动物
    let maxScore = -1
    let resultAnimal = null
    animalTypes.forEach((type) => {
      if (scores[type.key] > maxScore) {
        maxScore = scores[type.key]
        resultAnimal = animals.find((a) => a.name === type.name)
      }
    })

    this.result = {
      animal: resultAnimal,
      scores: scores,
    }

    this.render()
  }

  goToHome() {
    this.currentPage = "home"
    this.answers = []
    this.currentQuestion = 0
    this.result = null
    this.render()
  }

  goToAnimals() {
    this.currentPage = "animals"
    this.render()
  }

  retestQuestion() {
    this.startTest()
  }

  attachTestEvents() {
    // 事件已通过 onclick 绑定
  }

  attachResultEvents() {
    // 事件已通过 onclick 绑定
  }

  attachAnimalsEvents() {
    // 事件已通过 onclick 绑定
  }
}

// 初始化应用
const app = new AnimalTest()
