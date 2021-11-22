import React from "react";
import EmployeesItem from "./EmployeesItem";

function Employees() {
  return (
    <div>
      <EmployeesItem
        p={{
          imgSrc: "https://picsum.photos/200",
          title: "Azmi",
          cardText: "PhoneNumber: 0785445517",
          cardEmail: "Email: AzmiTammam@gmail.com",
          linkClickText: "Submit",
          link: "https://google.com",
        }}
      />
      <EmployeesItem
        p={{
          imgSrc: "https://picsum.photos/201",
          title: "Mira",
          cardText: "PhoneNumber: 0785445517",
          cardEmail: "Email: AzmiTammam@gmail.com",
          linkClickText: "Submit",
          link: "https://twitter.com",
        }}
      />
      <EmployeesItem
        p={{
          imgSrc: "https://picsum.photos/202",
          title: "Sarah",
          cardText: "PhoneNumber: 0785445517",
          cardEmail: "Email: AzmiTammam@gmail.com",
          linkClickText: "Submit",
          link: "https://azzmmii.com",
        }}
      />
    </div>
  );
}

export default Employees;
