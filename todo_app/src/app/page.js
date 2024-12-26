// import styles from './page.module.css'
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const handleNavigation = (nav) => {
    router.push(nav);
  };
  return (
    <>
      <div>
        <h1>this is home page</h1>
        <Link href="/about">ABOUT</Link>
        <br></br>
        <Link href="/contact">CONTACT</Link>
        <Link href="/studentlist">studentList</Link>
        <hr></hr>
        <button onClick={() => handleNavigation("/about")}>ABOUT</button>
        <button onClick={() => handleNavigation("/contact")}>CONTACT</button>
        <button onClick={() => handleNavigation("/product")}>Product</button>
        <button onClick={() => handleNavigation("/productlist")}>Product List</button>
        <button onClick={() => handleNavigation("/users")}>User List</button>
        <button onClick={() => handleNavigation("/customer")}>Customer</button>
        <button onClick={() => handleNavigation("/adduser")}>Add user</button>
        <button onClick={() => handleNavigation("/api")}>API</button>
        <button onClick={() => handleNavigation("/practise1")}>Use props</button>
      </div>
    </>
  );
}
