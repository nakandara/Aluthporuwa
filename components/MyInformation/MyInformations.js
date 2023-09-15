import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function MyInformations() {
  const [userData, setUserData] = React.useState({
    name: '',
    email: '',
    age: '',
  });

  const [step, setStep] = React.useState(1);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleNextStep = () => {
    // Validate user input or perform any necessary checks before moving to the next step
    if (step === 1) {
      // For example, if you want to move to the next step only when the name is filled
      if (!userData.name) {
        alert('Please enter your name before proceeding.');
        return;
      }
    }

    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    // Ensure that we don't go below step 1
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        {step === 1 && (
          <div>
            <Grid style={{ marginTop: '20px' }} container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography
                  style={{ marginTop: '20px' }}
                  variant="body2"
                  color="textSecondary"
                >
                  Enter your name
                </Typography>
                <TextField
                  fullWidth
                  name="name"
                  label="Name"
                  value={userData.name}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography
                  style={{ marginTop: '20px' }}
                  variant="body2"
                  color="textSecondary"
                >
                 Birthday
                </Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                  Birthday
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Age"
                    name="age"
                    value={userData.age}
                    onChange={handleChange}
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  style={{ marginTop: '20px' }}
                  variant="body2"
                  color="textSecondary"
                >
                 ස්ත්‍රී/පුරුෂ
                </Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                  ස්ත්‍රී/පුරුෂ
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Age"
                    name="age"
                    value={userData.age}
                    onChange={handleChange}
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={10}>ස්ත්‍රී</MenuItem>
                    <MenuItem value={20}>පුරුෂ</MenuItem>
                    
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography
                  style={{ marginTop: '20px' }}
                  variant="body2"
                  color="textSecondary"
                >
                  ආගම
                </Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                  ආගම
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Age"
                    name="age"
                    value={userData.age}
                    onChange={handleChange}
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={10}>බෞද්ධ</MenuItem>
                    <MenuItem value={20}>හින්දු</MenuItem>
                    <MenuItem value={30}>ක්‍රිස්තියාන්ත</MenuItem>
                    <MenuItem value={30}>ඉස්ලාම්</MenuItem>
                    <MenuItem value={30}>රාජ්‍යයේ අනුක්ඛම් </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  style={{ marginTop: '20px' }}
                  variant="body2"
                  color="textSecondary"
                >
                  Select your age
                </Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Age
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Age"
                    name="age"
                    value={userData.age}
                    onChange={handleChange}
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>
        )}

        {step === 2 && (
          <div>
            <Grid style={{ marginTop: '20px' }} container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography
                  style={{ marginTop: '20px' }}
                  variant="body2"
                  color="textSecondary"
                >
                  Enter your email
                </Typography>
                <TextField
                  fullWidth
                  name="email"
                  label="Email"
                  type="email"
                  value={userData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* Add fields for step 2 */}
              </Grid>
            </Grid>
          </div>
        )}

        {/* Add more steps as needed */}

   
      </form>
      <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
     
      <Divider
        variant="inset"
        component="li"
        sx={{
          width: "100%", // Adjust the width as needed
          marginLeft: "auto", // Center the divider
          marginRight: "auto", // Center the divider
        }}
      />
    
    </List>
      <div style={{marginTop:'10px'}}>
          {step > 1 && (
            // <button onClick={handlePreviousStep}>Previous Step</button>
            <Button variant="contained"  onClick={handlePreviousStep} endIcon={<SendIcon />}>
  Previous Step
</Button>
            
          )}
          {step < 4 ? (
            // <button onClick={handleNextStep}>Next Step</button>
            <Button variant="contained"  onClick={handleNextStep} endIcon={<SendIcon />}>
 Next Step
</Button>
          ) : (
            
            <Button variant="contained" onClick={handleNextStep} endIcon={<SendIcon />}>
           Finish
           </Button>
          )}
        </div>
    </div>
  );
}
