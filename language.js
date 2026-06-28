function setLanguage(language) {

    localStorage.setItem("language", language);

    document.documentElement.lang =
        language === "pt" ? "pt-BR" : "en";

    document.querySelectorAll(".pt").forEach(el => {

        el.style.display =
            language === "pt"
                ? "inline"
                : "none";

    });

    document.querySelectorAll(".en").forEach(el => {

        el.style.display =
            language === "en"
                ? "inline"
                : "none";

    });

}