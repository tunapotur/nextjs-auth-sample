import Link from 'next/link';

export default function RegisterForm() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="rounded-lg border-t-4 border-green-400 p-5 shadow-lg">
        <h1 className="my-4 text-xl font-bold">Register</h1>

        <form className="flex flex-col gap-3">
          <input className="input" type="text" placeholder="Full Name" />
          <input className="input" type="text" placeholder="Email" />
          <input className="input" type="password" placeholder="Password" />
          <button className="cursor-pointer bg-green-600 px-6 py-2 font-bold text-white">
            Register
          </button>

          <div className="mt-2 w-fit rounded-md bg-red-500 px-3 py-1 text-sm text-white">
            Error message
          </div>

          <Link className="mt-3 text-right text-sm" href={'/'}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
