import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function MyInformations() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div >
      <div  style={{ display: 'flex', alignItems: 'center' ,marginTop:"30px"}} >
      <h2 style={{ marginRight: '50px' }}>ස්ත්‍රී/පුරුෂ :</h2>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">ස්ත්‍රී/පුරුෂ</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
           
          </MenuItem>
          <MenuItem value={10}>ස්ත්‍රී</MenuItem>
          <MenuItem value={20}>පුරුෂ</MenuItem>
        </Select>
      </FormControl>

      
      </div>
      <div  style={{ display: 'flex', alignItems: 'center' ,marginTop:"30px"}} >
      <h2 style={{ marginRight: '50px' }}>ආගම :</h2>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">ආගම</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
           
          </MenuItem>
          <MenuItem value={10}>ආගම</MenuItem>
          <MenuItem value={20}>ආගම</MenuItem>
        </Select>
      </FormControl>
      </div>
      <div  style={{ display: 'flex', alignItems: 'center' ,marginTop:"30px"}} >
      <h2 style={{ marginRight: '50px' }}>ආගම :</h2>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">ආගම</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
           
          </MenuItem>
          <MenuItem value={10}>ආගම</MenuItem>
          <MenuItem value={20}>ආගම</MenuItem>
        </Select>
      </FormControl>
      </div>

      <div  style={{ display: 'flex', alignItems: 'center' ,marginTop:"30px"}} >
      <h2 style={{ marginRight: '50px' }}>ආගම :</h2>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">ආගම</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
           
          </MenuItem>
          <MenuItem value={10}>ආගම</MenuItem>
          <MenuItem value={20}>ආගම</MenuItem>
        </Select>
      </FormControl>
      </div>

      <div  style={{ display: 'flex', alignItems: 'center' ,marginTop:"30px"}} >
      <h2 style={{ marginRight: '50px' }}>ආගම :</h2>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">ආගම</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
           
          </MenuItem>
          <MenuItem value={10}>ආගම</MenuItem>
          <MenuItem value={20}>ආගම</MenuItem>
        </Select>
      </FormControl>

      
      </div>

    </div>
  );
}
