import React from "react";
import MainBox from "./MainBox";

function ModalLearning({ setMostrarModal, mostrarModal }) {
  let [imageURLs, setImageURLs] = React.useState([]);
  const [files, setFiles] = React.useState([]);
  let deleteImage = (id) => {
    setImageURLs(
      imageURLs.filter((e, index) => {
        return index != id;
      })
    );
    setFiles(
      files.filter((e, index) => {
        return index != id;
      })
    );
  };
  return (
    <div
      id="myModal"
      className={
        mostrarModal
          ? "visible modal w-[100vw] h-[100vh] flex flex-wrap justify-center pt-[150px] bg-[#203758ba] absolute top-0 left-0 z-30"
          : "invisible  modal w-[100vw] h-[100vh] flex flex-wrap justify-center pt-[150px] bg-[#203758ba] absolute top-0 left-0 z-30"
      }
      onClick={(e) => {
        if (e.target == e.currentTarget) {
          setMostrarModal(false);
        }
      }}
    >
      <div
        className="modal-content flex flex-wrap w-[622px] h-min "
        onClick={(e) => {
          if (e.target == e.currentTarget) {
            setMostrarModal(false);
          }
        }}
      >
        <img
          src="./icons/cerrar.svg"
          className="close-icon p-[12px] hover:text-[#000] hover:bg-[#fff2] rounded-[8px]    mb-[8px] ml-auto cursor-pointer"
          onClick={(e) => {
            setMostrarModal(false);
          }}
        />
        <MainBox
          imageURLs={imageURLs}
          setImageURLs={setImageURLs}
          setMostrarModal={setMostrarModal}
          files={files}
          setFiles={setFiles}
        ></MainBox>
        <div
          className="preview-imagen output-prev flex mt-[16px] gap-[16px] "
          id="output"
        >
          {imageURLs.map((url, index) => (
            <div
              key={index}
              className=" relative content-pics-prev w-[80px] h-[80px] overflow-hidden rounded-[8px] border-[2px] border-solid border-[#F1F2F6]"
            >
              <img
                src={url}
                className="formato-fotos block object-cover w-[80px] h-[80px]"
              />
              <button
                className="button-delete-prev absolute bottom-0 left-0 cursor-pointer bg-[#20375888] text-[#ffff] font-monserrat w-[76px]"
                onClick={() => deleteImage(index)}
              >
                DELETE
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ModalLearning;
