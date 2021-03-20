import { defineComponent } from 'vue'

// Import Swiper Vue.js components
import SwiperCore, { Controller, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';


interface SkillContentData {
    selectedSkill: number;
    selectedTech: number;
    
    // eslint-disable-next-line
    skillsSwiper: any;
    skillsSwiperOptions: SliderOtions;
    // eslint-disable-next-line
    skillsContentSwiper: any;
    skills: Skill[];
}

interface Skill {
    title: string;
    description: string;
    technologies: Technology[];
}

interface Technology {
    title: string;
    description?: string;
    size?: number;
    position?: number;
    image?: string;
}

interface SliderOtions {
    slidesPerView?: number;
    spaceBetween?: number;
    breakpoints?: object;
    pagination?: object | boolean;
}

SwiperCore.use([Controller, Pagination]);

export default defineComponent({
    name: 'Skills',
    props: {
        isMobile: {
            type: Boolean,
            default: false
        }
    },
    components: { Swiper, SwiperSlide },
    data() {
        return {
            selectedSkill: -1,
            selectedTech: -1,
            skillsSwiper: null,
            skillsSwiperOptions: {
                slidesPerView: 1,
                spaceBetween: 30,
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    1100: {
                        slidesPerView: 3,
                    }
                },
                pagination: this.isMobile ? { clickable: true } : false
            },
            skillsContentSwiper: null,
            skills: [
                {
                    title: "Frontend",
                    description: `I am using HTML and CSS to create the basic structure of the page. I actively use JavaScript and Vue for: processing page data, dynamically changing the view of the page, sending data to the server, and more. I know layout technologies: grid, flexible, cross-browser, adaptive.`,
                    technologies: [
                        {
                            title: "JavaScript",
                            size: 3,
                            image: "/images/logo_36_javascript",
                            position: 0,
                        },
                        {
                            title: "Vue",
                            size: 3,
                            image: "/images/logo_36_vue",
                            position: 1,
                        },
                        {
                            title: "TypeScript",
                            size: 2,
                            image: "/images/logo_36_typescript",
                            position: 2,
                        },
                        {
                            title: "HTML",
                            size: 1,
                            image: "/images/logo_36_html5",
                            position: 3,
                        },
                        {
                            title: "CSS",
                            size: 1,
                            image: "/images/logo_36_css3",
                            position: 4,
                        },
                        {
                            title: "SCSS",
                            size: 2,
                            image: "/images/logo_36_sass",
                            position: 5,
                        },
                        {
                            title: "Bootstrap",
                            size: 2,
                            image: "/images/logo_36_bootstrap",
                            position: 6,
                        },

                    ]
                },
                {
                    title: "Backend",
                    description: "Backend",
                    technologies: [
                        {
                            title: "NodeJS",
                            size: 3,
                            image: "/images/logo_36_nodejs",
                            position: 3,
                        },
                        {
                            title: "Python",
                            size: 1,
                            image: "/images/logo_36_python",
                            position: 1,
                        },
                        {
                            title: "PHP",
                            size: 1,
                            image: "/images/logo_36_php",
                            position: 2,
                        },
                        {
                            title: "PostgreSQL",
                            size: 2,
                            image: "/images/logo_36_postgresql",
                            position: 0,
                        },
                        {
                            title: "SSE",
                            size: 2,
                            image: "/images/logo_36_sse",
                            position: 4,
                        },
                        {
                            title: "Postman",
                            size: 1,
                            image: "/images/logo_36_postman",
                            position: 5,
                        },
                    ]
                },
                {
                    title: "Other",
                    description: "Other",
                    technologies: [
                        {
                            title: "GIT",
                            size: 3,
                            image: "/images/logo_36_git",
                        },
                        {
                            title: "NPM",
                            size: 2,
                            image: "/images/logo_36_npm",
                        },
                        {
                            title: "Gulp",
                            size: 2,
                            image: "/images/logo_36_gulp",
                        },
                        {
                            title: "Webpack",
                            size: 2,
                            image: "/images/logo_36_webpack",
                        },
                        {
                            title: "Jest",
                            size: 3,
                            image: "/images/logo_36_jest",
                        },
                        {
                            title: "SEO",
                            size: 1,
                            image: "/images/logo_36_seo",
                        },
                        {
                            title: "CMS",
                            size: 1,
                            image: "/images/logo_36_cms",
                        },
                        {
                            title: "Photoshop",
                            size: 2,
                            image: "/images/logo_36_photoshop",
                        },
                    ]
                },
            ],
        } as SkillContentData
    },
    computed: {
        currentSkill(): object | false {
            try {
                return this.selectedSkill > -1 ? JSON.parse(JSON.stringify(this.skills[this.selectedSkill])) : false
            } catch {
                return false
            }
        },
    },
    methods: {
        setSwiper(swiper) {
            this.skillsSwiper = swiper;
        },
        setContentSwiper(swiper) {
            this.skillsContentSwiper = swiper
        },
        openSelectedSkill() {
            if (this.skillsSwiper && (this.skillsSwiper['clickedIndex'] || this.skillsSwiper['clickedIndex'] === 0)) {
                this.selectedSkill = this.skillsSwiper['clickedIndex']
                this.selectedTech = 0

                const scrollPosition = document.querySelector(".skills-section")
                if (scrollPosition) {
                    window.scrollTo({
                        top: scrollPosition['offsetTop'],
                        behavior: "smooth"
                    })
                }
            }
        },
        changeCurrentTech() {
            this.selectedTech = this.skillsContentSwiper['activeIndex']
        },
        changeSlide(index) {
            if (this.selectedTech !== index) {
                this.selectedTech = index
            }
        },
        changeSlidePrev() {
            this.changeCurrentTech()
        },
        changeSlideNext() {
            this.changeCurrentTech()
        },
        resetSelect() {
            this.selectedSkill = -1
            this.selectedTech = -1
            this.skillsContentSwiper = null
        },
    },

})