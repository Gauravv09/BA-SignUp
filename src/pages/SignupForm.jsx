import React, { useState } from 'react';
import '../styles/signupform.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    baEmail: '',
    employeeId: '',
    firstName: '',
    lastName: '',
    title: '',
    mobileNumber: '',
    dateOfJoining: '',
    gender: '',
    bloodGroup: '',
    dateOfBirth: '',
    placeOfBirth: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    emergencyContactRelationship: '',
    organizationName: 'Blue Altair',
    capabilityName: '',
    baseLocation: '',
    careerManager: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.baEmail) newErrors.baEmail = 'BA Email is required';
    if (!formData.employeeId) newErrors.employeeId = 'Employee ID is required';
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.mobileNumber) newErrors.mobileNumber = 'Mobile Number is required';
    if (!formData.dateOfJoining) newErrors.dateOfJoining = 'Date of Joining is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.bloodGroup) newErrors.bloodGroup = 'Blood Group is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required';
    if (!formData.placeOfBirth) newErrors.placeOfBirth = 'Place of Birth is required';
    if (!formData.emergencyContactName) newErrors.emergencyContactName = 'Emergency Contact Name is required';
    if (!formData.emergencyContactNumber) newErrors.emergencyContactNumber = 'Emergency Contact Number is required';
    if (!formData.emergencyContactRelationship) newErrors.emergencyContactRelationship = 'Emergency Contact Relationship is required';
    if (!formData.capabilityName) newErrors.capabilityName = 'Capability Name is required';
    if (!formData.baseLocation) newErrors.baseLocation = 'Base Location is required';
    if (!formData.careerManager) newErrors.careerManager = 'Career Manager is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", formData);
      setIsSubmitted(true);
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Signup Form</h2>

        {isSubmitted && <div className="success-message">Signed up successfully!</div>}

        {/* Account Details Section */}
        <div className="form-section">
          <h3 className="subsection-title">Account Details</h3>
          
          <div className="grid-container">
            <div className="form-group">
              <label className="form-label">BA Email</label>
              <input 
                type="email" 
                className="form-input"
                name="baEmail"
                value={formData.baEmail}
                onChange={handleChange}
                placeholder="firstname.lastname@bluealtair.com"
              />
              {errors.baEmail && <span className="error-message">{errors.baEmail}</span>}
            </div>
            
            <div className="form-group">
              <label className="form-label">Employee ID</label>
              <input 
                type="text" 
                className="form-input"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
              />
              {errors.employeeId && <span className="error-message">{errors.employeeId}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">First Name</label>
              <input 
                type="text" 
                className="form-input"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Last Name</label>
              <input 
                type="text" 
                className="form-input"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Title</label>
              <input 
                type="text" 
                className="form-input"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
              {errors.title && <span className="error-message">{errors.title}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Mobile Number</label>
              <input 
                type="tel" 
                className="form-input"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="10-digit number"
              />
              {errors.mobileNumber && <span className="error-message">{errors.mobileNumber}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Date of Joining</label>
              <input 
                type="date" 
                className="form-input"
                name="dateOfJoining"
                value={formData.dateOfJoining}
                onChange={handleChange}
              />
              {errors.dateOfJoining && <span className="error-message">{errors.dateOfJoining}</span>}
            </div>
          </div>
        </div>

        {/* Personal Details Section */}
        <div className="form-section">
          <h3 className="subsection-title">Personal Details</h3>
          
          <div className="grid-container">
            <div className="form-group">
              <label className="form-label">Gender</label>
              <select 
                className="form-select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <span className="error-message">{errors.gender}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Blood Group</label>
              <select 
                className="form-select"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
              {errors.bloodGroup && <span className="error-message">{errors.bloodGroup}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Date of Birth</label>
              <input 
                type="date" 
                className="form-input"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
              {errors.dateOfBirth && <span className="error-message">{errors.dateOfBirth}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Place of Birth</label>
              <input 
                type="text" 
                className="form-input"
                name="placeOfBirth"
                value={formData.placeOfBirth}
                onChange={handleChange}
              />
              {errors.placeOfBirth && <span className="error-message">{errors.placeOfBirth}</span>}
            </div>

            <div className="form-group emergency-contact">
              <h4 className="emergency-contact-title">Emergency Contact</h4>
              <div className="grid-container-3">
                <input 
                  type="text" 
                  placeholder="Contact Name"
                  className="form-input"
                  name="emergencyContactName"
                  value={formData.emergencyContactName}
                  onChange={handleChange}
                />
                {errors.emergencyContactName && <span className="error-message">{errors.emergencyContactName}</span>}
                <input 
                  type="tel" 
                  placeholder="Contact Number"
                  className="form-input"
                  name="emergencyContactNumber"
                  value={formData.emergencyContactNumber}
                  onChange={handleChange}
                />
                {errors.emergencyContactNumber && <span className="error-message">{errors.emergencyContactNumber}</span>}
                <input 
                  type="text" 
                  placeholder="Relationship"
                  className="form-input"
                  name="emergencyContactRelationship"
                  value={formData.emergencyContactRelationship}
                  onChange={handleChange}
                />
                {errors.emergencyContactRelationship && <span className="error-message">{errors.emergencyContactRelationship}</span>}
              </div>
            </div>
          </div>
        </div>

        {/* Organization Details Section */}
        <div className="form-section">
          <h3 className="subsection-title">Organization Details</h3>
          
          <div className="grid-container">
            <div className="form-group">
              <label className="form-label">Organization Name</label>
              <input 
                type="text" 
                value="Blue Altair"
                readOnly
                className="form-input bg-gray-200"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Capability Name</label>
              <input 
                type="text" 
                className="form-input"
                name="capabilityName"
                value={formData.capabilityName}
                onChange={handleChange}
              />
              {errors.capabilityName && <span className="error-message">{errors.capabilityName}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Base Location</label>
              <input 
                type="text" 
                className="form-input"
                name="baseLocation"
                value={formData.baseLocation}
                onChange={handleChange}
              />
              {errors.baseLocation && <span className="error-message">{errors.baseLocation}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Career Manager</label>
              <input 
                type="text" 
                className="form-input"
                name="careerManager"
                value={formData.careerManager}
                onChange={handleChange}
              />
              {errors.careerManager && <span className="error-message">{errors.careerManager}</span>}
            </div>
          </div>
        </div>

        {/* Password Section */}
        <div className="form-section">
          <h3 className="subsection-title">Set Password</h3>
          
          <div className="grid-container">
            <div className="form-group">
              <label className="form-label">Password</label>
              <input 
                type="password" 
                className="form-input"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <input 
                type="password" 
                className="form-input"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>
          </div>
        </div>

        <div className="button-container">
          <button type="submit" className="btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;