import React, { useState } from "react";
import InputComponent from "./Components/InputComponent";
const Contacts1 = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");

  const [details, setdetails] = useState([]);

  function submitForm(e) {
    e.preventDefault();
    console.log("Form Submitted");
    const prevAllUsers = [...details];
    prevAllUsers.push({ name, email, phone });
    console.log(prevAllUsers);

    setdetails(prevAllUsers);
    setname("");
    setemail("");
    setphone("");
  }

  function deleteHandler(id) {
    const users = [...details];
    users.splice(id, 1);
    setdetails(users);
    console.log(users);
    console.log("User Detail Deleted");
  }

  return (
    <div className="bg-gray-600 w-full h-full">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-3xl text-white font-bold uppercase text-center my-10">
          Contacts Form
        </h1>
        <form
          className="flex flex-col items-center gap-3"
          onSubmit={(e) => {
            submitForm(e);
          }}
        >
          <div className="flex items-center gap-3">
            <p className="text-green-500 text-2xl">Name : </p>
            <input
              type="text"
              placeholder="Enter Name"
              className="bg-white text-black text-bold border-2 border-white rounded-xl p-2 w-[10 rem]"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3">
            <p className="text-green-500 text-2xl">Email : </p>
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-white text-black text-bold border-2 border-white rounded-xl p-2 w-[10 rem]"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3">
            <p className="text-green-500 text-2xl">Phone : </p>
            <input
              type="number"
              placeholder="Enter Phone"
              className="bg-white text-black text-bold border-2 border-white rounded-xl p-2 w-[10 rem]"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
          </div>

          {/* <InputComponent name="Name" type="text" placeholder="Enter Name"/>
                <InputComponent name="Email" type="email" placeholder="Enter Email"/>
                <InputComponent name="Phone" type="number" placeholder="Enter Phone"/> */}

          <button
            type="submit"
            className="bg-blue-700 text-white border-2 border-white rounded-xl px-4 py-2 w-fit mt-5"
          >
            Submit
          </button>
        </form>

        <div className="h-120 w-full bg-black mt-10 flex flex-col gap-4 text-white py-5 px-10">
          {details.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex gap-3 text-white bg-yellow-500 p-2 rounded-xl items-center"
              >
                <h2>{item.name}</h2>
                <h2>{item.email}</h2>
                <h2>{item.phone}</h2>
                <button
                  className="bg-red-600 text-white p-2 rounded-xl w-fit"
                  onClick={() => deleteHandler(idx)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contacts1;
