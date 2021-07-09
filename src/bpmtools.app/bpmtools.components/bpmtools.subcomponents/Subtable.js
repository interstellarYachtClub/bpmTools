import React from "react";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import FREQUENCY from "../../bpmtools.files/frequency";
import { cycleTime } from '../../bpmtools.functions/fCycleTime';

const Subtable = () => {
    return (
        <TableBody>
            {FREQUENCY.map((freq) => (
                <TableRow>
                    <TableCell>
                        {freq.name+'1'}
                    </TableCell>
                    <TableCell>
                        {freq.value[1].toFixed(1)+' Hz'}
                    </TableCell>
                    <TableCell>
                        {cycleTime(freq.value[1])+' ms'}
                    </TableCell>
                </TableRow>
    ))}
        </TableBody>
    )
}

export default Subtable;