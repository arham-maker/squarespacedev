"use client";

import {
  Children,
  isValidElement,
  type ButtonHTMLAttributes,
  type ComponentPropsWithoutRef,
  type MouseEvent,
  type ReactNode,
} from "react";
import { useLeadForm } from "@/components/providers/lead-form-provider";
import { BtnPrimaryContent } from "@/components/ui/btn-primary-content";

type CtaButtonBaseProps = {
  className?: string;
  children?: React.ReactNode;
  opensLeadForm?: boolean;
};

type CtaButtonLinkProps = CtaButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof CtaButtonBaseProps> & {
    opensLeadForm?: false;
    href: string;
  };

type CtaButtonModalProps = CtaButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CtaButtonBaseProps> & {
    opensLeadForm: true;
    href?: never;
  };

type CtaButtonProps = CtaButtonLinkProps | CtaButtonModalProps;

function getButtonClasses(className?: string) {
  return className && /\bbtn\b/.test(className)
    ? className
    : ["btn btn-primary", className].filter(Boolean).join(" ");
}

function usesSplitPrimaryLayout(className?: string) {
  if (!className) return true;
  if (/\bbtn-outline\b|\bbtn-outline-light\b|\bbtn-inverse\b/.test(className)) {
    return false;
  }
  return /\bbtn-primary\b/.test(className) || !/\bbtn\b/.test(className);
}

function isIconChild(node: ReactNode) {
  if (!isValidElement(node)) return false;
  if (node.type === "svg") return true;

  const props = node.props as { className?: string; "aria-hidden"?: boolean };
  return Boolean(props["aria-hidden"] || props.className?.includes("shrink-0"));
}

function renderButtonChildren(children: ReactNode, className?: string) {
  if (!usesSplitPrimaryLayout(className)) return children;

  const nodes = Children.toArray(children);
  const label: ReactNode[] = [];
  const icons: ReactNode[] = [];

  for (const node of nodes) {
    if (isIconChild(node)) icons.push(node);
    else label.push(node);
  }

  return (
    <BtnPrimaryContent icon={icons[0] ?? undefined}>
      {label}
    </BtnPrimaryContent>
  );
}

export function CtaButton(props: CtaButtonProps) {
  const { className, children, opensLeadForm, onClick, ...rest } = props;
  const { openLeadForm } = useLeadForm();
  const classes = getButtonClasses(className);
  const content = renderButtonChildren(children, className);

  if (opensLeadForm) {
    const buttonProps = rest as Omit<
      ButtonHTMLAttributes<HTMLButtonElement>,
      "type" | "onClick"
    >;

    const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
      (onClick as ButtonHTMLAttributes<HTMLButtonElement>["onClick"])?.(event);
      openLeadForm();
    };

    return (
      <button
        type="button"
        className={classes}
        onClick={handleOpen}
        {...buttonProps}
      >
        {content}
      </button>
    );
  }

  const { href, ...anchorProps } = rest as ComponentPropsWithoutRef<"a">;

  return (
    <a className={classes} href={href} onClick={onClick} {...anchorProps}>
      {content}
    </a>
  );
}
