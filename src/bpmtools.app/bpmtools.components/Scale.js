import React, { useState } from 'react';
import ModeSelect from './bpmtools.subcomponents/mode-select';
import NoteSelect from './bpmtools.subcomponents/note-select';
import { getScale } from '../bpmtools.functions/fGetScale';
import MODES from '../bpmtools.files/modes';
import {
    HStack,
    Text,
    Link,
    Center
} from "@chakra-ui/react";
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

const initialState = {
    mode: "aeolian",
    root: 0,
    scale: ['C', 'D', 'D#/Eb', 'F', 'G', 'G#/Ab', 'A#/Bb'],
    chords: ['i', 'dim', 'III', 'iv', 'v', 'VI', 'VII'],
    steps: [1, 3, 4, 6, 8, 9, 11]
}

const Scale = () => {
    const [userState, setUserState] = useState(initialState);

    const selectModeHandler = (newMode) => {
        let selectedMode = MODES.filter(obj => {
            return obj.name === newMode.value
        });
        setUserState(prevUserState => {
            return {
                mode: newMode.value,
                chords: selectedMode[0].notation,
                steps: selectedMode[0].steps,
                root: userState.root,
                scale: getScale(userState.root, selectedMode[0].steps)
            };
        });
    }

    const selectNoteHandler = (newNote) => {
        let currentNote = newNote.value;
        setUserState(prevUserState => {
            return {
                root: currentNote,
                chords: userState.chords,
                mode: userState.mode,
                steps: userState.steps,
                scale: getScale(currentNote, userState.steps)
            };
        });
    }

    return (
        <div className="scaleTable">
                <HStack>
                    <ModeSelect onModeChange={selectModeHandler} />
                    <NoteSelect onNoteChange={selectNoteHandler} />
                </HStack>
                <Table size="small">
                    <TableBody>
                        <TableRow>
                            <TableCell style={{padding: 6}} align="center">
                                Note
                        </TableCell>
                            {userState.scale.map((note) => (
                                <TableCell style={{padding: 8}} align="center">{note}</TableCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            <TableCell style={{padding: 6}} align="center">
                                Chord
                        </TableCell>
                            {userState.chords.map((chord) => (
                                <TableCell style={{padding: 8}} align="center">{chord}</TableCell>
                            ))}
                        </TableRow>
                    </TableBody>
                </Table>
                <Center>
                    <HStack>
                        <Link href="https://en.wikipedia.org/wiki/Mode_(music)" isExternal>Modes</Link>
                        <Text> | </Text>
                        <Link href="https://en.wikipedia.org/wiki/Chord_(music)#Scale_degree" isExternal>Chords</Link>
                        <Text> | </Text>
                        <Link href="https://en.wikipedia.org/wiki/Circle_of_fifths" isExternal>Circle of fifths</Link>
                    </HStack>
                </Center>
            </div>
    )
}

export default Scale;