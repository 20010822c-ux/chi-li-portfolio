"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Language = "zh" | "en";

const zhToEn: Record<string, string> = {
  "首页": "Home",
  "关于我": "About",
  "项目": "Projects",
  "实习": "Experience",
  "能力": "Skills",
  "联系": "Contact",
  "下载简历": "Download CV",
  "查看项目案例": "View Projects",
  "联系我": "Contact Me",
  "内容运营 / 项目执行 / AIGC 影像 / 游戏与电竞内容方向": "Content Operations / Project Execution / AIGC Video / Gaming & Esports Content",
  "艺术科技与娱乐专业背景，具备项目执行、跨部门沟通、内容制作、AIGC 影像创作与游戏测试经验。希望将内容制作能力、项目推进经验和游戏/电竞兴趣结合，应用于内容运营、活动执行、项目协调及电竞内容相关岗位。": "With an Arts, Technology and Entertainment background, I bring experience in project execution, cross-functional communication, content production, AIGC video creation and game testing. I hope to combine content production skills, project delivery experience and my interest in gaming/esports for roles in content operations, event execution, project coordination and esports-related content.",
  "核心项目": "Core Projects",
  "实习经历": "Internships",
  "核心能力": "Core Skills",
  "个人兴趣": "Personal Interests",
  "奖项荣誉": "Awards & Honors",
  "我是 XJTLU 艺术科技与娱乐专业应届毕业生，本科阶段长期处于全英文授课与跨文化协作环境中。我的项目经历覆盖商业创新、展览执行、AIGC 影像创作、短视频制作与游戏测试，熟悉从项目调研、任务推进、跨部门沟通到内容交付的完整流程。现求职方向包括内容运营、项目执行、活动策划助理及电竞内容运营，希望将内容制作能力、项目执行经验和游戏/电竞兴趣结合，应用于真实业务场景中的内容策划、活动落地与用户沟通。": "I am a recent Arts, Technology and Entertainment graduate from XJTLU, with long-term experience in English-taught courses and cross-cultural collaboration. My project experience covers business innovation, exhibition execution, AIGC video creation, short-video production and game testing. I am familiar with the full process from research, task follow-up and cross-functional communication to content delivery. I am seeking roles in content operations, project execution, event coordination assistance and esports content operations, where I can apply my content production skills, project experience and gaming/esports interests to real business scenarios.",
  "Chi Forest × XJTLU 校园商业创新项目": "Chi Forest × XJTLU Campus Business Innovation Project",
  "项目副组长": "Deputy Project Lead",
  "商业创新": "Business Innovation",
  "项目协调": "Project Coordination",
  "品牌校园化": "Campus Branding",
  "汇报展示": "Final Pitch",
  "围绕品牌校园场景拓展与学生消费洞察，完成从调研、创意方案到终期展示的完整商业创新项目。": "A full-cycle business innovation project focused on campus brand expansion and student consumer insights, covering research, ideation, proposal development and final presentation.",
  "协助拆解项目目标、推进小组分工，并跟进调研、方案迭代与展示材料制作节奏。": "Helped break down project goals, coordinate team responsibilities, and follow up on research, proposal iteration and presentation materials.",
  "整理会议纪要、需求变更和展示逻辑，协调组员在创意、数据与视觉输出上的交付。": "Organized meeting notes, requirement changes and presentation logic while coordinating creative, data and visual deliverables across the team.",
  "形成可展示的校园商业创新方案，提升了跨部门沟通、项目排期与商业表达能力。": "Delivered a presentable campus business innovation proposal and strengthened my capabilities in cross-functional communication, scheduling and business storytelling.",
  "腾讯广告 × XJTLU AI 漫剧创意大赛": "Tencent Ads × XJTLU AI Comic Drama Creative Competition",
  "个人 AI 短片制作者": "Independent AI Short Film Creator",
  "AI 视频": "AI Video",
  "短片制作": "Short Film Production",
  "内容创意": "Creative Content",
  "独立完成 AI 漫剧短片创作，探索低成本 AIGC 工作流在广告创意与叙事短片中的应用。": "Independently produced an AI comic-drama short film, exploring low-cost AIGC workflows for advertising creativity and narrative video production.",
  "负责选题构思、脚本拆分、提示词优化、AI 画面生成、素材筛选与后期剪辑。": "Handled concept development, script breakdown, prompt optimization, AI image/video generation, asset selection and post-production editing.",
  "根据赛事主题调整镜头节奏、角色一致性与视觉风格，保证短片叙事完整度。": "Adjusted pacing, character consistency and visual style according to the competition theme to ensure a complete short-film narrative.",
  "作品入围优秀作品奖，验证了个人从创意到交付的 AIGC 影像制作能力。": "The work was shortlisted for an Outstanding Work Award, demonstrating my ability to deliver AIGC video from concept to final output.",
  "商业创意实践与展览执行项目": "Business Creative Practice & Exhibition Execution Project",
  "项目财务负责人 / 团队内沟通协调员": "Finance Director / Communication Coordinator",
  "展览执行": "Exhibition Execution",
  "预算管理": "Budget Management",
  "沟通协调": "Coordination",
  "现场落地": "On-site Delivery",
  "参与商业创意实践项目与线下展览执行，覆盖预算、供应商沟通、物料跟进与现场协作。": "Participated in a business creative practice and offline exhibition project, covering budgeting, vendor communication, material follow-up and on-site collaboration.",
  "负责预算整理、费用记录、报销流程跟进，并协助控制物料与执行成本。": "Managed budget records, expense tracking and reimbursement follow-up while supporting cost control for materials and execution.",
  "承担沟通协调角色，连接创意、执行和外部资源，确保展览节点按计划推进。": "Served as a communication coordinator connecting creative, execution and external resources to keep exhibition milestones on track.",
  "支撑展览顺利落地，沉淀了财务记录、现场执行和跨角色协同经验。": "Supported the successful delivery of the exhibition and built practical experience in financial documentation, on-site execution and cross-role coordination.",
  "展示该项目在商业创意实践、展览执行、预算管理、跨部门沟通、物料跟进与现场协调中的过程材料。": "A showcase of process materials from business creative practice, exhibition execution, budget management, cross-functional communication, material follow-up and on-site coordination.",
  "Lucid Knight 毕业设计作品": "Lucid Knight Graduation Project",
  "个人创作者": "Independent Creator",
  "毕业设计": "Graduation Project",
  "艺术科技": "Arts & Technology",
  "影像叙事": "Visual Narrative",
  "个人项目": "Solo Project",
  "以个人创作方式完成毕业设计作品，结合艺术科技方法进行视觉表达、叙事设计与成片制作。": "Completed an individual graduation project using arts-and-technology methods for visual expression, narrative design and final video production.",
  "独立推进概念设定、视觉风格探索、素材生产、剪辑整合与展示材料整理。": "Independently developed the concept, explored the visual direction, produced assets, edited the final work and prepared presentation materials.",
  "持续根据导师与同学反馈迭代作品结构，优化观众理解路径与最终展示效果。": "Iterated the project structure based on tutor and peer feedback to improve audience understanding and final presentation quality.",
  "作品获学院 The Visionary Gesture Award，体现了独立创作与长期项目管理能力。": "The project received The Visionary Gesture Award from the school, reflecting independent creation and long-term project management ability.",
  "TC-Monopoly 桌游测试与宣发项目": "TC-Monopoly Board Game Testing & Promotion Project",
  "测试与记录成员": "Testing & Documentation Member",
  "游戏测试": "Game Testing",
  "用户反馈": "User Feedback",
  "规则优化": "Rule Optimization",
  "宣发支持": "Promotion Support",
  "参与桌游产品测试与宣传支持，关注玩家体验、规则平衡、信息记录和推广素材反馈。": "Contributed to board game product testing and promotional support, focusing on player experience, rule balance, feedback documentation and content direction.",
  "参与多轮试玩测试，记录玩家行为、规则疑问、流程卡点与可优化体验。": "Participated in multiple playtests and recorded player behavior, rule questions, process friction and opportunities for experience improvement.",
  "协助整理测试反馈，支持宣传内容方向讨论，让产品表达更贴近玩家理解方式。": "Helped summarize testing feedback and supported discussion on promotional content so the product could be communicated more clearly to players.",
  "帮助团队发现并汇总体验问题，积累了游戏测试、玩家视角分析与内容宣发经验。": "Helped the team identify and organize experience issues while gaining hands-on experience in game testing, player-perspective analysis and content promotion.",
  "展示该项目的桌游测试、用户反馈收集、宣发物料和项目文档材料。": "A showcase of board game testing, user feedback collection, promotional materials and project documentation.",
  "93号院博物馆联合展览项目": "No. 93 Courtyard Museum Joint Exhibition Project",
  "项目组长": "Project Lead",
  "项目管理": "Project Management",
  "博物馆展览": "Museum Exhibition",
  "团队协作": "Teamwork",
  "公共文化": "Public Culture",
  "带领小组参与博物馆联合展览项目，完成主题梳理、资料整合、团队分工与展示推进。": "Led a team in a museum joint exhibition project, completing theme development, material integration, team allocation and presentation delivery.",
  "制定项目节奏与分工安排，组织资料收集、内容梳理、阶段讨论与最终展示准备。": "Planned the project timeline and team responsibilities, organized research collection, content structuring, stage discussions and final presentation preparation.",
  "对接不同成员的输出内容，保证展览叙事、视觉呈现和交付材料保持一致。": "Coordinated outputs from different team members to keep the exhibition narrative, visual presentation and delivery materials consistent.",
  "完成联合展览相关交付，强化了早期项目统筹、沟通协调与文化内容表达能力。": "Completed the joint exhibition deliverables and strengthened early-stage project coordination, communication and cultural-content expression skills.",
  "展示该项目在联合展览策划、现场执行、展陈沟通、物料整理、内容呈现与影像记录中的过程材料。": "A showcase of process materials from joint exhibition planning, on-site execution, exhibition communication, material organization, content presentation and visual documentation.",
  "查看项目视频 ↗": "View Project Video ↗",
  "我的工作": "My Contributions",
  "项目成果：": "Outcome: ",
  "查看项目展示 ↗": "View Project Showcase ↗",
  "查看项目 ↗": "View Project ↗",
  "旺石新材有限公司": "Wangshi New Materials Co., Ltd.",
  "产品宣传短视频制作": "Product Promotional Short Video Production",
  "负责产品宣传短视频的拍摄构思、素材整理、剪辑调色与基础声效处理，支持企业产品信息以更直观的方式触达客户。": "Responsible for product short-video concept development, footage organization, editing, color adjustment and basic sound processing to help communicate product information more visually to clients.",
  "展示该实习经历中的短视频制作、素材整理、剪辑调色、基础声效处理与内容发布支持。": "A showcase of short-video production, asset organization, editing, color adjustment, basic sound processing and publishing support from this internship.",
  "赣浔建材有限公司": "Ganxun Building Materials Co., Ltd.",
  "客户宣传手册编辑": "Client Brochure Editing",
  "参与客户宣传手册的信息梳理、文案编辑、版面校对与资料整合，提升宣传材料的阅读清晰度与商务沟通效率。": "Participated in information structuring, copy editing, layout proofreading and material consolidation for client brochures, improving readability and business communication efficiency.",
  "展示该实习经历中的产品图册制作、基础排版、图片整理、宣传物料与内容编辑成果。": "A showcase of product catalogue production, basic layout work, image organization, promotional materials and content editing results from this internship.",
  "查看作品/材料 ↗": "View Work Samples ↗",
  "查看实习材料 ↗": "View Internship Materials ↗",
  "项目执行与协调": "Project Execution & Coordination",
  "项目推进、任务拆分、跨部门沟通、时间节点跟进、现场执行。": "Project progress tracking, task breakdown, cross-functional communication, timeline follow-up and on-site execution.",
  "内容制作与视觉表达": "Content Production & Visual Expression",
  "短视频制作、基础剪辑、视觉排版、宣传物料整理、内容呈现。": "Short-video production, basic editing, visual layout, promotional material organization and content presentation.",
  "AIGC 影像与工具应用": "AIGC Video & Tool Application",
  "使用 AI 工具辅助影像生成、素材筛选、创意表达与内容生产流程优化。": "Using AI tools to support video generation, asset selection, creative expression and content-production workflow optimization.",
  "语言能力": "Language Ability",
  "具备中英文双语沟通与写作能力，能够适应全英文授课、跨文化小组协作、英文项目汇报和基础商务沟通场景。": "Bilingual Chinese-English communication and writing ability, with experience in English-taught courses, cross-cultural teamwork, English project presentations and basic business communication.",
  "查看语言能力证明↗": "View Language Proof ↗",
  "游戏与电竞内容": "Gaming & Esports Content",
  "长期关注 FPS 与战术竞技类游戏，持续观看无畏契约 VCT CN 赛事，了解职业赛事节奏、战队内容语境与玩家社区讨论方式。": "I follow FPS and tactical competitive games, regularly watch Valorant VCT CN matches, and understand esports pacing, team-content context and player community discussion styles.",
  "展示与游戏、电竞赛事观看、玩家社区观察和内容兴趣相关的图片材料。": "A showcase of images related to gaming, esports viewing, player-community observation and content interests.",
  "微缩模型制作": "Miniature Model Making",
  "平时喜欢制作微缩模型，享受从组装、上色到细节调整的过程，也会特别关注材质表现、造型设计和手工完成度。": "I enjoy making miniature models, from assembly and painting to detail refinement, with a strong interest in material expression, form design and craft quality.",
  "展示微缩模型制作、组装、上色、材质表现和细节调整过程相关图片。": "A showcase of images related to miniature model making, assembly, painting, material expression and detail refinement.",
  "健身、阅读与做饭": "Fitness, Reading & Cooking",
  "平时会通过健身保持状态，也有阅读和做饭的习惯。健身帮助我保持稳定节奏，阅读让我持续输入新的内容和想法，而做饭则是我放松和整理生活节奏的一种方式。": "I keep a fitness routine, read regularly and enjoy cooking. Fitness helps me maintain rhythm, reading brings in new ideas, and cooking helps me relax and organize daily life.",
  "展示健身、阅读、做饭和日常生活节奏管理相关图片。": "A showcase of images related to fitness, reading, cooking and everyday rhythm management.",
  "查看兴趣图组 ↗": "View Interest Gallery ↗",
  "2024/25 学年 XJTLU Academic Achievement Award": "2024/25 XJTLU Academic Achievement Award",
  "腾讯广告 × XJTLU AI 漫剧创意大赛入围优秀作品奖": "Tencent Ads × XJTLU AI Comic Drama Competition · Outstanding Work Shortlist",
  "Chi Forest × XJTLU 校园商业创新项目 · Final Pitch 第一名": "Chi Forest × XJTLU Campus Business Innovation Project · Final Pitch First Place",
  "毕业设计作品获学院 The Visionary Gesture Award": "Graduation Project · The Visionary Gesture Award",
  "受邀作为 XJTLU 优秀毕业生接受校方采访": "Invited by XJTLU for an Outstanding Graduate Interview",
  "期待沟通合适的岗位机会": "Open to discussing suitable opportunities",
  "如需查看完整简历、项目材料或进一步了解项目细节，欢迎通过邮件或电话联系我。": "If you would like to review my full resume, project materials or discuss details further, please feel free to contact me by email or phone.",
  "简历下载": "Download CV",
  "项目链接": "Project Links",
  "Email：": "Email: ",
  "Phone：": "Phone: ",
  "点击下方按钮查看完整项目文档材料。": "Use the button below to view the full project document or supporting materials.",
  "查看项目文档 ↗": "View Project Document ↗",
};

