import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import CountrySelect from 'react-select-country-list'; // Importing a country select library
import axios from 'axios'; // For making HTTP requests
import PhoneInput from 'react-phone-input-2'; // Import PhoneInput component
import 'react-phone-input-2/lib/style.css'; // Import PhoneInput styles
import { useSnackbar } from 'notistack';

export default function ProfileSettings() {
    const navigate = useNavigate();
    const [country, setCountry] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [Name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        document.body.style.overflowY = 'auto';
    }, []);

    const GoToDashBoard = () => {
        document.body.style.overflowY = 'auto';
        navigate("/DashBoard");
        document.getElementById("DashBoardText2").innerHTML = "Dashboard";
        document.getElementById("CurrentNavText2").innerHTML = "Home - Dashboard";
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        let isValid = true; // Initialize isValid to true
    
        // Validate Name
        if (!Name) {
            enqueueSnackbar('Name is required.', { variant: 'error' });
            isValid = false;
        }
    
        // Validate Phone Number
        if (!phoneNumber) {
            enqueueSnackbar('Phone number is required.', { variant: 'error' });
            isValid = false;
        }
    
        // Validate Country
        if (!country) {
            enqueueSnackbar('Country is required.', { variant: 'error' });
            isValid = false;
        }
    
        // If any field is invalid, stop the submission
        if (!isValid) {
            setIsLoading(false);
            return;
        }
    
        try {
            // Prepare the FormData object
            const formData = new FormData();
            formData.append('name', Name); 
            formData.append('phone_number', phoneNumber);
            formData.append('country', country.value); // Ensure country is set
    
            // Make a POST request to the backend
            const response = await axios.post('https://signal.payguru.com.ng/api/update-profile', formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, // Assuming you store the token in localStorage
                    'Content-Type': 'multipart/form-data', // Set content type for multipart
                },
            });
    
            if (response.status === 200) {
                enqueueSnackbar('Profile updated successfully.', { variant: 'success' });
                GoToDashBoard(); // Navigate to the dashboard on success
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            enqueueSnackbar('Failed to update profile. Please try again.', { variant: 'error' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div id="ProfileSettingsAuthPageBG">
                <div id="ProfileSettingsBG">
                    <div id="FormTitle">Profile Settings</div>
                    <div id="Row">
                        {/* <div id="ProfileSettingsInputFieldBG">
                            <div id="ProfileSettingsInputFieldLabel">First Name</div>
                            <input 
                                id="ProfileSettingsInputField" 
                                type="text" 
                                placeholder="Enter Your First Name" 
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div> */}
                        <div id="ProfileSettingsInputFieldBG">
                            <div id="ProfileSettingsInputFieldLabel">Name</div>
                            <input 
                                id="ProfileSettingsInputField" 
                                type="text" 
                                placeholder="Enter Your Name" 
                                value={Name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div id="Row">
                        <div id="ProfileSettingsInputFieldBG">
                            <div id="ProfileSettingsInputFieldLabel">Phone Number</div>
                            <PhoneInput
                                id="CountryInputField"
                                country={'us'}
                                value={phoneNumber}
                                onChange={setPhoneNumber}
                                inputStyle={{ width: '100%', height: '40px', borderRadius: '5px', border: '1px solid #ccc' }}
                            />
                        </div>
                    </div>
                    <div id="Row">
                        <div id="ProfileSettingsInputFieldBG">
                            <div id="ProfileSettingsInputFieldLabel">Country</div>
                            <Select 
                                id="CountryInputField"
                                options={CountrySelect().getData()} // Get country options
                                onChange={(value) => setCountry(value)} 
                                placeholder="Select Your Country"
                            />
                        </ div>
                    </div>
                    <div id="SubmitText" onClick={handleSubmit}>
                        <span>{isLoading ? 'Submitting...' : 'Submit'}</span>
                    </div>
                </div>
            </div>
        </>
    );
}