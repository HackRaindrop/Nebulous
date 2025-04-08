function startAdventure(event) {
    // Add mysterious ripple effect to the button
    const button = event ? event.target.closest('button') : document.querySelector('#dashboard button');
    const ripple = document.createElement('span');
    ripple.classList.add('ripple-effect');
    button.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
        // Show a cryptic message
        const message = "The waters of Loch Ness hold ancient secrets. Your expedition begins now...";
        showCrypticMessage(message);

        // Scroll to the evidence section after a delay
        setTimeout(() => {
            document.getElementById('interactive-elements').scrollIntoView({ behavior: 'smooth' });
        }, 2000);
    }, 600);
}

function showCrypticMessage(message) {
    // Create a modal for the cryptic message
    const modal = document.createElement('div');
    modal.classList.add('cryptic-modal');

    const content = document.createElement('div');
    content.classList.add('cryptic-content');

    const text = document.createElement('p');
    text.textContent = '';
    content.appendChild(text);

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    closeBtn.addEventListener('click', () => {
        modal.classList.add('fade-out');
        setTimeout(() => modal.remove(), 500);
    });
    content.appendChild(closeBtn);

    modal.appendChild(content);
    document.body.appendChild(modal);

    // Typewriter effect for the message
    let i = 0;
    const typeWriter = () => {
        if (i < message.length) {
            text.textContent += message.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };

    setTimeout(typeWriter, 300);

    // Auto-close after 5 seconds
    setTimeout(() => {
        if (document.body.contains(modal)) {
            modal.classList.add('fade-out');
            setTimeout(() => modal.remove(), 500);
        }
    }, 7000);
}

function submitClue(event) {
    const clue = document.getElementById('clue-input').value.toLowerCase();
    if (clue) {
        // Add ripple effect to the button
        const button = event ? event.target.closest('button') : document.querySelector('#interactive-elements button');
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();

            // Check if the clue is correct (for demo purposes)
            if (clue.includes('nessie') || clue.includes('loch') || clue.includes('monster')) {
                showCrypticMessage("The ancient code reveals a hidden truth... You're on the right path to uncovering Nessie's secrets!");

                // Scroll to the research section after a delay
                setTimeout(() => {
                    document.getElementById('lessons').scrollIntoView({ behavior: 'smooth' });
                }, 3000);
            } else {
                showCrypticMessage("The waters remain still... This code doesn't seem to unlock any secrets. Try another approach.");
            }

            // Clear the input field
            document.getElementById('clue-input').value = '';
        }, 600);
    } else {
        showCrypticMessage("The ancient markings require interpretation. Enter a code to proceed.");
    }
}

