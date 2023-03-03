import React, { useState } from "react";
import "./MyList.css";
import { getPeople } from "../proxi";

const MyList = () => {
  const [people, setPeople] = useState([]);

  //filling array
  //debugger;
  const onClickHandler = async () => {
     setPeople(  await getPeople());
  };

  const showResults = () => {
    if (people.length === 0) {
      return <div className="make-frame">No Members</div>;
    } else {
      return people.map((member) => {
        return (
          <div className="make-frame" key={member}>
            {member}
          </div>
        );
      });
    }
  };

  return (
    <div>
      <h2>This is a list </h2>
      <button onClick={onClickHandler}> Print List </button>
      <div>{showResults()}</div>
    </div>
  );
};

export default MyList;
