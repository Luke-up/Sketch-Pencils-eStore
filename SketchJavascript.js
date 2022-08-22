$(function () {
  let cart = [];

  function fullCart() {
    if (sessionStorage.getItem("hasCustomerCart") === null) {
      sessionStorage.setItem("customerCart", JSON.stringify(songs));
      sessionStorage.setItem("hasCustomerCart", true);
    } // else statement retrieves the array from session storage and creates the HTML elements
    else {
      songs = JSON.parse(sessionStorage.getItem("customerCart"));
      let i = 0; //declare i as 0 to fetch object at index [0]
      songs.forEach(function (m) {
        // each object in the array 'songs' will be appended and styled on the html
        let row = document.createElement("tr");
        row.innerHTML =
          '<th class="tableItems">' +
          m.song +
          '</th><td class="tableItems">' +
          m.artist +
          '</td><td class="tableItems">' +
          m.release +
          '</td><td class="tableItems">' +
          m.language +
          '</td><td class="tableItems">' +
          m.genre +
          '</td><td class="tableItems">' +
          m.rating +
          '</td><td><button onclick="deleteObject(' +
          i +
          ')" class="btn">DEL</button><button onclick="editObject(' +
          i +
          ')" class="btn">Edit</button></td>';
        row.classList.add("container");
        row.classList.add("tableItems");
        row.classList.add("border-bottom");
        i += 1; // i is incremented to match the index of the object
        //Created elements are appended to the HTML
        table.appendChild(row);
      });
    }
  }

  $("#modalBackground").hide();

  $("#modalClose").click(function () {
    $("#modalBackground").hide();
  });
  function quickAdd(i) {}
});
