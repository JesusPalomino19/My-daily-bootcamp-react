import UserButton from "../UserButton";

function ButtonsBox({
  files,
  setImageURLs,
  setShowWarning,
  textareaValue,
  setFiles,
  setMostrarModal,
  calculateLocation,
}) {
  const sendPost = async () => {
    let post = {};
    post.description = textareaValue;
    post.images = [];
    for (let f of files) {
      post.images.push(await createUrlImage(f));
    }
    post.user_id = 1;

    await fetch("https://my-daily-bootcamp.herokuapp.com/posts.json?", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const fileChange = (e) => {
    let filesAdd = [...e.target.files];
    let leakedFiles = [];
    if (files.length + filesAdd.length > 3) {
      if (files.length < 3) {
        let disponible = 3 - files.length;
        let limitado =
          filesAdd.length > disponible ? disponible : filesAdd.length;
        alert("Solo se agregaran " + limitado + " imagenes");
        for (let i = files.length; i < 3; i++) {
          leakedFiles.push(filesAdd.shift());
        }
      } else {
        alert("El maximo de imagenes es 3");
        return;
      }
    } else {
      leakedFiles.push(...filesAdd);
    }
    setFiles((files) => {
      return [...files, ...leakedFiles];
    });
    let imageURLsAdd = convertFilesToURLsImage(leakedFiles);
    setImageURLs((imageURLs) => [...imageURLs, ...imageURLsAdd]);
  };
  const convertFilesToURLsImage = (files) => {
    files = [...files];
    return files.map((f) => URL.createObjectURL(f));
  };
  const createUrlImage = async (imageFile) => {
    const data = new FormData();
    data.append("file", imageFile); // agregan sus imagenes
    data.append("upload_preset", "sickfits");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/wesbostutorial/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    const url = file.secure_url;
    return url;
  };
  return (
    <div className="flex items-center justify-between w-[558px]">
      <div className="flex">
        <div className="relative w-[44px] h-[44px] hover:bg-[#f0f7ff] overflow-hidden rounded-[8px] flex items-center  ">
          <input
            type="file"
            id="file"
            name="file[]"
            accept="image/*"
            multiple
            className="opacity-0  z-10 cursor-pointer"
            onInput={fileChange}
          />
          <img
            src="./icons/imagen-icon.svg"
            className="icon-camera absolute top-[7px] cursor-pointer px-[13px] py-[5.5px]"
          ></img>
        </div>
        <button
          className="button-location w-[44px] h-[44px] flex justify-center items-center hover:bg-[#f0f7ff] rounded-[8px]"
          onClick={calculateLocation}
        >
          <img src="/icons/location-icon.svg" alt="" />
        </button>
      </div>
      <UserButton
        width={"120px"}
        height={"37px"}
        fontSize={"13px"}
        onClick={async () => {
          if (!textareaValue) {
            setShowWarning(true);
          } else {
            await sendPost();
            setFiles([]);
            setImageURLs([]);
            document.getElementById("textareaLearning").value = "";
            setMostrarModal(false);
          }
        }}
      >
        Publish
      </UserButton>
    </div>
  );
}
export default ButtonsBox;
