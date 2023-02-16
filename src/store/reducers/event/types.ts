import {IUser} from "../../../models/IUser";
import {IEvent} from "../../../models/IEvent";

export interface EventState {
    quests: IUser[],
    events: IEvent[]
}

export enum EventActionEnum {
    SET_GUESTS = "SET_GUESTS",
    SET_EVENTS = "SET_EVENTS"
}

export interface SetQuestsAction {
    type: EventActionEnum.SET_GUESTS,
    payload: IUser[],
}

export interface SetEventsAction {
    type: EventActionEnum.SET_EVENTS,
    payload: IEvent[],
}


export type EventAction = SetQuestsAction | SetEventsAction
