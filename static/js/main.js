const pending_nav_btn = document.getElementById("pending-nav-btn");
const completed_nav_btn = document.getElementById("completed-nav-btn");
const trash_nav_btn = document.getElementById("trash-nav-btn");

const task_list = document.getElementById("task-list");

const restore_btn = document.getElementById("restore-btn");
const add_btn = document.getElementById("add-btn");
const close_btn = document.getElementById("close-btn");
const complete_btn = document.getElementById("complete-btn");
const trash_btn = document.getElementById("trash-btn");
const delete_btn = document.getElementById("delete-btn");
const save_btn = document.getElementById("save-btn");

const task_action_btns = document.getElementById("action-btns");
const task_action = document.getElementById("task-action");
const task_title = document.getElementById("task-action-title");
const task_id = document.getElementById("task-id");
const task_input = document.getElementById("task-input");
const task_created = document.getElementById("task-created");
const task_updated = document.getElementById("task-updated");

add_btn.addEventListener("click", function() {
    add_btn.classList.remove("active");
    close_btn.classList.add("active");
    save_btn.classList.add("active");
    task_action.classList.add("active");
});

close_btn.addEventListener("click", function() {
    if (task_id.value != "") {
        const task_icon = document.getElementById(task_id.value);
        task_icon.innerHTML = `<i class="far fa-check-circle"></i>`;
        task_icon.classList.remove("active");
    }

    clearTaskForm();
});

save_btn.addEventListener("click", function() {
    submitTask();
});

complete_btn.addEventListener("click", function() {
    completeTask();
});

trash_btn.addEventListener("click", function() {
    removeTask();
});

restore_btn.addEventListener("click", function() {
    restoreTask();
});

delete_btn.addEventListener("click", function() {
    deleteTask();
});

async function loader() {
    task_list.innerHTML = `<svg style="left: 50%; top: 50%; position: absolute; transform: translate(-50%, -50%) matrix(1, 0, 0, 1, 0, 0);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 187.3 93.7" height="300px" width="400px">
        <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="4" fill="none" id="outline" stroke="#9B02FD"></path>
        <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#FFFFFF" fill="none" opacity="0.25" id="outline-bg"></path>
    </svg>`;
}

async function clearTaskForm() {
    add_btn.classList.add("active");
    close_btn.classList.remove("active");
    complete_btn.classList.remove("active");
    trash_btn.classList.remove("active");
    delete_btn.classList.remove("active");
    save_btn.classList.remove("active");
    restore_btn.classList.remove("active");
    task_action.classList.remove("active");
    task_title.innerHTML = "New Task";
    
    task_id.value = "";
    task_input.value = "";
    task_input.disabled = false;
    task_created.innerHTML = "";
    task_updated.innerHTML = "";
    
    if (trash_nav_btn.classList.contains("active")) {
        task_action_btns.classList.remove("active");
    }
}