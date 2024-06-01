import React, { useContext } from 'react';
import dayjs from 'dayjs';
import { DateContext } from './DateContext';

const FavouriteBirthdays = () => {
    const { selectedItems } = useContext(DateContext);

    return (
        <div className='favourite-bd'>
            <h3>Favourite Birthdays</h3>
            {Object.keys(selectedItems).map((date, index) => {
                const formattedDate = dayjs(date, 'DD/MM').format('MMMM DD');
                return (
                    <div key={index}>
                        <h4>{formattedDate}</h4>
                        <ul>
                            {selectedItems[date].map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};

export default FavouriteBirthdays;
