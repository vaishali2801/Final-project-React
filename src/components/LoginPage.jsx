import { useState } from 'react'
//firebase-auth
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
//firebase-config
import { auth } from "../config/firebase";
//react-bootstrap
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [isLogin, setLogin] = useState(true);
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    const [authData, setAuthData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (field, e) => {
        setAuthData((prev) => {
            return {
                ...prev,
                [field]: e.target.value

            }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isLogin) {
                await signInWithEmailAndPassword(
                    auth,
                    authData.email,
                    authData.password
                );
            } else {
                await createUserWithEmailAndPassword(
                    auth,
                    authData.email,
                    authData.password
                );
            }

            setAuthData({ email: "", password: "" });
            navigate("/recipeList");
        } catch (error) {
            alert(error.message);
        }
    };

    console.log("data", authData);

    return (
        <>
            <Container className='d-flex justify-content-center align-items-center' style={{ paddingTop: "150px" }}>
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit} style={{ width: "400px" }}>
                            <Card className='p-4 gap-3 card-layout' >
                                <h5 className='text-center'>{user}</h5>
                                <h1 className="text-center">{isLogin ? "Login" : "Sign up"}</h1>
                                <Form.Group as={Col} md="4" lg="">
                                    <Form.Label>Email :</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        value={authData.email}
                                        onChange={(e) => handleChange("email", e)}
                                        placeholder="Enter Email"
                                        style={{ width: "350px" }}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="4" lg="">
                                    <Form.Label>Password :</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        value={authData.password}
                                        onChange={(e) => handleChange("password", e)}
                                        placeholder="Enter password"
                                        style={{ width: "350px" }}
                                    />
                                </Form.Group>
                                <Button variant="info" type="submit" className='text-light'>
                                    {isLogin ? "Login" : "Sign up"}
                                </Button>
                                <Button onClick={() => setLogin(!isLogin)}>
                                    {isLogin ? "new user ? Sign up" : "already user"}
                                </Button>
                            </Card>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LoginPage