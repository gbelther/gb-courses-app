import { ButtonHTMLAttributes, ReactNode } from "react";
import { CustomButton } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...props }: IButtonProps) {
  return (
    <div>
      <CustomButton {...props}>{children}</CustomButton>
    </div>
  );
}
