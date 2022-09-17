import React from "react";
import { useRef, useState, useEffect } from "react";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  //just for this tut, in the future can replace it and navigate with react router to navigate to a page of our choice aft successful login
  const [success, setSuccess] = useState(false);

  //to set focus on first input when the component loads
  //put focus on user input that we'll reference with userRef
  useEffect(() => {
    userRef.current.focus();
  }, []);

  //empty out any error message
  //if user changes user/pwd state (anyth in username/pw field), will make error disappear bc alr error is read and making adjustments
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  return (
    <section>
      {/*error msg display*/}
      {/*aria-live=assertive: screen reader announce msg immediately when focus is set on this para*/}
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>Sign In</h1>
      <form>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
        />
      </form>
    </section>
  );
};

export default Login;
