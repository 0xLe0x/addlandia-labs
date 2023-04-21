import type { PropsWithChildren } from "react";

export interface ArrowLinkProps extends PropsWithChildren {
  onClick?: () => void;
  href?: string;
  fill?: boolean;
  primary?: boolean;
  noPadding?: boolean;
  showArrow?: boolean;
}
