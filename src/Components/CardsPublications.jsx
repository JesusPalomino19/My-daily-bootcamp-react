function CardsPublications({urlList}){
  switch (urlList.length) {
    case 0:
      break;
    case 1:
      return <Cards><GridOnePic list = {urlList} /></Cards>
    case 2:
      return <Cards><GridTwoPics list = {urlList} /></Cards>
    case 3:
      return <Cards><GridThreePics list = {urlList} /></Cards>
    break;
  }

}
function Cards({children}){
  console.log({children})
  return  <div className="relative bg-white rounded-lg mt-2.5 pb-[15px] pt-[15px] pl-[22px] max-w-[622px] mt-[28px]">
            <button className="absolute flex justify-end t-0 r-0 p-0 bg-white w-[582px] border-none mt-[5px] mr-[15px]">
              <img src="https://my-daily-bootcamp.netlify.app/assets/icons/dots.svg" alt="Menú de Opciones" />
            </button>
            <div className="flex relative justify-between p-[10px]">
            <HeaderPart/>
            </div>
            <div className="font-monserrat pr-[15px] pb-[20px] text-[14px] text-[#203758]">
                <p className="w-[585px]">
                  Hoy aprendí a usar Git. Aprendi a crear un branch, commitear mis
                  cambios, hacer pull request y mergearlo!
                </p>
            </div>
            {children}
          </div>
}
function HeaderPart(){
  return <div className="flex gap-[5px]">
          <a
            className="decoration-none"
          >
            <img
              className="rounded-[50px] border-2 border-white shadow-lg shadow-[#C0C0C0]"
              src="https://my-daily-bootcamp.netlify.app/assets/profile.jpg"
              alt="Foto de perfil del usuario"
            />
          </a>
          <div className="p-[4px]">
            <a
              className="decoration-none"
            ><h3 className="m-0 font-monserrat font-bold text-[15px] text-[#203758]">Paul Portillo</h3>
            </a>
            <p className="m-0 font-monserrat text-[11px] text-[#788292] pt-[4px]">04 de Julio, 2022</p>
          </div>
        </div>
}
function GridThreePics({list}){
  return  <div className="flex w-[100%] justify-between pr-[30px]">
            <div>
              <img
              className="w-[342px] h-[239px] object-cover"
              src={list[0]}
              />
            </div>
            <ul className="flex flex-col justify-between">
              <li>
                <img
                className="w-[223px] h-[115px] object-cover"
                src={list[1]}
                />
              </li>
              <li>
                <img
                className="w-[223px] h-[115px] object-cover"
                src={list[2]}
                />
              </li>
            </ul>
          </div>
}
function GridTwoPics({list}){
  return  <div className="flex w-[100%] pr-[30px]">
            <ul className="flex justify-between w-[100%]">
              <li>
                <img
                className="w-[281px] h-[239px] object-cover"
                src={list[0]}
                />
              </li>
              <li>
                <img
                className="w-[281px] h-[239px] object-cover"
                src={list[1]}
                />
              </li>
            </ul>
          </div>
}
function GridOnePic({list}){
  return    <div className="w-[100%] pr-[30px]">
              <img
              className="w-[574px] h-[239px] object-cover"
              src={list[0]}
              />
            </div>
}
export default CardsPublications;
