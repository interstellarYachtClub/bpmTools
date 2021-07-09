import React from 'react';
import { Tr, Td, Tbody } from "@chakra-ui/react";

const CleanTimeTable = (props) => {
    return(
        <Tbody>
        <Tr>
            <Td>
                {props.a[0]}
            </Td>
            <Td>
                {props.b[0]}
            </Td>
            <Td>
                {props.c[0]}
            </Td>
            <Td>
                {props.d[0]}
            </Td>
        </Tr>
        <Tr>
            <Td>
                {props.a[1]}
            </Td>
            <Td>
                {props.b[1]}
            </Td>
            <Td>
                {props.c[1]}
            </Td>
            <Td>
                {props.d[1]}
            </Td>
        </Tr>
        <Tr>
            <Td>
                {props.a[2]}
            </Td>
            <Td>
                {props.b[2]}
            </Td>
            <Td>
                {props.c[2]}
            </Td>
            <Td>
                {props.d[2]}
            </Td>
        </Tr>
        <Tr>
            <Td>
                {props.a[3]}
            </Td>
            <Td>
                {props.b[3]}
            </Td>
            <Td>
                {props.c[3]}
            </Td>
            <Td>
                {props.d[3]}
            </Td>
        </Tr>
        <Tr>
            <Td>
                {props.a[4]}
            </Td>
            <Td>
                {props.b[4]}
            </Td>
            <Td>
                {props.c[4]}
            </Td>
            <Td>
                {props.d[4]}
            </Td>
        </Tr>
        <Tr>
            <Td>
                {props.a[5]}
            </Td>
            <Td>
                {props.b[5]}
            </Td>
            <Td>
                {props.c[5]}
            </Td>
            <Td>
                {props.d[5]}
            </Td>
        </Tr>
        <Tr>
            <Td>
                {props.a[6]}
            </Td>
            <Td>
                {props.b[6]}
            </Td>
            <Td>
                {props.c[6]}
            </Td>
            <Td>
                {props.d[6]}
            </Td>
        </Tr>
        <Tr>
            <Td>
                {props.a[7]}
            </Td>
            <Td>
                {props.b[7]}
            </Td>
            <Td>
                {props.c[7]}
            </Td>
            <Td>
                {props.d[7]}
            </Td>
        </Tr>
        </Tbody>
        

    )
}
export default CleanTimeTable;