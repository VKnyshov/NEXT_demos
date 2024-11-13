import React from 'react';
import Link from "next/link";

const UserPage = async ({params}: { params: { id: string } }) => {
    const user = await fetch('http://jsonplaceholder.typicode.com/users/' + params.id)
        .then(res => res.json());


    return (
        <div>
            <h3>

            <Link href={`/users/${user.id}/posts/`}>{user.name}</Link>

            </h3>
            <p>{user.username}</p>
            <p> {user.email}, num.: {user.phone}</p>

        </div>
    );
};

export default UserPage;