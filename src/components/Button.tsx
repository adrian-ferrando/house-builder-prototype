import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type Props<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<C>;

export const Button = <C extends React.ElementType = "button">({
  as,
  children,
  ...restOfProps
}: Props<C>) => {
  const As = as ?? "button";

  return (
    <As
      {...restOfProps}
      className={cn(
        "flex flex-col gap-y-2 items-center text-white w-32 px-10 h-full mb-3 bg-button shadow-button hover:shadow-button-hover hover:scale-110 transition-all duration-300 z-50",
        restOfProps.className
      )}
    >
      {children}
    </As>
  );
};
