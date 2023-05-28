import { useRegisterStore } from "../stores/register"
import { storeToRefs } from 'pinia'

export const useVuetifyFormValidations = () => {
    
    const { user } = storeToRefs(useRegisterStore())
    function required(property) {
        return v => v && v.length > 0 || `Please enter your ${property}`
    }

    function minLength(property, minLength) {
        return v => v && v.length >= 3 || `${property} must be at-least ${minLength} characters`
    }
    
    function maxLength(property, maxLength) {
        return v => v && v.length <= 30 || `${property} must be less ${maxLength} characters`
    }

    function isEmailValid() {
        return (v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || `Please enter a valid email`)()
        // return (v => /.+@.+/.test(v) || `Please enter a valid email`)()
    }

    function itemMarked(property) {
        return (() => user.value.skills.length > 0 || `You must select at-least one ${property}`)()
    }

    return { 
        required,
        minLength,
        maxLength,
        isEmailValid,
        itemMarked
    }
}