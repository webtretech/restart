import { TailSpin } from "react-loader-spinner";

interface SpinnerProps {
  visible?: boolean;
  wrapperClass?: string;
}

export default function Spinner(props: SpinnerProps): JSX.Element {
  return (
    <div className="flex h-screen">
      <TailSpin
        radius="1"
        width="50"
        height="50"
        visible={true}
        ariaLabel="tail-spin-loader"
        wrapperClass="mx-auto mt-[25vh]"
        {...props}
      />
    </div>
  );
}
