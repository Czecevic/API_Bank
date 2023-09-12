import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getToken, getUser } from "../API/api";
export const Signin = () => {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const [errorMessage, setErrorMessage] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    // `steve@rogers.com`, `password456`
    const token = await getToken(user, password);
    // console.log(token);

    if (token !== "error") {
      // envoyer le token dans getUser
      const useToken = await getUser(token);
      // console.log(useToken);
      if (useToken !== "not found") {
        navigate("/userPage");
      }
    }
    // const updateProfile = updateUser(
    //   token,
    //   useToken.firstName,
    //   useToken.lastName
    // );
    // console.log(updateProfile);

    setUser("");
    setPassword("");
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label>Username</label>
            <input
              type="text"
              id="username"
              value={user}
              onChange={(e) => dispatch(setUser(e.target.value))}
            />
          </div>
          <div className="input-wrapper">
            <label>Password</label>
            <input
              type="current-password"
              id="password"
              value={password}
              onChange={(e) => {
                dispatch(setPassword(e.target.value));
              }}
            />
            {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label>Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};
