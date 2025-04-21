import React, { useState } from "react";

import InputField from "../../components/input/customInput.jsx";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",

    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);

    };

    return (

            <div className="flex justify-center items-center h-full w-full">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md p-6 bg-white space-y-6"
                >
                    <h2 className="text-2xl font-semibold text-center text-black">Login</h2>

                    <InputField
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        className="bg-gray-100 text-black !text-left rounded-xl border-1"
                    />


                    <InputField
                        label="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        type="password"
                        className="bg-gray-100 !text-black !text-left rounded-xl border-1"
                    />

                    <button
                        type="submit"
                        className="w-full bg-white hover:bg-gray-50 text-black font-semibold py-2 px-4 rounded-xl border-1 transition duration-200"
                    >
                        Sign In
                    </button>
                </form>
            </div>

    );
};

export default Login;