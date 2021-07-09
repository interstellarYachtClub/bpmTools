import react from "react";
import {
    Switch,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Heading
} from "@chakra-ui/react"

const Toggle = (props) => {
    return (
        <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0">
                <Heading
                    size="md"
                >
                    {props.label}
                </Heading>
            </FormLabel>
            <Switch size="lg" defaultChecked="true" id={props.id} />
        </FormControl>
    )
}

export default Toggle;