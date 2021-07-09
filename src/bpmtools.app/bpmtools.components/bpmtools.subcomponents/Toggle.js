import React, { useState } from "react";
import {
    Switch,
    FormControl,
    FormLabel,
    Text
} from "@chakra-ui/react"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const Toggle = (props) => {
    let stateinit = { on: false, toggleid: props.id }
    const [display, setDisplay] = useState(stateinit);

    const Toggled = event => {
        event.preventDefault();

        //define On / Off
        const toggleOn = () => {
            let newToggle = { index: props.stateID, comp: true, tf: 'ON' }
            props.changeToggle(newToggle)
            //console.log('comp: '+newToggle.comp+' -- id: '+newToggle.index)
        }
        const toggleOff = () => {
            let newToggle = { index: props.stateID, comp: false, tf: 'OFF' }
            props.changeToggle(newToggle)
            //console.log('comp: '+newToggle.comp+' -- id: '+newToggle.index)
        }

        if (display.on === true) {
            setDisplay(() => {
                return {
                    on: false,
                }
            });
            //hide
            toggleOff()
        } else {
            setDisplay(() => {
                return {
                    on: true,
                }
            });
            //show
            toggleOn()
        }
        //testing

    }
    return (
        <FormControl>
            <Grid container spacing={0}>
                    <Grid item xs={10}>
                        <FormLabel htmlFor="email-alerts" mb="0">
                            {props.label}
                        </FormLabel>
                    </Grid>
                    <Grid item xs={1}>
                        <Switch size="lg" id={props.id} onChange={Toggled} />
                    </Grid>
                    <Grid item xs={1}>
                        <div />
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={10}>
                            <Text>{props.about}</Text>

                        </Grid>
                        <Grid item xs={2}>

                        </Grid>


                    </Grid>
                </Grid>
        </FormControl>
    )
}

export default Toggle;