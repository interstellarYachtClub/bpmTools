import React from 'react';
import DynamicDropdown from './dynamic-drop-down';
import MODES from '../../bpmtools.files/modes';

//<DynamicDropdown selectprops={NOTES} />

const ModeSelect = props => {
    const changeMode = event => {
        event.preventDefault();

        const newMode = {
            text: 'Mode has changed!',
            value: event.target.value
        };

        props.onModeChange(newMode);
    }
    return (
                <DynamicDropdown id="modeSelector" selectprops={MODES} onChange={changeMode}/>
    );
};

export default ModeSelect;