import React, { useState, useEffect } from "react";
import axios from "axios";

// AdditionalInformation component to handle personal info form
const AdditionalInformation = ({
  personalInfo,
  handleChange,
  personalInfoChange,
  personalInfoSubmit,
}) => (
  <div>
    <form>
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={personalInfo.fullName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
          type="text"
          id="dateOfBirth"
          name="dateOfBirth"
          value={personalInfo.dateOfBirth}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <input
          type="text"
          id="gender"
          name="gender"
          value={personalInfo.gender}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={personalInfo.address}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={personalInfo.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={personalInfo.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="currentAddress">Current Address:</label>
        <input
          type="text"
          id="currentAddress"
          name="currentAddress"
          value={personalInfo.currentAddress}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="permanentAddress">Permanent Address:</label>
        <input
          type="text"
          id="permanentAddress"
          name="permanentAddress"
          value={personalInfo.permanentAddress}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="occupation">Occupation:</label>
        <input
          type="text"
          id="occupation"
          name="occupation"
          value={personalInfo.occupation}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="jobTitle">Job Title:</label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={personalInfo.jobTitle}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="homeNumber">Home Number:</label>
        <input
          type="text"
          id="homeNumber"
          name="homeNumber"
          value={personalInfo.homeNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="highestEducation">Highest Education:</label>
        <input
          type="text"
          id="highestEducation"
          name="highestEducation"
          value={personalInfo.highestEducation}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="universityName">University Name:</label>
        <input
          type="text"
          id="universityName"
          name="universityName"
          value={personalInfo.universityName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="degrees">Degrees:</label>
        <input
          type="text"
          id="degrees"
          name="degrees"
          value={personalInfo.degrees}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="graduationDate">Graduation Date:</label>
        <input
          type="text"
          id="graduationDate"
          name="graduationDate"
          value={personalInfo.graduationDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="previousJobs">Previous Jobs:</label>
        <input
          type="text"
          id="previousJobs"
          name="previousJobs"
          value={personalInfo.previousJobs}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="companyNames">Company Names:</label>
        <input
          type="text"
          id="companyNames"
          name="companyNames"
          value={personalInfo.companyNames}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="companyNames">Employment Dates:</label>
        <input
          type="Date"
          id="EmploymentDates"
          name="EmploymentDates"
          value={personalInfo.EmploymentDates}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="jobResponsibilities">job Responsibilities:</label>
        <input
          type="text"
          id="jobResponsibilities"
          name="jobResponsibilities"
          value={personalInfo.jobResponsibilities}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="technicalSkills">technical Skills:</label>
        <input
          type="text"
          id="technicalSkills"
          name="technicalSkills"
          value={personalInfo.technicalSkills}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="soft Skills">soft Skills:</label>
        <input
          type="text"
          id="softSkills"
          name="softSkills"
          value={personalInfo.softSkills}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="certification">certification:</label>
        <input
          type="text"
          id="certification"
          name="certification"
          value={personalInfo.certification}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="spokenLanguage">spoken Language:</label>
        <input
          type="text"
          id="spokenLanguage"
          name="spokenLanguage"
          value={personalInfo.spokenLanguage}
          onChange={handleChange}
        />
      </div>
      <button onClick={personalInfoSubmit}>Submit</button>
    </form>
  </div>
);

// RoleAssignment component to handle role selection form
const RoleAssignment = ({ setSelectedRole, addRole }) => (
  <div>
    <h1>Additional Information</h1>
    <form>
      <label htmlFor="selectOption">Select a Role:</label>
      <select
        id="selectOption"
        name="selectOption"
        onChange={(e) => setSelectedRole(e.target.value)}
      >
        <option value="JOB_SEEKER">JOB_SEEKER</option>
        <option value="JOB_MAKER">JOB_MAKER</option>
        {/* Add more options as needed */}
      </select>
      <button type="button" onClick={addRole}>
        Submit
      </button>
    </form>
  </div>
);

const RegistrationUser = ({ handleChange, formData, handleSubmit }) => (
  <div>
    <h1 className="header_about">Registration</h1>
    <div>
      <h1 className="header_about">Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
);

const EmailVerification = ({
  emailVerificationSentChange,
  emailVerificationData,
  emailVerifySubmit,
}) => (
  <div>
    <h1>Email Information</h1>
    <form>
      <label htmlFor="selectOption">Email Verification Role:</label>
      <div className="form-group">
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={emailVerificationData.email}
          onChange={emailVerificationSentChange}
          required
        />
      </div>
      <button onClick={emailVerifySubmit} type="button">
        Submit
      </button>
    </form>
  </div>
);

const SendOTP = ({ OTPSubmit, oTPData, OtpHandleChange }) => (
  <div>
    <h1>Send OTP</h1>
    <form>
      <label htmlFor="selectOption">OTP Verification Role:</label>
      <div className="form-group">
        <label htmlFor="otp">Enter OTP Number:</label>
        <input
          type="number"
          id="otp"
          name="otp"
          value={oTPData.otp}
          onChange={OtpHandleChange}
        />
      </div>
      <button onClick={OTPSubmit} type="button">
        Submit
      </button>
    </form>
  </div>
);

const KycVerification = ({handleUpload,handleFileChange}) => (
  <div>
    <h1>Kyc Verification</h1>
    <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Profile Image</button>
  </div>
);

const Registration = () => {
  const [userData, setUserData] = useState(null);
  const [userID, setUserID] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    birthday: "",
    address: "",
  });

  const [emailVerificationData, setEmailVerificationData] = useState({
    email: "",
    userId: userID,
  });

  const [oTPData, setOtpData] = useState({
    userId: userID,
    email: emailVerificationData.email,
    otp: "",
  });
  const [personalInfo, setPersonalInfo] = useState({
    userId: userID,
    fullName: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    phoneNumber: "",
    email: "",
    currentAddress: "",
    permanentAddress: "",
    occupation: "",
    jobTitle: "",
    homeNumber: "",
    highestEducation: "",
    universityName: "",
    degrees: "",
    graduationDate: "",
    previousJobs: "",
    companyNames: "",
    EmploymentDates: "",
    jobResponsibilities: "",
    technicalSkills: "",
    softSkills: "",
    certification: "",
    spokenLanguage: "",
  });
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [isTrueVerifyEmail, setIsTrueVerifyEmail] = useState(false);
  const [selectedRole, setSelectedRole] = useState("JOB_SEEKER");
  const [submitted, setSubmitted] = useState(false);
  const [roleAssigned, setRoleAssigned] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [personalInfoAssigned, setPersonalInfoAssigned] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const personalInfoChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
  };

  const emailVerificationSentChange = (e) => {
    setEmailVerificationData({
      ...emailVerificationData,
      [e.target.name]: e.target.value,
    });
  };

  const OtpHandleChange = (e) => {
    setOtpData({
      ...oTPData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getUserId = localStorage.getItem("userId");
        setUserID(getUserId);

        if (getUserId) {
          setShowAdditionalFields(true);
          setPersonalInfo((prevPersonalInfo) => ({
            ...prevPersonalInfo,
            userId: getUserId,
          }));
          setEmailVerificationData((prevEmailVerification) => ({
            ...prevEmailVerification,
            userId: getUserId,
          }));
          setOtpData({
            ...oTPData,
            userId: getUserId,
            email: emailVerificationData.email,
          });
        } else {
          setShowAdditionalFields(false);
        }
        const response = await axios.get(
          `http://localhost:8080/users/role/${userID}`
        );

        const responsePersonalInfo = await axios.get(
          `http://localhost:8080/users/getUserInfo/${userID}`
        );

        const getUser = await axios.get(
          `http://localhost:8080/users/${userID}`
        );

        const afterGetUser = getUser.data.status;
        const afterGetEmailVErify = getUser.data.verify;
        console.log(getUser, "ooooooooooooooooooooyyyyyyyyyy");
        const role = response.data.userId;
        const PersonalInfo = responsePersonalInfo.data.id;

        if (role) {
          setRoleAssigned(true);
        } else {
          setRoleAssigned(false);
        }
        if (PersonalInfo) {
          setPersonalInfoAssigned(true);
        } else {
          setPersonalInfoAssigned(false);
        }
        if (afterGetUser) {
          setVerifyEmail(true);
        } else {
          setVerifyEmail(false);
        }
        if (afterGetEmailVErify) {
          setIsTrueVerifyEmail(true);
        } else {
          setIsTrueVerifyEmail(false);
        }
      } catch (error) {
        console.error(
          "Error fetching user data:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchData();
  }, [
    showAdditionalFields,
    userID,
    emailVerificationData.email,
    setIsTrueVerifyEmail,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/users/register",
        formData
      );

      if (response.data.userId) {
        setShowAdditionalFields(true);
        localStorage.setItem("userId", response.data.userId);
        console.log("Registration successful. User ID:", response.data.userId);
      } else {
        console.error("Registration failed: User ID not found in the response");
      }
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const emailVerifySubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/users/sendVerifyEmail",
        emailVerificationData
      );

      if (response.data.userId) {
        setIsTrueVerifyEmail(true);
        // localStorage.setItem("userId", response.data.userId);
        console.log("Registration successful. User ID:", response.data.userId);
      } else {
        console.error("Registration failed: User ID not found in the response");
      }
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const OTPSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/users/verifyEmail",
        oTPData
      );

      if (response) {
        setVerifyEmail(true);
        // localStorage.setItem("userId", response.data.userId);
        alert("successful Verify Your Account");
        console.log("Registration successful. User ID:", response.data.userId);
      } else {
        console.error("Registration failed: User ID not found in the response");
      }
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const addRole = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/users/assignRole",
        {
          userId: userID,
          role: selectedRole,
        }
      );

      console.log("Response:", response.data);

      setRoleAssigned(true);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const personalInfoSubmit = async (e) => {
    e.preventDefault();

    try {
      if (personalInfo.userId) {
        await axios.post(
          `http://localhost:8080/users/create-userInfo`,
          personalInfo
        );
      } else {
        const response = await axios.post(
          "http://localhost:8080/personal-info",
          personalInfo
        );
        setPersonalInfo(response.data);
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', selectedFile);

      // Replace 'YOUR_NEST_BACKEND_URL' with the actual URL of your Nest.js backend
      const response = await axios.post(`http://localhost:8080/users/${userID}/upload-profile-image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Upload successful:', response.data);
    } catch (error) {
      console.error('Upload failed:', error.response ? error.response.data : error.message);
    }
  };
  const renderSection = () => {
    if (showAdditionalFields) {
      if (roleAssigned) {
        if (personalInfoAssigned) {
          if (isTrueVerifyEmail) {
            return verifyEmail ? <KycVerification handleUpload={handleUpload} handleFileChange={handleFileChange} /> : <SendOTP OtpHandleChange={OtpHandleChange} oTPData={oTPData} OTPSubmit={OTPSubmit} />;
          } else {
            return <EmailVerification emailVerificationSentChange={emailVerificationSentChange} emailVerificationData={emailVerificationData} emailVerifySubmit={emailVerifySubmit} />;
          }
        } else {
          return <AdditionalInformation personalInfo={personalInfo} handleChange={personalInfoChange} personalInfoSubmit={personalInfoSubmit} />;
        }
      } else {
        return <RoleAssignment setSelectedRole={setSelectedRole} addRole={addRole} />;
      }
    } else {
      return (
        <div>
          <h1 className="header_about">Registration</h1>
          <RegistrationUser handleChange={handleChange} formData={formData} handleSubmit={handleSubmit} />
        </div>
      );
    }
  };

  return (
    <div
      className="multi-color-gradient"
      style={{ marginTop: "50px", height: "100vh" }}
    >
      <div className="multi-color-gradient" style={{ marginTop: "50px", height: "100vh" }}>
      {renderSection()}
    </div>
    </div>
  );
};

export default Registration;
