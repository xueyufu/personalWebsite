import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DkuTCc0I.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_DGA8I9Xr.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const experiences = [
    {
      period: "2022 - \u81F3\u4ECA",
      company: "B2B\u5E73\u53F0\u516C\u53F8",
      role: "\u9AD8\u7EA7\u4EA7\u54C1\u7ECF\u7406",
      problem: "\u8D1F\u8D23\u6838\u5FC3\u534F\u4F5C\u5E73\u53F0\u7684\u4EA7\u54C1\u8BBE\u8BA1\u4E0E\u8FED\u4EE3",
      result: "\u7528\u6237\u6D3B\u8DC3\u5EA6\u63D0\u534740%\uFF0C\u534F\u4F5C\u6548\u7387\u63D0\u534750%",
      abilities: ["\u590D\u6742\u7CFB\u7EDF\u7ED3\u6784\u5316", "\u6E05\u6670\u8868\u8FBE\u63A8\u52A8\u534F\u4F5C"]
    },
    {
      period: "2020 - 2022",
      company: "\u6570\u636E\u4EA7\u54C1\u516C\u53F8",
      role: "\u4EA7\u54C1\u7ECF\u7406",
      problem: "\u4ECE0\u52301\u642D\u5EFA\u6570\u636E\u5206\u6790\u5E73\u53F0",
      result: "\u670D\u52A1\u8D85\u8FC750\u5BB6\u4F01\u4E1A\u5BA2\u6237\uFF0C\u6570\u636E\u51B3\u7B56\u6548\u7387\u63D0\u534760%",
      abilities: ["\u590D\u6742\u7CFB\u7EDF\u7ED3\u6784\u5316", "\u4E0D\u6E05\u6670\u573A\u666F\u51B3\u7B56"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "\u5173\u4E8E\u6211", "currentPath": "/about", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-header" data-astro-cid-kh7btl4r> <div class="container-narrow" data-astro-cid-kh7btl4r> <h1 class="title-hero mb-3" data-astro-cid-kh7btl4r>将复杂问题结构化的产品经理</h1> <p class="text-lead" data-astro-cid-kh7btl4r>
4年产品经验，专注于将复杂的系统、流程、知识拆解为清晰的框架。<br data-astro-cid-kh7btl4r>
在不清晰的场景下做关键决策，用清晰表达推动团队协作。
</p> </div> </section> <section class="about-section" data-astro-cid-kh7btl4r> <div class="container" data-astro-cid-kh7btl4r> <h2 class="title-section mb-5" data-astro-cid-kh7btl4r>我的价值观</h2> <div class="values-grid" data-astro-cid-kh7btl4r> <div class="value-card card" data-astro-cid-kh7btl4r> <div class="value-icon" data-astro-cid-kh7btl4r>🧩</div> <h3 class="title-sub mb-2" data-astro-cid-kh7btl4r>结构化思考</h3> <p class="text-body text-muted" data-astro-cid-kh7btl4r>
任何复杂问题都可以拆解为清晰的框架。先建立结构，再填充细节。
</p> </div> <div class="value-card card" data-astro-cid-kh7btl4r> <div class="value-icon" data-astro-cid-kh7btl4r>🎯</div> <h3 class="title-sub mb-2" data-astro-cid-kh7btl4r>价值导向</h3> <p class="text-body text-muted" data-astro-cid-kh7btl4r>
产品不是炫技，而是解决问题。始终关注业务价值和用户价值。
</p> </div> <div class="value-card card" data-astro-cid-kh7btl4r> <div class="value-icon" data-astro-cid-kh7btl4r>🔄</div> <h3 class="title-sub mb-2" data-astro-cid-kh7btl4r>持续迭代</h3> <p class="text-body text-muted" data-astro-cid-kh7btl4r>
不追求完美方案，而是快速验证、持续优化。小步快跑，快速反馈。
</p> </div> <div class="value-card card" data-astro-cid-kh7btl4r> <div class="value-icon" data-astro-cid-kh7btl4r>💬</div> <h3 class="title-sub mb-2" data-astro-cid-kh7btl4r>清晰表达</h3> <p class="text-body text-muted" data-astro-cid-kh7btl4r>
用简单的语言讲复杂的问题，让每个人都能理解并参与决策。
</p> </div> </div> </div> </section> <section class="experience-section" data-astro-cid-kh7btl4r> <div class="container" data-astro-cid-kh7btl4r> <h2 class="title-section mb-5" data-astro-cid-kh7btl4r>工作经历</h2> <div class="experience-list" data-astro-cid-kh7btl4r> ${experiences.map((exp) => renderTemplate`<div class="experience-item" data-astro-cid-kh7btl4r> <div class="experience-header" data-astro-cid-kh7btl4r> <div data-astro-cid-kh7btl4r> <h3 class="title-sub" data-astro-cid-kh7btl4r>${exp.role}</h3> <p class="text-small text-muted" data-astro-cid-kh7btl4r>${exp.company} · ${exp.period}</p> </div> </div> <div class="experience-content card" data-astro-cid-kh7btl4r> <div class="experience-point mb-3" data-astro-cid-kh7btl4r> <span class="text-small text-muted" data-astro-cid-kh7btl4r>核心问题：</span> <span class="text-body" data-astro-cid-kh7btl4r>${exp.problem}</span> </div> <div class="experience-point mb-3" data-astro-cid-kh7btl4r> <span class="text-small text-muted" data-astro-cid-kh7btl4r>核心成果：</span> <span class="text-body" style="color: var(--primary-color); font-weight: 500;" data-astro-cid-kh7btl4r> ${exp.result} </span> </div> <div class="experience-abilities" data-astro-cid-kh7btl4r> ${exp.abilities.map((ability) => renderTemplate`<span class="tag ability-tag-sm" data-astro-cid-kh7btl4r>${ability}</span>`)} </div> </div> </div>`)} </div> </div> </section> <section class="cta-section" data-astro-cid-kh7btl4r> <div class="container-narrow" style="text-align: center;" data-astro-cid-kh7btl4r> <h2 class="title-section mb-4" data-astro-cid-kh7btl4r>想了解更多？</h2> <p class="text-lead mb-5" data-astro-cid-kh7btl4r>
欢迎与我交流产品思维、案例或合作机会
</p> <a href="/contact" class="btn btn-primary" data-astro-cid-kh7btl4r>联系我</a> </div> </section> ` })} `;
}, "/Users/xueyufu/my-apps/personalWebsite/src/pages/about.astro", void 0);

const $$file = "/Users/xueyufu/my-apps/personalWebsite/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
