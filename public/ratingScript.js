const form = document.querySelector("form:not(.edit-ratings-form)")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const formData = new FormData(form)
    const req = Object.fromEntries(formData)

    const response = await fetch("/add/rating", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(req)
    })
    const data = await response.json()
    console.log(data)

    window.location.href = "/ratings"
})

// Delete rating function
async function deleteRating(id){
    await fetch("/ratings/" + id, {method: "DELETE"})
    window.location.href = "/ratings"
}

// Handle edit buttons
document.querySelectorAll(".edit-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".rating-card");
    const form = card.querySelector(".edit-ratings-form");
    const buttonGroup = card.querySelector(".button-group");
    
    form.style.display = "block";
    buttonGroup.style.display = "none";
  });
});

// Handle cancel buttons
document.querySelectorAll(".cancel-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const card = e.target.closest(".rating-card");
    const form = card.querySelector(".edit-ratings-form");
    const buttonGroup = card.querySelector(".button-group");
    
    form.style.display = "none";
    buttonGroup.style.display = "block";
  });
});

// Handle edit form submission
document.querySelectorAll(".edit-ratings-form").forEach((editForm) => {
  editForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const ratingId = editForm.getAttribute("data-id");
    const formData = new FormData(editForm);
    const req = Object.fromEntries(formData);
    
    const response = await fetch("/ratings/" + ratingId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req)
    });
    
    const data = await response.json();
    console.log(data);
    
    window.location.href = "/ratings";
  });
});

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const bookData = new FormData(form)
    const req = Object.fromEntries(bookData)

    const response = await fetch("/add/rating", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(req)
    })
    const data = await response.json()
    console.log(data)

    window.location.href = "/ratings"
})

// write the async function deleteRating
// make sure it redirects to /ratings after

async function deleteRating(id){
await fetch("/ratings/"+id,{method:"DELETE"})
window.location.href = ("/ratings")
}