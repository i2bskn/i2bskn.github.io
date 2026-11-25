// The libraries listed on the index. Add an entry when a library publishes its docs to
// https://docs.i2bskn.com/<repository>/ (GitHub Pages enabled on that repository).
export type Library = {
  name: string;
  repo: string;
  summary: string;
  stack: string[];
  npm?: string;
};

export const libraries: Library[] = [
  {
    name: "workers-app-core",
    repo: "workers-app-core",
    summary: "Sign-in, user management and MCP OAuth for Hono apps on Cloudflare Workers with D1.",
    stack: ["Hono", "Cloudflare Workers", "D1", "KV"],
    npm: "@i2bskn/workers-app-core",
  },
];
