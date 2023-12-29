import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { gungnirTheme } from "vuepress-theme-gungnir";
import { sidebar } from "./configs";


const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig({
	title: "FrogCyber",
	description: "Một lập trình viên luôn cố gắng mỗi ngày",

	head: [
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: `https://github.com/dangtranhuu/images/blob/main/frog/logo/Picsart_23-10-19_13-24-48-304.png?raw=true`
			}
		],
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: `https://github.com/dangtranhuu/images/blob/main/frog/logo/Picsart_23-10-19_13-24-48-304.png?raw=true`
			}
		],
		["meta", { name: "application-name", content: "FrogCyber" }],
		// ["meta", { property: "og:image", content: "https://github.com/dangtranhuu/images/blob/main/angurvad/main.png?raw=true" }],
		["meta", { name: "apple-mobile-web-app-title", content: "Thean" }],
		[
			"meta",
			{ name: "apple-mobile-web-app-status-bar-style", content: "black" }
		],
		[
			"link",
			{ rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` }
		],
		["meta", { name: "theme-color", content: "#377bb5" }],
		["meta", { name: "msapplication-TileColor", content: "#377bb5" }]
	],

	bundler: viteBundler(),

	theme: gungnirTheme({
		repo: "FrogSage/FrogCyber",
		docsDir: "blog",
		docsBranch: "main",
		navbarTitle: "FrogCyber",
		hitokoto: "https://v1.hitokoto.vn?c=i", // enable hitokoto (一言) or not?
		searchText: " ",
		// personal information
		personalInfo: {
			name: "Lập Trình Cùng Ếch",
			avatar: "/img/logo/frogsage.png",
			// description: "いつか、私がヒトじゃなくなっても",
			description: "Môi trường học tập dành cho sinh viên CNTT",
			sns: {
				github: "FrogSage",
				linkedin: "tranhuudang",
				facebook: "frogsagedev",
				twitter: "theanishtar",
				email: "dangtt135@gmail.com",
				// rss: "/rss.xml"
			}
		},

		// header images on home page
		homeHeaderImages: [
			{
				path: "/img/home-bg/1.png",
				mask: "rgba(40, 57, 101, .4)"
			},
			{
				path: "/img/home-bg/2.png",
				mask: "rgba(196, 176, 131, .1)"
			},
			{
				path: "/img/home-bg/3.png",
				mask: "rgba(68, 74, 83, .1)"
			},
			// {
			// 	path: "/img/home-bg/4.jpg",
			// 	mask: "rgba(19, 75, 50, .2)"
			// },
			// {
			// 	path: "/img/home-bg/5.jpg"
			// }
		],

		// other pages
		pages: {
			tags: {
				title: "Bài viết",
				subtitle: "Bạn có thể tìm theo từng từ khóa về công nghệ và ngôn ngữ lập trình",
				bgImage: {
					path: "/img/pages/tags.jpg",
					mask: "rgba(211, 136, 37, .5)"
				}
			},
			links: {
				title: "Công nghệ",
				subtitle:
					"Các công nghệ mình sẽ hướng dẫn",
				bgImage: {
					path: "/img/pages/links.jpg",
					mask: "rgba(64, 118, 190, 0.5)"
				}
			}
		},

		// theme-level locales config
		locales: {
			/**
			 * English locale config
			 *
			 * As the default locale is English, we don't need to set all of the locale fields
			 */
			"/": {
				// navbar
				// navbar: navbar.en,
				// sidebar
				sidebar: sidebar.en
			},

			/**
			 * Chinese locale config
			 */
			// "/zh/": {
			// 	// navbar
			// 	navbar: navbar.zh,
			// 	// sidebar
			// 	sidebar: sidebar.zh,
			// 	// i18n
			// 	...i18n.zh
			// }
		},

		themePlugins: {
			// only enable git plugin in production mode
			git: isProd,
			katex: true,
			giscus: {
				lang: "vi",
				darkTheme: "https://blog.zxh.io/styles/giscus-dark.css",
				repo: "dangth12/blog-giscus-comments",
				repoId: "R_kgDOJpeyjQ",
				category: "Announcements",
				categoryId: "DIC_kwDOJpeyjc4CW2KO",
				lazyLoad: true
			},
			mdPlus: {
				all: true
			},
			ga: "G-HCQSX53XFG",
			ba: "75381d210789d3eaf855fa16246860cc",
			rss: {
				siteURL: "https://blog.zxh.io",
				copyright: "Renovamen 2018-2022"
			}
		},

		navbar: [
			{
				text: "Trang chủ",
				link: "/",
				icon: "fa-fort-awesome"
			},
			{
				text: "Giới thiệu",
				link: "/about",
				icon: "fa-paw"  //"fa-paw"
			},
			{
				text: "Bài viết",
				link: "/tags/",
				icon: "gi-evil-book"
			},
			{
				text: "Công nghệ",
				link: "/tech/",
				icon: "gi-pc"
			},

			{
				text: "Nền tảng",
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
				text: "Nâng cao",
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
				text: "Công cụ",
				icon: "la-tools-solid",
				children: [
					{
						text: "Quản lí mã nguồn với Git và GitHub",
						link: "/github/",
						icon: "vi-file-type-git"
					},
				]
			},
			{
				text: "Tài nguyên",
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
		],

		footer: `
      &copy; <a href="https://github.com/Theanishtar" target="_blank">Tran Huu Dang</a> 2023
      <br>
      Powered by <a href="https://vuejs.org/" target="_blank">VueJS
    `
	}),

	markdown: {
		headers: {
			level: [2, 3, 4, 5]
		},
		code: {
			lineNumbers: false
		}
	},
});




//Angurvadal -> Angurvad
//Angurvadal là một thanh kiếm huyền thoại trong thần thoại Bắc Âu. Nó được khắc những chữ Rune ma thuật, những chữ này sẽ rực sáng trong lúc nó được mang đi giao chiến,  nhưng chỉ lấp lánh với ánh sáng mờ ảo trong lúc hòa bình. Theo thần thoại Bắc Âu, nó thuộc về Frithiof, con trai của người anh hùng Thorstein Vikingsson.
