import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends React.Component {
    render(){
        return(
            <div className="container mx-auto text-center">
                <Link className="px-3 py-3 rounded hover:bg-gray-200 hover:text-gray-700 text-gray-600" to='/welcome'>Redux auth</Link>
                
                { !this.props.auth.authenticated ?  
                    <Link className="px-3 py-3 rounded hover:bg-gray-200 hover:text-gray-700 text-gray-600" to='/signup'>Sign Up</Link> : ''
                }
                
                { !this.props.auth.authenticated ? 
                    <Link className="px-3 py-3 rounded hover:bg-gray-200 hover:text-gray-700 text-gray-600" to='/signin'>Sign In</Link> : ''
                }

                { this.props.auth.authenticated ? 
                    <Link className="px-3 py-3 rounded hover:bg-gray-200 hover:text-gray-700 text-gray-600" to='/signout'>Sign Out</Link> : '' 
                }
                
                <Link className="px-3 py-3 rounded hover:bg-gray-200 hover:text-gray-700 text-gray-600" to='/feature'>Feature</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Header);