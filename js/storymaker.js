// Assignment 1 | COMP1073 Client-Side JavaScript
// Emily Rose - 200553504

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
 
const NOUN_ONE = document.querySelector("#noun1");
const VERB = document.querySelector("#verb");
const ADJECTIVE = document.querySelector("#adjective");
const NOUN_TWO = document.querySelector("#noun2");
const SETTING = document.querySelector("#setting");

// Constant for the student number selector

const STUDENT_NUMBER = document.querySelector("#studentId");

// Constants for p tag to display query selectors

const CHOSEN_NOUN_ONE = document.querySelector("#chosenNoun1");
const CHOSEN_VERB = document.querySelector("#chosenVerb");
const CHOSEN_ADJECTIVE = document.querySelector("#chosenAdjective");
const CHOSEN_NOUN_TWO = document.querySelector("#chosenNoun2");
const CHOSEN_SETTING = document.querySelector("#chosenSetting");

// Constants for final buttons and p tags

const PLAYBACK_FINAL = document.querySelector("#playback");
const RANDOM_FINAL = document.querySelector("#random");
const STORY_FINAL = document.querySelector("#story");

// Variables for pre-defined arrays

var NOUN_SET_ONE = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
var VERB_SET = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var ADJECTIVE_SET = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var NOUN_SET_TWO = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var SETTING_SET = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements

// All indexes will start from the beginning of each array
var noun1_index = 0;
var verb_index = 0;
var adjective_index = 0;
var noun2_index = 0;
var setting_index = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    var display_noun1 = NOUN_SET_ONE[noun1_index];  // Display the item in array NOUN_SET_ONE based on the index number noun1_index
    CHOSEN_NOUN_ONE.textContent = display_noun1;

    // if-else to change count setting

    if (noun1_index > NOUN_SET_ONE.length - 1)
        noun1_index = 0;    // If the index is out of bounds, reset it to 0
    else
        noun1_index++;      // Else, show the next incremented item in the array
}

// The following functions use the same logic as noun1_on_click()

function verb_on_click() {
    var display_verb = VERB_SET[verb_index];   
    CHOSEN_VERB.textContent = display_verb;

    if (verb_index > VERB_SET.length - 1)
        verb_index = 0;
    else
        verb_index++;
}

function adjective_on_click() {
    var display_adjective = ADJECTIVE_SET[adjective_index];
    CHOSEN_ADJECTIVE.textContent = display_adjective;
    
    if (adjective_index > ADJECTIVE_SET.length - 1)
        adjective_index = 0;
    else
        adjective_index++;
}

function noun2_on_click() {
    var display_noun2 = NOUN_SET_TWO[noun2_index];
    CHOSEN_NOUN_TWO.textContent = display_noun2;

    if (noun2_index > NOUN_SET_TWO.length - 1)
        noun2_index = 0;
    else
        noun2_index++;
}

function setting_on_click() {
    var display_setting = SETTING_SET[setting_index];
    CHOSEN_SETTING.textContent = display_setting;

    if (setting_index > SETTING_SET.length - 1)
        setting_index = 0;
    else
        setting_index++;
}

// concatenate the user story and display
function playback_on_click() {

    // Concatenate based on what the user has manually selected from each array
    var display_playback = 
        CHOSEN_NOUN_ONE.textContent + " " + 
        CHOSEN_VERB.textContent + " " + 
        CHOSEN_ADJECTIVE.textContent + " " + 
        CHOSEN_NOUN_TWO.textContent + " " + 
        CHOSEN_SETTING.textContent + ".";

    STORY_FINAL.textContent = display_playback;
    
    // Display my student number when displaying a story
    STUDENT_NUMBER.textContent = "200553504";
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {

    // Concatenate based on random index generation from each array
    var display_random = 
        NOUN_SET_ONE[Math.floor(Math.random() * NOUN_SET_ONE.length)] + " " +
        VERB_SET[Math.floor(Math.random() * VERB_SET.length)] + " " +
        ADJECTIVE_SET[Math.floor(Math.random() * ADJECTIVE_SET.length)] + " " +
        NOUN_SET_TWO[Math.floor(Math.random() * NOUN_SET_TWO.length)] + " " +
        SETTING_SET[Math.floor(Math.random() * SETTING_SET.length)] + ".";
        
    STORY_FINAL.textContent = display_random;

    // Display my student number when displaying a story
    STUDENT_NUMBER.textContent = "200553504";
}

/* Event Listeners
-------------------------------------------------- */

NOUN_ONE.addEventListener("click", noun1_on_click);
VERB.addEventListener("click", verb_on_click);
ADJECTIVE.addEventListener("click", adjective_on_click);
NOUN_TWO.addEventListener("click", noun2_on_click);
SETTING.addEventListener("click", setting_on_click);
RANDOM_FINAL.addEventListener("click", random_on_click);
PLAYBACK_FINAL.addEventListener("click", playback_on_click);