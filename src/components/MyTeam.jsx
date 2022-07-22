
function MyTeam(){
  return <div className="mt-[25px]">
            <h2 className="mb-[20px] text-[#203758] text-[17px]">My team</h2>
            <div className="items-center flex flex-col gap-x-{2px} w-[274px] h-[242px]">
              <div className="bg-white flex gap-[20px] h-[60px] items-center pl-20px rounded-tl-[10px] rounded-tr-[10px]">
                <a class="link-team" href="#">
                  <img
                    class="team-img"
                    src="http://127.0.0.1:5500/assets/team/team-1.jpg"
                    alt="Alden Cantrell"
                  />
                  <p class="text-teams">Alden Cantrell</p>
                </a>
              </div>
              <div className="bg-white flex h-[60px] items-center pl-[20px]">
                <a class="link-team" href="#">
                  <img
                    className="rounded-[50px] border-"
                    src="http://127.0.0.1:5500/assets/team/team-2.jpg"
                    alt="Thomas Crane"
                  />
                  <p>Thomas Crane</p>
                </a>
              </div>
              <div className="bg-white flex h-[60px] items-center pl-[20px]">
                <a class="link-team" href="#">
                  <img
                    class="team-img"
                    src="http://127.0.0.1:5500/assets/team/team-3.jpg"
                    alt="Miranda Shaffer"
                  />
                  <p>Miranda Shaffer</p>
                </a>
              </div>
              <div className="bg-white flex gap-[20px] h-[60px] items-center pl-20px rounded-bl-[10px] rounded-br-[10px]">
                <a class="link-team" href="#">
                  <img
                    class="team-img"
                    src="http://127.0.0.1:5500/assets/team/team-4.jpg"
                    alt="Alvaro Mcgee"
                  />
                  <p>Alvaro Mcgee</p>
                </a>
              </div>
            </div>
          </div>
}
export default MyTeam;
