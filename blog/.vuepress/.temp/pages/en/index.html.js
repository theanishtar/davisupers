export const data = JSON.parse("{\"key\":\"v-2d0a870d\",\"path\":\"/en/\",\"title\":\"Home\",\"lang\":\"vi-VN\",\"frontmatter\":{\"title\":\"Home\",\"layout\":\"HomePage\",\"blog\":{\"type\":\"type\",\"key\":\"post\"}},\"excerpt\":\"\",\"headers\":[],\"filePathRelative\":null}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}