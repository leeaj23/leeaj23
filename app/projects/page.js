'use client'

import * as React from 'react';
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
    backgroundColor: '#f5f5f5'
}));

const StyledCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: 16,
    flexGrow: 1,
    overflow: 'scroll',
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
        img: "../flightapp.png",
        title: "Flight Tracker Application",
        type: "CSE 344 Capstone Project",
        blurb: "Developed a tailored database system to manage user data and facilitate flight scheduling through a command-line interface. Built using Java and SQL, this database is hosted in Microsoft Azure. To safeguard sensitive data, I implemented robust security protocols including encryption, hashing, salting, and identity management to ensure data confidentiality without compromising the system's performance, allowing for effecient and secure query processing.",
        dates: "December 2024",
        links: [
            {"avatar": "../../github.png", "name": "github", "link": "https://github.com/leeaj23/flightapp"}
        ],
        skills: ["Java", "SQL", "Microsoft Azure"]
    },
    {
        img: "../portfolio.png",
        title: "Personal Website",
        type: "Personal Project",
        blurb: "Personal website designed to showcase projects, experiences, and personality. Serves as a digital portfolio, allowing me to document my journey as a software engineer and see how far I've come.",
        dates: "November 2024 - Present",
        links: [
            {"avatar": "../../link.png", "name": "link", "link": "/"}, //FIX CHANGE THE LINK WHEN UR ACTUALLY DOING THE THING
            {"avatar": "../../github.png", "name": "github", "link": "https://github.com/leeaj23/portfolio"}
        ],
        skills: ["Next.js", "Material UI", "HTML/CSS", "JavaScript", "Tailwind CSS"]
    },
    {
        img: "../circles.jpg",
        title: "Circles",
        type: "DubHacks 2024 Project",
        blurb: "In celebration of the 10th anniversary of DubHacks and its theme, \"How Far We've Come, How Far We'll Go,\" we proudly introduce Circles, a dating platform that connects the past with the future. Circles is designed to spark genuine connections by rekindling shared childhood memories and experiences, whether it's the schools they attended or the movies they loved growing up. Our platform uses AI to suggest matches based on these unique connections, fostering conversations through tailored prompts that lead to more natural and less awkward interactions. By building relationships rooted in shared experiences, we pave the way for meaningful connections that can flourish over time.",
        dates: "October 2024",
        links: [
            {"avatar": "../../link.png", "name": "link", "link": "https://youtu.be/6iMnwmW5kxI"},
            {"avatar": "../../github.png", "name": "github", "link": "https://github.com/leeaj23/dubhacks-circles"}
        ],
        skills: ["Express.js", "Java", "Perplexity", "Cloudflare", "Auth0", "OpenAI"]
    },
    {
        img: "../genone.png",
        title: "GenOne",
        type: "HeadstarterAI 2024 Project",
        blurb: "Oversaw team of 4 additional developers from HeadstarterAI Fellowship to build an application to provide students with links to job postings, alumni contacts, and career resources. Created a landing page and contacted school alumnus and curated a database of willing mentors for university students. Implemented searching, sorting, and filtering methods to ensure easy access for all resources provided.",
        dates: "July 2024 - September 2024",
        links: [
            {"avatar": "../../github.png", "name": "github", "link": "https://github.com/leeaj23/fli-app"}
        ],
        skills: ["Next.js", "HTML/CSS", "JavaScript", "EJS", "MongoDB"]
    },
    {
        img: "../inventory.png",
        title: "Inventory Management System",
        type: "HeadstarterAI 2024 Project",
        blurb: "Created a basic inventory management system for the HeadstarterAI 2024 Fellowship. Users can input the ingredients they have, incrementing and decrementing their values to match the quantity of items they have in their pantries. Users can also search for their wanted items, viewing the quantities of supplies they currently have.",
        dates: "July 2024",
        links: [
            {"avatar": "../../link.png", "name": "link", "link": "/"}, //FIX CHANGE THE LINK WHEN UR ACTUALLY DOING THE THING
            {"avatar": "../../github.png", "name": "github", "link": "https://github.com/leeaj23/inventory_management"}
        ],
        skills: ["Next.js", "Material UI", "HTML/CSS", "JavaScript", "Google Firebase"]
    },
    {
        img: "../umessage.png",
        title: "uMessage",
        type: "CSE 332 Project",
        blurb: "uMessage is a messaging platform that UW students can utilize, featuring standard text auto-complete and word suggestions that are implemented using AVL-Trees, B-Trees, Heaps, Tries, and Dictionaries developed from scratch. Users are able to store and retrieve their chat logs with bots and other users using a data-persistent database, hosted on Google Firebase.",
        dates: "April 2024",
        links: [
            {"avatar": "../../github.png", "name": "github", "link": "https://github.com/leeaj23/uMessage"}
        ],
        skills: ["Java", "Google Firebase"]
    },
    {
        img: "../flashcard.png",
        title: "Flashcard Application",
        type: "CSE 331 Project",
        blurb: "Designed a full-stack application that allows users to create, view, practice, and test with flashcard decks, ensuring data persistence across page reloads. Enabled users to track their practice scores, view all past scores, and analyze their mistakes, ensuring accurate and user-friendly performance tracking.",
        dates: "March 2024",
        links: [
            {"avatar": "../../github.png", "name": "github", "link": "https://github.com/leeaj23/flashcards"}
        ],
        skills: ["Typescript", "HTML/CSS"]
    },
    {
        img: "../caffiend.png",
        title: "Caf-Fiend",
        type: "DubHacks 2023 Project",
        blurb: "Caf-Fiend is your ultimate caffeine companion where you can seamlessly input your caffeine intake to help you manage and monitor your daily caffeine consumption with precision. Caf-Fiend not only provides real-time tracking but also offers personalized guidance, ensuring that you stay well within recommended daily caffeine limits for a healthier, more balanced lifestyle. Beyond daily tracking, Caf-Fiend lets you log your caffeine intake by week, month, and year, granting you invaluable insights into your long-term health and wellness patterns.",
        dates: "October 2023",
        links: [
            {"avatar": "../../link.png", "name": "link", "link": "https://gordondhuang.github.io/Caf-Fiend/index.html"}, 
            {"avatar": "../../github.png", "name": "github", "link": "https://github.com/leeaj23/Caf-Fiend"}
        ],
        skills: ["HTML/CSS", "JavaScript"]
    },
    {
        img: "../huffman.png",
        title: "Huffman Tree",
        type: "CSE 143 Project",
        blurb: "Developed a Huffman Tree using priority queues and binary trees for efficient text file compression based on character frequency. Created methods to encode text files into compressed binary files and decode them back to their original form using Huffman coding.",
        dates: "November 2023",
        links: [
            {"avatar": "../../github.png", "name": "github", "link": "https://github.com/leeaj23/cse143homeworks"}
        ],
        skills: ["Java"]
    },
    {
        img: "../tetris.png",
        title: "Tetris Clone",
        type: "Personal Project",
        blurb: "Created a Tetris clone using Unity. Users can play the standard game of Tetris, containing specialized levels and colors once the user surpasses level 13. Custom blocks, sounds, and instructions are included in the game.",
        dates: "July 2022",
        links: [
            {"avatar": "../../github.png", "name": "github", "link": "https://github.com/leeaj23/portfolio"} //FIX CHANGE THE LINK WHEN UR ACTUALLY DOING THE THING
        ],
        skills: ["Unity", "C#"]
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
                    target="_blank"
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
            <Container maxWidth="lg" component="main" sx={{ display: 'flex', flexDirection: 'column', my: 10, gap: 4, justifyContent: 'center' }}>
                <Typography variant='h2' sx={{color: 'black', textAlign: 'center', mt: 6}}>Projects</Typography>
                <Grid2 container spacing={8} columns={12} sx={{ my: 4 }}>
                    {projectData.map((project, index) => (
                        <Grid2 key={index} size={{ xs: 12, sm: 6, }}>
                            <StyledCard variant='outlined' tabIndex={index - 1}>
                                <CardMedia
                                    component='img'
                                    alt={project.title}
                                    image={project.img}
                                    sx={{maxHeight: 200}}/>
                                <Typography gutterBottom variant="h6" component="div" sx={{ml: 2, my: 2}}>
                                    {project.title}
                                </Typography>
                                <Box>
                                    <StyledCardContent>
                                        <StyledTypography variant='body2' gutterBottom>
                                            {project.blurb}
                                        </StyledTypography>
                                    </StyledCardContent>
                                    <Skills skills={project.skills}></Skills>
                                    <Links links={project.links}></Links>
                                </Box>
                            </StyledCard>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </CssBaseline>
    );
}