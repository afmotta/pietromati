export function Button({ children, ...props }) {
  return (
    <button
      className='rounded bg-main-light px-3.5 py-2.5 text-sm font-semibold text-main-dark shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400'
      {...props}
    >
      {children}
    </button>
  );
}
