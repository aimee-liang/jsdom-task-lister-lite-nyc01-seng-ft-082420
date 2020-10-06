document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form")

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const task = e.target["new-task-description"].value;
    let taskLi = document.createElement("li");
    taskLi.textContent = task;

    const btn = document.createElement("BUTTON");
    btn.textContent = "remove";
    taskLi.append(btn);

    function removeButton() {
      btn.addEventListener('click', function (e) {
        const taskLi = e.target.parentElement;
        taskLi.remove();
      })
    }


    const editButton = document.createElement("BUTTON");
    editButton.textContent = "edit";
    taskLi.append(editButton);

    editButton.addEventListener('click', function (e) {
      e.preventDefault();
      let button = e.target
      const input = document.createElement('INPUT')
      const editSubmit = document.createElement('BUTTON')
      editSubmit.textContent = "Submit"

      editSubmit.addEventListener('click', function (e) {
        e.preventDefault();
        let newTask = input.value
        taskLi.textContent = newTask
        console.dir(newTask)
        tasks.append(taskLi)
        // removeButton()
      })

      tasks.append(input)
      tasks.append(editSubmit)

      editSubmit.addEventListener('dblclick', function (e) {
        input.remove();
      })

    })


    const tasks = document.getElementById("tasks");
    tasks.appendChild(taskLi)
  })



});
