import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from "../Components/CourseCard";

const CoursePage = () => {
    const [courses, setCourses] = useState([]);
    const [loadingCourse, setLoadingCourse] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoadingMoreCourses, setIsLoadingMoreCourses] = useState(false);
    const [currentCoursePage, setCurrentCoursePage] = useState(1);
    const [hasMoreCourses, setHasMoreCourses] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCourses(true);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const fetchAccessToken = async () => {
        return localStorage.getItem('accessToken'); // Example using localStorage
    };

    const fetchCourses = async (isRefresh = false) => {
        if (loadingCourse || !hasMoreCourses) return;

        if (isRefresh) {
            setLoadingCourse(true);
            setErrorMessage(null);
        }

        try {
            const accessToken = await fetchAccessToken();
            const response = await fetch(`https://signal.payguru.com.ng/api/courses?page=${currentCoursePage}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            console.log(data); // Log the response body

            if (response.ok) {
                setCourses(prevCourses => isRefresh ? data.data : [...prevCourses, ...data.data]);
                setHasMoreCourses(data.pagination.next_page_url !== null);
                setCurrentCoursePage(prevPage => prevPage + 1);
            } else {
                const message = data.message;
                setErrorMessage(message);
            }
        } catch (error) {
            setErrorMessage('Failed to load data. Please check your network connection.');
        } finally {
            setLoadingCourse(false);
        }
    };

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 && !isLoadingMoreCourses) setIsLoadingMoreCourses(true);
            fetchCourses();
            setIsLoadingMoreCourses(false);
        }

    return (
        <div className="course-page">
        
            {loadingCourse ? (
                <div id ="CourseLoading">Loading...</div>
            ) : errorMessage ? (
                <div>
                    <p>{errorMessage}</p>
                    <button onClick={() => fetchCourses(true)}>Retry</button>
                </div>
            ) : (
                <div className="course-grid">
                    {courses.map((course, index) => (
                        <CourseCard
                            key={index}
                            image={course.images} // Use the images property from the API response
                            title={course.title}
                            description={course.article} // Use the article property for description
                            author={course.username} // Use the username for author
                            time={course.created_at} // Use created_at for time
                            authorImage={course.user_profile_image} // Use user_profile_image for author image
                            course={course} // Pass the entire course object
                            videoUrl={course.videos} // Use the videos property for video URL
                        />
                    ))}
                    {isLoadingMoreCourses && <div>Loading more courses...</div>}
                </div>
            )}
        </div>
    );
}

export default CoursePage;