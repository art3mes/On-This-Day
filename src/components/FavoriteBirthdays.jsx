import React from 'react';

const FavouriteBirthdays = ({ selectedItems }) => {
    return (
        <div>
            <h3>Favourite Birthdays</h3>
            {Object.keys(selectedItems).map((date, index) => (
                <div key={index}>
                    <h4>{date}</h4>
                    <ul>
                        {selectedItems[date].map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default FavouriteBirthdays;
