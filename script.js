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

// Function to display a story node
function displayNode(nodeKey) {
    const node = storyNodes[nodeKey];

    // Add the current story and choices to the log
    const logEntry = document.createElement("div");
    logEntry.classList.add("choice");
    logEntry.innerHTML = `<p>${storyElement.textContent}</p>`;
    const logChoices = document.createElement("div");
    Array.from(choicesElement.children).forEach(button => {
        const greyedButton = button.cloneNode(true);
        greyedButton.classList.add("disabled");
        greyedButton.disabled = true;
        logChoices.appendChild(greyedButton);
    });
    logEntry.appendChild(logChoices);
    storyLogElement.appendChild(logEntry);

    // Update current story and choices
    storyElement.textContent = node.text;
    choicesElement.innerHTML = ""; // Clear previous choices

    node.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.onclick = () => displayNode(choice.nextNode);
        choicesElement.appendChild(button);
    });
}

// Start the game
displayNode("start");