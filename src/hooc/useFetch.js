import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { fetchStart, fetchSuccess} from "../redux/actions";



export const useFetch = () =>{
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(fetchStart())
        dispatch(fetchSuccess())
        // dispatch(errorMessage())
    },[dispatch])

    const { rehearsalsList , loading, error } = useSelector(state => state.listReducer)

    return { rehearsalsList , loading, error }
}