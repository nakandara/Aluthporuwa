
import React, { useState,useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import axios from "axios";
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
import { environments } from "../../components/environment/environments";



export default function MyInformations({name,data}) {
  const [userData, setUserData] = React.useState({
    userId:data.userId,
    username: data.username,
    city:data.city,
    district: data.district,
    race: data.race,
    gender:data.gender,
    religion:data.religion
  });

  const [step, setStep] = React.useState(1);
  const [fileInputOpen, setFileInputOpen] = useState(false);
  const [datastore, setDatastore] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleNextStep = () => {
 
    if (step === 1) {
   
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


  const FormSubmit = async () =>{
    console.log(userData);
    try {
      const apiUrl = `${environments.BASE_HOST_URL}/api/createProfile`; 
      const response = await axios.post(apiUrl,userData);
    
      console.log(response.data.ProfileDB);
  
   
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Set loading to false in case of an error
    }
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
                    <MenuItem value="Kanthale">Kanthale</MenuItem>
      <MenuItem value="polgolla">polgolla</MenuItem>
      <MenuItem value="godagama">godagama</MenuItem>
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
                   
                    <MenuItem value='ස්ත්‍රී'>ස්ත්‍රී</MenuItem>
                    <MenuItem value='පුරුෂ'>පුරුෂ</MenuItem>
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
                    value={userData.religion || ''}
                    onChange={handleChange}
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value='බෞද්ධ'>බෞද්ධ</MenuItem>
                    <MenuItem value='හින්දු'>හින්දු</MenuItem>
                    <MenuItem value='ක්‍රිස්තියාන්ත'>ක්‍රිස්තියාන්ත</MenuItem>
                    <MenuItem value='ඉස්ලාම්'>ඉස්ලාම්</MenuItem>
                    <MenuItem value='රාජ්‍යයේ'>රාජ්‍යයේ අනුක්ඛම් </MenuItem>
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
                    
                    <MenuItem value='Caucasian'>Caucasian</MenuItem>
                  
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
                    <MenuItem value='Caucasian'>Caucasian</MenuItem>
                  
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
