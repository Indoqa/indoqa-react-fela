const importCss = (id: string, url: string) => {
  const mountNode = document.getElementById(id)
  if (mountNode) {
    return
  }
  const styleNode = document.createElement('style')
  styleNode.id = id
  const head = (document.head) ? document.head : document.createElement('head')
  head.appendChild(styleNode)
  styleNode.append(`@import url(\'${url}\');`)
}

export default importCss
