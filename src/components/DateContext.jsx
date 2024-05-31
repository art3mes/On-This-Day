import React, { createContext, useState } from 'react';
import dayjs from 'dayjs';

export const DateContext = createContext();

export const DateProvider = ({ children }) => {
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [day, setDay] = useState(selectedDate.format('DD'));
    const [month, setMonth] = useState(selectedDate.format('MMMM'));

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
        setDay(newDate.format('DD'));
        setMonth(newDate.format('MMMM'));
    };

    return (
        <DateContext.Provider value={{ selectedDate, day, month, handleDateChange }}>
            {children}
        </DateContext.Provider>
    );
};
