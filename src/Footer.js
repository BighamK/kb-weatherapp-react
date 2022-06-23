import React from "react";


export default function Footer() {
  let sourceData = {
    open: "https://github.com/BighamK/kb-weatherapp-react"
  };

  return (
    <div className="footer">
      <footer>
        <h4>
          {" "}
          <a href={sourceData.open}>Open-source Code </a> by K. Bigham
        </h4>
        <h5>Background by K. Bigham using Procreate</h5>
      </footer>
    </div>
  );
}