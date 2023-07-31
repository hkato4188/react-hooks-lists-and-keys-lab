import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const NavLinks = () => links.map(page => <a key={page} href={"#" + page}>{page}</a>)
  return (<nav>
    <NavLinks />
  </nav>);
}

export default NavBar;
