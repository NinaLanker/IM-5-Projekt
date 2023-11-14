document.addEventListener("DOMContentLoaded", function () {
    var popupButton = document.getElementById("popupButton");
    var popupContainer = document.getElementById("popupContainer");
    var closeButton = document.getElementById("closeButton");

    // Füge einen Klick-Event-Handler zum Bild hinzu
    popupButton.addEventListener("click", function () {
        popupContainer.style.display = "block";
    });

    // Füge einen Klick-Event-Handler zum Schließen-Button hinzu
    closeButton.addEventListener("click", function () {
        popupContainer.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
var popupButton2 = document.getElementById("popupButton2");
var popupContainer2 = document.getElementById("popupContainer2");
var closeButton2 = document.getElementById("closeButton2");

// Füge einen Klick-Event-Handler zum Bild hinzu
popupButton2.addEventListener("click", function () {
    popupContainer2.style.display = "block";
});

// Füge einen Klick-Event-Handler zum Schließen-Button hinzu
closeButton2.addEventListener("click", function () {
    popupContainer2.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var popupButton3 = document.getElementById("popupButton3");
    var popupContainer3 = document.getElementById("popupContainer3");
    var closeButton2 = document.getElementById("closeButton3");
    
    // Füge einen Klick-Event-Handler zum Bild hinzu
    popupButton3.addEventListener("click", function () {
        popupContainer3.style.display = "block";
    });
    
    // Füge einen Klick-Event-Handler zum Schließen-Button hinzu
    closeButton3.addEventListener("click", function () {
        popupContainer3.style.display = "none";
        });
    });

    document.getElementById("newsletter-form").addEventListener("submit", function (event) {
        event.preventDefault();
    
        // Daten aus den Formularfeldern sammeln
        var vorname = document.getElementById("vorname").value;
        var nachname = document.getElementById("nachname").value;
        var email = document.getElementById("email").value;
    
        // Meldung anzeigen (kann durch tatsächlichen Datenversand ersetzt werden)
        showNotification("Vielen Dank für deine Anmeldung!");
    
        // Überprüfe, ob die Bestätigungsnachricht bereits gezeigt wurde
        var isConfirmationShown = sessionStorage.getItem("confirmationShown");
    
        // Wenn die Bestätigungsnachricht noch nicht gezeigt wurde, zeige sie an
        if (!isConfirmationShown) {
            // Benachrichtigung anzeigen (kann durch tatsächlichen Datenversand ersetzt werden)
            showNotification("Vielen Dank für deine Anmeldung!");
    
            // Setze in der Session Storage, dass die Bestätigungsnachricht gezeigt wurde
            sessionStorage.setItem("confirmationShown", "true");
        }
    });
    
    function showNotification(message) {
        // Erstelle eine Benachrichtigungsbox
        var notificationBox = document.createElement("div");
        notificationBox.className = "notification";
        notificationBox.textContent = message;
    
        // Füge die Benachrichtigungsbox zum Dokument hinzu
        document.body.appendChild(notificationBox);
    
        // Schließe die Benachrichtigung nach 3 Sekunden
        setTimeout(function () {
            document.body.removeChild(notificationBox);
        }, 3000);
    }
    
    document.addEventListener("DOMContentLoaded", function () {
        var body = document.body;
    
        body.addEventListener("click", function (event) {
            // Überprüfe, ob das geklickte Element der Body selbst ist (nicht seine Kinder)
            if (event.target === body) {
                // Navigiere zur index.html-Seite
                window.location.href = "https://232876-2.web.fhgr.ch/index.html";
            }
        });
    
        var contactForm = document.getElementById("contact-form");
        var confirmationMessage = document.getElementById("confirmation-message");
    
        // Überprüfe, ob die Bestätigungsnachricht in der Session Storage gespeichert ist
        var isConfirmationShown = sessionStorage.getItem("confirmationShown");
    
        // Wenn die Bestätigungsnachricht bereits gezeigt wurde, verstecke das Formular und zeige die Bestätigungsnachricht
        if (isConfirmationShown) {
            contactForm.style.display = "none";
            confirmationMessage.style.display = "block";
        }
    
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            showConfirmationMessage();
        });
    
        function showConfirmationMessage() {
            contactForm.style.display = "none";
            confirmationMessage.style.display = "block";
    
            // Speichere in der Session Storage, dass die Bestätigungsnachricht gezeigt wurde
            sessionStorage.setItem("confirmationShown", "true");
        }
    });

document.addEventListener("DOMContentLoaded", function () {
    var body = document.body;

    body.addEventListener("click", function (event) {
        // Überprüfe, ob das geklickte Element der Body selbst ist (nicht seine Kinder)
        if (event.target === body) {
            // Navigiere zur index.html-Seite
            window.location.href = "https://232876-2.web.fhgr.ch/index.html";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var contactForm = document.getElementById("contact-form");
    var confirmationMessage = document.getElementById("confirmation-message");

    // Überprüfe, ob die Bestätigungsnachricht in der Session Storage gespeichert ist
    var isConfirmationShown = sessionStorage.getItem("confirmationShown");

    // Wenn die Bestätigungsnachricht bereits gezeigt wurde, verstecke das Formular und zeige die Bestätigungsnachricht
    if (isConfirmationShown) {
        contactForm.style.display = "none";
        confirmationMessage.style.display = "block";
    }

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        showConfirmationMessage();
    });

    function showConfirmationMessage() {
        contactForm.style.display = "none";
        confirmationMessage.style.display = "block";
        
        // Speichere in der Session Storage, dass die Bestätigungsnachricht gezeigt wurde
        sessionStorage.setItem("confirmationShown", "true");
    }
});


