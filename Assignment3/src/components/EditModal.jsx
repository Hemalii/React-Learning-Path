import React, { useState } from "react";
import "../styles/EditModal.css";

const EditModal = ({ user, closeModal, updateUser }) => {
  const [updatedUser, setUpdatedUser] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    website: user.website,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Include the user ID in the updated data
    const finalUpdatedUser = {
      ...updatedUser,
      id: user.id, // Add the user ID
    };
    console.log("Updated User Data:", finalUpdatedUser);
    updateUser(finalUpdatedUser);
    closeModal();
  };

  return (
    <div className="modal">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={updatedUser.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={updatedUser.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={updatedUser.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Website:</label>
          <input
            type="text"
            name="website"
            value={updatedUser.website}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="save-button" type="submit">
            Save
          </button>
          <button className="cancel-button" type="button" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditModal;
