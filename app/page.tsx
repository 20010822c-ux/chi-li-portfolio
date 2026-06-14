import SpotlightCard from "../components/SpotlightCard";
import ProjectModal from "../components/ProjectModal";

// Keep the portfolio content in this page so the static Vercel build can render the latest PR layout.
const projects = [
  {
    name: "Chi Forest × XJTLU 校园商业创新项目",
    time: "2026.03–2026.05",
    role: "项目副组长",
    tags: ["商业创新", "项目协调", "品牌校园化", "汇报展示"],
    summary:
      "围绕品牌校园场景拓展与学生消费洞察，完成从调研、创意方案到终期展示的完整商业创新项目。",
    work: [
      "协助拆解项目目标、推进小组分工，并跟进调研、方案迭代与展示材料制作节奏。",
      "整理会议纪要、需求变更和展示逻辑，协调组员在创意、数据与视觉输出上的交付。",
    ],
    result:
      "形成可展示的校园商业创新方案，提升了跨部门沟通、项目排期与商业表达能力。",
    link: "https://canva.link/v12n80tfay5pjda",
  },
  {
    name: "腾讯广告 × XJTLU AI 漫剧创意大赛",
    time: "2026.03–2026.05",
    role: "个人 AI 短片制作者",
    tags: ["AIGC", "AI 视频", "短片制作", "内容创意"],
    summary:
      "独立完成 AI 漫剧短片创作，探索低成本 AIGC 工作流在广告创意与叙事短片中的应用。",
    work: [
      "负责选题构思、脚本拆分、提示词优化、AI 画面生成、素材筛选与后期剪辑。",
      "根据赛事主题调整镜头节奏、角色一致性与视觉风格，保证短片叙事完整度。",
    ],
    result:
      "作品入围优秀作品奖，验证了个人从创意到交付的 AIGC 影像制作能力。",
    link: "https://www.bilibili.com/video/BV1PsJw6YE1z/",
  },
  {
    name: "商业创意实践与展览执行项目",
    time: "2025.11–2026.06",
    role: "Finance Director / Communication Coordinator",
    tags: ["展览执行", "预算管理", "沟通协调", "现场落地"],
    summary:
      "参与商业创意实践项目与线下展览执行，覆盖预算、供应商沟通、物料跟进与现场协作。",
    work: [
      "负责预算整理、费用记录、报销流程跟进，并协助控制物料与执行成本。",
      "承担沟通协调角色，连接创意、执行和外部资源，确保展览节点按计划推进。",
    ],
    result:
      "支撑展览顺利落地，沉淀了财务记录、现场执行和跨角色协同经验。",
    modal: {
      title: "商业创意实践与展览执行项目",
      description:
        "展示该项目在商业创意实践、展览执行、预算管理、跨部门沟通、物料跟进与现场协调中的过程材料。",
      images: [
        "/projects/exhibition-execution/01.jpg",
        "/projects/exhibition-execution/02.jpg",
        "/projects/exhibition-execution/03.jpg",
        "/projects/exhibition-execution/04.jpg",
      ],
      documentUrl: "https://chi-li-lc.feishu.cn/wiki/J3SjwuO3xiZSeakdC06cMp86nIh?from=from_copylink",
    },
  },
  {
    name: "Lucid Knight 毕业设计作品",
    time: "2025.09–2026.05",
    role: "个人创作者",
    tags: ["毕业设计", "艺术科技", "影像叙事", "个人项目"],
    summary:
      "以个人创作方式完成毕业设计作品，结合艺术科技方法进行视觉表达、叙事设计与成片制作。",
    work: [
      "独立推进概念设定、视觉风格探索、素材生产、剪辑整合与展示材料整理。",
      "持续根据导师与同学反馈迭代作品结构，优化观众理解路径与最终展示效果。",
    ],
    result:
      "作品获学院 The Visionary Gesture Award，体现了独立创作与长期项目管理能力。",
    link: "https://www.bilibili.com/video/BV1qU5X6nEXH/",
  },
  {
    name: "TC-Monopoly 桌游测试与宣发项目",
    time: "2024.06–2025.03",
    role: "测试与记录成员",
    tags: ["游戏测试", "用户反馈", "规则优化", "宣发支持"],
    summary:
      "参与桌游产品测试与宣传支持，关注玩家体验、规则平衡、信息记录和推广素材反馈。",
    work: [
      "参与多轮试玩测试，记录玩家行为、规则疑问、流程卡点与可优化体验。",
      "协助整理测试反馈，支持宣传内容方向讨论，让产品表达更贴近玩家理解方式。",
    ],
    result:
      "帮助团队发现并汇总体验问题，积累了游戏测试、玩家视角分析与内容宣发经验。",
    modal: {
      title: "TC-Monopoly 桌游测试与宣发项目",
      description: "展示该项目的桌游测试、用户反馈收集、宣发物料和项目文档材料。",
      images: [
        "/projects/tc-monopoly/01.jpg",
        "/projects/tc-monopoly/02.jpg",
        "/projects/tc-monopoly/03.jpg",
        "/projects/tc-monopoly/04.jpg",
      ],
      documentUrl:
        "https://1drv.ms/w/c/0004aac69e2d66bb/IQBkiVu9WPBFRYShBIuPKRp1AZOr8ru9K_bsz2ZSBzrWhS4?e=K8IzFX",
    },
  },
  {
    name: "93号院博物馆联合展览项目",
    time: "2023.02–2023.05",
    role: "项目组长",
    tags: ["项目管理", "博物馆展览", "团队协作", "公共文化"],
    summary:
      "带领小组参与博物馆联合展览项目，完成主题梳理、资料整合、团队分工与展示推进。",
    work: [
      "制定项目节奏与分工安排，组织资料收集、内容梳理、阶段讨论与最终展示准备。",
      "对接不同成员的输出内容，保证展览叙事、视觉呈现和交付材料保持一致。",
    ],
    result:
      "完成联合展览相关交付，强化了早期项目统筹、沟通协调与文化内容表达能力。",
    modal: {
      title: "93号院博物馆联合展览项目",
      description: "展示该项目在联合展览策划、现场执行、展陈沟通、物料整理、内容呈现与影像记录中的过程材料。",
      images: [
        "/projects/no93-museum/01.jpg",
        "/projects/no93-museum/02.jpg",
        "/projects/no93-museum/03.jpg",
        "/projects/no93-museum/04.jpg",
      ],
      documentUrl: "https://www.bilibili.com/video/BV1vKqrY6ENM/",
      documentLabel: "查看项目视频 ↗",
    },
  },
];

