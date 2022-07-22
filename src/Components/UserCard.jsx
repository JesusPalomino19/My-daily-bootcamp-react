import UserButton from "./UserButton";

function UserCard() {

  return (
    <div className="w-[274px] h-[246px] bg-white flex flex-wrap justify-between py-8 px-8 content-end rounded-[6px]">
      <img
        className="h-min mx-auto mb-[15px] drop-shadow-lg rounded-full border-solid border-4 border-white"
        src="https://my-daily-bootcamp.netlify.app/assets/me.jpg"
        alt=""
      />
      <h3 className="w-full text-center font-monserrat font-bold text-[#203758]">
        Paul Portillo
      </h3>
      <span className="w-full text-center text-[11px] font-monserrat mb-[20px] mt-[3px] text-[#788292]">
        Software Enginner
      </span>
      <UserButton>@yummta</UserButton>
      <UserButton>@Linkedin</UserButton>
    </div>
  );
}

export default UserCard;
