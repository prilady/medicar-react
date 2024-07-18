import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AuthService from '../services/AuthService';
import { useEffect, useState } from 'react';
import { Alert } from '@mui/material';

export default function Register() {

  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const [successful, setsuccessful] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  useEffect(() => {
    
  });

//   function success(position: { coords: { latitude: number; longitude: number; }; }) {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
    //setLocation({ ...location, lat: latitude, lng: longitude })
  //}

//   function error() {
//     console.log("Unable to retrieve your location");
//   }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //if (location.lat !== 0 && location.lng !== 0) {
    AuthService.register(userName, email, password).then(
        (response => {
          setMessage("Cadastrado")
          setsuccessful(true);
        }),
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          console.log(resMessage);
          setErrorMessage(error.response.data);
          setsuccessful(false);
        }
      );
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 5,
          justifyContent: 'center',
          display: 'flex',
          height: '100vh',
          flexDirection: 'column',
          alignItems: 'left',
          color: 'primary.100'
        }}
      >
           <Box sx={{ mt: 1 }}>
          <img src='logo192.png' alt='logo'></img>
        </Box>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                size="small"
                fullWidth
                id="name"
                label="Nome"
                autoFocus
                value={userName}
                onChange={e => setUserName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                size="small"
                label="Email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                size="small"
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                size="small"
                name="passwordConfirmation"
                label="Confirmar Senha"
                type="passwordConfirmation"
                id="passwordConfirmation"
                value={passwordConfirmation}
                onChange={e => setPasswordConfirmation(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item sx={{ mt: 1, mr: 4.25 }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="secondary"
          >
            Cancelar
          </Button>
          </Grid>
          <Grid item sx={{ mt: 1 }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Confirmar
          </Button>
          </Grid>
          <Grid item sx={{ mt: 1 }}>
          {!successful && errorMessage && (
            <Alert severity='error'>{errorMessage}</Alert>
          )}
          {successful && (
            <Alert severity='success'>{message}</Alert>
          )}
          </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}