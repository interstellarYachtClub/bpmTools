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
    Table,
    Thead,
    Link,
    Tr,
    Center,
    TableCaption,
    Th
} from "@chakra-ui/react";

const LFO = () => {
    return (
        <Box>
            <Heading
                size="md">
                LFO / hertz calculator
                </Heading>
            <Box
                maxW="lg"
                borderWidth="1px"
                borderRadius="lg"
            >
                <HStack>
                    <BpmInput value={128} />
                </HStack>
                <Table size="sm">
                    <caption>These timings can be useful for experimenting with synthesizers and analog modelled gear.</caption>
                    <Thead>
                        <Tr>
                            <Th>
                                Hz
                        </Th>
                            <Th>
                                Rate
                        </Th>
                        </Tr>
                    </Thead>
                </Table>
                <Center>
                    <HStack>
                        <Link href="https://en.wikipedia.org/wiki/Low-frequency_oscillation" isExternal>LFO</Link>
                        <Text> | </Text>
                        <Link href="https://en.wikipedia.org/wiki/Hertz" isExternal>Hertz</Link>
                    </HStack>
                </Center>
            </Box>
        </Box>
    )
}

export default LFO;