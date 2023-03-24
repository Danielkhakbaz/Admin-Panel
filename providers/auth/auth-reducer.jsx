import { ACTIONS } from "providers/auth/actions";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_USERNAME_AND_PASSWORD: {
      return {
        ...state,
        phoneNumber: action.payload.phoneNumber,
        password: action.payload.password,
      };
    }
    default: {
      return state;
    }
  }
};
