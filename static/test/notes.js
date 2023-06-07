console.log("Welcome to notes app. This is app.js");
showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myobj ={
      title: addTitle.value,
      text: addTxt.value
  }
  notesObj.push(myobj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
  //   console.log(notesObj);
  showNotes();
  var box = document.getElementById("box");
  box.style.display = "none";
  document.body.classList.remove("blur");
});

// Function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
  
    let notesElm = document.getElementById("notes");
    let notesRow = notesElm.querySelector(".row");
    notesRow.innerHTML = ""; // Clear the existing content
  
    notesObj.forEach(function (element, index) {
      let noteCard = document.createElement("div");
      noteCard.classList.add("noteCard");
  
      let cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
  
      let cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title1");
      cardTitle.innerText = element.title;
  
      let cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.innerText = element.text;
  
      let deleteButton = document.createElement("button");
      deleteButton.classList.add("btn", "btn-primary");
      deleteButton.innerText = "Delete Note";
      deleteButton.setAttribute("id", index);
      deleteButton.onclick = function() {
        deleteNote(this.id);
      };
  
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(deleteButton);
  
      noteCard.appendChild(cardBody);
      notesRow.appendChild(noteCard);
    });
  
    if (notesObj.length === 0) {
      notesRow.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
  }
  
  

// Function to delete a note
function deleteNote(index) {
  //   console.log("I am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  // console.log('Input event fired!', inputVal);
  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
    // console.log(cardTxt);
  });
});


function openBox() {
    var box = document.getElementById("box");
    box.classList.add("opened");
    document.body.classList.add("blur");
  }
  
  function closeBox() {
    var box = document.getElementById("box");
    box.classList.remove("opened");
    document.body.classList.remove("blur");
  }
  
