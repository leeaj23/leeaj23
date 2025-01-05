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
    scrollbarColor: "#6b6b6b #2b2b2b",
    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
        backgroundColor: "#2b2b2b",
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
        type: "CSE 344 Capstone Project - private github",
        blurb: "Designed and implemented a database system to manage user data and streamline flight scheduling via a command-line interface. Built with Java and SQL, the system is hosted on Microsoft Azure. Integrated encryption, hashing, salting, and identity management to secure sensitive data, ensuring efficient and reliable query processing without compromising performance.",
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
        blurb: "Developed a personal website to highlight projects, experiences, and growth as a software engineer. Acts as a dynamic portfolio to document progress and showcase achievements.",
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
        blurb: "Developed Circles, a dating platform celebrating DubHacks' 10th anniversary theme: \"How Far We've Come, How Far We'll Go.\" Circles connects users through shared childhood memories and experiences, such as schools attended or favorite movies. Leveraging AI, the platform suggests matches based on these unique ties and provides personalized prompts to encourage natural, meaningful interactions. Focused on building connections rooted in familiarity, Circles fosters relationships designed to grow over time.",
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
        blurb: "Led a team of four developers during the HeadstarterAI Fellowship to create an application connecting students with job postings, alumni contacts, and career resources. Designed a landing page, curated a database of mentors, and established outreach with school alumni. Implemented advanced search, sorting, and filtering functionality to ensure seamless access to all resources.",
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
        blurb: "Developed an inventory management system for the HeadstarterAI 2024 Fellowship. The application allows users to track pantry items by adding, adjusting, and viewing quantities. Included search functionality to enable users to quickly locate and review their supplies.",
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
        type: "CSE 332 Project - private github",
        blurb: "Designed a messaging platform for UW students with features like text auto-complete and word suggestions, implemented using custom-built AVL Trees, B-Trees, Heaps, Tries, and Dictionaries. Integrated a data-persistent database hosted on Google Firebase, enabling users to store and retrieve chat logs with bots and other users.",
        dates: "April 2024",
        links: [
            {"avatar": "../../github.png", "name": "github", "link": "https://github.com/leeaj23/uMessage"}
        ],
        skills: ["Java", "Google Firebase"]
    },
    {
        img: "../flashcard.png",
        title: "Flashcard Application",
        type: "CSE 331 Project - private github",
        blurb: "Developed a full-stack application for creating, viewing, practicing, and testing with flashcard decks. Implemented data persistence to maintain functionality across page reloads. Added features for tracking practice scores, reviewing past performance, and analyzing mistakes, ensuring accurate and intuitive performance insights.",
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
        blurb: "Created Caf-Fiend, a caffeine management application designed for precise tracking and monitoring of daily intake. The app offers personalized guidance to help users stay within recommended caffeine limits for a healthier lifestyle. Extended functionality includes logging and reviewing caffeine consumption trends over weeks, months, and years, providing valuable insights into long-term health patterns.",
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
        type: "CSE 143 Project - private github",
        blurb: "Implemented a Huffman Tree using priority queues and binary trees to enable efficient text file compression based on character frequency. Designed methods to encode text files into compressed binary formats and decode them back to their original state using Huffman coding principles.",
        dates: "November 2023",
        links: [
            {"avatar": "../../github.png", "name": "github", "link": "https://github.com/leeaj23/cse143homeworks"}
        ],
        skills: ["Java"]
    },
    {
        img: "../tetris.png",
        title: "Tetris Clone",
        type: "Personal Project - private github",
        blurb: "Developed a Tetris clone in Unity, featuring the classic gameplay along with specialized levels and color schemes after reaching level 13. The game includes custom blocks, sounds, and instructions, providing a personalized and engaging experience for users.",
        dates: "July 2022",
        links: [
            {"avatar": "../../github.png", "name": "github", "link": "https://github.com/leeaj23/tetris"} //FIX CHANGE THE LINK WHEN UR ACTUALLY DOING THE THING
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
                                <Typography gutterBottom variant="h5" component="div" sx={{ml: 2, mt: 2}}>
                                    {project.title}
                                </Typography>
                                <Typography gutterBottom variant="subtitle1" component="div" sx={{ml: 2, mt: -1}}>
                                    {project.type}
                                </Typography>
                                <Box>
                                    <StyledCardContent sx={{mt: -1}}>
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