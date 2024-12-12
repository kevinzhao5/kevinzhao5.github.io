export const storyNodes = {
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
        text: "You and your men charge the Cyclops. Polyphemus easily defeats you with his overwhelming strength.",
        choices: []
    },
    offerWine: {
        text: "You offer Polyphemus some of your finest wine. He gets super drunk and falls asleep.",
        choices: [
            { text: "Tell him your name is 'Nobody'", nextNode: "nobody" },
        ]
    },
    nobody: {
        text: "Polyphemus, drunk and satisfied, asks for your name. You tell him you are 'Nobody.' He promises to eat 'Nobody' last. What next?",
        choices: [
            { text: "Blind him while he sleeps", nextNode: "blind" },
        ]
    },
    blind: {
        text: "While Polyphemus sleeps, you direct your men to drive a stake into his eye. He roars in pain, shouting, 'Nobody is hurting me!'",
        choices: [
            { text: "Hide and wait for him to open the cave", nextNode: "hideWait" },
            { text: "Cling to the underside of his sheep to escape", nextNode: "sheepExit" }
        ]
    },
    hideWait: {
        text: "You hide as Polyphemus gropes around the cave in anger. Eventually, he finds you and your men, and you are crushed under his power.",
        choices: []
    },
    sheepExit: {
        text: "Clinging to the sheep, you and your men sneak past the blinded Cyclops. Freedom is yours!",
        choices: []
    },
};