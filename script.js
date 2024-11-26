// Define the story structure
const storyNodes = {
    start: {
        text: "You are standing at the edge of a dark forest. Do you enter or stay where you are?",
        choices: [
            { text: "Enter the forest", nextNode: "forest" },
            { text: "Stay where you are", nextNode: "stay" }
        ]
    },
    forest: {
        text: "You venture into the forest and hear rustling behind you. Do you investigate or run?",
        choices: [
            { text: "Investigate the sound", nextNode: "investigate" },
            { text: "Run deeper into the forest", nextNode: "run" }
        ]
    },
    stay: {
        text: "You stay at the edge of the forest and nothing happens. The adventure ends here.",
        choices: []
    },
    investigate: {
        text: "You find a friendly squirrel who shows you a hidden treasure. The adventure ends here.",
        choices: []
    },
    run: {
        text: "You run deeper into the forest and get lost. The adventure ends here.",
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
function displayNode(nodeKey) {
    const node = storyNodes[nodeKey];

    // Add the current story and choices to the log
    if (storyElement.textContent.trim() !== "") {
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
            logChoices.appendChild(logButton);
        });

        // Add a rewind button to the log
        const rewindButton = document.createElement("button");
        rewindButton.textContent = "Rewind";
        rewindButton.classList.add("rewind");
        rewindButton.onclick = () => rewind();
        logChoices.appendChild(rewindButton);

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
}

// Function to rewind to the previous choice
function rewind() {
    if (historyStack.length > 1) {
        historyStack.pop(); // Remove the current state
        const previousNodeKey = historyStack.pop(); // Get the previous state
        storyLogElement.lastChild.remove(); // Remove the last log entry
        displayNode(previousNodeKey);
    }
}

// Start the game
displayNode("start");
