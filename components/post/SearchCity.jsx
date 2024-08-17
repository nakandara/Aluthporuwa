import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";

const SearchCity = ({ cities, handleCitySelect, selectedCities, closeSidebar }) => {
  const formatCityName = (city) => {
    return city ? city.split("/")[0] : "";
  };

  // Filter out duplicate city names
  const uniqueCities = Array.from(new Set(cities.map(formatCityName)));

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
        <InputLabel id="city-select-label">City</InputLabel>
        <Select
          labelId="city-select-label"
          id="city-select"
          multiple
          value={selectedCities}
          onChange={(event) => {
            const value = event.target.value;
            handleCitySelect(value);
            closeSidebar(); // Call the function to close the sidebar
          }}
          renderValue={(selected) => Array.from(new Set(selected.map(formatCityName))).join(", ")}
        >
          {uniqueCities.map((city) => (
            <MenuItem key={city} value={city}>
              <Checkbox checked={selectedCities.includes(city)} />
              <ListItemText primary={city} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SearchCity;
