function MyTeam({ users }) {
  return (
    <div className="mt-[25px]">
      <h2 className="mb-[20px] text-[#203758] text-[17px] font-[700] font-monserrat">
        My team
      </h2>
      <div className="items-left flex flex-col w-[274px] h-max bg-red-600 rounded-[10px] gap-y-[2px] overflow-hidden">
        {users.map(function (user, index) {
          return <UserPart key={index} user={user} />;
        })}
      </div>
    </div>
  );
}
function UserPart({ user }) {
  return (
    <div className="bg-white flex h-[60px] items-center pl-[20px] height[59px]">
      <a
        className=" flex gap-[10px] content-center items-center"
        target={"_blank"}
        href={user.twitter_url}
      >
        <img
          className="w-[38px] h-[38px] rounded-[50px] border-2 border-white shadow-lg hover:border-[#1877f2]"
          src={user.profile_url}
        />
        <p className="text-[13px] text-[#788292] text-center content-center hover:text-[#1877f2]">
          {user.full_name}
        </p>
      </a>
    </div>
  );
}
export default MyTeam;
