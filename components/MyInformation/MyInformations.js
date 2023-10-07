
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
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';





export default function MyInformations({name,data}) {
  const [userData, setUserData] = React.useState({
    userId:data.userId,
    username: data.username,
    city:data.city,
    district: data.district,
    race: data.race,
    gender:data.gender,
    religion:data.religion,
    birthday: data.birthday ? dayjs(data.birthday) : dayjs(),
  });

  const [step, setStep] = React.useState(1);
  const [fileInputOpen, setFileInputOpen] = useState(false);
  const [datastore, setDatastore] = useState('');

  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
 

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
      <Grid style={{ marginTop: "20px" }} container spacing={2}>
      

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
                    <MenuItem value='කොළඹ'>කොළඹ</MenuItem>
                    <MenuItem value='ගම්පහ'>ගම්පහ</MenuItem>
                    <MenuItem value='කළුතර'>කළුතර</MenuItem>
                    <MenuItem value='මහනුවර'>මහනුවර</MenuItem>
                    <MenuItem value='මාතලේ'>මාතලේ</MenuItem>
                    <MenuItem value='නුවර එළිය'>නුවර එළිය</MenuItem>
                    <MenuItem value='ගාල්'>ගාල්</MenuItem>
                    <MenuItem value='මාතර'>මාතර</MenuItem>
                    <MenuItem value='හම්බන්තොට'>හම්බන්තොට</MenuItem>
                    <MenuItem value='යාපනය'>යාපනය</MenuItem>
                    <MenuItem value='කිලිනොච්චි'>කිලිනොච්චි</MenuItem>
                    <MenuItem value='මන්නාරම'>මන්නාරම</MenuItem>
                    <MenuItem value='වවුනියා'>වවුනියා</MenuItem>
                    <MenuItem value='මුලතිවු'>මුලතිවු</MenuItem>
                    <MenuItem value='මඩකලපුව'>මඩකලපුව</MenuItem>
                    <MenuItem value='අම්පාර'>අම්පාර</MenuItem>
                    <MenuItem value='ත්‍රිකුණාමලය'>ත්‍රිකුණාමලය</MenuItem>
                    <MenuItem value='කුරුණෑගල'>කුරුණෑගල</MenuItem>
                    <MenuItem value='පුත්තලම'>පුත්තලම</MenuItem>
                    <MenuItem value='අනුරාධපුරය'>අනුරාධපුරය</MenuItem>
                    <MenuItem value='පොළොන්නරුව'>පොළොන්නරුව</MenuItem>
                    <MenuItem value='බදුල්ල'>බදුල්ල</MenuItem>
                    <MenuItem value='මොනරාගල'>මොනරාගල</MenuItem>
                    <MenuItem value='රත්නපුර'>රත්නපුර</MenuItem>
                    <MenuItem value='කෑගල්ල'>කෑගල්ල</MenuItem>
          
                  
                  </Select>
                </FormControl>
                
               
              </Grid>
     
        <Grid item xs={12} sm={6}>
          <Typography
            style={{ marginTop: "20px" }}
            variant="body2"
            color="textSecondary"
          >
            උපන්දිනය
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select Date"
        value={userData.birthday}
        onChange={(date) =>
          setUserData({ ...userData, birthday: dayjs(date) })
        }
      />
    </LocalizationProvider>
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
      <button onClick={FormSubmit}>submit</button>
    </div>
          
        )}

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
            endIcon={<SkipPreviousIcon />}
            style={{margin:'10px'}}
          >
            Previous Step
          </Button>
        )}
        {step < 4 ? (
          // <button onClick={handleNextStep}>Next Step</button>
          <Button
            variant="contained"
            onClick={handleNextStep}
            endIcon={<SkipNextIcon />}
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
