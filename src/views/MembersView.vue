<script setup>
import { useMemberStore } from '../stores/members'
import { storeToRefs } from 'pinia'

const memberStore = useMemberStore()
const { members } = storeToRefs(memberStore)
const { getMembers } = memberStore
if(!members.value.length) getMembers()

</script>

<template>
    <VRow class="py-12 align-center">
        <VCol cols="12" class="d-flex align-center">
            <VDivider />
                <h3 class="mx-4 text-green">Members</h3>
            <VDivider />
        </VCol>
    </VRow>
    <VRow v-if="members.length">
        <VCol v-for="{ first_name, last_name, skills } in members" cols="12" md="4" xl="3">
            <VCard :title="`${first_name} ${last_name}`" :subtitle="`${skills.map(s => s.name).join(', ')}`" variant="tonal" />
        </VCol>
    </VRow>
    <VRow>
        <VCol cols="12" class="text-center">
            <h3>Sorry, no members at the moment..!</h3>
        </VCol>
    </VRow>
</template>