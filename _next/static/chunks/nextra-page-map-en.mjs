import en_meta from "../../../pages/en/_meta.js";
import en_docs_meta from "../../../pages/en/docs/_meta.js";
export const pageMap = [{
  data: en_meta
}, {
  name: "docs",
  route: "/en/docs",
  children: [{
    data: en_docs_meta
  }, {
    name: "amazon",
    route: "/en/docs/amazon",
    frontMatter: {
      "sidebarTitle": "Amazon"
    }
  }, {
    name: "index",
    route: "/en/docs",
    frontMatter: {
      "sidebarTitle": "Index"
    }
  }, {
    name: "instagram",
    route: "/en/docs/instagram",
    frontMatter: {
      "sidebarTitle": "Instagram"
    }
  }, {
    name: "installation",
    route: "/en/docs/installation",
    frontMatter: {
      "sidebarTitle": "Installation"
    }
  }, {
    name: "reddit",
    route: "/en/docs/reddit",
    frontMatter: {
      "sidebarTitle": "Reddit"
    }
  }, {
    name: "tiktok",
    route: "/en/docs/tiktok",
    frontMatter: {
      "sidebarTitle": "Tiktok"
    }
  }, {
    name: "x",
    route: "/en/docs/x",
    frontMatter: {
      "sidebarTitle": "X"
    }
  }]
}, {
  name: "index",
  route: "/en",
  frontMatter: {
    "title": "Capalyze Docs"
  }
}];