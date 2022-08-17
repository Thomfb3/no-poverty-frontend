import React from "react";
import capitalize from '../helpers/capitalize';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

function TextInputField({ 
    name,
    value,
    handleChange,
    variant
}) {
    const styles = { width: '100%', marginBottom: '30px'}

    return (
        <FormControl sx={styles} variant={variant}>
            <InputLabel htmlFor={name}>{capitalize(`${name}`)}</InputLabel>
            <OutlinedInput
                id={name}
                name={name}
                type="text"
                value={value}
                onChange={handleChange}
                label={capitalize(name)}
            />
        </FormControl>
    )
}

export default TextInputField;