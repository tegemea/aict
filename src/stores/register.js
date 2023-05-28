import { defineStore, storeToRefs } from 'pinia'
import { reactive, ref } from 'vue';
import { axios } from '../configs/axios'
import { useMemberStore } from './members';
import { useRouter } from 'vue-router'

export const useRegisterStore = defineStore('Register', () => {

    const { members } = storeToRefs(useMemberStore())
    const router = useRouter()

    const otherSkills = ref(false)
    const skills = ref([])
    const user = reactive({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        job_status: '',
        company_name: '',
        office_location: '',
        skills: []
    })

    const valid = ref(false)

    const getSkills = async () => {
        try {
            const { data } = await axios.get('http://localhost:8013/skills')
            skills.value = data;
        } catch (e) {
            console.log(e)
        }
    }

    const registerUser = async () => {
        try {
            const { data : newMember } = await axios.post('http://localhost:8013/join', user)
            members.value.push(newMember); // adds the new member in the list
            clearRegisterForm() // clears the form after successful registration
            router.push('/members') // re-routes to members for listing checkup
        } catch (e) {
            console.log(e)
        }
    }

    const clearRegisterForm = () => {
        user.first_name = ''
        user.last_name = ''
        user.email = ''
        user.phone = ''
        user.job_status = ''
        user.company_name = ''
        user.office_location = ''
        user.skills = []
        otherSkills.value = false
    }

    return {
        user,
        skills,
        otherSkills,
        valid,
        getSkills,
        registerUser,
        clearRegisterForm
    }

})