import React, { useState } from 'react';
import Module from './bpmtools.components/Module';
import Scale from './bpmtools.components/Scale';
import Time from './bpmtools.components/Time';
import NavTools from './bpmtools.components/NavTools';
import Footer from './bpmtools.components/Footer';
import Lfo from './bpmtools.components/Lfo';
import Sub from './bpmtools.components/Sub';
import Frequencies from './bpmtools.components/Frequencies';
import DevNotes from './bpmtools.components/DevNotes';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const BpmTools = () => {
    const [userBpm, setUserBpm] = useState({Bpm: 128});

    const [userState, setUserState] = useState({allModules: [false, false, false, false, false, false]});

    const onBpmChange = (newBpm) => {
        setUserBpm(() => {
            return {
                Bpm: newBpm
            }
        })
        console.log('HOW TO ROCK PARTY /s https://youtu.be/KsDFah7y03s?t=86')
    }

    const changeToggle = (newToggle) => {
        let currentState = [];
        userState.allModules.forEach(element => currentState.push(element));
        currentState[newToggle.index] = newToggle.comp;
        setUserState(() => {
            return {
                allModules: currentState
            }
        })
    }

    const checkToggle = (toggleStatus, labelstring, aboutstring, module, id) => {
        return (toggleStatus ? 
            <Module 
            label={labelstring}
            about={aboutstring}
            component={module}
            onToggleChange={changeToggle}
            stateID={id}
            />
             : 
                <Module 
                label={labelstring}
                about={aboutstring}
                component={<div/>}
                onToggleChange={changeToggle}
                stateID={id}
                />
            )

    }

    return (
        <div className="bpmBody">
            <Container maxWidth="small">
                <Grid container direction={'column'} spacing={3}>
                    <Grid item xs={12}>
                        <NavTools currentBPM={128} BPM={userBpm.Bpm} onBpmInput={onBpmChange}/>
                    </Grid>
                    <Grid item xs={12}
                        >
                            <div className="comp1"
                            />
                            </Grid>
                            <Grid item xs={12}
                        >
                        {checkToggle(userState.allModules[0],
                        'Mode / scale reference',
                        'Choose a mode and/or a starting key to get notes and chords within that scale.',
                        <Scale />,
                        0
                        )}
                    </Grid>
                    <Grid item xs={12}>
                    {checkToggle(userState.allModules[1],
                        'Sub-bass compression attack minimums',
                        'This table provides the time it takes to complete a single sub bass cycle. It may be beneficial for applying compression or layering in the sub-bass range.',
                        <Sub />,
                        1
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        {checkToggle(userState.allModules[2],
                        'Delay / pre-delay calculator',
                        'These timings can be useful for experimenting with delays and reverbs or manually syncing them to your tempo. 16th, 32nd, and 64th values might be useful for compression attack times for preserving or accentuating transients.',
                        <Time BPM={userBpm.Bpm}/>,
                        2
                        )}
                    </Grid>
                    <Grid item xs={12}>
                    {checkToggle(userState.allModules[3],
                        'LFO / Hertz calculator',
                        'These timings can be useful for experimenting with synthesizers and analog modelled gear.',
                        <Lfo BPM={userBpm.Bpm}/>,
                        3
                        )}
                    </Grid>
                    <Grid item xs={12}>
                    {checkToggle(userState.allModules[4],
                        'Musical note frequencies',
                        'A table of musical notes and their corresponding frequencies (when A=440). This is useful for instrumentation ranges and EQing. It is generally best practice to roll off the lows between 20 and 40 Hertz.',
                        <Frequencies />,
                        4
                        )}
                    </Grid>
                    <Grid item xs={12}>
                    {checkToggle(userState.allModules[5],
                        'Developer notes',
                        '...For those beta testing!',
                        <DevNotes />,
                        5
                        )}
                    </Grid>
                    <Grid item xs={12}>
                    <Footer/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default BpmTools;