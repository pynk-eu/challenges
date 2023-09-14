import React from "react";
import "./styles.css";
import Card from "./components/Card";
import Title from "./components/Title";
import { USERS } from "./db";
import { Fragment } from "react";

export default function App() {
  return (
    <main className="app">
      <Title text="ClientBoard" />
      <div className="app__card-grid">
        {USERS.map((user) => {
          return (
            <Fragment key={user.id}>
              <Card user={user} />
            </Fragment>
          );
        })}
      </div>
    </main>
  );
}
