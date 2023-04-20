import React, { useEffect, useState } from 'react'

export default function dashboard() {

    const [isLoading, setIsLoading] = useState<Boolean>(true);
    const [dashboardData, setDashboardData] = useState<any>(null);

    useEffect(() => {
        async function fetchDashboardData() {
            const response = await fetch(`http://localhost:4000/dashboard`);
            const data = await response.json();
            console.log(data);
            setDashboardData(data);
            setIsLoading(false);
        }
        fetchDashboardData();
    }, [])

    if (isLoading) {
        return <h1>Loading ....</h1>
    }
    return (
        <>
            <h2>Dashboard</h2>
            <h2>Posts -{dashboardData.posts}</h2>
            <h2>Likes -{dashboardData.likes}</h2>
            <h2>Followers -{dashboardData.followers}</h2>
            <h2>Following -{dashboardData.following}</h2>
        </>

    )
}
