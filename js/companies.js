var logos = [
  "../assets/companies/9sD10LvzgNXBPo2eDauf4gv1fY3pbRC2OdcAn0Vc.png",
  "../assets/companies/CxljqAvG1AzWg9VgScnJOvtadUk6ioBdf8SDgYwQ.png",
  "../assets/companies/dtDO2OOG1SgvcMdiryWSzO1CYuNIm0JC6zovnAFy.png",
  "../assets/companies/IS2GqtcW2VWWTv52YcmJF2hPoXkDAVuzYaqGueZQ.png",
  "../assets/companies/kqnfGXPSF5EmbB9f3BzGhxLrYnZqxiyhbqDQdFRo.png",
  "../assets/companies/oRq55ECumUkCmmlUy0IezHpn2gqbB27ItK3yAUkf.png",
  "../assets/companies/rQvJRL7Ncd6OlhlHZkwJYtyN4tHhGhb42ACJ6t1o.png",
  "../assets/companies/se3kMsCGXgAXQFZIqCKd3RclmfauDU0cIirYzdI9.png",
  "../assets/companies/ZXKDvZfeij0wAEYQ5BznOnGaOTyTGvsELQqBk4hm.png",
  "../assets/companies/YHZevlUyFapyB60Csq2cql4YXNqJUDLfW1XW4qX2.png",
];

var logoContainer = document.getElementById("logo-container");

var row = document.createElement("div");
row.className = "logo-row";
logoContainer.appendChild(row);

var count = 0;
logos.forEach(function (logo) {
  if (count % 5 === 0 && count !== 0) {
    row = document.createElement("div");
    row.className = "logo-row";
    logoContainer.appendChild(row);
  }

  var img = document.createElement("img");
  img.src = logo;
  img.alt = "Company Logo";
  img.className = "company-logo";
  row.appendChild(img);


  count++;
});
