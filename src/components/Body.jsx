import React from 'react';

import { DateProvider } from './DateContext';
import Calendar from './Calendar';
import API from './API';


function Body() {
    return (
        <DateProvider>
            <div className='body-main'>
                <div className='body-left'><Calendar /></div>
                <div className='body-middle'><API /></div>
            </div>
        </DateProvider>

    );
}

export default Body;