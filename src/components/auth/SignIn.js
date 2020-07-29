import React from 'react';
import { reduxForm, Field } from 'redux-form';

class SignUp extends React.Component {
    
    onSubmit = formProps => {
        console.log(formProps);
    }

    render(){
        const { handleSubmit } = this.props;

        return (
            <div className="flex-col container mx-auto text-center p-3 m-3">
                <h3 className="text-gray-600 text-2xl mb-5 uppercase">Sign In</h3>
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
                    <button className="px-5 py-2 text-white border bg-green-500 hover:bg-green-600 rounded mt-3 focus:outline-none">Sign In</button>
                </form>
            </div>
        )
    }
}

export default reduxForm({ form: 'signup'})(SignUp);