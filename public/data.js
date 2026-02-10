// 60道测试题目 (Chinese)
const questions_zh = [
  { question: "世界是一片漆黑的森林，你选择成为？", options: { A: "手持火把的引路人，为后来者照亮方向。", B: "潜伏在暗处的观察者，收集信息但不轻易现身。", C: "无所畏惧的独行者，相信自己的力量能劈开黑暗。", D: "与森林融为一体的隐者，成为自然法则的一部分。" } },
  { question: "当面临困难挑战时，你通常会：", options: { A: "冷静分析方案，制定最优策略。", B: "主动寻求帮助，相信团队力量。", C: "坚持独自解决，证明自己的价值。", D: "灵活调整思路，适应环境变化。" } },
  { question: "在社交场合中，你的表现是：", options: { A: "中心人物，活跃气氛，成为焦点。", B: "认真倾听，贡献想法，建立深度连接。", C: "观察者角色，默默收集信息。", D: "选择知心人深交，追求质量而非数量。" } },
  { question: "面对失败时，你的反应通常是：", options: { A: "反思改进策略，理性总结经验。", B: "寻求鼓励继续尝试，从情感上恢复。", C: "倍增努力力度，用更强的实力证明自己。", D: "重新规划方向，寻找更适合的道路。" } },
  { question: "你的工作风格更接近于：", options: { A: "精确高效，追求完美执行。", B: "协作共赢，重视团队合作。", C: "领导决策，掌控全局方向。", D: "创新探索，不断突破边界。" } },
  { question: "休闲时间你倾向于：", options: { A: "阅读学习，充实内心世界。", B: "与朋友社交，享受人际互动。", C: "独立活动，享受独处时光。", D: "新奇体验，探索未知领域。" } },
  { question: "面对变化，你的态度是：", options: { A: "需要时间适应，循序渐进调整。", B: "主动拥抱变化，视其为成长机会。", C: "谨慎观察，评估风险后再行动。", D: "灵活应对，随时调整策略。" } },
  { question: "与他人产生分歧时，你会：", options: { A: "理性讨论，用事实和逻辑说服。", B: "寻求共识，找到双方都能接受的方案。", C: "坚守立场，不轻易妥协原则。", D: "换位思考，理解对方观点的合理性。" } },
  { question: "你的学习方式更偏好：", options: { A: "系统学习，建立完整的知识体系。", B: "团队学习，在交流中获得启发。", C: "实践体验，通过亲身经历掌握。", D: "自主探索，按自己的节奏和兴趣。" } },
  { question: "日常生活中，你最重视：", options: { A: "稳定和谐，营造安全的环境。", B: "新鲜刺激，保持生活的激情。", C: "自由独立，掌控自己的人生。", D: "意义价值，追求精神的满足。" } },
  { question: "遇到他人困难时，你会：", options: { A: "提供实际帮助，解决具体问题。", B: "给予精神支持，传递温暖和力量。", C: "直接点评，指出问题所在。", D: "理解陪伴，与对方共同面对。" } },
  { question: "你对工作的期待是：", options: { A: "稳定保障，提供安全感。", B: "充满挑战，激发潜能。", C: "自我实现，实现个人价值。", D: "团队成就，共同创造辉煌。" } },
  { question: "在创意活动中，你通常：", options: { A: "按照规范，确保质量稳定。", B: "积极参与，贡献自己的想法。", C: "推动创新，打破常规思维。", D: "提供建议，从不同角度启发。" } },
  { question: "你的日程安排倾向于：", options: { A: "精确计划，严格执行时间表。", B: "灵活调整，根据情况变化。", C: "紧张充实，最大化利用时间。", D: "从容应对，保持轻松节奏。" } },
  { question: "与陌生人接触时，你会：", options: { A: "谨慎观察，先了解对方。", B: "热情主动，快速建立联系。", C: "有距离感，保持适当边界。", D: "主动交流，展现真实自我。" } },
  { question: "面对工作压力，你的方法是：", options: { A: "系统管理，分解任务逐步解决。", B: "寻求支持，与他人分担压力。", C: "激情投入，用热情克服困难。", D: "调整心态，从积极角度看待。" } },
  { question: "你的沟通风格是：", options: { A: "准确简洁，直击要点。", B: "温暖包容，照顾他人感受。", C: "直言不讳，坦诚表达观点。", D: "多元表达，运用多种方式。" } },
  { question: "在争取资源时，你会：", options: { A: "理性争论，用逻辑说服对方。", B: "寻求帮助，借助他人力量。", C: "主动竞争，展现自己的优势。", D: "创新获取，寻找独特方法。" } },
  { question: "你对规则的态度是：", options: { A: "严格遵守，维护秩序。", B: "理解尊重，在框架内行动。", C: "战略应用，灵活运用规则。", D: "灵活变通，根据实际情况调整。" } },
  { question: "在危急时刻，你倾向于：", options: { A: "冷静判断，分析形势。", B: "凭感觉决策，相信直觉。", C: "快速行动，抢占先机。", D: "寻求共识，集体决策。" } },
  { question: "你是一痤岛屿，你希望别人如何登岛？", options: { A: "我会建立一座坚固的桥，只让我认可的人通过。", B: "我的海岸线很长，欢迎任何人停靠，但中心区域不对外开放。", C: "我会用迷雾将自己环绕，只有最执着的人才能找到航线。", D: "我是一座会移动的岛，只在特定的时候与大陆连接。" } },
  { question: "在一段关系中，你更像一个？", options: { A: "给予对方温暖和光明的\"恒星\"。", B: "守护对方提供庇护的\"港湾\"。", C: "引领对方探索未知世界的\"向导\"。", D: "与对方共舞相互映照的\"月亮\"。" } },
  { question: "你的朋友被一只巨大的棉花糖怪兽困住了，你冲过去的第一反应是？", options: { A: "大喊：\"别动！让我分析一下它的弱点！\"", B: "抄起一个巨大的勺子：\"朋友挺住！我来帮你吃出一条路！\"", C: "陪他静静坐着，然后拿出手机自拍。", D: "冷静地指挥：\"你左边三步，然后跳起来！\"" } },
  { question: "你最不能容忍的\"背叛\"是？", options: { A: "谎言与欺骗。", B: "在我最需要的时候转身离开。", C: "将我的秘密公之于众。", D: "因为懦弱而放弃了我俿的共同目标。" } },
  { question: "当你深爱一个人时，你更倾向于如何表达这份感情？", options: { A: "默默地为对方做好许多事，但从不主动提起。", B: "将对方纳入自己未来的规划，并为其扫清障碍。", C: "与对方分享自己最隐秘的精神世界和独特的发现。", D: "创造只属于两个人的共同经历和冒险回忆。" } },
  { question: "你理想的伴侣关系是？", options: { A: "两棵独立的树，根在地下紧紧相连。", B: "一团火焰，相互燃烧，照亮彼此。", C: "一个安全的洞穴，共同抵御外界的风雨。", D: "两只一同翱翔的鹰，共享同一片天空。" } },
  { question: "在群体中，你最舒服的位置是？", options: { A: "在舞台的聚光灯下。", B: "在人群边缘，做一个冷静的观察者。", C: "在亲密的小圈子里，被温暖和信任包围。", D: "在队伍的最前方，带领大家前进。" } },
  { question: "一个路过的小精灵对你比了个心，你会？", options: { A: "迅速回一个更酷的手势。", B: "开心地比一个更大的心，并附赠一个wink。", C: "脸一红，害羞地低下头，但嘴角忍不住上扬。", D: "礼貌性地点点头，然后在心里给它的可爱程度打个分。" } },
  { question: "你认为最浪漫的事是？", options: { A: "在暴风雨的夜晚，共享一杯热茶。", B: "一场说走就走充满未知的冒险。", C: "读懂对方一个眼神里所有未说出口的话。", D: "共同创造一个只属于你们的、伟大的作品。" } },
  { question: "你会为什么样的人\"拼命\"？", options: { A: "为那个点燃我灵魂之火的人。", B: "为我视为\"家人\"的整个群体。", C: "为那个无条件信任我、依赖我的人。", D: "为值得我追随的拥有共同信念的领袖。" } },
  { question: "如果爱是一种\"馈赠\"，你倾向于给予？", options: { A: "我最珍贵的收藏。", B: "我全部的时间和陪伴。", C: "我绝对的忠诚和保护。", D: "我对世界的理解和智慧。" } },
  { question: "当关系结束时，你更像是？", options: { A: "冰封的火山，外冷内热。", B: "改道的河流，奔向新的海洋。", C: "被砍掉枝干的树，需要漫长的春天才能发芽。", D: "被风吹散的云，形态改变，本质依旧。" } },
  { question: "在一场化妆舞会上，你觉得哪种装扮最能吸引到\"对的人\"？", options: { A: "戴着乌鸦面具的神秘魔术师。", B: "穿着毛茸茸恐龙睡衣的派对核心。", C: "假扮成一棵树，安静地待在角落。", D: "穿着未来感十足的银色盔甲的神明。" } },
  { question: "你更希望被如何\"记住\"？", options: { A: "一个有趣的灵魂，一个传奇的故事。", B: "一个可靠的朋友，一个温暖的港湾。", C: "一个优雅的谜，一段美丽的风景。", D: "一个伟大的领袖，一个时代的开创者。" } },
  { question: "你最想对这个世界说的一句话是？", options: { A: "\"嘘，听。\"", B: "\"一起玩吧！\"", C: "\"别怕，有我呢。\"", D: "\"看好了。\"" } },
  { question: "你在一场必须分出胜负的游戏中，你的策略是？", options: { A: "精心布局，诱敌深入，最后一击致命。", B: "用绝对的力量或气势正面碾压。", C: "找到规则的漏洞，用意想不到的方式获胜。", D: "结成联盟，牺牲局部，换取最终的集体胜利。" } },
  { question: "你得到了一份藏宝图，但标注了\"极度危险\"，你会？", options: { A: "独自前往，宝藏和秘密只属于我一人。", B: "组建一支精英团队，共享收益与风险。", C: "把它卖给更有能力的人，换取眼前的利益。", D: "先花大量时间研究地图，分析所有风险，再做决定。" } },
  { question: "面对挑衅，你的第一反应是？", options: { A: "一个冷酷的眼神，让对方知难而退。", B: "一声响亮的咆哮，宣示我的底线。", C: "转身离开，不与傻瓜论长短。", D: "微笑，但在心里已经将对方盘算了一遍。" } },
  { question: "你认为\"权力\"的本质是？", options: { A: "制定规则的资格。", B: "保护所爱之人的能力。", C: "一种可以交换一切的筹码。", D: "一种沉重的责任。" } },
  { question: "在\"真心话大冒险\"游戏中，你发现了一个必胜BUG，你会？", options: { A: "暗中利用，精准地让某人说秘密。", B: "大声告诉所有人，然后玩点更刺激的！", C: "假装不知道，享受提心吊胆的感觉。", D: "利用BUG让游戏和平结束，去看电影。" } },
  { question: "你更擅长？", options: { A: "在混乱中创造秩序。", B: "在秩序中制造惊喜。", C: "适应任何环境，像水一样无形。", D: "建立一个全新的属于自己的体系。" } },
  { question: "一个巨大的机遇摆在你面前，但需要你放弃现在的安稳生活，你？", options: { A: "赌一把，人生需要激情。", B: "极度纠结，反复衡量得失。", C: "算了，安稳比什么都重要。", D: "如果这个机遇符合我的长远规划，就去。" } },
  { question: "你认为\"权力\"的本质是？", options: { A: "制定规则的资格。", B: "保护所爱之人的能力。", C: "一种可以交换一切的筹码。", D: "一种沉重的责任。" } },
  { question: "在\"真心话大冒险\"游戏中，你发现了一个必胜BUG，你会？", options: { A: "暗中利用，精准地让某人说秘密。", B: "大声告诉所有人，然后玩点更刺激的！", C: "假装不知道，享受提心吊胆的感觉。", D: "利用BUG让游戏和平结束，去看电影。" } },
  { question: "你更擅长？", options: { A: "在混乱中创造秩序。", B: "在秩序中制造惊喜。", C: "适应任何环境，像水一样无形。", D: "建立一个全新的属于自己的体系。" } },
  { question: "一个巨大的机遇摆在你面前，但需要你放弃现在的安稳生活，你？", options: { A: "赌一把，人生需要激情。", B: "极度纠结，反复衡量得失。", C: "算了，安稳比什么都重要。", D: "如果这个机遇符合我的长远规划，就去。" } },
  { question: "如果爱是\"一种馈赠\"，你倾向于给予？", options: { A: "我最珍贵的收藏。", B: "我全部的时间和陪伴。", C: "我绝对的忠诚和保护。", D: "我对世界的理解和智慧。" } },
  { question: "你会为什么样的人\"拼命\"？", options: { A: "为那个点燃我灵魂之火的人。", B: "为我视为\"家人\"的整个群体。", C: "为那个无条件信任我、依赖我的人。", D: "为值得我追随的拥有共同信念的领袖。" } },
  { question: "你认为最\"性感\"的特质是？", options: { A: "饱经沧桑后依旧清澈的眼神。", B: "毫不掩饰的原始的生命力。", C: "在混乱中依旧保持从容的优雅。", D: "专注做某件事时，遗世独立的气质。" } },
  { question: "如果必须选择一种感官来放大十倍，你会选？", options: { A: "听觉，聆听万物的低语和弦外之音。", B: "触觉，感受世界的质地和温度。", C: "嗅觉，捕捉空气中隐藏的信息和记忆。", D: "视觉，看穿表象，洞察世界的结构。" } },
  { question: "你觉得自己的\"情绪\"更像什么？", options: { A: "\"后台运行\"模式，表面风平浪静，CPU已经算到冒烟。", B: "\"弹幕分享\"功能，把所有内心OS都发到好友群里。", C: "\"飞行模式\"，一键断开所有连接，谢绝打扰。", D: "\"静音模式\"，所有通知都只显示角标，不发出任何声音。" } },
  { question: "你如何看待自己的\"阴暗面\"？", options: { A: "是我力量的源泉，需要被理解和掌控。", B: "是需要努力克服的弱点。", C: "只是的我一部分，没必要大惊小怪。", D: "我尽量忽略它，不去想它。" } },
  { question: "你渴望拥有的\"知识\"是？", options: { A: "看透人心的能力。", B: "与自然万物沟通的语言。", C: "预测未来的水晶球。", D: "解锁宇宙终极规律的钥匙。" } },
  { question: "死亡来临时，你希望它是何种形态？", options: { A: "如秋叶般静美地飘落，回归大地。", B: "像烟花一样，在最绚烂的瞬间燃烧殆尽。", C: "像一场远航，驶向未知的星辰大海。", D: "像一场酣睡，在最温暖的梦中不再醒来。" } },
  { question: "你认为自己最大的优点是？", options: { A: "冷静理性的分析能力。", B: "温暖包容的同理心。", C: "坚定不移的意志力。", D: "灵活多变的适应能力。" } },
  { question: "面对未知的未来，你的态度是？", options: { A: "谨慎规划，步步为营。", B: "充满期待，积极拥抱。", C: "无所畏惧，勇往直前。", D: "顺其自然，随波逐流。" } },
  { question: "在团队合作中，你通常扮演的角色是？", options: { A: "策划者，制定详细计划。", B: "协调者，促进团队和谐。", C: "领导者，指引前进方向。", D: "创新者，提供新奇想法。" } },
  { question: "你如何处理过去的失败经历？", options: { A: "深度反思，总结经验教训。", B: "寻求支持，疗愈情感创伤。", C: "加倍努力，证明自己能够成功。", D: "放下过去，寻找新的机会。" } },
  { question: "什么样的环境让你感到最舒适？", options: { A: "井然有序，一切都在掌控中。", B: "温馨和谐，充满人情味。", C: "挑战不断，能够激发潜能。", D: "自由开放，允许个性发展。" } },
  { question: "你认为自己最需要改进的是？", options: { A: "过于理性，缺乏情感表达。", B: "过于迁就，需要更多主见。", C: "过于固执，需要学会妥协。", D: "过于散漫，需要增强专注。" } }
];

