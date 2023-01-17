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

function NotificationPushAll() {
    Notification.requestPermission().then(perm => {
        aviso = pai.firstChild.textContent;
        mensagem = pai.children[3].textContent;
        data = pai.children[4].textContent;
        body = pai.children[3].textContent + "\n" + pai.children[4].textContent;
        if (perm === "granted") {
            new Notification(aviso, {
                body: body,
                icon: "https://cdn-icons-png.flaticon.com/512/685/685836.png",
            })
        }
    })
} 