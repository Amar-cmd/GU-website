var schools = [
  {
    name: "School of Computing Science & Engineering",
    img: "assets/schools/ByFSK7QMfRjY5MEC5URsGsEpnqZ1nR5gMkjkNG2A.webp",
  },
  {
    name: "School of Business",
    img: "assets/schools/uZXXI974ecFh6nhkuAW7oWtiATOR7Dre3maPPXW3.webp",
  },
  {
    name: "School of  Engineering",
    img: "assets/schools/1T2iK9YKg2VwwJSuxrzQwdtQcpeqWu7DkNzrdQSW.webp",
  },
  {
    name: "School of Biological & Life Sciences",
    img: "assets/schools/lZPBhM9gQYPxqcQoNgHQMhqyWVYTwhyB4hWTmfxU.jpg",
  },
  {
    name: "School of Liberal Education",
    img: "assets/schools/O6JtbHijznkyaD3b1kjMG3EC32zjKaTh23Z8jh0h.webp",
  },
  {
    name: "School of Law",
    img: "assets/schools/ueQXSfEyarfQnehlkenZqAZT8Y0TDO27Yfr54Xn2.webp",
  },
  {
    name: "School of Basic Sciences",
    img: "assets/schools/W0MXo1SlDaPqUDNnDA1Olj3dxcHNfUKvSsrAYQ80.webp",
  },
  {
    name: "School of Media & Communication Studies",
    img: "assets/schools/Zze93pCrjAtcUh2XnZjoDTB1FPCS4yxsMMmnecRV.webp",
  },
];

var schoolsContainer = document.getElementById("schools");
schools.forEach(function (school) {
  schoolsContainer.innerHTML += generateSchoolHTML(school);
});


function generateSchoolHTML(school) {
  return `
    <div class="school">
      <img src="${school.img}" alt="${school.name}">
      <p>${school.name}</p>
    </div>
  `;
}
