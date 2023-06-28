import { defineStore } from 'pinia'
import { axios } from '../configs/axios'
import { ref } from 'vue'

export const useMemberStore = defineStore('Member', () => {
    const members = ref([])

    const getMembers = async () => {
        const { data } = await axios.get('/users')
        members.value = data.filter(m => m.membership_status)
    }

    return {
        members,
        getMembers
    }
})