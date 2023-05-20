todos = [
    {
        name: "buy eggs",
        id: "1",
        done: false
    },


    {
        name: "buy books",
        id: "2",
        done: false
    },

    {
        name: "buy rail",
        id: "3",
        done: false
    },


    {
        name: "buy car",
        id: "4",
        done: true
    }
]
const todocontainer = document.getElementById("todo_container")

function render() {
    todocontainer.innerHTML = ""
    todos.forEach(item => {
        todocontainer.appendChild(getdo(item))
    })
}
function getdo(item) {
    const container = document.createElement("div")
    container.classList.add("todo")
    const input = document.createElement("input")
    input.id = item.id
    input.checked = item.done
    input.type = "checkbox"
    container.appendChild(input)
    input.addEventListener("change", () => {
        item.done = !item.done
        render()
    })
    const label = document.createElement("label")
    label.htmlfor = item.id;
    label.innerHTML = item.name
    if (item.done) {
        label.classList.add("cut")
    }
    container.appendChild(label)
    return container

}
render()