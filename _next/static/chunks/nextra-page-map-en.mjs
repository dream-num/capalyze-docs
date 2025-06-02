import en_meta from "../../../pages/en/_meta.js";
import en_blog_meta from "../../../pages/en/blog/_meta.js";
import en_docs_meta from "../../../pages/en/docs/_meta.js";
import en_docs_doc_theme_meta from "../../../pages/en/docs/doc-theme/_meta.js";
export const pageMap = [{
  data: en_meta
}, {
  name: "about",
  route: "/en/about",
  frontMatter: {
    "description": "Introduction",
    "type": "posts",
    "sidebarTitle": "About"
  }
}, {
  name: "blog",
  route: "/en/blog",
  children: [{
    data: en_blog_meta
  }, {
    name: "post-1",
    route: "/en/blog/post-1",
    frontMatter: {
      "title": "Post 1",
      "image": "https://assets.vercel.com/image/upload/v1630059453/swr/v1.png",
      "date": "01/01/2024",
      "description": "Description post 1",
      "authors": {
        "thanhnamnguyen": {
          "name": "Thành Nam Nguyễn",
          "title": "Lập trình viên (Developer)",
          "url": "https://www.facebook.com/NguyenThanhNam1601",
          "imageUrl": "https://res.cloudinary.com/thanhnam/image/upload/v1696673670/thanhnamnguyen.dev/about-me/avt-lyoko_rdtigq.jpg"
        },
        "yuu": {
          "name": "Yuu",
          "title": "Lập trình viên (Developer)",
          "url": "https://www.facebook.com/NguyenThanhNam1601",
          "imageUrl": "https://res.cloudinary.com/thanhnam/image/upload/v1696673670/thanhnamnguyen.dev/about-me/avt-lyoko_rdtigq.jpg"
        }
      }
    }
  }, {
    name: "post-2",
    route: "/en/blog/post-2",
    frontMatter: {
      "title": "Post 2",
      "image": "https://assets.vercel.com/image/upload/v1630059453/swr/v1.png",
      "date": "01/01/2024",
      "description": "Description post 2",
      "authors": {
        "thanhnamnguyen": {
          "name": "Thành Nam Nguyễn",
          "title": "Lập trình viên (Developer)",
          "url": "https://www.facebook.com/NguyenThanhNam1601",
          "imageUrl": "https://res.cloudinary.com/thanhnam/image/upload/v1696673670/thanhnamnguyen.dev/about-me/avt-lyoko_rdtigq.jpg"
        }
      }
    }
  }, {
    name: "post-3",
    route: "/en/blog/post-3",
    frontMatter: {
      "title": "Post 3",
      "image": "https://assets.vercel.com/image/upload/v1630059453/swr/v1.png",
      "date": "01/01/2024",
      "description": "Description post 3",
      "authors": {
        "yuu": {
          "name": "Yuu",
          "title": "Lập trình viên (Developer)",
          "url": "https://www.facebook.com/NguyenThanhNam1601",
          "imageUrl": "https://res.cloudinary.com/thanhnam/image/upload/v1696673670/thanhnamnguyen.dev/about-me/avt-lyoko_rdtigq.jpg"
        }
      }
    }
  }]
}, {
  name: "blog",
  route: "/en/blog",
  frontMatter: {
    "description": "The latest updates and releases.",
    "type": "posts",
    "sidebarTitle": "Blog"
  }
}, {
  name: "docs",
  route: "/en/docs",
  children: [{
    data: en_docs_meta
  }, {
    name: "doc-theme",
    route: "/en/docs/doc-theme",
    children: [{
      data: en_docs_doc_theme_meta
    }, {
      name: "page-configuration",
      route: "/en/docs/doc-theme/page-configuration",
      frontMatter: {
        "sidebarTitle": "Page Configuration"
      }
    }, {
      name: "theme-configuration",
      route: "/en/docs/doc-theme/theme-configuration",
      frontMatter: {
        "sidebarTitle": "Theme Configuration"
      }
    }]
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