// Comprehensive knowledge base about Nessie and the puzzles
const knowledgeBase = {
    // Basic Loch Ness information
    lochness: {
        location: "Loch Ness is a large, deep, freshwater lake in the Scottish Highlands, extending approximately 37 kilometers southwest of Inverness.",
        depth: "Loch Ness is very deep, reaching depths of around 230 meters (755 feet) at its deepest point.",
        volume: "Loch Ness contains more fresh water than all the lakes in England and Wales combined.",
        formation: "The loch was formed at the end of the last Ice Age, about 10,000 years ago.",
        wildlife: "The loch is home to Atlantic salmon, charr, eels, minnows, and various species of bottom-dwelling fish."
    },

    // Nessie lore and history
    nessie: {
        firstSighting: "The first recorded sighting of the Loch Ness Monster was in 565 AD by Saint Columba, who reportedly saved a man from being attacked by the creature.",
        modernSightings: "Modern interest in the monster began in 1933 after a sighting by Aldie and John Mackay, who reported seeing 'an enormous animal rolling and plunging on the surface.'",
        surgeonPhoto: "The famous 'Surgeon's Photograph' from 1934, long considered evidence of Nessie, was revealed to be a hoax in 1994.",
        description: "Descriptions of Nessie often include a long neck, small head, one or more humps, and dark coloration. Some compare it to a plesiosaur, an extinct marine reptile.",
        theories: "Theories about what Nessie might be include a surviving prehistoric reptile, a giant sturgeon or eel, optical illusions caused by wave patterns, or floating debris."
    },

    // Puzzle-related information
    puzzles: {
        sonar: "The sonar equipment detects unusual movement patterns at depths of 100-150 meters. The readings show something large moving slowly through the water.",
        ancientRunes: "The ancient runes found near the shore translate to: 'The guardian of the deep reveals itself only to those who understand the patterns of the water.'",
        waterPatterns: "The water patterns change with the phases of the moon. During the full moon, ripples form concentric circles at the center of the loch.",
        hiddenCave: "Legends speak of a hidden cave beneath the northern shore, accessible only when the water level drops during certain seasons.",
        crypticSymbols: "The cryptic symbols found on the ancient stones form a map when arranged in the correct sequence. They point to the deepest part of the loch.",
        telescope: "When viewed through the special telescope at precisely midnight, certain stars align to form the shape of the creature in the night sky.",
        soundWaves: "The creature responds to specific sound frequencies. Ancient Scottish musical instruments were designed to produce these tones.",
        waterSamples: "Water samples from the deepest parts of the loch contain unusual organic compounds not found elsewhere in the world."
    },

    // Expedition guidance
    expedition: {
        equipment: "For your expedition, you'll need sonar equipment, underwater cameras, a telescope for night observations, and water sampling tools.",
        bestTime: "The best time to search for Nessie is during the early morning or late evening when the water is calm and there's less boat traffic.",
        locations: "The most frequent sightings occur near Urquhart Castle, Dores Beach, and Fort Augustus at the southern end of the loch.",
        safety: "Always maintain safety protocols. The water is very cold and deep, with strong currents in some areas.",
        techniques: "Use a combination of sonar scanning, surface observation, and underwater photography for the best chance of documenting the creature."
    },

    // Scottish folklore related to water creatures
    folklore: {
        kelpie: "In Scottish folklore, the kelpie is a shape-shifting water spirit that usually appears as a horse. It's said to lure unwary travelers to their doom.",
        eachUisge: "The Each-Uisge or water horse is a dangerous creature from Scottish legends that appears as a beautiful horse near water but drags riders to their deaths if they mount it.",
        selkies: "Selkies are mythological creatures that can transform from seal to human form by shedding their skin. They're associated with the northern isles of Scotland.",
        blueHag: "The Blue Hag of Winter (Cailleach) is sometimes associated with bodies of water and is said to control the weather and the seasons.",
        waterSpirits: "Various water spirits or 'fuath' inhabit Scotland's lochs and rivers, including the bean nighe (washer woman) who foretells death."
    }
};

// Expanded list of fun facts
const funFacts = [
    "Loch Ness is the second-largest Scottish lake by surface area!",
    "The first recorded sighting of Nessie was in 565 AD by Saint Columba.",
    "Loch Ness contains more water than all the lakes in England and Wales combined!",
    "Some people think Nessie might be a giant eel or a sturgeon.",
    "The Loch Ness Monster is sometimes called 'Nessie' for short.",
    "The water in Loch Ness is particularly dark due to high peat content in the surrounding soil.",
    "Loch Ness never freezes due to its great depth and constant water temperature of around 5°C.",
    "If Loch Ness were drained, it would take about 2 years to refill naturally from rainfall.",
    "Over 1,000 people claim to have seen the Loch Ness Monster.",
    "In 1972, a team called the Loch Ness Investigation Bureau spent 10 years watching the loch for signs of Nessie.",
    "Sonar readings have occasionally detected large, unexplained objects moving deep in the loch.",
    "The Loch Ness Monster tourism industry generates millions of pounds for the Scottish economy each year.",
    "In 2018, scientists conducted a DNA survey of Loch Ness and found no evidence of large reptiles, but did find an unusually high amount of eel DNA.",
    "Urquhart Castle, on the shores of Loch Ness, is one of the most popular Nessie-spotting locations.",
    "The deepest part of Loch Ness is near Urquhart Bay, reaching depths of over 230 meters."
];

