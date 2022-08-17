import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import TextInputField from "../forms/TextInputField";
import SelectInputField from "../forms/SelectInputField";
import PasswordInputField from "../forms/PasswordInputField";
import SubmitButton from "../forms/SubmitButton";
import FormContainer from "../forms/FormContainer";
import LoginIcon from '@mui/icons-material/Login';

function SignupForm({ signup }) {
    const navigate = useNavigate();
    const locations = [{ name: "usa_new_jersey" }, { name: "usa_new_york" }]

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        location: "",
        showPassword: false,
    });

    const [loading, setLoading] = useState(false);
    const [formErrors, setFormErrors] = useState([]);
    console.log(formData);
    console.debug(
        "SignupForm",
        "signup=", typeof signup,
        "formData=", formData,
        "formErrors", formErrors,
    );

    async function handleSubmit(evt) {
        evt.preventDefault();
        setLoading(true);
        let result = await signup(formData);
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
            formName="Sign Up"
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
                        variant="outlined"
                        label="Password"
                        value={formData.password}
                        showPassword={formData.showPassword}
                        handleChange={handleChange}
                        handleClickShowPassword={handleClickShowPassword}
                    />
                    <TextInputField
                        name="firstName"
                        label="First Name"
                        width="50%"
                        type="text"
                        variant="outlined"
                        value={formData.username}
                        handleChange={handleChange}
                    />
                    <TextInputField
                        name="lastName"
                        label="Last Name"
                        width="50%"
                        type="text"
                        variant="outlined"
                        value={formData.username}
                        handleChange={handleChange}
                    />
                    <TextInputField
                        name="email"
                        label="Email"
                        width="100%"
                        type="email"
                        variant="outlined"
                        value={formData.username}
                        handleChange={handleChange}
                    />
                    <SelectInputField
                        name="location"
                        label="Location"
                        items={locations}
                        value={formData.location}
                        handleChange={handleChange}
                    />
                    <SubmitButton
                        size="large"
                        color="primary"
                        text="Sign Up"
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

export default SignupForm;