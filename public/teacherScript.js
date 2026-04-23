const form = document.querySelector("form:not(.edit-teacher-form)")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const bookData = new FormData(form)
    const req = Object.fromEntries(bookData)

    const response = await fetch("/add/teacher", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(req)
    })
    const data = await response.json()
    console.log(data)

    window.location.href = "/"
})

// write the async function deleteTeacher
// make sure it redirects to / after
async function deleteTeacher(id){
await fetch("/teachers/"+id,{method:"DELETE"})
window.location.href = ("/")
}

// Handle edit buttons
document.querySelectorAll(".edit-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".teacher-card");
    const form = card.querySelector(".edit-teacher-form");
    const buttonGroup = card.querySelector(".button-group");
    
    form.style.display = "block";
    buttonGroup.style.display = "none";
  });
});

// Handle cancel buttons
document.querySelectorAll(".cancel-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const card = e.target.closest(".teacher-card");
    const form = card.querySelector(".edit-teacher-form");
    const buttonGroup = card.querySelector(".button-group");
    
    form.style.display = "none";
    buttonGroup.style.display = "block";
  });
});

// Handle edit form submission
document.querySelectorAll(".edit-teacher-form").forEach((editForm) => {
  editForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const teacherId = editForm.getAttribute("data-id");
    const formData = new FormData(editForm);
    const req = Object.fromEntries(formData);
    
    const response = await fetch("/teachers/" + teacherId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req)
    });
    
    const data = await response.json();
    console.log(data);
    
    window.location.href = "/";
  });
});