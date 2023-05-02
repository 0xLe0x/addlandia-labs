import { InputHTMLAttributes } from "react";

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  name: string;
  value: string;
  className?: string;
  onChange: () => void;
}
