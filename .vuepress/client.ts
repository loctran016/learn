import { defineClientConfig } from 'vuepress/client';
import { setupRunningTimeFooter } from 'vuepress-theme-hope/presets/footerRunningTime.js';
import { setupTransparentNavbar } from 'vuepress-theme-hope/presets/transparentNavbar.js';

export default defineClientConfig({
    setup() {
        setupRunningTimeFooter(
            new Date('2024-11-13'),
            {
                '/': 'Running time: :day days :hour hours :minute minutes :second seconds',
            },
            true,
        );
        setupTransparentNavbar();
    },
});
