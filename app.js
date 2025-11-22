document.getElementById("btn").addEventListener("click", function () {
    fetch("superheroes.php")
        .then(response => response.text())
        .then(html => {

            const temp = document.createElement("div");
            temp.innerHTML = html;

            let names = [];

            temp.querySelectorAll("li").forEach(li => {
                names.push(li.textContent);
            });

            alert(names.join("\n"));
        })
        .catch(error => console.error("Error:", error));
});