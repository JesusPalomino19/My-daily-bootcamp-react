function UserButton({ children, isFull = false, onClick = () => {} }) {
  return (
    <a
      className={`${
        isFull ? "w-full" : ""
      } bg-[#f0f7ff] px-[25px] py-[10px] rounded-[4px] hover:bg-[#1877f2] hover:text-[#f0f7ff] font-monserrat font-bold text-[#1877f2] cursor-pointer flex justify-center items-center text-[13px]`}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </a>
  );
}

export default UserButton;
