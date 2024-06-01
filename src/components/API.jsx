// API.js
import React, { useState, useEffect, useContext } from 'react';
import { DateContext } from './DateContext';
import axios from "axios";
import Loading from './Loading';

function API() {
    const [json, setJson] = useState([]);
    const [loading, setLoading] = useState(true);
    const { day, month, selectedItems, setSelectedItems } = useContext(DateContext);

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
        setLoading(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [day, month]); // Re-fetch data when day or month changes

    const handleCheckboxChange = (date, item) => {
        setSelectedItems((prevSelectedItems) => {
            const newSelectedItems = { ...prevSelectedItems };

            if (!newSelectedItems[date]) {
                newSelectedItems[date] = [];
            }

            if (newSelectedItems[date].includes(item)) {
                newSelectedItems[date] = newSelectedItems[date].filter(selectedItem => selectedItem !== item);

                if (newSelectedItems[date].length === 0) {
                    delete newSelectedItems[date];
                }
            } else {
                // Add item to the list if it's not already selected
                newSelectedItems[date] = [...newSelectedItems[date], item];
            }
            localStorage.setItem("ITEMS", newSelectedItems);
            return newSelectedItems;
        });
    };


    if (loading) {
        return <div className='loading'><Loading type="bars" color="rgb(138, 43, 226)" height={100} width={100} /></div>;
    }

    const dateKey = `${day}/${month}`;

    return (
        <div className='API-body'>
            <span>Birthdays on {dateKey}</span>
            <div className='scrollable-list'>
                <ul>
                    {json.map((item, index) => (
                        <li key={index}>
                            <input
                                type="checkbox"
                                checked={selectedItems[dateKey]?.includes(item.text) || false}
                                onChange={() => handleCheckboxChange(dateKey, item.text)}
                            /> {item.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

}

export default API;

