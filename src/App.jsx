import { useState } from 'react';
import { TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, InputLabel, MenuItem, Select, Stack, Button, Alert } from '@mui/material';
import './App.css';

function App() {
  // State for form fields
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [errors, setErrors] = useState({});

  // Validate fields and collect data
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Validation checks for form fields
    if (!name) validationErrors.name = 'Name is required';
    if (!address) validationErrors.address = 'Address is required';
    if (!phone) validationErrors.phone = 'Phone number is required';
    if (!email) validationErrors.email = 'Email is required';
    if (!gender) validationErrors.gender = 'Gender is required';
    if (!dob) validationErrors.dob = 'Date of birth is required';
    if (!selectedOption) validationErrors.course = 'Course selection is required';

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Show confirmation to reset after successful form submission
      const userConfirmed = window.confirm(
        `Form submitted successfully! \nName: ${name}\nAddress: ${address}\nPhone: ${phone}\nEmail: ${email}\nGender: ${gender}\nDate of Birth: ${dob}\nCourse: ${selectedOption}\n\nClick OK to reset the form data.`
      );

      if (userConfirmed) {
        // Reset form fields if the user clicks "OK"
        handleReset();
      }
    }
  };

  const handleReset = () => {
    // Resetting form fields
    setName('');
    setAddress('');
    setPhone('');
    setEmail('');
    setGender('');
    setDob('');
    setSelectedOption('');
    setErrors({});
    console.log('Form has been reset.');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '75px', boxSizing: 'border-box' }}>
      <div className='content-container' style={{ width: '100%', maxWidth: '600px', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', boxSizing: 'border-box' }}>
        <h2 style={{ textAlign: 'center' }}>Registration Form</h2>
        <p style={{ textAlign: 'center' }}>
          Registration form to apply for Higher Secondary Admission for Students.
        </p>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div style={{ marginBottom: '16px' }}>
            <TextField
              fullWidth
              helperText={errors.name || 'Please enter your name'}
              error={!!errors.name}
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* Address */}
          <div style={{ marginBottom: '16px' }}>
            <TextField
              fullWidth
              helperText={errors.address || 'Please enter your address'}
              error={!!errors.address}
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          {/* Phone */}
          <div style={{ marginBottom: '16px' }}>
            <TextField
              fullWidth
              helperText={errors.phone || 'Please enter your phone number'}
              error={!!errors.phone}
              label="Phone"
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          {/* Email */}
          <div style={{ marginBottom: '16px' }}>
            <TextField
              fullWidth
              helperText={errors.email || 'Please enter your email address'}
              error={!!errors.email}
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Gender */}
          <div style={{ marginBottom: '16px' }}>
            <FormControl fullWidth error={!!errors.gender}>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                row
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
            {errors.gender && <Alert severity="error">{errors.gender}</Alert>}
          </div>
          {/* Date of Birth */}
          <div style={{ marginBottom: '16px' }}>
            <TextField
              fullWidth
              helperText={errors.dob || 'Please select your date of birth'}
              error={!!errors.dob}
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          {/* Course DropDown */}
          <div style={{ marginBottom: '16px' }}>
            <FormControl fullWidth error={!!errors.course}>
              <InputLabel>Course</InputLabel>
              <Select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <MenuItem value="Biology">Biology</MenuItem>
                <MenuItem value="Computer Scence">Computer Scence</MenuItem>
                <MenuItem value="Commerce">Commerce</MenuItem>
                <MenuItem value="Humanities">Humanities</MenuItem>
              </Select>
            </FormControl>
            {errors.course && <Alert severity="error">{errors.course}</Alert>}
          </div>
          {/* Buttons */}
          <div style={{ textAlign: 'center' }}>
            <Stack spacing={2} direction="row" justifyContent="center">
              <Button variant="contained" type="submit">Submit</Button>
              <Button variant="outlined" onClick={handleReset}>Reset</Button>
            </Stack>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
