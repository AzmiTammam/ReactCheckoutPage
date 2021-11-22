import React from "react";
import TeamMember from "./TeamMember";

function Team() {
  const info = [
    {
      id: 1,
      img: "https://picsum.photos/200",
      name: "Azmi",
      job: "FullStack Developer",
      email: "Azmi@gmail.com",
      phone: "0785445517",
    },
    {
      id: 2,
      img: "https://picsum.photos/200",
      name: "Mira",
      job: "Frontend Developer",
      email: "Azmi@gmail.com",
      phone: "0785445517",
    },
    {
      id: 3,
      img: "https://picsum.photos/200",
      name: "Sara",
      job: "MeanStack Developer",
      email: "Azmi@gmail.com",
      phone: "0785445517",
    },
    {
      id: 4,
      img: "https://picsum.photos/200",
      name: "Hala",
      job: "MernStack Developer",
      email: "Azmi@gmail.com",
    },
    {
      id: 5,
      img: "https://picsum.photos/200",
      name: "Maya",
      job: "Designer Developer",
      email: "Azmi@gmail.com",
    },
    {
      id: 6,
      img: "https://picsum.photos/200",
      name: "Mallak",
      job: "UI  UX Developer",
      email: "Azmi@gmail.com",
    },
  ];

  const members = info.map(function (member) {
    return (
      <TeamMember
        img={member.img}
        name={member.name}
        job={member.job}
        email={member.email}
        phone={member.phone}
      />
    );
  });

  return (
    <div className="row">
      {members}
    </div>
  );
}

export default Team;
