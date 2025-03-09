import { useEffect } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router";

export default function ErrorBoundary() {
  const error = useRouteError() as Error;

  // Global error handler
  useEffect(() => {
    if (import.meta.env.PROD) {
      /**
       * TODO: log errors to third-party service
       * @see https://github.com/grafana/loki
       */
    } else {
      console.error(error);
    }
  }, [error]);

  return (
    <div className="flex h-screen">
      <div className="mx-auto mt-36 text-center">
        <h1 className="text-xl">
          {isRouteErrorResponse(error)
            ? error.status
            : "Oops! something went wrong..."}
        </h1>
        <p className="py-1 font-light">
          We weren&rsquo;t able to load that page.
        </p>
        <p className="text-xs">Reason: The request timed out.</p>

        {import.meta.env.DEV && (
          <p className="my-2 text-xs text-error">
            {isRouteErrorResponse(error) ? error.statusText : error.message}
          </p>
        )}

        <button
          className="btn btn-primary btn-sm mt-2"
          onClick={() => {
            location.reload();
          }}
        >
          Reload page
        </button>
      </div>
    </div>
  );
}
