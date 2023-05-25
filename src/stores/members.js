import { defineStore } from 'pinia'
import { axios } from '../configs/axios'
import { ref } from 'vue'

export const useMemberStore = defineStore('Member', () => {
    const members = ref([])

    const getMembers = async () => {
        const { data } = await axios.get('http://localhost:8013/users')
        members.value = data
    }

    return {
        members,
        getMembers
    }
})