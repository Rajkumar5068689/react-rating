import React, { useState } from 'react';
import CustomRating from '../Basic/Rating';
export default function RatingDemo() {
    const [formData, setFormData] = useState({ priority: '10' });

    const handleInputChange = (event, value) => {
        setFormData({
            ...formData,
            [event.target.name]: event?.target?.value,
        });
    };

    return (
        <>
            <CustomRating
                max={10}
                name={"priority"}
                value={formData?.priority}
                handleInputChange={handleInputChange}
            />
        </>
    );
}
