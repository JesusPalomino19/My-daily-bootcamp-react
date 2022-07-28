import UserButton from "./UserButton";

function DeleteModal({ idDelete, setIdDelete }) {
  return (
    <div
      id="myModal"
      className={
        idDelete
          ? "visible modal w-[100vw] h-[100vh] flex flex-wrap justify-center pt-[150px] bg-[#203758ba] absolute top-0 left-0 z-30"
          : "invisible  modal w-[100vw] h-[100vh] flex flex-wrap justify-center pt-[150px] bg-[#203758ba] absolute top-0 left-0 z-30"
      }
      onClick={(e) => {
        if (e.target == e.currentTarget) {
          setIdDelete(null);
        }
      }}
    >
      <div
        className="modal-content flex flex-wrap w-[307px] h-min "
        onClick={(e) => {
          if (e.target == e.currentTarget) {
            setIdDelete(null);
          }
        }}
      >
        <img
          src="./icons/cerrar.svg"
          className="close-icon p-[12px] hover:text-[#000] hover:bg-[#fff2] rounded-[8px]    mb-[8px] ml-auto cursor-pointer"
          onClick={(e) => {
            if (e.target == e.currentTarget) {
              setIdDelete(null);
            }
          }}
        />
        <div className=" bg-white p-[32px] font-monserrat rounded-[8px] flex flex-wrap w-[307px] h-[167px]">
          <h2 className="text-[17px] font-bold text-center mb-[20px]">
            Are you sure you want to delete it?
          </h2>
          <div className="flex justify-between w-full">
            <UserButton
              onClick={() => {
                setIdDelete(null);
              }}
            >
              Cancel
            </UserButton>
            <UserButton
              onClick={async () => {
                await fetch(
                  `https://my-daily-bootcamp.herokuapp.com/posts/${idDelete}.json?`,
                  {
                    method: "DELETE",
                  }
                );
                location.href = "/";
              }}
            >
              Delete
            </UserButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
