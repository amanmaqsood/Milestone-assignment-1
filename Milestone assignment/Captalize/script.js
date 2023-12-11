function capitalizeAndDisplay() {
    const userName = document.getElementById("userName").value;
    const capitalizedName = userName.charAt(0).toUpperCase() + userName.slice(1);
    document.getElementById("result").textContent = `Original name: ${userName} | Capitalized name: ${capitalizedName}`;
}
