const checkboxes = document.querySelectorAll("input[type='checkbox']");
const good = document.getElementById("good");
let selectedCheckboxes = [];

function handleCheckboxChange(e) {
  const checkbox = e.target;
  let checkedCount = document.querySelectorAll(
    "input[type='checkbox']:checked"
  ).length;
  if (selectedCheckboxes.length >= 4) {
    selectedCheckboxes.shift();
  }

  if (checkbox.checked) {
    selectedCheckboxes.push(checkbox);
    if (
      checkedCount === 3 &&
      good !== selectedCheckboxes[selectedCheckboxes.length - 2]
    ) {
      selectedCheckboxes[selectedCheckboxes.length - 2].checked = false;
    } else if (checkedCount === 3 && good.checked === true) {
      selectedCheckboxes[selectedCheckboxes.length - 4].checked = false;
    }
  }
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", handleCheckboxChange);
});
