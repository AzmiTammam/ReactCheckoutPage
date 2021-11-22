import React from 'react';


function Header() {
      let client = 'Azmi'
      const title = {
            programmer: "Programming",
            designer: "Design"
      };

      const userInfo = { // Object
            fname: 'Azmi',
            lname: 'Al-Tammam'
      }

      return (
            <div className="navbar bg-dark rounded text-white">
                  Hello {`${userInfo.fname} ${userInfo.lname} `}
                  <h1>{client === 'Azmi' ? title.programmer : title.designer} is my life</h1>
            </div>
      );
};

export default Header;