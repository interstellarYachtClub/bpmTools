import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

const CleanTimeTable = (props) => {
    return(
        <TableBody>
        <TableRow>
            <TableCell>
                {props.a[0]}
            </TableCell>
            <TableCell>
                {props.b[0]}
            </TableCell>
            <TableCell>
                {props.c[0]}
            </TableCell>
            <TableCell>
                {props.d[0]}
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell>
                {props.a[1]}
            </TableCell>
            <TableCell>
                {props.b[1]}
            </TableCell>
            <TableCell>
                {props.c[1]}
            </TableCell>
            <TableCell>
                {props.d[1]}
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell>
                {props.a[2]}
            </TableCell>
            <TableCell>
                {props.b[2]}
            </TableCell>
            <TableCell>
                {props.c[2]}
            </TableCell>
            <TableCell>
                {props.d[2]}
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell>
                {props.a[3]}
            </TableCell>
            <TableCell>
                {props.b[3]}
            </TableCell>
            <TableCell>
                {props.c[3]}
            </TableCell>
            <TableCell>
                {props.d[3]}
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell>
                {props.a[4]}
            </TableCell>
            <TableCell>
                {props.b[4]}
            </TableCell>
            <TableCell>
                {props.c[4]}
            </TableCell>
            <TableCell>
                {props.d[4]}
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell>
                {props.a[5]}
            </TableCell>
            <TableCell>
                {props.b[5]}
            </TableCell>
            <TableCell>
                {props.c[5]}
            </TableCell>
            <TableCell>
                {props.d[5]}
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell>
                {props.a[6]}
            </TableCell>
            <TableCell>
                {props.b[6]}
            </TableCell>
            <TableCell>
                {props.c[6]}
            </TableCell>
            <TableCell>
                {props.d[6]}
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell>
                {props.a[7]}
            </TableCell>
            <TableCell>
                {props.b[7]}
            </TableCell>
            <TableCell>
                {props.c[7]}
            </TableCell>
            <TableCell>
                {props.d[7]}
            </TableCell>
        </TableRow>
        </TableBody>
        

    )
}
export default CleanTimeTable;