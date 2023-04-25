import type { PropsWithChildren } from "react";
import React from "react";

export interface DeployCardProps extends PropsWithChildren {
  icon: React.ReactNode;
  title: string;
  href?: string;
}
