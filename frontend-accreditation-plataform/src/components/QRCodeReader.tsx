import React, { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";

function Scan() {
  const [data, setData] = useState("");

  return (
    <div >
      <div >
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              console.log(result);
              window.alert('funcionou')
            }
            if (!!error) {
              console.info(error);
              window.alert('DEU MERDA',)
            }
          } 
        }
//this is facing mode : "environment " it will open backcamera of the smartphone and if not found will 
// open the front camera
        constraints    ={{ facingMode:  "environment"  }}
        />
        <p>{data}</p>
      </div>
    </div>
  );
}

export default Scan;