'use client'

import React, { useState, useEffect } from 'react';
import { Box, List, ListItem, ListItemText, Typography, Container, Grid2, Item } from '@mui/material';
import { styled } from '@mui/material/styles';
import NavBar from '../components/NavBar'; // Import your custom navbar

// Constants for layout calculations
const NAVBAR_HEIGHT = 64; // Base MUI AppBar height
const NAVBAR_PADDING_TOP = 24; // Your navbar's paddingTop: 3 (3 * 8px)
const TOTAL_TOP_OFFSET = NAVBAR_HEIGHT + NAVBAR_PADDING_TOP;

// Styled Sidebar
const SidebarContainer = styled(Box)(({ theme }) => ({
    width: 150,
    height: `calc(100vh - ${TOTAL_TOP_OFFSET}px)`,
    position: 'fixed',
    marginLeft: 25,
    top: TOTAL_TOP_OFFSET,
    backgroundColor: theme.palette.background.paper,
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        width: 6,
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: theme.palette.grey[100],
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.grey[400],
        borderRadius: 3,
        '&:hover': {
        backgroundColor: theme.palette.grey[600],
        },
    },
    [theme.breakpoints.down('md')]: {
        display: 'none', // Hide sidebar on mobile to match navbar behavior
    }
}));

// Styled Main Content
const MainContent = styled(Box)(({ theme }) => ({
    marginLeft: 240,
    top: TOTAL_TOP_OFFSET,
    padding: theme.spacing(4),
    width: 'calc(100% - 240px)',
    [theme.breakpoints.down('md')]: {
        marginLeft: 0,
        width: '100%',
    }
}));

const StyledListItem = styled(ListItem)(({ theme, active }) => ({
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
    ...(active && {
        color: theme.palette.primary.main,
        '&::before': {
        content: '""',
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: 4,
        backgroundColor: 'lightblue',
        },
    }),
}));

