// first btn er kajta korar try kortesi.
document
  .getElementById("fix-mobile-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const taskNumber = document.getElementById("task-number").innerText;
    const convertedTaskNumber = parseInt(taskNumber);
    const finishResult = convertedTaskNumber - 1;

    const finalResult = (document.getElementById("task-number").innerText =
      finishResult);

    //uporer 23 take dortechi.
    const scoreNumber = document.getElementById("score-number").innerText;

    const convertedScoreNumber = parseInt(scoreNumber);
    const finishalScore = convertedScoreNumber + 1;
    const finalScore = (document.getElementById("score-number").innerText =
      finishalScore);

    //   alert dekanu
    alert("Board updated succesfully");

    // btn ke disable kora
    const button = document.getElementById("fix-mobile-btn");
    button.disabled = true;

    // history te messege add kortesi.
    const subject = document.getElementById("subject-title1").innerText;

    const messegeContainer = document.getElementById("messege-container");

    // current time ber kortesi.

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedTime = `${hours % 12 || 12}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;

    const p = document.createElement("p");
    p.innerHTML = `
    <p class="bg-blue-50 p-1 rounded mb-3">
            You have Complete The Task ${subject} at ${formattedTime}
          </p>
    `;

    messegeContainer.appendChild(p);
  });

// 2nd button ke dortesi.
// 2nd button ke dortesi.
document
  .getElementById("dark-mode-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const taskNumber = document.getElementById("task-number").innerText;
    const convertedTaskNumber = parseInt(taskNumber);
    const finishResult = convertedTaskNumber - 1;

    const finalResult = (document.getElementById("task-number").innerText =
      finishResult);

    //uporer 23 take dortechi.
    const scoreNumber = document.getElementById("score-number").innerText;

    const convertedScoreNumber = parseInt(scoreNumber);
    const finishalScore = convertedScoreNumber + 1;
    const finalScore = (document.getElementById("score-number").innerText =
      finishalScore);

    //   alert dekanu
    alert("Board updated succesfully");

    // btn ke disable kora
    const button = document.getElementById("dark-mode-btn");
    button.disabled = true;

    // history te messege add kortesi.
    const subject = document.getElementById("subject-title2").innerText;

    const messegeContainer = document.getElementById("messege-container");

    // current time ber kortesi.

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedTime = `${hours % 12 || 12}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;

    const p = document.createElement("p");
    p.innerHTML = `
    <p class="bg-blue-50 p-1 rounded mb-3">
            You have Complete The Task ${subject} at ${formattedTime}
          </p>
    `;

    messegeContainer.appendChild(p);
  });

// 3 number card.
// 3 number card.
document
  .getElementById("home-page-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const taskNumber = document.getElementById("task-number").innerText;
    const convertedTaskNumber = parseInt(taskNumber);
    const finishResult = convertedTaskNumber - 1;

    const finalResult = (document.getElementById("task-number").innerText =
      finishResult);

    //uporer 23 take dortechi.
    const scoreNumber = document.getElementById("score-number").innerText;

    const convertedScoreNumber = parseInt(scoreNumber);
    const finishalScore = convertedScoreNumber + 1;
    const finalScore = (document.getElementById("score-number").innerText =
      finishalScore);

    //   alert dekanu
    alert("Board updated succesfully");

    // btn ke disable kora
    const button = document.getElementById("home-page-btn");
    button.disabled = true;

    // history te messege add kortesi.
    const subject = document.getElementById("subject-title3").innerText;

    const messegeContainer = document.getElementById("messege-container");

    // current time ber kortesi.

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedTime = `${hours % 12 || 12}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;

    const p = document.createElement("p");
    p.innerHTML = `
    <p class="bg-blue-50 p-1 rounded mb-3">
            You have Complete The Task ${subject} at ${formattedTime}
          </p>
    `;

    messegeContainer.appendChild(p);
  });

// 4 number card.
// 4 number card.
document
  .getElementById("new-imoge-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const taskNumber = document.getElementById("task-number").innerText;
    const convertedTaskNumber = parseInt(taskNumber);
    const finishResult = convertedTaskNumber - 1;

    const finalResult = (document.getElementById("task-number").innerText =
      finishResult);

    //uporer 23 take dortechi.
    const scoreNumber = document.getElementById("score-number").innerText;

    const convertedScoreNumber = parseInt(scoreNumber);
    const finishalScore = convertedScoreNumber + 1;
    const finalScore = (document.getElementById("score-number").innerText =
      finishalScore);

    //   alert dekanu
    alert("Board updated succesfully");

    // btn ke disable kora
    const button = document.getElementById("new-imoge-btn");
    button.disabled = true;

    // history te messege add kortesi.
    const subject = document.getElementById("subject-title4").innerText;

    const messegeContainer = document.getElementById("messege-container");

    // current time ber kortesi.

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedTime = `${hours % 12 || 12}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;

    const p = document.createElement("p");
    p.innerHTML = `
    <p class="bg-blue-50 p-1 rounded mb-3">
            You have Completed The Task ${subject} at ${formattedTime}
          </p>
    `;

    messegeContainer.appendChild(p);
  });

