const STYLESHEET_ID = 'fela-stylesheet'

export const createMountNode = () => {
  const mountNode = document.getElementById(STYLESHEET_ID)

  if (!mountNode) {
    const firstMountNode = document.createElement('style')
    firstMountNode.id = STYLESHEET_ID
    const head = (document.head) ? document.head : document.createElement('head')
    head.appendChild(firstMountNode)
    return firstMountNode
  }

  const parentNode = mountNode.parentNode
  const nextMountNode = document.createElement('style')
  nextMountNode.id = STYLESHEET_ID
  parentNode.replaceChild(nextMountNode, mountNode)
  return nextMountNode
}