export default function Home () {
    const [activeSection, setActiveSection] = useState('section1');

    const sections = [
        { id: 'section1', label: 'Basics' },
        { id: 'section2', label: 'Education' },
        { id: 'section3', label: 'Work' },
        { id: 'section4', label: 'Volunteer' },
        { id: 'section5', label: 'Awards' }, 
        { id: 'section6', label: 'Skills' }, 
        { id: 'section7', label: 'Languages' }, 
        { id: 'section8', label: 'Interests' } 
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map(section => 
                document.getElementById(section.id)
            );

            const currentSection = sectionElements.find(element => {
                if (!element) return false;
                const rect = element.getBoundingClientRect();
                return rect.top >= TOTAL_TOP_OFFSET && rect.top <= (window.innerHeight / 2 + TOTAL_TOP_OFFSET);
            });

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: elementPosition - TOTAL_TOP_OFFSET + 16,
            behavior: 'smooth'
        });
        }
    };

    return (
        <Box>
            <NavBar />
            <Container maxWidth="lg" sx={{ display: 'flex'}}>
                <SidebarContainer>
                <List component="nav">
                    {sections.map(section => (
                        <StyledListItem
                            key={section.id}
                            active={activeSection === section.id ? 1 : 0}
                            onClick={() => scrollToSection(section.id)}
                        >
                            <ListItemText primary={section.label} />
                        </StyledListItem>
                    ))}
                </List>
                </SidebarContainer>

                <MainContent>
                    <Box sx={{mt: 10, mb: 5}}>
                        <Typography variant='h3'>CV</Typography>
                        <Typography variant='body1'>Here is what I've been doing so far!</Typography>
                    </Box>

                    <Box key='section1' id='section1' sx={{ marginBottom: 5, border: 'solid 1px black', padding: 2, borderRadius: 1, boxShadow: 3 }}>
                        <Typography variant='h4'>Basics</Typography>
                        <Grid2 container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid2 size={2} sx={{ml: 3}}>
                                <Typography variant='h6' sx={{fontWeight: 400}}>Name</Typography>                         
                            </Grid2>
                            <Grid2 size={8}>
                                <Typography variant='subtitle1'>Amy Lee</Typography>                            
                            </Grid2>
                            <Grid2 size={2} sx={{ml: 3}}>
                                <Typography variant='h6' sx={{fontWeight: 400}}>Location</Typography>                         
                            </Grid2>
                            <Grid2 size={8}>
                                <Typography variant='subtitle1'>Seattle, WA</Typography>                            
                            </Grid2>
                            <Grid2 size={2} sx={{ml: 3}}>
                                <Typography variant='h6' sx={{fontWeight: 400}}>Email</Typography>                         
                            </Grid2>
                            <Grid2 size={8}>
                                <Typography variant='subtitle1'>amy.jeeyoon.lee@gmail.com</Typography>                            
                            </Grid2>
                            <Grid2 size={2} sx={{ml: 3}}>
                                <Typography variant='h6' sx={{fontWeight: 400}}>Phone</Typography>                         
                            </Grid2>
                            <Grid2 size={8}>
                                <Typography variant='subtitle1'>425-502-0320</Typography>                            
                            </Grid2>
                            <Grid2 size={2} sx={{ml: 3}}>
                                <Typography variant='h6' sx={{fontWeight: 400}}>URL</Typography>                         
                            </Grid2>
                            <Grid2 size={8}>
                                <Typography variant='subtitle1'>FIX</Typography>                            
                            </Grid2>
                            <Grid2 size={2} sx={{ml: 3}}>
                                <Typography variant='h6' sx={{fontWeight: 400}}>Summary</Typography>                         
                            </Grid2>
                            <Grid2 size={9}>
                                <Typography variant='subtitle1'>Motivated student at the University of Washington studying computer science with a passion for learning. Skilled in collaborating with peers to solve technical challenges and eager to contribute to software engineering in a real-world setting. Seeking to apply analytic thinking and quick learning skills while enhancing technical expertise.
                                </Typography>                            
                            </Grid2>
                        </Grid2>
                    </Box>

                    <Box key='section2' id='section2' sx={{ marginBottom: 5, border: 'solid 1px black', padding: 2, borderRadius: 1, boxShadow: 3 }}>
                        <Typography variant='h4'>Education</Typography>    
                    </Box>

                    <Box key='section3' id='section3' sx={{ marginBottom: 5, border: 'solid 1px black', padding: 2, borderRadius: 1, boxShadow: 3 }}>
                        <Typography variant='h4'>Work</Typography>
                    </Box>

                    <Box key='section4' id='section4' sx={{ marginBottom: 5, border: 'solid 1px black', padding: 2, borderRadius: 1, boxShadow: 3 }}>
                        <Typography variant='h4'>Volunteer</Typography>
                    </Box>

                    <Box key='section5' id='section5' sx={{ marginBottom: 5, border: 'solid 1px black', padding: 2, borderRadius: 1, boxShadow: 3 }}>
                        <Typography variant='h4'>Awards</Typography>    
                    </Box>

                    <Box key='section6' id='section6' sx={{ marginBottom: 5, border: 'solid 1px black', padding: 2, borderRadius: 1, boxShadow: 3 }}>
                        <Typography variant='h4'>Skills</Typography>
                    </Box>

                    <Box key='section7' id='section7' sx={{ marginBottom: 5, border: 'solid 1px black', padding: 2, borderRadius: 1, boxShadow: 3 }}>
                        <Typography variant='h4'>Languages</Typography> 
                    </Box>

                    <Box key='section8' id='section8' sx={{ marginBottom: 5, border: 'solid 1px black', padding: 2, borderRadius: 1, boxShadow: 3 }}>
                        <Typography variant='h4'>Interests</Typography>
                    </Box>
                </MainContent>
            </Container>
        </Box>
    );
};