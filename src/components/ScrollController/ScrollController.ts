import { defineComponent } from 'vue'

export default defineComponent({
	name: 'ScrollController',
	props: {
		currentPosition: {
			default: {}
		},
		allSections: {
			default: []
		},
	},
    emmits: {},
	components: {},
	data() {
		return {}
	},
	// comtuted: {
	// 	elements: {}
	// }
	// created() {
		
	// },
	// mounted() {
	
	// },
	methods: {
		clickSrollerLink(key) {
            this.$emit('mainSlideChange', key)
        },
	}
})