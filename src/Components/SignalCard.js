import React, { useEffect, useState } from 'react';
import { fetchSignals } from '../Components/signalService'; // Adjust the import path as necessary
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    Collapse,
    IconButton,
    Divider,
    Paper,
    styled,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import PieChartIcon from '@mui/icons-material/PieChart';

export default function SignalCard({ type }) {
    const navigate = useNavigate();
    const [signals, setSignals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [expandedSignalIndex, setExpandedSignalIndex] = useState(null);
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        const loadSignals = async () => {
            try {
                const result = await fetchSignals(type, page);
                setSignals((prevSignals) => [...prevSignals, ...result.data]);
                setHasMore(result.pagination.next_page_url !== null);
            } catch (error) {
                enqueueSnackbar('Error fetching signals:', { variant: 'error' });
                console.error('Error fetching signals:', error);
            } finally {
                setLoading(false);
            }
        };

        loadSignals();
    }, [type, page, enqueueSnackbar]);

    const GoToViewAnalysis = (signal) => {
        navigate('/DashBoard/ViewAnalysis', { state: { signal } });
    };

    const toggleExpand = (index) => {
        setExpandedSignalIndex(expandedSignalIndex === index ? null : index);
    };

    const GoToLiveChart = () => {
        navigate('/DashBoard/TradingViewPage');
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '100%' }}>
            {loading ? (
                <Typography>Loading...</Typography>
            ) : (
                signals.map((signal, index) => {
                    const targets = JSON.parse(signal.targets);
                    return (
                        <Card key={signal.id} sx={{ borderRadius: 2, backgroundColor: '#0D222B', color: 'white' }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="body2" color="textSecondary">
                                        Opened
                                    </Typography>
                                    <Typography variant="body2">{signal.created_at || 'Unknown Date'}</Typography>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
                                    <Box
                                        component="img"
                                        src={signal.coin_image || '/default-coin.png'}
                                        alt="Coin"
                                        sx={{ width: 40, height: 40, borderRadius: '50%' }}
                                    />
                                    <Box>
                                        <Typography variant="h6">
                                            {signal.coin} {signal.pair ? `(${signal.pair})` : ''}
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            {signal.trend === 'Up' ? (
                                                <TrendingUpIcon sx={{ color: 'green' }} />
                                            ) : (
                                                <TrendingDownIcon sx={{ color: 'red' }} />
                                            )}
                                            <Typography variant="body2">{signal.trend || 'No Trend'}</Typography>
                                        </Box>
                                    </Box>
                                </Box>

                                <Box sx={{ mt: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                        <Typography variant="body2">Entry Price:</Typography>
                                        <Typography variant="body2">{signal.entry_price}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                        <Typography variant="body2">Stop Loss:</Typography>
                                        <Typography variant="body2">{ signal.stop_loss}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant="body2">Current Price:</Typography>
                                        <IconButton onClick={() => toggleExpand(index)}>
                                            <Typography variant="body2">{signal.current_price}</Typography>
                                            <ExpandMoreIcon />
                                        </IconButton>
                                    </Box>
                                </Box>

                                <Collapse in={expandedSignalIndex === index} timeout="auto" unmountOnExit>
                                    <Box sx={{ mt: 2 }}>
                                        {Object.entries(targets).map(([key, value]) => (
                                            <Box key={key} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography variant="body2">{key.replace(/_/g, ' ').toUpperCase()}</Typography>
                                                <Typography variant="body2">{value}</Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Collapse>
                            </CardContent>

                            <Divider />

                            <CardActions sx={{ justifyContent: 'space-between' }}>
                                <Button size="small" onClick={() => GoToViewAnalysis(signal)} variant="outlined" color="primary">
                                    View Analysis
                                </Button>
                                <Button size="small" onClick={GoToLiveChart} variant="outlined" color="primary" endIcon={<PieChartIcon />}>
                                    Live Chart
                                </Button>
                            </CardActions>
                        </Card>
                    );
                })
            )}
            {hasMore && !loading && (
                <Button variant="contained" onClick={() => setPage((prevPage) => prevPage + 1)} sx={{ mt: 2 }}>
                    Load More
                </Button>
            )}
        </Box>
    );
}