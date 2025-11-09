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
                    <h3>← 上一题</h3>
                    <div class="progress">
                        <div class="progress-bar" style="width: ${progress}%"></div>
                    </div>
                    <h3>问题 ${this.currentQuestion + 1}/${questions.length}</h3>
                </div>

                <div class="question-container">
                    <div class="question-text">${question.question || question.text}</div>
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
    
    // 生成详细的分析报告
    const detailedAnalysis = this.generateDetailedAnalysis(animal)

    return `
      <div class="result-container">
        <div class="result-header">
          <div class="animal-emoji">${animal.emoji}</div>
          <h2 class="animal-name">${animal.name}</h2>
          <p class="animal-traits">${traitHtml}</p>
        </div>
        
        <div class="animal-description">
          <h3>🌟 性格描述</h3>
          <p>${animal.description}</p>
        </div>

        <!-- 详细分析报告 -->
        <div class="detailed-analysis">
          <h3>🔍 深度性格分析</h3>
          
          <div class="analysis-section">
            <h4>核心特质</h4>
            <p>${detailedAnalysis.coreTraits}</p>
          </div>
          
          <div class="analysis-section">
            <h4>社交风格</h4>
            <p>${detailedAnalysis.socialStyle}</p>
          </div>
          
          <div class="analysis-section">
            <h4>工作风格</h4>
            <p>${detailedAnalysis.workStyle}</p>
          </div>
          
          <div class="analysis-section">
            <h4>情感表达</h4>
            <p>${detailedAnalysis.emotionalExpression}</p>
          </div>
          
          <div class="analysis-section">
            <h4>成长建议</h4>
            <p>${detailedAnalysis.growthAdvice}</p>
          </div>
        </div>

        <!-- 兼容性分析 -->
        <div class="compatibility-analysis">
          <h3>🤝 与其他动物型互动</h3>
          
          <div class="compatibility-section">
            <h4>最佳拍档</h4>
            <p>${detailedAnalysis.bestMatches}</p>
          </div>
          
          <div class="compatibility-section">
            <h4>潜在冲突</h4>
            <p>${detailedAnalysis.potentialConflicts}</p>
          </div>
        </div>

        <div class="result-actions">
          <button onclick="app.retestQuestion()" class="btn-secondary">重新测试</button>
          <button onclick="app.goToAnimals()" class="btn-primary">查看所有动物</button>
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

  generateDetailedAnalysis(animal) {
    const analysis = {
      coreTraits: "",
      socialStyle: "",
      workStyle: "",
      emotionalExpression: "",
      growthAdvice: "",
      bestMatches: "",
      potentialConflicts: ""
    }

    // 根据动物类型生成详细分析
    switch (animal.name) {
      case "狗":
        analysis.coreTraits = "忠诚是你的代名词，你拥有强烈的责任感和集体意识。你的情感表达直接而真诚，总是愿意为他人付出。";
        analysis.socialStyle = "你是天生的社交高手，喜欢群体生活，善于建立和维持关系。你的存在让周围的人感到安全和温暖。";
        analysis.workStyle = "你擅长团队合作，执行力强，能够忠实地完成任务。你的可靠性和责任感让你成为团队中不可或缺的一员。";
        analysis.emotionalExpression = "你的情感表达直接而热烈，喜欢通过行动来表达爱意。你需要被需要的感觉，渴望归属感。";
        analysis.growthAdvice = "学会在付出和自我保护之间找到平衡，不要忽视自己的需求。有时候，适当的独立也是必要的成长。";
        analysis.bestMatches = "你与猫型（独立而优雅）和兔型（温和而敏感）最为契合，能够形成互补的关系。";
        analysis.potentialConflicts = "可能与过于独立或冷漠的动物型产生摩擦，需要学会尊重彼此的差异。";
        break;
      
      case "猫":
        analysis.coreTraits = "独立是你的核心特质，你拥有丰富的内心世界和独特的思维方式。你的优雅和神秘让人着迷。";
        analysis.socialStyle = "你享受独处，但并不排斥社交。你更倾向于深度而非广度的关系，选择性地建立连接。";
        analysis.workStyle = "你擅长独立工作，创造力强，能够在安静的环境中发挥最大潜力。你的专注力和洞察力是你的优势。";
        analysis.emotionalExpression = "你的情感表达含蓄而细腻，需要时间去建立信任。一旦建立连接，你会展现出深厚的情感。";
        analysis.growthAdvice = "学会在保持独立的同时，适当开放自己。有时候，与他人分享你的想法和感受会带来意想不到的收获。";
        analysis.bestMatches = "你与狗型（忠诚而热情）和水豚型（随和而稳定）能够形成良好的互补关系。";
        analysis.potentialConflicts = "可能与过于依赖或控制欲强的动物型产生冲突，需要保持适当的边界。";
        break;
      
      case "狼":
        analysis.coreTraits = "领导力是你的天赋，你拥有强烈的使命感和战略思维。你的坚韧和团结精神让你成为天然的领袖。";
        analysis.socialStyle = "你重视群体，有强烈的归属感。你善于组织和协调，能够在团队中发挥核心作用。";
        analysis.workStyle = "你擅长战略规划，执行力强，能够带领团队达成目标。你的决断力和责任感是你的优势。";
        analysis.emotionalExpression = "你的情感表达深沉而忠诚，对群体和信念有着强烈的归属感。你需要被尊重和认可。";
        analysis.growthAdvice = "学会在领导和倾听之间找到平衡，不要忽视团队成员的声音。有时候，授权比控制更能体现领导力。";
        analysis.bestMatches = "你与狐型（智慧而策略）和狮型（自信而有魅力）能够形成强大的联盟。";
        analysis.potentialConflicts = "可能与过于独立或反权威的动物型产生冲突，需要学会尊重个体差异。";
        break;
      
      case "狐":
        analysis.coreTraits = "智慧是你的标志，你拥有敏锐的洞察力和出色的适应能力。你的策略思维和独立性让你在复杂环境中游刃有余。";
        analysis.socialStyle = "你是聪明的观察者，善于分析和判断。你倾向于独立行动，但在需要时能够巧妙地融入群体。";
        analysis.workStyle = "你擅长解决复杂问题，适应力强，能够在变化中找到机会。你的智慧和灵活性是你的优势。";
        analysis.emotionalExpression = "你的情感表达理性而克制，善于隐藏真实感受。你需要安全感和自主权，不喜欢被束缚。";
        analysis.growthAdvice = "学会在保持独立的同时，适当展现脆弱。有时候，信任他人也是智慧的一种表现。";
        analysis.bestMatches = "你与狼型（领导而团结）和章鱼型（智慧而多变）能够形成智慧的共鸣。";
        analysis.potentialConflicts = "可能与过于直接或简单的动物型产生误解，需要学会用更直接的方式沟通。";
        break;
      
      case "狮":
        analysis.coreTraits = "王者风范是你的特质，你拥有强烈的自信和天生的魅力。你的存在本身就是一种宣告，充满力量和威严。";
        analysis.socialStyle = "你是天生的表演家，喜欢成为焦点。你慷慨大方，善于激励他人，享受被崇拜的感觉。";
        analysis.workStyle = "你擅长领导和表现，创造力强，能够在舞台上发挥最大潜力。你的自信和影响力是你的优势。";
        analysis.emotionalExpression = "你的情感表达热烈而直接，喜欢通过行动和表现来表达自己。你需要被欣赏和赞美。";
        analysis.growthAdvice = "学会在表现和倾听之间找到平衡，不要忽视他人的贡献。有时候，谦逊比炫耀更能赢得尊重。";
        analysis.bestMatches = "你与狼型（领导而团结）和鹰型（远见而高傲）能够形成强大的合作关系。";
        analysis.potentialConflicts = "可能与过于低调或反权威的动物型产生冲突，需要学会尊重不同的价值观。";
        break;
      
      case "熊":
        analysis.coreTraits = "力量与稳定是你的特质，你拥有深沉的内在力量和强烈的保护欲。你的存在给人以安全感和依靠。";
        analysis.socialStyle = "你温和而包容，善于倾听和支持他人。你享受安静的环境，但在需要时会展现出强大的力量。";
        analysis.workStyle = "你擅长长期规划和稳定执行，耐力强，能够在压力下保持稳定。你的可靠性和包容性是你的优势。";
        analysis.emotionalExpression = "你的情感表达深沉而稳定，不轻易表露，但一旦建立连接就会非常忠诚。你需要安全感和稳定。";
        analysis.growthAdvice = "学会在保持稳重的同時，适当展现活力。有时候，灵活性比固执更能适应变化。";
        analysis.bestMatches = "你与鹿型（温柔而自然）和鲸型（深邃而包容）能够形成稳定而深厚的关系。";
        analysis.potentialConflicts = "可能与过于轻浮或冲动的动物型产生摩擦，需要学会适应不同的节奏。";
        break;
      
      case "兔":
        analysis.coreTraits = "温和与敏感是你的特质，你拥有细腻的情感和强烈的同情心。你的存在让环境变得更加和谐。";
        analysis.socialStyle = "你友善而体贴，善于倾听和理解他人。你避免冲突，寻求和谐，是和平的使者。";
        analysis.workStyle = "你擅长细致的工作，耐心强，能够在安静的环境中发挥最佳水平。你的敏感性和同理心是你的优势。";
        analysis.emotionalExpression = "你的情感表达细腻而丰富，容易受到环境影响。你需要安全感和支持，不喜欢压力和冲突。";
        analysis.growthAdvice = "学会在保持温和的同时，适当展现勇气。有时候，面对冲突比逃避更能促进成长。";
        analysis.bestMatches = "你与狗型（忠诚而热情）和天鹅型（优雅而高贵）能够形成温柔而美好的关系。";
        analysis.potentialConflicts = "可能与过于直接或强势的动物型产生压力，需要学会设立健康的边界。";
        break;
      
      case "仓鼠":
        analysis.coreTraits = "专注与安逸是你的特质，你享受自己的小世界，善于在简单中找到快乐。你的存在给人以稳定和可靠的感觉。";
        analysis.socialStyle = "你内向而友好，喜欢小圈子的深度交流。你不追求广泛的社交，而是珍惜少数的深厚友谊。";
        analysis.workStyle = "你擅长专注的工作，细致入微，能够在重复的任务中找到满足感。你的专注力和耐心是你的优势。";
        analysis.emotionalExpression = "你的情感表达温和而稳定，不喜欢剧烈的情绪波动。你需要安全感和熟悉的环境。";
        analysis.growthAdvice = "学会在保持专注的同时，适当拓展视野。有时候，变化也能带来新的机遇和成长。";
        analysis.bestMatches = "你与猫型（独立而优雅）和水豚型（随和而稳定）能够形成舒适而稳定的关系。";
        analysis.potentialConflicts = "可能与过于活跃或变化的动物型产生不适，需要学会适应不同的节奏。";
        break;
      
      case "天鹅":
        analysis.coreTraits = "优雅与完美是你的特质，你拥有高尚的品味和对美的极致追求。你的存在本身就是一种艺术品。";
        analysis.socialStyle = "你高贵而有距离感，但并不冷漠。你选择性地建立关系，追求精神上的契合和外在的和谐。";
        analysis.workStyle = "你擅长需要审美和品味的工作，追求完美，能够在艺术和创意领域发挥最佳水平。你的品味和坚持是你的优势。";
        analysis.emotionalExpression = "你的情感表达优雅而克制，不轻易表露，但一旦建立连接就会非常忠诚和深情。";
        analysis.growthAdvice = "学会在追求完美的同时，接受不完美。有时候，真实比完美更能打动人心。";
        analysis.bestMatches = "你与鹿型（温柔而灵性）和鹰型（高傲而专注）能够形成优雅而高尚的关系。";
        analysis.potentialConflicts = "可能与过于粗俗或随意的动物型产生不适，需要学会欣赏不同的美。";
        break;
      
      case "鹿":
        analysis.coreTraits = "温柔与灵性是你的特质，你拥有纯净的心灵和对自然的亲近感。你的存在给人以宁静和治愈。";
        analysis.socialStyle = "你温和而敏感，善于感受和理解他人。你寻求和谐的关系，避免冲突，是和平的维护者。";
        analysis.workStyle = "你擅长需要敏感性和创造力的工作，直觉强，能够在艺术和疗愈领域发挥最佳水平。你的敏感性和直觉是你的优势。";
        analysis.emotionalExpression = "你的情感表达细腻而丰富，容易受到环境和他人情绪的影响。你需要安全感和自然的环境。";
        analysis.growthAdvice = "学会在保持敏感的同时，增强内在的力量。有时候，坚强比脆弱更能保护自己。";
        analysis.bestMatches = "你与兔型（温和而敏感）和熊型（力量而稳定）能够形成温柔而稳固的关系。";
        analysis.potentialConflicts = "可能与过于粗鲁或侵略性的动物型产生不适，需要学会保护自己。";
        break;
      
      case "鹰":
        analysis.coreTraits = "远见与独立是你的特质，你拥有高远的视野和强烈的自主意识。你的存在给人以方向和力量。";
        analysis.socialStyle = "你高傲而独立，喜欢独处和思考。你不轻易建立关系，但一旦建立就会非常忠诚和专注。";
        analysis.workStyle = "你擅长需要远见和策略的工作，视野开阔，能够在规划和决策领域发挥最佳水平。你的远见和决断力是你的优势。";
        analysis.emotionalExpression = "你的情感表达深沉而内敛，不轻易表露，但内心有着强烈的情感和忠诚。";
        analysis.growthAdvice = "学会在保持独立的同时，适当降低高度。有时候，亲近比疏远更能建立连接。";
        analysis.bestMatches = "你与狮型（王者而魅力）和狼型（领导而团结）能够形成强大而有远见的关系。";
        analysis.potentialConflicts = "可能与过于依赖或琐碎的动物型产生不耐，需要学会耐心和理解。";
        break;
      
      case "乌鸦":
        analysis.coreTraits = "智慧与神秘是你的特质，你拥有敏锐的洞察力和出色的学习能力。你的存在给人以智慧和启发。";
        analysis.socialStyle = "你聪明而好奇，善于观察和学习。你有复杂的社会结构，擅长合作和沟通，但有时显得神秘。";
        analysis.workStyle = "你擅长需要智慧和策略的工作，学习能力强，能够在解决问题和创新领域发挥最佳水平。你的智慧和适应力是你的优势。";
        analysis.emotionalExpression = "你的情感表达复杂而多变，善于隐藏真实感受，但内心有着丰富的情感世界。";
        analysis.growthAdvice = "学会在保持神秘的同时，适当展现真实。有时候，透明比神秘更能建立信任。";
        analysis.bestMatches = "你与狐型（智慧而策略）和章鱼型（智慧而多变）能够形成智慧而深刻的关系。";
        analysis.potentialConflicts = "可能与过于简单或直接的人产生误解，需要学会用更直接的方式沟通。";
        break;
      
      case "水豚":
        analysis.coreTraits = "随和与稳定是你的特质，你拥有平和的心态和强大的情绪调节能力。你的存在给人以平静和安慰。";
        analysis.socialStyle = "你友善而包容，能够与各种类型的人和相处。你不强求关系，而是用随和的态度接纳一切。";
        analysis.workStyle = "你擅长需要耐心和稳定性的工作，情绪稳定，能够在协调和调解领域发挥最佳水平。你的稳定性和包容力是你的优势。";
        analysis.emotionalExpression = "你的情感表达平和而稳定，不易受到外界影响，能够保持内心的平静和和谐。";
        analysis.growthAdvice = "学会在保持随和的同时，适当展现主见。有时候，坚持比随和更能实现目标。";
        analysis.bestMatches = "你与猫型（独立而优雅）和仓鼠型（专注而安逸）能够形成舒适而和谐的关系。";
        analysis.potentialConflicts = "可能与过于激烈或情绪化的动物型产生不适，需要学会保持自己的节奏。";
        break;
      
      case "鲸":
        analysis.coreTraits = "深邃与包容是你的特质，你拥有古老的智慧和宽广的胸怀。你的存在给人以深度和力量。";
        analysis.socialStyle = "你深沉而包容，能够理解和接纳不同的观点。你既能融入集体，又保持个体的独特性。";
        analysis.workStyle = "你擅长需要深度和广度的工作，视野开阔，能够在领导和指导领域发挥最佳水平。你的智慧和包容力是你的优势。";
        analysis.emotionalExpression = "你的情感表达深沉而宽广，如同海洋一样，既能包容万物，又有着内在的力量。";
        analysis.growthAdvice = "学会在保持深邃的同时，适当浮出水面。有时候，表达比隐藏更能建立连接。";
        analysis.bestMatches = "你与熊型（力量而稳定）和鹿型（温柔而灵性）能够形成深厚而稳固的关系。";
        analysis.potentialConflicts = "可能与过于肤浅或浮躁的动物型产生不耐，需要学会耐心和理解。";
        break;
      
      case "鹦鹉":
        analysis.coreTraits = "聪明与活力是你的特质，你拥有出色的学习能力和表达能力。你的存在给人以欢乐和活力。";
        analysis.socialStyle = "你活泼而社交，喜欢与人互动和交流。你是群体中的开心果，善于调节气氛和传递信息。";
        analysis.workStyle = "你擅长需要沟通和表达的工作，学习能力强，能够在教育和娱乐领域发挥最佳水平。你的活力和适应力是你的优势。";
        analysis.emotionalExpression = "你的情感表达直接而丰富，喜欢通过语言和行动来表达自己，情绪变化快但真诚。";
        analysis.growthAdvice = "学会在保持活力的同时，适当深度思考。有时候，深度比广度更能带来成长。";
        analysis.bestMatches = "你与狗型（忠诚而热情）和猴型（活泼而聪慧）能够形成活跃而欢乐的关系。";
        analysis.potentialConflicts = "可能与过于严肃或内向的动物型产生摩擦，需要学会适应不同的交流方式。";
        break;
      
      case "章鱼":
        analysis.coreTraits = "智慧与多变是你的特质，你拥有出色的适应能力和创造力。你的存在给人以惊喜和启发。";
        analysis.socialStyle = "你独立而神秘，善于适应不同的环境。你有独特的视角和解决问题的方式，喜欢独立思考和行动。";
        analysis.workStyle = "你擅长需要创造力和适应性的工作，思维灵活，能够在变化和创新领域发挥最佳水平。你的创造力和适应力是你的优势。";
        analysis.emotionalExpression = "你的情感表达复杂而多变，善于适应不同的情况，但保持内在的独立性和独特性。";
        analysis.growthAdvice = "学会在保持多变的同时，适当保持稳定。有时候，坚持比变化更能实现目标。";
        analysis.bestMatches = "你与狐型（智慧而策略）和乌鸦型（智慧而神秘）能够形成智慧而深刻的关系。";
        analysis.potentialConflicts = "可能与过于僵化或保守的动物型产生冲突，需要学会适应不同的思维方式。";
        break;
      
      default:
        analysis.coreTraits = "你拥有独特的性格特质，值得深入探索和了解。";
        analysis.socialStyle = "你的社交风格独特，需要找到适合自己的交往方式。";
        analysis.workStyle = "你的工作方式独特，能够在适合的领域发挥优势。";
        analysis.emotionalExpression = "你的情感表达方式独特，需要被理解和接纳。";
        analysis.growthAdvice = "保持真实，继续探索和成长，你会发现更多的可能性。";
        analysis.bestMatches = "与理解你的人建立连接，会形成美好的关系。";
        analysis.potentialConflicts = "学会与不同的人相处，是成长的重要部分。";
    }

    return analysis
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
