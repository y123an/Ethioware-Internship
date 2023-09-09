let openMenu = () => {
  let navlist = document.getElementById("navlist");
  navlist.style.display = "flex";
  menu = document.getElementById("menubar");
  menu.style.display = "none";

  closeb = document.getElementById("closebar");
  closeb.style.display = "block";
};
let closeMenu = () => {
  let navlist = document.getElementById("navlist");
  navlist.style.display = "none";

  menu = document.getElementById("menubar");
  menu.style.display = "block";

  closeb = document.getElementById("closebar");
  closeb.style.display = "none";
};

let playVideo = (e) => {
  console.log(e.target.attributes.name.value);
  const videopa = document.getElementById("project-video");
  videopa.setAttribute(
    "src",
    "./asset/videos/" + e.target.attributes.name.value + ".mp4"
  );
  const videoc = document.getElementById("video-container");
  videoc.style.display = "flex";
};

let closeVideo = () => {
  const videoc = document.getElementById("video-container");
  videoc.style.display = "none";
};
