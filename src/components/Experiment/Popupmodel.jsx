import React,{ useEffect, useState } from "react";

export default function Popupmodel(props){

    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        name    : '',
        email   : '',
        age     : '',
        course  : '',
        gender  : '',
    });

    useEffect(()=>{
        setFormData(props.data)
    },[props.data])
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validation = () =>{
        let isError = false;

        let validationErrors = {
            name: '',
            email: '',
            age: '',
            course: '',
            gender: '',
        }

        // Name validation
        if (!formData.name.trim()) {
            validationErrors.name = 'Name is required.';
            isError = true;
        }
    
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            validationErrors.email = 'Email is required.';
            isError = true;
        } else if (!emailPattern.test(formData.email)) {
            validationErrors.email = 'Invalid email format.';
            isError = true;
        }
    
        // Age validation
        if (!formData.age.trim()) {
            validationErrors.age = 'Age is required.';
            isError = true;
        } else if (isNaN(formData.age) || formData.age <= 0) {
            validationErrors.age = 'Age must be a positive number.';
            isError = true;
        }
    
        // Course validation
        if (!formData.course.trim()) {
            validationErrors.course = 'Course is required.';
            isError = true;
        }
    
        // Gender validation
        if (!formData.gender) {
            validationErrors.gender = 'Gender is required.';
            isError = true;
        }
    
        setErrors(validationErrors);
        return isError;
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!validation()){
            console.log('Form Data Submitted:', formData);
            
            props.addStudent(formData);

            // Reset form
            setFormData({
                name: '',
                email: '',
                age: '',
                course: '',
                gender: '',
            });
            props.handleClose();
        }
    };

    function handleClick() {
        // Call the callback function when the button is clicked
        setFormData({
            name    : '',
            email   : '',
            age     : '',
            course  : '',
            gender  : '',
        });
        setErrors({});
        props.handleClose();
    }
    
    return(
        <>
            {/* Modal */}
            {props.showModal && (
                <div className="modal show d-block" tabIndex="-1" role="dialog" style={{background: '#57575782'}}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header justify-content-between">
                            <h5 className="modal-title">Modal Title</h5>
                            <button
                            type="button"
                            className="close btn btn-outline-danger"
                            onClick={handleClick}
                            aria-label="Close"
                            >
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className=' '>
                            <form onSubmit={ handleSubmit }>
                                    {/* Student Name */}
                                    <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Student Name
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter student's name"
                                    />
                                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                    </div>

                                    {/* Email */}
                                    <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter student's email"
                                    />
                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                    </div>

                                    {/* Age */}
                                    <div className="mb-3">
                                    <label htmlFor="age" className="form-label">
                                        Age
                                    </label>
                                    <input
                                        type="number"
                                        className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                                        id="age"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        placeholder="Enter student's age"
                                    />
                                    {errors.age && <div className="invalid-feedback">{errors.age}</div>}
                                    </div>

                                    {/* Course */}
                                    <div className="mb-3">
                                    <label htmlFor="course" className="form-label">
                                        Course
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.course ? 'is-invalid' : ''}`}
                                        id="course"
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        placeholder="Enter course name"
                                    />
                                    {errors.course && <div className="invalid-feedback">{errors.course}</div>}
                                    </div>

                                    {/* Gender */}
                                    <div className="mb-3">
                                    <label className="form-label">Gender</label>
                                    <div>
                                        <div className="form-check form-check-inline">
                                        <input
                                            className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
                                            type="radio"
                                            name="gender"
                                            id="male"
                                            value="Male"
                                            checked={formData.gender === 'Male'}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" htmlFor="male">
                                            Male
                                        </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                        <input
                                            className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
                                            type="radio"
                                            name="gender"
                                            id="female"
                                            value="Female"
                                            checked={formData.gender === 'Female'}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" htmlFor="female">
                                            Female
                                        </label>
                                        </div>
                                    </div>
                                    {errors.gender && <div className="text-danger">{errors.gender}</div>}
                                    </div>

                                    {/* Submit Button */}
                                    <button type="submit" className="btn btn-primary">
                                    Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                </div>
            )}
        </>
    )

}