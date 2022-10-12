import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 w-full h-12 py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300"
      )}
    >
      {children}
    </div>
  );
}

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInput(props: TextInputProps) {
  return (
    <input
      className={clsx(
        "bg-transparent flex-1 outline-none text-gray-100 text-sm placeholder:text-gray-400"
      )}
      {...props}
    />
  );
}

export const TextInputComponent = {
  Root: TextInputRoot,
  Input: TextInput,
  Icon: TextInputIcon,
};
