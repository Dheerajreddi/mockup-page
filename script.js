console.log("hi");

const mockupLink = document.getElementById("generateMockUpLink");
var id, url;
// const botId = document.getElementById("botId").target.value
// const imageUrl = document.getElementById("imageUrl")
// console.log(botId);
// console.log(imageUrl);

function botIdHandler() {
  id = document.getElementById("botId").value;
  console.log(id);
}

function imageUrlHandler() {
  url = document.getElementById("imageUrl").value;
  console.log(url);
}

function generateUrl(e) {
  e.preventDefault();
  if (id && url) {
    var mockupLink = `https://bot-test-x1588762126437.herokuapp.com/generic?id=${id}&image=${url}`;

    console.log("bot id and url");
    window.open(mockupLink, "_blank");
  } else {
    alert("please enter bot id and url");
  }
}

var file = document.getElementById("upload-button");
const fileInput = (e) => {
  console.log(e.target.value, "IMAGE ARRAY");

  var file, fileName;

  console.log(e.target.files, "e.target.files");

  console.log(e.target.files[0], "e.target.files[0]");

  if (e.target.files && e.target.files[0]) {
    console.log("im insie");
    // var reader = new FileReader();
    // reader.onload((e) => {
    //   console.log(e.target, "IMAGE ARRAY");
    // });
    fileName = e.target.value;
    // file = reader.readAsDataURL(e.target.files[0])
    file = e.target.files[0];
    console.log(file, "FILE_DATA");
    url = cdnAPI(file, fileName);
    console.log(url, "CDN");
  }
};

const imageUploder = (e) => {
  e.preventDefault();
  file.click();
};

// const generateFile = (e)=>{
//     if(e.files && e.files[0]){
//         var reader = new FileReader();
//         reader.onload((e)=>{
//             console.log(e.target,"IMAGE ARRAY");
//         })
//     }
// }

const cdnAPI = (file, fileName) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "X-Auth-Token",
    "99f2fd3410eca91aa11d41bf9b70fa61b2eed4b26d5e8196ace5437244426201"
  );

//   myHeaders.append(
//     "Access-Control-Allow-Origin",
//     "http://127.0.0.1:5500/index2.html"
//   );
//   myHeaders.append("Access-Control-Allow-Credentials", "true");

  myHeaders.append("Access-Control-Allow-Origin", "*")
myHeaders.append("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
myHeaders.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")


  var formdata = new FormData();
  formdata.append(
    "file",
    file,
    // fileInput.files[0],
    fileName
  );

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(
    "https://app.yellowmessenger.com/api/chat/upload-file-secured?bot=x1613722617940&getUrlFromBlob=true",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

function togglePage() {
  document.querySelector(".overlay-signin").classList.toggle("show");
  document.querySelector(".overlay-signup").classList.toggle("hide");
  document.querySelector(".signup").classList.toggle("show");
  document.querySelector(".signin").classList.toggle("hide");
}

//   mockupLink.addEventListener('click', ()=>{
//       alert('hello')
//   })
