import React, {FC, useEffect, useState} from 'react';
import {Layout, Row, Button, Modal} from "antd";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IEvent} from "../models/IEvent";

const Event: FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const {fetchQuests, createEvent, fetchEvents} = useActions();
    const {quests, events} = useTypedSelector(state => state.event);
    const {user} = useTypedSelector(state => state.auth);

    useEffect(() => {
        fetchQuests();
        fetchEvents(user.username);
    }, []);

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false);
        createEvent(event)
    }
    return (
        <Layout>
            <EventCalendar events={events}/>
            <Row justify="center">
                <Button onClick={() => setModalVisible(true)}>add event</Button>
            </Row>
            <Modal title="Добавить событие"
                   open={modalVisible}
                   footer={null}
                   onCancel={() => setModalVisible(false)}>
                <EventForm quests={quests} submit={addNewEvent}/>
            </Modal>
        </Layout>
    );
};

export default Event;
