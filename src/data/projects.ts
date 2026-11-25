// The projects listed on the index.
// - A library publishes its docs from its own repository to https://docs.i2bskn.com/<repo>/
//   (GitHub Pages enabled on that repository). Leave `url` unset for it.
// - A product with its own site sets `url` to that site.
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
    kind: "product",
    name: "Astovia",
    repo: "astovia",
    summary:
      "A self-hosted, open-source task manager that picks up action items from Slack, Chatwork, email and GitHub and reminds you until they are done.",
    stack: ["Self-hosted", "Go"],
    url: "https://astovia.dev/",
    lang: { code: "ja", label: "日本語" },
  },
];

export const sections: { kind: Project["kind"]; title: string }[] = [
  { kind: "library", title: "Libraries" },
  { kind: "product", title: "Products" },
];
