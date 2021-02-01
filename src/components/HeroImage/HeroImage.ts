import Header from '../Header.vue'

export default {
	name: 'HeroImage',
	props: {},
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
		}
	}
}