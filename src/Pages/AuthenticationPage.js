import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Components/Loader.js'; // Import the Loader component

export default function AuthenticationPage() {
    const [loading, setLoading] = useState(false);

    const load = async () => {
        setLoading(true);
        // Simulate data fetching or processing with a timeout
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(false);
    };


    useEffect(() => {
        load();
    }, []);


    return (
        <>
            {loading ? <Loader /> : <div id="AuthPageBG">
                <Outlet />
            </div>}
        </>
    );
}
