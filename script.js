const storyNodes = {
    start: {
        text: "You and your crew are in the land of the Cyclops, and happen upon a cave filled with sheep and crates of food.",
        choices: [
            { text: "Stay and feast, energizing yourselves and replenshing food stores", nextNode: "stay"},
            { text: "Leave, for it is dangerous", nextNode: "leave"},
        ]
    },
    leave: {
        text: "You lead your crew out, being on the watch for Cyclops, and manage to make it out all alive.",
        choices: []
    },
    stay: {
        text: "Turns out this is the cave of Polyphemus, and he comes back and eats two of your men, and imprisons the rest of you.",
        choices: [
            { text: "Appeal to his hospitality as a guest", nextNode: "hospitality" },
            { text: "Give him wine", nextNode: "offerWine"},
            { text: "Attack him outright", nextNode: "attack" }
        ]
    },
    hospitality: {
        text: "You appeal to the values of xenia. Polyphemus laughs and ignores your requests, instead deciding to eat you now.",
        choices: []
    },
    attack: {
        text: "You and your men charge the Cyclops. Polyphemus easily defeats you with his overwhelming strength. Your story ends here.",
        choices: []
    },
    offerWine: {
        text: "You offer Polyphemus some of your finest wine. He gets super drunk and falls asleep.",
        choices: [
            { text: "Tell him your name is 'Nobody'", nextNode: "nobody" },
            { text: "Convince him to let you go in exchange for more wine", nextNode: "bargain" }
        ]
    },
    ambush: {
        text: "You try to ambush Polyphemus, but he quickly catches on and retaliates. Many of your men are lost. Your story ends here.",
        choices: []
    },
    sharpenStake: {
        text: "You and your men sharpen a large wooden stake. How do you proceed?",
        choices: [
            { text: "Wait until Polyphemus falls asleep", nextNode: "waitSleep" },
            { text: "Rush to blind him immediately", nextNode: "rushBlind" }
        ]
    },
    sheepEscape: {
        text: "You plan to cling to the underside of the Cyclops' sheep when they are let out to graze. Do you:",
        choices: [
            { text: "Try to execute the plan immediately", nextNode: "earlyEscape" },
            { text: "Wait for the right moment", nextNode: "waitMoment" }
        ]
    },
    nobody: {
        text: "Polyphemus, drunk and satisfied, asks for your name. You tell him you are 'Nobody.' He promises to eat 'Nobody' last. What next?",
        choices: [
            { text: "Blind him while he sleeps", nextNode: "blind" },
            { text: "Continue giving him wine to keep him drunk", nextNode: "moreWine" }
        ]
    },
    blind: {
        text: "While Polyphemus sleeps, you and your men drive the stake into his single eye, blinding him. He wakes, roaring in pain, shouting, 'Nobody is hurting me!' What's your next move?",
        choices: [
            { text: "Hide and wait for him to open the cave", nextNode: "hideWait" },
            { text: "Cling to the underside of his sheep to escape", nextNode: "sheepExit" }
        ]
    },
    moreWine: {
        text: "You continue to ply Polyphemus with wine until he passes out completely. Now is your chance to act!",
        choices: [
            { text: "Blind him now", nextNode: "blind" },
            { text: "Try to sneak out while he sleeps", nextNode: "sneakOut" }
        ]
    },
    hideWait: {
        text: "You hide as Polyphemus gropes around the cave in anger. Eventually, he lets his sheep out, and you cling to their undersides to escape. Your cleverness has saved you!",
        choices: []
    },
    sheepExit: {
        text: "Clinging to the sheep, you and your men sneak past the blinded Cyclops. Freedom is yours!",
        choices: []
    },
    sneakOut: {
        text: "You try to sneak out, but Polyphemus blocks the entrance in his rage. Your plan fails. Your story ends here.",
        choices: []
    },
    waitSleep: {
        text: "You wait until Polyphemus falls asleep, then execute your plan. He awakens too late, blinded and roaring in pain. How do you escape?",
        choices: [
            { text: "Hide and wait for the right moment", nextNode: "hideWait" },
            { text: "Escape by clinging to the sheep", nextNode: "sheepExit" }
        ]
    },
    rushBlind: {
        text: "You rush to blind Polyphemus before he falls asleep, but he easily overpowers you. Your story ends here.",
        choices: []
    },
    earlyEscape: {
        text: "You try to execute your plan early, but Polyphemus notices and traps you in the cave. Your story ends here.",
        choices: []
    },
    waitMoment: {
        text: "You wait patiently for the perfect moment. When Polyphemus lets his sheep out, you cling to their undersides and escape unnoticed. Your cunning has saved you!",
        choices: []
    }
};


// DOM elements
const storyLogElement = document.getElementById("story-log");
const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

// History stack to enable rewinding
let historyStack = [];

// Function to display a story node
function displayNode(nodeKey, fromRewind=false) {
    const node = storyNodes[nodeKey];

    // Add the current story and choices to the log
    if (!fromRewind && storyElement.textContent.trim() !== "") {
        const logEntry = document.createElement("div");
        logEntry.classList.add("choice");

        // Add the story text to the log
        const logText = document.createElement("p");
        logText.textContent = storyElement.textContent;
        logEntry.appendChild(logText);

        // Add the previous choices to the log
        const logChoices = document.createElement("div");
        Array.from(choicesElement.children).forEach(button => {
            const logButton = document.createElement("button");
            logButton.textContent = button.textContent;
            logButton.disabled = true;
            logButton.classList.add("disabled");
            if (button.classList.contains("selected")) {
                logButton.classList.add("selected");
            }
            if (logButton.textContent !== "Rewind") {
                logChoices.appendChild(logButton);
            }
        });

        logEntry.appendChild(logChoices);
        storyLogElement.appendChild(logEntry);

        // Save the current state to history for rewinding
        historyStack.push(nodeKey);
    }

    // Update current story and choices
    storyElement.textContent = node.text;
    choicesElement.innerHTML = ""; // Clear previous choices

    node.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.onclick = () => {
            button.classList.add("selected");
            displayNode(choice.nextNode);
        };
        choicesElement.appendChild(button);
    });
    // Add a rewind button to the log
    const rewindButton = document.createElement("button");
    rewindButton.textContent = "Rewind";
    rewindButton.classList.add("rewind");
    rewindButton.onclick = () => rewind();
    choicesElement.appendChild(rewindButton);
}

// Function to rewind to the previous choice
function rewind() {
    if (historyStack.length > 1) {
        historyStack.pop(); // Remove the current state
        const previousNodeKey = historyStack[historyStack.length - 1]; // Get the previous state
        storyLogElement.lastChild.remove(); 
        displayNode(previousNodeKey, true);
    }
}

// Start the game
displayNode("start");
