import React, { useState } from 'react';
import BpmInput from './bpmtools.subcomponents/bpm-input';
import DELAYNOTATION from '../bpmtools.files/delaynotation';
import { getDuplets } from '../bpmtools.functions/fGetDuplets';
import { getTriplets } from '../bpmtools.functions/fGetTriplets';
import { getDotted } from '../bpmtools.functions/fGetDotted';
import CleanTimeTable from './bpmtools.subcomponents/clean-time-table';
import {
    HStack,
    Text,
    Box,
    Heading,
    Thead,
    Link,
    Tr,
    Center,
    TableCaption,
    Th
} from "@chakra-ui/react";
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

const initialState = {
    Bpm: 128,
    Duplets: getDuplets(128),
    Triplets: getTriplets(128),
    Dotted: getDotted(128),
    Notation: DELAYNOTATION
}
const Time = () => {
    const [userState, setUserState] = useState(initialState);

    const changeBpmHandler = (newBpm) => {
        setUserState(prevUserState => {
            return {
                Bpm: newBpm,
                Duplets: getDuplets(newBpm),
                Triplets: getTriplets(newBpm),
                Dotted: getDotted(newBpm),
                Notation: userState.Notation
            };
        });
    }

    return (

        <Box>
            <Heading
                size="md">
                Delay / pre-delay calculator
                </Heading>
            <Box
                maxW="lg"
                borderWidth="1px"
                borderRadius="lg"
            >
                <HStack>
                    <BpmInput value={userState.Bpm} onBpmChange={changeBpmHandler} />
                </HStack>
                <Table size="sm">
                    <TableCaption>These timings can be useful for experimenting with delays and reverbs or manually syncing them to your tempo.</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>
                                Notation
                        </Th>
                            <Th>
                                Duplets
                        </Th>
                            <Th>
                                Triplets
                        </Th>
                            <Th>
                                Dotted
                        </Th>
                        </Tr>
                    </Thead>
                    <CleanTimeTable a={userState.Notation} b={userState.Duplets} c={userState.Triplets} d={userState.Dotted} />
                </Table>
                <Center>
                    <HStack>
                        <Link href="https://support.presonus.com/hc/en-us/articles/210045813-Reverb-Pre-Delay" isExternal>Pre-delay</Link>
                        <Text> | </Text>
                        <Link href="https://en.wikipedia.org/wiki/Beat_(music)" isExternal>Beats</Link>
                    </HStack>
                </Center>
            </Box>
        </Box>
    )
}
export default Time;