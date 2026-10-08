"use theme";
import React from "react";
import IconWrapper from "./icon-wrapper";
import { useTheme } from "next-themes";

function SystemTheme({className} : {className  ?:string}) {
  const { setTheme, theme } = useTheme();

  const themeHandler = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }

  };

  return (
    <IconWrapper
      onClickHandler={themeHandler}
      className={`hover:bg-third ${className}`}
      fill="third"
      icon={theme === "light" ? "tdesign:mode-light" : "iconamoon:mode-dark"}
    />
  );
}

export default SystemTheme;
