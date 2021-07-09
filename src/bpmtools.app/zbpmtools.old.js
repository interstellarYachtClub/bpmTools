import React, { Component, useState } from 'react';
import Module from './bpmtools.components/Module';
import Scale from './bpmtools.components/Scale';
import Time from './bpmtools.components/Time';
import Nav from './bpmtools.components/Nav';
import LFO from './bpmtools.components/lfo';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

//included modules
/*
<LFO />
*/

const initialState = {
        bpmInput: true,
        scaleModeTable: true,
        delayCalculator: {display: <Time/>},
        lfoCalculator: true,
        userBPM: 128
}

const BPMTools = () => {
    const [userState, setUserState] = useState(initialState);

    return (
        <div className="bpmBody">
            <Container maxWidth="sm">
                <Grid
                    container spacing={1}
                    direction="column"
                    justify="space-between"
                >
                    <Nav />
                    <Module
                        label={'Scale / mode reference'}
                        component={<Scale />}
                        toggleID={'scaleModeTable'}
                    />
                    <div>
                        <Module
                            label={'Delay / pre-delay calculator'}
                            component={userState.delayCalculator.display}
                            toggleID={'delayCalculator'}
                        />
                    </div>
                    <Module
                        label={'LFO / hertz calculator'}
                        component={<LFO />}
                        toggleID={'lfoCalculator'}
                    />
                </Grid>
            </Container>
        </div>
    )
}
export default BPMTools;