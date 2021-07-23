const tailwind = require("tailwindcss");

const postcssPlugins = [tailwind()];

module.exports = {
  siteName: "wtsn.dev",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "BlogPost",
        path: "./content/blog/**/*.md",
      },
    },
  ],
  templates: {
    BlogPost: "/:slug",
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: ["@gridsome/remark-prismjs"],
    },
  },
};
