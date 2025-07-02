import { ReactNode } from "react";

interface ContainerLayoutProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerLayoutProps) => {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">{children}</div>
  );
};

export default Container