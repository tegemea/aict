import { defineStore, storeToRefs } from 'pinia';
import { reactive, ref } from 'vue';
import { axios } from '../configs/axios';
import { useMemberStore } from './members';
import { useRouter } from 'vue-router';

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
        job_status: null,
        company_name: '',
        office_location: '',
        professional: true,
        otherSkills: '',
        skills: []
    })

    const valid = ref(false)
    const registerForm = ref(null)

    const getSkills = async () => {
        try {
            const { data } = await axios.get('/skills')
            skills.value = data.filter(s => s.active);
        } catch (e) {
            console.log(e);
        }
    }

    const registerUser = async () => {
        try {
            // processing other skills if exists then register a member
            if (user.otherSkills.length) {
                const otherSkills = user.otherSkills.split(',').map(s => s.trim())
                otherSkills.forEach((s, i) => { if (!s.length) otherSkills.splice(i, 1) })

                async function addOtherSkillsToDB() {
                    const addedSkillsIDs = [];
                    try {
                        for (let skill of otherSkills) {
                            const { data: { id } } = await axios.post('/skills', { name: skill })
                            addedSkillsIDs.push(id)
                        }
                    } catch (e) {
                        console.log(e)
                    }

                    return addedSkillsIDs
                }

                async function addMemberToDBWithAllSkills() {
                    try {
                        const addedSkillsToDB = await addOtherSkillsToDB()
                        addedSkillsToDB.forEach(s => user.skills.push(s))
                        const { data: newMember } = await axios.post('/join', user)
                        members.value.push(newMember); // adds the new member in the list
                        clearRegisterForm() // clears the form after successful registration
                        router.push('/members') // re-routes to members for listing checkup
                    } catch (e) {
                        console.log(e)
                    }
                }
                addMemberToDBWithAllSkills() // execute the defined function above to register the member

            } else {
                try {
                    const { data: newMember } = await axios.post('/join', user)
                    members.value.push(newMember); // adds the new member in the list
                    clearRegisterForm() // clears the form after successful registration
                    router.push('/members') // re-routes to members for listing checkup
                } catch (e) {
                    console.log(e)
                }
            }
        } catch (e) {
            console.log(e)
        }
    }

    const clearRegisterForm = () => {
        user.first_name = ''
        user.last_name = ''
        user.email = ''
        user.phone = ''
        user.professional = false
        user.job_status = null
        user.company_name = ''
        user.office_location = ''
        user.skills = []
        user.otherSkills = ''
        otherSkills.value = false
        registerForm.value.resetValidation()
    }

    return {
        user,
        skills,
        otherSkills,
        valid,
        registerForm,
        getSkills,
        registerUser,
        clearRegisterForm
    }

})