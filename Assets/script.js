function Table() {

    let a = Number(document.getElementById("num").value);
    let b = Number(document.getElementById("rng").value);

    if (a == "" && b == "") {
        document.getElementById("result").innerHTML = "<h2> INPUT NUMBER AND RANGE</h2>";
        return;
    }

    let fin = "<h2>" + a + "TABLE</h2>";
    for (i = 1; i <= b; i++) {
        fin += a + " x " + i + " = " + (a * i) + "<br>";
    }

    document.getElementById("result").innerHTML = fin;

}