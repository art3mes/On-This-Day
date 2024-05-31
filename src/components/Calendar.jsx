import * as React from 'react';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DateContext } from './DateContext';

export default function Calendar() {
    const { selectedDate, handleDateChange } = React.useContext(DateContext);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoItem>
                <StaticDatePicker
                    displayStaticWrapperAs="desktop"
                    value={selectedDate}
                    onChange={handleDateChange}
                />
            </DemoItem>
        </LocalizationProvider>
    );
}
