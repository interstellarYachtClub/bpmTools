import React from 'react';
import {
    Tr,
    Td
  } from "@chakra-ui/react"

const TimeTable = props => {
    return(
            <Tr>
                {this.props.tableArray.map((idx) => (
                    <Td>{idx}</Td>
                ))}
            </Tr>
    )
}

export default TimeTable;


