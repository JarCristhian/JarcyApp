const SideBar = ({ isOpen, closeSideBar }) => {
  const navigation = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre Mi", href: "#about" },
    { name: "Experiencia", href: "#experience" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <>
      {isOpen && (
        <button className=" text-gray-400 dark:text-gray-300 fixed z-40 flex items-center cursor-pointer left-[7vw] top-3.5" onClick={closeSideBar}>
          <svg aria-hidden="true" role="img" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
            ></path>
          </svg>
        </button>
      )}

      <div
        className={`top-0 right-0 z-30 fixed w-full h-full bg-white dark:bg-body  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-200`}
      >
        <div className="mt-[15vh]">
          {navigation.map((item) => (
            <div className="mt-[10vh]" key={item.name}>
              <a
                href={item.href}
                onClick={closeSideBar}
                className="pl-[10vw] text-4xl text-gray-600 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-300"
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
