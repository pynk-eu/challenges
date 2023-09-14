import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";
import { Fragment } from "react";

function Card({ user }) {
  return (
    <article className="card">
      <h2>{user.name}</h2>
      <ul className="card__taglist"></ul>
      {user.roles.map((role, id) => {
        return (
          <Fragment key={id}>
            <Tag tag={role} />
          </Fragment>
        );
      })}
      <p>{user.about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;
