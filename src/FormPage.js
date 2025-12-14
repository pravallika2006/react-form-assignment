import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const navigate = useNavigate();

  // State to hold all input values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    countryCode: "+91",
    phone: "",
    country: "",
    city: "",
    pan: "",
    aadhaar: "",
  });

  // State to hold error messages
  const [errors, setErrors] = useState({});
  // State for showing/hiding password
  const [showPassword, setShowPassword] = useState(false);
  // State to disable button
  const [isValid, setIsValid] = useState(false);

  // Validate inputs whenever formData changes
  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    let newErrors = {};
    let formIsValid = true;

    if (!formData.firstName) {
      formIsValid = false;
      newErrors.firstName = "First Name is required";
    }
    if (!formData.lastName) {
      formIsValid = false;
      newErrors.lastName = "Last Name is required";
    }
    if (!formData.username) {
      formIsValid = false;
      newErrors.username = "Username is required";
    }

    
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      newErrors.email = "Valid Email is required";
    }

    if (!formData.password || formData.password.length < 6) {
      formIsValid = false;
      newErrors.password = "Password must be at least 6 chars";
    }

    if (!formData.phone || formData.phone.length < 10) {
      formIsValid = false;
      newErrors.phone = "Enter valid phone number";
    }

    if (!formData.country) {
      formIsValid = false;
      newErrors.country = "Country is required";
    }
    if (!formData.city) {
      formIsValid = false;
      newErrors.city = "City is required";
    }

    
    if (!formData.pan || formData.pan.length !== 10) {
      formIsValid = false;
      newErrors.pan = "PAN must be 10 characters";
    }

    
    if (!formData.aadhaar || formData.aadhaar.length !== 12) {
      formIsValid = false;
      newErrors.aadhaar = "Aadhaar must be 12 digits";
    }

    setErrors(newErrors);
    setIsValid(formIsValid);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      navigate("/details", { state: formData });
    }
  };

  return (
    <div className="form-card">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <span className="error">{errors.firstName}</span>
          )}
        </div>

        <div className="input-group">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>

        <div className="input-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="input-group password-group">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="toggle-btn"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
          {errors.password && (
            <span className="error-block">{errors.password}</span>
          )}
        </div>

        <div className="input-group phone-group">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
          >
            <option value="+91">+91 (IND)</option>
            <option value="+1">+1 (USA)</option>
            <option value="+44">+44 (UK)</option>
          </select>
          <input
            type="number"
            name="phone"
            placeholder="Phone No"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        {errors.phone && <span className="error">{errors.phone}</span>}

        <div className="input-group">
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
          />
          {errors.country && <span className="error">{errors.country}</span>}
        </div>

        <div className="input-group">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <span className="error">{errors.city}</span>}
        </div>

        <div className="input-group">
          <input
            type="text"
            name="pan"
            placeholder="PAN Number"
            value={formData.pan}
            onChange={handleChange}
          />
          {errors.pan && <span className="error">{errors.pan}</span>}
        </div>

        <div className="input-group">
          <input
            type="number"
            name="aadhaar"
            placeholder="Aadhaar Number"
            value={formData.aadhaar}
            onChange={handleChange}
          />
          {errors.aadhaar && <span className="error">{errors.aadhaar}</span>}
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className={isValid ? "submit-btn" : "submit-btn disabled"}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;
