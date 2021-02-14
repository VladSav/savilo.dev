import { defineComponent } from 'vue'

import Header from '../Header.vue'

export default defineComponent({
	name: 'HeroImage',
	props: {
		// headerLinks: {
		// 	default: []
		// },
	},
	components: {Header},
	data() {
		return {}
	},
	methods: {
		scrollToContacts() {
			const scrollPosition = document.querySelector(".contacts-section")
			if (scrollPosition) {
				window.scrollTo({
					top: scrollPosition['offsetTop'],
					behavior: "smooth"
				})
			}
		},
		sendToMainPage(key) {
			this.$emit('mainSlideChange', key)
		}
	}
})