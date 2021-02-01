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
		}
	},
	methods: {
		setSwiper(swiper) {
            this.mainSwiper = swiper;
		},
	}
})