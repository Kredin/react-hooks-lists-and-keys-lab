import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const aLinks = links.map((item) => (
    <a key={item} href={"#" + item}>
      {item}
    </a>
  ));

  return (
    <nav>
      {
        /* display an <a> tag for each link here */
        aLinks
      }
    </nav>
  );
}

export default NavBar;