// In-character responses for Nessie
const nessieResponses = {
    greeting: [
        "*bubbles rise to the surface* Greetings, seeker of mysteries. What knowledge do you seek about my waters?",
        "The mists part as I rise to meet you. What brings you to my ancient home?",
        "I sense your curiosity rippling across the surface of my loch. Ask, and I may answer."
    ],
    farewell: [
        "I return to the depths now. Call upon me when you seek more knowledge.",
        "The mists close around me once more. Until our next meeting, farewell.",
        "I sink beneath the dark waters. Remember what you have learned here."
    ],
    confused: [
        "Your words ripple strangely across my waters. Perhaps phrase your question differently?",
        "The meaning of your inquiry is as murky as the deepest parts of my loch. Can you clarify?",
        "Your question is lost in the mists that hover over my domain. Try another approach."
    ],
    amused: [
        "*a gentle ripple, like laughter, crosses the water* How curious you humans are.",
        "Your question brings a rare moment of amusement to my ancient existence.",
        "I find your inquiry... entertaining. Few humans think to ask such things."
    ],
    mysterious: [
        "Some secrets are best left in the depths where they belong.",
        "Not all mysteries are meant to be solved, seeker. Some must remain beneath the surface.",
        "The answer you seek lies deeper than any human has ever ventured."
    ],
    helpful: [
        "I shall share this knowledge, as you seem worthy of my trust.",
        "Listen carefully to what I tell you, for I do not reveal such things lightly.",
        "The waters whisper this truth to those patient enough to listen."
    ],
    warning: [
        "Tread carefully with this knowledge. Not all who seek the truth are prepared for what they find.",
        "Be wary as you proceed. The depths hold wonders, but dangers also lurk in the darkness.",
        "I warn you now - some paths, once taken, cannot be abandoned. Are you certain you wish to continue?"
    ]
};

// Chatbot Logic
let isChatbotMinimized = true; // Start with minimized state
let hasGreeted = false;

function toggleChatbot() {
    const chatbotPopup = document.getElementById('chatbot-popup');
    const chatbotButton = document.getElementById('chatbot-button');

    // Add ripple effect to the button
    const ripple = document.createElement('span');
    ripple.classList.add('water-ripple');
    chatbotButton.appendChild(ripple);

    setTimeout(() => ripple.remove(), 800);

    if (isChatbotMinimized) {
        // Restore the chat window with animation
        chatbotPopup.classList.remove('hidden');
        chatbotPopup.classList.add('fade-in');
        chatbotButton.classList.add('hidden');
        isChatbotMinimized = false;

        // Greet the user when the chatbot opens for the first time
        if (!hasGreeted) {
            setTimeout(() => {
                addChatbotMessage("Nessie: *bubbles rise to the surface* Greetings, seeker of mysteries. I am the guardian of Loch Ness secrets. What knowledge do you seek about my waters?");
                hasGreeted = true;
            }, 500);
        }
    } else {
        // Minimize the chat window with animation
        chatbotPopup.classList.add('fade-out');
        setTimeout(() => {
            chatbotPopup.classList.add('hidden');
            chatbotPopup.classList.remove('fade-out');
            chatbotButton.classList.remove('hidden');
            chatbotButton.classList.add('fade-in');
            setTimeout(() => chatbotButton.classList.remove('fade-in'), 500);
        }, 300);
        isChatbotMinimized = true;
    }
}

function addChatbotMessage(message) {
    const messagesDiv = document.getElementById('chatbot-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message-bubble');

    // Empty element for typewriter effect
    messageElement.textContent = '';
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    // Typewriter effect for Nessie's messages
    if (message.startsWith('Nessie:')) {
        messageElement.classList.add('nessie-message');
        const textWithoutPrefix = message.substring(7);
        let i = 0;

        const typeWriter = () => {
            if (i < textWithoutPrefix.length) {
                messageElement.textContent = 'Nessie: ' + textWithoutPrefix.substring(0, i + 1);
                i++;
                messagesDiv.scrollTop = messagesDiv.scrollHeight;
                setTimeout(typeWriter, 30);
            }
        };

        typeWriter();
    } else {
        // User messages appear instantly
        messageElement.textContent = message;
        messageElement.classList.add('user-message');
    }
}

