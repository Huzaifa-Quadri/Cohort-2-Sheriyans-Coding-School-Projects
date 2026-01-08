import React, { createContext } from "react";
export const UserDataContext = createContext();

// const UserContext = (prop) => {
const UserContext = ({ children }) => {
  // * doing same thing with destructuring
  const me = {
    name: "Huzaifa",
    age: 22,
    email: "huzaifa@gmail.com",
  };

  //? More Users
  const users = [
    {
      id: 1,
      name: "Aisha Sharma",
      email: "aisha.sharma@example.com",
      age: 28,
      location: "Indore, Madhya Pradesh",
      profession: "Frontend Developer",
      skills: ["JavaScript", "React", "Tailwind CSS", "Node.js"],
      experienceYears: 4,
      isActive: true,
    },
    {
      id: 2,
      name: "Rohan Patel",
      email: "rohan.patel@example.com",
      age: 32,
      location: "Bengaluru, Karnataka",
      profession: "Backend Engineer",
      skills: ["Java", "Spring Boot", "MySQL", "Firebase"],
      experienceYears: 6,
      isActive: true,
    },
    {
      id: 3,
      name: "Priya Singh",
      email: "priya.singh@example.com",
      age: 25,
      location: "Pune, Maharashtra",
      profession: "Full Stack Developer",
      skills: ["JavaScript", "Java", "React", "SQL"],
      experienceYears: 3,
      isActive: false,
    },
    {
      id: 4,
      name: "Vikram Desai",
      email: "vikram.desai@example.com",
      age: 29,
      location: "Mumbai, Maharashtra",
      profession: "Mobile App Developer",
      skills: ["Flutter", "Dart", "Firebase", "JavaScript"],
      experienceYears: 5,
      isActive: true,
    },
    {
      id: 5,
      name: "Ananya Gupta",
      email: "ananya.gupta@example.com",
      age: 22,
      location: "Indore, Madhya Pradesh",
      profession: "Junior Developer",
      skills: ["JavaScript", "CSS", "HTML", "Git"],
      experienceYears: 1,
      isActive: true,
    },
  ];

  return (
    <UserDataContext.Provider value={{ me, users }}>
      {/* {prop.children} */}
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContext;
