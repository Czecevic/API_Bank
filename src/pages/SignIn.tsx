import { useState } from "react";
// import { useDispatch } from "react-redux";
import { getToken, getUser } from "../API/api";
import { updateUser } from "../stores/User.stores";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const Signin = () => {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = await getToken(user, password);

      if (token !== "error") {
        const userData = await getUser(token);
        if (userData !== "not found") {
          dispatch(updateUser(userData));
          localStorage.setItem("user", JSON.stringify(userData));
          return navigate("/user");
        }
      } else {
        setErrorMessage("Mot de passe ou nom d'utilisateur incorrect");
      }

      setUser("");
      setPassword("");
    } catch (error) {
      console.error("Une erreur s'est produite lors de la connexion :", error);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* mettre le message en rouge */}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};
