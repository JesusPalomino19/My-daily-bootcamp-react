
function MyTeam(){
  return <div className="mt-[25px]">
            <h2 className="mb-[20px] text-[#203758] text-[17px] font-[700] font-monserrat">My team</h2>
            <div className="items-left flex flex-col w-[274px] h-[242px] bg-red-600 rounded-[10px] gap-y-[2px]">
              <div className="bg-white flex gap-[20px] h-[60px] items-center pl-[20px] rounded-tl-[10px] rounded-tr-[10px]">
                <a className=" flex gap-[10px] content-center items-center" href="#">
                  <img
                    class="rounded-[50px] border-2 border-white shadow-lg hover:border-[#1877f2]"
                    src="http://127.0.0.1:5500/assets/team/team-1.jpg"
                    alt="Alden Cantrell"
                  />
                  <p className="text-[13px] text-[#788292] text-center content-center hover:text-[#1877f2]">Alden Cantrell</p>
                </a>
              </div>
              <div className="bg-white flex h-[60px] items-center pl-[20px]">
                <a className=" flex gap-[10px] content-center items-center"  href="#">
                  <img
                    className="rounded-[50px] border-2 border-white shadow-lg hover:border-[#1877f2]"
                    src="http://127.0.0.1:5500/assets/team/team-2.jpg"
                    alt="Thomas Crane"
                  />
                  <p className="text-[13px] text-[#788292] text-center content-center hover:text-[#1877f2]">Thomas Crane</p>
                </a>
              </div>
              <div className="bg-white flex h-[60px] items-center pl-[20px]">
                <a className=" flex gap-[10px] content-center items-center"  href="#">
                  <img
                    class="rounded-[50px] border-2 border-white shadow-lg hover:border-[#1877f2]"
                    src="http://127.0.0.1:5500/assets/team/team-3.jpg"
                    alt="Miranda Shaffer"
                  />
                  <p className="text-[13px] text-[#788292] text-center content-center hover:text-[#1877f2]">Miranda Shaffer</p>
                </a>
              </div>
              <div className="bg-white flex gap-[20px] h-[60px] pl-[20px] rounded-bl-[10px] rounded-br-[10px]">
                <a className=" flex gap-[10px] content-center items-center"  href="#">
                  <img
                    class="rounded-[50px] border-2 border-white shadow-lg hover:border-[#1877f2]"
                    src="http://127.0.0.1:5500/assets/team/team-4.jpg"
                    alt="Alvaro Mcgee"
                  />
                  <p className="text-[13px] text-[#788292] text-center content-center hover:text-[#1877f2]">Alvaro Mcgee</p>
                </a>
              </div>
            </div>
          </div>
}
export default MyTeam;
