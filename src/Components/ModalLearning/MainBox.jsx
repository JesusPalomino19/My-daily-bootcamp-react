import React from "react";
import ButtonsBox from "./ButtonBox";

function MainBox({ setImageURLs, setMostrarModal, files, setFiles }) {
  const [showWarning, setShowWarning] = React.useState(false);
  const [textareaValue, setTextareaValue] = React.useState("");

  let textareaOnKey = (value, limite) => {
    setShowWarning(false);
    if (value.length >= limite) {
      value = value.substring(0, limite);
    }

    setTextareaValue(value.trim());
  };

  return (
    <div className=" bg-white p-[32px] font-monserrat rounded-[8px]">
      <h2 className="text-[17px] font-bold">What did you learn today Paul?</h2>
      <textarea
        placeholder="Today learnd..."
        className="modal-textarea w-[558px] mt-[10px] h-[100px] resize-none py-[14px] px-[15px] text-[15px] outline-[1.5px] outline outline-[#f1f2f6] hover:outline-[#e2e3eb] border-none hover:outline-[2px] focus:outline-[2px] focus:outline-[#e2e3eb]"
        name=""
        id="textareaLearning"
        onKeyDown={(e) => {
          textareaOnKey(e.currentTarget.value, 100);
        }}
        onKeyUp={(e) => {
          textareaOnKey(e.currentTarget.value, 100);
        }}
      ></textarea>
      <div className="geolocation-message learning-message hidden">
        From:<span className="location-data"></span>
      </div>
      <div
        className={`warningtext learning-message mb-[15px] text-[#ff0000] text-[14px] ${
          showWarning ? "" : "hidden"
        }`}
      >
        <p>Really? Did not you learning anythinf? This field is requiered!</p>
      </div>
      <ButtonsBox
        setImageURLs={setImageURLs}
        setShowWarning={setShowWarning}
        textareaValue={textareaValue}
        setFiles={setFiles}
        files={files}
        setMostrarModal={setMostrarModal}
      ></ButtonsBox>
    </div>
  );
}
export default MainBox;
