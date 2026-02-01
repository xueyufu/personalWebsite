import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from '../chunks/astro/server_DkuTCc0I.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_DGA8I9Xr.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const hero = {
    title: "\u5C06\u590D\u6742\u95EE\u9898\u7ED3\u6784\u5316\u7684\u4EA7\u54C1\u7ECF\u7406",
    subtitle: "4\u5E74\u4EA7\u54C1\u7ECF\u9A8C\uFF0C\u4E13\u6CE8\u4E8E\u5C06\u590D\u6742\u7684\u7CFB\u7EDF\u3001\u6D41\u7A0B\u3001\u77E5\u8BC6\u62C6\u89E3\u4E3A\u6E05\u6670\u7684\u6846\u67B6\u3002\n\u5728\u4E0D\u6E05\u6670\u7684\u573A\u666F\u4E0B\u505A\u5173\u952E\u51B3\u7B56\uFF0C\u7528\u6E05\u6670\u8868\u8FBE\u63A8\u52A8\u56E2\u961F\u534F\u4F5C\u3002",
    cta: {
      primary: { text: "\u770B\u6848\u4F8B", href: "/cases" },
      secondary: { text: "\u8054\u7CFB\u6211", href: "/contact" }
    }
  };
  const abilities = [
    {
      icon: "\u{1F9E9}",
      title: "\u590D\u6742\u7CFB\u7EDF\u7ED3\u6784\u5316",
      description: "\u5C06\u6DF7\u4E71\u7684\u4FE1\u606F\u3001\u6D41\u7A0B\u3001\u77E5\u8BC6\u62C6\u89E3\u4E3A\u6E05\u6670\u7684\u6846\u67B6\uFF0C\u8BA9\u56E2\u961F\u5BF9\u9F50\u76EE\u6807\u3002",
      evidence: "\u67D0\u4F01\u4E1A\u7EA7\u7CFB\u7EDF\uFF0C\u68B3\u7406\u51FA3\u5C42\u6CBB\u7406\u6A21\u578B\uFF0C\u4E0A\u7EBF\u540E\u95EE\u9898\u5904\u7406\u6548\u7387\u63D0\u534760%"
    },
    {
      icon: "\u{1F3AF}",
      title: "\u4E0D\u6E05\u6670\u573A\u666F\u51B3\u7B56",
      description: "\u5728\u4FE1\u606F\u4E0D\u5B8C\u6574\u3001\u9700\u6C42\u51B2\u7A81\u65F6\uFF0C\u7528\u7ED3\u6784\u5316\u65B9\u6CD5\u505A\u5173\u952E\u5224\u65AD\u3002",
      evidence: "\u9762\u5BF9\u591A\u65B9\u9700\u6C42\u51B2\u7A81\uFF0C\u5EFA\u7ACB\u4F18\u5148\u7EA7\u6A21\u578B\uFF0C\u51B3\u7B56\u5468\u671F\u7F29\u77ED40%"
    },
    {
      icon: "\u{1F4AC}",
      title: "\u6E05\u6670\u8868\u8FBE\u63A8\u52A8\u534F\u4F5C",
      description: "\u7528\u7B80\u5355\u8BED\u8A00\u8BB2\u590D\u6742\u95EE\u9898\uFF0C\u63A8\u52A8\u56E2\u961F\u5BF9\u9F50\u76EE\u6807\u548C\u9884\u671F\u3002",
      evidence: "\u8DE8\u90E8\u95E8\u9879\u76EE\uFF0C\u5C06\u6280\u672F\u8BED\u8A00\u8F6C\u5316\u4E3A\u4E1A\u52A1\u8BED\u8A00\uFF0C\u534F\u4F5C\u6548\u7387\u63D0\u534750%"
    }
  ];
  const featuredCase = {
    title: "\u4ECE0\u642D\u5EFA\u534F\u4F5C\u6846\u67B6",
    subtitle: "\u89E3\u51B3\u8DE8\u90E8\u95E8\u534F\u4F5C\u6548\u7387\u95EE\u9898",
    tags: ["\u590D\u6742\u7CFB\u7EDF", "0-1", "\u8DE8\u90E8\u95E8"],
    result: "\u534F\u4F5C\u6548\u7387\u63D0\u534750%",
    href: "/cases/collaboration-framework"
  };
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "\u9996\u9875", "currentPath": "/", "description": "\u5C06\u590D\u6742\u95EE\u9898\u7ED3\u6784\u5316\u7684\u4EA7\u54C1\u7ECF\u7406", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="section-hero" data-astro-cid-j7pv25f6> <div class="container-narrow" data-astro-cid-j7pv25f6> <h1 class="title-hero" data-astro-cid-j7pv25f6>${hero.title}</h1> <p class="text-lead" data-astro-cid-j7pv25f6>${unescapeHTML(hero.subtitle.replace(/\n/g, "<br>"))}</p> <div class="hero-cta" data-astro-cid-j7pv25f6> <a${addAttribute(hero.cta.primary.href, "href")} class="btn btn-primary" data-astro-cid-j7pv25f6> ${hero.cta.primary.text} </a> <a${addAttribute(hero.cta.secondary.href, "href")} class="btn btn-secondary" data-astro-cid-j7pv25f6> ${hero.cta.secondary.text} </a> </div> </div> </section>  <section class="section" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <h2 class="title-section" data-astro-cid-j7pv25f6>核心能力</h2> <div class="abilities-grid" data-astro-cid-j7pv25f6> ${abilities.map((ability) => renderTemplate`<div class="ability-card card" data-astro-cid-j7pv25f6> <div class="ability-icon" data-astro-cid-j7pv25f6>${ability.icon}</div> <h3 class="title-card" data-astro-cid-j7pv25f6>${ability.title}</h3> <p class="text-body" data-astro-cid-j7pv25f6>${ability.description}</p> <p class="text-small text-muted mt-4" data-astro-cid-j7pv25f6>${ability.evidence}</p> </div>`)} </div> </div> </section>  <section class="section bg-light" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <h2 class="title-section" data-astro-cid-j7pv25f6>最新案例</h2> <div class="featured-case-card card" data-astro-cid-j7pv25f6> <div class="case-header" data-astro-cid-j7pv25f6> <div class="case-tags" data-astro-cid-j7pv25f6> ${featuredCase.tags.map((tag) => renderTemplate`<span class="tag" data-astro-cid-j7pv25f6>${tag}</span>`)} </div> <span class="case-result text-small" data-astro-cid-j7pv25f6>${featuredCase.result}</span> </div> <h3 class="title-card" data-astro-cid-j7pv25f6>${featuredCase.title}</h3> <p class="text-body mb-4" data-astro-cid-j7pv25f6>${featuredCase.subtitle}</p> <a${addAttribute(featuredCase.href, "href")} class="btn btn-secondary btn-sm" data-astro-cid-j7pv25f6>查看详情</a> </div> </div> </section> ` })} `;
}, "/Users/xueyufu/my-apps/personalWebsite/src/pages/index.astro", void 0);

const $$file = "/Users/xueyufu/my-apps/personalWebsite/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
