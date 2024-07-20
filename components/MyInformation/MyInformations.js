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
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useToken } from "../../src/context/TokenContext";
import { environments } from "../../components/environment/environments";

export default function MyInformations({ name, data }) {
  const { user, token } = useToken();
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
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [loading, setLoading] = useState(false);

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
    if (step === 1 && !userData.username) {
      alert("Please enter your name before proceeding.");
      return;
    }
    setHeading(`My Information Step 0${step + 1}`);
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
      setHeading(`My Information Step 0${step}`);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const FormSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${GetUserUrl}/${user.userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data;
      console.log(data, "AlreadyUse");

      const AlreadyUse = await axios.get(`${GetProfileUrl}/${user.userId}`);
      console.log(AlreadyUse.data, "AlreadyUseProfileData");

      if (!AlreadyUse.data.success) {
        const apiUrl = `${environments.BASE_HOST_URL}/api/createProfile`;
        await axios.post(apiUrl, userData);
        console.log("Information Successfully Created");
        setSnackbarMessage("Information Successfully Created");
        setSnackbarSeverity("success");
      } else {
        const apiUrlAlreadyUse = `${environments.BASE_HOST_URL}/api/updateProfile/${user.userId}`;
        await axios.post(apiUrlAlreadyUse, userData);
        console.log("Information Successfully Updated");
        setSnackbarMessage("Information Successfully Updated");
        setSnackbarSeverity("success");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setSnackbarMessage("Error submitting information");
      setSnackbarSeverity("error");
    } finally {
      setLoading(false);
      setSnackbarOpen(true);
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
                <Typography
                  style={{ marginTop: "20px" }}
                  variant="body2"
                  color="textSecondary"
                >
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
                <Typography
                  style={{ marginTop: "20px" }}
                  variant="body2"
                  color="textSecondary"
                >
                  Male/Female
                </Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Gender
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Gender"
                    name="gender"
                    value={userData.gender}
                    onChange={handleChange}
                  >
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
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
                    <MenuItem value="kolamba">කොළඹ (Colamba)</MenuItem>
                    <MenuItem value="gampaha">ගම්පහ (Gampaha)</MenuItem>
                    <MenuItem value="kalutara">කළුතර (Kalutara)</MenuItem>
                    <MenuItem value="mahanuwara">මහනුවර (Mahanuwara)</MenuItem>
                    <MenuItem value="mathale">මාතලේ (Mathale)</MenuItem>
                    <MenuItem value="nuwara-eliya">
                      නුවර එළිය (Nuwara Eliya)
                    </MenuItem>
                    <MenuItem value="galle">ගාල් (Galle)</MenuItem>
                    <MenuItem value="matara">මාතර (Matara)</MenuItem>
                    <MenuItem value="hambantota">
                      හම්බන්තොට (Hambantota)
                    </MenuItem>
                    <MenuItem value="jaffna">යාපනය (Jaffna)</MenuItem>
                    <MenuItem value="kilinochchi">
                      කිලිනොච්චි (Kilinochchi)
                    </MenuItem>
                    <MenuItem value="mannar">මන්නාරම (Mannar)</MenuItem>
                    <MenuItem value="vavuniya">වවුනියා (Vavuniya)</MenuItem>
                    <MenuItem value="mullaitivu">මුලතිවු (Mullaitivu)</MenuItem>
                    <MenuItem value="batticaloa">මඩකලපුව (Batticaloa)</MenuItem>
                    <MenuItem value="ampara">අම්පාර (Ampara)</MenuItem>
                    <MenuItem value="trincomalee">
                      ත්‍රිකුණාමලය (Trincomalee)
                    </MenuItem>
                    <MenuItem value="kurunegala">
                      කුරුණෑගල (Kurunegala)
                    </MenuItem>
                    <MenuItem value="puttalam">පුත්තලම (Puttalam)</MenuItem>
                    <MenuItem value="anuradhapura">
                      අනුරාධපුර (Anuradhapura)
                    </MenuItem>
                    <MenuItem value="polonnaruwa">
                      පොලොන්නරුව (Polonnaruwa)
                    </MenuItem>
                    <MenuItem value="badulla">බදුල්ල (Badulla)</MenuItem>
                    <MenuItem value="monaragala">මොනරාගල (Monaragala)</MenuItem>
                    <MenuItem value="ratnapura">රත්නපුර (Ratnapura)</MenuItem>
                    <MenuItem value="kegalle">කෑගල්ල (Kegalle)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography
                  style={{ marginTop: "20px" }}
                  variant="body2"
                  color="textSecondary"
                >
                  Birthday
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Select Date"
                    value={userData.birthday}
                    onChange={(date) =>
                      setUserData({
                        ...userData,
                        birthday: dayjs(date),
                      })
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

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
