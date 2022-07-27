import React from "react";
import ButtonsBox from "./ButtonBox";

function MainBox({ setImageURLs, setMostrarModal, files, setFiles }) {
  const [showWarning, setShowWarning] = React.useState(false);
  const [textareaValue, setTextareaValue] = React.useState("");
  const [location, setLocation] = React.useState(
    localStorage.getItem("location")
  );
  let textareaOnKey = (value, limite) => {
    setShowWarning(false);
    if (value.length >= limite) {
      value = value.substring(0, limite);
    }

    setTextareaValue(value.trim());
  };
  const calculateLocation = () => {
    const storage_location = localStorage.getItem("location");
    if (storage_location != null) {
      localStorage.removeItem("location");
      setLocation(null);
      return;
    }

    if (navigator.geolocation) {
      let options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 1000,
      };
      navigator.geolocation.getCurrentPosition(
        savePosition,
        showErrors,
        options
      );
    } else {
      alert(
        "Tu navegador no soporta la geolocalización, actualiza tu navegador."
      );
    }
  };
  const savePosition = async (position) => {
    let { latitude, longitude } = position.coords;
    let response = await fetch(
      "https://eu1.locationiq.com/v1/reverse?key=pk.d7081966f4a73ff67138855cfeb0e4ec&lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&format=json"
    );

    let responseJson = await response.json();
    let { town, country } = responseJson.address;
    let location = " " + town + ", " + country;
    localStorage.setItem("location", location);
    setLocation(location);
  };

  const showErrors = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("Permiso denegado por el usuario");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Posición no disponible");
        break;
      case error.TIMEOUT:
        alert("Tiempo de espera agotado");
        break;
      default:
        alert("Error de Geolocalización desconocido :" + error.code);
    }
  };
  return (
    <div className=" bg-white p-[32px] font-monserrat rounded-[8px] flex flex-wrap">
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
      <div
        className={`bg-[#f1f2f6] w-[560px] text-[12px] rounded-b-[8px] p-[16px] italic geolocation-message learning-message ${
          location ? "" : "hidden"
        }`}
      >
        From:<span className="location-data">{location}</span>
      </div>
      <div
        className={`warningtext learning-message  text-[#ff0000] text-[14px] mt-[8px] mb-[2px] ${
          showWarning ? "" : "invisible"
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
        calculateLocation={calculateLocation}
        location={location}
      ></ButtonsBox>
    </div>
  );
}
export default MainBox;
