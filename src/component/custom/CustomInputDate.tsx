import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import {
    DatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

interface CustomInputTextProps {
    id: string;
    value: any;
    error: string | null;
    label: string;
    handleInputChange: any;
    hide?: boolean | null
}

const CustomInputText: React.FC<CustomInputTextProps> = ({ id, value, error, label, handleInputChange, hide }) => {

    const innerOnChange = (name: string, newDate: Date | null, onChange: any) => {
        console.log(name, newDate)
        onChange({
            target: {
                name,
                value: newDate,
            },
        });
    };

    return (!hide ?
            <Grid item xs={12} sm={6}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                        error={!!error}
                        fullWidth
                        helperText={error}
                        label={label}
                        minDate={Date.now()}
                        inputVariant='outlined'
                        variant='inline'
                        name={id}
                        data-testid={`test${id}`}
                        onChange={newDate => innerOnChange(id, newDate, handleInputChange)}
                        value={value}
                        inputProps={{
                            "data-testid": 'datePickerInput-input',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </Grid>
            : <div/>
    )
}

export default CustomInputText;
