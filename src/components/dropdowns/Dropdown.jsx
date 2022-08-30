import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export const Dropdown = (props) => {
    const { name, dropdownObject, handleChange} = props;

    return (
        <div>
            <FormControl fullWidth>
            <InputLabel id="dropdown-select-label">{name}</InputLabel>
            <Select
              sx={{minWidth: "100px", mx: 1}}
              labelId="dropdown-label"
              id="dropdown-select"
              label="Age"
              onChange={(event) => {handleChange(event)}}
            >
              { Object.entries(dropdownObject).map(([key,value]) => <MenuItem value={key}>{value}</MenuItem>) } 
            </Select>
          </FormControl>
          </div>
    )
}