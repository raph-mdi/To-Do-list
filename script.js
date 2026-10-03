const formulaire = document.getElementById("name-form")
const userInput = document.getElementById("username")
const paragraphe = document.getElementById("greeting")
let userName

formulaire.addEventListener("submit", setName)

function setName(event) {
    event.preventDefault()
    userName = userInput.value.trim()
    localStorage.setItem("name", userName)
    formulaire.style.display = "none"
    paragraphe.textContent = "Nom enregistré"

}

function afficher(){
    if(localStorage.getItem("name") !== null){
        formulaire.style.display = "none"
        userName = localStorage.getItem("name")
        paragraphe.textContent = `Bonjour, ${userName}`
    } else {
        formulaire.style.display ="block"
    }
} 

afficher()

const toogleBtn = document.getElementById("theme-toggle")

toogleBtn.addEventListener("click", themeSwitch)

function themeSwitch(){
    const isDarkMode = document.body.classList.toggle("dark-mode")
    if (isDarkMode) {
        toogleBtn.textContent = "Mode clair"
        localStorage.setItem("theme", "dark")
    } else {
        toogleBtn.textContent = "Mode sombre"
        localStorage.setItem("theme", "light")
    }
    toogleBtn.setAttribute("aria-pressed", isDarkMode)
}
// On y touche pas au-dessus, ça run correctement !!!

const tachesASaisir = document.getElementById("task-input")
const formulaireBis = document.getElementById("task-form")
const paragrapheBis = document.getElementById("empty-state")
const liste = []

formulaireBis.addEventListener("submit", ajouter)

function ajouter(event){
    event.preventDefault()
    const valeur = tachesASaisir.value
    liste.push(valeur) 
    userName = localStorage.getItem("name")
    const listeStockage = localStorage.setItem(userName, JSON.stringify(liste))
    paragrapheBis.textContent = `tâche n°${index + 1} ajoutée : ${valeur}`
    const elementListe = document.createElement("li")
    elementListe.textContent = liste[liste.length - 1]
    elementListe.classList.add("task-item")
    taskList.appendChild(elementListe)
}

function afficherTaches() {
    userName = localStorage.getItem("name")
    if (localStorage.getItem(`${userName}`) !== null) {
        const listeStockageBis = JSON.parse(localStorage.getItem(`${userName}`))
        
        listeStockageBis.forEach((item) => {
            const elementListe = document.createElement("li")
            elementListe.textContent = item
            elementListe.classList.add("task-item")
            taskList.appendChild(elementListe)
            paragrapheBis.textContent = "éléments sauvegardés dans la mémoire cache"
        })
    }
}

afficherTaches()

taskList.addEventListener("click", (event) => {
    if (event.target.matches(".task-item")) {
        event.target.remove()
    }
})

