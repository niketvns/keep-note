import React, { useState } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Notes from "./Notes";
import Footer from "./Footer";

const App = () => {

    const [addItem, setAddItem] = useState([]);

    const expand = () => {
        const expand = false;
    }

    const addNote = (note) => {

        if (note.title === "") {
            //nothing
        } else {
            setAddItem((prevData) => {
                return [note, ...prevData]
            })
        }
    }

    const onDelete = (id) => {
        setAddItem((oldData) => {
            return oldData.filter((curData, ind) => {
                return ind != id;
            })
        })
    }

    return (
        <>
            <div className="main">
                <Header />
                <CreateNote
                    passNote={addNote}
                    area={expand}
                />


                <div className="all_notes">
                    {
                        addItem.map((val, index) => {
                            return <Notes
                                key={index}
                                id={index}
                                title={val.title}
                                content={val.content}
                                deleteItem={onDelete}
                            />
                        })
                    }
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;









