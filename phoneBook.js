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
  document.write("<table>");
  document.write(
    "<thead><tr><th>Ім'я</th><th>Телефон</th><th>Email</th></tr></thead>"
  );
  for (var rec of phoneBook) {
    document.write(
      `<tr><td>${rec.name}</td><td>${rec.phone}</td><td>${rec.email}</td></tr>`
    );
  }
  document.write("</table>");
};