// 60 Questions (English)
const questions_en = [
  { question: "The world is a dark forest. You choose to become?", options: { A: "A torchbearer, lighting the way for others.", B: "A lurker in the shadows, gathering intel unseen.", C: "A fearless loner, believing your power can split the darkness.", D: "A hermit merged with the forest, part of natural law." } },
  { question: "When facing difficult challenges, you usually:", options: { A: "Calmly analyze and devise the best strategy.", B: "Seek help, trusting in team power.", C: "Persist alone, proving your own value.", D: "Flexibly adjust thoughts, adapting to changes." } },
  { question: "In social situations, your behavior is:", options: { A: "The center of attention, livening up the mood.", B: "Listening carefully, contributing ideas, building deep connections.", C: "An observer, silently collecting information.", D: "Choosing confidants for deep friendship, quality over quantity." } },
  { question: "When facing failure, your reaction is usually:", options: { A: "Reflect and improve strategies, rationally summarizing experience.", B: "Seek encouragement to continue, recovering emotionally.", C: "Double the effort, proving yourself with stronger strength.", D: "Replan direction, finding a more suitable path." } },
  { question: "Your work style is closer to:", options: { A: "Precise and efficient, pursuing perfect execution.", B: "Collaborative win-win, valuing teamwork.", C: "Leadership decision-making, controlling the overall direction.", D: "Innovative exploration, constantly breaking boundaries." } },
  { question: "In your leisure time, you tend to:", options: { A: "Read and learn, enriching your inner world.", B: "Socialize with friends, enjoying interpersonal interaction.", C: "Independent activities, enjoying solitude.", D: "Novel experiences, exploring unknown areas." } },
  { question: "Facing change, your attitude is:", options: { A: "Need time to adapt, adjusting gradually.", B: "Actively embrace change, seeing it as a growth opportunity.", C: "Cautiously observe, assessing risks before acting.", D: "Flexibly respond, adjusting strategies at any time." } },
  { question: "When disagreeing with others, you will:", options: { A: "Discuss rationally, persuading with facts and logic.", B: "Seek consensus, finding a solution acceptable to both.", C: "Stick to your position, not easily compromising principles.", D: "Empathize, understanding the rationality of the other's view." } },
  { question: "Your learning style prefers:", options: { A: "Systematic learning, building a complete knowledge system.", B: "Team learning, gaining inspiration in communication.", C: "Practical experience, mastering through personal experience.", D: "Independent exploration, following your own pace and interests." } },
  { question: "In daily life, you value most:", options: { A: "Stability and harmony, creating a safe environment.", B: "Fresh stimulation, maintaining passion for life.", C: "Freedom and independence, controlling your own life.", D: "Meaning and value, pursuing spiritual satisfaction." } },
  { question: "When others are in trouble, you will:", options: { A: "Provide practical help, solving specific problems.", B: "Give spiritual support, conveying warmth and strength.", C: "Directly comment, pointing out the problem.", D: "Understand and accompany, facing it together." } },
  { question: "Your expectation for work is:", options: { A: "Stable security, providing a sense of safety.", B: "Full of challenges, stimulating potential.", C: "Self-realization, realizing personal value.", D: "Team achievement, creating brilliance together." } },
  { question: "In creative activities, you usually:", options: { A: "Follow standards, ensuring stable quality.", B: "Participate actively, contributing your own ideas.", C: "Promote innovation, breaking conventional thinking.", D: "Provide suggestions, inspiring from different angles." } },
  { question: "Your schedule tends to be:", options: { A: "Precise planning, strictly following the timetable.", B: "Flexible adjustment, changing according to the situation.", C: "Tense and fulfilling, maximizing time usage.", D: "Calm response, maintaining a relaxed pace." } },
  { question: "When contacting strangers, you will:", options: { A: "Observe cautiously, understanding the other first.", B: "Enthusiastic and active, quickly establishing contact.", C: "Have a sense of distance, maintaining appropriate boundaries.", D: "Actively communicate, showing your true self." } },
  { question: "Facing work pressure, your method is:", options: { A: "Systematic management, breaking down tasks to solve gradually.", B: "Seek support, sharing pressure with others.", C: "Passionate investment, overcoming difficulties with enthusiasm.", D: "Adjust mindset, viewing from a positive perspective." } },
  { question: "Your communication style is:", options: { A: "Accurate and concise, hitting the point.", B: "Warm and inclusive, caring for others' feelings.", C: "Outspoken, frankly expressing views.", D: "Diverse expression, using multiple ways." } },
  { question: "When fighting for resources, you will:", options: { A: "Argue rationally, persuading with logic.", B: "Seek help, leveraging others' strength.", C: "Actively compete, showing your advantages.", D: "Acquire innovatively, finding unique methods." } },
  { question: "Your attitude towards rules is:", options: { A: "Strictly observe, maintaining order.", B: "Understand and respect, acting within the framework.", C: "Strategic application, using rules flexibly.", D: "Flexible adaptation, adjusting according to actual situation." } },
  { question: "In a crisis, you tend to:", options: { A: "Judge calmly, analyzing the situation.", B: "Decide by feeling, trusting intuition.", C: "Act quickly, seizing the opportunity.", D: "Seek consensus, collective decision-making." } },
  { question: "You are an island. How do you want others to land?", options: { A: "I will build a strong bridge, only for those I approve.", B: "My coastline is long, welcoming anyone, but the center is closed.", C: "I will surround myself with mist; only the persistent find the way.", D: "I am a moving island, connecting to the mainland only at specific times." } },
  { question: "In a relationship, you are more like?", options: { A: "A 'star' giving warmth and light to the other.", B: "A 'harbor' guarding and providing shelter.", C: "A 'guide' leading the other to explore unknown worlds.", D: "A 'moon' dancing with and reflecting the other." } },
  { question: "Your friend is trapped by a giant marshmallow monster. Your first reaction?", options: { A: "Shout: 'Don't move! Let me analyze its weakness!'", B: "Grab a giant spoon: 'Hold on! I'll eat a way out!'", C: "Sit quietly with them, then take a selfie.", D: "Calmly command: 'Three steps left, then jump!'" } },
  { question: "The 'betrayal' you cannot tolerate most is?", options: { A: "Lies and deception.", B: "Turning away when I need you most.", C: "Making my secrets public.", D: "Giving up our common goal due to cowardice." } },
  { question: "When you love someone deeply, you tend to?", options: { A: "Silently do many things for them, never mentioning it.", B: "Include them in your future plans and clear obstacles.", C: "Share your most secret spiritual world and unique discoveries.", D: "Create common experiences and adventure memories just for two." } },
  { question: "Your ideal partner relationship is?", options: { A: "Two independent trees, roots tightly connected underground.", B: "A ball of fire, burning together, illuminating each other.", C: "A safe cave, resisting outside wind and rain together.", D: "Two eagles soaring together, sharing the same sky." } },
  { question: "In a group, your most comfortable position is?", options: { A: "Under the spotlight on stage.", B: "On the edge of the crowd, a calm observer.", C: "In a close small circle, surrounded by warmth and trust.", D: "At the front of the team, leading everyone forward." } },
  { question: "A passing elf makes a heart sign at you. You will?", options: { A: "Quickly return a cooler gesture.", B: "Happily make a bigger heart, adding a wink.", C: "Blush, lower head shyly, but corners of mouth rise.", D: "Politely nod, then rate its cuteness in your heart." } },
  { question: "What you consider the most romantic thing is?", options: { A: "Sharing a cup of hot tea on a stormy night.", B: "An adventure full of unknowns, leaving immediately.", C: "Understanding all unspoken words in one look.", D: "Creating a great work belonging only to you two." } },
  { question: "For what kind of person would you 'risk your life'?", options: { A: "For the one who ignites the fire of my soul.", B: "For the whole group I regard as 'family'.", C: "For the one who unconditionally trusts and relies on me.", D: "For the leader with common beliefs worth following." } },
  { question: "If love is a 'gift', you tend to give?", options: { A: "My most precious collection.", B: "All my time and companionship.", C: "My absolute loyalty and protection.", D: "My understanding and wisdom of the world." } },
  { question: "When a relationship ends, you are more like?", options: { A: "A frozen volcano, cold outside, hot inside.", B: "A diverted river, rushing to a new ocean.", C: "A tree with cut branches, needing a long spring to sprout.", D: "A cloud blown away by wind, shape changed, essence remains." } },
  { question: "In a masquerade, which outfit attracts the 'right person'?", options: { A: "A mysterious magician with a crow mask.", B: "Party core in fluffy dinosaur pajamas.", C: "Disguised as a tree, quietly staying in the corner.", D: "A god in futuristic silver armor." } },
  { question: "How do you wish to be 'remembered'?", options: { A: "An interesting soul, a legendary story.", B: "A reliable friend, a warm harbor.", C: "An elegant mystery, a beautiful scenery.", D: "A great leader, a pioneer of the times." } },
  { question: "The one sentence you want to say to the world?", options: { A: "'Shh, listen.'", B: "'Let's play together!'", C: "'Don't fear, I'm here.'", D: "'Watch this.'" } },
  { question: "In a game where there must be a winner, your strategy is?", options: { A: "Careful layout, luring the enemy deep, fatal blow.", B: "Frontal crush with absolute power or momentum.", C: "Find rule loopholes, win in unexpected ways.", D: "Form an alliance, sacrifice parts for final collective victory." } },
  { question: "You got a treasure map marked 'extremely dangerous'. You will?", options: { A: "Go alone; treasure and secrets belong only to me.", B: "Form an elite team, sharing benefits and risks.", C: "Sell it to someone capable for immediate profit.", D: "Spend time studying the map, analyzing risks before deciding." } },
  { question: "Facing provocation, your first reaction is?", options: { A: "A cold look, making the other retreat.", B: "A loud roar, declaring my bottom line.", C: "Turn away, don't argue with fools.", D: "Smile, but calculating the other person in mind." } },
  { question: "You think the essence of 'power' is?", options: { A: "Qualification to make rules.", B: "Ability to protect loved ones.", C: "A chip that can exchange for everything.", D: "A heavy responsibility." } },
  { question: "In 'Truth or Dare', you found a winning BUG. You will?", options: { A: "Use it secretly to make someone tell a secret.", B: "Tell everyone loudly, then play something more exciting!", C: "Pretend not to know, enjoying the thrill.", D: "Use the BUG to end the game peacefully and watch a movie." } },
  { question: "You are better at?", options: { A: "Creating order in chaos.", B: "Creating surprises in order.", C: "Adapting to any environment, formless like water.", D: "Building a brand new system of your own." } },
  { question: "A huge opportunity requires giving up stability. You?", options: { A: "Gamble, life needs passion.", B: "Extremely tangled, weighing gains and losses repeatedly.", C: "Forget it, stability is more important than anything.", D: "If it fits my long-term plan, go for it." } },
  { question: "You think the essence of 'power' is?", options: { A: "Qualification to make rules.", B: "Ability to protect loved ones.", C: "A chip that can exchange for everything.", D: "A heavy responsibility." } },
  { question: "In 'Truth or Dare', you found a winning BUG. You will?", options: { A: "Use it secretly to make someone tell a secret.", B: "Tell everyone loudly, then play something more exciting!", C: "Pretend not to know, enjoying the thrill.", D: "Use the BUG to end the game peacefully and watch a movie." } },
  { question: "You are better at?", options: { A: "Creating order in chaos.", B: "Creating surprises in order.", C: "Adapting to any environment, formless like water.", D: "Building a brand new system of your own." } },
  { question: "A huge opportunity requires giving up stability. You?", options: { A: "Gamble, life needs passion.", B: "Extremely tangled, weighing gains and losses repeatedly.", C: "Forget it, stability is more important than anything.", D: "If it fits my long-term plan, go for it." } },
  { question: "If love is a 'gift', you tend to give?", options: { A: "My most precious collection.", B: "All my time and companionship.", C: "My absolute loyalty and protection.", D: "My understanding and wisdom of the world." } },
  { question: "For what kind of person would you 'risk your life'?", options: { A: "For the one who ignites the fire of my soul.", B: "For the whole group I regard as 'family'.", C: "For the one who unconditionally trusts and relies on me.", D: "For the leader with common beliefs worth following." } },
  { question: "What do you consider the most 'sexy' trait?", options: { A: "Clear eyes after weathering storms.", B: "Unadorned primitive vitality.", C: "Elegance maintained amidst chaos.", D: "Detached temperament when focused on something." } },
  { question: "If you must amplify one sense 10x, you choose?", options: { A: "Hearing, listening to whispers of all things.", B: "Touch, feeling texture and temperature of the world.", C: "Smell, capturing hidden information and memories.", D: "Vision, seeing through appearances to structure." } },
  { question: "You feel your 'emotions' are more like?", options: { A: "'Background run' mode, calm surface, CPU smoking.", B: "'Bullet screen share', sending all inner OS to group chat.", C: "'Flight mode', disconnecting all, no disturbance.", D: "'Silent mode', notifications show badges but no sound." } },
  { question: "How do you view your 'dark side'?", options: { A: "Source of my power, needs understanding and control.", B: "Weakness that needs effort to overcome.", C: "Just part of me, no need to fuss.", D: "I try to ignore it and not think about it." } },
  { question: "The 'knowledge' you crave is?", options: { A: "Ability to see through people's hearts.", B: "Language to communicate with nature.", C: "Crystal ball to predict the future.", D: "Key to unlock ultimate laws of the universe." } },
  { question: "When death comes, you hope it takes the form of?", options: { A: "Falling like autumn leaves, returning to earth.", B: "Like fireworks, burning out in the most brilliant moment.", C: "Like a voyage, sailing to unknown stars and seas.", D: "Like a sound sleep, never waking up from a warm dream." } },
  { question: "You think your greatest strength is?", options: { A: "Calm and rational analytical ability.", B: "Warm and inclusive empathy.", C: "Unwavering willpower.", D: "Flexible and changeable adaptability." } },
  { question: "Facing an unknown future, your attitude is?", options: { A: "Careful planning, step by step.", B: "Full of expectation, actively embracing.", C: "Fearless, marching forward courageously.", D: "Go with the flow, drifting with the waves." } },
  { question: "In teamwork, you usually play the role of?", options: { A: "Planner, making detailed plans.", B: "Coordinator, promoting team harmony.", C: "Leader, guiding the forward direction.", D: "Innovator, providing novel ideas." } },
  { question: "How do you handle past failures?", options: { A: "Deep reflection, summarizing lessons.", B: "Seek support, healing emotional trauma.", C: "Double effort, proving ability to succeed.", D: "Let go of the past, looking for new opportunities." } },
  { question: "What environment makes you most comfortable?", options: { A: "Orderly, everything under control.", B: "Warm and harmonious, full of human touch.", C: "Constant challenges, stimulating potential.", D: "Free and open, allowing personality development." } },
  { question: "What do you think you need to improve most?", options: { A: "Too rational, lacking emotional expression.", B: "Too accommodating, need more own opinion.", C: "Too stubborn, need to learn to compromise.", D: "Too scattered, need to enhance focus." } }
];

