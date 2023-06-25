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
                                hint="Enter Company name if you own or working for any, comma separated if more than one" />
                        </VCol>
                        <VCol cols="12" sm="6">
                            <VTextField variant="outlined" rounded-lg type="text" v-model="user.office_location"
                                label="Office Location (optional)" required></VTextField>
                        </VCol>
                        <VCol cols="12" sm="6">
                            <VSelect label="Your Employment status" v-model="user.job_status" variant="outlined"
                                :items="['Student', 'Unemployed', 'Employed', 'Self-Employed', 'Freelancing']"
                                :rules="[v => !!v || 'Please select your Employment status']" clearable>
                            </VSelect>
                        </VCol>
                        <VCol cols="12">
                            <VCheckbox v-model="user.professional" color="red"
                                label="I'm a Professional ICT personnel (Please uncheck this if you are just a stakeholder)" />
                        </VCol>
                        <VSlideYTransition>
                            <VCol v-if="user.professional" cols="12">
                                <VSelect v-model="user.skills" label="Select Your Major Skill/s (scroll for more)"
                                    :rules="[required('Professional Skill/s')]" :items="skills" item-title="name"
                                    item-value="id" variant="outlined" multiple chips clearable />
                            </VCol>
                        </VSlideYTransition>

                        <VSlideYTransition>
                            <VRow v-if="user.professional" class="mx-0 my-2">
                                <VCol cols="12">
                                    <VCard variant="outlined" class="pa-5">
                                        <VRow class="d-flex align-center">
                                            <VCol cols="12 text-grey">
                                                Please enter your other <strong>Proffesional Skill/s</strong> if they are not listed above
                                                <VDivider class="mt-5" />
                                            </VCol>
                                            <VCol cols="1">
                                                <VCheckbox v-model="otherSkills" class="pa-0 ma-0" hide-details />
                                            </VCol>
                                            <VSlideYTransition mode="out-in">
                                                <VCol v-if="!otherSkills" cols="11" class="py-10">Mark the checkbox to
                                                    enable entering other skills not listed above</VCol>
                                                <VCol v-else cols="11" class="" style="padding: 13px 12px;">
                                                    <VTextField :disabled="!otherSkills" variant="outlined"
                                                        :rules="[required('Other skill/s not listed above')]" rounded-lg type="text"
                                                        v-model="user.otherSkills"
                                                        label="ex. Other Skill 1, Other Skill 2, etc..."
                                                        hint="Enter other skill/s not listed above ( comma separated if more than one )"
                                                        persistent-hint clearable />
                                                </VCol>
                                            </VSlideYTransition>
                                        </VRow>
                                    </VCard>
                                </VCol>
                            </VRow>
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
    </VContainer></template>