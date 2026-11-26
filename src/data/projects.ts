// The projects listed on the index.
// - A project that publishes its docs from its own repository to https://docs.i2bskn.com/<repo>/
//   (GitHub Pages enabled on that repository) leaves `url` unset.
// - A project with its own site sets `url` to that site.
export type Project = {
  kind: "library" | "product";
  name: string;
  repo: string;
  summary: string;
  stack: string[];
  url?: string;
  npm?: string;
  /** Set when the site is not in English. */
  lang?: { code: string; label: string };
};

export const projects: Project[] = [
  {
    kind: "library",
    name: "workers-app-core",
    repo: "workers-app-core",
    summary: "Sign-in, user management and MCP OAuth for Hono apps on Cloudflare Workers with D1.",
    stack: ["Hono", "Cloudflare Workers", "D1", "KV"],
    npm: "@i2bskn/workers-app-core",
  },
  {
    kind: "library",
    name: "jp-postal-json",
    repo: "jp-postal-json",
    summary:
      "A lightweight, zero-dependency TypeScript library for Japanese postal codes: normalization, validation and address lookup from static JSON data.",
    stack: ["TypeScript"],
    url: "https://jp-postal.com/",
    npm: "jp-postal-json",
    lang: { code: "ja", label: "日本語" },
  },
  {
    kind: "product",
    name: "Astovia",
    repo: "astovia",
    summary:
      "A self-hosted, open-source task manager that picks up action items from Slack, Chatwork, email and GitHub and reminds you until they are done.",
    stack: ["Self-hosted", "Go"],
    url: "https://astovia.dev/",
    lang: { code: "ja", label: "日本語" },
  },
  {
    kind: "product",
    name: "Pinglune",
    repo: "pinglune",
    summary:
      "A self-hosted, open-source hub that delivers events from an HTTP API, Service Bindings and email to AI agents from different vendors, lets them move the work forward by talking to each other, and lets people step in when needed.",
    stack: ["Self-hosted", "Cloudflare Workers"],
    url: "https://pinglune.dev/",
    lang: { code: "ja", label: "日本語" },
  },
  {
    kind: "product",
    name: "Libreno",
    repo: "libreno",
    summary:
      "A self-hosted, open-source knowledge base for small teams: AI apps write the pages over MCP, and the team reads them on the web, with spaces that decide who can see what.",
    stack: ["Self-hosted", "Cloudflare Workers", "D1", "R2"],
    lang: { code: "ja", label: "日本語" },
  },
  {
    kind: "product",
    name: "Querune",
    repo: "querune",
    summary:
      "A self-hosted SEO workbench: it imports Search Console and GA4 data every day, keeps it with your article list and memos, and lets AI apps read it over MCP to review the results and plan the next step.",
    stack: ["Self-hosted", "Cloudflare Workers", "D1", "MCP"],
    lang: { code: "ja", label: "日本語" },
  },
];

export const sections: { kind: Project["kind"]; title: string }[] = [
  { kind: "library", title: "Libraries" },
  { kind: "product", title: "Products" },
];
