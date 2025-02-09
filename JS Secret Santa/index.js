let rollButton = document.getElementById("roll");
let resultDisplay = document.getElementById("myh1");
let numberOfMembers = parseInt(window.prompt("Enter the Number of Members"));
let members = [];
let shuffledMembers = [];
let resetButton = document.getElementById("reset");
let hideButton = document.getElementById("hide");

for (let i = 0; i < numberOfMembers; i++) {
    let name = window.prompt(`Enter the name of member ${i + 1}`);
    members.push(name);
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function isValidAssignment(original, shuffled) {
    for (let i = 0; i < original.length; i++) {
        if (original[i] === shuffled[i]) {
            return false;
        }
    }
    return true;
}


do {
    shuffledMembers = shuffleArray([...members]);
} while (!isValidAssignment(members, shuffledMembers));

let currentIndex = 0;


rollButton.onclick = function () {
    if (currentIndex < members.length) {
        let currentMember = members[currentIndex];
        let assignedMember = shuffledMembers[currentIndex];
        resultDisplay.textContent = `${currentMember}, you have to gift to: ${assignedMember}`;
        currentIndex++;
    } else {
        resultDisplay.textContent = "All assignments are done!";
    }
};


resetButton.onclick = function () {
    currentIndex = 0;
    resultDisplay.textContent = "Press roll to start again!";
};


hideButton.onclick = function () {
    resultDisplay.textContent = "Press roll to see next!";
};
