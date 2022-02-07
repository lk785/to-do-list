const addbutton = document.querySelector(".addButton");
const searchContainer = document.querySelector(".searchBox__container");
const delButton = document.querySelectorAll(".delButton");
let list = "";
addbutton.addEventListener("click", function (e) {
  console.log("clicked");
  let inputVal = document.getElementById("sBox").value;
  console.log(inputVal);
  list = `
  <div class="note__container" id="node__C">
      <div class="notes">${inputVal}</div>
      <button class="editButton">Edit</button>
      <button class="delButton ">Delete</button>
    </div>`;
  searchContainer.insertAdjacentHTML("afterend", list);
  document.getElementById("sBox").value = "";
});
for (let i = 0; i < delButton.length; i++) {
  delButton[i].addEventListener("click", function () {
    console.log("delete");
    // let element = document.querySelector("#node__C");
    // element.style.display = "none";
    this.parentElement.remove();
  });
}

// for (var i = 0; i < del.length; i++) {
//   del[i].addEventListener("click", deleteListElement);
// }
