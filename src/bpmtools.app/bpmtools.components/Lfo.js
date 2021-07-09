import React from 'react';
import {
    HStack,
    Text,
    Link,
    Center
} from "@chakra-ui/react";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import DELAYNOTATION from '../bpmtools.files/delaynotation';
import { getLFO } from '../bpmtools.functions/fGetLFO';

const LFO = props => {
    const printLFO = () => {
        let lfotable = [];
        DELAYNOTATION.forEach((value, index) => {
            lfotable.push(
            <TableRow>
                <TableCell>
                    {value}
                </TableCell>
                <TableCell>
                    {getLFO(props.BPM, index)}
                </TableCell>
            </TableRow>
            )
        })
        return lfotable;
    }
    return (
        <div>
            <Table size="small">
                <caption>These timings can be useful for experimenting with synthesizers and analog modelled gear.</caption>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Notation
                        </TableCell>
                        <TableCell>
                            Rate
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {printLFO()}
                </TableBody>
            </Table>
            <Center>
                <HStack>
                    <Link href="https://en.wikipedia.org/wiki/Low-frequency_oscillation" isExternal>LFO</Link>
                    <Text> | </Text>
                    <Link href="https://en.wikipedia.org/wiki/Hertz" isExternal>Hertz</Link>
                </HStack>
            </Center>
        </div>
    )
}

export default LFO;