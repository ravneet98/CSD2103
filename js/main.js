function copyGradient(id) {
  var copyText = document.getElementById("hex" + id).innerHTML;
  var el = document.createElement("input");
  var color = copyText.split(" → ");
  el.value =
    "background: " +
    color[0] +
    "; /* fallback for old browsers */background: -webkit-linear-gradient(to right, " +
    color[0] +
    "," +
    color[1] +
    "); /* Chrome 10-25,Safari 5.1-6 */background: linear-gradient(to right," +
    color[0] +
    "," +
    color[1] +
    "); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ ";
  el.setAttribute("readonly", "");
  el.style = { position: "absolute", left: "-9999px" };
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  var x = document.getElementById("toast");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 5000);
  document.body.removeChild(el);
}

function loadGradientItem() {
  //console.log(gradients);
  var gradients = [
    "#269dc7@#d8a24d",
    "#872898@#848286",
    "#ac429e@#b6d41a",
    "#659743@#9d4d6a",
    "#8cb3ba@#6d7e9c",
    "#3bbcc6@#91751c",
    "#3ca94e@#9817a2",
    "#6bc6dc@#2a5d57",
    "#993281@#14e532",
    "#164673@#32d4c7",
    "#ac93e1@#52905c",
    "#44eac2@#536923",
    "#872a66@#c1842b",
    "#ca841d@#822ed5",
    "#876792@#94b395",
    "#84c881@#543172",
    "#446c65@#95c2ee",
    "#c7d395@#7ed5c7",
    "#d89656@#4da1ed",
    "#baa140@#a2ecdc",
    "#7b27d5@#d6232a",
    "#bbd34b@#c71734",
    "#46a8a0@#1d6c05",
    "#a6234a@#b9a7a7",
    "#5b3003@#ba2a72",
    "#3b4e34@#6ed133",
    "#775a51@#503615",
    "#215b55@#63e619",
    "#913848@#78c25c",
    "#847d46@#bc3b38",
    "#46b3cb@#7dcb17",
    "#dd582a@#b88826",
    "#14296a@#492a38",
    "#64c334@#5d8497",
    "#c89a02@#da7d05",
    "#52151c@#ae7bdb",
    "#b23d7c@#1da632",
    "#149abe@#ac35b9",
    "#c9a622@#db1dc3",
    "#d9d705@#adaaa8",
    "#789a5c@#663c31",
    "#357888@#bd3b52",
    "#115d43@#55e558",
    "#5d8d00@#d909d8",
    "#3d9e95@#c2e120",
    "#4e91d7@#66c5d4",
    "#50c455@#a4811c",
    "#6a3c44@#9087b3",
    "#258878@#7a9d8a",
    "#11506b@#347938",
    "#9aa516@#369b4d",
    "#0b42b2@#1b2c7b",
    "#84901c@#1ad30c",
    "#2a89ae@#db7382",
    "#a22717@#7c069a",
    "#053287@#7ad475",
    "#44a2d0@#6badac",
    "#5da57c@#98ddd9",
    "#c367da@#a088b1",
    "#55a458@#e82dbd",
    "#c75d86@#c72312",
    "#6271a6@#5b8dad",
    "#8802c7@#5dd799",
    "#c15284@#cba9a6",
    "#baa6b5@#e4c3da",
    "#dbda46@#253732",
    "#9775a8@#72957a",
    "#c0b1ca@#7367bc",
    "#548abc@#270d14",
    "#ad0966@#d86908",
    "#7e24c8@#c4b8b1",
    "#d31391@#d8b969",
    "#d60167@#270645",
    "#4decda@#05dc25",
    "#63296b@#12e985",
    "#12d726@#a5ba99",
    "#4421a5@#ae9215",
    "#86c6a9@#60338d",
    "#524261@#ad8968",
    "#dd9a41@#155a17",
    "#35527b@#ad31d1",
    "#b4e5d7@#bc94a2",
    "#d34982@#292ada",
    "#55b296@#772bdb",
    "#abd333@#3387c6",
    "#51dce7@#3459c1",
    "#5d2db6@#27712b",
    "#3a708b@#5c7a32",
    "#5502be@#5b83b1",
    "#c13b2d@#be883c",
    "#443146@#b18143",
    "#717a11@#63986e",
    "#d8431e@#352da5",
    "#834e21@#b99cae",
    "#8575ab@#ad3c30",
    "#45b639@#3d5b3a",
    "#715a71@#224eec",
    "#c5b35e@#aa8644",
    "#438aca@#dc47d2",
    "#d79c3d@#685b5e",
  ];
  var existingGradients = JSON.parse(localStorage.getItem("localGradients"));
  for (var i in existingGradients) {
    gradients.push(
      existingGradients[i].hex +
        "@" +
        existingGradients[i].fname +
        "@" +
        existingGradients[i].lname
    );
  }
  // console.log(gradients);
  for (var i = 0; i <= gradients.length; i++) {
    var res = gradients[i].split("@");
    var text = res.length > 2 ? res[2] + " " + res[3] : i;
    var a1 =
      "<li><div class='card'><p class = 'num'>" +
      text +
      "</p><div class='grad' style=' background-image: linear-gradient(" +
      res[0] +
      "," +
      res[1] +
      "); ><div class='container'></div><p id ='hex" +
      i +
      "' class='hex'>" +
      res[0] +
      " → " +
      res[1] +
      "</p>" +
      "</div></div><button id=" +
      i +
      " class='btn' onclick='copyGradient(this.id)'><i class='fa fa-css3' style='color:#424242' aria-hidden='true'></i></button> <button id=" +
      i +
      " class='btn' onclick='download(this.id)'><i class='fa fa-arrow-circle-o-down' style='color:#424242' aria-hidden='true'></i></button></li > ";

    var g;
    g = document.createElement("li");
    g.id = i;
    document.getElementById("list").appendChild(g);
    var abc = a1;
    document.getElementById(g.id).innerHTML = abc;
  }
}
loadGradientItem();

function storeData() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var hex1 = document.getElementById("hex1").value;
  var hex2 = document.getElementById("hex2").value;
  console.log(fname);
}

function download(id) {
  var copyText = document.getElementById("hex" + id).innerHTML;
  var el = document.createElement("input");
  var color = copyText.split(" → ");
  console.log(color);
  window
    .open(
      "./templates/image.html?hex=" +
        color[0].substring(1, 7) +
        "@" +
        color[1].substring(1, 7),
      "_blank"
    )
    .focus();
}
