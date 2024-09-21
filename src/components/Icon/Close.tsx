import React from "react";

type Props = {
  className?: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

const CloseIcon: React.FC<Props> = ({ className, ...props }) => {
  return (
    <span
      className={
        "font-body rotate-45 rounded-[50%] border border-black p-0 px-[11px] text-[35px] leading-[1.2] hover:cursor-pointer " +
        className
      }
      {...props}
    >
      +
    </span>
  );
};

export default CloseIcon;
