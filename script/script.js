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
    const subject = document.getElementById("subject-title").innerText;

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
