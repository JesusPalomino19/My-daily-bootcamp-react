function Navbar() {
  return (
    <div className="bg-white sticky top-0  shadow-lg shadow-[eeeff2]  ">
      <header className="w-full border-b-1.5 border-blue-700 relative max-w-[1441px] ml-auto mr-auto min-w-[1441px]">
        <nav>
          <ul className="flex justify-center relative">
            <li>
              <a
                className="w-[80px] h-[70px] flex justify-center items-center relative text-[#788292] hover:bg-[#f0f7ff] hover:text-[#1877f2]"
                href="#"
              >
                {" "}
                All{" "}
              </a>
            </li>
            <li>
              <a
                className="w-[80px] h-[70px] flex justify-center items-center relative text-[#788292] hover:bg-[#f0f7ff] hover:text-[#1877f2]"
                href="#"
              >
                {" "}
                Me{" "}
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center absolute h-full top-0 left-[62px]">
          <a className="flex " href="index.html">
            <img
              className="mr-2"
              src="https://my-daily-bootcamp.netlify.app/assets/logo.svg"
              alt="bootcamp logo"
            />
            <h2 className="font-[Montserrat] font-[700] text-[18px] leading-[22px] text-[#203758]">
              My Daily Bootcamp
            </h2>
          </a>
        </div>
      </header>
    </div>
  );
}
export default Navbar;
