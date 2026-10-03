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

function afficher() {
    if (localStorage.getItem("name") !== null) {
        formulaire.style.display = "none"
        userName = localStorage.getItem("name")
        paragraphe.textContent = `Bonjour, ${userName}`
    } else {
        formulaire.style.display = "block"
    }
}

afficher()

const toogleBtn = document.getElementById("theme-toggle")

toogleBtn.addEventListener("click", themeSwitch)

function themeSwitch() {
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
const taskList = document.getElementById("task-list")
const cleStockageTaches = localStorage.getItem("name")
const tachesSauvegardees = localStorage.getItem(cleStockageTaches)
const liste = tachesSauvegardees === null ? [] : JSON.parse(tachesSauvegardees)

formulaireBis.addEventListener("submit", ajouter)

function ajouter(event) {
    event.preventDefault()
    const valeur = tachesASaisir.value.trim()
    if (valeur) {
        liste.push(valeur)
        sauvegarderTaches()
        afficherTaches()
        paragrapheBis.textContent = `Tâche ajoutée : ${valeur}`
        tachesASaisir.value = ""
    } else {
        paragrapheBis.textContent = "Saisis une tâche avant de l’ajouter."
    }
}

function sauvegarderTaches() {
    localStorage.setItem(localStorage.getItem("name"), JSON.stringify(liste))
}

function afficherTaches() {
    taskList.replaceChildren()
    if (liste.length === 0) {
        paragrapheBis.textContent = "Aucune tâche pour le moment."
    } else {
        paragrapheBis.textContent = "Éléments sauvegardés dans la mémoire cache."
    }

    liste.forEach((item) => {
        const elementListe = document.createElement("li")
        elementListe.textContent = item
        elementListe.classList.add("task-item")
        taskList.appendChild(elementListe)
    })
}

afficherTaches()

taskList.addEventListener("click", (event) => {
    if (event.target.matches(".task-item")) {
        liste.splice(Number(event.target.dataset.index), 1)
        sauvegarderTaches()
        afficherTaches()
    }
})

const reinitialisation = document.getElementById("reset-button")
reinitialisation.addEventListener("click", reinitialiser)

function reinitialiser() {
    localStorage.clear()
    paragrapheBis.textContent = "mémoire cache vidée"
}
