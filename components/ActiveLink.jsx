import Link from "next/link";
import React from "react";

const style = {
  color: "#0070f3",
  textDecoration: "underline",
};

export const ActiveLink = ({ text, href }) => {
  return (
    <Link href={href}>
      <a style={style}></a>
    </Link>
  );
};
