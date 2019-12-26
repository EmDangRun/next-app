import React from "react";
import Link from "next/link";
import { NavStyle } from "./NavStyle";

const Nav = () => (
  <NavStyle>
    <ul>
      <li>
        <Link href="/home">Home</Link>
      </li>
      <li>
        <Link href="/new">New</Link>
      </li>
    </ul>
  </NavStyle>
);

export default Nav;
