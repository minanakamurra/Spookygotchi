//Mina Nakamura, P15 GIT Zwart, Inleiding Prgrammeren, 19 maart 2021, 500824922

console.log("spookygotchi")

//spook1 var
var spook1 = document.querySelector("img.spookje1");
var spook1ActieTekst = document.querySelector("p.spookje1Tekst");
var spook1Actie1 = document.querySelector("img.spook1Actie1");
var spook1Actie2 = document.querySelector("img.spook1Actie2");
var spook1Actie3 = document.querySelector("img.spook1Actie3");

//spook1 arrays
var spook1Actie1TekstLijst = ["Ze is erg blij met het snoepje", "Ze wilt graag nog een snoepje", "Door het snoepje is ze nu erg gelukkig"];
var spook1Actie2TekstLijst = ["Ze vind de hoed helemaal geweldig", "Ze is een grote fan van de hoed ", "Ze is erg blij met de hoed "];
var spook1Actie3TekstLijst = ["Ze houdt niet van spinnen", "De spin maakt haar bang", "Spinnen zijn haar grootste angst"];

//spook2 var
var spook2 = document.querySelector("img.spookje2");
var spook2ActieTekst = document.querySelector("p.spookje2Tekst");
var spook2Actie1 = document.querySelector("img.spook2Actie1");
var spook2Actie2 = document.querySelector("img.spook2Actie2");
var spook2Actie3 = document.querySelector("img.spook2Actie3");

//spook2 arrays
var spook2Actie1TekstLijst = ["Ze is op zich wel blij ermee", "Ze vind het op zich wel leuk", "Snoep is altijd leuk om mee te jongleren"];
var spook2Actie2TekstLijst = ["Ze vind het geen leuke voed", "Probeer iets anders..", "Ze vind het echt een lelijke hoed"];
var spook2Actie3TekstLijst = ["Spinnen zijn niet per sé haar beste vrienden", "Hmm...", "Ze weet niet helemaal wat ze er mee moet"];

//spook3 var
var spook3 = document.querySelector("img.spookje3")
var spook3ActieTekst = document.querySelector("p.spookje3Tekst")
var spook3Actie1 = document.querySelector("img.spook3Actie1")
var spook3Actie2 = document.querySelector("img.spook3Actie2")
var spook3Actie3 = document.querySelector("img.spook3Actie3")

//spook3 arrays
var spook3Actie1TekstLijst = [":)", ":D", ":O"];
var spook3Actie2TekstLijst = [":o", ":>", ":]"];
var spook3Actie3TekstLijst = [":|", "...", ":/"];

//var audio
var muziekKnop = document.querySelector(".muziekKnop");
var muziekSpelen = document.querySelector("#achtergrondMuziek");

//var windowurl
var windowURL = window.location.href;

//muziek/audio aan/uit zetten
muziekKnop.addEventListener("click", function () {
    muziekActie();
}, false);

function muziekActie() {
    if (muziekSpelen.paused == false) {
        muziekSpelen.pause();
        muziekKnop.src = "./images/mute.gif";
    } else {
        muziekSpelen.play();
        muziekKnop.src = "./images/play.gif";
    }
}