const internships = [
  {
    company: "旺石新材有限公司",
    title: "产品宣传短视频制作",
    time: "2025.12–2026.02",
    description:
      "负责产品宣传短视频的拍摄构思、素材整理、剪辑调色与基础声效处理，支持企业产品信息以更直观的方式触达客户。",
    modal: {
      title: "旺石新材有限公司",
      description: "展示该实习经历中的短视频制作、素材整理、剪辑调色、基础声效处理与内容发布支持。",
      images: [
        "/internships/wangshi/01.jpg",
        "/internships/wangshi/02.jpg",
        "/internships/wangshi/03.jpg",
        "/internships/wangshi/04.jpg",
      ],
    },
  },
  {
    company: "赣浔建材有限公司",
    title: "客户宣传手册编辑",
    time: "2024.06–2024.08",
    description:
      "参与客户宣传手册的信息梳理、文案编辑、版面校对与资料整合，提升宣传材料的阅读清晰度与商务沟通效率。",
    modal: {
      title: "赣浔建材有限公司",
      description: "展示该实习经历中的产品图册制作、基础排版、图片整理、宣传物料与内容编辑成果。",
      images: [
        "/internships/ganxun/01.jpg",
        "/internships/ganxun/02.jpg",
        "/internships/ganxun/03.jpg",
        "/internships/ganxun/04.jpg",
      ],
      documentUrl: "https://book.yunzhan365.com/oopti/kyas/mobile/index.html",
      documentLabel: "查看作品/材料 ↗",
    },
  },
];

const skills = [
  {
    title: "项目执行与协调",
    description: "项目推进、任务拆分、跨部门沟通、时间节点跟进、现场执行。",
  },
  {
    title: "内容制作与视觉表达",
    description: "短视频制作、基础剪辑、视觉排版、宣传物料整理、内容呈现。",
  },
  {
    title: "AIGC 影像与工具应用",
    description: "使用 AI 工具辅助影像生成、素材筛选、创意表达与内容生产流程优化。",
  },
  {
    title: "语言能力",
    description:
      "具备中英文双语沟通与写作能力，能够适应全英文授课、跨文化小组协作、英文项目汇报和基础商务沟通场景。",
  },
];

