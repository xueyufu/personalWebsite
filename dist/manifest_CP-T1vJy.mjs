import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_HEADER, k as decodeKey } from './chunks/astro/server_DkuTCc0I.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/xueyufu/my-apps/personalWebsite/","adapterName":"","routes":[{"file":"file:///Users/xueyufu/my-apps/personalWebsite/dist/abilities/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/abilities","isIndex":false,"type":"page","pattern":"^\\/abilities\\/?$","segments":[[{"content":"abilities","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/abilities.astro","pathname":"/abilities","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/xueyufu/my-apps/personalWebsite/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/xueyufu/my-apps/personalWebsite/dist/cases/collaboration-framework/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cases/collaboration-framework","isIndex":false,"type":"page","pattern":"^\\/cases\\/collaboration-framework\\/?$","segments":[[{"content":"cases","dynamic":false,"spread":false}],[{"content":"collaboration-framework","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cases/collaboration-framework.astro","pathname":"/cases/collaboration-framework","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/xueyufu/my-apps/personalWebsite/dist/cases/conflict-resolution/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cases/conflict-resolution","isIndex":false,"type":"page","pattern":"^\\/cases\\/conflict-resolution\\/?$","segments":[[{"content":"cases","dynamic":false,"spread":false}],[{"content":"conflict-resolution","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cases/conflict-resolution.astro","pathname":"/cases/conflict-resolution","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/xueyufu/my-apps/personalWebsite/dist/cases/technical-simplification/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cases/technical-simplification","isIndex":false,"type":"page","pattern":"^\\/cases\\/technical-simplification\\/?$","segments":[[{"content":"cases","dynamic":false,"spread":false}],[{"content":"technical-simplification","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cases/technical-simplification.astro","pathname":"/cases/technical-simplification","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/xueyufu/my-apps/personalWebsite/dist/cases/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cases","isIndex":false,"type":"page","pattern":"^\\/cases\\/?$","segments":[[{"content":"cases","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cases.astro","pathname":"/cases","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/xueyufu/my-apps/personalWebsite/dist/contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/xueyufu/my-apps/personalWebsite/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://your-portfolio.vercel.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/xueyufu/my-apps/personalWebsite/src/pages/abilities.astro",{"propagation":"none","containsHead":true}],["/Users/xueyufu/my-apps/personalWebsite/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/xueyufu/my-apps/personalWebsite/src/pages/cases.astro",{"propagation":"none","containsHead":true}],["/Users/xueyufu/my-apps/personalWebsite/src/pages/cases/collaboration-framework.astro",{"propagation":"none","containsHead":true}],["/Users/xueyufu/my-apps/personalWebsite/src/pages/cases/conflict-resolution.astro",{"propagation":"none","containsHead":true}],["/Users/xueyufu/my-apps/personalWebsite/src/pages/cases/technical-simplification.astro",{"propagation":"none","containsHead":true}],["/Users/xueyufu/my-apps/personalWebsite/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/xueyufu/my-apps/personalWebsite/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/abilities@_@astro":"pages/abilities.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/cases/collaboration-framework@_@astro":"pages/cases/collaboration-framework.astro.mjs","\u0000@astro-page:src/pages/cases/conflict-resolution@_@astro":"pages/cases/conflict-resolution.astro.mjs","\u0000@astro-page:src/pages/cases/technical-simplification@_@astro":"pages/cases/technical-simplification.astro.mjs","\u0000@astro-page:src/pages/cases@_@astro":"pages/cases.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_CP-T1vJy.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///Users/xueyufu/my-apps/personalWebsite/dist/abilities/index.html","/file:///Users/xueyufu/my-apps/personalWebsite/dist/about/index.html","/file:///Users/xueyufu/my-apps/personalWebsite/dist/cases/collaboration-framework/index.html","/file:///Users/xueyufu/my-apps/personalWebsite/dist/cases/conflict-resolution/index.html","/file:///Users/xueyufu/my-apps/personalWebsite/dist/cases/technical-simplification/index.html","/file:///Users/xueyufu/my-apps/personalWebsite/dist/cases/index.html","/file:///Users/xueyufu/my-apps/personalWebsite/dist/contact/index.html","/file:///Users/xueyufu/my-apps/personalWebsite/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"fLxN5cv3tDlsT+GSi8XcRnkCcXAVc5Wev3ShiWNRugI=","experimentalEnvGetSecretEnabled":false});

export { manifest };
