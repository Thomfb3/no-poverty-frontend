import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AppAlert from "../common/AppAlert";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function FormContainer({ formName, formFields, formErrors, reset }) {
    const styles = {
        width: '50%',
        margin: 'auto',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0px 0px 30px rgba(0,0,0,.2)',
        position: "absolute",
        top: "50%",
        right: "50%",
        transform: "translate(50%, -50%)",
    }
    return (
        <Box
            component="form"
            sx={styles}
            noValidate
            autoComplete="off"
        >
            <Typography 
                variant="h2"
                component="h1"
                gutterBottom>
                    {formName}
            </Typography>

            {formFields}
            { 
            formErrors.length
                ? <AppAlert 
                    severity="error" 
                    messages={formErrors} 
                    reset={reset} 
                    resetNeeded={true} />
                : null 
            }
        </Box>
    )
}

export default FormContainer;