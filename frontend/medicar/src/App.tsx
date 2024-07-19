import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Register from './pages/Register';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#49B4BB',
      light: '#E9DB5D',
      dark: '#90D3D7',
      contrastText: '#FFFFFF',
      "100": '#A8A8A8',
      "200": "Black"
    },
    secondary: {
      main: '#FFFFFF',
      light: '#F8F8F8',
      dark: '#D9F1F3',
      contrastText: '#49B4BB',
    },
  },
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: "13px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#A8A8A8",
          fontSize: "13px"
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          border: "1px",
          fontSize: "13px"
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          width:"180px"
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#A8A8A8",
          borderRadius: "4px"
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          fontSize: 18,
          width: 180,
          height: 40,
          borderRadius: 8
        },
        text: {
          fontSize: "13px", 
          width: "79px", 
          height: "13px", 
          lineHeight: "15.23px",
          fontWeight: 400
        }
      },
    },
  },
});


const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<SignIn />}></Route>
        <Route path='/cadastrar' element={<Register />}></Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
