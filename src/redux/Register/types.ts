export interface Register {
  name: string;
  lastName: string;
  password: string;
  confirmPasword:string
  email: string;
  mobile: string;
  country: string;
  state: string;
}

export interface Profile {
  id: string;
  profile: string;
  flag: string;
  created_at: string;
}

export interface Countries {
  id: string;
  name: string;
}

export interface StatesPayload {
  id: string;
}

export interface StatesResponse {
  id: string;
  state_name: string;
}
export interface CountryId {
  id: string;
}
export interface CountryPin {
  contact_no_code: string;
}
export interface InitialState {
  isLoading: boolean;
  registerDetails: Register;
  profileData: Array<Profile>;
  countryData: Array<Countries>;
  stateData: Array<StatesResponse>;
  countryPin: Array<CountryPin>;
}