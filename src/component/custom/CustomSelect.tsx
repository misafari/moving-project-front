import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {MenuItemProps} from "../../type/Core";

interface CustomSelectProps {
  id: string;
  error: string | null;
  value: any | null;
  handleInputChange: any;
  label: string;
  hide?: boolean | null
  menuItems: MenuItemProps[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  id, error, value, handleInputChange, label, menuItems, hide
}) => ((!hide) ?
  <Grid item xs={12} sm={6}>
    <FormControl variant="outlined" fullWidth error={!!error}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Select
        value={value}
        onChange={handleInputChange}
        label={label}
        name={id}
        id={id}
      >
        <MenuItem value="">Choose...</MenuItem>
        {menuItems && menuItems.map(item => <MenuItem key={item.value} value={item.value}>{item.title}</MenuItem>)}
      </Select>
    </FormControl>
    <FormHelperText>{error}</FormHelperText>
  </Grid> : <div/>
);

export default CustomSelect;
