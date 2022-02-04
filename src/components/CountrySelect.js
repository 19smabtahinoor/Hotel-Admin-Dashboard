import { Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';

function CountrySelect(props) {
    const [country, setCountry] = React.useState('');

    const handleChange = (event) => {
        setCountry(event.target.value);
    };
  
    return (
        <div>
            <FormControl fullWidth>
                <Typography sx={{ marginBottom: 1 }}>Country</Typography>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={country}
                    color="success"
                    onChange={handleChange}
                    placeholder="Select Your Country"
                >
                    <MenuItem value="Bangladesh">Bangladesh</MenuItem>
                    <MenuItem value="India">India</MenuItem>
                    <MenuItem value="Pakistan">Pakistan</MenuItem>
                    <MenuItem value="Australia">Australia</MenuItem>

                </Select>
            </FormControl>
        </div>
    );
}

export default CountrySelect;