// 16 Animal Prototypes (Chinese with Analysis)
const animals_zh = [
  {
    id: 1, name: "狗", emoji: "🐶", traits: ["忠诚", "热情", "守护", "陪伴"],
    description: "你是忠诚的伙伴与热情的守护者。你的世界围绕着'我们'展开，无论是家人、朋友还是团队。你擅长建立连接，给予温暖，并在群体中找到自己的价值。你的快乐简单而纯粹，来源于陪伴与被需要。",
    analysis: {
      coreTraits: "忠诚是你的代名词，你拥有强烈的责任感和集体意识。你的情感表达直接而真诚，总是愿意为他人付出。",
      socialStyle: "你是天生的社交高手，喜欢群体生活，善于建立和维持关系。你的存在让周围的人感到安全和温暖。",
      workStyle: "你擅长团队合作，执行力强，能够忠实地完成任务。你的可靠性和责任感让你成为团队中不可或缺的一员。",
      emotionalExpression: "你的情感表达直接而热烈，喜欢通过行动来表达爱意。你需要被需要的感觉，渴望归属感。",
      growthAdvice: "学会在付出和自我保护之间找到平衡，不要忽视自己的需求。有时候，适当的独立也是必要的成长。",
      bestMatches: "你与猫型（独立而优雅）和兔型（温和而敏感）最为契合，能够形成互补的关系。",
      potentialConflicts: "可能与过于独立或冷漠的动物型产生摩擦，需要学会尊重彼此的差异。"
    }
  },
  {
    id: 2, name: "猫", emoji: "🐱", traits: ["独立", "优雅", "神秘", "自我"],
    description: "你是优雅的独立思想家，神秘且自我满足。你享受独处，拥有丰富的内心世界。你行动敏捷，好奇心强，但只对自己感兴趣的事物投入精力。你的魅力在于那份若即若离的疏离感和无法预测的灵动。",
    analysis: {
      coreTraits: "独立是你的核心特质，你拥有丰富的内心世界和独特的思维方式。你的优雅和神秘让人着迷。",
      socialStyle: "你享受独处，但并不排斥社交。你更倾向于深度而非广度的关系，选择性地建立连接。",
      workStyle: "你擅长独立工作，创造力强，能够在安静的环境中发挥最大潜力。你的专注力和洞察力是你的优势。",
      emotionalExpression: "你的情感表达含蓄而细腻，需要时间去建立信任。一旦建立连接，你会展现出深厚的情感。",
      growthAdvice: "学会在保持独立的同时，适当开放自己。有时候，与他人分享你的想法和感受会带来意想不到的收获。",
      bestMatches: "你与狗型（忠诚而热情）和水豚型（随和而稳定）能够形成良好的互补关系。",
      potentialConflicts: "可能与过于依赖或控制欲强的动物型产生冲突，需要保持适当的边界。"
    }
  },
  {
    id: 3, name: "狼", emoji: "🐺", traits: ["领导力", "战略", "团结", "坚韧"],
    description: "你是天生的领袖与战略家，兼具力量与社群智慧。你既能独立思考，又能无缝地融入团队。你对目标执着，有强烈的责任感和领地意识，为了守护族群，你会展现出惊人的统御力和谋略。",
    analysis: {
      coreTraits: "领导力是你的天赋，你拥有强烈的使命感和战略思维。你的坚韧和团结精神让你成为天然的领袖。",
      socialStyle: "你重视群体，有强烈的归属感。你善于组织和协调，能够在团队中发挥核心作用。",
      workStyle: "你擅长战略规划，执行力强，能够带领团队达成目标。你的决断力和责任感是你的优势。",
      emotionalExpression: "你的情感表达深沉而忠诚，对群体和信念有着强烈的归属感。你需要被尊重和认可。",
      growthAdvice: "学会在领导和倾听之间找到平衡，不要忽视团队成员的声音。有时候，授权比控制更能体现领导力。",
      bestMatches: "你与狐型（智慧而策略）和狮型（自信而有魅力）能够形成强大的联盟。",
      potentialConflicts: "可能与过于独立或反权威的动物型产生冲突，需要学会尊重个体差异。"
    }
  },
  {
    id: 4, name: "狐", emoji: "🦊", traits: ["智慧", "机敏", "适应", "策略"],
    description: "你是机敏的策略家与孤独的观察者。你拥有超凡的智慧和适应能力，擅长在复杂的环境中找到最优解。你倾向于独立行动，用敏锐的洞察力规避风险，达成目标。你的生存哲学是'智取'而非'强攻'。",
    analysis: {
      coreTraits: "智慧是你的标志，你拥有敏锐的洞察力和出色的适应能力。你的策略思维和独立性让你在复杂环境中游刃有余。",
      socialStyle: "你是聪明的观察者，善于分析和判断。你倾向于独立行动，但在需要时能够巧妙地融入群体。",
      workStyle: "你擅长解决复杂问题，适应力强，能够在变化中找到机会。你的智慧和灵活性是你的优势。",
      emotionalExpression: "你的情感表达理性而克制，善于隐藏真实感受。你需要安全感和自主权，不喜欢被束缚。",
      growthAdvice: "学会在保持独立的同时，适当展现脆弱。有时候，信任他人也是智慧的一种表现。",
      bestMatches: "你与狼型（领导而团结）和章鱼型（智慧而多变）能够形成智慧的共鸣。",
      potentialConflicts: "可能与过于直接或简单的动物型产生误解，需要学会用更直接的方式沟通。"
    }
  },
  {
    id: 5, name: "狮", emoji: "🦁", traits: ["王者", "自信", "魅力", "威严"],
    description: "你是自信的王者，天生自带光环。你有强烈的统御欲和表现力，享受成为焦点的感觉。你慷慨、富有魅力，但有时也需要独处的空间来积蓄力量。你的存在本身就是一种宣告，充满力量与威严。",
    analysis: {
      coreTraits: "王者风范是你的特质，你拥有强烈的自信和天生的魅力。你的存在本身就是一种宣告，充满力量和威严。",
      socialStyle: "你是天生的表演家，喜欢成为焦点。你慷慨大方，善于激励他人，享受被崇拜的感觉。",
      workStyle: "你擅长领导和表现，创造力强，能够在舞台上发挥最大潜力。你的自信和影响力是你的优势。",
      emotionalExpression: "你的情感表达热烈而直接，喜欢通过行动和表现来表达自己。你需要被欣赏和赞美。",
      growthAdvice: "学会在表现和倾听之间找到平衡，不要忽视他人的贡献。有时候，谦逊比炫耀更能赢得尊重。",
      bestMatches: "你与狼型（领导而团结）和鹰型（远见而高傲）能够形成强大的合作关系。",
      potentialConflicts: "可能与过于低调或反权威的动物型产生冲突，需要学会尊重不同的价值观。"
    }
  },
  {
    id: 6, name: "熊", emoji: "🐻", traits: ["力量", "沉稳", "守护", "内敛"],
    description: "你是沉稳的守护者，强大而内敛。你大部分时间安静、平和，享受自己的节奏，但当领地或家人受到威胁时，会爆发出无与伦比的力量。你重视安全感，喜欢为自己和亲近的人建立一个舒适、安全的庇护所。",
    analysis: {
      coreTraits: "力量与稳定是你的特质，你拥有深沉的内在力量和强烈的保护欲。你的存在给人以安全感和依靠。",
      socialStyle: "你温和而包容，善于倾听和支持他人。你享受安静的环境，但在需要时会展现出强大的力量。",
      workStyle: "你擅长长期规划和稳定执行，耐力强，能够在压力下保持稳定。你的可靠性和包容性是你的优势。",
      emotionalExpression: "你的情感表达深沉而稳定，不轻易表露，但一旦建立连接就会非常忠诚。你需要安全感和稳定。",
      growthAdvice: "学会在保持稳重的同時，适当展现活力。有时候，灵活性比固执更能适应变化。",
      bestMatches: "你与鹿型（温柔而自然）和鲸型（深邃而包容）能够形成稳定而深厚的关系。",
      potentialConflicts: "可能与过于轻浮或冲动的动物型产生摩擦，需要学会适应不同的节奏。"
    }
  },
  {
    id: 7, name: "兔", emoji: "🐰", traits: ["温和", "敏感", "机警", "和平"],
    description: "你是警觉的和平主义者，敏捷且富有同情心。你极度需要安全感，对环境变化非常敏感。你行动迅速，擅长躲避冲突。虽然有时会显得胆小，但你在熟悉和安全的小圈子里，会展现出活泼、温和的一面。",
    analysis: {
      coreTraits: "温和与敏感是你的特质，你拥有细腻的情感和强烈的同情心。你的存在让环境变得更加和谐。",
      socialStyle: "你友善而体贴，善于倾听和理解他人。你避免冲突，寻求和谐，是和平的使者。",
      workStyle: "你擅长细致的工作，耐心强，能够在安静的环境中发挥最佳水平。你的敏感性和同理心是你的优势。",
      emotionalExpression: "你的情感表达细腻而丰富，容易受到环境影响。你需要安全感和支持，不喜欢压力和冲突。",
      growthAdvice: "学会在保持温和的同时，适当展现勇气。有时候，面对冲突比逃避更能促进成长。",
      bestMatches: "你与狗型（忠诚而热情）和天鹅型（优雅而高贵）能够形成温柔而美好的关系。",
      potentialConflicts: "可能与过于直接或强势的动物型产生压力，需要学会设立健康的边界。"
    }
  },
  {
    id: 8, name: "仓鼠", emoji: "🐹", traits: ["囤积", "专注", "安逸", "小确幸"],
    description: "你是专注的囤积者与安逸的生活家。你最大的幸福来自于建立一个充满安全感的'小窝'。你喜欢收集和整理，无论是物质还是信息。你享受在自己的小世界里自得其乐，对外界的纷扰保持着一种可爱的迟钝。",
    analysis: {
      coreTraits: "专注与安逸是你的特质，你享受自己的小世界，善于在简单中找到快乐。你的存在给人以稳定和可靠的感觉。",
      socialStyle: "你内向而友好，喜欢小圈子的深度交流。你不追求广泛的社交，而是珍惜少数的深厚友谊。",
      workStyle: "你擅长专注的工作，细致入微，能够在重复的任务中找到满足感。你的专注力和耐心是你的优势。",
      emotionalExpression: "你的情感表达温和而稳定，不喜欢剧烈的情绪波动。你需要安全感和熟悉的环境。",
      growthAdvice: "学会在保持专注的同时，适当拓展视野。有时候，变化也能带来新的机遇和成长。",
      bestMatches: "你与猫型（独立而优雅）和水豚型（随和而稳定）能够形成舒适而稳定的关系。",
      potentialConflicts: "可能与过于活跃或变化的动物型产生不适，需要学会适应不同的节奏。"
    }
  },
  {
    id: 9, name: "天鹅", emoji: "🦢", traits: ["优雅", "高贵", "忠诚", "完美"],
    description: "你是优雅的理想主义者，对美有着极致的追求。你姿态高贵，带有一种天生的距离感，但内心深处对伴侣和家庭极为忠诚。你的世界里，精神的契合与外在的和谐同样重要，绝不容忍粗俗与将就。",
    analysis: {
      coreTraits: "优雅与完美是你的特质，你拥有高尚的品味和对美的极致追求。你的存在本身就是一种艺术品。",
      socialStyle: "你高贵而有距离感，但并不冷漠。你选择性地建立关系，追求精神上的契合和外在的和谐。",
      workStyle: "你擅长需要审美和品味的工作，追求完美，能够在艺术和创意领域发挥最佳水平。你的品味和坚持是你的优势。",
      emotionalExpression: "你的情感表达优雅而克制，不轻易表露，但一旦建立连接就会非常忠诚和深情。",
      growthAdvice: "学会在追求完美的同时，接受不完美。有时候，真实比完美更能打动人心。",
      bestMatches: "你与鹿型（温柔而灵性）和鹰型（高傲而专注）能够形成优雅而高尚的关系。",
      potentialConflicts: "可能与过于粗俗或随意的动物型产生不适，需要学会欣赏不同的美。"
    }
  },
  {
    id: 10, name: "鹿", emoji: "🦌", traits: ["温柔", "自然", "敏感", "灵性"],
    description: "你是温和的自然之子，敏感而优雅。你对美和宁静有着天生的向往，常常沉浸在自己的精神世界里。你警惕性高，需要安全的环境才能放松。你的美在于那份不染尘埃的纯净和与自然融为一体的灵性。",
    analysis: {
      coreTraits: "温柔与灵性是你的特质，你拥有纯净的心灵和对自然的亲近感。你的存在给人以宁静和治愈。",
      socialStyle: "你温和而敏感，善于感受和理解他人。你寻求和谐的关系，避免冲突，是和平的维护者。",
      workStyle: "你擅长需要敏感性和创造力的工作，直觉强，能够在艺术和疗愈领域发挥最佳水平。你的敏感性和直觉是你的优势。",
      emotionalExpression: "你的情感表达细腻而丰富，容易受到环境和他人情绪的影响。你需要安全感和自然的环境。",
      growthAdvice: "学会在保持敏感的同时，增强内在的力量。有时候，坚强比脆弱更能保护自己。",
      bestMatches: "你与兔型（温和而敏感）和熊型（力量而稳定）能够形成温柔而稳固的关系。",
      potentialConflicts: "可能与过于粗鲁或侵略性的动物型产生不适，需要学会保护自己。"
    }
  },
  {
    id: 11, name: "鹰", emoji: "🦅", traits: ["远见", "高傲", "专注", "独立"],
    description: "你是高傲的远见者，拥有无与伦比的视野和决心。你习惯于从高处审视全局，制定长远的目标。你享受孤独，因为那能让你看得更清。你的力量不仅在于捕猎的利爪，更在于那份凌驾于一切之上的独立意志和宏大格局。",
    analysis: {
      coreTraits: "远见与独立是你的特质，你拥有高远的视野和强烈的自主意识。你的存在给人以方向和力量。",
      socialStyle: "你高傲而独立，喜欢独处和思考。你不轻易建立关系，但一旦建立就会非常忠诚和专注。",
      workStyle: "你擅长需要远见和策略的工作，视野开阔，能够在规划和决策领域发挥最佳水平。你的远见和决断力是你的优势。",
      emotionalExpression: "你的情感表达深沉而内敛，不轻易表露，但内心有着强烈的情感和忠诚。",
      growthAdvice: "学会在保持独立的同时，适当降低高度。有时候，亲近比疏远更能建立连接。",
      bestMatches: "你与狮型（王者而魅力）和狼型（领导而团结）能够形成强大而有远见的关系。",
      potentialConflicts: "可能与过于依赖或琐碎的动物型产生不耐，需要学会耐心和理解。"
    }
  },
  {
    id: 12, name: "乌鸦", emoji: "🐦‍⬛", traits: ["智慧", "神秘", "沟通", "洞察"],
    description: "你是聪慧的谜题解决者与信息的传递者。你拥有极高的智商和好奇心，善于观察、学习和使用工具。你具有复杂的社会结构，擅长合作与沟通。在别人看来，你或许有些神秘甚至不祥，但这正是你智慧的保护色。",
    analysis: {
      coreTraits: "智慧与神秘是你的特质，你拥有敏锐的洞察力和出色的学习能力。你的存在给人以智慧和启发。",
      socialStyle: "你聪明而好奇，善于观察和学习。你有复杂的社会结构，擅长合作和沟通，但有时显得神秘。",
      workStyle: "你擅长需要智慧和策略的工作，学习能力强，能够在解决问题和创新领域发挥最佳水平。你的智慧和适应力是你的优势。",
      emotionalExpression: "你的情感表达复杂而多变，善于隐藏真实感受，但内心有着丰富的情感世界。",
      growthAdvice: "学会在保持神秘的同时，适当展现真实。有时候，透明比神秘更能建立信任。",
      bestMatches: "你与狐型（智慧而策略）和章鱼型（智慧而多变）能够形成智慧而深刻的关系。",
      potentialConflicts: "可能与过于简单或直接的人产生误解，需要学会用更直接的方式沟通。"
    }
  },
  {
    id: 13, name: "水豚", emoji: "🐻‍🦫", traits: ["随和", "稳定", "社交", "佛系"],
    description: "你是随和的社交大师，情绪稳定，万物皆可为友。你的存在本身就能给周围带来平静与和谐。你享受社群生活，但从不强求，用一种'佛系'的态度接纳一切。你的哲学是：放轻松，没什么大不了的。",
    analysis: {
      coreTraits: "随和与稳定是你的特质，你拥有平和的心态和强大的情绪调节能力。你的存在给人以平静和安慰。",
      socialStyle: "你友善而包容，能够与各种类型的人和相处。你不强求关系，而是用随和的态度接纳一切。",
      workStyle: "你擅长需要耐心和稳定性的工作，情绪稳定，能够在协调和调解领域发挥最佳水平。你的稳定性和包容力是你的优势。",
      emotionalExpression: "你的情感表达平和而稳定，不易受到外界影响，能够保持内心的平静和和谐。",
      growthAdvice: "学会在保持随和的同时，适当展现主见。有时候，坚持比随和更能实现目标。",
      bestMatches: "你与猫型（独立而优雅）和仓鼠型（专注而安逸）能够形成舒适而和谐的关系。",
      potentialConflicts: "可能与过于激烈或情绪化的动物型产生不适，需要学会保持自己的节奏。"
    }
  },
  {
    id: 14, name: "鲸", emoji: "🐋", traits: ["深邃", "智慧", "古老", "包容"],
    description: "你是深海的哲学家，古老而智慧。你承载着厚重的记忆，用深沉的歌声在广阔的社群中交流。你既能融入庞大的集体，又保持着个体的深邃孤独。你的内心像海洋一样，平静时包容万物，翻涌时充满力量。",
    analysis: {
      coreTraits: "深邃与包容是你的特质，你拥有古老的智慧和宽广的胸怀。你的存在给人以深度和力量。",
      socialStyle: "你深沉而包容，能够理解和接纳不同的观点。你既能融入集体，又保持个体的独特性。",
      workStyle: "你擅长需要深度和广度的工作，视野开阔，能够在领导和指导领域发挥最佳水平。你的智慧和包容力是你的优势。",
      emotionalExpression: "你的情感表达深沉而宽广，如同海洋一样，既能包容万物，又有着内在的力量。",
      growthAdvice: "学会在保持深邃的同时，适当浮出水面。有时候，表达比隐藏更能建立连接。",
      bestMatches: "你与熊型（力量而稳定）和鹿型（温柔而灵性）能够形成深厚而稳固的关系。",
      potentialConflicts: "可能与过于肤浅或浮躁的动物型产生不耐，需要学会耐心和理解。"
    }
  },
  {
    id: 15, name: "鹦鹉", emoji: "🦜", traits: ["聪明", "社交", "模仿", "活力"],
    description: "你是聪明的社交达人与天生的表演家。你热爱互动，擅长模仿和学习，是群体中的'开心果'和信息中心。你活泼好动，充满好奇心，总能给平淡的生活增添色彩和戏剧性。你的智慧体现在与他人的互动和交流中。",
    analysis: {
      coreTraits: "聪明与活力是你的特质，你拥有出色的学习能力和表达能力。你的存在给人以欢乐和活力。",
      socialStyle: "你活泼而社交，喜欢与人互动和交流。你是群体中的开心果，善于调节气氛和传递信息。",
      workStyle: "你擅长需要沟通和表达的工作，学习能力强，能够在教育和娱乐领域发挥最佳水平。你的活力和适应力是你的优势。",
      emotionalExpression: "你的情感表达直接而丰富，喜欢通过语言和行动来表达自己，情绪变化快但真诚。",
      growthAdvice: "学会在保持活力的同时，适当深度思考。有时候，深度比广度更能带来成长。",
      bestMatches: "你与狗型（忠诚而热情）和猴型（活泼而聪慧）能够形成活跃而欢乐的关系。",
      potentialConflicts: "可能与过于严肃或内向的动物型产生摩擦，需要学会适应不同的交流方式。"
    }
  },
  {
    id: 16, name: "章鱼", emoji: "🐙", traits: ["智慧", "多变", "适应", "策略"],
    description: "你是深海的智者与伪装大师。你拥有惊人的智慧和解决问题的能力，身体的每一次变形都是一次策略的展现。你习惯于独立思考和行动，用多角度的视野审视世界。你的适应力和创造力让你在复杂环境中游刃有余。",
    analysis: {
      coreTraits: "智慧与多变是你的特质，你拥有出色的适应能力和创造力。你的存在给人以惊喜和启发。",
      socialStyle: "你独立而神秘，善于适应不同的环境。你有独特的视角和解决问题的方式，喜欢独立思考和行动。",
      workStyle: "你擅长需要创造力和适应性的工作，思维灵活，能够在变化和创新领域发挥最佳水平。你的创造力和适应力是你的优势。",
      emotionalExpression: "你的情感表达复杂而多变，善于适应不同的情况，但保持内在的独立性和独特性。",
      growthAdvice: "学会在保持多变的同时，适当保持稳定。有时候，坚持比变化更能实现目标。",
      bestMatches: "你与狐型（智慧而策略）和乌鸦型（智慧而神秘）能够形成智慧而深刻的关系。",
      potentialConflicts: "可能与过于僵化或保守的动物型产生冲突，需要学会适应不同的思维方式。"
    }
  }
];

