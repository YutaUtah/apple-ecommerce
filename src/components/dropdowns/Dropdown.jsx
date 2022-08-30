import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export const Dropdown = (props) => {
    const { name } = props;
    return (
        <div>
            <FormControl fullWidth>
            <InputLabel id="dropdown-select-label">{name}</InputLabel>
            <Select
              sx={{minWidth: "100px", mx: 1}}
              labelId="dropdown-label"
              id="dropdown-select"
              // value={age}
              label="Age"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ascending</MenuItem>
              <MenuItem value={20}>Descending</MenuItem>
            </Select>
          </FormControl>
          </div>
    )
}