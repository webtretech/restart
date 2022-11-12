export default function ErrorFallback() {
  return (
    <div className="flex h-screen">
      <div className="m-auto text-center">
        <h1 className="font-serif text-xl">Oops! something went wrong...</h1>
        <p className="py-2 font-light">We weren't able to load that page.</p>
        <p className="pb-4 text-xs">Reason: The request timed out.</p>

        <a href="/" className="btn-primary btn-md btn normal-case">
          Return to home page
        </a>
      </div>
    </div>
  );
}
