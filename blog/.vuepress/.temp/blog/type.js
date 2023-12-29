export const typeMap = {"post":{"/":{"path":"/","keys":["v-79e3325a","v-4e3cf4fd","v-9a2f84d6","v-a96541ce","v-0c96670e","v-d1017e66","v-77e2f3a3"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
