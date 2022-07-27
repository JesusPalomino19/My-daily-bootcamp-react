function Navbar() {
  return (
    <div className="bg-white sticky top-0  shadow-lg shadow-[eeeff2] relative z-10 ">
      <header className="w-full border-b-1.5 border-blue-700 relative max-w-[100vw] flex justify-center min-w-[100vw]">
        <nav className=" max-w-[1441px] relative w-[100vw]">
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
        </nav>
      </header>
    </div>
  );
}
export default Navbar;
