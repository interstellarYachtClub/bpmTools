import React from 'react';
import {
    Input,
    FormControl,
    FormHelperText,
    SimpleGrid
  } from "@chakra-ui/react";

const Bpm = (props) => {
    const changeBpm = event => {
        event.preventDefault();

        const newBpm = {
            text: 'BPM has changed!',
            value: event.target.value
        };

        //props.onBpmChange(newBpm.value);
    }
    return(
        <FormControl id="bpmInput">
            <SimpleGrid columns={2} spacing={2}>
                <Input size="sm" variant="filled" type="number" defaultValue={128} min={1} max={999} onChange={changeBpm}/>
                    <FormHelperText>Beats per minute</FormHelperText>
                    </SimpleGrid>
            </FormControl>
        )

}

export default Bpm;