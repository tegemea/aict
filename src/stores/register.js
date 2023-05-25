import { defineStore } from 'pinia'
import { reactive, ref } from 'vue';
import { axios } from '../configs/axios'

export const useRegisterStore = defineStore('Register', () => {

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

    const getSkills = async () => {
        try {
            const { data } = await axios.get('http://localhost:8013/skills')
            skills.value = data
        } catch (e) {
            console.log(e)
        }
    }

    const registerUser = async () => {
        console.log('sending data...')
        try {
            // const data = await $fetch('https://knowit-api.kwawingu.com/join', {
            //     method: 'POST',
            //     body: user
            // })
            // const data = await $fetch('http://localhost:8013/join', {
            //     method: 'POST',
            //     body: user
            // })
            const data = await axios.post('http://localhost:8013/join', user)
            console.log(data)
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
        getSkills,
        registerUser,
        clearRegisterForm
    }

})