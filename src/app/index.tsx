import * as React from "react";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Index: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default Index;
