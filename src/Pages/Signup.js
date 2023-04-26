import React, { useContext } from "react";
import { Button, Form, Input, Typography } from "antd";
import styled from "styled-components";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import GoogleIcon from "../icons/GoogleIcon";
import { auth } from "../Firebase/config";
import {
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    getAdditionalUserInfo
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const googleProvider = new GoogleAuthProvider();

const WrapperStyled = styled.div`
  margin: 0;
  padding: 0;
  min-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1C1C1C;
`;

const InputStyled = styled(Input)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 40px;
`;

const InputPasswordStyled = styled(Input.Password)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 40px;
`;

export default function Signup() {
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleGoogleLogin = async (provider) => {
        const result = await signInWithPopup(
            auth,
            provider
        );
        try {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            const detail = getAdditionalUserInfo(result);
            console.log(token);
            const { email, photoURL, uid } = user;
            setUser({
                email: email,
                photoURL: photoURL,
                uid: uid
            })
            if (detail.isNewUser) {
                navigate('/user-info');
            }
            else {

            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleEmailSignup = async (email, password) => {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        try {
            const user = userCredential.user;
            const { email, photoURL, uid } = user;
            console.log({
                email: email,
                photoURL: photoURL,
                uid: uid
            });
            setUser({
                email: email,
                photoURL: photoURL,
                uid: uid
            })
            navigate('/user-info');
        } catch (error) {
            console.log(error);
        }
    };
    const onFinish = (values) => {
        const { email, password } = values;
        handleEmailSignup(email, password);
    };
    return (
        <WrapperStyled>
            <Form
                name="normal-login"
                style={{
                    width: "500px",
                    height: "90vh",
                    backgroundColor: "white",
                    padding: "1.5rem 2.5rem 6rem 2.5rem",
                    borderRadius: "24px",
                }}
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Typography.Text>Step 1 of 2</Typography.Text>
                <Typography.Title style={{ marginTop: 0 }}>
                    Create an account
                </Typography.Title>
                <div>
                    <Button
                        type="default"
                        style={{
                            width: "100%",
                            borderRadius: "50px",
                            padding: "24px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "1rem",
                        }}
                        onClick={() => {
                            handleGoogleLogin(googleProvider);
                        }}
                    >
                        <GoogleIcon />
                        <Typography.Text
                            strong
                            style={{
                                fontSize: "20px",
                                marginLeft: "1rem",
                            }}
                        >
                            Continue with Google
                        </Typography.Text>
                    </Button>
                    <div
                        style={{
                            width: "100%",
                            height: "20px",
                            borderBottom: "1px solid black",
                            textAlign: "center",
                            clear: "right",
                            paddingTop: "1rem",
                            marginBottom: "2rem",
                            padding: 0,
                        }}
                    >
                    </div>
                    <Form.Item
                        label={<Typography.Text strong>Email:</Typography.Text>}
                        name="email"
                        rules={[
                            { required: true, message: "Please enter your email! " },
                        ]}
                    >
                        <InputStyled
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item
                        label={<Typography.Text strong>Password:</Typography.Text>}
                        name="password"
                        rules={[
                            { required: true, message: "Please input your password!" },
                        ]}
                    >
                        <InputPasswordStyled
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item
                        style={{
                            position: "relative",
                        }}
                    >
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{
                                borderRadius: "50px",
                                padding: "24px",
                                display: "flex",
                                alignItems: "center",
                                float: "right",
                                backgroundColor: "#10393B",
                            }}
                        >
                            <Typography.Text
                                style={{
                                    color: "white",
                                    fontSize: "20px",
                                }}
                            >
                                Continue
                            </Typography.Text>
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Typography.Text>Already have an account? </Typography.Text>
                        <a href="/signin" style={{ textDecoration: "underline" }}>
                            Sign in
                        </a>
                    </Form.Item>
                </div>
            </Form>
        </WrapperStyled>
    );
}
