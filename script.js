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
    var closeButton3 = document.getElementById("closeButton3");
    
    // Füge einen Klick-Event-Handler zum Bild hinzu
    popupButton3.addEventListener("click", function () {
        popupContainer3.style.display = "block";
    });
    
    // Füge einen Klick-Event-Handler zum Schließen-Button hinzu
    closeButton3.addEventListener("click", function () {
        popupContainer3.style.display = "none";
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        var popupButton4 = document.getElementById("popupButton4");
        var popupContainer4 = document.getElementById("popupContainer4");
        var closeButton4 = document.getElementById("closeButton4");
        
        // Füge einen Klick-Event-Handler zum Bild hinzu
        popupButton4.addEventListener("click", function () {
            popupContainer4.style.display = "block";
        });
        
        // Füge einen Klick-Event-Handler zum Schließen-Button hinzu
        closeButton4.addEventListener("click", function () {
            popupContainer4.style.display = "none";
            });
        });

    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("newsletter-form").addEventListener("submit", function (event) {
            event.preventDefault();
    
            var email = document.getElementById("email").value;

            showConfirmationMessage();
        });
    
        function showConfirmationMessage() {
         
            document.getElementById("newsletter-form").style.display = "none";
    
          
            var confirmationMessage = document.getElementById("confirmation-message");
            confirmationMessage.style.display = "block";
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
    
        var contactForm = document.getElementById("contact-form");
        var confirmationMessage = document.getElementById("confirmation-messagek");
    
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