// 5 number card.
// 5 number card.
document.getElementById("api-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const taskNumber = document.getElementById("task-number").innerText;
  const convertedTaskNumber = parseInt(taskNumber);
  const finishResult = convertedTaskNumber - 1;

  const finalResult = (document.getElementById("task-number").innerText =
    finishResult);

  //uporer 23 take dortechi.
  const scoreNumber = document.getElementById("score-number").innerText;

  const convertedScoreNumber = parseInt(scoreNumber);
  const finishalScore = convertedScoreNumber + 1;
  const finalScore = (document.getElementById("score-number").innerText =
    finishalScore);

  //   alert dekanu
  alert("Board updated succesfully");

  // btn ke disable kora
  const button = document.getElementById("api-btn");
  button.disabled = true;

  // history te messege add kortesi.
  const subject = document.getElementById("subject-title5").innerText;

  const messegeContainer = document.getElementById("messege-container");

  // current time ber kortesi.

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedTime = `${hours % 12 || 12}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;

  const p = document.createElement("p");
  p.innerHTML = `
    <p class="bg-blue-50 p-1 rounded mb-3">
            You have Completed The Task ${subject} at ${formattedTime}
          </p>
    `;

  messegeContainer.appendChild(p);
});

// 6 number card.
// 6 number card.
document
  .getElementById("job-searching deagede")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const taskNumber = document.getElementById("task-number").innerText;
    const convertedTaskNumber = parseInt(taskNumber);
    const finishResult = convertedTaskNumber - 1;

    const finalResult = (document.getElementById("task-number").innerText =
      finishResult);

    //uporer 23 take dortechi.
    const scoreNumber = document.getElementById("score-number").innerText;

    const convertedScoreNumber = parseInt(scoreNumber);
    const finishalScore = convertedScoreNumber + 1;
    const finalScore = (document.getElementById("score-number").innerText =
      finishalScore);

    //   alert dekanu
    alert("Board updated succesfully");
    alert("Congrates!!! You have complated all the current tasks");

    // btn ke disable kora
    const button = document.getElementById("job-searching deagede");
    button.disabled = true;

    // history te messege add kortesi.
    const subject = document.getElementById("subject-title6").innerText;

    const messegeContainer = document.getElementById("messege-container");

    // current time ber kortesi.

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedTime = `${hours % 12 || 12}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;

    const p = document.createElement("p");
    p.innerHTML = `
    <p class="bg-blue-50 p-1 rounded mb-3">
            You have Completed The Task ${subject} at ${formattedTime}
          </p>
    `;

    messegeContainer.appendChild(p);
  });

// clear history btn ke dortechi
document
  .getElementById("clear-history-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const gayebKorbo = document.querySelectorAll("#messege-container p");
    gayebKorbo.forEach((p) => {
      p.remove();
    });
  });

// current date and time ta ber korar chest kortechi.

const today = new Date();
const day = today.toLocaleString("en-US", { weekday: "short" });
const date = today.getDate();
const month = today.toLocaleString("en-US", { month: "short" });
const year = today.getFullYear();

// id er maddome div e set kore ditechi.
document.getElementById("current-day").innerText = `${day},`;
document.getElementById(
  "current-month-date-year"
).innerText = `${month} ${date}, ${year}`;

// discober container
document
  .getElementById("discover-contaner")
  .addEventListener("click", function () {
    window.location.href = "blog.html";
  });

// bg color randomlly change korar try korteci.
document.getElementById("color-changer").addEventListener("click", function () {
  const colors = [
    "red",
    "blue",
    "yellow",
    "green",
    "purple",
    "pink",
    "teal",
    "cyan",
    "orange",
  ];
  const randomColor = Math.floor(Math.random() * colors.length);
  const changedColor = `bg-${colors[randomColor]}-300`;

  document.body.classList.forEach((cls) => {
    if (cls.startsWith("bg-")) {
      document.body.classList.remove(cls);
    }
  });

  document.body.classList.add(changedColor);
});
