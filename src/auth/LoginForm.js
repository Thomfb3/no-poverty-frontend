import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import TextInputField from "../forms/TextInputField";
import PasswordInputField from "../forms/PasswordInputField";
import SubmitButton from "../forms/SubmitButton";
import FormContainer from "../forms/FormContainer";
import LoginIcon from '@mui/icons-material/Login';

function LoginForm({ login }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        loginUsername: "",
        loginPassword: "",
        loginShowPassword: false,
    });

    const [loading, setLoading] = useState(false);

    const [formErrors, setFormErrors] = useState([]);
    console.debug(
        "LoginForm",
        "login=", typeof login,
        "formData=", formData,
        "formErrors", formErrors,
    );

    async function handleSubmit(evt) {
        evt.preventDefault();
        setLoading(true);
        let result = await login(formData)
        if (result.success) {
            navigate('/');
        } else {
            setFormErrors(result.errors);
            setLoading(false);
        };
    };

    function handleChange(evt) {
        const { name, value } = evt.target;
        console.log(evt.target)
        setFormData(data => ({ ...data, [name]: value }));
    };

    const handleClickLoginShowPassword = () => {
        setFormData({
            ...formData,
            loginShowPassword: !formData.loginShowPassword,
        });
    };

    function reset() {
        setFormErrors([]);
    };

    return (

        <FormContainer
            formName="Login"
            formErrors={formErrors}
            reset={reset}
            formFields={
                <>
                    <TextInputField
                        name="loginUsername"
                        label="Username"
                        type="text"
                        variant="outlined"
                        value={formData.loginUsername}
                        handleChange={handleChange}
                    />
                    <PasswordInputField
                        name="loginPassword"
                        label="Password"
                        variant="outlined"
                        value={formData.loginPassword}
                        showPassword={formData.loginShowPassword}
                        handleChange={handleChange}
                        handleClickShowPassword={handleClickLoginShowPassword}
                    />
                    <SubmitButton
                        size="large"
                        color="primary"
                        text="Login"
                        handleSubmit={handleSubmit}
                        variant="contained"
                        loading={loading}
                        loadingPosition="end"
                        startIcon={null}
                        endIcon={<LoginIcon />}
                    />
                </>
            }
        />
    )
}

export default LoginForm;