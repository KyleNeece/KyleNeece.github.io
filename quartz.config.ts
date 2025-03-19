import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Kyle's Garden 🔥",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "KyleNeece.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#eff1f5", // Catppuccin Latte base
          lightgray: "#e6e9ef", // Catppuccin Latte surface0
          gray: "#bcc0cc", // Catppuccin Latte overlay0
          darkgray: "#6c6f85", // Catppuccin Latte subtext0
          dark: "#4c4f69", // Catppuccin Latte text
          secondary: "#8839ef", // Catppuccin Latte mauve
          tertiary: "#40a02b", // Catppuccin Latte green
          highlight: "rgba(221, 120, 120, 0.15)", // Catppuccin Latte red (transparent)
          textHighlight: "#fe640b88", // Catppuccin Latte peach (transparent)
        },
        darkMode: {
          light: "#1e1e2e", // Catppuccin Mocha base
          lightgray: "#313244", // Catppuccin Mocha surface0
          gray: "#45475a", // Catppuccin Mocha surface1
          darkgray: "#cdd6f4", // Catppuccin Mocha text
          dark: "#f5e0dc", // Catppuccin Mocha rosewater
          secondary: "#cba6f7", // Catppuccin Mocha mauve
          tertiary: "#a6e3a1", // Catppuccin Mocha green
          highlight: "rgba(243, 139, 168, 0.15)", // Catppuccin Mocha red (transparent)
          textHighlight: "#fab38788", // Catppuccin Mocha peach (transparent)
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
