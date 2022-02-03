import { FormControl, TextField, Typography } from '@mui/material';
import React from 'react';

function InputField({ label}) {
    return (
        <div>
            <FormControl variant="filled" sx={{ width: '100%' }}>
                <Typography sx={{ marginBottom: 1 }}>{label}</Typography>
                <TextField id="outlined-basic" variant="outlined" placeholder={label} color="success" />

            </FormControl>
        </div>
    );
}

export default InputField;