import { REGISTER } from "./form.actionTypes";

const initialState = {
  token: "",
};

export const formReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER: {
      console.log("Payload", payload);
      return {
        ...state,
        token: payload,
      };
    }

    default: {
      return state;
    }
  }
};
