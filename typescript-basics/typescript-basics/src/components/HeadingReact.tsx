import React from "react";
interface HeadingReactProps {
  children: React.ReactNode;
}
const HeadingReact: React.FC<HeadingReactProps> = ({ children }) => {
  return <code>{children}</code>;
};

export default HeadingReact;
