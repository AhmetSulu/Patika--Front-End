// DOM Elements
const taskInput = document.getElementById('taskInput')
const taskList = document.getElementById('taskList')
const emptyState = document.getElementById('emptyState')
const progressBar = document.getElementById('progressBar')
const filterButtons = document.querySelectorAll('.filter-btn')
const toastLiveExample = document.getElementById('liveToast')
const toastMessage = document.getElementById('toastMessage')
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

// Current filter state
let currentFilter = 'all'

// Add task on Enter key press
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask()
    }
})

// Filter buttons event listeners
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active filter button
        filterButtons.forEach(btn => btn.classList.remove('active'))
        button.classList.add('active')
        
        // Update filter value
        currentFilter = button.getAttribute('data-filter')
        
        // Reload tasks with new filter
        loadTasks()
    })
})

// Load tasks from LocalStorage
function loadTasks() {
    // Retrieve tasks from LocalStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    
    // Apply filter to tasks
    const filteredTasks = tasks.filter(task => {
        if (currentFilter === 'active') return !task.completed
        if (currentFilter === 'completed') return task.completed
        return true
    })

    // Clear task list
    taskList.innerHTML = ''

    // Handle empty state
    if (filteredTasks.length === 0) {
        emptyState.style.display = 'block'
        taskList.style.display = 'none'
        progressBar.style.width = '0%'
    } else {
        emptyState.style.display = 'none'
        taskList.style.display = 'block'

        // Calculate progress bar percentage
        const completedTasks = tasks.filter(task => task.completed).length
        const progressPercentage = (completedTasks / tasks.length) * 100
        progressBar.style.width = `${progressPercentage}%`
    }

    // Render filtered tasks
    filteredTasks.forEach((task, index) => {
        const li = document.createElement('li')
        li.className = `list-group-item task-item ${task.completed ? 'completed' : ''}`
        
        // Create unique task ID
        const taskId = `task-${task.createdAt}`
        
        li.innerHTML = `
            <span class="task-text" onclick="toggleTask('${taskId}')">${task.text}</span>
            <button class="btn-delete" onclick="deleteTask('${taskId}')">
                <i class="fas fa-trash"></i>
            </button>
        `
        taskList.appendChild(li)
    })
}

// Event listener for loading tasks on page load
document.addEventListener('DOMContentLoaded', loadTasks)

// Function to add a new task
function addTask() {
    // Trim and validate task input
    const taskText = taskInput.value.trim()

    // Check for empty task
    if (taskText === '') {
        showToast('Task text cannot be empty!', 'danger')
        return
    }

    // Retrieve existing tasks
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    
    // Prevent duplicate tasks
    if(tasks.some(task => task.text.toLowerCase() === taskText.toLowerCase())) {
        showToast('This task already exists in the list!', 'warning')
        return
    }
    
    // Create new task object
    const newTask = { 
        text: taskText, 
        completed: false, 
        createdAt: new Date().toISOString() 
    }
    tasks.push(newTask)
    
    // Save updated tasks to LocalStorage
    localStorage.setItem('tasks', JSON.stringify(tasks))

    // Clear input field
    taskInput.value = ''

    // Reload tasks
    loadTasks()

    // Show success toast
    showToast('Task successfully added!', 'success')
}

// Function to delete a task
function deleteTask(taskId) {
    // Retrieve tasks from LocalStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    
    // Filter out the task to be deleted
    const updatedTasks = tasks.filter(task => `task-${task.createdAt}` !== taskId)
    
    // Update LocalStorage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))

    // Reload tasks
    loadTasks()

    // Show deletion toast
    showToast('Task deleted!', 'info')
}

// Function to toggle task completion
function toggleTask(taskId) {
    // Retrieve tasks from LocalStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    
    // Toggle task completion status
    const updatedTasks = tasks.map(task => {
        if (`task-${task.createdAt}` === taskId) {
            return { ...task, completed: !task.completed }
        }
        return task
    })
    
    // Update LocalStorage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))

    // Reload tasks
    loadTasks()
}

// Function to show toast notifications
function showToast(message, type = 'primary') {
    toastMessage.textContent = message
    toastLiveExample.classList.remove('bg-primary', 'bg-success', 'bg-warning', 'bg-danger', 'bg-info')
    toastLiveExample.classList.add(`bg-${type}`, 'text-white')
    toastBootstrap.show()
}