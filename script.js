const addbutton = document.querySelector(".addButton");
let input = document.querySelector(".searchBox");

//function to add into the list
const addList = function (e) {
  const notComplete = document.querySelector(".not_Complete");
  const completed = document.querySelector(".Completed");

  const newLi = document.createElement("li");

  const checkBtn = document.createElement("button");
  const delBtn = document.createElement("button");

  checkBtn.innerHTML = `<i class="fa fa-check"></i>`;
  delBtn.innerHTML = `<i class="fa fa-trash"></i>`;

  if (input.value === "") {
    alert("Please enter value");
  } else {
    newLi.textContent = input.value;
    input.value = "";
    notComplete.appendChild(newLi);
    newLi.appendChild(checkBtn);
    newLi.appendChild(delBtn);
  }

  checkBtn.addEventListener("click", function (e) {
    const parent = this.parentNode;
    parent.remove();
    completed.appendChild(parent);
    checkBtn.style.display = "none";
  });

  delBtn.addEventListener("click", function (e) {
    const parent = this.parentNode;
    parent.remove();
  });
};

addbutton.addEventListener("click", addList);

// for (var i = 0; i < del.length; i++) {
//   del[i].addEventListener("click", deleteListElement);
// }

// console.log(inputVal);
//   list = `
// <ul class="note__container" id="node__C">
//       <li>
//         ${inputVal}
//         <button class="editButton">Edit</button>
//         <button class="delButton">Delete</button>
//       </li>
//     </ul>`;
//   searchContainer.insertAdjacentHTML("afterend", list);
//   document.getElementById("sBox").value = "";
