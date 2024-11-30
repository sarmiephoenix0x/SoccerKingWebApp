import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

export default function EventDetails() {
    const location = useLocation();
    const { event } = location.state || {};
    return (
        <>
            <Box sx={{
                padding: 5,
                backgroundColor: '#314852',
                borderRadius: 0,
                boxShadow: 1,
                marginTop: 5,
                marginBottom: 5,
                marginRight: 10,
                marginLeft: 10,
                color: 'white'
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontWeight: 'bold',
                            color: 'white'
                        }}> PRICE</Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontWeight: 'bold',
                            color: 'white'
                        }}> MARKET PRICE</Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontWeight: 'bold',
                            color: 'white'
                        }}> $N/A</Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontWeight: 'bold',
                            color: 'white'
                        }}> $N/A</Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 10
                    }}>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontWeight: 'bold',
                            color: 'white'
                        }}> $N/A</Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontWeight: 'bold',
                            color: 'white'
                        }}> $N/A</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontWeight: 'bold',
                            color: 'white'
                        }}> VOLUME (24H)</Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontWeight: 'bold',
                            color: 'white'
                        }}> VOLUME (24H)</Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontWeight: 'bold',
                            color: 'white'
                        }}> $N/A</Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontWeight: 'bold',
                            color: 'white'
                        }}> (MAX)</Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 10
                    }}>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontWeight: 'bold',
                            color: 'white'
                        }}> $N/A</Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontWeight: 'bold',
                            color: 'white'
                        }}> (AVAILABLE)</Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: 10
                    }}>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontSize: 14,
                            color: 'white'
                        }}> Events are managed by the official representatives</Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontSize: 14,
                            color: 'white'
                        }}> Website</Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontSize: 14,
                            color: 'white'
                        }}> Telegram</Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontSize: 14,
                            color: 'white'
                        }}> Reddit</Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontSize: 14,
                            color: 'white'
                        }}> Github</Typography>
                </Box>
            </Box>

            <Box sx={{
                padding: 5,
                backgroundColor: '#314852',
                borderRadius: 0,
                boxShadow: 1,
                marginTop: 2,
                marginBottom: 2,
                marginRight: 10,
                marginLeft: 10,
                color: 'white'
            }}>
                <Box sx={{ display: 'flex',
                        justifyContent: 'center',
                        marginBottom: 10}}>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: 'white'
                        }}> STATISTICS</Typography>
                    
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontSize: 14,
                            color: 'white'
                        }}> UPCOMING</Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontSize: 14,
                            color: 'white'
                        }}> TRENDING</Typography>

                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 10
                    }}>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: 'white'
                        }}> N/A</Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: 'white'
                        }}> N/A</Typography>

                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontSize: 14,
                            color: 'white'
                        }}> SIGNIFICANCE</Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontSize: 14,
                            color: 'white'
                        }}> HOT</Typography>

                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: 'white'
                        }}> N/A</Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: 'white'
                        }}> N/A</Typography>

                </Box>
            </Box>


            <Box sx={{
                padding: 5,
                backgroundColor: '#314852',
                borderRadius: 0,
                boxShadow: 1,
                marginTop: 2,
                marginBottom: 2,
                marginRight: 10,
                marginLeft: 10,
                color: 'white'
            }}>
                <Box sx={{ display: 'flex',
                        justifyContent: 'center',
                        marginBottom: 10}}>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: 'white'
                        }}> VALIDATION</Typography>
                    
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontSize: 14,
                            color: 'white'
                        }}> CONFINDENCE</Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontSize: 14,
                            color: 'white'
                        }}> VOTES</Typography>

                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: 'white'
                        }}> N/A</Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: 'white'
                        }}> N/A</Typography>

                </Box>
 
            </Box>
        </>
    )
}