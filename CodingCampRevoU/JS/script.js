// Greeting
let userName = prompt("Masukkan Nama Kamu:");

if (userName) {
    document.getElementById("welcomeText").innerText =
        "Hi " + userName + ", Welcome To Website";
}

// Form Validation
document.getElementById("messageForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let birth = document.getElementById("birth").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let pesan = document.getElementById("pesan").value;

    if (name === "" || birth === "" || !gender || pesan === "") {
        alert("Semua field harus diisi!");
        return;
    }

    document.getElementById("result").innerHTML = `
        <p><b>Nama:</b> ${name}</p>
        <p><b>Tanggal Lahir:</b> ${birth}</p>
        <p><b>Jenis Kelamin:</b> ${gender.value}</p>
        <p><b>Pesan:</b> ${pesan}</p>
    `;
});