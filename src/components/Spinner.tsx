import { TailSpin } from "react-loader-spinner";

interface SpinnerProps {
  visible?: boolean;
  wrapperClass?: string;
}

export default function Spinner(props: SpinnerProps): JSX.Element {
  return (
    <div className="flex h-screen">
      <TailSpin
        ariaLabel="tail-spin-loader"
        height="50"
        radius="1"
        visible={true}
        width="50"
        wrapperClass="mx-auto mt-[25vh]"
        {...props}
      />
    </div>
  );
}
