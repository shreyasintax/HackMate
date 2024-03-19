import React, { useState } from 'react';

export function MultipleInputs () {
  const [addresses, setAddresses] = useState(['']); // Initialize with one empty address

  const handleChange = (index, value) => {
    const newAddresses = [...addresses];
    newAddresses[index] = value;
    setAddresses(newAddresses);
  };

  const addInput = () => {
    setAddresses([...addresses, '']);
  };

  const removeInput = (index) => {
    const newAddresses = [...addresses];
    newAddresses.splice(index, 1);
    setAddresses(newAddresses);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send 'addresses' array to the backend
    console.log('Sending addresses:', addresses);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {addresses.map((address, index) => (
          <div key={index}>
            <input
              type="text"
              value={address}
              onChange={(e) => handleChange(index, e.target.value)}
            />
            <button type="button" onClick={() => removeInput(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addInput}>
          Add Address
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


