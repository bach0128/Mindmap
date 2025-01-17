import * as React from "react";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default ({ children }: Props) => {
  return <div>{children}</div>;
};
