// DateContext.js
import React, { createContext, useState, useEffect } from 'react';
import dayjs from 'dayjs';

export const DateContext = createContext();

export const DateProvider = ({ children }) => {
    const today = dayjs(); // Get today's date
    const [selectedDate, setSelectedDate] = useState(today);
    const [day, setDay] = useState(today.format('DD'));
    const [month, setMonth] = useState(today.format('MM'));

    // Function to retrieve items from localStorage with error handling
    const getStoredItems = () => {
        try {
            const storedItems = localStorage.getItem('ITEMS');
            return storedItems ? JSON.parse(storedItems) : {};
        } catch (error) {
            console.error("Error parsing stored items:", error);
            return {};
        }
    };

    const [selectedItems, setSelectedItems] = useState(getStoredItems);

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
        setDay(newDate.format('DD'));
        setMonth(newDate.format('MM'));
    };

    // Update localStorage whenever selectedItems changes
    useEffect(() => {
        localStorage.setItem('ITEMS', JSON.stringify(selectedItems));
    }, [selectedItems]);

    return (
        <DateContext.Provider value={{ selectedDate, day, month, handleDateChange, selectedItems, setSelectedItems }}>
            {children}
        </DateContext.Provider>
    );
};
