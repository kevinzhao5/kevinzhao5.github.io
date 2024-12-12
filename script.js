import { storyNodes } from './story.js'

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
