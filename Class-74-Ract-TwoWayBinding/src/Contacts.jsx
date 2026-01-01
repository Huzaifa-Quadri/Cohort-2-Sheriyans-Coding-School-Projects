import React, { useState } from "react";

const Contacts = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [imageUrl, setimageUrl] = useState("");

  const [details, setdetails] = useState([]);

  function submitForm(e) {
    e.preventDefault();
    console.log("Form Submitted");
    const prevAllUsers = [...details];
    prevAllUsers.push({ name, imageUrl, email, phone });
    console.log(prevAllUsers);

    setdetails(prevAllUsers);
    setname("");
    setimageUrl("");
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
    <div className="h-screen w-full bg-gray-500 px-5">
      <div className="">
        <form action="" className="flex gap-2 flex-wrap py-10">
          <div className="flex items-center gap-3 flex-wrap">
            <p className="text-black text-2xl">Name : </p>
            <input
              type="text"
              placeholder="Enter Name"
              className="bg-white text-black text-bold border-2 border-white rounded-xl p-2 w-200"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <p className="text-black text-2xl">ImageUrl : </p>
            <input
              type="text"
              placeholder="Image Url"
              className="bg-white text-black text-bold border-2 border-white rounded-xl p-2 w-200"
              value={imageUrl}
              onChange={(e) => setimageUrl(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3">
            <p className="text-black text-2xl">Email : </p>
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-white text-black text-bold border-2 border-white rounded-xl p-2 w-200"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3">
            <p className="text-black text-2xl">Phone : </p>
            <input
              type="number"
              placeholder="Enter Phone"
              className="bg-white text-black text-bold border-2 border-white rounded-xl p-2 w-200"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
          </div>

          <button
            className="bg-blue-600 text-white p-2 rounded-xl w-fit"
            onClick={(e) => submitForm(e)}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="bg-yellow-300 h-full w-full flex flex-wrap gap-5 py-5 px-10">
        {details.map((item, idx) => {
          return (
            <div className="h-100 w-50  py-5 px-5 flex flex-col gap-5 bg-blue-400 rounded-xl items-center justify-center">
              <img
                src={item.imageUrl}
                alt="profile image"
                className="h-20 w-20 rounded-full border-2 border-white object-cover"
              />

              <h1 className="text-white text-2xl">{item.name}</h1>
              <p className="text-white text-xl">{item.email}</p>
              <p className="text-white text-xl">{item.phone}</p>

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
  );
};

export default Contacts;
