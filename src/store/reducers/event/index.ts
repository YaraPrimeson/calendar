import {EventAction, EventActionEnum, EventState} from "./types";

const initialState:EventState = {
    quests:[],
    events:[]
}

export default function EventReducer(state = initialState, action:EventAction):EventState {
    switch (action.type) {
        case EventActionEnum.SET_EVENTS:
            return {...state,events: action.payload }
        case EventActionEnum.SET_GUESTS:
            return {...state,quests: action.payload }
        default:
            return state;
    }
}
