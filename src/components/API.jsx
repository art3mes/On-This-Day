// API.js
import React, { useState, useEffect, useContext } from 'react';
import { DateContext } from './DateContext';
import axios from "axios";
import Loading from './Loading';
import FavouriteBirthdays from './FavoriteBirthdays';

function API() {
    const { day, month } = useContext(DateContext);
    const [json, setJson] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedItems, setSelectedItems] = useState({});

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

    const handleCheckboxChange = (date, item) => {
        setSelectedItems((prevSelectedItems) => {
            const newSelectedItems = { ...prevSelectedItems };

            if (!newSelectedItems[date]) {
                newSelectedItems[date] = [];
            }

            if (newSelectedItems[date].includes(item)) {
                // Remove item from the list if it's already selected
                newSelectedItems[date] = newSelectedItems[date].filter(selectedItem => selectedItem !== item);

                // If the date has no more items, remove the date key
                if (newSelectedItems[date].length === 0) {
                    delete newSelectedItems[date];
                }
            } else {
                // Add item to the list if it's not already selected
                newSelectedItems[date] = [...newSelectedItems[date], item];
            }

            return newSelectedItems;
        });
    };


    if (loading) {
        return <Loading type="bars" color="rgb(138, 43, 226)" height={100} width={100} />;
    }

    const dateKey = `${day}/${month}`;

    return (
        <div className='API-body'>
            Birthdays on {dateKey}
            <div className='API-sub-body'>
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
                <FavouriteBirthdays selectedItems={selectedItems} />
            </div>
        </div>
    );

}

export default API;

