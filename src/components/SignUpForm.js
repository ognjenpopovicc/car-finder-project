import Button from "../ui/Button";
import InputBox from "../ui/InputBox";
import Label from "../ui/Label";
import TwoColGrid from "../ui/TwoColGrid";
import Input from "../ui/Input";
import Container from "../ui/Container";

import { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ data }) => {
  const [error, setError] = useState(``);

  const {
    signup,
    login,
    changePassword,
    changeEmail,
    changeUserData,
    currentUser,
  } = useAuth();

  const navigate = useNavigate();

  const adressRef = useRef(``);
  const cityRef = useRef(``);
  const phoneRef = useRef(``);
  const nameRef = useRef(``);
  const emailRef = useRef(``);
  const passwordRef = useRef(``);
  const repeatPasswordRef = useRef(``);
  const oldPasswordRef = useRef(``);

  const sendSignUpData = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== repeatPasswordRef.current.value) {
      return setError("Passwords do not match!");
    }

    try {
      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        adressRef.current.value,
        cityRef.current.value,
        phoneRef.current.value,
        nameRef.current.value
      );
    } catch (err) {
      return setError(err.message);
    }

    navigate(`/`);
  };

  const changeData = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== repeatPasswordRef.current.value) {
      return setError("Passwords do not match!");
    }

    try {
      await login(currentUser.email, oldPasswordRef.current.value);
    } catch (e) {
      return setError(e.message);
    }

    await changePassword(passwordRef.current.value);

    await changeEmail(emailRef.current.value);

    await changeUserData(
      adressRef.current.value,
      cityRef.current.value,
      phoneRef.current.value,
      nameRef.current.value
    );

    navigate(`/`);
  };

  return (
    <Container className="margin-top-large-medium">
      {error && <p>{error}</p>}
      <form onSubmit={data ? changeData : sendSignUpData}>
        <TwoColGrid className="gap-mid">
          <InputBox>
            <Label htmlFor="adress">Adress</Label>
            <Input
              id="adress"
              required={true}
              ref={adressRef}
              defaultValue={data ? data.adress : ""}
            ></Input>
          </InputBox>
          <InputBox>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              required={true}
              ref={cityRef}
              defaultValue={data ? data.city : ""}
            ></Input>
          </InputBox>
          <InputBox>
            <Label htmlFor="phone">Phone number</Label>
            <Input
              id="phone"
              type="tel"
              required={true}
              ref={phoneRef}
              defaultValue={data ? data.phone : ""}
            ></Input>
          </InputBox>
          <InputBox>
            <Label htmlFor="name">Name and Surname</Label>
            <Input
              id="name"
              required={true}
              ref={nameRef}
              defaultValue={data ? data.name : ""}
            ></Input>
          </InputBox>
          <InputBox className="double-field">
            <Label htmlFor="email">E-Mail</Label>
            <Input
              id="email"
              type="email"
              required={true}
              ref={emailRef}
              defaultValue={data ? data.currentUser.email : ""}
            ></Input>
          </InputBox>
          <InputBox>
            <Label htmlFor="password">Password</Label>
            <Input id="password" required={true} ref={passwordRef}></Input>
          </InputBox>
          <InputBox>
            <Label htmlFor="repeat">Repeat password</Label>
            <Input
              id="repeat"
              type="password"
              ref={repeatPasswordRef}
              required={true}
            ></Input>
          </InputBox>
          {data && (
            <InputBox>
              <Label htmlFor="old">Old password</Label>
              <Input id="old" required={true} ref={oldPasswordRef}></Input>
            </InputBox>
          )}
          <InputBox>
            <Button type="submit">Register</Button>
          </InputBox>
        </TwoColGrid>
      </form>
    </Container>
  );
};

export default SignUpForm;
