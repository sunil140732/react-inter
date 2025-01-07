import React, { useState } from 'react';

function UserCard({ user, onDelete, onLike, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    website: user.website,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSave = () => {
    onEdit(user.id, editedUser);
    setIsEditing(false);
  };

  return (
    <div className="user-card m-4">
      <img
        src={`https://robohash.org/${user.id}?set=set2&size=150x150`}
        alt={`${user.name}'s avatar`}
      />
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phone"
            value={editedUser.phone}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="website"
            value={editedUser.website}
            onChange={handleInputChange}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{user.name}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> <a href={`https://${user.website}`}>{user.website}</a></p>
        </div>
      )}

        <div className="d-flex justify-content-around mt-3">
            {/* Heart Icon for Like */}
            <i
            className={`bi bi-heart${user.liked ? '-fill text-danger' : ''}`}
            style={{ fontSize: '1.5rem', cursor: 'pointer', margin: '0 10px' }}
            onClick={() => onLike(user.id)}
            ></i>

            {/* Pencil Icon for Edit */}
            <i
            className="bi bi-pencil"
            style={{ fontSize: '1.5rem', cursor: 'pointer', margin: '0 10px' }}
            onClick={() => setIsEditing(!isEditing)}
            ></i>

            {/* Trash Icon for Delete */}
            <i
            className="bi bi-trash text-danger"
            style={{ fontSize: '1.5rem', cursor: 'pointer', margin: '0 10px' }}
            onClick={() => onDelete(user.id)}
            ></i>
        </div>
    </div>
  );
}

export default UserCard;
