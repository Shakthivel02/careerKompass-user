import {
    validateEmail,
    validatePassword,
    validatePhone,
    validateRequired,
    validateUsername
} from '../../../helpers/formValidation'
import { RegisterValidation } from './typing'

const validateRegistration = ({
    values,
    errors,
    fields
}: RegisterValidation): Record<string, string> => {
    let formErrors: Record<string, string> = { ...errors }
    const { name, lastName, password, email,
        mobile, state } = values

    switch (fields) {
        case 'name':
            formErrors['name'] = validateUsername(name)
            break
        case 'lastName':
            formErrors['lastName'] = validateUsername(lastName)
            break
        case 'password':
            formErrors['password'] = validatePassword(password)
            break
        case 'email':
            formErrors['email'] = validateEmail(email)
            break
        case 'mobile':
            formErrors['mobile'] = validatePhone(mobile)
            break
        case 'state':
            formErrors['state'] = validateRequired(state)
            break
        default:
            formErrors['name'] = validateUsername(name)
            formErrors['lastName'] = validateUsername(lastName)
            formErrors['password'] = validatePassword(password)
            formErrors['email'] = validateEmail(email)
            formErrors['mobile'] = validatePhone(mobile)
            formErrors['state'] = validateRequired(state)
    }
    return formErrors
}
export default validateRegistration