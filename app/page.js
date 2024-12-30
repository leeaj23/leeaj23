import styles from "./output.css";
import { Avatar, Box, Card, CardMedia, Container, CssBaseline, Typography } from "@mui/material";
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <CssBaseline enableColorScheme>
      <NavBar></NavBar>
      <Container maxWidth='lg' component='main' sx={{display: 'flex', flexDirection: 'column', my: 16, gap: 2}}>
        <Box sx={{display: 'flex', flexDirection: 'row', gap: 2}}>
          <Typography variant="h3">Hello, I'm Amy Lee</Typography>
          <Avatar alt='hand waving' src='../wave.png' variant="square" sx={{width: 60, height: 60}}/>
        </Box>
        <Typography>Seattle, WA</Typography>
        <Container maxWidth='lg' component='main' sx={{display: 'flex', flexDirection: 'row', my: 2, gap: 4}} disableGutters>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
            <Typography>I am an Computer Science undergrad at the University of Washington, where I've been fortunate enough to be recognized on the Dean's List every quarter (so far!). My academic journey is guided by a fascination towards AI and Data Science and my passion for learning.</Typography>
            <Typography>Collaboration is at the heart of my work. I’ve loved teaming up with peers to tackle complex technical challenges, whether in projects or at hackathons. These experiences taught me how to break down big ideas into actionable steps and deliver practical, impactful solutions. Looking ahead, I’m excited to bring my analytical mindset, adaptability, and technical skills into software engineering. Whether it’s creating efficient algorithms, debugging tricky code, or building intuitive user experiences, I’m eager to contribute and learn.</Typography>
            <Typography>TLDR; I’m someone who loves solving problems, sharing ideas, and turning curiosity into action. Feel free to reach out if you’d like to connect—I’d love to chat!</Typography>
          </Box>
          <Avatar alt='Amy Lee' src='../headshot.png' variant='square' sx={{maxWidth: '50%', maxHeight: 'same-as-width', width: 400, height: 400, borderRadius: 5}}/>
        </Container>
      </Container>
    </CssBaseline>
  );
}
