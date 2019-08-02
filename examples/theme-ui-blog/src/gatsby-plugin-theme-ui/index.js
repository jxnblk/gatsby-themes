import future from '@theme-ui/preset-future'

console.log({ future })

export default {
  ...future,
  colors: {
    ...future.colors,
    background: 'tomato',
  }
}
