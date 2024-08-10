import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById, updateUser } from "../service/api";

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

const EditUser = () => {
  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let response = await getUserById(id);
    setUser(response.data);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    await updateUser(user, id);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => handleChange(e)} name="name" value={user.name}></Input>
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => handleChange(e)} name="username" value={user.username}></Input>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => handleChange(e)} name="email" value={user.email}></Input>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => handleChange(e)} name="phone" value={user.phone}></Input>
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => handleAdd()}>
          Edit User
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
