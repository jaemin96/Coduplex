"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const DTheader = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleMenu = () => setVisible((prev) => !prev);

  useEffect(() => {
    return () => {
      // clear
    };
  }, []);

  return (
    <>
      <div className="container">
        {/* 로고 영역 */}
        <div className="logo">
          <Image src="/imgs/en.png" width={130} height={50} alt="home-logo" />
        </div>

        {/* 내비게이션 영역 */}
        <nav className="nav">
          <a href="/about" className="nav-item">
            About
          </a>
        </nav>
      </div>
    </>
  );
};

export default DTheader;
