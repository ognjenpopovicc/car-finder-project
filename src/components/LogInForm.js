import Center from "../ui/Center";
import Container from "../ui/Container";
import InputBox from "../ui/InputBox";
import Label from "../ui/Label";
import Input from "../ui/Input";
import Button from "../ui/Button";
import ButtonMini from "../ui/ButtonMini";

import { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const LogInForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(``);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch (e) {
      setError(e.message);
    }

    navigate(`/`);
  };

  const redirectSignUp = () => {
    navigate("/signup");
  };

  return (
    <Container className="margin-top-large-medium">
      {error && <p>{error}</p>}
      <form onSubmit={loginUser} className="login-form">
        <InputBox>
          <Label htmlFor="email">E-Mail</Label>
          <Input id="email" ref={emailRef}></Input>
        </InputBox>
        <InputBox className="margin-top-small-medium">
          <Label htmlFor="password">Password</Label>
          <Input id="password" ref={passwordRef}></Input>
        </InputBox>
        <Center className="margin-top-small-large">
          <ButtonMini onClick={redirectSignUp}>Create Account</ButtonMini>
        </Center>

        <Center>
          <Button type="submit" className="margin-top-small-small">
            Log In
          </Button>
        </Center>
      </form>
    </Container>
  );
};

export default LogInForm;
