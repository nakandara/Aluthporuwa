import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Select, MenuItem, FormControl, InputLabel, Button, Box } from '@mui/material';
import styles from './Modal.module.css'; // Import the CSS module

const ModalPackage = ({ show, onClose, vehicles,selectedPlan,category}) => {
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedSubLocation, setSelectedSubLocation] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const subLocations = {
    'කොළඹ': ['Maharagama', 'Dehiwela'],
    'ගම්පහ': ['Nittambuwa', 'Yakalla'],
    'කුරුණෑගල': ['Ibbagamuwa', 'Mawathagama', 'Kuliyapitiya'],
    // Add other locations and their sub-locations here
  };

  if (!show) {
    return null;
  }

  const handleVehicleChange = (event) => {
    setSelectedVehicle(event.target.value);
    setError(''); // Clear error when a vehicle is selected
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
    setSelectedSubLocation('');
    setError(''); // Clear error when a location is selected
  };

  const handleSubLocationChange = (event) => {
    setSelectedSubLocation(event.target.value);
    setError(''); // Clear error when a sub-location is selected
  };

  const handleNext = () => {
    if (!selectedVehicle || !selectedLocation || !selectedSubLocation) {
      setError('Please select a vehicle, location, and sub-location.');
    } else {
      router.push({
        pathname: '/mypost',
        query: {
            category:category,
            selectedPlan:selectedPlan,
          vehicle: selectedVehicle,
          location: selectedLocation,
          subLocation: selectedSubLocation,

        },
      });
    }
  };

  // List of Sri Lankan districts in Sinhalese
  const locations = [
    'කොළඹ', 'ගම්පහ', 'කලුතර', 'මහනුවර', 'මාතලේ', 'නුවර එළිය',
    'ගාල්ල', 'මාතර', 'හම්බන්තොට', 'යාපනය', 'කිලිනොච්චි', 'මන්නාරම',
    'වවුනියාව', 'මුලතිව්', 'මඩකලපුව', 'ත්‍රිකුණාමලය', 'අම්පාර', 'බදුල්ල',
    'මොණරාගල', 'අනුරාධපුර', 'පොළොන්නරුව', 'පූනාරීන්', 'කුරුණෑගල',
    'පුත්තලම', 'රත්නපුර', 'කෑගල්ල'
  ];

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Select a Vehicle</h2>
        <FormControl fullWidth variant="outlined" className={styles.vehicleDropdown}>
          <InputLabel id="vehicle-label" style={{ color: '#fff' }}>Select a vehicle</InputLabel>
          <Select
            labelId="vehicle-label"
            value={selectedVehicle}
            onChange={handleVehicleChange}
            label="Select a vehicle"
            sx={{
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '.MuiSvgIcon-root ': {
                fill: 'white !important',
              },
              color: 'white',
            }}
          >
            {vehicles.map((vehicle, index) => (
              <MenuItem key={index} value={vehicle}>
                {vehicle}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {selectedVehicle && (
          <FormControl fullWidth variant="outlined" className={styles.locationDropdown}>
            <InputLabel id="location-label" style={{ color: '#fff' }}>Select a location</InputLabel>
            <Select
              labelId="location-label"
              value={selectedLocation}
              onChange={handleLocationChange}
              label="Select a location"
              sx={{
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '.MuiSvgIcon-root ': {
                  fill: 'white !important',
                },
                color: 'white',
              }}
            >
              {locations.map((location, index) => (
                <MenuItem key={index} value={location}>
                  {location}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        {selectedLocation && (
          <FormControl fullWidth variant="outlined" className={styles.subLocationDropdown}>
            <InputLabel id="sub-location-label" style={{ color: '#fff' }}>Select a sub-location</InputLabel>
            <Select
              labelId="sub-location-label"
              value={selectedSubLocation}
              onChange={handleSubLocationChange}
              label="Select a sub-location"
              sx={{
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '.MuiSvgIcon-root ': {
                  fill: 'white !important',
                },
                color: 'white',
              }}
            >
              {subLocations[selectedLocation]?.map((subLocation, index) => (
                <MenuItem key={index} value={subLocation}>
                  {subLocation}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        {error && <div className={styles.error}>{error}</div>}
        <Box className={styles.modalButtons}>
          <Button onClick={onClose} variant="contained" color="primary">
            Close
          </Button>
          <Button onClick={handleNext} variant="contained" color="secondary">
            Next
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default ModalPackage;
