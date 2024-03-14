export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"type\":\"image/png\",\"sizes\":\"16x16\",\"href\":\"/img/logo/dvnb.png\"}],[\"link\",{\"rel\":\"icon\",\"type\":\"image/png\",\"sizes\":\"32x32\",\"href\":\"/img/logo/dvnb.png\"}],[\"meta\",{\"name\":\"application-name\",\"content\":\"Davis\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-title\",\"content\":\"Thean\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-status-bar-style\",\"content\":\"black\"}],[\"link\",{\"rel\":\"apple-touch-icon\",\"href\":\"/img/logo/apple-touch-icon.png\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#377bb5\"}],[\"meta\",{\"name\":\"msapplication-TileColor\",\"content\":\"#377bb5\"}],[\"script\",{\"src\":\"https://raw.githubusercontent.com/dangtranhuu/DATN-CSS/main/nav.js\"}]],\"locales\":{\"/\":{\"lang\":\"vi-VN\",\"title\":\"Trần Hữu Đang\",\"description\":\"Một lập trình viên luôn cố gắng mỗi ngày\"},\"/en/\":{\"lang\":\"en-US\",\"title\":\"Davisupers\",\"description\":\"Developer at Vitamin Code\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
