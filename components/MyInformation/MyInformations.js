import React, { useState, useEffect } from "react";
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
import { environments } from "../../components/environment/environments";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useToken } from "../../src/context/TokenContext";

export default function MyInformations({ name, data }) {
  const { user, token } = useToken();
  console.log(user.userId, 'data');
  const [userData, setUserData] = useState({
    userId: user.userId,
    username: data.username,
    city: data.city,
    district: data.district,
    race: data.race,
    gender: data.gender,
    religion: data.religion,
    birthday: data.birthday ? dayjs(data.birthday) : dayjs(),
  });
  const GetProfileUrl = `${environments.BASE_HOST_URL}/api/getProfile`;
  const GetUserUrl = `${environments.BASE_HOST_URL}/api/auth/getUserById`;
  const [step, setStep] = useState(1);
  const [heading, setHeading] = useState("My Information Step 01");

  const [fileInputOpen, setFileInputOpen] = useState(false);
  const [datastore, setDatastore] = useState("");
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
      setHeading("My Information Step 02");
    }

    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
      setHeading("My Information Step 01");
    }
  };

  const FormSubmit = async () => {
    console.log(userData);

    try {
      const response = await axios.get(`${GetUserUrl}/${user.userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data;
      console.log(data, 'AlreadyUseProfile');

      const AlreadyUse = await axios.get(`${GetProfileUrl}/${user.userId}`);
      console.log(AlreadyUse, 'AlreadyUseProfileData');

      if (!AlreadyUse.data) {
        const apiUrl = `${environments.BASE_HOST_URL}/api/createProfile`;
        await axios.post(apiUrl, userData);
        console.log("Information Successfully Created");
      } else {
        const apiUrlAlreadyUse = `${environments.BASE_HOST_URL}/api/updateProfile/${user.userId}`;
        await axios.post(apiUrlAlreadyUse, userData);
        console.log("Information Successfully Update");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <Typography variant="h6">{heading}</Typography>
      <form onSubmit={(event) => event.preventDefault()}>
        {step === 1 && (
          <div>
            <Grid style={{ marginTop: "20px" }} container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography style={{ marginTop: "20px" }} variant="body2" color="textSecondary">
                  Enter your name
                </Typography>
                <TextField
                  sx={{ m: 1, maxWidth: 300 }}
                  fullWidth
                  name="username"
                  label="Name"
                  value={userData.username}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography style={{ marginTop: "20px" }} variant="body2" color="textSecondary">
                  ස්ත්‍රී/පුරුෂ
                </Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">ස්ත්‍රී/පුරුෂ</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Gender"
                    name="gender"
                    value={userData.gender}
                    onChange={handleChange}
                  >
                    <MenuItem value="ස්ත්‍රී">ස්ත්‍රී</MenuItem>
                    <MenuItem value="පුරුෂ">පුරුෂ</MenuItem>
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
                <Typography style={{ marginTop: "20px" }} variant="body2" color="textSecondary">
                  Select your District
                </Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">District</InputLabel>
                  <Select
                    fullWidth
                    name="district"
                    label="district"
                    type="district"
                    value={userData.district}
                    onChange={handleChange}
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value="කොළඹ">කොළඹ</MenuItem>
                    <MenuItem value="ගම්පහ">ගම්පහ</MenuItem>
                    <MenuItem value="කළුතර">කළුතර</MenuItem>
                    <MenuItem value="මහනුවර">මහනුවර</MenuItem>
                    <MenuItem value="මාතලේ">මාතලේ</MenuItem>
                    <MenuItem value="නුවර එළිය">නුවර එළිය</MenuItem>
                    <MenuItem value="ගාල්">ගාල්</MenuItem>
                    <MenuItem value="මාතර">මාතර</MenuItem>
                    <MenuItem value="හම්බන්තොට">හම්බන්තොට</MenuItem>
                    <MenuItem value="යාපනය">යාපනය</MenuItem>
                    <MenuItem value="කිලිනොච්චි">කිලිනොච්චි</MenuItem>
                    <MenuItem value="මන්නාරම">මන්නාරම</MenuItem>
                    <MenuItem value="වවුනියා">වවුනියා</MenuItem>
                    <MenuItem value="මුලතිවු">මුලතිවු</MenuItem>
                    <MenuItem value="මඩකලපුව">මඩකලපුව</MenuItem>
                    <MenuItem value="අම්පාර">අම්පාර</MenuItem>
                    <MenuItem value="ත්‍රිකුණාමලය">ත්‍රිකුණාමලය</MenuItem>
                    <MenuItem value="කුරුණෑගල">කුරුණෑගල</MenuItem>
                    <MenuItem value="පුත්තලම">පුත්තලම</MenuItem>
                    <MenuItem value="අනුරාධපුරය">අනුරාධපුරය</MenuItem>
                    <MenuItem value="පොළොන්නරුව">පොළොන්නරුව</MenuItem>
                    <MenuItem value="බදුල්ල">බදුල්ල</MenuItem>
                    <MenuItem value="මොනරාගල">මොනරාගල</MenuItem>
                    <MenuItem value="රත්නපුර">රත්නපුර</MenuItem>
                    <MenuItem value="කෑගල්ල">කෑගල්ල</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography style={{ marginTop: "20px" }} variant="body2" color="textSecondary">
                  උපන්දිනය
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Select Date"
                    value={userData.birthday}
                    onChange={(date) => setUserData({
...userData, birthday: dayjs(date) })
                    }
                  />
                </LocalizationProvider>
              </Grid>

            </Grid>
           
          </div>
        )}
      </form>
   
      <div style={{ marginTop: "10px" }}>
        {step > 1 && (
          // <button onClick={handlePreviousStep}>Previous Step</button>
          <Button
            variant="contained"
            onClick={handlePreviousStep}
            endIcon={<SkipPreviousIcon />}
            style={{ margin: "10px" }}
          >
            Previous Step
          </Button>
        )}
        {step < 2 ? (
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
            onClick={FormSubmit}
            endIcon={<SendIcon />}

          >
            Finish
          </Button>
        )}
      </div>
    </div>
  );
}
