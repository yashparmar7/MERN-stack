let todo = [];

let request = prompt("Please enter your todo item");

while (true) {
    if(request === "quit") {
        break;
    }

    if(request == "list"){
        console.log("**********");
        for(task of  todo){
            console.log(todo.indexOf(task) + ": " + task);
        }
        console.log("**********");
    }else if(request == "add"){
        let newTask = prompt("Enter new task you want to add");
        todo.push(newTask);
        console.log("Task added successfully");     
    }else if(request == "delete"){
        let index = prompt("Enter the index of the task you want to delete");
        todo.splice(index, 1);
        console.log("Task deleted successfully");
    }else{
        console.log("Invalid request");
    }
}
