import React from 'react';

const ReservationModal = ({ isOpen, onClose, formData, handleInputChange, handleSubmit }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <div className="w-full max-w-md border shadow-2xl rounded-xl bg-white/10 backdrop-blur-lg border-white/20">
                <div className="p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold tracking-wide">Make a Reservation</h3>
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
                        <div className="mb-6 space-y-4">
                            {[
                                { id: 'name', type: 'text', label: 'Full Name*' },
                                { id: 'phone', type: 'tel', label: 'Phone Number*' },
                                { id: 'date', type: 'date', label: 'Reservation Date*' },
                                { id: 'time', type: 'time', label: 'Reservation Time*' },
                            ].map(({ id, type, label }) => (
                                <div key={id} className="space-y-2">
                                    <label htmlFor={id} className="block text-sm font-medium text-white/80">{label}</label>
                                    <input
                                        id={id}
                                        name={id}
                                        type={type}
                                        className="w-full px-4 py-2 text-white transition border rounded-lg bg-white/20 placeholder-white/50 border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                        value={formData[id]}
                                        onChange={handleInputChange}
                                        required
                                        placeholder='12:00:00'
                                    />
                                </div>
                            ))}

                            <div className="space-y-2">
                                <label htmlFor="guests" className="block text-sm font-medium text-white/80">Number of Guests*</label>
                                <select
                                    id="guests"
                                    name="guests"
                                    className="w-full px-4 py-2 text-black transition border rounded-lg bg-white/20 border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    value={formData.guests}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select guests</option>
                                    <option value="1" selected>1 person</option>
                                    <option value="2">2 people</option>
                                    <option value="3">3 people</option>
                                    <option value="4">4 people</option>
                                    <option value="5+">5+ people</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-end space-x-4">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-6 py-2 text-white transition border rounded-lg bg-white/10 hover:bg-white/20 border-white/30"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-6 py-2 text-white transition rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90"
                            >
                                Confirm Reservation
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReservationModal;
