import { defineComponent } from 'vue'

// Import Swiper Vue.js components
import SwiperCore, { Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

SwiperCore.use([Controller])

export default defineComponent({
	name: 'AboutMe',
	props: {
		currentMainSlide: {
			type: Number,
			default: 0,
		},
	},
	components: {Swiper, SwiperSlide},
	data() {
		return {
			listOptions: [
				{
					key: 'biography',
					text: 'Biography',
				},
				{
					key: 'education',
					text: 'Education',
				},
				{
					key: 'work',
					text: 'Work experience',
				},
				{
					key: 'hobbies',
					text: 'Hobbies',
				}
			],
			selected: 0,
			works: [
				{
					position: "Frontend  Developer",
					dates: {
						from: "March 2020",
						to: null,
					},
					company: "ICOL Group",
					responsibilities: [
						'Websites development',
						'Technical support',
						'Maximized websites efficiency, data quality, scope, operability, and flexibility'
					]
				}
			],
			hobbies: [
				'music',
				'tableGames',
				'traveling',
				'videoGames',
				'tennis',
				'movies'
			],
			// eslint-disable-next-line
			aboutSwiper: null as any,
		}
	},
	methods: {
		switchContent(index: number) {
			if (this.selected !== index) {
				this.selected = index
			}
		},
		checkConentPosition(title: string) {
			return this.listOptions.map(item => item.key).indexOf(title)
		},
		// eslint-disable-next-line
		getWorkDates(dates: any) {
			return dates.from + (dates.to ? ' - ' + dates.to : '')
		},
	},
})