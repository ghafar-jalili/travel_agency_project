import React from 'react';

const BookingModal = ({ isOpen, onClose, formData, handleInputChange, handleSubmit, verificationCode }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <div className="w-full max-w-2xl border shadow-2xl rounded-xl bg-white/10 backdrop-blur-lg border-white/20">
                <div className="p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold tracking-wide">Book Now</h3>
                        <button
                            onClick={onClose}
                            className="transition-colors text-white/80 hover:text-white"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-medium text-white/80">Name*</label>
                                <input
                                    id="name"
                                    type="text"
                                    className="w-full px-4 py-2 text-white transition border rounded-lg bg-white/20 placeholder-white/50 border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-white/80">Email*</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full px-4 py-2 text-white transition border rounded-lg bg-white/20 placeholder-white/50 border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="departure" className="block text-sm font-medium text-white/80">Departure Date*</label>
                                <input
                                    id="departure"
                                    type="date"
                                    className="w-full px-4 py-2 text-white transition border rounded-lg bg-white/20 placeholder-white/50 border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    value={formData.departure}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="return" className="block text-sm font-medium text-white/80">Return Date*</label>
                                <input
                                    id="return"
                                    type="date"
                                    className="w-full px-4 py-2 text-white transition border rounded-lg bg-white/20 placeholder-white/50 border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    value={formData.return}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="passengers" className="block text-sm font-medium text-white/80">Passengers*</label>
                                <select
                                    id="passengers"
                                    className="w-full px-4 py-2 text-black transition border rounded-lg bg-white/20 border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    value={formData.passengers}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Please Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5+">5+</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="verification" className="block text-sm font-medium text-white/80">
                                    Verification* <span className="ml-2 font-mono font-bold tracking-widest text-gray-400">{verificationCode}</span>
                                </label>
                                <input
                                    id="verification"
                                    type="text"
                                    className="w-full px-4 py-2 text-white transition border rounded-lg bg-white/20 border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    required
                                    pattern={verificationCode}
                                    title="Please enter the verification code shown above"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-3 text-lg font-semibold text-white transition rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:bg-gradient-to-l hover:opacity-90"
                        >
                            Confirm Booking
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
