import React from "react";

interface IChildren{
  children : React.ReactNode
}
function Container({children} : IChildren) {
  return <div className="w-[90%] mx-auto">{children}</div>;
}

export default Container;
