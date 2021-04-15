import React from 'react';
import DynamicDropdown from './dynamic-drop-down';
import NOTES from '../../bpmtools.files/notes';

const NoteSelect = props => {
    const changeNote = event => {
        event.preventDefault();

        const newNote = {
            text: 'Note has changed!',
            value: event.target.value
        };

        props.onNoteChange(newNote);
    }
    return (
                <DynamicDropdown id="noteSelector" selectprops={NOTES} onChange={changeNote}/>
    );
};

export default NoteSelect;