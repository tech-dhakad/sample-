// script.js

document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("input");
    const header = document.querySelector("header");
    const logo = document.querySelector(".logo img");
    const searchInput = document.querySelector(".searchbar input");

    // Smooth scrolling effect for navigation
    document.querySelectorAll("ul li a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelector("main").scrollIntoView({ behavior: "smooth" });
        });
    });

    // Input focus effect
    input.addEventListener("focus", () => {
        input.style.boxShadow = "0px 0px 15px rgba(255, 255, 255, 0.7)";
    });

    input.addEventListener("blur", () => {
        input.style.boxShadow = "none";
    });

    // Navbar color change on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "rgba(0, 0, 0, 0.8)";
        } else {
            header.style.background = "rgba(0, 0, 0, 0.5)";
        }
    });

    // Interactive logo effect
    logo.addEventListener("mouseover", () => {
        document.body.style.background = "linear-gradient(135deg,hsl(301, 100.00%, 50.00%),hsl(0, 100.00%, 50.00%))";
    });

    logo.addEventListener("mouseleave", () => {
        document.body.style.background = "linear-gradient(135deg,rgb(255, 0, 166), #1e00ff)";
    });

    // Chatbot integration
    async function sendMessageToBot(userMessage) {
        try {
            const response = await fetch("http://localhost:5000/api/chatbot", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message: userMessage })
            });

            const data = await response.json();
            console.log("Bot says:", data.botResponse);
        } catch (error) {
            console.error("Error communicating with chatbot:", error);
        }
    }

    // Example usage: sending message when Enter key is pressed
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter" && input.value.trim() !== "") {
            sendMessageToBot(input.value);
            input.value = ""; // Clear input after sending message
        }
    });
});
