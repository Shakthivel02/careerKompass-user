export interface Register {
    name: string
    lastName: string
    email: string
    mobile: string
    password: string
    country: string
    state: string
    city: string
    profile: string
    stream: string
}

export interface Profile {
    id: string
    profile: string
    flag: string
    created_at: string

}

export interface InitialState {
    isLoading: boolean;
    registerDetails: Register
    profileData: Array<Profile>
}