// logout
document.getElementById('btn-logout').addEventListener("click",
    async function (event) {
        event.preventDefault();
        console.log('click')
        window.localStorage.clear();
        location.assign('../authentication/login.html')
    }
)