import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
}

export default function auth(state = INITIAL_STATE, actions) {
  return produce(state, draft => {
    switch (actions.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = actions.payload.token;
        draft.signed = true;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        break;
      }
      default:
    }
  })
}