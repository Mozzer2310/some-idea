var noCount = 0;
const phrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart :(",
  ];


function getBadText(Count) {
    return phrases[Math.min(Count, phrases.length - 1)];
}

function noButton() {
    noCount += 1;
    console.log(noCount);

    document.getElementById("messageText").innerText = getBadText(noCount);
    document.getElementById("message").hidden = false;

    if (noCount >= 6) {
        document.getElementById("banner").src = "images/angry.gif";
    }
}

function yesButton() {
    const myTimeout = setTimeout(happyMessage, 200);
}

function happyMessage() {
    document.getElementById("yes_button").hidden = true;
    document.getElementById("no_button").hidden = true;
    document.getElementById("banner").src = "images/cute.gif";
    document.getElementById("messageText").innerText = "Yiiipppeeeeeee";
    document.getElementById("message").hidden = false;
}