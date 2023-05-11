import { InputHTMLAttributes } from "react";

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  textarea?: boolean;
  className?: string;
  changeHandler?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
