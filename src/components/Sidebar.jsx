export const Sidebar = ({ children, isOpen, setClose }) => {
  return (
    <div>
      <div
        className={`p-5 bg-white h-full w-full md:w-[50%] lg:w-[35%] fixed top-0 right-0 z-50 duration-700 dark:bg-night overflow-y-auto
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={() => setClose(false)}
          className=" absolute top-2 right-4 p-2 text-black dark:text-white"
        >
          X
        </button>
        <div>{children}</div>
      </div>
      {isOpen && (
        <div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50"></div>
      )}
    </div>
  );
};
