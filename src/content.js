import { v4 as uuidv4 } from "uuid"

export const eventLists = [
    {id: uuidv4(),
        studio:"A",
        color: "#3694DF",
        fromTime: '',
        fromDate: '',
        toTime: '',
        toDate: '',
        title: "Rehearsal",
        options:'with drums',

    },
    {id: uuidv4(),
        studio:"B",
        color: "#3694DF",
        fromTime: '',
        fromDate: '',
        toTime: '',
        toDate: '',
        title: "Rehearsal",
        options:'with drums',

    },
    {id: uuidv4(),
        studio:"C",
        color: "#3694DF",
        fromTime: '',
        fromDate: '',
        toTime: '',
        toDate: '',
        title: "Rehearsal",
        options:'with drums',

    },
    {id: uuidv4(),
        initialRehearsal:"D",
        color: "#3694DF",
        fromTime: '',
        fromDate: '',
        toTime: '',
        toDate: '',
        artist: "Rehearsal",
        options:'with drums',

    },
]
class Rehearsal {
    constructor(title,studio,color,start,end,date,options,id) {
        this.id = id
        this.studio = studio
        this.title = title
        this.date = date
        this.start = start
        this.end = end
        this.color = "purple"
        this.options = options
    }
}
export const initialRehearsal = new Rehearsal(
    '', '','', '','', '','', '')


