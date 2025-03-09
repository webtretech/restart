import { TailSpin, TailSpinProps } from "@/components/TailSpin";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type Props = Omit<TailSpinProps, "color" | "wrapperStyle"> & {
  fullScreen?: boolean;
};

export default function Spinner({
  fullScreen = true,
  wrapperClass,
  ...props
}: Props) {
  return (
    <div
      className={twMerge(
        clsx("flex w-full", { "my-2.5": !fullScreen }),
        wrapperClass,
      )}
    >
      <TailSpin
        height={50}
        width={50}
        {...props}
        ariaLabel="tail-spin-loader"
        radius="1"
        wrapperClass={clsx("mx-auto", { "mt-[25vh]": fullScreen })}
      />
    </div>
  );
}
