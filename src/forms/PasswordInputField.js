import React from "react";
import capitalize from '../helpers/capitalize';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';


function PasswordInputField({
    name, 
    value, 
    handleChange, 
    variant, 
    handleClickShowPassword, 
    showPassword
}) {
    const styles = { width: '100%', marginBottom: '30px'}
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <FormControl sx={styles} variant={variant}>
        <InputLabel htmlFor={name}>Password</InputLabel>
        <OutlinedInput
            id={name}
            name={name}
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={handleChange}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label={`toggle ${name} visibility`}
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
            }
            label={capitalize(name)}
        />
    </FormControl>
    )
}

export default PasswordInputField;