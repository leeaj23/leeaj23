'use client'

import React, { useState, useEffect } from 'react';
import { Box, List, ListItem, ListItemText, Typography, Container, Grid2, Item, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import NavBar from '../components/NavBar'; // Import your custom navbar
import { DownloadForOffline } from '@mui/icons-material';

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
        { id: 'section5', label: 'Extra-Curriculars' }, 
        { id: 'section6', label: 'Skills' }, 
        { id: 'section7', label: 'Languages' }
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
                        <Grid2 container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid2 size={10.5}>
                                <Typography variant='h2'>CV</Typography>
                            </Grid2>
                            <Grid2>
                            <Button href='../AmyLee.pdf' target='_blank' download>
                                <DownloadForOffline style={{fontSize: 50}}></DownloadForOffline>
                            </Button>
                            </Grid2>
                        </Grid2>
                        <Typography variant='body1'>Here is what I've been doing so far! Download my resume using the button to the right.</Typography>
                    </Box>

                    <Box key='section1' id='section1' sx={{ marginBottom: 5, border: 'solid 1px black', padding: 2, borderRadius: 1, boxShadow: 3 }}>
                        <Typography variant='h4'>Basics</Typography>
                        <Grid2 container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt: 2, mb: 2}}>
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
                                <Typography variant='h6' sx={{fontWeight: 400}}>Links</Typography>                         
                            </Grid2>
                            <Grid2 size={8}>
                                <Typography variant='subtitle1' component='a' href='https://www.linkedin.com/in/amy-lee-192129289/' target="_blank" sx={{textDecoration: 'underline'}}>LinkedIn</Typography>  
                                <Typography variant='subtitle1' component='a' href='https://github.com/leeaj23' target="_blank" sx={{ml: 5, textDecoration: 'underline'}}>GitHub</Typography>                         
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
                        <Grid2 container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt: 2, mb: 2}}>
                            <Grid2 size={9} sx={{ml: 3}}>
                                <Typography variant='subtitle1'><b>University of Washington</b>, BS in Computer Science</Typography>
                            </Grid2>
                            <Grid2 size={2.5}>
                                <Typography variant='subtitle1'>Expected Jun 2026</Typography>
                            </Grid2>
                            <Grid2 size={8.5} sx={{ml: 8}}>
                                <ul style={{ml: 3}}>
                                    <li><b>GPA:</b> 3.96/4.0</li>
                                    <li><b>Dean’s List Recipient:</b> 3/3 quarters</li>
                                    <li><b>Coursework:</b> Computer Programming II, Software Design and Implementation, Data Structures and Parallelism, The Hardware/Software Interface, Data Management, Linear Algebra</li>
                                </ul>
                            </Grid2>
                        </Grid2>
                    </Box>

                    <Box key='section3' id='section3' sx={{ marginBottom: 5, border: 'solid 1px black', padding: 2, borderRadius: 1, boxShadow: 3 }}>
                        <Typography variant='h4'>Work</Typography>
                        <Grid2 container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt: 2, mb: 2}}>
                            <Grid2 size={9} sx={{ml: 3}}>
                                <Typography variant='subtitle1'><b>Student Technology Loan Program Assistant</b>, University of Washington</Typography>
                            </Grid2>
                            <Grid2 size={2.5}>
                                <Typography variant='subtitle1'>May 2024 - Present</Typography>
                            </Grid2>
                            <Grid2 size={8.5} sx={{ml: 8}}>
                                <ul style={{ml: 3}}>
                                    <li>Upkept and maintained the devices available for current UW students to borrow for free under the Academic Technologies department.</li>
                                    <li>Operated troubleshooting and turnover processes for a fleet of 1000+ devices (Windows, MacOS, and iPadOS).</li>
                                </ul>
                            </Grid2>
                            <Grid2 size={9} sx={{mt: 2, ml: 3}}>
                                <Typography variant='subtitle1'><b>Instructional Assistant</b>, University of Washington</Typography>
                            </Grid2>
                            <Grid2 size={2.5}>
                                <Typography variant='subtitle1'>Jun 2024 - Aug 2024</Typography>
                            </Grid2>
                            <Grid2 size={8.5} sx={{ml: 8}}>
                                <ul style={{ml: 3}}>
                                    <li>Taught the fundamentals of Java to high-school students while assisting them with debugging their code and creating their projects.</li>
                                    <li>Assisted with the setup and maintenance of on- site computer hardware, software, inventory management, and internet connectivity to ensure all programs and devices run effectively.</li>
                                </ul>
                            </Grid2>
                            <Grid2 size={9} sx={{mt: 2, ml: 3}}>
                                <Typography variant='subtitle1'><b>Manager</b>, Over the Rainbow Tea Bar</Typography>
                            </Grid2>
                            <Grid2 size={2.5}>
                                <Typography variant='subtitle1'>Oct 2021 - Oct 2024</Typography>
                            </Grid2>
                            <Grid2 size={8.5} sx={{ml: 8}}>
                                <ul style={{ml: 3}}>
                                <li>Developed and maintained consistent timetables, ensuring customer and co-worker satisfaction through effective schedule management.</li>
                                <li>Conducted interviews, reviewed resumes, and managed inventory, gaining comprehensive insight into the operational requirements of running a small business</li>
                                </ul>
                            </Grid2>
                        </Grid2>
                    </Box>

                    <Box key='section4' id='section4' sx={{ marginBottom: 5, border: 'solid 1px black', padding: 2, borderRadius: 1, boxShadow: 3 }}>
                        <Typography variant='h4'>Volunteer</Typography>
                        <Grid2 container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt: 2, mb: 2}}>
                            <Grid2 size={9} sx={{ml: 3}}>
                                <Typography variant='subtitle1'><b>Java Instructor</b>, Mission InspirEd</Typography>
                            </Grid2>
                            <Grid2 size={2.5}>
                                <Typography variant='subtitle1'>Jul 2021 - Aug 2021</Typography>
                            </Grid2>
                            <Grid2 size={8.5} sx={{ml: 8}}>
                                <ul style={{ml: 3}}>
                                    <li>Taught coding fundamentals in Java to students of varying skill levels.</li>
                                    <li>Developed engaging lesson plans and interactive coding games to maintain student interest.</li>
                                    <li>Adapted curriculum to individual needs, ensuring a personalized learning experience.</li>
                                    <li>Fostered enthusiasm for programming through creative and hands-on instruction.</li>
                                </ul>
                            </Grid2>
                            <Grid2 size={9} sx={{mt: 2, ml: 3}}>
                                <Typography variant='subtitle1'><b>English Tutor</b>, Asian Passion Program</Typography>
                            </Grid2>
                            <Grid2 size={2.5}>
                                <Typography variant='subtitle1'>Apr 2021 - Jul 2021</Typography>
                            </Grid2>
                            <Grid2 size={8.5} sx={{ml: 8}}>
                                <ul style={{ml: 3}}>
                                    <li>Taught English grammar and slang to Korean students to enhance their language proficiency.</li>
                                    <li>Prepared students for smoother transitions into US academic and cultural environments.</li>
                                    <li>Focused on practical language applications to help students leverage English effectively.</li>
                                </ul>
                            </Grid2>
                            <Grid2 size={9} sx={{mt: 2, ml: 3}}>
                                <Typography variant='subtitle1'><b>STEM Tutor</b>, 425 Tutoring</Typography>
                            </Grid2>
                            <Grid2 size={2.5}>
                                <Typography variant='subtitle1'>Mar 2021 - Jun 2021</Typography>
                            </Grid2>
                            <Grid2 size={8.5} sx={{ml: 8}}>
                                <ul style={{ml: 3}}>
                                    <li>Planned and conducted tutoring sessions for underprivileged students in Washington.</li>
                                    <li>Provided homework support in both Korean and English to deepen students' understanding.</li>
                                    <li>Encouraged academic improvement and fostered confidence through tailored instruction.</li>
                                    <li>Inspired by students' progress to pursue a career focused on expanding access to education.</li>
                                </ul>
                            </Grid2>
                        </Grid2>
                    </Box>

                    <Box key='section5' id='section5' sx={{ marginBottom: 5, border: 'solid 1px black', padding: 2, borderRadius: 1, boxShadow: 3 }}>
                        <Typography variant='h4'>Extra Curriculars</Typography> 
                        <Grid2 container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt: 2, mb: 2}}>
                            <Grid2 size={9} sx={{ml: 3}}>
                                <Typography variant='subtitle1'><b>Tech Operations Lead</b>, UW Korean Student Association</Typography>
                            </Grid2>
                            <Grid2 size={2.5}>
                                <Typography variant='subtitle1'>Aug 2024 - Present</Typography>
                            </Grid2>
                            <Grid2 size={8.5} sx={{ml: 8}}>
                                <ul style={{ml: 3}}>
                                    <li>Developed and maintained a membership database to manage 200+ KSA members efficiently, streamlining event logistics and ensuring timely provision and setup of all event tech devices required.</li>
                                </ul>
                            </Grid2>
                        </Grid2>
                    </Box>

                    <Box key='section6' id='section6' sx={{ marginBottom: 5, border: 'solid 1px black', padding: 2, borderRadius: 1, boxShadow: 3 }}>
                        <Typography variant='h4'>Skills</Typography>
                        <Grid2 container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt: 2, mb: 2}}>
                            <Grid2 size={11} sx={{ml: 3}}>
                                <Typography variant='subtitle1'><b>Programming Languages:</b> Java, JavaScript, Typescript, Python, SQL, C++, React.js, Node.js, Git</Typography>
                            </Grid2>
                            <Grid2 size={11} sx={{ml: 3}}>
                            <Typography variant='subtitle1'><b>Frameworks & Developer Tools:</b> React.js, Node.js, Git, Vim, Visual Studio Code, IntelliJ</Typography>
                            </Grid2>
                        </Grid2>
                    </Box>

                    <Box key='section7' id='section7' sx={{ marginBottom: 5, border: 'solid 1px black', padding: 2, borderRadius: 1, boxShadow: 3 }}>
                        <Typography variant='h4'>Spoken Languages</Typography> 
                        <Grid2 container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt: 2, mb: 2}}>
                            <Grid2 size={3.5} sx={{ml: 3}}>
                                <Typography variant='subtitle1'><b>English</b></Typography>
                            </Grid2>
                            <Grid2 size={3.5} sx={{ml: 3}}>
                                <Typography variant='subtitle1'><b>Korean</b></Typography>
                            </Grid2>
                            <Grid2 size={3.5} sx={{ml: 3}}>
                                <Typography variant='subtitle1'><b>Spanish</b></Typography>
                            </Grid2>
                            <Grid2 size={3.5} sx={{ml: 3}}>
                                <Typography variant='subtitle1'>Native Speaker</Typography>
                            </Grid2>
                            <Grid2 size={3.5} sx={{ml: 3}}>
                                <Typography variant='subtitle1'>Fluent</Typography>
                            </Grid2>
                            <Grid2 size={3.5} sx={{ml: 3}}>
                                <Typography variant='subtitle1'>Working proficiency</Typography>
                            </Grid2>
                        </Grid2>
                    </Box>
                </MainContent>
            </Container>
        </Box>
    );
};