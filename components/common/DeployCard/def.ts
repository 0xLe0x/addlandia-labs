import React from "react";
import type { PropsWithChildren } from "react";

export interface DeployCardProps extends PropsWithChildren {
  icon: React.ReactNode;
  title: string;
  href?: string;
}
