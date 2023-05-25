import { defineStore } from 'pinia'
import { reactive, ref } from 'vue';

export const useRegisterStore = defineStore('Register', () => {
const otherSkills = ref(false)

// const { data: skills } = useLazyFetch('http://localhost:8013/skills')

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

const sendData = async () => {
    console.log('sending data...')
    try {
        // const data = await $fetch('https://knowit-api.kwawingu.com/join', {
        //     method: 'POST',
        //     body: user
        // })
        const data = await $fetch('http://localhost:8013/join', {
            method: 'POST',
            body: user
        })
        console.log(data)
    } catch (e) {
        console.log(e)
    }
}

const clearForm = () => {
    user.first_name = ''
    user.last_name = ''
    user.email = ''
    user.phone = ''
    user.job_status = ''
    user.company_name = ''
    user.office_location = ''
    user.skills = []
}

return {
    user,
    sendData,
    clearForm
}

})