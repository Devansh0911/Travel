// HotelBooking.js
import React, { useState } from 'react';

const HotelBooking = () => {
  // State for destination, check-in date, hotel list, and booking form visibility
  const [destination, setDestination] = useState('paris');
  const [checkInDate, setCheckInDate] = useState('');
  const [hotelList, setHotelList] = useState([]);
  const [BookingForm, setShowBookingForm] = useState(false);

  const searchHotels = () => {
    // Simulate fetching hotel data from the server
    // Replace this with actual data fetched from the server
    const fetchedHotelList = [
      { name: 'Hotel A', price: '$100 per night', image: 'hotel1.jpg' },
      { name: 'Hotel B', price: '$120 per night', image: 'hotel2.jpg' },
      { name: 'Hotel C', price: '$150 per night', image: 'hotel3.jpg' },
    ];

    // Update state with the fetched hotel list
    setHotelList(fetchedHotelList);
  };

  const displayHotelList = () => {
    return hotelList.map((hotel, index) => (
      <div className="hotel" key={index}>
        <img src={hotel.image} alt={hotel.name} style={{ maxWidth: '40%', height: '25%' }} />
        <h3>{hotel.name}</h3>
        <p>Price: {hotel.price}</p>
        <button onClick={() => showBookingForm()}>Book Now</button>
      </div>
    ));
  };

  const showBookingForm = () => {
    // Show the booking form
    setShowBookingForm(true);
  };

  return (
    <div>
      <h2>Hotel Booking</h2>

      {/* Step 1: Select Destination and Date */}
      <form id="search-form">
        <label htmlFor="destination">Destination:</label>
        <select
          id="destination"
          name="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        >
          <option value="paris">Paris</option>
          <option value="new-york">New York</option>
          <option value="tokyo">Tokyo</option>
          {/* Add more options as needed */}
        </select>

        <label htmlFor="check-in">Check-in Date:</label>
        <input
          type="date"
          id="check-in"
          name="check-in"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          required
        />

        <button type="button" onClick={() => searchHotels()}>
          Search Hotels
        </button>
      </form>

      {/* Step 2: Display Hotel List */}
      <div id="hotel-list" className="hotel-list" style={{ display: hotelList.length > 0 ? 'block' : 'none' }}>
        {displayHotelList()}
      </div>

      {/* Step 3: Booking Form */}
      {showBookingForm && (
        <div id="booking-form" className="booking-form">
          <h2>Booking Details</h2>
          <form>
            {/* Include booking form fields here */}
            <label htmlFor="guest-name">Guest Name:</label>
            <input type="text" id="guest-name" name="guest-name" required />

            <label htmlFor="guest-email">Email:</label>
            <input type="email" id="guest-email" name="guest-email" required />

            <button type="submit">Book Now</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default HotelBooking;
