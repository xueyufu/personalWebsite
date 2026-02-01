import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DkuTCc0I.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_DGA8I9Xr.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Abilities = createComponent(($$result, $$props, $$slots) => {
  const abilities = [
    {
      id: "structure",
      icon: "\u{1F9E9}",
      title: "\u590D\u6742\u7CFB\u7EDF\u7ED3\u6784\u5316",
      description: "\u5C06\u6DF7\u4E71\u7684\u4FE1\u606F\u3001\u6D41\u7A0B\u3001\u77E5\u8BC6\u62C6\u89E3\u4E3A\u6E05\u6670\u7684\u6846\u67B6\uFF0C\u8BA9\u56E2\u961F\u5BF9\u9F50\u76EE\u6807",
      framework: [
        "\u4FE1\u606F\u6536\u96C6\uFF1A\u68B3\u7406\u73B0\u72B6\u3001\u8BC6\u522B\u95EE\u9898\u57DF",
        "\u5206\u5C42\u62C6\u89E3\uFF1A\u5C06\u590D\u6742\u7CFB\u7EDF\u5206\u89E3\u4E3A\u72EC\u7ACB\u6A21\u5757",
        "\u5173\u7CFB\u5EFA\u6A21\uFF1A\u5B9A\u4E49\u6A21\u5757\u95F4\u4F9D\u8D56\u548C\u6570\u636E\u6D41\u5411",
        "\u4F18\u5148\u7EA7\u6392\u5E8F\uFF1A\u660E\u786E\u6838\u5FC3\u8DEF\u5F84\u4E0E\u53EF\u5EF6\u540E\u90E8\u5206"
      ],
      cases: [
        { title: "\u4F01\u4E1A\u7EA7\u7CFB\u7EDF\u6CBB\u7406\u6A21\u578B", result: "\u95EE\u9898\u5904\u7406\u6548\u7387\u63D0\u534760%" },
        { title: "\u6570\u636E\u5E73\u53F0\u67B6\u6784\u62C6\u89E3", result: "\u9700\u6C42\u8BC4\u5BA1\u65F6\u95F4\u7F29\u77ED50%" }
      ],
      metrics: {
        value: "60%",
        label: "\u95EE\u9898\u5904\u7406\u6548\u7387\u63D0\u5347"
      }
    },
    {
      id: "decision",
      icon: "\u{1F3AF}",
      title: "\u4E0D\u6E05\u6670\u573A\u666F\u51B3\u7B56",
      description: "\u5728\u4FE1\u606F\u4E0D\u5B8C\u6574\u3001\u9700\u6C42\u51B2\u7A81\u65F6\uFF0C\u7528\u7ED3\u6784\u5316\u65B9\u6CD5\u505A\u5173\u952E\u5224\u65AD",
      framework: [
        "\u95EE\u9898\u5B9A\u4E49\uFF1A\u660E\u786E\u6838\u5FC3\u76EE\u6807\u548C\u7EA6\u675F\u6761\u4EF6",
        "\u5047\u8BBE\u9A8C\u8BC1\uFF1A\u63D0\u51FA\u53EF\u9A8C\u8BC1\u7684\u5047\u8BBE\u5E76\u8BBE\u8BA1\u5B9E\u9A8C",
        "\u6743\u8861\u5206\u6790\uFF1A\u8BC4\u4F30\u4E0D\u540C\u65B9\u6848\u7684\u5229\u5F0A\u548C\u98CE\u9669",
        "\u8FED\u4EE3\u4F18\u5316\uFF1A\u5FEB\u901F\u8BD5\u9519\uFF0C\u57FA\u4E8E\u53CD\u9988\u8C03\u6574"
      ],
      cases: [
        { title: "\u9700\u6C42\u51B2\u7A81\u4F18\u5148\u7EA7\u6A21\u578B", result: "\u51B3\u7B56\u5468\u671F\u7F29\u77ED40%" },
        { title: "\u4E0D\u786E\u5B9A\u6027\u573A\u666F\u8BC4\u4F30", result: "\u9879\u76EE\u6210\u529F\u7387\u63D0\u534730%" }
      ],
      metrics: {
        value: "40%",
        label: "\u51B3\u7B56\u5468\u671F\u7F29\u77ED"
      }
    },
    {
      id: "communication",
      icon: "\u{1F4AC}",
      title: "\u6E05\u6670\u8868\u8FBE\u63A8\u52A8\u534F\u4F5C",
      description: "\u7528\u7B80\u5355\u8BED\u8A00\u8BB2\u590D\u6742\u95EE\u9898\uFF0C\u63A8\u52A8\u56E2\u961F\u5BF9\u9F50\u76EE\u6807\u548C\u9884\u671F",
      framework: [
        "\u53D7\u4F17\u5206\u6790\uFF1A\u7406\u89E3\u5BF9\u65B9\u80CC\u666F\u548C\u5173\u6CE8\u70B9",
        "\u7ED3\u6784\u5316\u8868\u8FBE\uFF1A\u7528MECE\u7B49\u6846\u67B6\u7EC4\u7EC7\u4FE1\u606F",
        "\u53EF\u89C6\u5316\u5448\u73B0\uFF1A\u7528\u56FE\u8868\u964D\u4F4E\u7406\u89E3\u95E8\u69DB",
        "\u786E\u8BA4\u4E0E\u53CD\u9988\uFF1A\u786E\u4FDD\u5BF9\u65B9\u7406\u89E3\u5E76\u83B7\u53D6\u53CD\u9988"
      ],
      cases: [
        { title: "\u8DE8\u90E8\u95E8\u534F\u4F5C\u8BED\u8A00\u8F6C\u6362", result: "\u534F\u4F5C\u6548\u7387\u63D0\u534750%" },
        { title: "\u590D\u6742\u65B9\u6848\u7B80\u5316\u8BF4\u660E", result: "\u65B9\u6848\u901A\u8FC7\u7387\u63D0\u534770%" }
      ],
      metrics: {
        value: "50%",
        label: "\u534F\u4F5C\u6548\u7387\u63D0\u5347"
      }
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "\u6838\u5FC3\u80FD\u529B", "currentPath": "/abilities", "data-astro-cid-qedct5sj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-header" data-astro-cid-qedct5sj> <div class="container-narrow" data-astro-cid-qedct5sj> <h1 class="title-hero mb-3" data-astro-cid-qedct5sj>我是如何思考的</h1> <p class="text-lead" data-astro-cid-qedct5sj>
思考方式比经验更重要。无论在什么行业、面对什么产品，我始终用同样的框架解决问题。
</p> </div> </section> <section class="abilities" data-astro-cid-qedct5sj> <div class="container" data-astro-cid-qedct5sj> ${abilities.map((ability) => renderTemplate`<div class="ability-section"${addAttribute(ability.id, "id")} data-astro-cid-qedct5sj> <div class="ability-header" data-astro-cid-qedct5sj> <div class="ability-icon" data-astro-cid-qedct5sj>${ability.icon}</div> <div data-astro-cid-qedct5sj> <h2 class="title-card" data-astro-cid-qedct5sj>${ability.title}</h2> <p class="text-body text-muted" data-astro-cid-qedct5sj>${ability.description}</p> </div> <div class="ability-metrics" data-astro-cid-qedct5sj> <div class="metrics-value" data-astro-cid-qedct5sj>${ability.metrics.value}</div> <div class="metrics-label" data-astro-cid-qedct5sj>${ability.metrics.label}</div> </div> </div> <div class="ability-content" data-astro-cid-qedct5sj> <div class="framework-card card" data-astro-cid-qedct5sj> <h3 class="title-sub mb-3" data-astro-cid-qedct5sj>思考框架</h3> <ol class="framework-list" data-astro-cid-qedct5sj> ${ability.framework.map((step, i) => renderTemplate`<li class="framework-item" data-astro-cid-qedct5sj> <span class="step-number" data-astro-cid-qedct5sj>${i + 1}</span> <span class="step-text" data-astro-cid-qedct5sj>${step}</span> </li>`)} </ol> </div> <div class="cases-card" data-astro-cid-qedct5sj> <h3 class="title-sub mb-3" data-astro-cid-qedct5sj>应用案例</h3> ${ability.cases.map((c) => renderTemplate`<div class="case-item" data-astro-cid-qedct5sj> <div data-astro-cid-qedct5sj> <div class="case-title" data-astro-cid-qedct5sj>${c.title}</div> <div class="case-result text-small text-muted" data-astro-cid-qedct5sj>${c.result}</div> </div> </div>`)} </div> </div> </div>`)} </div> </section> <section class="cta-section" data-astro-cid-qedct5sj> <div class="container-narrow" style="text-align: center;" data-astro-cid-qedct5sj> <h2 class="title-section mb-4" data-astro-cid-qedct5sj>想看完整案例？</h2> <a href="/cases" class="btn btn-primary" data-astro-cid-qedct5sj>查看案例集</a> </div> </section> ` })} `;
}, "/Users/xueyufu/my-apps/personalWebsite/src/pages/abilities.astro", void 0);

const $$file = "/Users/xueyufu/my-apps/personalWebsite/src/pages/abilities.astro";
const $$url = "/abilities";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Abilities,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
