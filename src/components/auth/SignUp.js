import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signUp } from '../../actions/index';

class SignUp extends React.Component {

    onSubmit = formProps => {

        // MAKE A CALL TO SIGN UP ACTION from action.js
        this.props.signUp(formProps, () => {
            this.props.history.push('/feature');
        });
    }

    // componentDidMount(){
    //     if (this.props.auth.authenticated.success) {
    //         this.props.history.push('/feature')
    //     }
    // }

    render(){
        const { handleSubmit } = this.props;

        return (
            <div className="flex-col container mx-auto text-center p-3 m-3">
                <h3 className="text-gray-600 text-2xl mb-5 uppercase">Sign Up</h3>
                <form onSubmit={handleSubmit(this.onSubmit )}>
                    <fieldset>
                        <Field
                            name="email"
                            type="text"
                            component="input"
                            className="py-2 px-2 mb-3 border focus:outline-none rounded"
                            placeholder="Email"
                            autoComplete="none"
                        />
                    </fieldset>
                    <fieldset>
                        <Field
                            name="password"
                            type="password"
                            component="input"
                            className="py-2 px-2 border focus:outline-none rounded"
                            placeholder="Password"
                            autoComplete="none"
                        />
                    </fieldset>
                    <div>
                    { this.props.auth.errorMessage ? <div>{this.props.auth.errorMessage}</div> : "" }
                    </div>
                    <button className="px-5 py-2 text-white border bg-green-500 hover:bg-green-600 rounded mt-3 focus:outline-none">Sign Up</button>
                </form>
            </div>
        )
    }
}

// MAPPING THE state from REDUX STORE as props to this component
const mapStateToProps = (state) =>({
    auth: state.auth
})

// TO compose all the HOC
export default compose(
    connect(mapStateToProps ,{ signUp }),
    reduxForm({ form: 'signup'})
)(SignUp);