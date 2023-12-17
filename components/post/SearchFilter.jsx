 import * as React from 'react';
 import TextField from '@mui/material/TextField';
 import Autocomplete from '@mui/material/Autocomplete';

// export default function SearchFilter() {
//   return (
//     <Autocomplete
//       disablePortal
//       id="combo-box-demo"
//       options={top100Films}
//       sx={{ width: "100%" }}
//       renderInput={(params) => <TextField {...params} label="Movie" />}
//     />
//   );
// }

// // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const top100Films = [
//   { label: 'Vehicle', year: 1994 },
//   { label: 'Spa', year: 1972 },
//   { label: 'House', year: 1974 },
  
// ];



const SearchFilter = ({
  categories,
  handleCategorySelect,
  selectedCategories,
}) => {
  return (
    <div>
      {categories.map((category) => (
        <label key={category}>
          <input
            type="checkbox"
            value={category}
            onChange={() => handleCategorySelect(category)}
            checked={selectedCategories.includes(category)}
          />
          {category}
        </label>
      ))}
    </div>
  );
};

export default SearchFilter;

