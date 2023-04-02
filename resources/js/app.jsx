import './bootstrap';
import './translations';

import {createInertiaApp} from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import {StrictMode} from "react";
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'



// createInertiaApp({
//     resolve: name => resolvePageComponent(`./pages/${name}.jsx`, import.meta.glob('./pages/**/*.jsx')),
//     setup({el, App, props}) {
//         createRoot(el).render(<App {...props} />);
//     }
// });

createInertiaApp({
    resolve: function (name) {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
        return pages[`./Pages/${name}.jsx`];
    },
    setup: function ({el, App, props}) {
        createRoot(el).render(<App {...props} />);
    }
});
