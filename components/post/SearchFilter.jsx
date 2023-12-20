import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SearchFilter = ({
  categories,
  handleCategorySelect,
  selectedCategories,
}) => {
  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select>
            {categories.map((category) => (
              <label key={category}>
                <MenuItem value={10}>
                  {" "}
                  <input
                    type="checkbox"
                    value={category}
                    onChange={() => handleCategorySelect(category)}
                    checked={selectedCategories.includes(category)}
                  />
                  {category}
                </MenuItem>
              </label>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default SearchFilter;
