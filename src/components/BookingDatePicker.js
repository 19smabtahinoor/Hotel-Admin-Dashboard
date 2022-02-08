import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import * as React from 'react';


export default function BookingDatePicker({ currentDate, setCurrentDate}) {
   

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Typography sx={{ marginBottom: 2 }}>Reservation Date</Typography>

            <DatePicker
                value={currentDate}
                onChange={(newValue) => {
                    setCurrentDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} sx={{ width: "100%" }} color="success" placeholder="Reservation Date" />}
            />
        </LocalizationProvider>
    );
}