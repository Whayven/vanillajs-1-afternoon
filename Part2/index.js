const idInput = document.getElementById("idInput");
const colorInput = document.getElementById("colorInput");

const setCard = () => {
  const card = document.getElementById(idInput.value);
  card.style.color = colorInput.value;
  idInput.value = "";
  colorInput.value = "";
};

const resetCards = () => {
  const ids = ["diamonds", "hearts", "clubs", "spades"];
  ids.forEach((id) => {
    document.getElementById(id).style.color = "gray";
  });
  idInput.value = "";
  colorInput.value = "";
};
