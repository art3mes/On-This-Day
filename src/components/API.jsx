// API.js
import React from 'react';
import { DateContext } from './DateContext';

function API() {
    const { day, month } = React.useContext(DateContext);

    return (
        <div className='API-body'>
            {`${day} ${month}`}
        </div>
    );
}

export default API;
