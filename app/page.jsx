import Image from "next/image";
import styles from "./page.module.css";
import avetor from "../public/images/Group 27.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import "./lib/fontawesome";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./component/NavBar";
import Link from "next/link";
import SignIn from "./component/SignIn";
// import 'bootstrap/dist/js/bootstrap.bundle.js';

export default function Home() {
  return (
    <>
      <SignIn></SignIn>
    </>
  );
}
