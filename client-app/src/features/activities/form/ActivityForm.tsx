import React, { FormEvent, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { v4 as uuid } from 'uuid'
import { IActivity } from '../../../app/models/activity'

interface IProps {
    setEditMode: (editMode: boolean) => void;
    activity: IActivity;
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void;
    submitting: boolean
}

const ActivityForm: React.FC<IProps> = ({ setEditMode, activity: initialFormState, createActivity, editActivity, submitting }) => {

    const initializeForm = () => {
        if (initialFormState) {
            return initialFormState;
        } else {
            return {
                id: "",
                title: "",
                description: "",
                category: "",
                date: "",
                city: "",
                venue: "",
            }
        }
    }

    const [activity, setActivity] = useState<IActivity>(initializeForm);

    const handleSubmit = () => {
        if (activity.id.length === 0) {
            let newActivity = {
                ...activity,
                id: uuid(),
            }
            createActivity(newActivity);
        } else {
            editActivity(activity);
        }
    }

    const handleChangeInput = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.currentTarget;
        setActivity({ ...activity, [name]: value });
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input
                    onChange={handleChangeInput}
                    name="title"
                    placeholder='Title'
                    value={activity.title} />
                <Form.TextArea
                    onChange={handleChangeInput}
                    name="description"
                    rows={2}
                    placeholder='Description'
                    value={activity.description} />
                <Form.Input
                    onChange={handleChangeInput}
                    name="category"
                    placeholder='Categroy'
                    value={activity.category} />
                <Form.Input
                    onChange={handleChangeInput}
                    name="date"
                    type='datetime-local'
                    placeholder='Date'
                    value={activity.date} />
                <Form.Input
                    onChange={handleChangeInput}
                    name="city"
                    placeholder='City'
                    value={activity.city} />
                <Form.Input
                    onChange={handleChangeInput}
                    name="venue"
                    placeholder='Venue'
                    value={activity.venue} />
                <Button
                    loading={submitting}
                    floated='right'
                    positive type='submit'
                    content='Submit' />
                <Button
                    floated='right'
                    secondary
                    content='Cancel'
                    onClick={() => setEditMode(false)} />
            </Form>
        </Segment>
    )
}

export default ActivityForm
