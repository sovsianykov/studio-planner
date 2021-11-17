import {CREATE_REHEARSAL, DELETE_REHEARSAL, FETCH_FAILURE, FETCH_START, FETCH_SUCCESS} from "./types";
import {initialRehearsal} from "../content";


const initialState = {
  rehearsalsList: [],
  loading: false,
  error: null,
  newRehearsal: initialRehearsal,
};

const listReducer = (state =initialState,action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                loading: true,
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                rehearsalsList : action.payload,
                loading: false,
            };
        case FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: "something go wrong !",
            };
        case CREATE_REHEARSAL:
            return {
                ...state,
                newRehearsal: action.payload,
            };
        case DELETE_REHEARSAL:
            return {
                ...state,
                rehearsalsList: state.rehearsalsList.filter((reh) =>  reh.id !== action.payload)
            };
        default:
            return state;
    }
};
export default listReducer;
