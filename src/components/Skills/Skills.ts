import { defineComponent } from 'vue'

// Import Swiper Vue.js components
import SwiperCore, { Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';


interface SkillContentData {
    selectedSkill: number;
    selectedTech: number;
    
    // eslint-disable-next-line
    skillsSwiper: any;
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
    description: string;
    size: number;
    position?: number;
}

SwiperCore.use([Controller]);

export default defineComponent({
    name: 'Skills',
    props: {},
    components: { Swiper, SwiperSlide },
    data() {
        return {
            selectedSkill: -1,
            selectedTech: -1,
            skillsSwiper: null,
            skillsContentSwiper: null,
            skills: [
                {
                    title: "Frontend",
                    description: `I am using HTML and CSS to create the basic structure of the page. I actively use JavaScript and Vue for: processing page data, dynamically changing the view of the page, sending data to the server, and more. I know layout technologies: grid, flexible, cross-browser, adaptive.`,
                    technologies: [
                        {
                            title: "JavaScript",
                            size: 3,
                            position: 0,
                        },
                        {
                            title: "Vue",
                            size: 3,
                            position: 1,
                        },
                        {
                            title: "TypeScript",
                            size: 2,
                            position: 2,
                        },
                        {
                            title: "HTML",
                            size: 1,
                            position: 3,
                        },
                        {
                            title: "CSS",
                            size: 1,
                            position: 4,
                        },
                        {
                            title: "SCSS",
                            size: 2,
                            position: 5,
                        },
                        {
                            title: "Bootstrap",
                            size: 2,
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
                            position: 3,
                        },
                        {
                            title: "Python",
                            size: 1,
                            position: 1,
                        },
                        {
                            title: "PHP",
                            size: 1,
                            position: 2,
                        },
                        {
                            title: "PostgreSQL",
                            size: 2,
                            position: 0,
                        },
                        {
                            title: "SSE",
                            size: 2,
                            position: 4,
                        },
                        {
                            title: "Postman",
                            size: 1,
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
                        },
                        {
                            title: "NPM",
                            size: 1,
                        },
                        {
                            title: "Gulp / Webpack",
                            size: 1,
                        },
                        {
                            title: "Jest",
                            size: 2,
                        },
                        {
                            title: "SEO",
                            size: 2,
                        },
                        {
                            title: "CMS",
                            size: 1,
                        },
                        {
                            title: "Photoshop",
                            size: 1,
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