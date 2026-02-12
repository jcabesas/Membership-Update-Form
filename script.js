const scriptURL = 'https://script.google.com/macros/s/AKfycbyLnjJO3xWJaaaUBQZiZIWEEIp1Prq_kGk_McVJY0Y8SkEZk928_fdqeOLdbOba_irc_g/exec';

document.getElementById("memberForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {
    if (response.result === "success") {
      alert("Membership updated successfully!");
      this.reset();
    } else {
      alert("Error submitting form.");
    }
  })
  .catch(error => {
    console.error(error);
    alert("Submission failed.");
  });
});
