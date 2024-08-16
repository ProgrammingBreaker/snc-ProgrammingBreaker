import { FunctionComponent, PropsWithChildren } from "react";
import classNames from "classnames";

type ButtonProps = {
  isSelected?: boolean;
  onClick?: () => void;
};

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  isSelected = false,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={classNames(
        "px-2 py-1 border border-black",
        { "bg-blue-500 text-white": isSelected },
        { "bg-white text-black": !isSelected },
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
