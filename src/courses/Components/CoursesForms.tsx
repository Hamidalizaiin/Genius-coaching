import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const CoursesForms = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        studentId: '',
        paymentStatus: 'offline',
    });

    const { id } = useParams();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setFormData({
            firstName: '',
            lastName: '',
            age: '',
            studentId: '',
            paymentStatus: 'offline',
        });
    };

    const coursePrice = 1500;

    return (
        <div className="max-w-lg mx-auto mt-10">
            <h2 className="text-3xl font-bold text-center mb-6">Student {id} Form</h2>
            <p className="text-xl text-center mb-4">Course Price: <span className="font-bold">{coursePrice}</span></p>
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                        First Name
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your first name"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your last name"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                        Age
                    </label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your age"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="studentId">
                        Student ID
                    </label>
                    <input
                        type="text"
                        name="studentId"
                        value={formData.studentId}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your Student ID"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Payment Status</label>
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            name="paymentStatus"
                            value="online"
                            checked={formData.paymentStatus === 'online'}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label className="text-gray-700">Online Payment (EasyPaisa)</label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            name="paymentStatus"
                            value="offline"
                            checked={formData.paymentStatus === 'offline'}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label className="text-gray-700">Offline Payment</label>
                    </div>
                    {formData.paymentStatus === 'offline' && (
                        <p className="text-sm text-gray-500">
                            You will need to come with your submitted form and fee.
                        </p>
                    )}
                    {formData.paymentStatus === 'online' && (
                        <p className="text-sm text-gray-500">
                            Please proceed with the EasyPaisa transaction.
                        </p>
                    )}
                </div>

                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CoursesForms;
