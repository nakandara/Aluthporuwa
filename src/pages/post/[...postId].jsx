import React, { useState, useEffect } from "react";
import LayoutSecond from "../../../components/LayoutSecond/LayoutSecond";
import axios from "axios";
import { environments } from "../../../components/environment/environments";
import ImageGallery from "react-image-gallery";
import styles from "./post.module.css";
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const PostId = ({ postIdData }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [description, setDescription] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [brand, setBrand] = useState("");
  const [engineCapacity, setEngineCapacity] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [mileage, setMileage] = useState("");
  const [model, setModel] = useState("");
  const [transmission, setTransmission] = useState("");
  const [trimEdition, setTrimEdition] = useState("");
  const [yearOfManufacture, setYearOfManufacture] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (postIdData?.allPosts?.[0]?.PostDetails) {
      const postDetails = postIdData.allPosts[0].PostDetails;
      setMobileNumber(postDetails.mobileNumber);
      setCreatedAt(formatDate(postDetails.createdAt));
      setDescription(postDetails.description);
      setTitle(postDetails.title);
      setCity(postDetails.city);
      setBodyType(postDetails.bodyType);
      setBrand(postDetails.brand);
      setEngineCapacity(postDetails.engineCapacity);
      setFuelType(postDetails.fuelType);
      setMileage(postDetails.mileage);
      setModel(postDetails.model);
      setTransmission(postDetails.transmission);
      setTrimEdition(postDetails.trimEdition);
      setYearOfManufacture(postDetails.yearOfManufacture);
      setLoading(false); // Data fetching complete
    }
  }, [postIdData]);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = postIdData?.allPosts?.[0]?.PostDetails?.whatsappNumber;
    if (phoneNumber) {
      const message = "Hello! This is a pre-filled message.";
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    } else {
      console.error("Phone number not available");
    }
  };

  const handleCallClick = () => {
    window.location.href = `tel:${mobileNumber}`;
  };

  return (
    <LayoutSecond>
      {loading ? (
        <Modal
          open={loading}
          aria-labelledby="loading-modal-title"
          aria-describedby="loading-modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <CircularProgress />
            <p>Loading...</p>
          </Box>
        </Modal>
      ) : (
        <div className={styles.PostIdMain}>
          <div className={styles.FirstContent}>
            <div className={styles.imageContainer}>
              <div>
                {postIdData?.allPosts?.map((post, index) => (
                  <div className="image-size" key={index}>
                    <ImageGallery
                      items={post.PostDetails.images.map((image, index) => ({
                        original: image.imageUrl,
                        thumbnail: image.imageUrl,
                      }))}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.imageContainer_content}>
              <div>
                <div className={styles.postIdHeading}>{title}</div>
                <div className={styles.subtitle}>
                  Posted on {createdAt}, <strong>{city}</strong>
                </div>
                <div className={styles.horizontalLine}></div>
                <div className={styles.postIdPhoneNumber}>Phone Number {mobileNumber}</div>
                <div className={styles.postIdDetails}>
                  <div><strong>Body Type:</strong> {bodyType}</div>
                  <div><strong>Brand:</strong> {brand}</div>
                  <div><strong>Engine Capacity:</strong> {engineCapacity}</div>
                  <div><strong>Fuel Type:</strong> {fuelType}</div>
                  <div><strong>Mileage:</strong> {mileage}</div>
                  <div><strong>Model:</strong> {model}</div>
                  <div><strong>Transmission:</strong> {transmission}</div>
                  <div><strong>Trim Edition:</strong> {trimEdition}</div>
                  <div><strong>Year of Manufacture:</strong> {yearOfManufacture}</div>
                </div>
              </div>
              <div>
                <div className={styles.postIdDescription}>Description</div>
                <div
                  className={styles.postIdDescription_content}
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>
            </div>
          </div>
          <div className={styles.SecondContent}>
            <button className={styles.action_buttons} onClick={handleWhatsAppClick}>
              <div className={styles.contact_options}>
                <div className={styles.btn}>
                  <img
                    className="socialImages"
                    src={`/media/icons8-whatsapp-48.png`}
                    alt="WhatsApp"
                  />
                </div>
                <div className={styles.btn} onClick={handleCallClick}>
                  <img
                    className="socialImages"
                    src={`/media/icons8-call-64.png`}
                    alt="Call"
                  />
                </div>
              </div>
            </button>
          </div>
          <div className={styles.ThirdContent}></div>
        </div>
      )}
    </LayoutSecond>
  );
};

export async function getServerSideProps(context) {
  const { postId } = context.query;
  let postIdData = {};

  try {
    const response = await axios.get(`${environments.BASE_HOST_URL}/api/getPost/${postId}`);
    if (response.data) {
      postIdData = response.data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      postIdData,
    },
  };
}

export default PostId;
