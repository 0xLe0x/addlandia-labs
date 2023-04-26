import type { PropsWithChildren } from "react";
import React from "react";

export interface ServiceCardProps extends PropsWithChildren {
  icon: React.ReactNode;
  title: string;
  href?: string;
  large?: boolean;
}
