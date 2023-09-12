/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { signin } from "../actions/actions";

// interface LocationState {
//   user: string;
// }

export const User: React.FunctionComponent = () => {
  const { user } = useParams();
  const [editUser, setEditUser] = useState<string | undefined>(user);
  const dispatch = useDispatch();

  const handleEdit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    const postData: { user: string | undefined } = {
      user: user,
    };
    dispatch(signin(postData));
  };

  return (
    <main className="main bg-dark">
      <div className="header" onSubmit={(e) => handleEdit(e)}>
        <h1>
          Welcome back
          <br />
          <span onChange={(e) => setEditUser(e.target.value)}>{user}</span>
        </h1>
        <button className="edit-button">Edit Name</button>
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
