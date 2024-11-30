import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from "../Components/CourseCard";
import NewsCard from "../Components/NewsCard";
import { Tab, Tabs, Box, CircularProgress, Button, Typography } from '@mui/material';

const CoursePage = () => {
    const [courses, setCourses] = useState([]);
    const [news, setNews] = useState([]);
    const [loadingCourses, setLoadingCourses] = useState(false);
    const [loadingNews, setLoadingNews] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [tabIndex, setTabIndex] = useState(0);
    const [currentCoursePage, setCurrentCoursePage] = useState(1);
    const [currentNewsPage, setCurrentNewsPage] = useState(1);
    const [hasMoreCourses, setHasMoreCourses] = useState(true);
    const [hasMoreNews, setHasMoreNews] = useState(true);

    useEffect(() => {
        fetchCourses();
        fetchNews();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const fetchAccessToken = async () => {
        return localStorage.getItem('accessToken'); // Example using localStorage
    };

    const fetchCourses = async (isRefresh = false) => {
        if (loadingCourses || !hasMoreCourses) return;

        setLoadingCourses(true);
        if (isRefresh) {
            setCurrentCoursePage(1);
            setCourses([]);
        }

        try {
            const accessToken = await fetchAccessToken();
            const response = await fetch(`https://signal.payguru.com.ng/api/courses?page=${currentCoursePage}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                setCourses(prevCourses => [...prevCourses, ...data.data]);
                setHasMoreCourses(data.pagination.next_page_url !== null);
                setCurrentCoursePage(prevPage => prevPage + 1);
            } else {
                const message = await response.json().then(data => data.message);
                setErrorMessage(message);
            }
        } catch (error) {
            setErrorMessage('Failed to load courses. Please check your network connection.');
        } finally {
            setLoadingCourses(false);
        }
    };

    const fetchNews = async (isRefresh = false) => {
        if (loadingNews || !hasMoreNews) return;

        setLoadingNews(true);
        if (isRefresh) {
            setCurrentNewsPage(1);
            setNews([]);
        }

        try {
            const accessToken = await fetchAccessToken();
            const response = await fetch(`https://signal.payguru.com.ng/api/news?page=${currentNewsPage}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                setNews(prevNews => [...prevNews, ...data.data]);
                setHasMoreNews(data.pagination.next_page_url !== null);
                setCurrentNewsPage(prevPage => prevPage + 1);
            } else {
                const message = await response.json().then(data => data.message);
                setErrorMessage(message);
            }
        } catch (error) {
            setErrorMessage('Failed to load news. Please check your network connection.');
        } finally {
            setLoadingNews(false);
        }
    };

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
            if (tabIndex === 0) {
                fetchNews(); // Load more news
            } else {
                fetchCourses(); // Load more courses
            }
        }
    };

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
        if (newValue === 0) {
            fetchNews(true); // Refresh news when switching to news tab
        } else {
            fetchCourses(true); // Refresh courses when switching to courses tab
        }
    }

    return (
        <div className="course-page">
            <Box sx={{ width: '100%', marginBottom: 2 }}>
                <Tabs value={tabIndex} onChange={handleTabChange} centered>
                    <Tab label="News" sx={{ color: tabIndex === 0 ? 'white' : 'grey.500' }} />
                    <Tab label="Courses" sx={{ color: tabIndex === 1 ? 'white' : 'grey.500' }} />
                </Tabs>
            </Box>
            {tabIndex === 0 ? (
                <div>
                    {loadingNews ? (
                        <CircularProgress />
                    ) : errorMessage ? (
                        <div>
                            <Typography color="error">{errorMessage}</Typography>
                            <Button onClick={fetchNews}>Retry</Button>
                        </div>
                    ) : (
                        news.map((newsItem, index) => (
                            <NewsCard
                                key={index}
                                image={newsItem.images}
                                title={newsItem.title}
                                description={newsItem.article}
                                author={newsItem.username}
                                time={newsItem.created_at}
                                authorImage={newsItem.user_profile_image}
                            />
                        ))
                    )}
                    {loadingNews && <CircularProgress />}
                </div>
            ) : (
                <div>
                    {loadingCourses ? (
                        <CircularProgress />
                    ) : errorMessage ? (
                        <div>
                            <Typography color="error">{errorMessage}</Typography>
                            <Button onClick={fetchCourses}>Retry</Button>
                        </div>
                    ) : (
                        courses.map((course, index) => (
                            <CourseCard
                                key={index}
                                image={course.images}
                                title={course.title}
                                description={course.article}
                                author={course.username}
                                time={course.created_at}
                                authorImage={course.user_profile_image}
                                course={course}
                                videoUrl={course.videos}
                            />
                        ))
                    )}
                    {loadingCourses && <CircularProgress />}
                </div>
            )}
        </div>
    );
}

export default CoursePage;