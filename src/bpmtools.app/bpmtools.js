import React, {Component} from 'react';
import Scale from './bpmtools.components/scale';
import Time from './bpmtools.components/time';
import { Box, VStack } from "@chakra-ui/react"

class BPMTools extends Component {
    render(){
        return(
            <Box d="flex">
                <VStack spacing={5}>
                <Scale />
                <Time />
                </VStack>
            </Box>
        )
    }
}
export default BPMTools;