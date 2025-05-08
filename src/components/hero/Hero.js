import React, { useState } from 'react';
import illstration from "../../assets/img/undraw_travelers_kud9 (1).svg";
import { Link } from 'react-router-dom';
import BookingModal from '../Booking_modal/BookingModal';
import ReservationModal from '../reaervation/ReservationModal';

function Hero() {
    // Booking modal state
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [bookingData, setBookingData] = useState({
        name: '',
        email: '',
        departure: '',
        return: '',
        passengers: '',
    });
    const [verificationCode, setVerificationCode] = useState([]);

    // Reservation modal state
    const [isReservationOpen, setIsReservationOpen] = useState(false);
    const [reservationData, setReservationData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        notes: ''
    });

    // Booking functions
    const openBookingModal = () => {
        const numbers = [];
        for (let i = 0; i < 6; i++) {
            numbers.push(Math.floor(Math.random() * 9));
        }
        setVerificationCode(numbers);
        setIsBookingOpen(true);
    };

    const handleBookingChange = (e) => {
        const { id, value } = e.target;
        setBookingData(prev => ({ ...prev, [id]: value }));
    };

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        setIsBookingOpen(false);
        alert(`Booking submitted!\nName: ${bookingData.name}\nEmail: ${bookingData.email}`);
    };

    // Reservation functions
    const openReservationModal = () => {
        setIsReservationOpen(true);
    };

    const handleReservationChange = (e) => {
        const { id, value } = e.target;
        setReservationData(prev => ({ ...prev, [id]: value }));
    };

    const handleReservationSubmit = (e) => {
        e.preventDefault();
        setIsReservationOpen(false);
        alert(`Reservation submitted!\nName: ${reservationData.name}\nDate: ${reservationData.date} at ${reservationData.time}`);
    };

    return (
        <>
            <BookingModal
                isOpen={isBookingOpen}
                onClose={() => setIsBookingOpen(false)}
                formData={bookingData}
                handleInputChange={handleBookingChange}
                handleSubmit={handleBookingSubmit}
                verificationCode={verificationCode}
            />

            <ReservationModal
                isOpen={isReservationOpen}
                onClose={() => setIsReservationOpen(false)}
                formData={reservationData}
                handleInputChange={handleReservationChange}
                handleSubmit={handleReservationSubmit}
            />

            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center order-2 p-6 text-center rounded-sm sm:order-1 lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-3xl font-bold leading-none text-transparent sm:text-4xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">
                            An Unforgettable <span>Journey with Our Travel Agency</span>
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">
                            At WanderWise Travels, we turn your dream journeys into unforgettable experiences.
                            <br className="hidden md:inline lg:hidden" /> Whether you're seeking a serene escape.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link
                                to="#"
                                onClick={openBookingModal}
                                className="px-8 py-3 text-lg font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-red-500 hover:via-pink-500 hover:to-purple-500"
                            >
                                Book Now
                            </Link>
                            <Link
                                to="#"
                                onClick={openReservationModal}
                                className="px-8 py-3 text-lg font-semibold text-gray-800 transition-all duration-300 bg-gray-200 border border-gray-300 rounded-lg hover:bg-gray-300"
                            >
                                Reserve Now
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center order-1 p-6 mt-8 sm:order-2 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={illstration} alt="Travel illustration" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;