const enToZh = Object.fromEntries(Object.entries(zhToEn).map(([zh, en]) => [en, zh]));

const stableTranslations = {
  "exhibition-role": {
    zh: "项目财务负责人 / 团队内沟通协调员",
    en: "Finance Director / Communication Coordinator",
  },
  "project-result-label": {
    zh: "项目成果：",
    en: "Outcome: ",
  },
} as const;

function getTextMap(language: Language) {
  return language === "en" ? zhToEn : enToZh;
}

function translateTextValue(value: string, textMap: Record<string, string>) {
  const trimmed = value.trim();
  const translated = textMap[trimmed];

  if (!translated) {
    return value;
  }

  const prefix = value.match(/^\s*/)?.[0] ?? "";
  const suffix = value.match(/\s*$/)?.[0] ?? "";
  return `${prefix}${translated}${suffix}`;
}

function shouldSkipElement(element: Element | null) {
  return Boolean(element?.closest("script, style, textarea, input, [data-language-toggle], [data-i18n-name], [data-i18n-key]"));
}

function updateSpecialElements(language: Language) {
  const primaryName = document.querySelector('[data-i18n-name="primary"]');
  const secondaryName = document.querySelector('[data-i18n-name="secondary"]');

  if (primaryName) {
    primaryName.textContent = language === "en" ? "Chi Li" : "李持";
  }

  if (secondaryName) {
    secondaryName.textContent = language === "en" ? "Portfolio" : "Chi Li";
  }

  document.querySelectorAll<HTMLElement>("[data-i18n-key]").forEach((element) => {
    const key = element.dataset.i18nKey as keyof typeof stableTranslations | undefined;

    if (key && stableTranslations[key]) {
      element.textContent = stableTranslations[key][language];
    }
  });
}

