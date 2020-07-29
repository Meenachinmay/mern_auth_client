import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render(){
        return(
            <div className="container mx-auto text-center">
                <Link className="px-3 py-3 rounded hover:bg-gray-200 hover:text-gray-700 text-gray-600" to='/welcome'>Redux auth</Link>
                <Link className="px-3 py-3 rounded hover:bg-gray-200 hover:text-gray-700 text-gray-600" to='/signup'>Sign Up</Link>
                <Link className="px-3 py-3 rounded hover:bg-gray-200 hover:text-gray-700 text-gray-600" to='/signin'>Sign In</Link>
                <Link className="px-3 py-3 rounded hover:bg-gray-200 hover:text-gray-700 text-gray-600" to='/signout'>Sign Out</Link>
                <Link className="px-3 py-3 rounded hover:bg-gray-200 hover:text-gray-700 text-gray-600" to='/feature'>Feature</Link>
            </div>
        )
    }
}

export default Header;