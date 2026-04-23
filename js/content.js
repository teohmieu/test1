const CONTENT = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      portfolio: "Portfolio",
      achievements: "Achievements",
      notes: "Reading Notes",
      contact: "Contact"
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Your Name",
      title: "BI Engineer | Data Engineer in Transition",
      subtitle: "Fintech × Data × AI — Building the bridge from business insight to intelligent systems.",
      cta_portfolio: "View My Work",
      cta_contact: "Get In Touch"
    },
    about: {
      section_title: "About Me",
      paragraph1: "I'm a data-driven professional currently working in Fintech Customer Support at a Japanese company, with hands-on experience in business intelligence and data analysis. I'm actively transitioning into a BI Engineer role, with a long-term vision of becoming an AI Engineer.",
      paragraph2: "My unique background at the intersection of finance, technology, and customer operations gives me a rare perspective — I understand both the business needs and the technical solutions. I speak Chinese, Japanese, and English, enabling me to collaborate across international teams.",
      paragraph3: "I build Tableau dashboards that turn raw data into decisions. Currently seeking a BI Engineer or Data Engineer position where I can architect data pipelines and deliver measurable impact.",
      career_title: "Career Journey",
      careers: [
        { year: "Present", title: "Fintech Customer Support", company: "Japanese Fintech Company", desc: "Customer operations, data analysis, process improvement with BI tools" },
        { year: "Near-term", title: "BI Engineer", company: "Target Role", desc: "Dashboard design, data modeling, ETL pipeline development" },
        { year: "Mid-term", title: "Data Engineer", company: "Target Role", desc: "Data architecture, large-scale pipeline engineering, cloud data platforms" },
        { year: "Long-term", title: "AI Engineer", company: "Vision", desc: "ML systems, LLM applications, intelligent automation" }
      ]
    },
    skills: {
      section_title: "Skills & Tech Stack",
      categories: [
        {
          name: "Data Visualization",
          icon: "📊",
          skills: ["Tableau", "Power BI", "Chart.js", "D3.js"]
        },
        {
          name: "Data & Analytics",
          icon: "🗃️",
          skills: ["SQL", "Python", "Pandas", "Excel / Google Sheets"]
        },
        {
          name: "Data Engineering",
          icon: "⚙️",
          skills: ["ETL Pipelines", "Data Modeling", "dbt (learning)", "Airflow (learning)"]
        },
        {
          name: "Cloud & Tools",
          icon: "☁️",
          skills: ["BigQuery", "AWS (learning)", "Git / GitHub", "Notion"]
        },
        {
          name: "AI & ML",
          icon: "🤖",
          skills: ["Prompt Engineering", "LLM APIs", "scikit-learn (learning)", "TensorFlow (learning)"]
        },
        {
          name: "Languages",
          icon: "🌐",
          skills: ["Chinese (Native)", "Japanese (Business)", "English (Business)"]
        }
      ]
    },
    portfolio: {
      section_title: "Portfolio",
      subtitle: "Projects & Dashboards",
      projects: [
        {
          title: "Fintech Customer KPI Dashboard",
          tags: ["Tableau", "SQL", "KPI Tracking"],
          desc: "An executive-level dashboard tracking customer support metrics, SLA compliance, and satisfaction scores. Reduced reporting time by 60% and enabled real-time decision-making.",
          status: "Completed",
          link: null,
          highlight: true
        },
        {
          title: "Transaction Anomaly Monitor",
          tags: ["Python", "SQL", "Tableau"],
          desc: "Built an automated pipeline to detect unusual transaction patterns for compliance monitoring. Integrated alert system reduced manual review workload by 40%.",
          status: "Completed",
          link: null,
          highlight: false
        },
        {
          title: "Customer Segmentation Analysis",
          tags: ["Python", "Tableau", "Clustering"],
          desc: "Segmented 50,000+ customers by behavior patterns using clustering analysis. Insights directly informed product team's retention strategy.",
          status: "In Progress",
          link: null,
          highlight: false
        },
        {
          title: "Personal Portfolio Website",
          tags: ["HTML", "CSS", "JavaScript"],
          desc: "This website — a multilingual portfolio built from scratch with responsive design, smooth animations, and a language switcher for Chinese, Japanese, and English.",
          status: "Live",
          link: "#",
          highlight: false
        }
      ]
    },
    achievements: {
      section_title: "Achievements",
      items: [
        { icon: "🏆", title: "Dashboard Efficiency", desc: "Reduced weekly reporting time by 60% through automated Tableau dashboards" },
        { icon: "📈", title: "Data Impact", desc: "Insights from customer analysis directly influenced product roadmap decisions" },
        { icon: "🌏", title: "Multilingual Operations", desc: "Handled customer escalations in Chinese, Japanese, and English across international teams" },
        { icon: "⚡", title: "Process Automation", desc: "Built automated data pipelines reducing manual compliance checks by 40%" },
        { icon: "📚", title: "Self-Directed Learning", desc: "Actively studying data engineering and AI — dbt, Airflow, and LLM APIs" },
        { icon: "🎯", title: "Career Transition", desc: "Successfully pivoting from support to data engineering through portfolio building and skill development" }
      ]
    },
    notes: {
      section_title: "Reading Notes",
      subtitle: "Books, articles, and learnings I want to remember.",
      items: [
        {
          title: "Designing Data-Intensive Applications",
          author: "Martin Kleppmann",
          tags: ["Data Engineering", "Systems Design"],
          note: "Key insight: reliability, scalability, and maintainability are the pillars of data systems. Understanding replication and partitioning changed how I think about database design.",
          date: "2024-03",
          lang: "EN"
        },
        {
          title: "The Data Warehouse Toolkit",
          author: "Ralph Kimball",
          tags: ["Data Modeling", "BI"],
          note: "Dimensional modeling with fact and dimension tables is still the gold standard for BI. Star schema simplicity vs. normalized complexity — always choose simplicity for analytics.",
          date: "2024-01",
          lang: "EN"
        },
        {
          title: "好的经济学",
          author: "Abhijit Banerjee",
          tags: ["Economics", "Policy"],
          note: "数据和实验是检验政策效果的最佳工具。对经济学的重新认识，让我更理解fintech的社会价值。",
          date: "2023-11",
          lang: "ZH"
        }
      ]
    },
    contact: {
      section_title: "Get In Touch",
      subtitle: "Open to BI Engineer, Data Engineer, and Data Analyst opportunities. Let's talk.",
      email_label: "Email",
      github_label: "GitHub",
      linkedin_label: "LinkedIn",
      form_name: "Your Name",
      form_email: "Your Email",
      form_message: "Message",
      form_submit: "Send Message",
      form_note: "* I typically respond within 24 hours."
    },
    footer: {
      copy: "Built with ❤️ and lots of data. Open to opportunities worldwide."
    }
  },
 
  zh: {
    nav: {
      about: "关于我",
      skills: "技能栈",
      portfolio: "作品集",
      achievements: "成就",
      notes: "阅读笔记",
      contact: "联系我"
    },
    hero: {
      greeting: "你好，我是",
      name: "Your Name",
      title: "BI工程师 | 数据工程师转职中",
      subtitle: "Fintech × 数据 × AI — 从业务洞察到智能系统，构建跨越的桥梁。",
      cta_portfolio: "查看作品",
      cta_contact: "联系我"
    },
    about: {
      section_title: "关于我",
      paragraph1: "我目前在一家日本金融科技公司担任客户支持岗位，拥有商业智能和数据分析的实战经验。我正在积极转型为BI工程师，长期目标是成为AI工程师。",
      paragraph2: "我的背景横跨金融、科技和客户运营，赋予了我独特的视角——我既理解业务需求，也具备技术解决方案能力。我能流利使用中文、日语和英语，在国际团队中游刃有余。",
      paragraph3: "我用Tableau构建仪表盘，将原始数据转化为决策依据。目前正在寻求BI工程师或数据工程师职位，希望在数据管道架构和可量化影响方面发挥更大价值。",
      career_title: "职业规划",
      careers: [
        { year: "现在", title: "金融科技客户支持", company: "日本金融科技公司", desc: "客户运营、数据分析、使用BI工具进行流程改善" },
        { year: "近期目标", title: "BI工程师", company: "目标职位", desc: "仪表盘设计、数据建模、ETL管道开发" },
        { year: "中期目标", title: "数据工程师", company: "目标职位", desc: "数据架构、大规模管道工程、云数据平台" },
        { year: "长期目标", title: "AI工程师", company: "愿景", desc: "机器学习系统、LLM应用、智能自动化" }
      ]
    },
    skills: {
      section_title: "技能栈",
      categories: [
        {
          name: "数据可视化",
          icon: "📊",
          skills: ["Tableau", "Power BI", "Chart.js", "D3.js"]
        },
        {
          name: "数据与分析",
          icon: "🗃️",
          skills: ["SQL", "Python", "Pandas", "Excel / Google Sheets"]
        },
        {
          name: "数据工程",
          icon: "⚙️",
          skills: ["ETL管道", "数据建模", "dbt（学习中）", "Airflow（学习中）"]
        },
        {
          name: "云平台与工具",
          icon: "☁️",
          skills: ["BigQuery", "AWS（学习中）", "Git / GitHub", "Notion"]
        },
        {
          name: "AI与机器学习",
          icon: "🤖",
          skills: ["提示词工程", "LLM API", "scikit-learn（学习中）", "TensorFlow（学习中）"]
        },
        {
          name: "语言能力",
          icon: "🌐",
          skills: ["中文（母语）", "日语（商务级）", "英语（商务级）"]
        }
      ]
    },
    portfolio: {
      section_title: "作品集",
      subtitle: "项目与仪表盘",
      projects: [
        {
          title: "金融科技客户KPI仪表盘",
          tags: ["Tableau", "SQL", "KPI追踪"],
          desc: "面向管理层的仪表盘，追踪客户支持指标、SLA合规率和满意度评分。将报告时间缩短60%，实现实时决策支持。",
          status: "已完成",
          link: null,
          highlight: true
        },
        {
          title: "交易异常监控系统",
          tags: ["Python", "SQL", "Tableau"],
          desc: "构建自动化管道，用于检测异常交易模式以满足合规监控需求。集成告警系统使人工审核工作量降低40%。",
          status: "已完成",
          link: null,
          highlight: false
        },
        {
          title: "客户分群分析",
          tags: ["Python", "Tableau", "聚类分析"],
          desc: "使用聚类分析对50,000+客户进行行为模式分群，分析结果直接影响了产品团队的用户留存策略。",
          status: "进行中",
          link: null,
          highlight: false
        },
        {
          title: "个人作品集网站",
          tags: ["HTML", "CSS", "JavaScript"],
          desc: "本网站 — 从零搭建的多语言作品集，具备响应式设计、流畅动效，支持中文、日语和英语切换。",
          status: "已上线",
          link: "#",
          highlight: false
        }
      ]
    },
    achievements: {
      section_title: "成就",
      items: [
        { icon: "🏆", title: "仪表盘效率提升", desc: "通过自动化Tableau仪表盘，将每周报告时间缩短60%" },
        { icon: "📈", title: "数据驱动影响力", desc: "客户分析洞察直接影响了产品路线图的决策" },
        { icon: "🌏", title: "多语言运营", desc: "用中文、日语和英语处理跨国团队的客户升级问题" },
        { icon: "⚡", title: "流程自动化", desc: "构建自动化数据管道，减少40%的人工合规检查" },
        { icon: "📚", title: "自主学习", desc: "主动学习数据工程与AI — dbt、Airflow和LLM API" },
        { icon: "🎯", title: "职业转型", desc: "通过作品集建设和技能发展，从支持岗位成功转型数据工程" }
      ]
    },
    notes: {
      section_title: "阅读笔记",
      subtitle: "书籍、文章和我想记住的思考。",
      items: [
        {
          title: "数据密集型应用系统设计",
          author: "Martin Kleppmann",
          tags: ["数据工程", "系统设计"],
          note: "核心洞察：可靠性、可扩展性和可维护性是数据系统的三大支柱。理解复制与分区改变了我对数据库设计的思维方式。",
          date: "2024-03",
          lang: "ZH"
        },
        {
          title: "数据仓库工具包",
          author: "Ralph Kimball",
          tags: ["数据建模", "BI"],
          note: "维度建模的事实表与维度表仍是BI的黄金标准。星型模式的简洁性 vs 规范化的复杂性——分析场景永远选简洁。",
          date: "2024-01",
          lang: "ZH"
        },
        {
          title: "好的经济学",
          author: "Abhijit Banerjee",
          tags: ["经济学", "政策"],
          note: "数据和实验是检验政策效果的最佳工具。对经济学的重新认识，让我更理解fintech的社会价值。",
          date: "2023-11",
          lang: "ZH"
        }
      ]
    },
    contact: {
      section_title: "联系我",
      subtitle: "欢迎BI工程师、数据工程师、数据分析师相关机会。期待交流。",
      email_label: "邮箱",
      github_label: "GitHub",
      linkedin_label: "LinkedIn",
      form_name: "您的姓名",
      form_email: "您的邮箱",
      form_message: "留言内容",
      form_submit: "发送消息",
      form_note: "* 通常在24小时内回复。"
    },
    footer: {
      copy: "用数据和热情构建，欢迎全球机会。"
    }
  },
 
  ja: {
    nav: {
      about: "自己紹介",
      skills: "スキル",
      portfolio: "ポートフォリオ",
      achievements: "実績",
      notes: "読書メモ",
      contact: "お問い合わせ"
    },
    hero: {
      greeting: "はじめまして、",
      name: "Your Name",
      title: "BIエンジニア志望 | データエンジニアへ転職中",
      subtitle: "Fintech × データ × AI — ビジネスの洞察からインテリジェントシステムへ。",
      cta_portfolio: "実績を見る",
      cta_contact: "お問い合わせ"
    },
    about: {
      section_title: "自己紹介",
      paragraph1: "現在、日本のFintech企業でカスタマーサポートに従事しながら、BI・データ分析の実務経験を積んでいます。BIエンジニアへの転職を積極的に進めており、長期的にはAIエンジニアを目指しています。",
      paragraph2: "金融・テクノロジー・カスタマーオペレーションの交差点にある私のバックグラウンドは、ビジネスニーズと技術ソリューションの両方を理解するユニークな視点を与えてくれます。中国語・日本語・英語での対応が可能で、グローバルチームでも活躍できます。",
      paragraph3: "Tableauでダッシュボードを構築し、生データを意思決定につなげています。データパイプラインの設計と定量的なインパクトが出せるBIエンジニアまたはデータエンジニアのポジションを探しています。",
      career_title: "キャリアプラン",
      careers: [
        { year: "現在", title: "Fintechカスタマーサポート", company: "日系Fintech企業", desc: "カスタマーオペレーション、データ分析、BIツールを活用したプロセス改善" },
        { year: "近期目標", title: "BIエンジニア", company: "志望職種", desc: "ダッシュボード設計、データモデリング、ETLパイプライン開発" },
        { year: "中期目標", title: "データエンジニア", company: "志望職種", desc: "データアーキテクチャ、大規模パイプライン構築、クラウドデータプラットフォーム" },
        { year: "長期目標", title: "AIエンジニア", company: "ビジョン", desc: "MLシステム、LLMアプリケーション、インテリジェント自動化" }
      ]
    },
    skills: {
      section_title: "スキル・技術スタック",
      categories: [
        {
          name: "データビジュアライゼーション",
          icon: "📊",
          skills: ["Tableau", "Power BI", "Chart.js", "D3.js"]
        },
        {
          name: "データ・アナリティクス",
          icon: "🗃️",
          skills: ["SQL", "Python", "Pandas", "Excel / Google Sheets"]
        },
        {
          name: "データエンジニアリング",
          icon: "⚙️",
          skills: ["ETLパイプライン", "データモデリング", "dbt（学習中）", "Airflow（学習中）"]
        },
        {
          name: "クラウド・ツール",
          icon: "☁️",
          skills: ["BigQuery", "AWS（学習中）", "Git / GitHub", "Notion"]
        },
        {
          name: "AI・機械学習",
          icon: "🤖",
          skills: ["プロンプトエンジニアリング", "LLM API", "scikit-learn（学習中）", "TensorFlow（学習中）"]
        },
        {
          name: "語学力",
          icon: "🌐",
          skills: ["中国語（ネイティブ）", "日本語（ビジネスレベル）", "英語（ビジネスレベル）"]
        }
      ]
    },
    portfolio: {
      section_title: "ポートフォリオ",
      subtitle: "プロジェクト・ダッシュボード",
      projects: [
        {
          title: "Fintech顧客KPIダッシュボード",
          tags: ["Tableau", "SQL", "KPI管理"],
          desc: "カスタマーサポート指標・SLAコンプライアンス・満足度スコアを追跡するエグゼクティブ向けダッシュボード。レポート作成時間を60%削減し、リアルタイムな意思決定を実現。",
          status: "完成",
          link: null,
          highlight: true
        },
        {
          title: "取引異常モニタリングシステム",
          tags: ["Python", "SQL", "Tableau"],
          desc: "コンプライアンス監視のため、異常な取引パターンを検知する自動化パイプラインを構築。アラートシステムの統合により手動審査の作業量を40%削減。",
          status: "完成",
          link: null,
          highlight: false
        },
        {
          title: "顧客セグメンテーション分析",
          tags: ["Python", "Tableau", "クラスタリング"],
          desc: "クラスタリング分析で50,000件以上の顧客を行動パターン別にセグメント化。分析結果がプロダクトチームの顧客維持戦略に直接活用された。",
          status: "進行中",
          link: null,
          highlight: false
        },
        {
          title: "個人ポートフォリオサイト",
          tags: ["HTML", "CSS", "JavaScript"],
          desc: "本サイト — レスポンシブデザインとスムーズなアニメーションを備えた多言語ポートフォリオ。中国語・日本語・英語の切り替えに対応。",
          status: "公開中",
          link: "#",
          highlight: false
        }
      ]
    },
    achievements: {
      section_title: "実績",
      items: [
        { icon: "🏆", title: "ダッシュボードの効率化", desc: "自動化Tableauダッシュボードにより週次レポート作成時間を60%削減" },
        { icon: "📈", title: "データドリブンな影響", desc: "顧客分析のインサイトがプロダクトロードマップの意思決定に直接貢献" },
        { icon: "🌏", title: "多言語オペレーション", desc: "中国語・日本語・英語でグローバルチームのカスタマーエスカレーションに対応" },
        { icon: "⚡", title: "プロセス自動化", desc: "自動化データパイプラインの構築でコンプライアンス手動確認を40%削減" },
        { icon: "📚", title: "自律的な学習", desc: "データエンジニアリングとAIを独学中 — dbt、Airflow、LLM API" },
        { icon: "🎯", title: "キャリアチェンジ", desc: "ポートフォリオ構築とスキル開発を通じ、サポートからデータエンジニアリングへ転職活動中" }
      ]
    },
    notes: {
      section_title: "読書メモ",
      subtitle: "本・記事・覚えておきたい学び。",
      items: [
        {
          title: "データ指向アプリケーションデザイン",
          author: "Martin Kleppmann",
          tags: ["データエンジニアリング", "システム設計"],
          note: "信頼性・スケーラビリティ・保守性がデータシステムの三本柱。レプリケーションとパーティショニングの理解がDB設計の思考を変えた。",
          date: "2024-03",
          lang: "JA"
        },
        {
          title: "データウェアハウスツールキット",
          author: "Ralph Kimball",
          tags: ["データモデリング", "BI"],
          note: "ファクトテーブルとディメンションテーブルによる次元モデリングは依然BIのゴールドスタンダード。分析用途ではスタースキーマのシンプルさを選ぶべき。",
          date: "2024-01",
          lang: "JA"
        },
        {
          title: "絶望を希望に変える経済学",
          author: "Abhijit Banerjee",
          tags: ["経済学", "政策"],
          note: "データと実験が政策効果を検証する最善の手段。経済学の再認識がFintechの社会的価値への理解を深めた。",
          date: "2023-11",
          lang: "JA"
        }
      ]
    },
    contact: {
      section_title: "お問い合わせ",
      subtitle: "BIエンジニア・データエンジニア・データアナリストのポジションに興味があります。ぜひご連絡ください。",
      email_label: "メール",
      github_label: "GitHub",
      linkedin_label: "LinkedIn",
      form_name: "お名前",
      form_email: "メールアドレス",
      form_message: "メッセージ",
      form_submit: "送信する",
      form_note: "* 通常24時間以内にご返信します。"
    },
    footer: {
      copy: "データと情熱で構築。世界中からのご縁をお待ちしています。"
    }
  }
};

