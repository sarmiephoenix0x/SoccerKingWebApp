import React, { useState } from 'react';
import { Modal, Button, TextField } from '@mui/material';

const AddEventOverlay = ({ open, onClose }) => {
    const [eventTitle, setEventTitle] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventSourceUrl, setEventSourceUrl] = useState('');

    const handleSubmit = () => {
        // Logic to submit the new event
        console.log({ eventTitle, eventDate, eventDescription, eventSourceUrl });
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <div className="modal-content">
                <h2>Add Event</h2>
                <TextField
                    label="Event Title"
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                    fullWidth
                />
                <TextField
                    label="Event Date"
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    fullWidth
                />
                <TextField
                    label="Description"
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                    fullWidth
                    multiline
                    rows={4}
                />
                <TextField
                    label="Source URL"
                    value={eventSourceUrl}
                    onChange={(e) => setEventSourceUrl(e.target.value)}
                    fullWidth
                />
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
        </Modal>
    );
};

export default AddEventOverlay;