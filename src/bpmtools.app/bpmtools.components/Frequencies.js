import React from 'react';
import {
    HStack,
    Link,
    Center
} from "@chakra-ui/react";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import FREQUENCY from '../bpmtools.files/frequency';

const getRange = (oct) => {
    if (oct < 1){
        return 'sub bass'
    } else if (oct < 2){
        return 'sub bass'
    } else if (oct < 3){
    return 'bass'      
    } else if (oct < 4){
        return 'upper bass'
    } else if (oct < 5){
        return 'lower midrange' 
    } else if (oct < 6){
        return 'middle midrange'
    } else if (oct < 7){
        return 'upper midrange'
    } else if (oct < 8){
        return 'present midrange'
    } else {
        return 'high end'
    }
}

const allFrequencies = () => {
    const EQTABLE = [];
    for (let octave = 0; octave < 9; octave++) {
        FREQUENCY.map((freq) => (
            EQTABLE.push(
            <TableRow>
                <TableCell>
                    {freq.name + octave}
                </TableCell>
                <TableCell>
                    {freq.value[octave].toFixed(1) + ' Hz'}
                </TableCell>
                <TableCell>
                    {getRange(octave)}
                </TableCell>
            </TableRow>
        )))
    }
    return EQTABLE;
}

const Frequencies = () => {
    return (
        <div>
            <Table size="small">
                <caption>A table of musical notes and their corresponding frequencies (when A=440). This is useful for instrumentation ranges and EQing.</caption>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Note (A4 = 440)
                        </TableCell>
                        <TableCell>
                            Frequency (Hz)
                        </TableCell>
                        <TableCell>
                            Range
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allFrequencies()}
                </TableBody>
            </Table>
            <Center>
                <HStack>
                    <Link href="https://pages.mtu.edu/~suits/notefreqs.html" isExternal>Frequencies of Musical Notes</Link>
                </HStack>
            </Center>
        </div>
    )
}

export default Frequencies;