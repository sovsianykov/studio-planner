import { useDispatch } from "react-redux";
import {  useState } from "react";

import {createRehearsal, fetchStart, fetchSuccess} from "../redux/actions";
import {initialRehearsal} from "../content";

export const useForm = () => {
    const dispatch = useDispatch();
    const [reh, setReh] = useState(initialRehearsal);

    const onChangeHandler = (e) => {
        e.preventDefault();
        setReh((reh) => ({ ...reh, [e.target.name]: e.target.value }));
    };

    const getDate = (year,month, day, h, m) => {
      return `${year}-${month}-${day}T${h}:${m}:00+00:00`
    }


    const onSubmitHandler = async (e) => {
        const start = getDate(
            reh.date.substr(0, 4),
            reh.date.substr(5, 2),
            reh.date.substr(8, 2),
            reh.start.substr(0, 2),
            reh.start.substr(3, 2)
        );
        console.log(start)
        const end = getDate(
                reh.date.substr(0, 4),
            reh.date.substr(5, 2),
            reh.date.substr(8, 2),
            reh.end.substr(0, 2),
            reh.end.substr(3, 2))

     const   newReh = {
         studio : reh.studio,
         from: start,
         to: end,
         color:"#046db5",
         title: reh.title.toUpperCase()
     };
        console.log(newReh,'control')
        e.preventDefault();
        dispatch(createRehearsal(newReh));
        setReh(initialRehearsal);
        // alert("Заявка подана");
        dispatch(fetchStart());
        dispatch(fetchSuccess());
    };
    return { reh, onSubmitHandler, onChangeHandler };
};
