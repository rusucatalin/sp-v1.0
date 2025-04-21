import React, { useState } from "react";
import AuthLayout from "../../layout/auth-layout";
import InputField from "../../components/input/customInput.jsx";

const Register = () => {
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        phone: "",
        gender: "",
        dob: "",
        image: null,
    });
    const [step, setStep] = useState(1); 

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step === 1) {

            setStep(2);
        } else {
            console.log("Profile submitted:", formData);
        }
    };

    return (
        <AuthLayout>
            <div className="flex justify-center items-center h-full w-full">
                <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white space-y-6">
                    <h2 className="text-2xl font-semibold text-center text-black">
                        {step === 1 ? "Register" : "Complete Your Profile"}
                    </h2>

                    {step === 1 ? (
                        <>
                            <InputField
                                label="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                className="bg-gray-100 text-black !text-left rounded-xl border-1"
                            />

                            <InputField
                                label="Username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                type="text"
                                className="bg-gray-100 !text-black !text-left rounded-xl border-1"
                            />

                            <InputField
                                label="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                type="password"
                                className="bg-gray-100 !text-black !text-left rounded-xl border-1"
                            />

                            <InputField
                                label="Confirm Password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                type="password"
                                className="bg-gray-100 !text-black !text-left rounded-xl border-1"
                            />

                            <button
                                type="submit"
                                className="w-full bg-white hover:bg-gray-50 text-black font-semibold py-2 px-4 rounded-xl border-1 transition duration-200"
                            >
                                Sign Up
                            </button>
                        </>
                    ) : (
                        <>
                            <InputField
                                label="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                type="text"
                                className="bg-gray-100 text-black !text-left rounded-xl border-1"
                            />

                            <InputField
                                label="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                type="text"
                                className="bg-gray-100 text-black !text-left rounded-xl border-1"
                            />

                            <InputField
                                label="Phone Number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                type="text"
                                className="bg-gray-100 text-black !text-left rounded-xl border-1"
                            />

                            <InputField
                                label="Gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                type="text"
                                className="bg-gray-100 text-black !text-left rounded-xl border-1"
                            />

                            <InputField
                                label="Date of Birth"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                type="date"
                                className="bg-gray-100 text-black !text-left rounded-xl border-1"
                            />

                            <div className="bg-gray-100 text-black !text-left rounded-xl border-1 p-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="image">
                                    Upload Profile Image
                                </label>
                                <input
                                    type="file"
                                    name="image"
                                    onChange={handleFileChange}
                                    className="w-full text-gray-700"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white hover:bg-gray-50 text-black font-semibold py-2 px-4 rounded-xl border-1 transition duration-200"
                            >
                                Submit
                            </button>
                        </>
                    )}
                </form>
            </div>
        </AuthLayout>
    );
};

export default Register;
