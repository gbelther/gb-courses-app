import { ReactNode } from "react";
import { CustomButton } from "./styles";

interface IButtonProps {
  children: ReactNode;
}

export function Button({ children }: IButtonProps) {
  return (
    <div>
      <CustomButton>{children}</CustomButton>
    </div>
  );
}
