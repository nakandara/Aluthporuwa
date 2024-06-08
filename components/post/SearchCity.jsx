import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";

const SearchCity = ({ handleCitySelect, selectedCities }) => {
  const sriLankanDistricts = [
    "Ampara",
    "Anuradhapura",
    "Badulla",
    "Batticaloa",
    "Colombo",
    "Galle",
    "Gampaha",
    "Hambantota",
    "Jaffna",
    "Kalutara",
    "Kandy",
    "Kegalle",
    "Kilinochchi",
    "Kurunegala",
    "Mannar",
    "Matale",
    "Matara",
    "Moneragala",
    "Mullaitivu",
    "Nuwara Eliya",
    "Polonnaruwa",
    "Puttalam",
    "Ratnapura",
    "Trincomalee",
    "Vavuniya"
  ];

  const handleChange = (event) => {
    const value = event.target.value;

    // Check if the selected values exceed the limit
    if (value.length <= 2) {
      handleCitySelect(value);
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
        <InputLabel id="city-select-label">City</InputLabel>
        <Select
          labelId="city-select-label"
          id="city-select"
          multiple
          value={selectedCities}
          onChange={handleChange}
          renderValue={(selected) => selected.join(", ")}
        >
          {sriLankanDistricts.map((district) => (
            <MenuItem key={district} value={district}>
              <Checkbox checked={selectedCities.includes(district)} />
              <ListItemText primary={district} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SearchCity;