function translateNode(root: ParentNode, language: Language) {
  const textMap = getTextMap(language);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];

  while (walker.nextNode()) {
    textNodes.push(walker.currentNode as Text);
  }

  textNodes.forEach((node) => {
    if (shouldSkipElement(node.parentElement)) {
      return;
    }

    node.nodeValue = translateTextValue(node.nodeValue ?? "", textMap);
  });
}

export default function LanguageToggle() {
  const previousLanguageRef = useRef<Language | null>(null);
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "zh";
    }

    const savedLanguage = window.localStorage.getItem("portfolio-language");
    return savedLanguage === "zh" || savedLanguage === "en" ? savedLanguage : "zh";
  });

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

    const shouldTranslate = language === "en" || previousLanguageRef.current === "en";
    previousLanguageRef.current = language;

    updateSpecialElements(language);

    if (!shouldTranslate) {
      return;
    }

    translateNode(document.body, language);
    updateSpecialElements(language);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            const textNode = node as Text;
            if (!shouldSkipElement(textNode.parentElement)) {
              textNode.nodeValue = translateTextValue(textNode.nodeValue ?? "", getTextMap(language));
            }
            return;
          }

          if (node.nodeType === Node.ELEMENT_NODE && !shouldSkipElement(node as Element)) {
            translateNode(node as Element, language);
            updateSpecialElements(language);
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [language]);

  const buttonLabel = useMemo(() => (language === "zh" ? "中 / EN" : "中文 / English"), [language]);

  return (
    <button
      type="button"
      data-language-toggle
      className="shrink-0 rounded-full border border-cyan-200/25 bg-white/[0.04] px-3 py-2 text-xs font-bold text-cyan-100 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-cyan-300/10 focus:outline-none focus:ring-2 focus:ring-cyan-300/50 sm:text-sm"
      aria-label="Toggle language between Chinese and English"
      onClick={() => setLanguage((current) => (current === "zh" ? "en" : "zh"))}
    >
      {buttonLabel}
    </button>
  );
}
