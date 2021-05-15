import React, {useState} from 'react';
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";
function LoginScreen() {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
                <img
                    className="loginScreen_logo"
                    src="​https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />

                <button onclick={() => setSignIn(true)} className='loginScreen_button'>Sign In</button>
                <div className="loginScreen_gradient" />

                <div className="loginScreen_body">
                    {signIn ? (
                        <SignupScreen />
                    ) : (
                        <>
                            <h1>Unlimited films, Tv programmes and more.
                        </h1>
                            <h2>Watch anywhere. Cancel at any time.
                        </h2>
                            <h3>
                                Ready to watch? Enter your e-mail to create or restart your membership.
                        </h3>
                            <div className="loginScreen_input">
                                <form>
                                    <input type='email'
                                        placeholder="Email"
                                    />
                                    <button
                                        onClick={() => setSignIn(true)}
                                        className='login_screen_getStarted'>
                                        GET Started
                                </button>
                                </form>
                            </div>
                        </>

                    )}

                </div>
            </div>

        </div>
    )
}

export default LoginScreen
