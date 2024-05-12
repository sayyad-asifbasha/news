import React from 'react'
import "./Nav.css";
import logo from './Logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
// dc3e6eded1584bd7bbb7dedba5ec17b5
        <>
            <div className="navi">
                <div className="logo"><img src={logo} alt="" /></div>
                <div className="options">
                    <ul className="list" >
                        <li className="items first"  ><Link  to='/' >Top-Headlines</Link></li>
                        <li className="items"><Link  to='Political'>Political</Link></li>
                        <li className="items"><Link to='Business'>Business</Link></li>
                        <li className="items"><Link  to='Entertainment'>Entertainment</Link></li>
                        <li className="items"><Link  to='Technology'>Technology</Link></li>
                        <li className="items"><Link  to='Sports'>Sports</Link></li>
                        <li className="items"><Link  to='Tollywood'>Tollywood</Link></li>
                    </ul>
                </div>
            </div>   
        </>
    );
}
