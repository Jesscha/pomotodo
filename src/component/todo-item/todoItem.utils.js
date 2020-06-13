export const showNotification = ({icon, body}) => {
    new Notification("POMO CRUSHER", {
        icon,
        body,
    });
    // console.log(notification);
}  

export const notificationCall = (icon, body, callback)=>{
    if (window.Notification) {
        if (Notification.permission === 'granted') {
            callback({icon, body})
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    callback({icon, body})
                }
            })
        }

    }




}