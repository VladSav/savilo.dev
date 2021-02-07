import { defineComponent } from 'vue'


import HeroImage from '../HeroImage.vue'
import AboutMe from '../AboutMe.vue'
import Skills from '../Skills.vue'
import Contacts from '../Contacts.vue'
import ScrollController from '../ScrollController.vue'

// Import Swiper Vue.js components
import SwiperCore, { Controller, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

SwiperCore.use([Controller, Mousewheel])

export default defineComponent({
	name: 'MainPage',
    props: {},
	components: {HeroImage, AboutMe, Skills, Contacts, ScrollController, Swiper, SwiperSlide},
	data() {
		return {
			// eslint-disable-next-line
			mainSwiper: null as any,
			sections: [
				{
                    text: 'Hero Image',
                    key: 'hero'
                },
                {
                    text: 'About me',
                    key: 'about'
                },
                {
                    text: 'Skills',
                    key: 'skills'
                },
                {
                    text: 'Contacts',
                    key: 'contacts'
                },
			] as Array<object>,
			currentSlide: 0 as number,
		}
	},
	computed: {
		currentPosition() {
			const a: object = Object.assign(
				this.sections[this.currentSlide], 
				{
					index: this.currentSlide
				}
			)

			return a
		}
	},
	methods: {
		setSwiper(swiper) {
            this.mainSwiper = swiper;
		},
		changeSlide(key) {
			this.mainSwiper.slideTo(
				this.sections.findIndex(item => item['key'] == key)
			)
		},
		onSlideChange() {
			this.currentSlide = this.mainSwiper.activeIndex
		},
		getMenuItems() {
			return this.sections.filter(item => item['key'] != 'hero')
		}
	}
})