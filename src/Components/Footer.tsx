import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 gap-2 flex flex-col  justify-between items-center  text-white py-10 px-4 md:flex-row-reverse">
            <div className="container mx-auto  flex flex-col justify-around md:flex-row flex-wrap gap-8 md:w-2/4  ">
                {/* Contact Information */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
                    <ul>
                        <li className="mb-2">Email: <a href="mailto:info@example.com" className="text-blue-400 hover:text-blue-500">info@example.com</a></li>
                        <li className="mb-2">Phone: <a href="tel:+1234567890" className="text-blue-400 hover:text-blue-500">+1 234 567 890</a></li>
                        <li className="mb-2">Address: 123 Main Street, City, Country</li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                    <ul>
                        <li className="mb-2"><a href="/about" className="text-blue-400 hover:text-blue-500">About Us</a></li>
                        <li className="mb-2"><a href="/services" className="text-blue-400 hover:text-blue-500">Services</a></li>
                        <li className="mb-2"><a href="/contact" className="text-blue-400 hover:text-blue-500">Contact</a></li>
                        <li className="mb-2"><a href="/privacy" className="text-blue-400 hover:text-blue-500">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.675 0h-21.35C.596 0 0 .595 0 1.326v21.348C0 23.405.596 24 1.325 24H12.81V14.708H9.692v-3.412h3.118V8.125c0-3.1 1.892-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.764v2.313h3.587l-.467 3.412h-3.12V24h6.116c.73 0 1.325-.595 1.325-1.326V1.326C24 .595 23.405 0 22.675 0z" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.954 4.569c-.885.385-1.83.644-2.825.761 1.014-.608 1.794-1.574 2.163-2.723-.95.564-2.005.974-3.127 1.194-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.917 2.201-4.917 4.917 0 .386.044.761.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.423.725-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.806-.025-1.566-.248-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.828-.413.112-.849.171-1.296.171-.314 0-.621-.03-.919-.086.623 1.951 2.432 3.376 4.576 3.414-1.676 1.313-3.791 2.097-6.086 2.097-.395 0-.787-.023-1.175-.069C2.905 19.58 6.355 21 10.063 21c12.072 0 18.675-10.003 18.675-18.675 0-.284-.007-.568-.02-.851C22.347 5.476 23.27 5.083 23.954 4.569z" />
                                </svg>
                            </a>
                        </li>
                        {/* Add more social icons as needed */}
                    </ul>
                </div>

                {/* Newsletter Signup */}

            </div>

            <div className="mt-8 w-full md:w-1/2">
                <p className="text-sm text-gray-400">
                    &copy; 2024 Genius Coaching All rights reserved.
                </p>
                <p className=" max-w-lg md:max-w-md mt-2">
                    Officially partnered with <strong>Hamid Ali</strong> to provide enhanced web services and solutions.
                    <Link to={'/'} className="ml-1 text-blue-400">
                        Learn more about  partnership
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
