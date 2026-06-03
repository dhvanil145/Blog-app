"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"




const Nav = () => {
      const [activeVariable, setActiveVariable] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop) {
          setActiveVariable(section.id);
        }
      });
    });
  }, []);
    const router = useRouter()
  return (
    <div className="w-full bg-white/40 backdrop-blur-md top-0 fixed p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
            <h2 className="text-2xl">My<span className="text-blue-800 font-bold">Blog</span></h2>
            <ul className="flex justify-center items-center gap-6">
                <li><Link href="#home" className={activeVariable === "hero"?"font-bold underline":""}>Hero</Link></li>
                <li><Link href="#info" className={activeVariable === "info"?"font-bold underline":""}>Info</Link></li>
                <li><Link href="#services" className={activeVariable === "services"?"font-bold underline":""}>Services</Link></li>
                <li><Link href="#about" className={activeVariable === "about"?"font-bold underline":""}>About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
            </ul>
            <Button onClick={() => router.push("/login")}>Login</Button>
        </div>
    </div>
  )
}

export default Nav