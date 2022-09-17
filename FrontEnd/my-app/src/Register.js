import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

// [a-zA-Z]: start with lower/uppercase letter
// followed by 3-23 chars that is [a-zA-Z0-9-_] (letters, numbers, -, _)
// total: 4-24 char
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;

// pw require at least 1 lowercase, 1 uppercase, 1 number, 1 special case
// total: 8-24 char
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  //set focus on user input when component loads
  const userRef = useRef();
  //if get error, need put focus on that so it can be announced by screen reader for accessibility
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  //whether we have focus on that input field or not
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  //if successfully submit registration form
  const [success, setSuccess] = useState(false);

  //first time apply: set focus when component loads
  useEffect(() => {
    userRef.current.focus();
  }, []);

  //validate username
  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);
  // [] is dependency array

  // if any of the state in [user, pwd, matchPwd] changes, clear out error msg bc user has read err messages and is now making changes
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  return (
    <section>
      {/* if errMsg exist, class="errmsg", if not offscren, meaning the msg is offscreen, cant see, but still thr */}
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {" "}
        {errMsg}{" "}
      </p>
      <h1>Register</h1>
      <form>
        <label htmlFor="username">
          Username:
          <span className={validName ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={validName || !user ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <input
          type="text"
          id="username"
          // allow to set focus on input
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          required
          //indicate whether value entered is accepted format
          //lets screenreader announce whether input field needs adjustment before form is submitted
          aria-invalid={validName ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <p
          id="uidnote"
          className={
            userFocus && user && !validName ? "instructions" : "offscreen"
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          4 to 24 characters.
          <br />
          Must begin with a letter.
          <br />
          Letters, numbers, underscores, hyphens allowed.
        </p>
      </form>
    </section>
  );
};

export default Register;
