import type { PropsWithChildren } from "react";
import React from "react";

export interface FeatureCardProps extends PropsWithChildren {
  icon: React.ReactNode;
  title: string;
}
