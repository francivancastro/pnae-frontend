export function signInCustomer(cpf, password) {
  return {
    type: '@auth/SIGN_IN_CUSTOMER_REQUEST',
    payload: { cpf, password }
  }
}
export function signInAdmin(email, password) {
  return {
    type: '@auth/SIGN_IN_ADMIN_REQUEST',
    payload: { email, password }
  }
}
export function signInProducer(cpf, password) {
  return {
    type: '@auth/SIGN_IN_PRODUCER_REQUEST',
    payload: { cpf, password }
  }
}
export function signInCooperative(cnpj, password) {
  return {
    type: '@auth/SIGN_IN_COOPERATIVE_REQUEST',
    payload: { cnpj, password }
  }
}

export function signInSuccess(token, user, profile_image) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user, profile_image },
  };
}

export function editUserSuccess(user) {
  return {
    type: '@auth/EDIT_USER_SUCCESS',
    payload: { user },
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

export function loginFailure() {
  return {
    type: '@auth/LOGIN_FAILURE',
  };
}