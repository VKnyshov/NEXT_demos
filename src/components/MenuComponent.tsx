import React from 'react';
import Link from "next/link";
import './menu.css'

const MenuComponent = () => {
    return (
        <div className="menu">
            <ul>
                <li><Link href={'/users'}>Users</Link></li>
                <li><Link href={'/posts'}>Posts</Link></li>
                <li><Link href={'/comments'}>Comments</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;