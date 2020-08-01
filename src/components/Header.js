import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends React.Component {

    renderLinks = () => {
        if (this.props.auth.authenticated){
            return (
                <div className="flex justify-between items-center">
                    <Link className="px-3 py-3 rounded hover:bg-gray-200 hover:text-gray-700 text-gray-600" to='/signout'>Sign Out</Link>
                    <Link className="px-3 py-3 rounded hover:bg-gray-200 hover:text-gray-700 text-gray-600" to='/feature'>Feature</Link>
                </div>
            );
        }else {
            return (
                <div className="flex justify-between items-center">
                    <Link className="px-3 py-3 rounded hover:bg-gray-200 hover:text-gray-700 text-gray-600" to='/signup'>Sign Up</Link>
                    <Link className="px-3 py-3 rounded hover:bg-gray-200 hover:text-gray-700 text-gray-600" to='/signin'>Sign In</Link>
                </div>
            );
        }
    }

    render(){
        return(
            <div className="flex justify-between items-center container mx-auto text-center">
                <Link className="px-3 py-3 rounded hover:bg-gray-200 hover:text-gray-700 text-gray-600" to='/welcome'>Welcome</Link>
                { this.renderLinks() }    
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Header);