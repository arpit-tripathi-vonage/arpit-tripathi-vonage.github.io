import type { EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import vitepressNprogress from 'vitepress-plugin-nprogress'

// ❌ Change from: 'vitepress-plugin-nprogress/file/style.css'
//  Update to the correct path below:
import 'vitepress-plugin-nprogress/lib/css/index.css'
import 'vitepress-plugin-nprogress/lib/css/index.css'
import YouTubeEmbed from '../../../components/YouTubeEmbed.vue'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    // Invoke the plugin
    vitepressNprogress(ctx)

    // Register the YouTubeEmbed component globally
    ctx.app.component('YouTubeEmbed', YouTubeEmbed)
  }
}
