import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import {CREATE_REHEARSAL, DELETE_REHEARSAL, FETCH_FAILURE, FETCH_START, FETCH_SUCCESS} from "./types";

const usersCollectionRef = collection(db, "rehearsalsList");


export const fetchStart = () => {
    return { type: FETCH_START };
};
export const fetchSuccess = () => {
    return async (dispatch) => {
        try {
            const data = await getDocs(usersCollectionRef);
            let response = [];
            if (data) {
                response = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            }
            console.log(response)
            dispatch({ type: FETCH_SUCCESS, payload: response });
        } catch (e) {
            errorMessage();
        }
    };
};
function errorMessage() {
    return {
        type: FETCH_FAILURE,
    };
}

export const createRehearsal = (newRehearsal) => {
    return async (dispatch) => {
        if (newRehearsal.artist && newRehearsal.date) {
            await addDoc(usersCollectionRef, newRehearsal);
            dispatch({ type: CREATE_REHEARSAL, payload: newRehearsal });
        }
    };
};
export const deleteRehearsal =(id) =>{
    return {
        type: DELETE_REHEARSAL,
        payload:id
    }
}