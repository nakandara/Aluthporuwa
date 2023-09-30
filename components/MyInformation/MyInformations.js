import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

export default function MyInformations({name,data}) {
  const [userData, setUserData] = React.useState({
    
    username: data.username,
    city:'',
    district: "",
    race: "",
    gender:"",
    religion:""
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
      if (!userData.username) {
        alert("Please enter your name before proceeding.");
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


  const FormSubmit = () =>{
    console.log(userData);
  }

  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        {step === 1 && (
          <div>
            <Grid style={{ marginTop: "20px" }} container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography
                  style={{ marginTop: "20px" }}
                  variant="body2"
                  color="textSecondary"
                >
                  Enter your name
                </Typography>
                <TextField
                  fullWidth
                  name="username"
                  label="Name"
                  value={userData.username}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography
                  style={{ marginTop: "20px" }}
                  variant="body2"
                  color="textSecondary"
                >
                  City
                </Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                  City
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="City"
                    name="city"
                    value={userData.city}
                    onChange={handleChange}
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={10}>Kanthale</MenuItem>
                    <MenuItem value={20}>polgolla</MenuItem>
                    <MenuItem value={30}>godagama</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  style={{ marginTop: "20px" }}
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
                    label="Gender"
                    name="gender"
                    value={userData.gender}
                    onChange={handleChange}
                  >
                   
                    <MenuItem value={10}>ස්ත්‍රී</MenuItem>
                    <MenuItem value={20}>පුරුෂ</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography
                  style={{ marginTop: "20px" }}
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
                    label="religion"
                    name="religion"
                    value={userData.religion}
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
                  style={{ marginTop: "20px" }}
                  variant="body2"
                  color="textSecondary"
                >
                  Select your race
                </Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                  Race
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Race"
                    name="race"
                    value={userData.race}
                    onChange={handleChange}
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={10}>Caucasian</MenuItem>
                  
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>
        )}

        {step === 2 && (
          <div>
         



            <Grid item xs={12} sm={6}>
                <Typography
                  style={{ marginTop: "20px" }}
                  variant="body2"
                  color="textSecondary"
                >
                  Select your District
                </Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                  District
                  </InputLabel>
                  <Select
                    fullWidth
                    name="district"
                    label="district"
                    type="district"
                    value={userData.district}
                    onChange={handleChange}
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={10}>Caucasian</MenuItem>
                  
                  </Select>
                </FormControl>
                <Grid item xs={12} sm={6}>
               <button onClick={FormSubmit}>Submit</button>
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
      <div style={{ marginTop: "10px" }}>
        {step > 1 && (
          // <button onClick={handlePreviousStep}>Previous Step</button>
          <Button
            variant="contained"
            onClick={handlePreviousStep}
            endIcon={<SendIcon />}
          >
            Previous Step
          </Button>
        )}
        {step < 4 ? (
          // <button onClick={handleNextStep}>Next Step</button>
          <Button
            variant="contained"
            onClick={handleNextStep}
            endIcon={<SendIcon />}
          >
            Next Step
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleNextStep}
            endIcon={<SendIcon />}
          >
            Finish
          </Button>
        )}
      </div>
    </div>
  );
}
