// Typing Effect Function (with delay)
function typingEffect(element, text, speed) {
    let i = 0;
    let timer = setInterval(function () {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            setTimeout(function () {
                element.innerHTML = element.innerHTML;  // Add more actions after typing
            }, 1000); // Pause for 1 second after typing completes
        }
    }, speed);
}

// Typing effect when page loads
window.onload = function () {
    const typingElement = document.getElementById("typing-effect");
    const text = "Understanding Teenagers";  // Text to be typed
    typingEffect(typingElement, text, 150);  // 150ms typing speed
};

// Smooth Scroll Effect for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Scroll-to-Top Button functionality
let scrollTopButton = document.createElement("button");
scrollTopButton.id = "scrollTopBtn";
scrollTopButton.innerHTML = "Top";
scrollTopButton.style.display = "none";
scrollTopButton.style.position = "fixed";
scrollTopButton.style.bottom = "20px";
scrollTopButton.style.right = "20px";
scrollTopButton.style.padding = "10px 20px";
scrollTopButton.style.backgroundColor = "#ff6347";
scrollTopButton.style.color = "#fff";
scrollTopButton.style.border = "none";
scrollTopButton.style.borderRadius = "5px";
scrollTopButton.style.cursor = "pointer";
document.body.appendChild(scrollTopButton);

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
};

scrollTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Form Validation
function validateForm() {
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;

    if (!name || !mobile || !email) {
        alert("Please fill in all the fields!");
        return false;
    }
    return true;
}

// Initialize EmailJS (replace with your actual user ID)
(function () {
    emailjs.init("user_SGFGGg6NKh9lgqaBz5i7v");  // Replace with your EmailJS user ID
})();

// Handle form submission and send email with EmailJS
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();  // Prevent form from submitting normally

    if (validateForm()) {
        const formData = new FormData(this);  // Get form data
        const formObject = Object.fromEntries(formData.entries());

        // Send email using EmailJS
        emailjs.sendForm('service_xyz123', 'template_abc456', formObject)  // Replace with your service and template IDs
            .then(function (response) {
                alert("Message sent successfully! We'll get back to you shortly.");
                document.getElementById("contact-form").reset();  // Reset form after submission
            }, function (error) {
                alert("Failed to send the message. Please try again.");
                console.log(error);
            });
    }
});

// Add hover effects to buttons
const buttons = document.querySelectorAll('button, input[type="submit"], .nav a');
buttons.forEach(button => {
    button.addEventListener('mouseover', function () {
        this.style.backgroundColor = '#ff4500';  // Darker orange on hover
    });

    button.addEventListener('mouseout', function () {
        this.style.backgroundColor = '';  // Reset background color
    });
});

// Dynamic date display in footer
const dateElement = document.getElementById('current-year');
if (dateElement) {
    const currentYear = new Date().getFullYear();
    dateElement.innerHTML = currentYear;  // Display current year
}

// Enable dark mode toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
if (darkModeToggle) {
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            darkModeToggle.innerHTML = "Light Mode";
        } else {
            darkModeToggle.innerHTML = "Dark Mode";
        }
    });
}

// Add a delay on loading the page (for added effect)
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.body.style.opacity = 1;  // Fade in the page after 0.5 seconds
    }, 500);
});

// Smooth fade-in effect for text
const fadeInElements = document.querySelectorAll('.fade-in');
fadeInElements.forEach(element => {
    element.style.opacity = 0;
    window.addEventListener('scroll', function () {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.style.transition = "opacity 1s ease-out";
            element.style.opacity = 1;
        }
    });
});

// Add a custom tooltip to images
const images = document.querySelectorAll('img');
images.forEach(image => {
    image.setAttribute("title", "Click to enlarge");
});
