import * as React from 'react';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';

export default function Calendar() {
    const [selectedDate, setSelectedDate] = React.useState(dayjs());

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
        const day = newDate.format('DD');
        const month = newDate.format('MMMM');
        console.log(`Day: ${day}, Month: ${month}`);
    };

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
