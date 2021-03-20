import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Header',
    props: {
        headerLinks: {
            default: []
        },
        isMobile: {
            type: Boolean,
            default: false
        },
        currentPosition: {
            type: Object,
            default: null,
        }
    },
    components: {},
    data() {
        return {
            isMobileMenuOpen: false as boolean,
        }
    },
    computed: {
        isTopHidden() {
            const mobile: boolean = this.isMobile
            if (mobile === false) {
                const position: number = this.currentPosition.index

                if (position > 0) {
                    return true
                }
            }
            return false
        },
    },
    methods: {
        scrollTo(key: string) {
			this.$emit('mainSlideChange', key)
		},
        scrollToMobile(key: string) {
            this.isMobileMenuOpen = false
            const scrollPosition = document.querySelector(`.${key}-section`)
			if (scrollPosition) {
				window.scrollTo({
					top: scrollPosition['offsetTop'],
					behavior: "smooth"
				})
			}
            // return true
        }
    }
})