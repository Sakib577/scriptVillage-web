// Tech logos used across the site. From Simple Icons (CC0); only these are bundled.
import {
  siJavascript, siTypescript, siPython, siPhp, siGo, siRust, siKotlin, siSwift, siDart, siCplusplus, siC,
  siRuby, siOpenjdk, siDotnet, siScala, siElixir, siLua, siHaskell, siR, siJulia, siZig, siSolidity,
  siWebassembly, siGnubash,
  siHtml5, siCss, siReact, siNextdotjs, siVuedotjs, siNuxt, siAngular, siSvelte, siAstro, siRemix,
  siTailwindcss, siBootstrap, siSass, siRedux, siJquery, siThreedotjs, siAlpinedotjs, siVite, siWebpack,
  siNodedotjs, siExpress, siNestjs, siDjango, siFlask, siFastapi, siLaravel, siSpring, siRubyonrails,
  siDeno, siBun, siGraphql, siSocketdotio, siPrisma, siStrapi, siSanity,
  siFlutter, siAndroid, siApple, siExpo, siIonic, siElectron, siTauri,
  siMysql, siPostgresql, siMongodb, siRedis, siSqlite, siMariadb, siFirebase, siSupabase, siElasticsearch,
  siApachecassandra, siNeo4j, siCouchbase, siRabbitmq, siApachekafka, siAppwrite,
  siDocker, siKubernetes, siNginx, siLinux, siUbuntu, siGit, siGithub, siGitlab, siVercel, siNetlify,
  siCloudflare, siDigitalocean, siGooglecloud, siNpm, siPnpm, siPostman, siJest, siCypress, siVitest,
  siFigma, siFramer, siWebflow, siBlender, siWordpress, siShopify, siStripe,
  siNumpy, siPandas, siTensorflow, siPytorch, siJupyter, siHuggingface, siLangchain, siClaude,
} from "simple-icons";

export const techCategories = [
  {
    key: "languages",
    en: "Languages",
    bn: "ল্যাঙ্গুয়েজ",
    icons: [siJavascript, siTypescript, siPython, siPhp, siGo, siRust, siKotlin, siSwift, siDart, siCplusplus, siC,
      siRuby, siOpenjdk, siDotnet, siScala, siElixir, siLua, siHaskell, siR, siJulia, siZig, siSolidity,
      siWebassembly, siGnubash],
  },
  {
    key: "frontend",
    en: "Frontend",
    bn: "ফ্রন্টএন্ড",
    icons: [siHtml5, siCss, siReact, siNextdotjs, siVuedotjs, siNuxt, siAngular, siSvelte, siAstro, siRemix,
      siTailwindcss, siBootstrap, siSass, siRedux, siJquery, siThreedotjs, siAlpinedotjs, siVite, siWebpack],
  },
  {
    key: "backend",
    en: "Backend",
    bn: "ব্যাকএন্ড",
    icons: [siNodedotjs, siExpress, siNestjs, siDjango, siFlask, siFastapi, siLaravel, siSpring, siRubyonrails,
      siDeno, siBun, siGraphql, siSocketdotio, siPrisma, siStrapi, siSanity],
  },
  {
    key: "databases",
    en: "Databases",
    bn: "ডেটাবেস",
    icons: [siMysql, siPostgresql, siMongodb, siRedis, siSqlite, siMariadb, siFirebase, siSupabase,
      siElasticsearch, siApachecassandra, siNeo4j, siCouchbase, siRabbitmq, siApachekafka, siAppwrite],
  },
  {
    key: "mobile",
    en: "Mobile & Desktop",
    bn: "মোবাইল ও ডেস্কটপ",
    icons: [siFlutter, siAndroid, siApple, siExpo, siIonic, siElectron, siTauri],
  },
  {
    key: "devops",
    en: "DevOps & Cloud",
    bn: "DevOps ও ক্লাউড",
    icons: [siDocker, siKubernetes, siNginx, siLinux, siUbuntu, siGit, siGithub, siGitlab, siVercel, siNetlify,
      siCloudflare, siDigitalocean, siGooglecloud, siNpm, siPnpm, siPostman, siJest, siCypress, siVitest],
  },
  {
    key: "design",
    en: "Design & CMS",
    bn: "ডিজাইন ও CMS",
    icons: [siFigma, siFramer, siWebflow, siBlender, siWordpress, siShopify, siStripe],
  },
  {
    key: "ai",
    en: "AI & Data",
    bn: "AI ও ডেটা",
    icons: [siNumpy, siPandas, siTensorflow, siPytorch, siJupyter, siHuggingface, siLangchain, siClaude],
  },
];

// Round-robin across categories, so any slice shows a mix of languages, databases, tools, etc.
export const mixedTechLogos = (() => {
  const out = [];
  const longest = Math.max(...techCategories.map((c) => c.icons.length));
  for (let i = 0; i < longest; i++) {
    for (const c of techCategories) if (c.icons[i]) out.push(c.icons[i]);
  }
  return out;
})();
