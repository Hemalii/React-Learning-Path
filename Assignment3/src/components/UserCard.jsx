import React, { useState } from "react";
import { IoMailOutline, IoCallOutline, IoGlobeOutline } from "react-icons/io5";
import { FaThumbsUp, FaEdit, FaTrashAlt } from "react-icons/fa";
import EditModal from "./EditModal";
import "../styles/UserCard.css";

const UserCard = ({ user, updateUser, removeUser }) => {
  const [liked, setLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;

  const handleLike = () => setLiked(!liked);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleUpdate = (updatedData) => {
    updateUser(updatedData);
    closeModal();
  };

  return (
    <div className="user-card">
      <img src={avatarUrl} alt="Avatar" className="avatar" />
      <h3>{user.name}</h3>
      <p>
        <IoMailOutline /> {user.email}
      </p>
      <p>
        <IoCallOutline /> {user.phone}
      </p>
      <p>
        <IoGlobeOutline />{" "}
        <a
          href={`http://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {user.website}
        </a>
      </p>

      <div className="actions">
        <button onClick={handleLike} className={liked ? "liked" : ""}>
          <FaThumbsUp /> {liked ? "Unlike" : "Like"}
        </button>
        <button onClick={openModal} className="edit-btn">
          <FaEdit /> Edit
        </button>
        <button onClick={() => removeUser(user.id)} className="delete-btn">
          <FaTrashAlt /> Delete
        </button>
      </div>

      {isModalOpen && (
        <EditModal
          user={user}
          updateUser={handleUpdate}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default UserCard;
