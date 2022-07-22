function UserButton({ children }) {

  return (
    <a className="bg-[#f0f7ff] w-max h-max py-3 px-4 font-Roboto rounded-[4px] hover:bg-[#1877f2] hover:text-[#f0f7ff] font-monserrat text-[11px] font-bold text-[#1877f2] cursor-pointer">
      {children}
    </a>
  );
}

export default UserButton;
