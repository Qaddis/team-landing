// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },

	css: ["~/assets/styles/globals.scss"],

	modules: ["@nuxt/image", "@nuxt/icon", "@nuxt/eslint", "@nuxt/fonts"],

	fonts: {
		defaults: {
			weights: [400, 600, 700],
			subsets: ["cyrillic", "latin"],
			styles: ["normal", "italic"]
		}
	},

	icon: {
		componentName: "NuxtIcon"
	}
})
