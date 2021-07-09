import React from 'react';
import Card from '@material-ui/core/Card';
import Toggle from './bpmtools.subcomponents/Toggle';
import Paper from '@material-ui/core/Paper';

const Module = props => {
    return (
        <div>
            <Toggle 
            label={props.label}
            about={props.about}
            id={props.toggleID} 
            changeToggle={props.onToggleChange} 
            component={props.initcomponent}
            stateID={props.stateID}
            /> 
            <Paper elevation={1}>
                {props.component}
            </Paper>

        </div>
    )
}

export default Module;