import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "index", // Merujuk ke docs/index.mdx
      label: "🏠 Welcome Portal",
    },
    {
      type: "category",
      label: "🌿 Nature Series",
      collapsed: false,
      items: [
        "nature-series/introduction",
        {
          type: "category",
          label: "⚔️ Custom Items",
          items: [
            "nature-series/items/organic-blade",
            "nature-series/items/molten-glove",
            "nature-series/items/electric-wand",
            "nature-series/items/frost-wand",
            "nature-series/items/heart-of-the-earth",
          ],
        },
        "nature-series/materials",
      ],
    },
  ],
};

export default sidebars;
