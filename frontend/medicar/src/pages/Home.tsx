import SignIn from "./SignIn";
import Button from '@mui/material/Button';
import AuthService from "../services/AuthService";
import { Box, Card, CardActions, CardContent, Container, CssBaseline, Typography } from "@mui/material";

const Home = () => {
    const handleLogout = () => {
        AuthService.logout();
      };
    
      const currentUser = AuthService.getCurrentUser();

      if (!currentUser) {
           return <SignIn />
      }

return (
  <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={{ mt: "18px" }}>
          <img src='logo90.png' alt='logo'></img>
        </Box>
      <Card sx={{ minWidth: 275}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          benevolent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Container>
);

}

export default Home;