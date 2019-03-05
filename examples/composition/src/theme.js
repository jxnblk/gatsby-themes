// styled-system theme

export const get = (obj, ...paths) => {
  const value = paths.reduce((a, path) => {
    if (is(a)) return a
    const keys = typeof path === 'string' ? path.split('.') : [path]
    return keys.reduce((a, key) => (a && is(a[key]) ? a[key] : null), obj)
  }, null)
  return is(value) ? value : paths[paths.length - 1]
}

export const colors = {}
export const fontSizes = []
export const space = []

export default {
  get: {

  },
  colors,
  fontSizes,
  space,
}
