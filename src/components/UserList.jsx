import React from 'react';
import UserCard from '../components/UserCard';

function UserList({ users, onDelete, onLike, onEdit }) {
    return (
      <div className="user-list">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onDelete={onDelete}
            onLike={onLike}
            onEdit={onEdit}
          />
        ))}
      </div>
    );
  }
  
  export default UserList;
