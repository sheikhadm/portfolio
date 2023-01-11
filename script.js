// Array of classes
let classes = ["show1", "show2", "show3"]
//list
let Home = document.querySelector(".Home")
let Project = document.querySelector(".Project")
let Contact = document.querySelector(".Contact")
//sections
let home = document.querySelector(".home")
let project = document.querySelector(".projects")
let contact = document.querySelector(".contact")
let sections = document.querySelectorAll("section")


function hide() {
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove("show1")
        sections[i].classList.remove("show2")
        sections[i].classList.remove("show3")
    }
}
Home.addEventListener("click", () => {
    hide()
    let randomNumber = Math.floor(Math.random() * classes.length)
    home.classList.add(classes[randomNumber])
    console.log(home)
})
Project.addEventListener("click", () => {
    hide()
    let randomNumber = Math.floor(Math.random() * classes.length)
    project.classList.add(classes[randomNumber])
    console.log(project)
    console.log(home)
})
Contact.addEventListener("click", () => {
    hide()
    let randomNumber = Math.floor(Math.random() * classes.length)
    contact.classList.add(classes[randomNumber])
})