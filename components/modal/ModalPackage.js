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
    'Colombo': ["Angoda",
    "Athurugiriya",
    "Avissawella",
    "Battaramulla",
    "Boralesgamuwa",
    "Colombo 1",
    "Colombo 10",
    "Colombo 11",
    "Colombo 12",
    "Colombo 13",
    "Colombo 14",
    "Colombo 15",
    "Colombo 2",
    "Colombo 3",
    "Colombo 4",
    "Colombo 5",
    "Colombo 6",
    "Colombo 7",
    "Colombo 8",
    "Colombo 9",
    "Godagama",
    "Hanwella",
    "Homagama",
    "Kaduwela",
    "Kesbewa",
    "Kohuwala",
    "Kolonnawa",
    "Kottawa",
    "Kotte",
    "Malabe",
    "Meegoda",
    "Moratuwa",
    "Mount Lavinia",
    "Nawala",
    "Padukka",
    "Pannipitiya",
    "Rajagiriya",
    "Ratmalana",
    "Talawatugoda",
    "Wellampitiya",
    "Maharagama",
    "Nugegoda",
    "Piliyandala",
    "Dehiwala"],
    'Gampaha': ['Nittambuwa', 'Negombo', 'Kadawatha', 'Kiribathgoda', 'Ragama', 'Wattala', 'Ja-Ela'],
  'Kalutara': ['Panadura', 'Kalutara South', 'Beruwala', 'Wadduwa', 'Horana', 'Aluthgama', 'Matugama'],
  'Kandy': ['Peradeniya', 'Katugastota', 'Digana', 'Gampola', 'Nawalapitiya', 'Pilimathalawa', 'Kadugannawa'],
  'Matale': ['Dambulla', 'Ukuwela', 'Rattota', 'Galewela', 'Pallepola', 'Sigiriya', 'Yatawatta'],
  'Nuwara Eliya': ['Hatton', 'Nanu Oya', 'Talawakele', 'Ragala', 'Walapane', 'Maskeliya', 'Haputale'],
  'Galle': ['Hikkaduwa', 'Unawatuna', 'Karapitiya', 'Baddegama', 'Ambalangoda', 'Bentota', 'Elpitiya'],
  'Matara': ['Weligama', 'Akurugoda', 'Athuraliya', 'Hakmana', 'Devinuwara', 'Kamburupitiya', 'Dickwella'],
  'Hambantota': ['Tangalle', 'Tissamaharama', 'Ambalantota', 'Weeraketiya', 'Beliatta', 'Walasmulla', 'Sooriyawewa'],
  'Jaffna': ['Chavakachcheri', 'Point Pedro', 'Nallur', 'Kopay', 'Karainagar', 'Velanai', 'Kankesanthurai'],
  'Kilinochchi': ['Poonakari', 'Karachchi', 'Pallai', 'Kandawalai', 'Paranthan', 'Murukandy', 'Kilinochchi Town'],
  'Mannar': ['Madhu', 'Musali', 'Nanattan', 'Manthai West', 'Manthai East', 'Vavuniya South', 'Adampan'],
  'Vavuniya': ['Nedunkerny', 'Vavuniya South', 'Vavuniya North', 'Vengalacheddikulam', 'Settikulam', 'Omanthai', 'Cheddikulam'],
  'Mullaitivu': ['Puthukkudiyiruppu', 'Thunukkai', 'Oddusuddan', 'Mallavi', 'Mullaitivu Town', 'Maritimepattu', 'Manthai East'],
  'Batticaloa': ['Kattankudy', 'Eravur', 'Valaichchenai', 'Kaluwanchikudy', 'Arayampathy', 'Vavunathivu', 'Oddamavadi'],
  'Trincomalee': ['Kinniya', 'Muttur', 'Kuchchaveli', 'Kantalai', 'Seruvila', 'Pulmoddai', 'Sampur'],
  'Ampara': ['Akkaraipattu', 'Sammanthurai', 'Kalmunai', 'Uhana', 'Dehiattakandiya', 'Pottuvil', 'Addalachchenai'],
  'Badulla': ['Bandarawela', 'Welimada', 'Ella', 'Hali-Ela', 'Mahiyanganaya', 'Passara', 'Haputale'],
  'Monaragala': ['Wellawaya', 'Bibile', 'Medagama', 'Madulla', 'Siyambalanduwa', 'Buttala', 'Kataragama'],
  'Anuradhapura': ['Kekirawa', 'Eppawala', 'Mihintale', 'Medawachchiya', 'Tambuttegama', 'Thirappane', 'Nochchiyagama'],
  'Polonnaruwa': ['Medirigiriya', 'Hingurakgoda', 'Dimbulagala', 'Elahera', 'Welikanda', 'Giritale', 'Aralaganwila'],
  'Puttalam': ['Chilaw', 'Wennappuwa', 'Anamaduwa', 'Marawila', 'Nattandiya', 'Pallama', 'Dankotuwa'],
  'Kurunegala': ['Ibbagamuwa', 'Mawathagama', 'Kuliyapitiya', 'Pannala', 'Polgahawela', 'Alawwa', 'Narammala'],
  'Ratnapura': ['Pelmadulla', 'Kuruwita', 'Balangoda', 'Embilipitiya', 'Godakawela', 'Kalawana', 'Eheliyagoda'],
  'Kegalle': ['Mawanella', 'Warakapola', 'Rambukkana', 'Deraniyagala', 'Bulathkohupitiya', 'Aranayaka', 'Yatiyanthota']
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
    'Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Matale', 'Nuwara Eliya',
    'Galle', 'Matara', 'Hambantota', 'Jaffna', 'Kilinochchi', 'Mannar',
    'Vavuniya', 'Mullaitivu', 'Batticaloa', 'Trincomalee', 'Ampara', 'Badulla',
    'Monaragala', 'Anuradhapura', 'Polonnaruwa', 'Poonakari', 'Kurunegala',
    'Puttalam', 'Ratnapura', 'Kegalle'
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
