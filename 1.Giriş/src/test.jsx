import React from "react";

function test() {
  // Jsx :{}
  let a = 15;
  const lastname = "Numanoglu";
  let vize1 = 60;
  let vize2 = 70;
  let sonuc = true;
  let isimler = ["Emre", "Enes", "Halise", "Zehra"];
  let liste = [];
  return (
    <div>
      {/* <pre>
        {lastname} <t></t>
        degiskeninin degeri = {a}
      </pre>
      <p>Ortalama = {(vize1 + vize2) / 2}</p>
      {sonuc ? <p>Ehliyeti alabilirsiniz</p> : <p>Ehliyeti alamazsin kaybol</p>}
      {(vize1+vize2)/2 >=50 ? <p> dersten gectin aferin</p> : <p>dersten kaldin gecmis olsun </p> } */}
      {isimler.map((isim, index) => (
        <div style={{ backgroundColor: "Orange", 
        border: "1px solid white" }}>
          {" "}
          key={index} {isim}
        </div>
      ))}
    </div>
  );
}

export default test;
