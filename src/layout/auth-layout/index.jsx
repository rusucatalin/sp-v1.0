import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-white">

            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-b rounded-r-xl from-black to-gray-50 flex-col justify-center items-center text-white p-12">
                <div className="max-w-md mx-auto">
                    <div className="flex items-center mb-8">
                        <div className="bg-white bg-opacity-20 rounded-full p-2 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                            </svg>
                        </div>
                        <span className="text-xl font-semibold">Supreme Rentals</span>
                    </div>

                    <h1 className="text-4xl font-bold mb-4">Get Started with Us</h1>
                    <p className="mb-12">Complete these easy steps to register your account.</p>

                    <div className="space-y-4">
                        <div className="flex items-center bg-black bg-opacity-10 rounded-lg p-4">
                            <div className="bg-black text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">1</div>
                            <span className="font-medium">Sign up your account</span>
                        </div>
                        <div className="flex items-center bg-black bg-opacity-5 rounded-lg p-4">
                            <div className="bg-gray-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">2</div>
                            <span className="font-medium">Set up your profile</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center items-center p-6">
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
