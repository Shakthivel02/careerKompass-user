const strings = {
  login: {
    login: 'Login',
    message: 'Login failed check the Credientls'
  },
  user: {
    title: 'Users',
    enrollment: {
      enrolment: "ENROLLMENT",
    },
    dashboard: {
      title: "Dashboard",
    },
    streamMaster: {
      title: "Stream Master",
    },
    category: {
      title: "Category",
      addCategort: "Add Category",
      assignCategorystr: "Assign Category",
    },
    questionManagement: {
      title: "Question Management",
    },
    result: {
      title: "Result",
    },
  },
  details: {
    userDetails: {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      id: 'ID',
      userCode: 'User Code',
      employeeCode: 'Employe Code',
      contactno: 'Contact Number',
      userTypeId: 'User Type'
    },
    streamDetails: {
      id: 'ID',
      divisionid: 'Division ID',
      name: 'Stream Name',
      createdat: 'Created Time',
      updatedat: 'Updated Time',
      status: 'Status',
    }
  },
  tablefooter: {
    previous: "Previous",
    next: "Next",
  },
  button: {
    submit: 'Submit'
  },
  validationMessages: {
    userName: {
      required: 'Username is required'
    },
    phone: {
      required: 'Phone number is required',
      numberOnly: 'Please enter only numbers',
      invalid: 'Please enter valid phone number'
    },
    email: {
      required: 'Email is required',
      invalid: 'Please enter valid email'
    },
    password: {
      required: 'Password is required',
      confirmPasswordRequired: 'Confirm Password is required',
      invalid:
        'Password must contain 8 characters, One uppercase, One lowercase, One number and one special case character',
      nonMatch: 'Passwords must match'
    },
    field: {
      required: 'This is a required field'
    },
    date: {
      academicYearInvalid: 'Please enter a valid Academic year to proceed'
    }
  }
}
export default strings
