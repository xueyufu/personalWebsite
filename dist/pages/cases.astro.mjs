import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DkuTCc0I.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_DGA8I9Xr.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Cases = createComponent(($$result, $$props, $$slots) => {
  const cases = [
    {
      id: "collaboration-framework",
      title: "\u4ECE0\u642D\u5EFA\u534F\u4F5C\u6846\u67B6",
      subtitle: "\u89E3\u51B3\u8DE8\u90E8\u95E8\u534F\u4F5C\u6548\u7387\u95EE\u9898",
      tags: ["\u590D\u6742\u7CFB\u7EDF", "0-1", "\u8DE8\u90E8\u95E8"],
      abilityTag: "\u590D\u6742\u7CFB\u7EDF\u7ED3\u6784\u5316",
      challenge: "\u516C\u53F8\u5185\u90E8\u8DE8\u90E8\u95E8\u534F\u4F5C\u6DF7\u4E71\uFF0C\u9700\u6C42\u4F20\u9012\u94FE\u8DEF\u957F\uFF0C\u4FE1\u606F\u5931\u771F\u4E25\u91CD\uFF0C\u9879\u76EE\u7ECF\u5E38\u5EF6\u671F",
      framework: "\u4FE1\u606F\u6536\u96C6 \u2192 \u5206\u5C42\u62C6\u89E3 \u2192 \u5173\u7CFB\u5EFA\u6A21 \u2192 \u4F18\u5148\u7EA7\u6392\u5E8F",
      result: "\u534F\u4F5C\u6548\u7387\u63D0\u534750%",
      href: "/cases/collaboration-framework"
    },
    {
      id: "conflict-resolution",
      title: "\u9700\u6C42\u51B2\u7A81\u4F18\u5148\u7EA7\u6A21\u578B",
      subtitle: "\u89E3\u51B3\u591A\u65B9\u9700\u6C42\u51B2\u7A81\u7684\u51B3\u7B56\u96BE\u9898",
      tags: ["\u4E0D\u6E05\u6670\u573A\u666F", "\u51B3\u7B56\u6A21\u578B", "\u591A\u65B9\u534F\u4F5C"],
      abilityTag: "\u4E0D\u6E05\u6670\u573A\u666F\u51B3\u7B56",
      challenge: "\u4EA7\u54C1\u3001\u8FD0\u8425\u3001\u6280\u672F\u56E2\u961F\u5BF9\u9700\u6C42\u4F18\u5148\u7EA7\u8BA4\u77E5\u4E0D\u4E00\u81F4\uFF0C\u51B3\u7B56\u5468\u671F\u957F\uFF0C\u9879\u76EE\u63A8\u8FDB\u7F13\u6162",
      framework: "\u95EE\u9898\u5B9A\u4E49 \u2192 \u5047\u8BBE\u9A8C\u8BC1 \u2192 \u6743\u8861\u5206\u6790 \u2192 \u8FED\u4EE3\u4F18\u5316",
      result: "\u51B3\u7B56\u5468\u671F\u7F29\u77ED40%",
      href: "/cases/conflict-resolution"
    },
    {
      id: "technical-simplification",
      title: "\u590D\u6742\u65B9\u6848\u7B80\u5316\u8BF4\u660E",
      subtitle: "\u5C06\u6280\u672F\u65B9\u6848\u8F6C\u5316\u4E3A\u4E1A\u52A1\u8BED\u8A00",
      tags: ["\u6E05\u6670\u8868\u8FBE", "\u6280\u672F\u8F6C\u5316", "\u65B9\u6848\u8BC4\u5BA1"],
      abilityTag: "\u6E05\u6670\u8868\u8FBE\u63A8\u52A8\u534F\u4F5C",
      challenge: "\u6280\u672F\u65B9\u6848\u590D\u6742\uFF0C\u4E1A\u52A1\u65B9\u65E0\u6CD5\u7406\u89E3\uFF0C\u65B9\u6848\u8BC4\u5BA1\u901A\u8FC7\u7387\u4F4E\uFF0C\u53CD\u590D\u6C9F\u901A\u6210\u672C\u9AD8",
      framework: "\u53D7\u4F17\u5206\u6790 \u2192 \u7ED3\u6784\u5316\u8868\u8FBE \u2192 \u53EF\u89C6\u5316\u5448\u73B0 \u2192 \u786E\u8BA4\u4E0E\u53CD\u9988",
      result: "\u65B9\u6848\u901A\u8FC7\u7387\u63D0\u534770%",
      href: "/cases/technical-simplification"
    }
  ];
  const abilityTags = [...new Set(cases.map((c) => c.abilityTag))];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "\u6848\u4F8B\u96C6", "currentPath": "/cases", "data-astro-cid-pl7l34ca": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-header" data-astro-cid-pl7l34ca> <div class="container-narrow" data-astro-cid-pl7l34ca> <h1 class="title-hero mb-3" data-astro-cid-pl7l34ca>解决问题的方式</h1> <p class="text-lead" data-astro-cid-pl7l34ca>
每个案例都展示了"问题-思考-结果"的完整链路。<br data-astro-cid-pl7l34ca>
我关注的是"解决什么问题"，而不是"用了什么技术"。
</p> </div> </section> <section class="cases-section" data-astro-cid-pl7l34ca> <div class="container" data-astro-cid-pl7l34ca> <div class="filter-section" data-astro-cid-pl7l34ca> <div class="filter-label text-small text-muted" data-astro-cid-pl7l34ca>按核心能力筛选：</div> <div class="filter-tags" data-astro-cid-pl7l34ca> <button class="filter-tag active" data-filter="all" data-astro-cid-pl7l34ca>全部</button> ${abilityTags.map((tag) => renderTemplate`<button class="filter-tag"${addAttribute(tag, "data-filter")} data-astro-cid-pl7l34ca>${tag}</button>`)} </div> </div> <div class="cases-grid" data-astro-cid-pl7l34ca> ${cases.map((c) => renderTemplate`<article class="card case-card"${addAttribute(c.abilityTag, "data-ability")} data-astro-cid-pl7l34ca> <div class="case-header" data-astro-cid-pl7l34ca> <div class="case-tags" data-astro-cid-pl7l34ca> ${c.tags.map((tag) => renderTemplate`<span class="tag" data-astro-cid-pl7l34ca>${tag}</span>`)} </div> <span class="ability-tag" data-astro-cid-pl7l34ca>${c.abilityTag}</span> </div> <h3 class="title-card mb-2" data-astro-cid-pl7l34ca>${c.title}</h3> <p class="text-body mb-3" data-astro-cid-pl7l34ca>${c.subtitle}</p> <div class="case-challenge mb-4" data-astro-cid-pl7l34ca> <span class="text-small text-muted" data-astro-cid-pl7l34ca>核心挑战：</span> <span class="text-body" data-astro-cid-pl7l34ca>${c.challenge}</span> </div> <div class="case-footer" data-astro-cid-pl7l34ca> <div class="case-result text-small text-muted" data-astro-cid-pl7l34ca>${c.result}</div> <a${addAttribute(c.href, "href")} class="btn btn-outline btn-sm" data-astro-cid-pl7l34ca>查看详情</a> </div> </article>`)} </div> </div> </section> ` })} `;
}, "/Users/xueyufu/my-apps/personalWebsite/src/pages/cases.astro", void 0);

const $$file = "/Users/xueyufu/my-apps/personalWebsite/src/pages/cases.astro";
const $$url = "/cases";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cases,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
