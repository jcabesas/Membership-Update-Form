const scriptURL = 'https://script.google.com/macros/s/AKfycbz4Sg9TEBbJiqwEu_Nj5fcHtLlp9pIwn-ytOMo81FCG9j7RbG9AdAmF56pP3gCSlGbwzA/exec';
const form = document.getElementById('memberForm');
const modal = document.getElementById('thankYouModal');
const closeModal = document.getElementById('closeModal');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(data => {
    if (data.result === "success") {
      modal.style.display = "block";
      form.reset();
    } else {
      alert("Submission failed.");
    }
  })
  .catch(error => {
    console.error("Error!", error.message);
    alert("Error submitting form.");
  });
});

closeModal.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
  if (event.target == modal) modal.style.display = "none";
};