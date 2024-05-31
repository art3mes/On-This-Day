// DateContext.js
import React, { createContext, useState } from 'react';
import dayjs from 'dayjs';

export const DateContext = createContext();

export const DateProvider = ({ children }) => {
    const today = dayjs(); // Get today's date
    const [selectedDate, setSelectedDate] = useState(today);
    const [day, setDay] = useState(today.format('DD'));
    const [month, setMonth] = useState(today.format('MM'));

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
        setDay(newDate.format('DD'));
        setMonth(newDate.format('MM'));
    };

    return (
        <DateContext.Provider value={{ selectedDate, day, month, handleDateChange }}>
            {children}
        </DateContext.Provider>
    );
};
