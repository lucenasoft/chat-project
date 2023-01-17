//const button = document.querySelector("button")

function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
}


//button.addEventListener("click", () => {
//    Notification.requestPermission().then(perm => {
//        if (perm === "granted") {
//            new Notification("Aviso!", {
//                body: "Novas mensagens!",
//                icon: "https://cdn-icons-png.flaticon.com/512/685/685836.png"
//            })
//        }
//    })
//})

function NotificationPushAll(aviso, mensagem) {
    pai = document.getElementById("display");
    ultimoFilho = pai.lastElementChild;
    aviso = ultimoFilho.firstChild.textContent;
    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
            new Notification(aviso, {
                body: "teste",
                icon: "https://cdn-icons-png.flaticon.com/512/685/685836.png"
            })
        }
    })
} 