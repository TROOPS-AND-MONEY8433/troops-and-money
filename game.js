function gameOver() {
    // Increase death count
    let deathCount = localStorage.getItem('deathCount') ? parseInt(localStorage.getItem('deathCount')) : 0;
    deathCount += 1;
    localStorage.setItem('deathCount', deathCount);

    // Redirect to dead.html
    window.location.href = "dead.html";
}
