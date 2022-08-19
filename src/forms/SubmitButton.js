import React from "react";
import FormControl from '@mui/material/FormControl';
import LoadingButton from '@mui/lab/LoadingButton';

function SubmitButton({
    size, 
    color, 
    text, 
    handleSubmit, 
    variant,
    loading, 
    loadingPosition, 
    startIcon, 
    endIcon,
    styles
}) {
    const sx = { marginBottom: '30px', width: "100%", ...styles }

    return (
        <FormControl sx={sx}>
            <LoadingButton
                size={size}
                color={color}
                onClick={handleSubmit}
                loading={loading}
                loadingPosition={loadingPosition}
                startIcon={startIcon}
                endIcon={endIcon}
                variant={variant}
            >
                {text}
            </LoadingButton>
        </FormControl>
    )
}

export default SubmitButton;



