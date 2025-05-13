import { createRecentUpdatesLoader } from '@nolebase/vitepress-plugin-index/vitepress'

export default createRecentUpdatesLoader({
  dir: 'notes',
  rewrites: [
    // wired, it wasn't designed to work like this.
    {
      from: /^notes/,
      to: 'notes',
    },
  ],
})
