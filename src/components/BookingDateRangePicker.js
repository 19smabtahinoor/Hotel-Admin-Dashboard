import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateRangePicker from '@mui/lab/DateRangePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function BookingDateRangePicker() {
    const [value, setValue] = React.useState([null, null]);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Typography sx={{ marginBottom: 2 }}>Reservation Start Date to End Date</Typography>

            <DateRangePicker
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                    <React.Fragment>
                        <TextField {...startProps} color="success" placeholder="Start Date"/>
                        <Box sx={{ mx: 2 }}> to </Box>
                        <TextField {...endProps} color="success" placeholder="End Date"/>
                    </React.Fragment>
                )}
            />
        </LocalizationProvider>
    );
}