const personalInterests = [
  {
    title: "游戏与电竞内容",
    description:
      "长期关注 FPS 与战术竞技类游戏，持续观看无畏契约 VCT CN 赛事，了解职业赛事节奏、战队内容语境与玩家社区讨论方式。",
    icon: "🎮",
    iconClass: "border-cyan-200/20 bg-cyan-300/10 text-cyan-100",
    spotlightColor: "rgba(34, 211, 238, 0.10)",
    modal: {
      title: "游戏与电竞内容",
      description: "展示与游戏、电竞赛事观看、玩家社区观察和内容兴趣相关的图片材料。",
      images: [
        "/interests/gaming-esports/01.jpg",
        "/interests/gaming-esports/02.jpg",
        "/interests/gaming-esports/03.jpg",
        "/interests/gaming-esports/04.jpg",
      ],
    },
  },
  {
    title: "微缩模型制作",
    description:
      "平时喜欢制作微缩模型，享受从组装、上色到细节调整的过程，也会特别关注材质表现、造型设计和手工完成度。",
    icon: "🛠️",
    iconClass: "border-amber-200/20 bg-amber-300/10 text-amber-100",
    spotlightColor: "rgba(251, 191, 36, 0.10)",
    modal: {
      title: "微缩模型制作",
      description: "展示微缩模型制作、组装、上色、材质表现和细节调整过程相关图片。",
      images: [
        "/interests/miniature-models/01.jpg",
        "/interests/miniature-models/02.jpg",
        "/interests/miniature-models/03.jpg",
        "/interests/miniature-models/04.jpg",
      ],
    },
  },
  {
    title: "健身与阅读",
    description:
      "平时会通过健身保持状态，也有阅读习惯。一个帮助我保持稳定节奏，一个帮助我持续输入新内容和新想法。",
    icon: "📚",
    iconClass: "border-violet-200/20 bg-violet-300/10 text-violet-100",
    spotlightColor: "rgba(196, 181, 253, 0.10)",
    modal: {
      title: "健身与阅读",
      description: "展示健身、阅读、日常记录和个人状态管理相关图片。",
      images: [
        "/interests/fitness-reading/01.jpg",
        "/interests/fitness-reading/02.jpg",
        "/interests/fitness-reading/03.jpg",
        "/interests/fitness-reading/04.jpg",
      ],
    },
  },
];

const awards = [
  "2024/25 学年 XJTLU Academic Achievement Award",
  "腾讯广告 × XJTLU AI 漫剧创意大赛入围优秀作品奖",
  "毕业设计作品获学院 The Visionary Gesture Award",
  "受邀作为 XJTLU 优秀毕业生接受校方采访",
];

type SectionTitleProps = {
  eyebrow: string;
  title: string;
};

const navItems = [
  { label: "首页", href: "#top" },
  { label: "关于我", href: "#关于我" },
  { label: "项目", href: "#项目" },
  { label: "实习", href: "#实习" },
  { label: "能力", href: "#能力" },
  { label: "联系", href: "#联系" },
];

