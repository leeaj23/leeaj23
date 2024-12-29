import styles from "./output.css";
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <CssBaseline enableColorScheme>
      <NavBar></NavBar>
      <Container maxWidth='lg' component='main' sx={{display: 'flex', flexDirection: 'column', my: 16, gap: 2,  border: 'solid black 2px'}}>
        <Typography variant="h3">Amy Lee</Typography>
        <Typography>Seattle, WA</Typography>
        <Container maxWidth='lg' component='main' sx={{display: 'flex', flexDirection: 'row', my: 4, gap: 4, border: 'solid black 2px'}}>
          <Typography>Hello! My name is Amy and I am a student studying computer science at the University of Washington.</Typography>
          <Box
            component='img'
            sx={{height: 500, width: 500, maxHeight: { xs: 500, md: 300 }, maxWidth: { xs: 500, md: 300 },}}
            alt='Amy Lee with a Kirby shaped like a car on her head'
            src="./components/headshot.png"/>
        </Container>
      </Container>
    </CssBaseline>
  );
}
