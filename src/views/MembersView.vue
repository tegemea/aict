<script setup>
import { useMemberStore } from '../stores/members'
import { storeToRefs } from 'pinia'

const memberStore = useMemberStore()
const { members } = storeToRefs(memberStore)
const { getMembers } = memberStore
getMembers()

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
        <VCol v-for="({ first_name, last_name, skills }, i) in members" cols="12" md="4" xl="3" :key="i">
            <VCard :title="`${first_name} ${last_name}`" :subtitle="`${skills.filter(s => s.active).map(s => s.name).join(', ')}`" variant="tonal">
                <VTooltip v-if="skills.length" :max-width="250" activator="parent" location="bottom" :text="`${skills.filter(s => s.active).map(s => s.name).join(', ')}`" />
            </VCard>
        </VCol>
    </VRow>
    <VRow v-else>
        <VCol cols="12" class="text-center">
            <h3>Sorry, no members at the moment..!</h3>
        </VCol>
    </VRow>
</template>

<style scoped>
.v-tooltip__content {
    font-size: 50px !important;
    opacity: 1 !important;
    display: block !important;
}
</style>