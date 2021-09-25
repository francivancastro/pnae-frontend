import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  profile_image: null,
  user: null,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.profile_image = action.payload.profile_image;
        draft.user = action.payload.user;
        draft.loading = false;
        break;
      }
      case '@auth/EDIT_USER_SUCCESS': {
        draft.user = action.payload.user;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        draft.profile_image = null;
        draft.user = null;
        break;
      }
      case '@auth/SIGN_IN_CUSTOMER_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@auth/SIGN_IN_ADMIN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_PRODUCER_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_COOPERATIVE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/LOGIN_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
