import { defineStore } from 'pinia'
import { ref } from 'vue'
import { axios } from '../configs/axios'

export const useEmploymentStatusStore = defineStore('Employment Status', () => {
    const employmentStatuses = ref([])

    const getEmploymentStatuses = async () => {
        try {
            const { data } = await axios.get('/employment-statuses')
            employmentStatuses.value = data
        } catch (e) {
            console.log(e)
        }
    }

    return {
        employmentStatuses,
        getEmploymentStatuses
    }
})