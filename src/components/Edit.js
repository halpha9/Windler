import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { database } from "../firebase";
import "./Edit.css"

function Edit() {
  const { user } = useSelector(selectUser);
  const [occupation, setOccupation] = useState("");
  const [company, setCompany] = useState("");
  const [age, setAge] = useState("");

  const editProfile = (e) => {
    e.preventDefault();

    database.collection("userInfo").add({
      email: user.email,
      job:occupation,
      company:company,
      age:age,
      photoUrl: user.photoUrl || "",

    });

    setOccupation("");
    setCompany("");
    setAge("");
  };

  return (
    <div class="edit">
      <form>
        <input 
        type="text"
        value={occupation}
        onChange={(e) => setOccupation(e.target.value)}
        placeholder="Occupation" />
        <input 
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company" />
        <input 
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age" />

        <button onClick={editProfile}> Save Changes</button>
      </form>

    </div>
  );
}

export default Edit;
