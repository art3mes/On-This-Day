// API.js
import React, { useState, useEffect, useContext } from 'react';
import { DateContext } from './DateContext';
import axios from "axios";
import Loading from './Loading';

function API() {
    const { day, month } = useContext(DateContext);
    const [json, setJson] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        console.log(day, month);
        try {
            const response = await axios.get(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${month}/${day}`, {});
            setJson(response.data.births);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false); // Set loading to false after data is fetched
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setLoading(true);
    }, [day, month]); // Re-fetch data when day or month changes

    if (loading) {
        return <Loading type="bars" color="rgb(138, 43, 226)" height={100} width={100} />; // Render Loading component while data is being fetched
    }

    return (
        <div className='API-body'>
            Birthdays on {day}/{month}
            <div className='scrollable-list'>
                <ul>
                    {json.map((item, index) => (
                        <li key={index}>{item.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default API;

