import React from 'react';
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
import Subtable from './bpmtools.subcomponents/Subtable';

const Sub = () => {
    return (
        <div>
            <Table size="small">
                <caption>This table provides the time it takes to complete a single sub bass cycle. It may be beneficial for applying compression or layering in the sub-bass range.</caption>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Note
                        </TableCell>
                        <TableCell>
                            Frequency
                        </TableCell>
                        <TableCell>
                            Time (ms)
                        </TableCell>
                    </TableRow>
                </TableHead>
                <Subtable/>
            </Table>
            <Center>
                <HStack>
                    <Link href="https://en.wikipedia.org/wiki/Sub-bass" isExternal>Sub-bass</Link>
                    <Text> | </Text>
                    <Link href="https://www.izotope.com/en/learn/7-tips-for-mixing-bass.html" isExternal>Mixing Bass (iZotope)</Link>
                </HStack>
            </Center>
        </div>
    )
}

export default Sub;