import type { ReactNode } from "react";
import { FiChevronRight } from "react-icons/fi";

type BtnPrimaryContentProps = {
  children: ReactNode;
  icon?: ReactNode;
};

export function BtnPrimaryContent({ children, icon }: BtnPrimaryContentProps) {
  return (
    <>
      <span className="btn__label">{children}</span>
      <span className="btn__icon" aria-hidden>
        {icon ?? <FiChevronRight className="btn__icon-svg" strokeWidth={2.5} />}
      </span>
    </>
  );
}
