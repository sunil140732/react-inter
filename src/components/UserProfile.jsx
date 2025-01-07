import React, { useEffect, useState } from 'react';
import UserList from '../components/UserList';

const UserProfile = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
          // Add a 'liked' property to each user
          const updatedUsers = data.map((user) => ({ ...user, liked: false }));
          setUsers(updatedUsers);
          setLoading(false);
        })
        .catch((err) => {
          setError('Failed to fetch user data');
          setLoading(false);
        });
    }, []);
  
    const handleDelete = (id) => {
      setUsers(users.filter((user) => user.id !== id));
    };
  
    const handleLike = (id) => {
      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, liked: !user.liked } : user
        )
      );
    };
  
    const handleEdit = (id, updatedUser) => {
      setUsers(
        users.map((user) => (user.id === id ? { ...user, ...updatedUser } : user))
      );
    };
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
  
    return (
      <div className="container my-4">
        <h1 className='text-info'>User Profile</h1>
        <UserList users={users} onDelete={handleDelete} onLike={handleLike} onEdit={handleEdit} />
      </div>
    );
  
}

export default UserProfile
