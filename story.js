export const storyNodes = {

    // 1. cicones
    // 2. lotus
    // 3. polyphemus
    // 4. aeolus
    // 5. laestrygonians
    // 6. circe
    // 7. hades
    // 8. sirens
    // 9. scylla
    // 10. cattle

    start: {
        text: "You have just emerged as victors in the Trojan War, and are now sailing home. Start your journey now.",
        choices: [
            { text: "Onwards to the Cicones", nextNode: "start_1" }
        ]
    },


    // 1. cicones
    start_1: {
        text: "You and your crew land on the shores of the Cicones' city, Ismarus. The city seems ripe for plunder, and your men are eager to raid.",
        choices: [
            { text: "Raid the city and take what you can", nextNode: "raid_1" },
            { text: "Approach peacefully and ask for provisions", nextNode: "peaceful_1" }
        ]
    },
    raid_1: {
        text: "You and your men raid the city, taking treasure, food, and supplies. However, your men refuse to leave quickly, instead celebrating and feasting on the beach.",
        choices: [
            { text: "Urge your men to leave immediately", nextNode: "leaveQuickly_1" },
            { text: "Allow them to continue celebrating", nextNode: "celebrate_1" }
        ]
    },
    peaceful_1: {
        text: "You approach the Cicones peacefully and request provisions. Initially, they seem willing, but their warriors soon ambush you, driving you and your men back to the ships with heavy losses.",
        choices: [
            { text: "Retreat and set sail", nextNode: "start_2" }
        ]
    },
    leaveQuickly_1: {
        text: "You manage to convince your men to leave before the Cicones can regroup. As you sail away, you see their warriors arriving to retaliate. You escape just in time.",
        choices: [
            { text: "Continue on your journey", nextNode: "start_2" }
        ]
    },
    celebrate_1: {
        text: "The Cicones regroup and launch a counterattack while your men are distracted by their celebrations. Many of your crew are killed or injured, and you barely escape with your life.",
        choices: [
            { text: "Flee to your ships and set sail", nextNode: "start_2" }
        ]
    },


    // 2. lotus
    start_2: {
        text: "After escaping the Cicones, you find yourselves on an unfamiliar shore. The locals, known as the Lotus-Eaters, approach you and your crew with strange fruit in hand, offering it to you.",
        choices: [
            { text: "Accept the fruit and eat it", nextNode: "eatFruit_2" },
            { text: "Refuse the fruit and explore cautiously", nextNode: "refuseFruit_2" }
        ]
    },
    eatFruit_2: {
        text: "The fruit is sweet and intoxicating. You feel all thoughts of home slipping away, and your men begin to forget their journey entirely, wanting only to stay and eat more fruit.",
        choices: [
            { text: "Struggle to resist and rally your men", nextNode: "resistFruit_2" },
            { text: "Give in and remain with the Lotus-Eaters", nextNode: "stayLotus_2" }
        ]
    },
    refuseFruit_2: {
        text: "You refuse the fruit and keep your wits about you. Exploring cautiously, you realize the danger it poses and manage to keep your crew from succumbing to its effects.",
        choices: [
            { text: "Herd your men back to the ships", nextNode: "start_3" }
        ]
    },
    resistFruit_2: {
        text: "With great effort, you shake off the fruit's effects and drag your entranced men back to the ships. Though some resist, you manage to set sail before anyone is lost to the fruit's lure forever.",
        choices: [
            { text: "Continue on your journey", nextNode: "start_3" }
        ]
    },
    stayLotus_2: {
        text: "You and your men give in to the allure of the Lotus-Eaters. Thoughts of home are lost, and your journey ends here as you succumb to endless indulgence.",
        choices: []
    },


    // 3. polyphemus
    start_3: {
        text: "You and your crew are in the land of the Cyclops, and happen upon a cave filled with sheep and crates of food.",
        choices: [
            { text: "Stay and feast, energizing yourselves and replenshing food stores", nextNode: "stay_3"},
            { text: "Leave, for it is dangerous", nextNode: "leave_3"},
        ]
    },
    leave_3: {
        text: "You lead your crew out, being on the watch for Cyclops, and manage to make it out all alive.",
        choices: [
            { text: "Continue on your journey", nextNode: "start_4" }
        ]
    },
    stay_3: {
        text: "Turns out this is the cave of Polyphemus, and he comes back and eats two of your men, and imprisons the rest of you.",
        choices: [
            { text: "Appeal to his hospitality as a guest", nextNode: "hospitality_3" },
            { text: "Give him wine", nextNode: "offerWine_3"},
            { text: "Attack him outright", nextNode: "attack_3" }
        ]
    },
    hospitality_3: {
        text: "You appeal to the values of xenia. Polyphemus laughs and ignores your requests, instead deciding to eat you now.",
        choices: []
    },
    attack_3: {
        text: "You and your men charge the Cyclops. Polyphemus easily defeats you with his overwhelming strength.",
        choices: []
    },
    offerWine_3: {
        text: "You offer Polyphemus some of your finest wine. He gets super drunk and falls asleep.",
        choices: [
            { text: "Tell him your name is 'Nobody'", nextNode: "nobody_3" },
        ]
    },
    nobody_3: {
        text: "Polyphemus, drunk and satisfied, asks for your name. You tell him you are 'Nobody.' He promises to eat 'Nobody' last. What next?",
        choices: [
            { text: "Blind him while he sleeps", nextNode: "blind_3" },
        ]
    },
    blind_3: {
        text: "While Polyphemus sleeps, you direct your men to drive a stake into his eye. He roars in pain, shouting, 'Nobody is hurting me!'",
        choices: [
            { text: "Hide and wait for him to open the cave", nextNode: "hideWait_3" },
            { text: "Cling to the underside of his sheep to escape", nextNode: "sheepExit_3" }
        ]
    },
    hideWait_3: {
        text: "You hide as Polyphemus gropes around the cave in anger. Eventually, he finds you and your men, and you are crushed under his power.",
        choices: []
    },
    sheepExit_3: {
        text: "Clinging to the sheep, you and your men sneak past the blinded Cyclops. Freedom is yours!",
        choices: [
            { text: "Continue on your journey", nextNode: "start_4" }
        ]
    },


    // 4. aeolus
    start_4: {
        text: "You sail on, the wind at your back, and soon come upon the island of Aeolus, the god of winds. He welcomes you with open arms and offers you a gift.",
        choices: [
            { text: "Accept the gift of winds and continue your journey", nextNode: "acceptWinds_4" },
            { text: "Refuse the gift, wary of such powers", nextNode: "refuseWinds_4" }
        ]
    },
    acceptWinds_4: {
        text: "Aeolus hands you a bag containing the winds. With it, you can sail straight home. However, your men, curious, open the bag, releasing all the winds at once.",
        choices: [
            { text: "Try to control the winds and steer the ship", nextNode: "controlWinds_4" },
            { text: "Pray to Aeolus for help", nextNode: "prayAeolus_4" }
        ]
    },
    controlWinds_4: {
        text: "The winds rage uncontrollably, pushing your ship far off course. You struggle, but the storm is too powerful to handle.",
        choices: [
            { text: "Continue struggling against the storm", nextNode: "stormStruggle_4" },
            { text: "Surrender to the winds and hope for the best", nextNode: "stormSurrender_4" }
        ]
    },
    stormStruggle_4: {
        text: "Despite your best efforts, the winds carry you further from home, and your crew is exhausted. The storm blows you severely off course, but your efforts allow you to renavigate and continue on.",
        choices: [
            { text: "Continue on your journey", nextNode: "start_5" }
        ]
    },
    stormSurrender_4: {
        text: "You surrender to the fury of the winds. After what feels like an eternity, they calm, leaving you stranded far from home, with little hope of return.",
        choices: []
    },
    prayAeolus_4: {
        text: "You pray to Aeolus for mercy, but he refuses to help you, claiming that you squandered the gift he gave you. You are now at the mercy of the storm.",
        choices: []
    },
    refuseWinds_4: {
        text: "You refuse the gift, feeling uneasy about meddling with such powers. Aeolus is angered and curses your journey, but grants you safe passage nonetheless.",
        choices: [
            { text: "Continue on your journey", nextNode: "start_5" }
        ]
    },


    // 5. laestrygonians
    start_5: {
        text: "You approach a new land, discovering that it is inhabited by the Laestrygonians, a race of giant cannibals.",
        choices: [
            { text: "Attempt to sail past their island without being noticed", nextNode: "sailPast_5" },
            { text: "Anchor and attempt to explore the land", nextNode: "exploreLand_5" }
        ]
    },
    sailPast_5: {
        text: "You attempt to sail past the island quietly, but the Laestrygonians spot you and hurl massive boulders at your ships, sinking them one by one.",
        choices: [
            { text: "Flee to the open sea, leaving your men behind", nextNode: "fleeSea_5" },
            { text: "Try to fight back against the giants", nextNode: "fightGiants_5" }
        ]
    },
    fleeSea_5: {
        text: "You flee into the open sea, leaving the majority of your men to perish. The Laestrygonians' boulders and strength are too much for you to overcome.",
        choices: []
    },
    fightGiants_5: {
        text: "You attempt to fight the giants, but their size and strength prove insurmountable. One by one, your men are crushed or eaten. You barely manage to escape with your life.",
        choices: []
    },
    exploreLand_5: {
        text: "You decide to explore the land, but as you and your men venture inland, you are ambushed by the Laestrygonians. They capture several of your men and begin to devour them.",
        choices: [
            { text: "Attempt to escape and return to your ship", nextNode: "escapeShip_5" },
            { text: "Confront the giants and try to fight them off", nextNode: "confrontGiants_5" }
        ]
    },
    escapeShip_5: {
        text: "You make a hasty retreat, racing back to your ship. Only a few of your men are left, but you manage to escape the island, though the loss weighs heavily on your heart.",
        choices: [
            { text: "Continue on your journey", nextNode: "start_6" }
        ]
    },
    confrontGiants_5: {
        text: "You charge at the giants, but their overwhelming power and numbers quickly subdue you. Your men are captured and devoured, and you are barely able to escape with your life.",
        choices: []
    },


    // 6. circe
    start_6: {
        text: "After escaping the Laestrygonians, you and your crew sail to the island of Aeaea. The sorceress Circe lives here, wielding powerful magic.",
        choices: [
            { text: "Approach Circe’s palace cautiously", nextNode: "cautiousApproach_6" },
            { text: "Send a few men to explore her palace", nextNode: "sendMen_6" }
        ]
    },
    cautiousApproach_6: {
        text: "You approach Circe’s palace with caution, but she invites you in with a welcoming smile. You enter, hoping to gain her favor, but she offers you wine.",
        choices: [
            { text: "Drink the wine and trust her", nextNode: "drinkPotion_6" },
            { text: "Refuse the wine and ask for answers", nextNode: "refusePotion_6" }
        ]
    },
    refusePotion_6: {
        text: "Circe laughs and forces you and your men to drink it, turning your men into swine."
    },
    drinkPotion_6: {
        text: "You drink the wine, and suddenly you feel yourself changing, but it seems you are protected. However, your men are transformed into animals.",
        choices: [
            { text: "Try to fight the enchantment", nextNode: "fightEnchantment_6" },
            { text: "Strategically approach Circe and appeal for mercy", nextNode: "appealMercy_6" }
        ]
    },
    fightEnchantment_6: {
        text: "You struggle against the enchantment, but Circe is too powerful. Circe laughs as she watches you and your men helplessly.",
        choices: []
    },
    appealMercy_6: {
        text: "You strategically persaude Circe to reverse the curse. She changes your men back, but will only let you leave if you agree to stay with her for a while. You have no choice but to agree.",
        choices: [
            { text: "Stay with Circe and learn her magic", nextNode: "stayWithCirce_6" },
            { text: "Refuse to stay, despite her offer", nextNode: "refuseStay_6" }
        ]
    },
    stayWithCirce_6: {
        text: "You stay with Circe, learning her magic and gaining wisdom. Over time, you regain your crew and prepare to continue your journey home, stronger than before.",
        choices: [
            { text: "Continue on your journey", nextNode: "start_7" }
        ]
    },
    refuseStay_6: {
        text: "You refuse to stay with Circe, and angered, she forcibly turns you into swine as well and leaves you and your men to live your lives as swine.",
        choices: []
    },


    // 7. hades
    start_7: {
        text: "Circe tells you that in the process of going home, you must visit the Underworld and speak with Tiresias. You prepare yourself to travel to Hades' realm.",
        choices: [
            { text: "Enter the Underworld through the gates of death", nextNode: "enterUnderworld_7" },
        ]
    },
    enterUnderworld_7: {
        text: "You descend into the dark and foreboding Underworld. The souls of the dead surround you, whispering of lost loves and unfinished lives.",
        choices: [
            { text: "Seek Tiresias among the dead", nextNode: "seekTiresias_7" },
            { text: "Speak to the souls of the dead", nextNode: "speakSouls_7" }
        ]
    },
    seekTiresias_7: {
        text: "You find the prophet Tiresias among the shades. He warns you of the dangers ahead and tells you how to reach home, but also that many trials await you still.",
        choices: [
            { text: "Listen carefully to his advice", nextNode: "heedAdvice_7" },
            { text: "Disregard his warnings and push forward", nextNode: "disregardWarnings_7" }
        ]
    },
    heedAdvice_7: {
        text: "You heed Tiresias’s advice, learning how to navigate the obstacles ahead. His warnings guide you through the treacherous seas, and you are prepared for what comes next.",
        choices: [
            { text: "Continue on your journey", nextNode: "start_8" }
        ]
    },
    disregardWarnings_7: {
        text: "You disregard Tiresias’s advice and rush forward. The dangers ahead prove to be even worse than he described, and you soon find yourself in peril once again.",
        choices: []
    },
    speakSouls_7: {
        text: "You attempt to speak with the souls of the dead, but their voices only bring sorrow and regret. Among them, you find the shade of your mother, who tells you of your family’s plight.",
        choices: [
            { text: "Ask her for advice on returning home", nextNode: "askMother_7" },
            { text: "Say goodbye and move on", nextNode: "moveOn_7" }
        ]
    },
    askMother_7: {
        text: "Your mother advises you to be patient and warns you of the final trials before you reach home. She tells you to not let greed or anger guide your decisions.",
        choices: [
            { text: "Heed her advice and continue", nextNode: "start_8" }
        ]
    },
    moveOn_7: {
        text: "You say goodbye to your mother and continue your journey. The Underworld is a place of sorrow, and it feels as though a part of your soul remains behind.",
        choices: [
            { text: "Continue on your journey", nextNode: "start_8" }
        ]
    },


    // 8. sirens
    start_8: {
        text: "As you sail onward, you approach the island of the Sirens, and you can just about hear their songs. The creatures lure sailors in with their irresistible voices.",
        choices: [
            { text: "Have everyone block their ears with wax", nextNode: "blockEars_8" },
            { text: "Ignore the warnings and listen to their song", nextNode: "ignore_8" }
        ]
    },
    blockEars_8: {
        text: "You order your men to block their ears with wax, and you sail past the Sirens’ island without incident. Their song still reaches your ears, but you resist its pull.",
        choices: [
            { text: "Continue on your journey", nextNode: "start_9" }
        ]
    },
    ignore_8: {
        text: "You allow yourself to hear the Sirens’ song. Their voices tempt you, promising love, and it is too much for you and your sailors.",
        choices: [
            { text: "Jump overboard", nextNode: "overboard_8" },
            { text: "Jump overboard, but even faster", nextNode: "overboard_8" }
        ]
    },
    overboard_8: {
        text: "The Sirens' song overwhelms you, and you are helpless against their temptation. This is it for you and your men",
        choices: []
    },


    // 9. scylla
    start_9: {
        text: "You sail onward, reaching the straits of Scylla and Charybdis. Scylla's monstrous heads would surely attack your men, while Charybdis the whirlpool could destroy the ship.",
        choices: [
            { text: "Sail close to Scylla and risk the loss of men", nextNode: "sailClose_9" },
            { text: "Sail closer to Charybdis and take your chances", nextNode: "sailCharybdis_9" }
        ]
    },
    sailClose_9: {
        text: "You sail close to Scylla, hoping to avoid the worst of her fury. As her heads strike, they snatch six of your bravest men, but you manage to continue onward, heart heavy with loss.",
        choices: [
            { text: "Mourn your fallen men and continue", nextNode: "start_10" }
        ]
    },
    sailCharybdis_9: {
        text: "You attempt to sail closer to Charybdis, but the whirlpool threatens to pull your ship under. Unfortunately, nature wins and you and your men are wiped out.",
        choices: []
    },


    // 10. helios cattle
    start_10: {
        text: "After escaping Scylla and Charybdis, you sail to Thrinacia, home to the sacred cattle of Helios.",
        choices: [
            { text: "Warn your men strictly to leave the cattle alone", nextNode: "warnMen_10" },
            { text: "Allow your men to decide for themselves", nextNode: "allowMen_10" }
        ]
    },
    warnMen_10: {
        text: "You warn your men to resist temptation, but hunger gnaws at them. Despite your pleas, they ultimately decide to slaughter the sacred cattle, hoping that their sacrifice will provide much-needed food.",
        choices: [
            { text: "Pray to the gods for mercy", nextNode: "prayMercy_10" },
            { text: "Demand they face the consequences of their actions", nextNode: "faceConsequences_10" }
        ]
    },
    prayMercy_10: {
        text: "You pray to the gods, hoping they will spare you and your crew. But the wrath of Helios is swift and unforgiving. A storm rises, and your ship is destroyed by Zeus’s thunderbolts, leaving only you alive.",
        choices: [
            { text: "Your journey ends here.", nextNode: "end" }
        ]
    },
    faceConsequences_10: {
        text: "You demand your men face the consequences of their actions, but it is too late. The gods punish you severely. As you sail away, a great storm conjured by Zeus sinks your ship, leaving you stranded and broken.",
        choices: [
            { text: "Your journey ends here.", nextNode: "end" }
        ]
    },
    allowMen_10: {
        text: "You allow your men to decide for themselves, and their greed leads them to slaughter the sacred cattle. Soon after, a furious storm, sent by Helios and Zeus, devastates your ship.",
        choices: [
            { text: "Pray for mercy as the storm rages", nextNode: "prayMercy_10" }
        ]
    },

    end: {
        text: "Having lost your ship and your men, you are stranded and desperate. You somehow end up on Calypso's island, and will spend the next seven years here.",
        choices: []
    }

};