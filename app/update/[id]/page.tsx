"use client"
import React, { useEffect, useState } from 'react';
import UpdateUser from '@/app/components/UpdateUser';

interface User {
  name: string;
  email: string;
  age: number;
  _id: string;
}

const Page = ({ params }: any) => {
  const id = params.id;
  const [user, setUser] = useState<User | null>(null); // Initialize as null

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`/api/user/${id}`);
        
        const data = await res.json();
        setUser(data.singleUser);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <div>
      {/* Check if user data is available before rendering */}
      {user ? <UpdateUser singleUser={user} /> : <p>Loading...</p>}
    </div>
  );
};

export default Page;
