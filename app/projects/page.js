'use client'

import NavBar from '../components/NavBar';
import { Avatar, CssBaseline, Box, Grid2, styled, Card, CardContent, Typography, CardMedia, Container } from "@mui/material";

const StyledCard = styled(Card)(() => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100%',
    '&:hover': {
        backgroundColor: 'transparent',
        cursor: 'pointer',
    },
    '&:focus-visible': {
        outline: '3px solid',
        outlineColor: 'hsla(210, 98%, 48%, 0.5)',
        outlineOffset: '2px',
    },
}));

const StyledCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: 16,
    flexGrow: 1,
    '&:last-child': {
        paddingBottom: 16,
    },
});

const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
});

const projectData = [
    /*{
        img: "",
        title: "",
        type: "",
        blurb: "",
        dates: "",
        links: [],
        skills: []
    },*/
    {
        img: "../portfolio.png",
        title: "Personal Website",
        type: "Personal Project",
        blurb: "Personal website designed to showcase projects, experiences, and personality. Serves as a digital portfolio, allowing me to document my journey as a software engineer and see how far I've come.",
        dates: "July 2024 - Present",
        links: [
            {"avatar": "../../link.png", "name": "link", "link": "/"}, //FIX CHANGE THE LINK WHEN UR ACTUALLY DOING THE THING
            {"avatar": "../../github.png", "name": "github", "link": "https://github.com/leeaj23/portfolio"}
        ],
        skills: ["Next.js", "Material UI", "HTML/CSS", "JavaScript", "Tailwind CSS"]
    },
    {
        img: "../portfolio.png",
        title: "Personal Website",
        type: "Personal Project",
        blurb: "Personal website designed to showcase projects, experiences, and personality. Serves as a digital portfolio, allowing me to document my journey as a software engineer and see how far I've come.",
        dates: "July 2024 - Present",
        links: [
            {"avatar": "../../link.png", "name": "link", "link": "/"}, //FIX CHANGE THE LINK WHEN UR ACTUALLY DOING THE THING
            {"avatar": "../../github.png", "name": "github", "link": "https://github.com/leeaj23/portfolio"}
        ],
        skills: ["Next.js", "Material UI", "HTML/CSS", "JavaScript", "Tailwind CSS"]
    },
];

function Links ({links}) {
    return (
        <Box
            sx={{ display: 'flex', flexDirection: 'row', gap: 2, my: 1, ml: 2, alignItems: 'center' }}
        >
            {links.map((link, index) => (
                <Avatar
                    key={index}
                    alt={link.name}
                    src={link.avatar}
                    sx={{ width: 40, height: 40 }}
                    component='a'
                    href={link.link}
                />
            ))}
        </Box>
    )
}

function Skills ({skills}) {
    return (
        <Box
            sx={{ display: 'flex', flexDirection: 'row', gap: 1, my: 1, ml:2, alignItems: 'center' }}
        >
            {skills.map((skill, index) => (
                <Typography key={index} sx={{backgroundColor: 'lightgray', borderRadius: 5, padding: 1}} variant='body2'>{skill}</Typography>
            ))}
        </Box>
    )
}

export default function Home () {
    return (
        <CssBaseline enableColorScheme>
            <NavBar></NavBar>
            <Container maxWidth="lg" component="main" sx={{ display: 'flex', flexDirection: 'column', my: 10, gap: 4}}>
                <Grid2 container spacing={8} columns={12} sx={{ my: 4 }}>
                    {projectData.map((project, index) => (
                        <Grid2 key={index} size={{ xs: 12, sm: 6 }}>
                            <StyledCard variant='outlined' tabIndex={index - 1}>
                                <CardMedia
                                    component='img'
                                    alt={project.title}
                                    image={project.img}
                                    sx={{maxHeight: 200}}/>
                                <StyledCardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {project.title}
                                    </Typography>
                                    <StyledTypography variant='body2' gutterBottom>
                                        {project.blurb}
                                    </StyledTypography>
                                </StyledCardContent>
                                <Skills skills={project.skills}></Skills>
                                <Links links={project.links}></Links>
                            </StyledCard>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </CssBaseline>
    );
}