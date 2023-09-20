import React, { useState } from "react";
import {
    TextField,
    Button,
    Box,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Paper,
} from "@mui/material";

function ProfileCompletionForm({ onComplete }) {
    const [formData, setFormData] = useState({
        fullName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipcode: "",
    });

    const stateOptions = [
        { abbreviation: "AL", name: "Alabama" },
        { abbreviation: "AK", name: "Alaska" },
        { abbreviation: "AZ", name: "Arizona" },
        { abbreviation: "AR", name: "Arkansas" },
        { abbreviation: "CA", name: "California" },
        { abbreviation: "CO", name: "Colorado" },
        { abbreviation: "CT", name: "Connecticut" },
        { abbreviation: "DE", name: "Delaware" },
        { abbreviation: "FL", name: "Florida" },
        { abbreviation: "GA", name: "Georgia" },
        { abbreviation: "HI", name: "Hawaii" },
        { abbreviation: "ID", name: "Idaho" },
        { abbreviation: "IL", name: "Illinois" },
        { abbreviation: "IN", name: "Indiana" },
        { abbreviation: "IA", name: "Iowa" },
        { abbreviation: "KS", name: "Kansas" },
        { abbreviation: "KY", name: "Kentucky" },
        { abbreviation: "LA", name: "Louisiana" },
        { abbreviation: "ME", name: "Maine" },
        { abbreviation: "MD", name: "Maryland" },
        { abbreviation: "MA", name: "Massachusetts" },
        { abbreviation: "MI", name: "Michigan" },
        { abbreviation: "MN", name: "Minnesota" },
        { abbreviation: "MS", name: "Mississippi" },
        { abbreviation: "MO", name: "Missouri" },
        { abbreviation: "MT", name: "Montana" },
        { abbreviation: "NE", name: "Nebraska" },
        { abbreviation: "NV", name: "Nevada" },
        { abbreviation: "NH", name: "New Hampshire" },
        { abbreviation: "NJ", name: "New Jersey" },
        { abbreviation: "NM", name: "New Mexico" },
        { abbreviation: "NY", name: "New York" },
        { abbreviation: "NC", name: "North Carolina" },
        { abbreviation: "ND", name: "North Dakota" },
        { abbreviation: "OH", name: "Ohio" },
        { abbreviation: "OK", name: "Oklahoma" },
        { abbreviation: "OR", name: "Oregon" },
        { abbreviation: "PA", name: "Pennsylvania" },
        { abbreviation: "RI", name: "Rhode Island" },
        { abbreviation: "SC", name: "South Carolina" },
        { abbreviation: "SD", name: "South Dakota" },
        { abbreviation: "TN", name: "Tennessee" },
        { abbreviation: "TX", name: "Texas" },
        { abbreviation: "UT", name: "Utah" },
        { abbreviation: "VT", name: "Vermont" },
        { abbreviation: "VA", name: "Virginia" },
        { abbreviation: "WA", name: "Washington" },
        { abbreviation: "WV", name: "West Virginia" },
        { abbreviation: "WI", name: "Wisconsin" },
        { abbreviation: "WY", name: "Wyoming" },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    //FIXME with real data validation
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform form validation and submission here
        // If validation is successful, update user profile
        // Set profileComplete to true in the database
        // await updateProfile(formData);
        // onComplete();

        try {
            //await updateProfile(formData);
            onComplete(true); // Set isProfileComplete=true
        } catch (error) {
            alert("Error updating profile:", error);
            console.error("Error updating profile:", error);
        }
    };

    return (
        <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
            <Typography variant="h3" color="primary" gutterBottom>
                Complete Your Profile
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    name="fullName"
                    label="Full Name"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    fullWidth
                    name="address1"
                    label="Address 1"
                    required
                    value={formData.address1}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    fullWidth
                    name="address2"
                    label="Address 2"
                    value={formData.address2}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    fullWidth
                    name="city"
                    label="City"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{ marginBottom: 2 }}
                />
                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                    <InputLabel>State</InputLabel>
                    <Select
                        name="state"
                        id="state-select"
                        value={formData.state}
                        onChange={handleChange}
                        label="State"
                        MenuProps={{
                            PaperProps: {
                                style: {
                                    maxHeight: 200, // Sets max height of the dropdown menu
                                },
                            },
                        }}
                    >
                        {stateOptions.map((state) => (
                            <MenuItem key={state.abbreviation} value={state.abbreviation}>
                                {state.name}
                            </MenuItem>
                        ))}
                        {/* Add other state options */}
                    </Select>
                </FormControl>
                <TextField
                    fullWidth
                    name="zipcode"
                    label="Zipcode"
                    required
                    value={formData.zipcode}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{ marginBottom: 2 }}
                />
                <Button type="submit" variant="contained" color="primary">
                    Complete Profile
                </Button>
            </form>
        </Paper>
    );
}

export default ProfileCompletionForm;
