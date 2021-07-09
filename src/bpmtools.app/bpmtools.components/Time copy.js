import React, { useState } from 'react';
import BpmInput from './bpmtools.subcomponents/bpm-input';
import DELAYNOTATION from '../bpmtools.files/delaynotation';
import { getDuplets } from '../bpmtools.functions/fGetDuplets';
import { getTriplets } from '../bpmtools.functions/fGetTriplets';
import { getDotted } from '../bpmtools.functions/fGetDotted';
import CleanTimeTable from './bpmtools.subcomponents/Cleantimetable';
import {
    HStack,
    Text,
    Link,
    Center
} from "@chakra-ui/react";
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

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
        <div>
                <HStack>
                    <BpmInput value={userState.Bpm} onBpmChange={changeBpmHandler} />
                </HStack>
                <Table size="small">
                    <caption>These timings can be useful for experimenting with delays and reverbs or manually syncing them to your tempo.</caption>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Notation
                        </TableCell>
                            <TableCell>
                                Duplets
                        </TableCell>
                            <TableCell>
                                Triplets
                        </TableCell>
                            <TableCell>
                                Dotted
                        </TableCell>
                        </TableRow>
                    </TableHead>
                    <CleanTimeTable a={userState.Notation} b={userState.Duplets} c={userState.Triplets} d={userState.Dotted} />
                </Table>
                <Center>
                    <HStack>
                        <Link href="https://support.presonus.com/hc/en-us/articles/210045813-Reverb-Pre-Delay" isExternal>Pre-delay</Link>
                        <Text> | </Text>
                        <Link href="https://en.wikipedia.org/wiki/Beat_(music)" isExternal>Beats</Link>
                    </HStack>
                </Center>
                </div>
    )
}
export default Time;