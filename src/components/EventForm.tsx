import React, {useState, FC} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {IUser} from "../models/IUser";
import {IEvent} from "../models/IEvent";
import {Moment} from "moment";
import {formatDate} from "../utils/date";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface EventFormProps {
    quests: IUser[],
    submit: (event: IEvent) => void
}

const EventForm: FC<EventFormProps> = (props) => {
    const [event, setEvent] = useState<IEvent>({
        author: "",
        description: "",
        date: "",
        guest: ""
    } as IEvent);
    const {user} = useTypedSelector(state => state.auth)
    const selectDate = (date: Moment | null) => {
        if (date) {
            setEvent({...event, date: formatDate(date.toDate())})
        }
    }
    const submitForm = () => {
        props.submit({...event, author: user.username})
    }
    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="description event"
                name="description"
                rules={[rules.required("Required input")]}
            >
                <Input
                    value={event.description}
                    onChange={(e) => setEvent({...event, description: e.target.value})}
                />
            </Form.Item>
            <Form.Item
                label="date event"
                name="date"
                rules={[rules.required("required input"), rules.isDateAfter("can't create events in the past")]}
            >
                {/*// @ts-ignore*/}
                <DatePicker onChange={(date) => selectDate(date)}/>
            </Form.Item>
            <Form.Item
                label="choose quest"
                name="quest"
                rules={[rules.required("required input")]}>
                <Select onChange={(guest: string) => setEvent({...event, guest})}>
                    {props.quests.map((guest) => (
                        <Select.Option key={guest.username} value={guest.username}>
                            {guest.username}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>
            <Row justify="end">
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;
