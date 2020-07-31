import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signout } from '../../actions/index';
import CountUp from 'react-countup';

export class SignOut extends Component {

    componentDidMount(){
        this.props.signout();

        setTimeout(() => {
            this.props.history.push('/signin');
        }, 10000);
    }

    render() {
        return (
            <div className="container mx-auto text-center p-3 m-3 w-1/2">
                Sorry, to see you go!, you will be redirected to Sign In page in 10 seconds...
                <div className="text-xl border px-4 py-4 text-white bg-gray-800">
                    <CountUp 
                        start={0}
                        end={10}
                        duration={20}
                    />
                </div>
            </div>
        )
    }
}

export default connect(null, { signout })(SignOut);
