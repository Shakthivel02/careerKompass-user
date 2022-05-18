export interface Register {
    name: string;
    lastName: string;
    password: string;
    confirmPassword?: string
    email: string;
    mobile: string;
    country?: string;
    state: string;
}

export type RegisterField =
    | 'name'
    | 'lastName'
    | 'password'
    | 'confirmPassword'
    | 'email'
    | 'mobile'
    | 'country'
    | 'state'

export interface RegisterValidation {
    values: Register
    errors: Record<string, string>
    fields?: RegisterField
}