const button = document.querySelector("button")

function contMsn() {
    tempo = document.querySelectorAll("#display div").length;
}

function NotificationPushAll() {
    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
            new Notification("Aviso!", {
                body: "Novas mensagens!",
                icon: "https://cdn-icons-png.flaticon.com/512/685/685836.png    "
            })
        }
    })
} 