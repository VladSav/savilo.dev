import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Contacts',
    props: {
        headerLinks: {
            default: []
        },
    },
    components: {},
    data() {
        return {}
    },
    methods: {
        clickHeaderLink(key) {
            this.$emit('mainSlideChange', key)
        },
    }
})