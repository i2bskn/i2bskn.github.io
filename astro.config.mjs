// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// The index of the documentation sites at https://docs.i2bskn.com/.
// Each library publishes its own docs from its repository as a GitHub Pages project site,
// which is served under this domain at /<repository>/.
export default defineConfig({
  site: "https://docs.i2bskn.com",
  devToolbar: { enabled: false },
  integrations: [
    starlight({
      title: "i2bskn docs",
      description: "Documentation for the open-source libraries by i2bskn.",
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/i2bskn" }],
      // The index has no content to search; each library's site has its own search.
      pagefind: false,
      customCss: [
        "@fontsource/ibm-plex-sans/latin-400.css",
        "@fontsource/ibm-plex-sans/latin-500.css",
        "@fontsource/ibm-plex-sans/latin-600.css",
        "@fontsource/ibm-plex-mono/latin-400.css",
        "@fontsource/ibm-plex-mono/latin-500.css",
        "./src/styles/theme.css",
      ],
      components: {
        SiteTitle: "./src/components/SiteTitle.astro",
        Hero: "./src/components/Hero.astro",
      },
      expressiveCode: {
        themes: ["github-dark-dimmed", "github-light"],
        styleOverrides: {
          borderRadius: "10px",
          borderColor: "var(--gh-line)",
          codeFontFamily: "var(--__sl-font-mono)",
          uiFontFamily: "var(--__sl-font)",
          codeFontSize: "0.8125rem",
          codeLineHeight: "1.7",
          frames: {
            shadowColor: "transparent",
            editorTabBarBackground: "var(--gh-surface-2)",
            editorActiveTabBackground: "var(--gh-surface)",
            editorActiveTabIndicatorTopColor: "var(--sl-color-accent)",
            editorActiveTabIndicatorBottomColor: "transparent",
            editorBackground: "var(--gh-surface)",
            terminalBackground: "var(--gh-surface)",
            terminalTitlebarBackground: "var(--gh-surface-2)",
          },
        },
      },
    }),
  ],
});
