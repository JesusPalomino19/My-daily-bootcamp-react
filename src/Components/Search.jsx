function Search({ children }) {
  return (
    <form className=" group  py-3 px-6 flex justify-between w-[622px] focus-within:border-[#1877f2] hover:border-[#1877f2] border-[2px] rounded-lg  cursor-pointer pr-0">
      <input
        className="w-full outline-none border-none text-center pointer-events-none font-monserrat text-[15px] text-[#788292]"
        type="text"
        placeholder="What did you learn today Paul?"
      />
      <svg
        width="16"
        height="19"
        viewBox="0 0 16 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-[15px]"
        fill="none"
      >
        <g opacity="0.5">
          <path
            className="group-hover:stroke-[#1877f2]"
            d="M8.23413 19L8.23413 1.08571"
            stroke="#788292"
          ></path>
          <path
            className="group-hover:stroke-[#1877f2]"
            d="M15.5 8.35142L8.23423 1.08569L0.968505 8.35142"
            stroke="#788292"
          ></path>
        </g>
      </svg>
    </form>
  );
}

export default Search;
