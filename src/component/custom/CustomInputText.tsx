import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";

interface CustomInputTextProps {
    id: string;
    value: any;
    error: string | null;
    label: string;
    handleInputChange: any;
    hide?: boolean | null
}

const CustomInputText: React.FC<CustomInputTextProps> = ({ id, value, error, label, handleInputChange, hide }) => {
    return (!hide ?
            <Grid item xs={12} sm={6}>
                <TextField
                    error={!!error}
                    helperText={error}
                    label={label}
                    id={id}
                    name={id}
                    onChange={handleInputChange}
                    variant="outlined"
                    fullWidth
                    type="text"
                    value={value}
                />
            </Grid> : <div/>
    )
}

export default CustomInputText;
