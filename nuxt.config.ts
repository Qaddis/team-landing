// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },

	modules: ["@nuxt/image", "@nuxt/icon", "@nuxt/eslint", "@nuxt/fonts"],

	css: ["~/assets/styles/globals.scss"],

	typescript: {
		typeCheck: true
	},

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
