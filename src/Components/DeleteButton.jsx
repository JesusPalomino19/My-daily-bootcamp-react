function DeleteButton({ setShowDeleteButton, showDeleteButton, id }) {
  const deletePost = async () => {
    await fetch(`https://my-daily-bootcamp.herokuapp.com/posts/${id}.json?`, {
      method: "DELETE",
      body: id,
    });
    location.href = "/";
  };
  return (
    <div
      className={`${
        showDeleteButton ? "" : "hidden"
      } group absolute left-[-85px] bottom-[-155%] drop-shadow-md bg-white text-[11px] font-monserrat font-bold w-[111px] h-[32px] rounded-[8px] flex items-center justify-center `}
      onClick={deletePost}
    >
      <button className="flex w-[103px] h-[24px] items-center group-hover:bg-[#F0F7FF] rounded-[8px]">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pr-[3px] ml-[5px] "
        >
          <path
            d="M12.6667 4.66667L12.0887 12.7613C12.0648 13.0977 11.9143 13.4125 11.6675 13.6424C11.4207 13.8722 11.096 14 10.7587 14H5.24141C4.90417 14 4.57946 13.8722 4.33267 13.6424C4.08588 13.4125 3.93536 13.0977 3.91141 12.7613L3.33341 4.66667M6.66675 7.33333V11.3333M9.33341 7.33333V11.3333M10.0001 4.66667V2.66667C10.0001 2.48986 9.92984 2.32029 9.80482 2.19526C9.6798 2.07024 9.51023 2 9.33341 2H6.66675C6.48994 2 6.32037 2.07024 6.19534 2.19526C6.07032 2.32029 6.00008 2.48986 6.00008 2.66667V4.66667M2.66675 4.66667H13.3334"
            stroke="#203758"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Delete
      </button>
    </div>
  );
}
export default DeleteButton;
