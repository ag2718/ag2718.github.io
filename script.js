$(document).ready(function() {
    AOS.init({once: true});
});

$("p").click(function(e) {
    e.preventDefault();
});

var scrollEventHandler = function() {
    window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);

var ua = window.navigator.userAgent;

if (ua.indexOf('MSIE ') > 0 || ua.indexOf('Trident/') > 0) {
    let errorMsg = "<div class=\"center\"><h2 class=\"m-5\"> Internet explorer is not supported. Please use a different browser.</h2></div>";
    document.getElementsByTagName("body")[0].innerHTML = errorMsg;
}

projects = [
    {
        name: "Arduino WiFi Lamp",
        filepath: "media/ArduinoWiFiLamp.mp4",
        desc: "This is a WiFi-integrated lamp controlled through a phone app. The project contains an Arduino Mega, ESP2866 WiFi module, relay, extension cord, and protoboard for soldering.",
    },
    {
        name: "High Flyer",
        filepath: "media/HighFlyer.mov",
        desc: "This is High Flyer, an arcade-style game where the player needs to dodge obstacles while attempting to fly as high as possible. The project was written in Python."
    },
    {
        name: "COVID-19 Agent-Based Simulation",
        filepath: "media/COVID19-Simulation.mov",
        desc: "This is a Javascript simulation that aims to model the spread of the COVID-19 pandemic. Despite some simplifying assumptions, the results line up well with real world case count trends."
    },
    {
        name: "Discrete Fourier Transform",
        filepath: "media/Fourier.mp4",
        desc: "This is a Python implementation of the discrete Fourier transform, which breaks down any discrete function into the strengths of its component frequencies."
    },
    {
        name: "COVID-19 Visualization Dashboard",
        filepath: "media/COVID-Dashboard.mov",
        desc: "This is a dashboard created in Python which displays a variety of different visualizations for both US and global COVID-19 case data collected by Johns Hopkins University."
    }
]

for (let i = 0; i < projects.length; i++) {
    if (i % 2 === 0) {
        projects[i].fadeDir = "fade-left";
    } else {
        projects[i].fadeDir = "fade-right";
    }
}
