export const createMountNode = () => {
  const id = 'fela-stylesheet'
  const mountNode = document.getElementById(id)
  
  if (!mountNode) {
    const firstMountNode  = document.createElement('style');
    firstMountNode.id = id
    
    const head = (document.head) ? document.head : document.createElement('head')
    head.appendChild(firstMountNode)
    
    return firstMountNode
  }

  const parentNode = mountNode.parentNode

  const nextMountNode = document.createElement('style')
  nextMountNode.id = 'stylesheet'

  parentNode.replaceChild(nextMountNode, mountNode)
  return nextMountNode
}