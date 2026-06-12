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
  },
];

const internships = [
  {
    company: "旺石新材有限公司",
    title: "产品宣传短视频制作",
    time: "2025.12–2026.02",
    description:
      "负责产品宣传短视频的拍摄构思、素材整理、剪辑调色与基础声效处理，支持企业产品信息以更直观的方式触达客户。",
  },
  {
    company: "赣浔建材有限公司",
    title: "客户宣传手册编辑",
    time: "2024.06–2024.08",
    description:
      "参与客户宣传手册的信息梳理、文案编辑、版面校对与资料整合，提升宣传材料的阅读清晰度与商务沟通效率。",
  },
];

const skills = [
  {
    title: "项目执行",
    description: "跨部门沟通、会议记录、任务跟进、预算整理、报销流程、现场执行",
  },
  {
    title: "内容制作",
    description: "短视频拍摄、剪辑、调色、基础声效、宣传物料设计、多平台内容适配",
  },
  {
    title: "AIGC 流程",
    description: "提示词优化、AI 视频生成、素材筛选、后期整合、低成本内容生产",
  },
  {
    title: "电竞与内容兴趣",
    description:
      "长期关注 FPS 与战术竞技类游戏，持续观看无畏契约 VCT CN 赛事，了解职业赛事节奏、战队内容语境与玩家社区讨论方式",
  },
];

const awards = [
  "2024/25 学年 XJTLU Academic Achievement Award",
  "腾讯广告 × XJTLU AI 漫剧创意大赛入围优秀作品奖",
  "毕业设计作品获学院 The Visionary Gesture Award",
  "受邀作为 XJTLU 优秀毕业生接受校方采访",
];

const navItems = ["关于我", "项目", "实习", "能力", "联系"];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#050b12]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="text-sm font-semibold tracking-[0.3em] text-cyan-200">
            CHI LI
          </a>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} className="transition hover:text-cyan-200">
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section id="top" className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
            Open to Work · 内容运营 / 项目执行 / 活动策划 / 电竞内容
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            李持 <span className="text-cyan-200">Chi Li</span>
          </h1>
          <h2 className="mt-6 max-w-3xl text-2xl font-semibold leading-snug text-slate-100 sm:text-3xl">
            内容运营 / 项目执行 / AIGC 影像 / 游戏与电竞内容方向
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            艺术科技与娱乐专业应届毕业生，具备项目执行、跨部门沟通、内容制作、AIGC 影像创作与游戏测试经验。希望将项目执行能力、内容制作经验和游戏/电竞兴趣结合，应用于内容运营、活动执行、项目协调或电竞内容相关岗位。
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a className="rounded-full bg-cyan-300 px-6 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-200" href="#项目">
              查看项目案例
            </a>
            <a className="rounded-full border border-cyan-200/40 px-6 py-3 text-center text-sm font-bold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-200/10" href="/resume-chi-li.pdf" download>
              下载简历
            </a>
            <a className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-bold text-slate-100 transition hover:border-white/35 hover:bg-white/10" href="#联系">
              联系我
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[295px] lg:ml-auto lg:mr-12">
          <div className="relative aspect-[295/413] overflow-hidden rounded-[2rem] border border-cyan-200/25 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_18%,rgba(34,211,238,0.28),transparent_30%),linear-gradient(180deg,transparent,rgba(3,7,18,0.78))]" />
            <div className="relative flex h-full flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-cyan-100/30 bg-white/[0.03] text-center">
              <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-cyan-100/30 bg-cyan-100/10 text-4xl">
                人像
              </div>
              <p className="text-lg font-semibold text-white">求职头像 Placeholder</p>
              <p className="mt-3 max-w-[12rem] text-sm leading-6 text-slate-300">
                预留 295 × 413 px 比例，后续可替换为正式证件或职业头像。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="关于我" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionTitle eyebrow="About" title="关于我" />
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 sm:p-8">
          <p className="max-w-5xl text-lg leading-9 text-slate-200">
            我是 XJTLU 艺术科技与娱乐专业应届毕业生，长期处于全英文授课与跨文化协作环境中。过往项目覆盖商业创新、展览执行、AIGC 影像创作、短视频制作与游戏测试，熟悉从需求拆解、任务推进到内容交付的流程。现求职方向为内容运营、项目执行、活动策划助理及电竞内容运营，希望在真实业务中连接创意、执行与用户沟通。
          </p>
        </div>
      </section>

      <section id="项目" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionTitle eyebrow="Selected Work" title="核心项目" />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.name} className="group rounded-[1.75rem] border border-white/10 bg-[rgba(10,22,34,0.72)] p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-[rgba(12,30,44,0.82)]">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-cyan-200">{project.time}</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">{project.name}</h3>
                </div>
                <span className="rounded-full border border-cyan-200/25 bg-cyan-200/10 px-3 py-1 text-sm text-cyan-100">
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
            </article>
          ))}
        </div>
      </section>

      <section id="实习" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionTitle eyebrow="Experience" title="实习经历" />
        <div className="grid gap-6 md:grid-cols-2">
          {internships.map((item) => (
            <article key={item.company} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm font-medium text-cyan-200">{item.time}</p>
              <h3 className="mt-2 text-2xl font-bold text-white">{item.company}</h3>
              <p className="mt-2 font-semibold text-slate-200">{item.title}</p>
              <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="能力" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionTitle eyebrow="Capabilities" title="核心能力" />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <article key={skill.title} className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-cyan-300/[0.04] p-6">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/15 text-lg font-bold text-cyan-100">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-white">{skill.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{skill.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionTitle eyebrow="Awards" title="奖项荣誉" />
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            {awards.map((award) => (
              <div key={award} className="flex gap-4 rounded-2xl border border-white/10 bg-black/10 p-4">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.75)]" />
                <p className="leading-7 text-slate-200">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="联系" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
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

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
    </div>
  );
}
