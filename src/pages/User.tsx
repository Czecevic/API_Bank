import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, selectUser } from "../stores/User.stores";
import { PopUp } from "../components/PopUp";

// interface LocationState {
//   user: string;
// }

export const User: React.FunctionComponent = () => {
  const userData = useSelector(selectUser);
  console.log(userData);
  const dispatch = useDispatch();
  const [trigger, setTrigger] = useState<boolean>(false);
  // console.log(userData);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedData = JSON.parse(storedUser);
      dispatch(updateUser(parsedData));
    }
  }, [dispatch]);

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setTrigger(!trigger);
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {/* <span onChange={(e) => setEditUser(e.target.value)}>{user}</span> */}
          <span>
            {userData.firstName} {userData.lastName}
          </span>
        </h1>
        <button className="edit-button" onClick={(e) => handleEdit(e)}>
          Edit Name
        </button>
        <PopUp trigger={trigger} setTrigger={setTrigger}></PopUp>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
};
