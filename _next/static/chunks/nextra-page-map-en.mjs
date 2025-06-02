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
    name: "index",
    route: "/en/docs",
    frontMatter: {
      "sidebarTitle": "Index"
    }
  }, {
    name: "installation",
    route: "/en/docs/installation",
    frontMatter: {
      "sidebarTitle": "Installation"
    }
  }]
}, {
  name: "index",
  route: "/en",
  frontMatter: {
    "title": "Nextra Personal Website Template"
  }
}];