//de drie html paginas, de eerste voor spook1 
if (windowURL.includes("index")) {
    //spook1 actie uitvoeringen
    spook1Actie1.addEventListener("click", function () {
        voerActieUit("spook1Actie1Uitvoering");
        actieTeksten("spook1Actie1Tekst");
    }, false);

    spook1Actie2.addEventListener("click", function () {
        voerActieUit("spook1Actie2Uitvoering");
        actieTeksten("spook1Actie2Tekst");
    }, false);

    spook1Actie3.addEventListener("click", function () {
        voerActieUit("spook1Actie3Uitvoering");
        actieTeksten("spook1Actie3Tekst");
    }, false);

    //functie voor de uitvoeringen/veranderingen
    function voerActieUit(value) {
        if (value == "spook1Actie1Uitvoering") {
            spook1.src = "./images/ghost-1-1.gif"
        } else if (value == "spook1Actie2Uitvoering") {
            spook1.src = "./images/ghost-1-2.gif"
        } else if (value == "spook1Actie3Uitvoering") {
            spook1.src = "./images/ghost-1-3.gif"
        }
    }

    //reset image naar negin image
    setInterval(resetImage, 3200)

    function resetImage() {
        spook1.src = "./images/ghost-1-normal.gif";
    }

    // functie voor de tekst veranderingen
    function actieTeksten(value) {
        var randomGetal = Math.random() * 3;
        randomGetal = Math.floor(randomGetal);

        if (value == "spook1Actie1Tekst") {
            spook1ActieTekst.textContent = spook1Actie1TekstLijst[randomGetal];
        } else if (value == "spook1Actie2Tekst") {
            spook1ActieTekst.textContent = spook1Actie2TekstLijst[randomGetal];
        } else if (value == "spook1Actie3Tekst") {
            spook1ActieTekst.textContent = spook1Actie3TekstLijst[randomGetal];
        }
    }

    //hieronder hetzelfde maar voor spook2
} else if (windowURL.includes("ghost2")) {
    //spook2 actie uitvoeringen
    spook2Actie1.addEventListener("click", function () {
        voerActieUit("spook2Actie1Uitvoering");
        actieTeksten("spook2Actie1Tekst");
    }, false);

    spook2Actie2.addEventListener("click", function () {
        voerActieUit("spook2Actie2Uitvoering");
        actieTeksten("spook2Actie2Tekst");
    }, false);

    spook2Actie3.addEventListener("click", function () {
        voerActieUit("spook2Actie3Uitvoering");
        actieTeksten("spook2Actie3Tekst");
    }, false);

    //functie voor de uitvoeringen/veranderingen
    function voerActieUit(value) {
        if (value == "spook2Actie1Uitvoering") {
            spook2.src = "./images/ghost-2-1.gif"
        } else if (value == "spook2Actie2Uitvoering") {
            spook2.src = "./images/ghost-2-2.gif"
        } else if (value == "spook2Actie3Uitvoering") {
            spook2.src = "./images/ghost-2-3.gif"
        }
    }

    //reset image naar negin image
    setInterval(resetImage, 3200)

    function resetImage() {
        spook2.src = "./images/ghost-2-normal.gif";
    }

    // functie voor de tekst veranderingen
    function actieTeksten(value) {
        var randomGetal = Math.random() * 3;
        randomGetal = Math.floor(randomGetal);

        if (value == "spook2Actie1Tekst") {
            spook2ActieTekst.textContent = spook2Actie1TekstLijst[randomGetal];
        } else if (value == "spook2Actie2Tekst") {
            spook2ActieTekst.textContent = spook2Actie2TekstLijst[randomGetal];
        } else if (value == "spook2Actie3Tekst") {
            spook2ActieTekst.textContent = spook2Actie3TekstLijst[randomGetal];
        }
    }

    //hieronder hetzelfde maar voor spook3
} else if (windowURL.includes("ghost3")) {
    //spook3 actie uitvoeringen
    spook3Actie1.addEventListener("click", function () {
        voerActieUit("spook3Actie1Uitvoering");
        actieTeksten("spook3Actie1Tekst");
    }, false);

    spook3Actie2.addEventListener("click", function () {
        voerActieUit("spook3Actie2Uitvoering");
        actieTeksten("spook3Actie2Tekst");
    }, false);

    spook3Actie3.addEventListener("click", function () {
        voerActieUit("spook3Actie3Uitvoering");
        actieTeksten("spook3Actie3Tekst");
    }, false);

    //functie voor de uitvoeringen/veranderingen
    function voerActieUit(value) {
        if (value == "spook3Actie1Uitvoering") {
            spook3.src = "./images/ghost-3-1.gif"
        } else if (value == "spook3Actie2Uitvoering") {
            spook3.src = "./images/ghost-3-2.gif"
        } else if (value == "spook3Actie3Uitvoering") {
            spook3.src = "./images/ghost-3-3.gif"
        }
    }

    //reset image naar negin image
    setInterval(resetImage, 3200)

    function resetImage() {
        spook3.src = "./images/ghost-3-normal.gif";
    }

    // functie voor de tekst veranderingen
    function actieTeksten(value) {
        var randomGetal = Math.random() * 3;
        randomGetal = Math.floor(randomGetal);

        if (value == "spook3Actie1Tekst") {
            spook3ActieTekst.textContent = spook3Actie1TekstLijst[randomGetal];
        } else if (value == "spook3Actie2Tekst") {
            spook3ActieTekst.textContent = spook3Actie2TekstLijst[randomGetal];
        } else if (value == "spook3Actie3Tekst") {
            spook3ActieTekst.textContent = spook3Actie3TekstLijst[randomGetal];
        }
    }
}