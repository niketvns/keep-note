import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Notes = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id);
    }

    return (
        <>
            <div className="note">
                <div className="ind_note">
                    <h1>{props.title}</h1>
                    <br />
                    <p>{props.content}</p>
                    <button className="btn" onClick={deleteNote}>
                        <DeleteOutlineIcon className="delete_icon" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Notes;