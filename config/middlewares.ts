export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'script-src': ["'self'", "'unsafe-inline'", 'https:', 'cdn.ckeditor.com'],
          'script-src-elem': ["'self'", 'https:', 'cdn.ckeditor.com'],
          'connect-src': ["'self'", 'https:', 'https://proxy-event.ckeditor.com'],
          'frame-src': ["'self'", 'https:'],
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      headers: '*',
      origin: process.env.CORS_ORIGIN,
    }
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
]
