import React from 'react';
import { DateProvider } from './DateContext';
import Calendar from './Calendar';
import API from './API';
import FavouriteBirthdays from './FavoriteBirthdays';


function Body() {
    return (
        <DateProvider>
            <div className='body-main'>
                <div className='body-left'><Calendar /></div>
                <div className='body-middle'><API /></div>
                <div className='body-last'><FavouriteBirthdays /></div>
            </div>
        </DateProvider>

    );
}

export default Body;