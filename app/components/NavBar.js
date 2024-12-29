'use client';

import { AppBar, Container, Toolbar, Box, Button, IconButton, Drawer, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import * as React from 'react';

export default function NavBar() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (value) => () => {
        setOpen(value);
    };

    return (
        <AppBar
            position='fixed'
            enableColorOnDark
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                backgroundImage: 'none',
                mt: 'calc(var(--template-frame-height, 0px) + 28px)'
            }}
        >
            <Container maxWidth='lg'>
                <Toolbar variant='dense' disableGutters>
                    <Box sx={{flexGrow: 1, display: 'flex', alignItems: 'center', px: 0}}>
                        <Typography variant='h4' sx={{color: 'black', mr: 4}} gutterBottom>Amy Lee</Typography>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                                About
                            </Button>
                            <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                                Projects
                            </Button>
                            <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                                CV
                            </Button>
                            <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                                Contact
                            </Button>
                            </Box>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
                        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                        </IconButton>
                        <Drawer
                        anchor="top"
                        open={open}
                        onClose={toggleDrawer(false)}
                        PaperProps={{
                            sx: {
                            top: 'var(--template-frame-height, 0px)',
                            },
                        }}
                        >
                        <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                            <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}
                            >
                            <IconButton onClick={toggleDrawer(false)}>
                                <CloseRoundedIcon />
                            </IconButton>
                            </Box>
                            <MenuItem>About</MenuItem>
                            <MenuItem>Projects</MenuItem>
                            <MenuItem>CV</MenuItem>
                            <MenuItem>Contact</MenuItem>
                        </Box>
                        </Drawer>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}