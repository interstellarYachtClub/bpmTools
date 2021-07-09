import React from 'react';
import { Select,} from "@chakra-ui/react"

const DynamicDropdown = (props) => {
    return (
            <Select isFullWidth="false" size="sm" variant="filled" onChange={props.onChange}>
            {props.selectprops.map((sel) => {
                return <option key={sel.name} value={sel.name}>{sel.label}</option>
                })}
            </Select>
    )
}

export default DynamicDropdown;