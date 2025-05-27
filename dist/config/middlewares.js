"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    'strapi::logger',
    'strapi::errors',
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    'script-src': ['https://cdn.ckeditor.com'],
                    'connect-src': ['https://proxy-event.ckeditor.com']
                },
            },
        },
    },
    {
        name: 'strapi::cors',
        config: {
            headers: '*',
            origin: process.env.MY_CORS.split(", ")
        }
    },
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
