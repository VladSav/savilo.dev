import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Contacts',
    props: {},
    components: {},
    data() {
        return {
            form: {
                name: "",
                message: "",
                email: "",
            }
        }
    },
    methods: {
        sendFromData() {
            console.log("Not complete")
        }
    }
})