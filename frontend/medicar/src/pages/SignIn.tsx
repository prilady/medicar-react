import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Alert, IconButton, InputAdornment } from '@mui/material';
import AuthService from '../services/AuthService';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { CustomizedCheckboxIcon, CustomizedCheckedIcon } from '../components/CustomizedCheckbox';

export default function SignIn() {
  const [errorMessage, setErrorMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const pass = localStorage.getItem("password") !== null;
  const [rememberPassword, setRememberPassword] = useState(pass);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickRememberPassword = () => {
    setRememberPassword((rememberPassword) => !rememberPassword);
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userName && password) {

      AuthService.login(userName, password, rememberPassword).then(
        () => {
          window.history.pushState("", "", "/");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          console.log(resMessage);
          setErrorMessage("Acesso não autorizado");
        }
      );

    }
  };


  useEffect(() => {
    let passwordStorage = localStorage.getItem("password")?.toString();
    if (passwordStorage) {
      setPassword(passwordStorage);
      setRememberPassword(true);
    }

  }, []);

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
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField 
            margin="normal"
            required
            fullWidth
            size='small'
            id="userName"
            label="Email ou Login"
            name="userName"
            autoComplete="email"
            autoFocus
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          <TextField 
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            size='small'
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
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
          />
          <FormControlLabel
            control={<Checkbox 
              sx={{
                '&:hover': { bgcolor: 'transparent' }
              }}
              icon={<CustomizedCheckboxIcon/>} checked={rememberPassword} 
            checkedIcon={<CustomizedCheckedIcon/>}
            onClick={handleClickRememberPassword} color="primary" 
            />}
            label="Lembrar minha senha"
          />
          <Grid container>
            <Grid item sx={{ mt: 1, mr: 4.25 }}>
              <Button
                href="/cadastrar"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="secondary"
              >
                <strong>Criar Conta</strong>
              </Button>
            </Grid>
            <Grid item sx={{ mt: 1 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                <strong>Acessar</strong>
              </Button>
            </Grid>
            <Grid item sx={{ mt: 1 }}>
              {errorMessage && (
                <Alert severity='error'>{errorMessage}</Alert>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}