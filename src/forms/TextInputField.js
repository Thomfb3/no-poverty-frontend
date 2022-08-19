import React from "react";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

function TextInputField({ 
    name,
    label,
    type,
    value,
    handleChange,
    variant,
    styles
}) {
    const sx = { marginBottom: '30px', width: "100%", ...styles }

    return (
        <FormControl sx={sx} variant={variant}>
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <OutlinedInput
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={handleChange}
                label={label}
            />
        </FormControl>
    )
}

export default TextInputField;