const btnCafe = document.getElementById("btncafe");
const btnPan = document.getElementById("btnpan");
const btnTe = document.getElementById("btnte");
const btnFrappe = document.getElementById("btnfrappe");
const cont = document.getElementsByClassName("menus");
//esta parte se investigi para el diseño :(
function mostrarMenu(id) {

    for(let section of cont) {
        section.style.display = "none";
    }
    document.getElementById(id).style.display = "grid"; 
}
btnCafe.addEventListener("click", () => mostrarMenu("calientes"));
btnFrappe.addEventListener("click", () => mostrarMenu("frios"));
btnPan.addEventListener("click", () => mostrarMenu("pan"));
btnTe.addEventListener("click", () => mostrarMenu("te"));



