import React, { useState, useEffect,useRef } from 'react';
import Swal from 'sweetalert2';
import MobileProtectedRoute from '../../../components/protect/mobileProtectRoute';
import { environments } from '../../../components/environment/environments';
import axios from 'axios';
import { useToken } from '../../context/TokenContext';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import imageCompression from 'browser-image-compression';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Grid,
  Card,
  CardMedia,
  RadioGroup,
  FormControlLabel,
  Radio,
    IconButton,
} from '@mui/material';
import LayoutSecond from '../../../components/LayoutSecond/LayoutSecond';
import DeleteIcon from '@mui/icons-material/Delete';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const Index = () => {
  const fileInputRef = useRef(null);
  const { user } = useToken();
  const router = useRouter();
  const [formData, setFormData] = useState({
    userId: '',
    condition: '',
    brand: '',
    model: '',
    trimEdition: '',
    yearOfManufacture: '',
    mileage: '',
    engineCapacity: '',
    fuelType: '',
    transmission: '',
    bodyType: '',
    description: '',
    price: '',
    negotiable: false,
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      userId: user.userId,
      [name]: value,
    }));
  };

  const { selectedPlan, vehicle, location, subLocation } = router.query;

  console.log(router.query, "router.query");

  useEffect(() => {
    if (selectedPlan) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        plane: selectedPlan,
      }));
      console.log(`Selected Plan: ${selectedPlan}`);
    }
  }, [selectedPlan]);

  const handleDescriptionChange = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      description: value,
    }));
  };
  const handleRemoveImage = (index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: prevFormData.images.filter((_, i) => i !== index),
    }));
  };
  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);
    const totalImages = formData.images.length + files.length;

    if (totalImages > 4) {
      Swal.fire({
        icon: 'warning',
        title: 'Image Upload Limit',
        text: 'You can only upload a maximum of 4 images.',
      });
      return;
    }

    const compressedImages = await Promise.all(
      files.map(async (file) => {
        const options = {
          maxSizeMB: 2,
          maxWidthOrHeight: 1024,
          useWebWorker: true,
        };
        try {
          const compressedFile = await imageCompression(file, options);
          return compressedFile;
        } catch (error) {
          console.error('Error compressing file:', error);
          return file;
        }
      })
    );

    setFormData((prevFormData) => ({
      ...prevFormData,
      images: [...prevFormData.images, ...compressedImages],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = new FormData();
      for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
          if (key === 'images') {
            formData[key].forEach((file) => postData.append('image', file));
          } else {
            postData.append(key, formData[key]);
          }
        }
      }
      const response = await axios.post(
        `${environments.BASE_HOST_LOCAL_URL}/api/createPost`,
        postData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      console.log(response.data.post.postId);
      console.log(JSON.stringify(response, null, 2), '44444444');
      if (response.data) {
        router.push(`/mypost/${response.data.post.postId}`);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title:
            'Add Your New Post To Pending Dashboard. Please complete payment to put it live.',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LayoutSecond>
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 2 }}>
      <Grid container direction='column' spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant='h4'
            component='h1'
            gutterBottom
            sx={{
              fontSize: { xs: '24px', sm: '28px', md: '32px' },
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'black',
              marginTop: '80px',
            }}
          >
            Create Your Ad / ඔබේ වෙළඳ දැන්වීම සාදන්න
          </Typography>
        </Grid>
        <Grid
          sx={{
            fontSize: { xs: '14px', sm: '18px', md: '22px' },
            color: 'black',
            textAlign: 'right',
          }}
          item
          xs={12}
        >
          <Typography
            variant='h4'
            component='h4'
            gutterBottom
            sx={{ fontSize: { xs: '12px', sm: '16px', md: '20px' } }} // Adjust font size here
          >
            <img
              style={{ width: '30px', height: '30px' }}
              src='/media/placeholder_117967.png'
              alt='Location Icon'
              className='card-icon'
            />{' '}
            {location}/{subLocation}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <FormControl component='fieldset'>
              <div style={{ color: 'black' }}> Condition</div>
              <RadioGroup
                row
                name='condition'
                value={formData.condition}
                onChange={handleChange}
              >
                <FormControlLabel
                  value='New'
                  control={<Radio />}
                  label='New'
                />
                <FormControlLabel
                  value='Used'
                  control={<Radio />}
                  label='Used'
                />
                <FormControlLabel
                  value='Reconditioned'
                  control={<Radio />}
                  label='Reconditioned'
                />
              </RadioGroup>
            </FormControl>
            <TextField
              fullWidth
              margin='normal'
              label='Brand'
              name='brand'
              value={formData.brand}
              onChange={handleChange}
              variant='outlined'
              placeholder='Enter your brand'
            />
            <TextField
              fullWidth
              margin='normal'
              label='Model'
              name='model'
              value={formData.model}
              onChange={handleChange}
              variant='outlined'
              placeholder='Enter your model'
            />
            <TextField
              fullWidth
              margin='normal'
              label='Trim/Edition'
              name='trimEdition'
              value={formData.trimEdition}
              onChange={handleChange}
              variant='outlined'
              placeholder='Enter your trim/edition'
            />
            <TextField
              fullWidth
              margin='normal'
              label='Year of Manufacture'
              name='yearOfManufacture'
              value={formData.yearOfManufacture}
              onChange={handleChange}
              variant='outlined'
              placeholder='Enter your year of manufacture'
            />
            <TextField
              fullWidth
              margin='normal'
              label='Mileage'
              name='mileage'
              value={formData.mileage}
              onChange={handleChange}
              variant='outlined'
              placeholder='Enter your mileage'
            />
            <TextField
              fullWidth
              margin='normal'
              label='Engine Capacity'
              name='engineCapacity'
              value={formData.engineCapacity}
              onChange={handleChange}
              variant='outlined'
              placeholder='Enter your engine capacity'
            />
            <TextField
              fullWidth
              margin='normal'
              label='Fuel Type'
              name='fuelType'
              value={formData.fuelType}
              onChange={handleChange}
              variant='outlined'
              placeholder='Enter your fuel type'
            />
            <TextField
              fullWidth
              margin='normal'
              label='Transmission'
              name='transmission'
              value={formData.transmission}
              onChange={handleChange}
              variant='outlined'
              placeholder='Enter your transmission'
            />
            <TextField
              fullWidth
              margin='normal'
              label='Body Type'
              name='bodyType'
              value={formData.bodyType}
              onChange={handleChange}
              variant='outlined'
              placeholder='Enter your body type'
            />
            <ReactQuill
              value={formData.description}
              onChange={handleDescriptionChange}
              theme='snow'
              placeholder='Enter your description'
              style={{ marginBottom: '16px' }}
            />
            <TextField
              fullWidth
              margin='normal'
              label='Price'
              name='price'
              value={formData.price}
              onChange={handleChange}
              variant='outlined'
              placeholder='Enter your price'
            />
            <FormControlLabel
              control={
                <Radio
                  checked={formData.negotiable}
                  onChange={(e) =>
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      negotiable: e.target.checked,
                    }))
                  }
                  name='negotiable'
                  color='primary'
                />
              }
              label='Negotiable'
            />
            <Box my={2}>
              <input
                type='file'
                accept='image/*'
                multiple
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
              />
              <Button
                variant='outlined'
                onClick={() => fileInputRef.current.click()}
              >
                Upload Images
              </Button>
              <Box mt={2}>
              <Grid container spacing={2} sx={{ marginTop: '20px' }}>
                {formData.images.map((image, index) => (
                  <Grid item xs={6} key={index}>
                    <Card>
                      <CardMedia
                        component='img'
                        height='140'
                        image={URL.createObjectURL(image)}
                        alt={`Image ${index + 1}`}
                      />
                      <IconButton
                        aria-label='delete'
                        onClick={() => handleRemoveImage(index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              </Box>
            </Box>
            <TextField
              fullWidth
              margin='normal'
              label='Mobile Number'
              name='mobileNumber'
              value={formData.mobileNumber}
              onChange={handleChange}
              variant='outlined'
              placeholder='Enter your mobile number'
            />
            <TextField
              fullWidth
              margin='normal'
              label='WhatsApp Number'
              name='whatsappNumber'
              value={formData.whatsappNumber}
              onChange={handleChange}
              variant='outlined'
              placeholder='Enter your WhatsApp number'
            />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              fullWidth
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  </LayoutSecond>
  );
};

export default Index;

