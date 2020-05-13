import React from "react";
import Link from "next/link";
import { NavStyle } from "./NavStyle";

const Nav = () => (
  <NavStyle>
    <ul>
      <li>
        <Link href="/home">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/new">
          <a>New</a>
        </Link>
      </li>
    </ul>
  </NavStyle>
);

export default Nav;
