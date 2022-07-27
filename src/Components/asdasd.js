let cerrar = document.querySelector(".close");
let abrir = document.querySelector(".learning-form");
let modal = document.querySelector(".modal");
let modalC = document.querySelector(".modal-container");
let boxInterfaceModal = document.getElementById("box-interface-modal");
let error = document.getElementById("error");
let enviarForm = document.getElementById("enviarFormulario");

abrir.addEventListener("click", function (e) {
  e.preventDefault();
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function () {
  modal.classList.toggle("modal-close");
  setTimeout(function () {
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
  }, 600);
});

window.addEventListener("click", function (e) {
  if (e.target == modalC) {
    modal.classList.toggle("modal-close");
    setTimeout(function () {
      modalC.style.opacity = "0";
      modalC.style.visibility = "hidden";
    }, 600);
  }
});

enviarForm.addEventListener("click", function (e) {
  if (boxInterfaceModal == null || boxInterfaceModal.value == "") {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
  return false;
});
/* handel submit image */
const inputImageFiles = document.getElementById("icono-addPic");
let files = [];
inputImageFiles.addEventListener("change", function (e) {
  if (files.length > 2) {
    window.alert("solo ingrese 3 imagenes como maximo");
    return;
  } else {
    renderImages;
  }
  files.push(...e.currentTarget.files);
  renderImages();
});
function renderImages() {
  let imgHTML = "";
  var outputImage = document.getElementById("output");
  files.slice(0, 3).forEach((file, index) => {
    console.log(outputImage);
    let urlDinamic = URL.createObjectURL(file);
    imgHTML += `
            <div class="content-pics-prev">
                <img src="${urlDinamic}" class="formato-fotos" />
                <button class="button-delete-prev" onclick="deleteImage(${index})">DELETE</button>
            </div>`;
  });
  outputImage.innerHTML = imgHTML;
}
/* delete pics prev with button*/
function deleteImage(id) {
  files = files.filter((Element, index) => {
    return index != id;
  });

  window.addEventListener("click", function (e) {
    if (e.target == modalC) {
      modal.classList.toggle("modal-close");

      setTimeout(function () {
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
      }, 600);
    }
  });
  renderImages();
}

let menus = document.querySelectorAll(".popup-container .public-button");
let content = document.querySelectorAll(".popup-container .popup");
let closeContent = document.querySelectorAll(".popup .public-delete");
let contentTotal = document.querySelectorAll(".content-total");
let closeWindow = document.querySelectorAll(".cmd-close-icon");
let buttonClose = document.querySelectorAll(".cmd-close");

menus.forEach((element, index) => {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    if (content[index].classList.contains("block") == false) {
      content[index].classList.add("block");
    } else {
      content[index].classList.remove("block");
    }
  });
});

closeContent.forEach((element, index) => {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    if (contentTotal[index].classList.contains("show") == false) {
      contentTotal[index].classList.add("show");
    }
  });
});

closeWindow.forEach((element, index) => {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    if (contentTotal[index].classList.contains("show") == true) {
      contentTotal[index].classList.remove("show");
    }
  });
});

buttonClose.forEach((element, index) => {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    if (contentTotal[index].classList.contains("show") == true) {
      contentTotal[index].classList.remove("show");
    }
  });
});
