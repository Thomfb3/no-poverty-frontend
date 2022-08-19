import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SelectInputField({
    name,
    label,
    value,
    items,
    handleChange,
    styles
}) {
    const sx = { marginBottom: '30px', width: "100%", ...styles }

    return (
        <FormControl sx={sx}>
            <InputLabel id={name}>{label}</InputLabel>
            <Select
                labelId={`select-${label}-label`}
                name={name}
                value={value}
                label={label}
                onChange={handleChange}
            >
                {items.map((item) => {
                   return <MenuItem key={item.name} value={item.name}>{item.name}</MenuItem>
                })}
            </Select>
        </FormControl>
    )
}

export default SelectInputField;