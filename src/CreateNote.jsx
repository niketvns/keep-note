import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    const addEvent = (event) => {
        event.preventDefault();
        props.passNote(note);
        setNote({
            title: "",
            content: ""
        })
        setExpand(false)
    }

    const expandIt = () => {
        setExpand(true)
    }
    const backToNormal = () => {
        setExpand(false)
    }

    return (
        <>
            <div className="main_note" onDoubleClick={backToNormal}>
                <form>
                    {
                        expand ?
                            <input
                                type="text"
                                value={note.title}
                                placeholder="Title"
                                autoComplete="off"
                                onChange={InputEvent}
                                name="title"
                            /> : null
                    }

                    <textarea
                        name=""
                        value={note.content}
                        rows="1"
                        placeholder="Write a Note..."
                        onChange={InputEvent}
                        name="content"
                        onClick={expandIt}
                    />

                    {
                        expand ?
                            <button onClick={addEvent}>
                                <AddIcon className="plus_sign" />
                            </button> : null
                    }
                </form>
            </div>
        </>
    );
}

export default CreateNote;