const topNavItems = navItems.filter((item) => item.label !== "首页");

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden">
      <BackgroundAnimation />
      <TopNavigation />

      <section id="top" className="relative mx-auto max-w-7xl px-4 pb-5 pt-24 sm:px-6 lg:px-8 lg:pb-8 lg:pt-28">
        <div className="relative flex min-h-[680px] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.18),transparent_22rem),radial-gradient(circle_at_82%_20%,rgba(251,146,60,0.16),transparent_24rem),linear-gradient(135deg,#061526_0%,#0b1220_50%,#120d12_100%)] p-5 shadow-[0_35px_110px_rgba(0,0,0,0.5)] sm:rounded-[2.75rem] sm:p-7 lg:h-[720px] lg:p-9">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40 [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
          <div className="pointer-events-none absolute -left-24 top-28 h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-orange-300/12 blur-3xl" />

          <div className="relative z-10 flex w-full flex-col justify-between gap-8">
            <div className="grid flex-1 items-center gap-10 pt-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.78fr)] lg:gap-12 lg:pt-0">
              <div className="max-w-3xl">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100 shadow-lg shadow-black/10 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.85)]" />
                  Open to Work
                </div>

                <h1 className="text-[clamp(2.5rem,9vw,5.8rem)] font-black leading-[0.95] tracking-[-0.06em] text-white">
                  李持
                  <span className="mt-2 block text-[0.72em] tracking-[-0.045em] text-cyan-100">Chi Li</span>
                </h1>

                <h2 className="mt-7 max-w-3xl text-xl font-semibold leading-snug text-white sm:text-2xl lg:text-[1.7rem]">
                  内容运营 / 项目执行 / AIGC 影像 / 游戏与电竞内容方向
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  艺术科技与娱乐专业背景，具备项目执行、跨部门沟通、内容制作、AIGC 影像创作与游戏测试经验。希望将内容制作能力、项目推进经验和游戏/电竞兴趣结合，应用于内容运营、活动执行、项目协调及电竞内容相关岗位。
                </p>

                <div className="mt-7 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                  <a className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition hover:border-cyan-200/35 hover:text-cyan-100" href="mailto:lichi2019@163.com">
                    <span className="text-slate-500">Email: </span>lichi2019@163.com
                  </a>
                  <a className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition hover:border-cyan-200/35 hover:text-cyan-100" href="tel:18566055261">
                    <span className="text-slate-500">Phone: </span>18566055261
                  </a>
                  <p className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 sm:col-span-2">
                    <span className="text-slate-500">Location: </span>Suzhou, Jiangsu, China
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a className="rounded-full bg-cyan-300 px-6 py-3 text-center text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-cyan-300/30" href="#项目">
                    查看项目案例
                  </a>
                  <a className="rounded-full bg-slate-900/60 px-6 py-3 text-center text-sm font-bold text-white ring-1 ring-cyan-200/30 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-cyan-300/10 hover:ring-cyan-200/70" href="/resume-chi-li.pdf" download>
                    下载简历
                  </a>
                  <a className="rounded-full bg-amber-400/10 px-6 py-3 text-center text-sm font-bold text-amber-100 ring-1 ring-amber-300/40 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-amber-400/25 hover:text-white hover:ring-amber-200/70" href="#联系">
                    联系我
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-end">
                <div className="relative w-full max-w-[295px] rounded-[2rem] border border-white/15 bg-white/[0.06] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-md">
                  <div className="aspect-[295/413] overflow-hidden rounded-[1.55rem] border border-white/10 bg-[linear-gradient(180deg,rgba(34,211,238,0.18),rgba(15,23,42,0.58)_46%,rgba(2,6,23,0.92))] p-4">
                    <div className="relative flex h-full flex-col items-center justify-center rounded-[1.2rem] border border-dashed border-cyan-100/35 bg-black/10 text-center">
                      <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-cyan-100/35 bg-cyan-100/10 text-4xl text-cyan-50">
                        人像
                      </div>
                      <p className="text-lg font-semibold text-white">求职头像 Placeholder</p>
                      <p className="mt-3 max-w-[12rem] text-sm leading-6 text-slate-300">
                        预留 295 × 413 px 比例，后续可替换为正式职业头像。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="关于我" className="scroll-mt-28 mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionTitle eyebrow="About" title="关于我" />
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/[0.06] hover:shadow-[0_20px_80px_rgba(34,211,238,0.12)] sm:p-8">
          <p className="max-w-5xl text-lg leading-9 text-slate-200">
            我是 XJTLU 艺术科技与娱乐专业应届毕业生，本科阶段长期处于全英文授课与跨文化协作环境中。我的项目经历覆盖商业创新、展览执行、AIGC 影像创作、短视频制作与游戏测试，熟悉从项目调研、任务推进、跨部门沟通到内容交付的完整流程。现求职方向包括内容运营、项目执行、活动策划助理及电竞内容运营，希望将内容制作能力、项目执行经验和游戏/电竞兴趣结合，应用于真实业务场景中的内容策划、活动落地与用户沟通。
          </p>
        </div>
      </section>

      <section id="项目" className="scroll-mt-28 mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionTitle eyebrow="Selected Work" title="核心项目" />
        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          {projects.map((project) => {
            const projectCard = (
              <SpotlightCard
                key={project.name}
                spotlightColor="rgba(34, 211, 238, 0.16)"
                className={`group flex h-full min-h-[460px] flex-col rounded-[1.75rem] border border-white/10 bg-[rgba(10,22,34,0.72)] p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-[rgba(12,30,44,0.82)] ${project.link || project.modal ? "cursor-pointer" : ""}`}
              >
                <div className="flex-1">
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-cyan-200">{project.time}</p>
                      <h3 className="mt-3 min-h-[4rem] text-2xl font-black leading-tight text-white">{project.name}</h3>
                    </div>
                    <span className="rounded-full border border-cyan-100/20 bg-cyan-100/10 px-3 py-1 text-xs font-medium text-cyan-50 sm:max-w-[18rem]">
                      {project.role}
                    </span>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/7 px-3 py-1 text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 leading-7 text-slate-300">{project.summary}</p>
                  <div className="mt-5 rounded-2xl border border-white/10 bg-black/15 p-4">
                    <h4 className="font-semibold text-slate-100">我的工作</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                      {project.work.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-4 border-l-2 border-cyan-300/60 pl-4 text-sm leading-6 text-slate-200">
                    <span className="font-semibold text-cyan-100">项目成果：</span>
                    {project.result}
                  </p>
                </div>
                {project.modal ? <p className="mt-5 text-xs font-semibold text-cyan-100/80">查看项目展示 ↗</p> : null}
                {project.link && !project.modal ? <p className="mt-5 text-xs font-semibold text-cyan-100/80">查看项目 ↗</p> : null}
              </SpotlightCard>
            );

            if (project.modal) {
              return (
                <ProjectModal key={project.name} modal={project.modal}>
                  {projectCard}
                </ProjectModal>
              );
            }

            if (project.link) {
              return (
                <a key={project.name} href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                  {projectCard}
                </a>
              );
            }

            return projectCard;
          })}
        </div>
      </section>

      <section id="实习" className="scroll-mt-28 mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionTitle eyebrow="Experience" title="实习经历" />
        <div className="grid gap-6 md:grid-cols-2">
          {internships.map((item) => {
            const internshipCard = (
              <SpotlightCard
                key={item.company}
                spotlightColor="rgba(34, 211, 238, 0.14)"
                className={`rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 ${item.modal ? "cursor-pointer" : ""}`}
              >
                <p className="text-sm font-medium text-cyan-200">{item.time}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{item.company}</h3>
                <p className="mt-2 font-semibold text-slate-200">{item.title}</p>
                <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
                {item.modal ? <p className="mt-4 text-xs font-semibold text-cyan-100/80">查看实习材料 ↗</p> : null}
              </SpotlightCard>
            );

            if (item.modal) {
              return (
                <ProjectModal key={item.company} modal={item.modal}>
                  {internshipCard}
                </ProjectModal>
              );
            }

            return internshipCard;
          })}
        </div>
      </section>

      <section id="能力" className="scroll-mt-28 mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionTitle eyebrow="Capabilities" title="核心能力" />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <SpotlightCard
              key={skill.title}
              spotlightColor="rgba(34, 211, 238, 0.14)"
              className="h-full rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-cyan-300/[0.04] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-white/[0.07] hover:shadow-[0_18px_70px_rgba(34,211,238,0.10)]"
            >
              <div className="flex h-full flex-col">
                <div className="flex-1">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/15 text-lg font-bold text-cyan-100">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white">{skill.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{skill.description}</p>
                </div>
                {skill.title === "语言能力" ? (
                  <a
                    href="/language-proof.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-fit items-center rounded-full border border-cyan-200/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold text-cyan-100 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-cyan-200/60 hover:bg-cyan-300/20 focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
                  >
                    查看语言能力证明↗
                  </a>
                ) : null}
              </div>
            </SpotlightCard>
          ))}
        </div>

        <div className="mt-10">
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/70">Personal Interests</p>
            <h3 className="mt-2 text-2xl font-bold text-white">个人兴趣</h3>
          </div>
          <div className="grid items-stretch gap-4 md:grid-cols-3">
            {personalInterests.map((interest) => {
              const interestCard = (
                <SpotlightCard
                  spotlightColor={interest.spotlightColor}
                  className="flex h-full flex-col rounded-[1.25rem] border border-white/10 bg-white/[0.025] p-5 shadow-lg shadow-black/10 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.045]"
                >
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border text-xl ${interest.iconClass}`}>
                    {interest.icon}
                  </div>
                  <h4 className="text-base font-bold text-white">{interest.title}</h4>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{interest.description}</p>
                  <p className="mt-4 text-xs font-semibold text-cyan-100/75">查看兴趣图组 ↗</p>
                </SpotlightCard>
              );

              return (
                <ProjectModal key={interest.title} modal={interest.modal}>
                  {interestCard}
                </ProjectModal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionTitle eyebrow="Awards" title="奖项荣誉" />
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            {awards.map((award) => (
              <SpotlightCard key={award} spotlightColor="rgba(251, 191, 36, 0.14)" className="flex gap-4 rounded-2xl border border-white/10 bg-black/10 p-4">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.75)]" />
                <p className="leading-7 text-slate-200">{award}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <section id="联系" className="scroll-mt-28 mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-cyan-200/20 bg-cyan-300/[0.08] p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">Contact</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">期待沟通合适的岗位机会</h2>
              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                如需查看完整简历、项目材料或进一步了解项目细节，欢迎通过邮件或电话联系我。
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-[#06121d]/75 p-6">
              <div className="space-y-4 text-slate-200">
                <p>
                  <span className="text-slate-400">Email：</span>
                  <a className="font-semibold text-cyan-100" href="mailto:lichi2019@163.com">
                    lichi2019@163.com
                  </a>
                </p>
                <p>
                  <span className="text-slate-400">Phone：</span>
                  <a className="font-semibold text-cyan-100" href="tel:18566055261">
                    18566055261
                  </a>
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a className="rounded-full bg-cyan-300 px-5 py-3 text-center text-sm font-bold text-slate-950" href="/resume-chi-li.pdf" download>
                  简历下载
                </a>
                <a className="rounded-full border border-white/15 px-5 py-3 text-center text-sm font-bold text-slate-100" href="#项目">
                  项目链接
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function TopNavigation() {
  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2">
      <nav className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-md sm:px-5">
        <a href="#top" className="shrink-0 text-sm font-black tracking-tight text-white transition-all duration-200 ease-out hover:text-cyan-200">
          ChiLi-LC
        </a>
        <div className="hidden items-center gap-6 text-sm font-semibold text-slate-300 md:flex">
          {topNavItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-all duration-200 ease-out hover:text-cyan-200">
              {item.label}
            </a>
          ))}
        </div>
        <a
          className="shrink-0 rounded-full bg-cyan-300 px-4 py-2 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-cyan-300/30 focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
          href="/resume-chi-li.pdf"
          download
        >
          下载简历
        </a>
      </nav>
    </header>
  );
}

function BackgroundAnimation() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="portfolio-grid-motion absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
      <div className="portfolio-glow absolute -left-24 top-10 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="portfolio-glow portfolio-glow-slow absolute right-[-8rem] top-24 h-[28rem] w-[28rem] rounded-full bg-amber-300/15 blur-3xl" />
      <div className="portfolio-glow portfolio-glow-slow absolute bottom-[-10rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-blue-500/15 blur-3xl" />
      <div className="portfolio-dot absolute left-[12%] top-[22%] h-2 w-2 rounded-full bg-cyan-200/25 shadow-[0_0_24px_rgba(34,211,238,0.35)]" />
      <div className="portfolio-dot absolute right-[18%] top-[34%] h-1.5 w-1.5 rounded-full bg-amber-200/20 shadow-[0_0_22px_rgba(251,191,36,0.28)]" />
      <div className="portfolio-dot absolute bottom-[28%] left-[22%] h-1.5 w-1.5 rounded-full bg-cyan-100/20 shadow-[0_0_20px_rgba(165,243,252,0.28)]" />
      <div className="portfolio-dot absolute bottom-[18%] right-[28%] h-2 w-2 rounded-full bg-blue-200/15 shadow-[0_0_22px_rgba(147,197,253,0.22)]" />
    </div>
  );
}

function SectionTitle({ eyebrow, title }: SectionTitleProps) {
  return (
    <div className="mb-8">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
    </div>
  );
}
