<script setup>
import { useRegisterStore } from '../stores/register';
import { useVuetifyFormValidations } from '../utils/useVuetifyFormValidations'
import { storeToRefs } from 'pinia'

const registerStore = useRegisterStore()
const { required, minLength, maxLength, isEmailValid, itemMarked } = useVuetifyFormValidations()
const { skills, user, valid, otherSkills } = storeToRefs(registerStore)
const { getSkills, registerUser, clearRegisterForm } = registerStore
if (!skills.value.length) getSkills()

</script>

<template>
    <VContainer>
        <VRow class="my-5">
            <VCol cols="12" class="d-flex align-center">
                <VDivider />
                <h3 class="mx-4 text-green">Registration</h3>
                <VDivider />
            </VCol>
            <VCol cols="12" md="5" class="d-none d-md-block">
                <div class="text-h4 mb-4 text-grey">Join us today</div>
                <VDivider class="mb-12" />
                <VImg cover src="src/assets/images/register-img.jpg" />
            </VCol>
            <VCol cols="12" md="7">
                <VForm v-model="valid">
                    <VRow>
                        <VCol cols="12" sm="6">
                            <VTextField variant="outlined" v-model="user.first_name"
                                :rules="[required('First name'), minLength('First name', 3), maxLength('First name', 30)]"
                                counter="30" label="First name" class="rounded-xl" required>
                            </VTextField>
                        </VCol>
                        <VCol cols="12" sm="6">
                            <VTextField variant="outlined"
                                :rules="[required('Last name'), minLength('Last name', 3), maxLength('Last name', 30)]"
                                rounded-lg v-model="user.last_name" counter="30" label="Last name" required>
                            </VTextField>
                        </VCol>
                        <VCol cols="12" sm="6">
                            <VTextField variant="outlined" :rules="[required('Email Address'), isEmailValid]" rounded-lg
                                type="email" v-model="user.email" label="Email address" required />
                        </VCol>
                        <VCol cols="12" sm="6">
                            <VTextField variant="outlined" :rules="[required('Phone number')]" rounded-lg type="tel"
                                v-model="user.phone" label="Phone number" required
                                hint="We may use to call / SMS / WhatsApp" />
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
                            <VSelect label="Your Employment status" v-model="user.job_status" variant="outlined"
                                :items="['Student', 'Unemployed', 'Employed', 'Self-Employed', 'Freelancing']"
                                :rules="[v => !!v || 'Please select your Employment status']" value="asdasdas" clearable>
                            </VSelect>
                        </VCol>
                        <VCol cols="12">
                            <VCheckbox v-model="user.professional" color="red"
                                label="I'm a Professional ICT individual (Please uncheck this if just a stakeholder)" />
                        </VCol>
                        <VSlideYTransition>
                            <VCol v-if="user.professional" cols="12">
                                <VCard class="pa-3 pb-6" title="Your major Skill(s)" variant="outlined">
                                    <VCardSubtitle class="px-4 text-grey">Please make sure you select at-least one skill
                                        below
                                    </VCardSubtitle>
                                    <VRow>
                                        <VCol cols="12">
                                            <VDivider class="ma-4 mb-0" />
                                        </VCol>
                                        <VCol cols="12" md="6" v-for="skill in skills" class="pa-0 px-4">
                                            <VCheckbox v-model="user.skills" :rules="[itemMarked('Skill')]"
                                                :label="skill.name" hide-details class="" color="blue-lighten-1"
                                                :value="skill.id" />
                                        </VCol>
                                        <VCol cols="12" md="6" class="pa-0 px-4">
                                            <VCheckbox v-model="otherSkills" label="Others" hide-details
                                                color="orange-darken-2" />
                                        </VCol>
                                    </VRow>
                                </VCard>
                            </VCol>
                        </VSlideYTransition>
                        <VSlideYTransition>
                            <VCol cols="12" v-if="otherSkills">
                                <VTextField variant="outlined" :rules="[required('Other skill(s)')]" rounded-lg type="text"
                                    v-model="user.otherSkills" label="Other Skills"
                                    hint="Enter other skills if your skill is not listed ( comma separated if more than one )"
                                    persistent-hint />
                            </VCol>
                        </VSlideYTransition>
                        <VCol cols="12" class="mt-5">
                            <VBtn @click.prevent="registerUser" :disabled="!valid" size="x-large"
                                class="text-white bg-success me-3">
                                <VIcon icon="mdi-send-circle" class="me-3" />Register
                            </VBtn>
                            <VBtn @click.prevent="clearRegisterForm" variant="outlined" class="text-red">Clear</VBtn>
                        </VCol>
                    </VRow>
                </VForm>
            </VCol>
        </VRow>
    </VContainer>
</template>