async function sendChatbotMessage() {
    const userInput = document.getElementById('chatbot-user-input');
    const userMessage = userInput.value.trim();

    if (userMessage) {
        addChatbotMessage(`You: ${userMessage}`);
        userInput.value = '';

        try {
            const response = generateResponse(userMessage);

            // Add a slight delay for a more natural conversation
            setTimeout(() => {
                addChatbotMessage(`Nessie: ${response}`);
            }, 800);
        } catch (error) {
            setTimeout(() => {
                addChatbotMessage("Nessie: The waters are troubled... I cannot hear your question clearly. Try again when the mist clears.");
            }, 800);
        }
    }
}

// Function to get a random response from an array
function getRandomResponse(responseArray) {
    return responseArray[Math.floor(Math.random() * responseArray.length)];
}

// Function to check if the question contains any keywords
function containsAnyKeyword(question, keywords) {
    return keywords.some(keyword => question.includes(keyword));
}

// Function to generate a response based on the question
function generateResponse(question) {
    // Convert to lowercase for easier matching
    const lowerQuestion = question.toLowerCase();

    // Check for fun fact request
    if (lowerQuestion.includes("fun fact") || lowerQuestion.includes("tell me something")) {
        return getRandomResponse(funFacts);
    }

    // Check for greetings
    if (containsAnyKeyword(lowerQuestion, ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'])) {
        return getRandomResponse(nessieResponses.greeting);
    }

    // Check for farewells
    if (containsAnyKeyword(lowerQuestion, ['goodbye', 'bye', 'farewell', 'see you', 'later'])) {
        return getRandomResponse(nessieResponses.farewell);
    }

    // Check for questions about Nessie's existence
    if (containsAnyKeyword(lowerQuestion, ['are you real', 'do you exist', 'is nessie real', 'is the loch ness monster real'])) {
        return getRandomResponse(nessieResponses.mysterious) + " The question of my existence has puzzled humans for centuries. What do you believe?";
    }

    // Check for questions about Loch Ness
    if (containsAnyKeyword(lowerQuestion, ['how deep', 'depth', 'how big', 'size of loch'])) {
        return getRandomResponse(nessieResponses.helpful) + " " + knowledgeBase.lochness.depth;
    }

    if (containsAnyKeyword(lowerQuestion, ['where is loch ness', 'location', 'scotland'])) {
        return getRandomResponse(nessieResponses.helpful) + " " + knowledgeBase.lochness.location;
    }

    // Check for questions about sightings
    if (containsAnyKeyword(lowerQuestion, ['sighting', 'seen', 'spotted', 'photo', 'picture', 'evidence'])) {
        if (lowerQuestion.includes('first')) {
            return getRandomResponse(nessieResponses.helpful) + " " + knowledgeBase.nessie.firstSighting;
        } else if (lowerQuestion.includes('photo') || lowerQuestion.includes('picture')) {
            return getRandomResponse(nessieResponses.helpful) + " " + knowledgeBase.nessie.surgeonPhoto;
        } else {
            return getRandomResponse(nessieResponses.helpful) + " " + knowledgeBase.nessie.modernSightings;
        }
    }

    // Check for questions about what Nessie is
    if (containsAnyKeyword(lowerQuestion, ['what are you', 'species', 'dinosaur', 'plesiosaur', 'creature'])) {
        return getRandomResponse(nessieResponses.mysterious) + " " + knowledgeBase.nessie.theories;
    }

    // Check for questions about puzzles
    if (containsAnyKeyword(lowerQuestion, ['sonar', 'equipment', 'detect'])) {
        return getRandomResponse(nessieResponses.helpful) + " " + knowledgeBase.puzzles.sonar;
    }

    if (containsAnyKeyword(lowerQuestion, ['rune', 'symbol', 'marking', 'ancient writing'])) {
        return getRandomResponse(nessieResponses.helpful) + " " + knowledgeBase.puzzles.ancientRunes;
    }

    if (containsAnyKeyword(lowerQuestion, ['water pattern', 'ripple', 'wave'])) {
        return getRandomResponse(nessieResponses.helpful) + " " + knowledgeBase.puzzles.waterPatterns;
    }

    if (containsAnyKeyword(lowerQuestion, ['cave', 'hidden', 'secret place'])) {
        return getRandomResponse(nessieResponses.mysterious) + " " + knowledgeBase.puzzles.hiddenCave;
    }

    if (containsAnyKeyword(lowerQuestion, ['telescope', 'stars', 'night sky'])) {
        return getRandomResponse(nessieResponses.helpful) + " " + knowledgeBase.puzzles.telescope;
    }

    if (containsAnyKeyword(lowerQuestion, ['sound', 'music', 'frequency', 'tone'])) {
        return getRandomResponse(nessieResponses.helpful) + " " + knowledgeBase.puzzles.soundWaves;
    }

    // Check for questions about the expedition
    if (containsAnyKeyword(lowerQuestion, ['how to find', 'search', 'look for', 'expedition', 'hunt'])) {
        return getRandomResponse(nessieResponses.warning) + " " + knowledgeBase.expedition.techniques;
    }

    if (containsAnyKeyword(lowerQuestion, ['when', 'best time', 'time of day'])) {
        return getRandomResponse(nessieResponses.helpful) + " " + knowledgeBase.expedition.bestTime;
    }

    if (containsAnyKeyword(lowerQuestion, ['where', 'location', 'spot', 'place'])) {
        return getRandomResponse(nessieResponses.helpful) + " " + knowledgeBase.expedition.locations;
    }

    // Check for questions about Scottish folklore
    if (containsAnyKeyword(lowerQuestion, ['folklore', 'legend', 'myth', 'story', 'kelpie', 'water horse'])) {
        if (lowerQuestion.includes('kelpie')) {
            return getRandomResponse(nessieResponses.mysterious) + " " + knowledgeBase.folklore.kelpie;
        } else if (lowerQuestion.includes('water horse') || lowerQuestion.includes('each')) {
            return getRandomResponse(nessieResponses.mysterious) + " " + knowledgeBase.folklore.eachUisge;
        } else if (lowerQuestion.includes('selkie')) {
            return getRandomResponse(nessieResponses.mysterious) + " " + knowledgeBase.folklore.selkies;
        } else {
            return getRandomResponse(nessieResponses.mysterious) + " Many creatures dwell in Scottish waters according to legend. Some are my kin, others... are best avoided.";
        }
    }

    // Check for questions about help or hints
    if (containsAnyKeyword(lowerQuestion, ['help', 'hint', 'clue', 'stuck', 'what should i do'])) {
        return getRandomResponse(nessieResponses.helpful) + " To progress in your quest, pay attention to the patterns. The ancient runes, the water movements, and the alignment of stars all hold pieces of the puzzle.";
    }

    // If no specific match is found, provide a mysterious response
    return getRandomResponse(nessieResponses.confused) + " The waters of Loch Ness hold many secrets. Perhaps try asking about the ancient runes, the water patterns, or the hidden cave?";
}

// Enable Enter key to send messages
document.addEventListener('DOMContentLoaded', () => {
    const chatbotInput = document.getElementById('chatbot-user-input');
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                sendChatbotMessage();
            }
        });
    }

    // Close button functionality
    const closeButton = document.querySelector('#chatbot-header button');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            toggleChatbot();
        });
    }

    // Initial setup
    const chatbotButton = document.getElementById('chatbot-button');
    const chatbotPopup = document.getElementById('chatbot-popup');

    if (chatbotButton) {
        chatbotButton.classList.remove('hidden');
    }

    if (chatbotPopup) {
        // Ensure the popup starts hidden
        chatbotPopup.classList.add('hidden');
    }

    // Add animation classes
    document.body.classList.add('loaded');
});

// Add water ripple effect on click
document.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON' && !event.target.closest('#chatbot-popup')) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        event.target.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});
