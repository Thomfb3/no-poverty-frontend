import React from "react";
import AppAlert from "../common/AppAlert";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function FormContainer({ formName, formFields, formErrors, reset }) {

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <Typography 
                variant="h4"
                component="h3"
                sx={{
                    marginBottom: "15px",
                    color: "#004bd4"
                }}
                >
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