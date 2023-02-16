import {IUser} from "../../../models/IUser";
import {IEvent} from "../../../models/IEvent";
import {EventActionEnum, SetEventsAction, SetQuestsAction} from "./types";
import {AppDispatch} from "../../index";
import UserService from "../../../api/UserService";

export const EventActionCreators = {
    setQuests: (payload: IUser[]): SetQuestsAction => ({type: EventActionEnum.SET_GUESTS, payload}),
    setEvents: (payload: IEvent[]): SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload}),
    fetchQuests: () => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService.getUsers();
            dispatch(EventActionCreators.setQuests(response.data))
        } catch (e) {
            console.log(e)
        }
    },
    createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem("events") || "[]";
            const json = JSON.parse(events) as IEvent[];
            json.push(event);
            dispatch(EventActionCreators.setEvents(json));
            localStorage.setItem("events", JSON.stringify(json))
        } catch (e) {
            console.log(e)
        }
    },
    fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem("events") || "[]"
            const json = JSON.parse(events) as IEvent[];
            const currentUserEvents = json.filter(user => user.author === username || user.guest === username );
            dispatch(EventActionCreators.setEvents(currentUserEvents))
        } catch (e) {
            console.log(e)
        }
    }
}
