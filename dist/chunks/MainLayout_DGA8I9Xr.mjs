import { d as createAstro, c as createComponent, b as addAttribute, e as renderHead, f as renderSlot, a as renderTemplate, r as renderComponent, m as maybeRenderHead } from './astro/server_DkuTCc0I.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                             */

const $$Astro$1 = createAstro("https://your-portfolio.vercel.app");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description = "\u5C06\u590D\u6742\u95EE\u9898\u7ED3\u6784\u5316\u7684\u4EA7\u54C1\u7ECF\u7406" } = Astro2.props;
  return renderTemplate`<html lang="zh-CN"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title} | 个人作品集</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/xueyufu/my-apps/personalWebsite/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro("https://your-portfolio.vercel.app");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, description, currentPath = "/" } = Astro2.props;
  const navItems = [
    { href: "/", label: "\u9996\u9875" },
    { href: "/abilities", label: "\u6838\u5FC3\u80FD\u529B" },
    { href: "/cases", label: "\u6848\u4F8B\u96C6" },
    { href: "/about", label: "\u5173\u4E8E" },
    { href: "/contact", label: "\u8054\u7CFB" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "data-astro-cid-ouamjn2i": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<header class="navbar" data-astro-cid-ouamjn2i> <div class="container" data-astro-cid-ouamjn2i> <a href="/" class="logo" data-astro-cid-ouamjn2i>PM 作品集</a> <nav data-astro-cid-ouamjn2i> <ul class="nav-links" data-astro-cid-ouamjn2i> ${navItems.map((item) => renderTemplate`<li data-astro-cid-ouamjn2i> <a${addAttribute(item.href, "href")}${addAttribute(["nav-link", { active: currentPath === item.href }], "class:list")} data-astro-cid-ouamjn2i> ${item.label} </a> </li>`)} </ul> </nav> </div> </header>  <main class="main-content" data-astro-cid-ouamjn2i> ${renderSlot($$result2, $$slots["default"])} </main>  <footer class="footer" data-astro-cid-ouamjn2i> <div class="container" data-astro-cid-ouamjn2i> <p class="footer-text" data-astro-cid-ouamjn2i>&copy; 2026 个人作品集</p> </div> </footer> ` })} `;
}, "/Users/xueyufu/my-apps/personalWebsite/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
