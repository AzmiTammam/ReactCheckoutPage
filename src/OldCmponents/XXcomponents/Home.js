import React from "react";

function Home() {
      return(
            <div className='row rowHome'>
                  <div className='col-md'>
                        <img src="https://picsum.photos/350" alt="." />
                  </div>
                  <div className='col-md info'>
                  <h1>
                        AzmiTammam
                  </h1>
                  <p>
                        Texttextextetxtetxtetxt
                  </p>
                  <a href="."> <button className="text-dark px-3 rounded">Send email</button> </a>
                  </div>
            </div>
      );
}

export default Home;