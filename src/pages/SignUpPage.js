import React, { useState } from "react";
import styled from "styled-components";
import { Label } from "components/label";
import { Input } from "components/input";
import { useForm } from "react-hook-form";
import { IconEyeClose, IconEyeOpen } from "components/icon";
import { Field } from "components/field";

const SignUpPageStyles = styled.div`
    min-height: 100vh;
    padding: 40px;
    .logo {
        margin: 0 auto 20px;
    }
    .heading{
        text-align: center;
        color: ${(props) => props.theme.primary};
        font-weight: bold
        font-size: 40px;
        margin-bottom: 60px;
    }
    
    .form {
        max-width: 600px;
        margin: 0 auto;
    }
`;

const SignUpPage = () => {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
        watch,
    } = useForm({});
    const handleSignUp = (values) => {
        console.log(values);
    };
    const [togglePassword, setTogglePassword] = useState(false);
    return (
        <SignUpPageStyles>
            <div className="container">
                <img
                    srcSet="/logo.png 2x"
                    alt="monkey-blogging"
                    className="logo"
                />
                <h1 className="heading">Monkey Blogging</h1>
                <form
                    className="form"
                    onSubmit={handleSubmit(handleSignUp)}
                    autoComplete="off"
                >
                    <Field>
                        <Label htmlFor="fullname">Full Name</Label>
                        <Input
                            type="text"
                            name="fullname"
                            placeholder="Enter your full name"
                            control={control}
                            hasIcon
                        />
                    </Field>
                    <Field>
                        <Label htmlFor="email">Email address</Label>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            control={control}
                            hasIcon
                        />
                    </Field>
                    <Field>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            type={togglePassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter your password"
                            control={control}
                            hasIcon
                        >
                            {!togglePassword ? (
                                <IconEyeClose
                                    onClick={() => setTogglePassword(true)}
                                ></IconEyeClose>
                            ) : (
                                <IconEyeOpen
                                    onClick={() => setTogglePassword(false)}
                                ></IconEyeOpen>
                            )}
                        </Input>
                    </Field>
                </form>
            </div>
        </SignUpPageStyles>
    );
};

export default SignUpPage;
