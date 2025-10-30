// Safe wrapper to generate thumbs but never fail the build
import('./generate-presentation-thumbs.js')
  .catch((e) => {
    console.warn('Thumbnail generation skipped:', e?.message || e)
  })
  .finally(() => {
    process.exit(0)
  })
