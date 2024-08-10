import {
    Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { deleteUserById, getAllUsers } from "../service/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const Thead = styled(TableRow)`
  background: #000;

  & > th {
    color: #fff;
    font-size: 20px;
  }
`;
const TBody = styled(TableRow)`
  & > th {
    font-size: 20px;
  }
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let respone = await getAllUsers();
    setUsers(respone.data);
  };

  const handleDelete = async (id) => {
    await deleteUserById(id);
    getUserDetails();
  }

  return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TBody>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
                <Button variant="contained" color="secondary" style={{marginRight: 10}} component={Link} to={`/edit/${user.id}`} >Edit</Button>
                <Button variant="contained" onClick={() => handleDelete(user.id)}>Delete</Button>
            </TableCell>
          </TBody>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllUsers;
