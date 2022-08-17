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
        username: "",
        password: "",
        showPassword: false,
    });

    const [loading, setLoading] = useState(false);

    const [formErrors, setFormErrors] = useState([]);
    console.log(formData);
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

    const handleClickShowPassword = () => {
        setFormData({
            ...formData,
            showPassword: !formData.showPassword,
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
                        name="username"
                        label="Username"
                        width="100%"
                        type="text"
                        variant="outlined"
                        value={formData.username}
                        handleChange={handleChange}
                    />
                    <PasswordInputField
                        name="password"
                        label="Password"
                        variant="outlined"
                        value={formData.password}
                        showPassword={formData.showPassword}
                        handleChange={handleChange}
                        handleClickShowPassword={handleClickShowPassword}
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