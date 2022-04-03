import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "../components/TinderCards.css";
import { database } from "../firebase";


function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div>
      <div class="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <div className="card__details">
                <h3>{person.name}</h3>
                <p>
                  {person.job}, {person.age}
                </p>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
