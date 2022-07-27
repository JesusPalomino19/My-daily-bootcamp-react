function CardsPublications({ post }) {
  let profileInfo = post.author
  let date = formatDate(post.created_at)
  let description = post.description
  let urlList = post.images
  function formatDate (fecha){
    let date = new Date(fecha)
    var options = {year: 'numeric', month: 'long', day: 'numeric'}
    let ultimateFecha = date.toLocaleDateString("es-ES", options)
    return ultimateFecha
  }
  switch (urlList.length) {
    case 0:
      return (
        <Cards description={description} info={profileInfo} date={date}>
      </Cards>
      );
    case 1:
      return (
        <Cards description={description} info={profileInfo} date={date}>
          <GridOnePic list={urlList} />
        </Cards>
      );
    case 2:
      return (
        <Cards description={description} info={profileInfo} date={date}>
          <GridTwoPics list={urlList} />
        </Cards>
      );
    case 3:
      return (
        <Cards description={description} info={profileInfo} date={date}>
          <GridThreePics list={urlList} />
        </Cards>
      );
  }
}
function Cards({ children , description , info , date}) {
  return (
    <div className="relative bg-white rounded-lg mt-2.5 pb-[15px] pt-[15px] pl-[22px] max-w-[622px] mt-[28px]">
      <button className="absolute w-[574px] flex justify-end bg-white w-[582px] border-none mt-[5px] mr-[15px]">
        <img
          src="https://my-daily-bootcamp.netlify.app/assets/icons/dots.svg"
          alt="Menú de Opciones"
        />
      </button>
      <div className="flex relative justify-between p-[10px]">
        <HeaderPart info = {info} date = {date}/>
      </div>
      <div className="font-monserrat pr-[15px] pb-[20px] text-[14px] text-[#203758]">
        <p className="w-[585px]">
          {description}
        </p>
      </div>
      {children}
    </div>
  );
}
function HeaderPart({info,date}) {
  return (
    <div className="flex gap-[5px]">
      <a className="decoration-none">
        <img
          className="object-cover w-[50px] h-[50px] rounded-[50px] border-2 border-white shadow-lg shadow-[#C0C0C0]"
          src={info.profile_url}
          alt="Foto de perfil del usuario"
        />
      </a>
      <div className="p-[4px]">
        <a className="decoration-none">
          <h3 className="m-0 font-monserrat font-bold text-[15px] text-[#203758]">
            {info.full_name}
          </h3>
        </a>
        <p className="m-0 font-monserrat text-[11px] text-[#788292] pt-[4px]">
          {date}
        </p>
      </div>
    </div>
  );
}
function GridThreePics({ list }) {
  return (
    <div className="flex w-[100%] justify-between pr-[30px]">
      <div>
        <img className="w-[342px] h-[239px] object-cover" src={list[0]} />
      </div>
      <ul className="flex flex-col justify-between">
        <li>
          <img className="w-[223px] h-[115px] object-cover" src={list[1]} />
        </li>
        <li>
          <img className="w-[223px] h-[115px] object-cover" src={list[2]} />
        </li>
      </ul>
    </div>
  );
}
function GridTwoPics({ list }) {
  return (
    <div className="flex w-[100%] pr-[30px]">
      <ul className="flex justify-between w-[100%]">
        <li>
          <img className="w-[281px] h-[239px] object-cover" src={list[0]} />
        </li>
        <li>
          <img className="w-[281px] h-[239px] object-cover" src={list[1]} />
        </li>
      </ul>
    </div>
  );
}
function GridOnePic({ list }) {
  return (
    <div className="w-[100%] pr-[30px]">
      <img className="w-[574px] h-[239px] object-cover" src={list[0]} />
    </div>
  );
}
export default CardsPublications;
