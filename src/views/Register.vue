<script setup>
import { useRegisterStore } from '../stores/register';
import { storeToRefs } from 'pinia'

const registerStore = useRegisterStore()
const { skills, user, otherSkills } = storeToRefs(registerStore)
const { getSkills, registerUser, clearRegisterForm } = registerStore
if(!skills.value.length) getSkills()
</script>

<template>
    <VContainer>
        <VRow class="my-5">
            <VCol cols="12" md="6" sm="5">something cool</VCol>
            <VCol cols="12" md="6" sm="7">
                <VForm>
                    <VRow>
                        <VCol cols="12" sm="6">
                            <VTextField variant="outlined" v-model="user.first_name" label="First name" class="rounded-xl"
                                required>
                            </VTextField>
                        </VCol>
                        <VCol cols="12" sm="6">
                            <VTextField variant="outlined" rounded-lg v-model="user.last_name" label="Last name" required>
                            </VTextField>
                        </VCol>
                        <VCol cols="12" sm="6">
                            <VTextField variant="outlined" rounded-lg type="email" v-model="user.email"
                                label="Email address" required hint="Please enter valid email address" />
                        </VCol>
                        <VCol cols="12" sm="6">
                            <VTextField variant="outlined" rounded-lg type="tel" v-model="user.phone" label="Phone number"
                                required hint="We may use to call / SMS / WhatsApp" />
                        </VCol>
                        <VCol cols="12">
                            <VTextField variant="outlined" rounded-lg type="text" v-model="user.company_name"
                                label="Company name (optional)"
                                hint="Enter Company name if you own any, comma separated if more than one ( optional )" />
                        </VCol>
                        <VCol cols="12" sm="6">
                            <VTextField variant="outlined" rounded-lg type="text" v-model="user.office_location"
                                label="Office Location (optional)" required></VTextField>
                        </VCol>
                        <VCol cols="12" sm="6">
                            <VSelect label="Your Job status" v-model="user.job_status" variant="solo"
                                :items="['Student', 'Unemployed', 'Employed', 'Self-Employed', 'Freelancing']" clearable>
                            </VSelect>
                        </VCol>
                        <VCol cols="12">
                            <VSheet border :rounded="true" class="pa-3" color="transparent">
                                <VRow>
                                    <VCol cols="12" md="6" v-for="skill in skills" class="pa-0 px-2">
                                        <VCheckbox v-model="user.skills" :label="skill.name" hide-details class=""
                                            color="blue-lighten-1" :value="skill.id" />
                                    </VCol>
                                    <VCol cols="12" md="6" class="pa-0 px-2">
                                        <VCheckbox v-model="otherSkills" label="Others" hide-details
                                            color="orange-darken-2" />
                                    </VCol>
                                </VRow>
                            </VSheet>
                        </VCol>
                        <VSlideYTransition>
                            <VCol cols="12" v-if="otherSkills">
                                <VTextField variant="outlined" rounded-lg type="text" v-model="user.otherSkills"
                                    label="Other Skills"
                                    hint="Enter other skills if your skill is not listed ( comma separated if more than one )"
                                    persistent-hint />
                            </VCol>
                        </VSlideYTransition>
                        <VCol cols="12" class="mt-5">
                            <VBtn @click.prevent="registerUser" size="x-large" class="text-white bg-success me-3">Register
                            </VBtn>
                            <VBtn @click.prevent="clearRegisterForm" variant="outlined" class="text-red">Clear</VBtn>
                        </VCol>
                    </VRow>
                </VForm>
            </VCol>
        </VRow>
</VContainer>
</template>