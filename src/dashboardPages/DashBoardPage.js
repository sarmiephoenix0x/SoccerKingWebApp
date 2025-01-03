import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Paper,
    Divider,
    styled,
    Drawer,
    IconButton,
    useMediaQuery,
    useTheme,
    Tooltip,
} from '@mui/material';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'; // Icon for signals
import CloseIcon from '@mui/icons-material/Close'; // Icon for closing the drawer
import SignalCard from '../Components/SignalCard';

export default function DashBoardPage() {
    const [loading, setLoading] = useState(true);
    const [totalSignals, setTotalSignals] = useState(0);
    const [balance, setBalance] = useState('$0.00');
    const [profilePhoto, setProfilePhoto] = useState('');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        const fetchDetails = async () => {
            setLoading(true);
            try {
                const accessToken = localStorage.getItem('accessToken');
                const response = await axios.get('https://signal.payguru.com.ng/api/details', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                if (response.status === 200) {
                    const userData = response.data['0'];
                    const totalSignals = response.data['total_signals'];
                    const profilePhoto = response.data['profile_photo'];

                    setTotalSignals(totalSignals);
                    setBalance(userData.balance || '$0.00');
                    setProfilePhoto(profilePhoto);
                } else {
                    enqueueSnackbar('Failed to load details', { variant: 'error' });
                }
            } catch (error) {
                enqueueSnackbar('Failed to load data. Please check your network connection.', { variant: 'error' });
                console.error('Exception caught:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDetails();
    }, [enqueueSnackbar]);

    // Automatically open the drawer on larger screens
    useEffect(() => {
        if (!isSmallScreen) {
            setIsDrawerOpen(true);
        } else {
            setIsDrawerOpen(false);
        }
    }, [isSmallScreen]);

    // Styled Card with custom colors and no hover effect
    const StyledCard = styled(Card)(({ theme }) => ({
        backgroundColor: '#09161E',
        color: 'white',
        borderRadius: '12px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'none', // Remove hover transition
    }));

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3, p: 3, height: '100vh' }}>
            {/* Left Side: Stats Cards */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3, marginRight: isDrawerOpen && !isSmallScreen ? '300px' : 0 }}>
                {/* Menu Button for Small Screens */}
                {isSmallScreen && (
                    <Tooltip title="Open Signals">
                        <IconButton
                            onClick={toggleDrawer}
                            sx={{ alignSelf: 'flex-start', color: 'white' }}
                        >
                            <SignalCellularAltIcon />
                        </IconButton>
                    </Tooltip>
                )}



                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 3 }}>
                    <StyledCard>
                        <CardContent>
                            <Typography variant="h6">Total Balance</Typography>
                            <Typography variant="h4" fontWeight="bold">
                                {balance}
                            </Typography>
                        </CardContent>
                    </StyledCard>

                    <StyledCard>
                        <CardContent>
                            <Typography variant="h6">Package</Typography>
                            <Typography variant="h4" fontWeight="bold">
                                N/A (Validity)
                            </Typography>
                        </CardContent>
                    </StyledCard>

                    <StyledCard>
                        <CardContent>
                            <Typography variant="h6">Total Deposit</Typography>
                            <Typography variant="h4" fontWeight="bold">
                                $0.00
                            </Typography>
                        </CardContent>
                    </StyledCard>

                    <StyledCard>
                        <CardContent>
                            <Typography variant="h6">Total Signals</Typography>
                            <Typography variant="h4" fontWeight="bold">
                                {totalSignals}
                            </Typography>
                        </CardContent>
                    </StyledCard>

                    <StyledCard>
                        <CardContent>
                            <Typography variant="h6">Total Transaction</Typography>
                            <Typography variant="h4" fontWeight="bold">
                                0
                            </Typography>
                        </CardContent>
                    </StyledCard>

                    <StyledCard>
                        <CardContent>
                            <Typography variant="h6">Total Referral</Typography>
                            <Typography variant="h4" fontWeight="bold">
                                0
                            </Typography>
                        </CardContent>
                    </StyledCard>
                </Box>
            </Box>

            {/* Right Side: Drawer for Signals */}
            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={toggleDrawer}
                variant={isSmallScreen ? "temporary" : "persistent"}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: 300,
                        backgroundColor: '#0D222B',
                        color: 'white',
                        height: '100vh',
                    },
                }}
            >
                <Box sx={{ padding: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h5" gutterBottom>
                            Signals
                        </Typography>
                        {/* Close button only for small screens */}
                        {isSmallScreen && (
                            <IconButton onClick={toggleDrawer} sx={{ color: 'white' }}>
                                <CloseIcon />
                            </IconButton>
                        )}
                    </Box>
                    <Divider sx={{ marginBottom: 2 }} />
                    <Box sx={{ height: 'calc(100vh - 64px)', overflowY: 'auto' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <SignalCard type="crypto" />
                            {/* Add more SignalCards as needed */}
                        </Box>
                    </Box>
                </Box>
            </Drawer>
        </Box>
    );
}