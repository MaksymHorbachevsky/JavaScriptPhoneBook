var phoneBook = []; // Тут ви зберігаєте записи як хочете

/*
   Функція додавання запису в телефонну книгу.
*/
phoneBook.add = function (name, phone, email) {
  var record = {
    name: name,
    phone: phone,
    email: email,
  };
  phoneBook.push(record);
};

/*
   Функція пошуку записв в телефонній книзі.
   Пошук ведеться по всім полям.
*/
phoneBook.find = function (query) {
  for (var i in phoneBook) {
    for (var k in phoneBook[i]) {
      if (phoneBook[i][k].includes(query)) {
        document.write(
          `${phoneBook[i].name}, ${phoneBook[i].phone}, ${phoneBook[i].email}<br>`
        );
      }
    }
  }
};

/*
   Функція видалення запису в телефонній книзі.
*/
phoneBook.remove = function (query) {
  var counter = 0;
  for (var i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].name.includes(query)) {
      this.splice(i, 1);
      counter++;
    }
  }
  document.write(`Видалено ${counter} запис(-ів) по запиту "${query}". <br>`);
};

/*
   Функція виведення всіх телефонів.
*/
phoneBook.showTable = function () {
  var table = document.createElement("table");
  var headRow = document.createElement("tr");
  for (var key in phoneBook[0]) {
    var headCell = document.createElement("th");
    headCell.innerText = key;
    headRow.appendChild(headCell);
  }
  table.appendChild(headRow);
  for (var i = 0; i < phoneBook.length; i++) {
    var row = document.createElement("tr");
    for (var key in phoneBook[i]) {
      var cell = document.createElement("td");
      cell.textContent = phoneBook[i][key];
      if (typeof phoneBook[i][key] === "number") {
        cell.style.textAlign = "right";
      }
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  document.body.appendChild(table);
};