// 16 Animal Prototypes (English)
const animals_en = [
  {
    id: 1, name: "dog", emoji: "🐶", traits: ["Loyal", "Enthusiastic", "Guardian", "Companion"],
    description: "You are a loyal partner and an enthusiastic guardian. Your world revolves around 'us', whether family, friends, or team. You excel at building connections, giving warmth, and finding value in the group. Your happiness is simple and pure, coming from companionship and being needed.",
    analysis: {
      coreTraits: "Loyalty is your hallmark. You have a strong sense of responsibility and collective consciousness.",
      socialStyle: "A natural socializer, you enjoy group life and excel at maintaining relationships.",
      workStyle: "You excel at teamwork, with strong execution and reliability.",
      emotionalExpression: "Direct and warm emotional expression. You express love through actions.",
      growthAdvice: "Balance giving and self-protection. Don't ignore your own needs.",
      bestMatches: "Best match with Cat (Independent) and Rabbit (Gentle).",
      potentialConflicts: "May clash with overly independent or cold types."
    }
  },
  {
    id: 2, name: "cat", emoji: "🐱", traits: ["Independent", "Elegant", "Mysterious", "Self"],
    description: "You are an elegant independent thinker, mysterious and self-satisfied. You enjoy solitude and have a rich inner world. Agile and curious, you only invest energy in what interests you. Your charm lies in your detachment and unpredictability.",
    analysis: {
      coreTraits: "Independence is your core. You have a rich inner world and unique thinking.",
      socialStyle: "Enjoy solitude but don't reject socializing. Prefer deep connections.",
      workStyle: "Excel at independent work with strong creativity and focus.",
      emotionalExpression: "Subtle and delicate. Takes time to build trust.",
      growthAdvice: "Learn to open up while maintaining independence.",
      bestMatches: "Best match with Dog (Loyal) and Capybara (Easygoing).",
      potentialConflicts: "May clash with overly dependent or controlling types."
    }
  },
  {
    id: 3, name: "wolf", emoji: "🐺", traits: ["Leadership", "Strategy", "Unity", "Resilience"],
    description: "You are a born leader and strategist. You can think independently and blend seamlessly into a team. Persistent in goals, with strong responsibility and territorial awareness. You show amazing command and strategy to protect your pack.",
    analysis: {
      coreTraits: "Leadership is your gift. You have a strong sense of mission and strategic thinking.",
      socialStyle: "Value the group, strong sense of belonging. Good at organizing.",
      workStyle: "Excel at strategic planning and leading teams to goals.",
      emotionalExpression: "Deep and loyal emotional expression.",
      growthAdvice: "Balance leading and listening. Empowerment shows leadership.",
      bestMatches: "Best match with Fox (Wise) and Lion (Confident).",
      potentialConflicts: "May clash with overly independent or anti-authority types."
    }
  },
  {
    id: 4, name: "fox", emoji: "🦊", traits: ["Wisdom", "Agility", "Adaptability", "Strategy"],
    description: "You are a clever strategist and lonely observer. You have extraordinary wisdom and adaptability, finding optimal solutions in complex environments. You prefer independent action, using keen insight to avoid risks.",
    analysis: {
      coreTraits: "Wisdom is your mark. You have keen insight and adaptability.",
      socialStyle: "Clever observer. Prefer independent action but can blend in.",
      workStyle: "Excel at solving complex problems and adapting to change.",
      emotionalExpression: "Rational and restrained. Need security and autonomy.",
      growthAdvice: "Learn to show vulnerability while maintaining independence.",
      bestMatches: "Best match with Wolf (Leader) and Octopus (Wise).",
      potentialConflicts: "May be misunderstood by overly direct types."
    }
  },
  {
    id: 5, name: "lion", emoji: "🦁", traits: ["King", "Confident", "Charisma", "Majesty"],
    description: "You are a confident king, born with an aura. You have strong desire for control and expression, enjoying being the focus. Generous and charming, but sometimes need solitude to recharge. Your existence is a declaration of power.",
    analysis: {
      coreTraits: "Kingly demeanor. Strong confidence and natural charisma.",
      socialStyle: "Natural performer. Generous and good at motivating others.",
      workStyle: "Excel at leadership and expression. Strong creativity.",
      emotionalExpression: "Passionate and direct. Need appreciation.",
      growthAdvice: "Balance expression and listening. Humility wins respect.",
      bestMatches: "Best match with Wolf (Leader) and Eagle (Visionary).",
      potentialConflicts: "May clash with low-key or anti-authority types."
    }
  },
  {
    id: 6, name: "bear", emoji: "🐻", traits: ["Strength", "Calm", "Guardian", "Introverted"],
    description: "You are a calm guardian, powerful and introverted. Mostly quiet and peaceful, but explode with power when threatened. Value security, creating a comfortable shelter for yourself and loved ones.",
    analysis: {
      coreTraits: "Strength and stability. Deep inner power and protective instinct.",
      socialStyle: "Gentle and inclusive. Good listener.",
      workStyle: "Excel at long-term planning and stable execution.",
      emotionalExpression: "Deep and stable. Loyal once connected.",
      growthAdvice: "Show vitality while maintaining stability. Flexibility adapts better.",
      bestMatches: "Best match with Deer (Gentle) and Whale (Deep).",
      potentialConflicts: "May clash with frivolous or impulsive types."
    }
  },
  {
    id: 7, name: "rabbit", emoji: "🐰", traits: ["Gentle", "Sensitive", "Alert", "Peace"],
    description: "You are an alert pacifist, agile and compassionate. You need security and are sensitive to changes. Quick to avoid conflict. In a safe circle, you show a lively and gentle side.",
    analysis: {
      coreTraits: "Gentle and sensitive. Delicate emotions and strong empathy.",
      socialStyle: "Friendly and considerate. Seek harmony, avoid conflict.",
      workStyle: "Excel at detailed work. Patient and empathetic.",
      emotionalExpression: "Delicate and rich. Need security and support.",
      growthAdvice: "Show courage while being gentle. Facing conflict promotes growth.",
      bestMatches: "Best match with Dog (Loyal) and Swan (Elegant).",
      potentialConflicts: "May feel pressured by direct or aggressive types."
    }
  },
  {
    id: 8, name: "hamster", emoji: "🐹", traits: ["Hoarding", "Focus", "Comfort", "Happiness"],
    description: "You are a focused hoarder and comfort lover. Happiness comes from a safe 'nest'. You like collecting and organizing. Enjoy your small world, maintaining a cute obtuseness to outside noise.",
    analysis: {
      coreTraits: "Focus and comfort. Enjoy your small world.",
      socialStyle: "Introverted and friendly. Cherish deep friendships.",
      workStyle: "Excel at focused work. Detailed and patient.",
      emotionalExpression: "Gentle and stable. Dislike strong fluctuations.",
      growthAdvice: "Expand horizons while maintaining focus. Change brings opportunity.",
      bestMatches: "Best match with Cat (Independent) and Capybara (Easygoing).",
      potentialConflicts: "May be uncomfortable with overly active types."
    }
  },
  {
    id: 9, name: "swan", emoji: "🦢", traits: ["Elegant", "Noble", "Loyal", "Perfect"],
    description: "You are an elegant idealist, pursuing beauty. Noble posture with a sense of distance, but extremely loyal to partner and family. Spiritual fit and external harmony are equally important.",
    analysis: {
      coreTraits: "Elegance and perfection. High taste and pursuit of beauty.",
      socialStyle: "Noble and distant. Selective in relationships.",
      workStyle: "Excel at work requiring aesthetics. Pursue perfection.",
      emotionalExpression: "Elegant and restrained. Loyal and deep.",
      growthAdvice: "Accept imperfection while pursuing it. Reality moves hearts.",
      bestMatches: "Best match with Deer (Gentle) and Eagle (High).",
      potentialConflicts: "May be uncomfortable with vulgar or casual types."
    }
  },
  {
    id: 10, name: "deer", emoji: "🦌", traits: ["Gentle", "Natural", "Sensitive", "Spiritual"],
    description: "You are a gentle child of nature, sensitive and elegant. Longing for beauty and peace, immersed in your spiritual world. High vigilance, needing a safe environment to relax.",
    analysis: {
      coreTraits: "Gentle and spiritual. Pure heart and close to nature.",
      socialStyle: "Gentle and sensitive. Seek harmony.",
      workStyle: "Excel at work requiring sensitivity and creativity.",
      emotionalExpression: "Delicate and rich. Easily affected by environment.",
      growthAdvice: "Enhance inner strength while being sensitive.",
      bestMatches: "Best match with Rabbit (Gentle) and Bear (Strong).",
      potentialConflicts: "May be uncomfortable with rude or aggressive types."
    }
  },
  {
    id: 11, name: "eagle", emoji: "🦅", traits: ["Vision", "Proud", "Focus", "Independent"],
    description: "You are a proud visionary with unparalleled view and determination. Accustomed to looking from high above. Enjoy solitude for clarity. Your power lies in independent will and grand pattern.",
    analysis: {
      coreTraits: "Vision and independence. High view and autonomy.",
      socialStyle: "Proud and independent. Loyal once connected.",
      workStyle: "Excel at strategy and decision making. Broad vision.",
      emotionalExpression: "Deep and reserved. Strong inner emotions.",
      growthAdvice: "Lower altitude while maintaining independence. Intimacy connects.",
      bestMatches: "Best match with Lion (King) and Wolf (Leader).",
      potentialConflicts: "May be impatient with dependent or trivial types."
    }
  },
  {
    id: 12, name: "crow", emoji: "🐦‍⬛", traits: ["Wisdom", "Mysterious", "Communication", "Insight"],
    description: "You are a clever puzzle solver. High IQ and curiosity, good at observing and learning. Complex social structure, good at cooperation. Mysterious appearance is protective color for wisdom.",
    analysis: {
      coreTraits: "Wisdom and mystery. Keen insight and learning ability.",
      socialStyle: "Smart and curious. Good at cooperation.",
      workStyle: "Excel at strategy and innovation. Strong adaptability.",
      emotionalExpression: "Complex and changeable. Hide true feelings.",
      growthAdvice: "Show truth while being mysterious. Transparency builds trust.",
      bestMatches: "Best match with Fox (Wise) and Octopus (Wise).",
      potentialConflicts: "May be misunderstood by simple types."
    }
  },
  {
    id: 13, name: "capybara", emoji: "🐻‍🦫", traits: ["Easygoing", "Stable", "Social", "Zen"],
    description: "You are an easygoing social master, emotionally stable. Your presence brings peace. Enjoy community life but don't force it. Philosophy: Relax, it's no big deal.",
    analysis: {
      coreTraits: "Easygoing and stable. Peaceful mind.",
      socialStyle: "Friendly and inclusive. Accept everything.",
      workStyle: "Excel at coordination and mediation. Stable emotion.",
      emotionalExpression: "Peaceful and stable. Inner harmony.",
      growthAdvice: "Show opinion while being easygoing. Persistence achieves goals.",
      bestMatches: "Best match with Cat (Independent) and Hamster (Focused).",
      potentialConflicts: "May be uncomfortable with intense types."
    }
  },
  {
    id: 14, name: "whale", emoji: "🐋", traits: ["Deep", "Wisdom", "Ancient", "Inclusive"],
    description: "You are a deep sea philosopher, ancient and wise. Carrying heavy memories, communicating with deep songs. Can blend into collective yet keep individual solitude. Inner ocean.",
    analysis: {
      coreTraits: "Deep and inclusive. Ancient wisdom and broad mind.",
      socialStyle: "Deep and inclusive. Understand different views.",
      workStyle: "Excel at leadership and guidance. Broad vision.",
      emotionalExpression: "Deep and broad like the ocean.",
      growthAdvice: "Surface while being deep. Expression builds connection.",
      bestMatches: "Best match with Bear (Strong) and Deer (Gentle).",
      potentialConflicts: "May be impatient with superficial types."
    }
  },
  {
    id: 15, name: "parrot", emoji: "🦜", traits: ["Smart", "Social", "Mimic", "Vitality"],
    description: "You are a smart socialite and natural performer. Love interaction, good at mimicking. The 'joy' of the group. Lively and curious, adding color to life.",
    analysis: {
      coreTraits: "Smart and vital. Excellent learning and expression.",
      socialStyle: "Lively and social. Adjust atmosphere.",
      workStyle: "Excel at communication and education. Adaptable.",
      emotionalExpression: "Direct and rich. Sincere emotions.",
      growthAdvice: "Think deeply while being lively. Depth brings growth.",
      bestMatches: "Best match with Dog (Loyal) and Monkey (Lively).",
      potentialConflicts: "May clash with serious or introverted types."
    }
  },
  {
    id: 16, name: "octopus", emoji: "🐙", traits: ["Wisdom", "Changeable", "Adaptable", "Strategy"],
    description: "You are a deep sea sage and camouflage master. Amazing wisdom and problem solving. Independent thinking and action. Adaptability and creativity make you thrive in complexity.",
    analysis: {
      coreTraits: "Wisdom and changeability. Creativity and adaptability.",
      socialStyle: "Independent and mysterious. Unique perspective.",
      workStyle: "Excel at innovation and adaptation. Flexible thinking.",
      emotionalExpression: "Complex and changeable. Independent.",
      growthAdvice: "Maintain stability while changing. Persistence achieves goals.",
      bestMatches: "Best match with Fox (Wise) and Crow (Wise).",
      potentialConflicts: "May clash with rigid types."
    }
  }
];

// Scoring System (Shared)
const animalMap = {
  dog: [2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  cat: [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  wolf: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  fox: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  lion: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  bear: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  rabbit: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  hamster: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  swan: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  deer: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  eagle: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  crow: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  capybara: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  whale: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  parrot: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  octopus: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
};

const animalTypes = [
  { key: "dog", id: 1 },
  { key: "cat", id: 2 },
  { key: "wolf", id: 3 },
  { key: "fox", id: 4 },
  { key: "lion", id: 5 },
  { key: "bear", id: 6 },
  { key: "rabbit", id: 7 },
  { key: "hamster", id: 8 },
  { key: "swan", id: 9 },
  { key: "deer", id: 10 },
  { key: "eagle", id: 11 },
  { key: "crow", id: 12 },
  { key: "capybara", id: 13 },
  { key: "whale", id: 14 },
  { key: "parrot", id: 15 },
  { key: "octopus", id: 16 },
];
