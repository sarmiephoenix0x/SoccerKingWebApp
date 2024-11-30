import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import priceImage from '../images/ph_coin-duotone.png'; // Replace with actual path to your image
import volumeImage from '../images/vaadin_coin-piles.png'; // Replace with actual path to your image
import marketCapImage from '../images/oui_vis-pie.png'; // Replace with actual path to your image
import websiteImage from '../images/streamline_web.png'; // Replace with actual path to your image
import telegramImage from '../images/logos_telegram.png'; // Replace with actual path to your image
import redditImage from '../images/logos_reddit-icon.png'; // Replace with actual path to your image
import githubImage from '../images/icon-park_github.png'; // Replace with actual path to your image
import upcomingImage from '../images/noto_fire.png'; // Replace with actual path to your image
import trendingImage from '../images/lets-icons_up.png'; // Replace with actual path to your image
import hotImage from '../images/noto_fire.png'; // Replace with actual path to your image
import significanceImage from '../images/noto_crown.png'; // Replace with actual path to your image
import verifiedImage from '../images/Verified.png';

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
                marginX: { xs: 2, sm: 10 },
                color: 'white'
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={priceImage} alt="Price" style={{ width: 24, height: 24, marginRight: 8 }} />
                        <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 'bold', color: 'white' }}> PRICE</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={marketCapImage} alt="Market Cap" style={{ width: 24, height: 24, marginRight: 8 }} />
                        <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 'bold', color: 'white' }}> MARKET CAP</Typography>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 'bold', color: 'white' }}> $N/A</Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 'bold', color: 'white' }}> $N/A</Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 'bold', color: 'white' }}> $N/A</Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 'bold', color: 'white' }}> $N/A</Typography>
                </Box>


                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={volumeImage} alt="Volume" style={{ width: 24, height: 24, marginRight: 8 }} />
                        <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 'bold', color: 'white' }}> VOLUME (24H)</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={volumeImage} alt="Volume" style={{ width: 24, height: 24, marginRight: 8 }} />
                        <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 'bold', color: 'white' }}> VOLUME (24H)</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 'bold', color: 'white' }}> $N/A</Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 'bold', color: 'white' }}> (MAX)</Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 'bold', color: 'white' }}> $N/A</Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 'bold', color: 'white' }}> (AVAILABLE)</Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                    <Typography variant="body2" color="textSecondary" sx={{ fontSize: 14, color: 'white' }}>
                        Events are managed by the official representatives
                    </Typography>
                    <img src={verifiedImage} alt="Website" style={{ width: 24, height: 24, marginLeft: 8 }} />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 2, marginBottom: 1 }}>
                        <img src={websiteImage} alt="Website" style={{ width: 24, height: 24, marginRight: 8 }} />
                        <Typography variant="body2" color="textSecondary" sx={{ fontSize: 14, color: 'white' }}> Website</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 2, marginBottom: 1 }}>
                        <img src={telegramImage} alt="Telegram" style={{ width: 24, height: 24, marginRight: 8 }} />
                        <Typography variant="body2" color="textSecondary" sx={{ fontSize: 14, color: 'white' }}> Telegram</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 2, marginBottom: 1 }}>
                        <img src={redditImage} alt="Reddit" style={{ width: 24, height: 24, marginRight: 8 }} />
                        <Typography variant="body2" color="textSecondary" sx={{ fontSize: 14, color: 'white' }}> Reddit</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 2, marginBottom: 1 }}>
                        <img src={githubImage} alt="Github" style={{ width: 24, height: 24, marginRight: 8 }} />
                        <Typography variant="body2" color="textSecondary" sx={{ fontSize: 14, color: 'white' }}> Github</Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={{
                padding: 5,
                backgroundColor: '#314852',
                borderRadius: 0,
                boxShadow: 1,
                marginTop: 2,
                marginBottom: 2,
                marginX: { xs: 2, sm: 10 },
                color: 'white'
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
                    <Typography variant="body2" color="textSecondary" sx={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}> STATISTICS</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>

                        <Typography variant="body2" color="textSecondary" sx={{ fontSize: 14, color: 'white' }}> UPCOMING</Typography>
                        <img src={upcomingImage} alt="Upcoming" style={{ width: 24, height: 24, marginLeft: 8 }} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>

                        <Typography variant="body2" color="textSecondary" sx={{ fontSize: 14, color: 'white' }}> TRENDING</Typography>
                        <img src={trendingImage} alt="Trending" style={{ width: 24, height: 24, marginLeft: 8 }} />
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <Typography variant="body2" color="textSecondary" sx={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}> N/A</Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}> N/A</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body2" color="textSecondary" sx={{ fontSize: 14, color: 'white' }}> SIGNIFICANCE</Typography>
                        <img src={significanceImage} alt="Significance" style={{ width: 24, height: 24, marginLeft: 8 }} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body2" color="textSecondary" sx={{ fontSize: 14, color: 'white' }}> HOT</Typography>
                        <img src={hotImage} alt="Hot" style={{ width: 24, height: 24, marginLeft: 8 }} />
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="textSecondary" sx={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}> N/A</Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}> N/A</Typography>
                </Box>
            </Box>

            <Box sx={{
                padding: 5,
                backgroundColor: '#314852',
                borderRadius: 0,
                boxShadow: 1,
                marginTop: 2,
                marginBottom: 2,
                marginX: { xs: 2, sm: 10 },
                color: 'white'
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
                    <Typography variant="body2" color="textSecondary" sx={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}> VALIDATION</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="textSecondary" sx={{ fontSize: 14, color: 'white' }}> CONFIDENCE</Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ fontSize: 14, color: 'white' }}> VOTES</Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="textSecondary" sx={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}> N/A</Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}> N/A</Typography>
                </Box>
            </Box>
        </>
    );
}