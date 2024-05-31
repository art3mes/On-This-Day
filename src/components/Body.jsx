import React from 'react';
import Calendar from './Calendar';
import FavouriteBirthdays from './FavoriteBirthdays';

function Body() {
    return (
        <div className='body-main'>
            <div className='body-left'><Calendar /></div>
            <div className='body-middle'>birthdays</div>
            <div className='body-right'>< FavouriteBirthdays /></div>
        </div>

    );
}

export default Body;