export default function UserInfo() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="bg-zince-300/10 my-6 flex flex-col gap-2 p-8 shadow-lg">
        <div>
          Name: <span className="font-bold">John</span>
        </div>
        <div>
          Email: <span className="font-bold">john@gmail.com</span>
        </div>
        <button className="mt-3 bg-red-500 px-6 py-2 font-bold text-white">
          Log Out
        </button>
      </div>
    </div>
  );
}
