import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
} from "@mui/material";
import { createUser } from "../service/api";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const initialValues = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const AddUsers = () => {
  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    await createUser(user);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => handleChange(e)} name="name"></Input>
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => handleChange(e)} name="username"></Input>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => handleChange(e)} name="email"></Input>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => handleChange(e)} name="phone"></Input>
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => handleAdd()}>Add User</Button>
      </FormControl>
    </Container>
  );
};

export default AddUsers;
