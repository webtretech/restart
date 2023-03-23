import { useErrorBoundary } from "react-error-boundary";

export default function ErrorFallback(): JSX.Element {
  const { resetBoundary } = useErrorBoundary();

  return (
    <div className="flex h-screen">
      <div className="m-auto text-center">
        <h1 className="font-serif text-xl">Oops! something went wrong...</h1>
        <p className="py-2 font-light">
          We weren&lsquo;t able to load that page.
        </p>
        <p className="pb-4 text-xs">Reason: The request timed out.</p>

        <button
          className="btn-primary btn-md btn normal-case"
          onClick={resetBoundary}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
