// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    experimental: {
        payloadExtraction: false
    },
    modules: [
        [
            '@nuxtjs/i18n-edge',
            {
                locales: [
                    {
                        code: 'en',
                        name: 'English',
                        file: 'en.json'
                    },
                    {
                        code: 'uk',
                        name: 'Ukrainian',
                        file: 'uk.json'
                    }
                ],
                defaultLocale: 'en',
                langDir: 'locales/'
            }
        ]
    ]
})
