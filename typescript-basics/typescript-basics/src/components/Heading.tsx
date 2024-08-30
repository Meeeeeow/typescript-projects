import React from "react";
// type HeadingProps = {
//   children: string;
// };

// const Heading = ({ children }: HeadingProps) => {
//   return <h4>{children}</h4>;
// };

// export default Heading;
interface HeadingProps {
  children: string;
}
const Heading: React.FC<HeadingProps> = (props) => {
  return <h4>{props.children}</h4>;
};

export default Heading;
