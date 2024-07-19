import SignIn from "./SignIn";
import Button from '@mui/material/Button';
import AuthService from "../services/AuthService";
import { Box, Card, CardActions, CardContent, Container, CssBaseline, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Add, Close } from "@mui/icons-material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: "#A8A8A8",
    fontWeight: 700,
    fontSize: "12px",
    lineHeight: "14.06px"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "13px",
    lineHeight: "15.23px",
    color: "#444444"
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: string,
  fat: string,
  carbs: string
) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData('Cardiologia', 'Dr. Caio Carlos Ferreira', '01/01/2020', '13:00'),
  createData('Cardiologia', 'Dr. Caio Carlos Ferreira', '01/01/2020', '13:00'),
  createData('Cardiologia', 'Dr. Caio Carlos Ferreira', '01/01/2020', '13:00'),
  createData('Cardiologia', 'Dr. Caio Carlos Ferreira', '01/01/2020', '13:00'),
  createData('Cardiologia', 'Dr. Caio Carlos Ferreira', '01/01/2020', '13:00')
];

const Home = () => {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user)
      setCurrentUser("Intmed");

  }, []);

  const handleClickLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    AuthService.logout();
  }

  const handleClickCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  }

  const userLogged = AuthService.getCurrentUser();

  if (!userLogged) {
    return <SignIn />
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          justifyContent: 'center',
          display: 'table',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >

        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          mt="18px"
        >

          <Grid item xs={6} md={8}>
            <img src='logo181.png' alt='logo' height={25}></img>
          </Grid>
          <Grid item xs={6} md={2}>
            <Button
              variant="text" disabled>{currentUser}</Button>
          </Grid>
          <Grid item xs={6} md={1}>
            <Button variant="text" onClick={handleClickLogout}>Desconectar</Button>
          </Grid>
        </Grid>
        <Card sx={{ minWidth: 275, mt: 2, borderRadius: "4px"}}>
          <CardContent>
            <Box sx={{ alignItems: "flex-end", display: "flex" }}>
              <Typography sx={{ width: "150px", fontSize: "18px", lineHeight: "21.09px", fontWeight: 700 }} color="primary.200">
                Consulta Clínica
              </Typography>
              <Button variant="contained" startIcon={<Add />}
                sx={{
                  ml: 48.1, width: "138px", height: "24px",
                  fontSize: "13px", fontWeight: 400, lineHeight: "15.23px",
                  pt: 0, pb: 0, pr: 0, pl: 0, borderRadius: "4px"
                }}>
                Nova Consulta
              </Button>
            </Box>
            <TableContainer component={Paper} sx={{mt: 2}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ESPECIALIDADE</StyledTableCell>
            <StyledTableCell>PROFISSIONAL</StyledTableCell>
            <StyledTableCell>DATA</StyledTableCell>
            <StyledTableCell>HORA</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.calories}</StyledTableCell>
              <StyledTableCell>{row.fat}</StyledTableCell>
              <StyledTableCell>{row.carbs}</StyledTableCell>
              <StyledTableCell><Button variant="text" onClick={handleClickCancel} startIcon={<Close />}>Desmarcar</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
      </Box>
    </Container>
  );

}

export default Home;