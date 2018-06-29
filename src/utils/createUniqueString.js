/**
 * Created Unique String on 18/6/6.
 * 用于图标组件id
 */
export default function createUniqueString () {
  const timestamp = +new Date() + ''
  const randomNum = parseInt((1 + Math.random()) * 65536) + ''
  return (+(randomNum + timestamp)).toString(32)
}
