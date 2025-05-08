import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/footer/Footer';
import login from '../assets/login/undraw_secure-login_m11a.svg';

function Login() {
    return (
        <>
            <div className="grid min-h-screen grid-cols-1 py-20 bg-gray-100 bg-gradient-to-r from-purple-400/60 via-red-100 to-pink-400/60 sm:grid-cols-2 dark:bg-gray-900">

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center"
                >
                    <img src={login} alt="Login illustration" className="w-3/4 mx-auto" />
                </motion.div>

                {/* Form Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center"
                >
                    <div className="w-full max-w-md px-8 py-10 text-white shadow-lg rounded-2xl font-Poppins bg-gradient-to-tr from-pink-500 via-red-400 to-purple-500">
                        <h2 className="mb-4 text-4xl font-bold text-center">Log in</h2>
                        <p className="mb-8 text-sm text-center">Sign in to access your account</p>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-1 text-sm">Email address</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full px-4 py-2 text-black transition bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block mb-1 text-sm">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full px-4 py-2 text-black transition bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                                />
                            </div>

                            <div className="flex justify-between text-sm">
                                <a href="#" className="hover:underline">Forgot password?</a>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 mt-4 font-semibold transition rounded-md bg-gradient-to-r from-blue-500 via-blue-gray-500 to-teal-400 hover:opacity-90"
                            >
                                Log in
                            </button>
                        </form>

                        <p className="mt-6 text-sm text-center">
                            Don't have an account?{' '}
                            <Link to="/signup" className="underline hover:text-gray-200">Sign up</Link>
                        </p>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </>
    );
}

export default Login;
