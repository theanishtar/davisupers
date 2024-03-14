import type { NavbarConfig } from "vuepress-theme-gungnir";

export const en: NavbarConfig = [
  {
    text: "Home",
    link: "/",
    icon: "fa-fort-awesome"
  },
  {
    text: "About",
    link: "/about",
    icon: "fa-paw"  //"fa-paw"
  },
  {
    text: "Post",
    link: "/tags/",
    icon: "gi-evil-book"
  },
  {
    text: "Tech",
    link: "/tech/",
    icon: "gi-pc"
  },

  {
    text: "Base",
    icon: "ri-code-s-slash-line",
    children: [
      {
        text: "Cơ sở ngành",
        // link: "/docs/intro.md",
        // icon: "vi-file-type-cpp",
        children: [
          {
            text: "Lý thuyết đồ thị",
            link: "/graph/",
            icon: "vi-file-type-storyboard"
          },
          {
            text: "Cấu trúc dữ liệu & giải thuật",
            link: "/dsa/",
            icon: "fc-tree-structure"
          },
        ]
      },
      {
        text: "Lập trình căn bản",
        // link: "/docs/intro.md",
        // icon: "vi-file-type-cpp",
        children: [
          {
            text: "Lập trình C",
            link: "/c/",
            icon: "vi-file-type-cpp"
          },
          {
            text: "Lập trình Java Core",
            link: "/java-core/",
            icon: "vi-file-type-jar"
          },
        ]
      },
      {
        text: "Lập trình OOP",
        icon: "fa-java",
        children: [
          {
            text: "Lập trình Hướng đối tượng với Java",
            link: "/java-oop/",
            icon: "vi-file-type-maven"
          },
          {
            text: "Các Collections trong Java",
            link: "/java-collections/",
            icon: "vi-file-type-maven"
          },
        ]
      },
      {
        text: "Xây dựng cơ sở dữ liệu",
        // link: "/docs/intro.md",
        icon: "vi-file-type-plsql-package-spec",
        children: [
          {
            text: "Microsoft SQL Server",
            link: "/sql-server/",
            icon: "vi-file-type-sql"
          },
          // {
          // 	text: "JavaScript ES6",
          // 	link: "/docs/intro.md",
          // 	icon: "vi-file-type-light-jsmap"
          // },
        ]
      },
    ]
  },
  // {
  // 	text: "Java",
  // 	icon: "fa-java",
  // 	children: [
  // 		{
  // 			text: "Java Servlet/Jsp",
  // 			link: "/docs/intro.md",
  // 			icon: "vi-file-type-jsp"
  // 		},
  // 		{
  // 			text: "Spring MVC",
  // 			link: "/docs/intro.md",
  // 			icon: "co-spring"
  // 		},
  // 		{
  // 			text: "SpringBoot",
  // 			link: "/docs/intro.md",
  // 			icon: "co-spring"
  // 		},
  // 	]
  // },
  {
    text: "Advanced",
    icon: "si-codersrank",
    children: [
      {
        text: "Lập trình FrontEnd",
        link: "/docs/intro.md",
        icon: "px-monitor",
        children: []
      },
      {
        text: "Lập trình BackEnd",
        icon: "fc-command-line ",
        children: [
          {
            text: "NodeJS",
            link: "/nodejs/",
            icon: "vi-file-type-node"
          },
          {
            text: "Spring Boot",
            link: "/spring-boot/",
            icon: "co-spring"
          },
          {
            text: "PHP Zero to Hero",
            link: "/php-core/",
            icon: "vi-file-type-php2"
          },
        ]
      },
      {
        text: "Lập trình DesktopApp",
        // link: "/docs/intro.md",
        icon: "vi-file-type-js",
        children: [
          {
            text: "Lập trình Java Swing",
            link: "/docs/intro.md",
            icon: "vi-folder-type-cubit-opened"
          },
        ]
      },
    ]
  },
  {
    text: "Tools",
    icon: "la-tools-solid",
    children: [
      {
        text: "Quản lí mã nguồn với Git và GitHub",
        link: "/github/",
        icon: "vi-file-type-git"
      },
      {
        text: "Triển khai mã nguồn với Docker",
        link: "/docker/",
        icon: "vi-file-type-docker2"
      },
    ]
  },
  {
    text: "resource",
    icon: "si-progress",
    children: [
      {
        text: "MS Office",
        // link: "/docs/intro.md",
        icon: "vi-file-type-glitter",
        children: [
          {
            text: "MS Ofice 2016",
            link: "https://drive.google.com/file/d/1WaU74f2Bjl_hA3dTiulAQAOxe1SekfwD/view?usp=drive_link",
            icon: "vi-folder-type-windows"
          },
        ]
      },
      {
        text: "Adobe",
        // link: "/docs/intro.md",
        icon: "vi-file-type-glitter",
        children: [
          {
            text: "Photoshop 2023",
            link: "https://drive.google.com/file/d/1aZqd2Mxjru8u5tj5hdhjDMIpfIHnUFFP/view?usp=share_link",
            icon: "si-adobephotoshop"
          },
          {
            text: "Illustrator 2023",
            link: "https://drive.google.com/file/d/1OgZ8TuYhH7IY-d6TfWEE0G0svOKDOIVk/view?usp=share_link",
            icon: "si-adobeillustrator"
          },
          {
            text: "Aftereffects 2023",
            link: "https://drive.google.com/file/d/1e5ZzCP5qLkJWG9_a7pdexaPDSUHqSjC7/view?usp=share_link",
            icon: "si-adobeaftereffects"
          },
          {
            text: "Premiere 2023",
            link: "https://drive.google.com/file/d/1NwcJDIDDAOgHz5DlDc22Og6H12Zsit-9/view?usp=drive_link",
            icon: "si-adobepremierepro"
          },
          {
            text: "Lightroom Classic 2023",
            link: "https://drive.google.com/file/d/1xpRDeSOg6JgTlX66XUAL8XR95-kYf-om/view?usp=sharing",
            icon: "si-adobelightroom"
          },
          {
            text: "Audition 2023",
            link: "https://drive.google.com/file/d/1zw7_seC8aiym6FS8X3H_ubqkkD0rVN_M/view?usp=sharing",
            icon: "si-adobeaudition"
          },
          {
            text: "Media Encoder 2023",
            link: "https://drive.google.com/uc?id=1yQBVkxIYwE4R2M5RrIY_mynhOa2VJfYT",
            icon: "co-adobe"
          },
        ]
      },
      {
        text: "TechSmith",
        // link: "/docs/intro.md",
        icon: "vi-file-type-glitter",
        children: [
          {
            text: "Camtasia",
            link: "https://drive.google.com/file/d/1VbcUkD0Uyu4zqR9FN_39GFWQX_vw1TqR/view?usp=share_link",
            icon: "bi-record-btn"
          },
        ]
      },
    ]
  },
];