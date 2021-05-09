import { LoginData } from '../shared/logindata';
import { ADD_USER } from './Action';

export const initialState = {
    login: LoginData
};

export const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER:
          return {
            login: state
          };
        default:
          return state;
        }
      }
};