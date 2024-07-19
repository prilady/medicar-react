import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AuthService from '../services/AuthService';
import { useState } from 'react';
import { Alert, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function Register() {

  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

  const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setEmail(e.target.value);

    if(!validateEmail(e.target.value)){
      setErrorMessage("Email inválido");
    }else{
      setErrorMessage("");
    }
  }

  const handleClickCancel = () => {

    setEmail("");
    setErrorMessage("");
    setPassword("");
    setPasswordConfirmation("");
    setUserName("");
    setMessage("");
    setSuccessful(false);
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickShowPasswordConfirmation = () => setShowPasswordConfirmation((show) => !show);

  const handleChangePasswordConfirmation = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setPasswordConfirmation(e.target.value)
    
    if (password !== e.target.value) {
      setErrorMessage("Senhas não coincidem");
    }
    else {
      setErrorMessage("");
    }
  }
  
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseDownPasswordConfirmation = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    AuthService.register(userName, email, password).then(
      (response => {
        setMessage("Cadastrado")
        setSuccessful(true);
        console.log(response);
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
        setSuccessful(false);
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
          <img src='logo181.png' alt='logo'></img>
        </Box>
        <Box sx={{ color: '#444444', fontSize: "18px", lineHeight: "21.09px", fontWeight:700 }}>
          <p>Crie sua conta</p>
        </Box>
        <Box component="form" onSubmit={handleSubmit}>
            <Box sx={{ mt: 1 }}>
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
              </Box>
            <Box sx={{ mt: 2.25 }}>
              <TextField
                required
                fullWidth
                id="email"
                size="small"
                label="Email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={handleChangeEmail}
              />
            </Box>
            <Box sx={{ mt: 2.25 }}>
              <TextField
                required
                fullWidth
                size="small"
                name="password"
                label="Senha"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="new-password"
                value={password}
                InputProps={{
                  endAdornment: <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      sx={{ color: 'primary.100' }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>,
                }}
                onChange={e => setPassword(e.target.value)}
              />
              </Box>
            <Box sx={{ mt: 2.25 }}>
              <TextField
                required
                fullWidth
                size="small"
                name="passwordConfirmation"
                label="Confirmar Senha"
                type={showPasswordConfirmation ? 'text' : 'password'}
                id="passwordConfirmation"
                value={passwordConfirmation}
                InputProps={{
                  endAdornment: <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPasswordConfirmation}
                      onMouseDown={handleMouseDownPasswordConfirmation}
                      edge="end"
                      sx={{ color: 'primary.100' }}
                    >
                      {showPasswordConfirmation ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>,
                }}
                onChange={handleChangePasswordConfirmation}
              />
              </Box>
          <Grid container>
            <Grid item sx={{ mt: 1, mr: 4.25 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                onClick={handleClickCancel}
                sx={{ mt: 3, mb: 2 }}
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