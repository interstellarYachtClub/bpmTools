import React, { useState } from 'react';
import ModeSelect from './bpmtools.subcomponents/mode-select';
import NoteSelect from './bpmtools.subcomponents/note-select';
import { getScale } from '../bpmtools.functions/fGetScale';
import MODES from '../bpmtools.files/modes';
import {
    HStack,
    Text,
    Box,
    Heading,
    Table,
    Thead,
    Tbody,
    Link,
    Tr,
    Center,
    Td,
    Th,
    TableCaption,
    Container
} from "@chakra-ui/react";

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
        <div>
                <HStack>
                    <ModeSelect onModeChange={selectModeHandler} />
                    <NoteSelect onNoteChange={selectNoteHandler} />
                </HStack>
                <Table size="sm">
                    <TableCaption>Choose a mode and/or a starting key for all available note and chords within that scale. Additional information can be found at the links below.</TableCaption>
                    <Thead></Thead>
                    <Tbody>
                        <Tr>
                            <Th>
                                Note
                        </Th>
                            {userState.scale.map((note) => (
                                <Td>{note}</Td>
                            ))}
                        </Tr>
                        <Tr>
                            <Th>
                                Chord
                        </Th>
                            {userState.chords.map((chord) => (
                                <Td>{chord}</Td>
                            ))}
                        </Tr>
                    </Tbody>
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