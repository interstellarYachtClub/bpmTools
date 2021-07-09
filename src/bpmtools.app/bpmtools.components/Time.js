import React from 'react';
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

const Time = props => {

    return (
        <div>
                <Table size="small">
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
                    <CleanTimeTable a={DELAYNOTATION} b={getDuplets(props.BPM)} c={getTriplets(props.BPM)} d={getDotted(props.BPM)} />
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