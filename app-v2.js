const STRINGS = [
  { number: 6, name: "low E", note: "E" },
  { number: 5, name: "A", note: "A" },
  { number: 4, name: "D", note: "D" },
  { number: 3, name: "G", note: "G" },
  { number: 2, name: "B", note: "B" },
  { number: 1, name: "high E", note: "E" }
];

const FINGER_NAMES = {
  1: "Index finger",
  2: "Middle finger",
  3: "Ring finger",
  4: "Pinky"
};

const FINGER_COLORS = {
  1: "var(--f1)",
  2: "var(--f2)",
  3: "var(--f3)",
  4: "var(--f4)"
};

const CHORDS = [
  {
    id: "c-major",
    symbol: "C",
    name: "C Major",
    category: "major",
    difficulty: "Beginner",
    summary: "The classic open C shape. Great for learning clean finger arches.",
    frets: ["x", 3, 2, 0, 1, 0],
    fingers: ["x", 3, 2, 0, 1, 0],
    notes: ["x", "C", "E", "G", "C", "E"],
    root: "C",
    theory: "C major is built from C, E, and G. This open shape gives you those notes across five strings, with C as the lowest played note.",
    tips: [
      "Curl your index finger so the open high E string can ring.",
      "Keep the ring finger close to the 3rd fret, not in the middle of the fret space.",
      "Strum from the A string downward."
    ],
    mistakes: [
      "Accidentally playing the low E string.",
      "Flattening the index finger and muting the high E string.",
      "Pressing too far from the fret, causing buzzing."
    ],
    transitions: ["G", "Am", "Fmaj7"]
  },
  {
    id: "g-major",
    symbol: "G",
    name: "G Major",
    category: "major",
    difficulty: "Beginner",
    summary: "A full, bright open chord used everywhere.",
    frets: [3, 2, 0, 0, 0, 3],
    fingers: [2, 1, 0, 0, 0, 3],
    notes: ["G", "B", "D", "G", "B", "G"],
    root: "G",
    theory: "G major is built from G, B, and D. This shape gives a big six-string sound with G in the bass.",
    tips: [
      "Let the middle strings ring open.",
      "Keep the ring finger curved so it does not touch the B string.",
      "Strum all six strings."
    ],
    mistakes: [
      "Muting the open G or B strings with lazy finger angles.",
      "Using too much pressure and tiring the hand.",
      "Landing fingers one at a time instead of as a shape."
    ],
    transitions: ["C", "D", "Em"]
  },
  {
    id: "d-major",
    symbol: "D",
    name: "D Major",
    category: "major",
    difficulty: "Beginner",
    summary: "A compact triangle shape on the top four strings.",
    frets: ["x", "x", 0, 2, 3, 2],
    fingers: ["x", "x", 0, 1, 3, 2],
    notes: ["x", "x", "D", "A", "D", "F#"],
    root: "D",
    theory: "D major is built from D, F#, and A. The open D string is the root and the shape sits on the treble strings.",
    tips: [
      "Strum from the D string downward.",
      "Angle your fingers so each fingertip lands cleanly.",
      "Keep the thumb relaxed behind the neck."
    ],
    mistakes: [
      "Playing the low E and A strings.",
      "Letting the ring finger mute the high E string.",
      "Putting fingers too far behind the frets."
    ],
    transitions: ["G", "A", "Em"]
  },
  {
    id: "a-major",
    symbol: "A",
    name: "A Major",
    category: "major",
    difficulty: "Beginner",
    summary: "Three fingers packed into the 2nd fret.",
    frets: ["x", 0, 2, 2, 2, 0],
    fingers: ["x", 0, 1, 2, 3, 0],
    notes: ["x", "A", "E", "A", "C#", "E"],
    root: "A",
    theory: "A major is built from A, C#, and E. The open A string gives the root and the 2nd fret cluster completes the chord.",
    tips: [
      "Try placing index, middle, ring in a small diagonal line.",
      "Strum from the A string downward.",
      "Keep fingers close to the fret wire."
    ],
    mistakes: [
      "Cramming fingers too flat and muting open strings.",
      "Playing the low E string too loudly.",
      "Leaving the ring finger too far from the fret."
    ],
    transitions: ["D", "E", "F#m"]
  },
  {
    id: "e-major",
    symbol: "E",
    name: "E Major",
    category: "major",
    difficulty: "Beginner",
    summary: "A strong six-string open chord.",
    frets: [0, 2, 2, 1, 0, 0],
    fingers: [0, 2, 3, 1, 0, 0],
    notes: ["E", "B", "E", "G#", "B", "E"],
    root: "E",
    theory: "E major is built from E, G#, and B. The open low E gives a strong bass root.",
    tips: [
      "Strum all six strings.",
      "Keep the index finger close to the 1st fret.",
      "Use relaxed pressure; open strings do much of the work."
    ],
    mistakes: [
      "Muting the open B or high E string.",
      "Pressing too hard and squeezing the hand.",
      "Letting the wrist collapse too far inward."
    ],
    transitions: ["A", "B7", "E7"]
  },
  {
    id: "f-major",
    symbol: "F",
    name: "F Major",
    category: "major",
    difficulty: "Intermediate",
    summary: "The famous beginner challenge: a small barre shape.",
    frets: [1, 3, 3, 2, 1, 1],
    fingers: [1, 3, 4, 2, 1, 1],
    notes: ["F", "C", "F", "A", "C", "F"],
    root: "F",
    theory: "F major is built from F, A, and C. This barre version moves the E major shape up one fret.",
    tips: [
      "Start with the smaller F shape if the full barre is too hard.",
      "Use the side of the index finger for the barre.",
      "Pull slightly back with the arm instead of squeezing only with the thumb."
    ],
    mistakes: [
      "Trying to press the barre with the soft flat part of the finger.",
      "Letting the wrist tense up.",
      "Expecting it to sound perfect immediately."
    ],
    transitions: ["C", "Am", "G"]
  },
  {
    id: "a-minor",
    symbol: "Am",
    name: "A Minor",
    category: "minor",
    difficulty: "Beginner",
    summary: "A warm, sad-sounding open minor chord.",
    frets: ["x", 0, 2, 2, 1, 0],
    fingers: ["x", 0, 2, 3, 1, 0],
    notes: ["x", "A", "E", "A", "C", "E"],
    root: "A",
    theory: "A minor is built from A, C, and E. Compared with A major, the C natural gives it the minor sound.",
    tips: [
      "Notice it feels like an E major shape moved over one string.",
      "Strum from the A string downward.",
      "Keep the index finger light but precise."
    ],
    mistakes: [
      "Playing the low E string too strongly.",
      "Muting the high E string.",
      "Confusing it with A major."
    ],
    transitions: ["C", "G", "Fmaj7"]
  },
  {
    id: "e-minor",
    symbol: "Em",
    name: "E Minor",
    category: "minor",
    difficulty: "Beginner",
    summary: "One of the easiest and biggest-sounding chords.",
    frets: [0, 2, 2, 0, 0, 0],
    fingers: [0, 2, 3, 0, 0, 0],
    notes: ["E", "B", "E", "G", "B", "E"],
    root: "E",
    theory: "E minor is built from E, G, and B. The open strings make it full and resonant.",
    tips: [
      "Strum all six strings.",
      "Let the open G, B, and E strings ring freely.",
      "Use it to practice relaxed fretting pressure."
    ],
    mistakes: [
      "Pressing harder than necessary.",
      "Accidentally touching the open G string.",
      "Not listening for all six strings."
    ],
    transitions: ["G", "C", "D"]
  },
  {
    id: "d-minor",
    symbol: "Dm",
    name: "D Minor",
    category: "minor",
    difficulty: "Beginner",
    summary: "A compact minor shape with a melancholy sound.",
    frets: ["x", "x", 0, 2, 3, 1],
    fingers: ["x", "x", 0, 2, 3, 1],
    notes: ["x", "x", "D", "A", "D", "F"],
    root: "D",
    theory: "D minor is built from D, F, and A. The F natural on the high E string creates the minor quality.",
    tips: [
      "Strum from the D string downward.",
      "Keep the index finger curved on the 1st fret.",
      "Let the open D ring clearly."
    ],
    mistakes: [
      "Playing the A or low E string.",
      "Muting the high E with the ring finger.",
      "Confusing the shape with D major."
    ],
    transitions: ["Am", "C", "G"]
  },
  {
    id: "g7",
    symbol: "G7",
    name: "G7",
    category: "seventh",
    difficulty: "Beginner",
    summary: "A dominant 7th chord that wants to resolve to C.",
    frets: [3, 2, 0, 0, 0, 1],
    fingers: [3, 2, 0, 0, 0, 1],
    notes: ["G", "B", "D", "G", "B", "F"],
    root: "G",
    theory: "G7 is built from G, B, D, and F. The F is the 7th that creates tension and pulls toward C.",
    tips: [
      "Strum all six strings.",
      "Keep the index finger curved on the high E string.",
      "Practice moving from G7 to C."
    ],
    mistakes: [
      "Muting the B string with the index finger.",
      "Using the G major high E fingering by habit.",
      "Not hearing the pull back to C."
    ],
    transitions: ["C", "Am", "F"]
  },
  {
    id: "c7",
    symbol: "C7",
    name: "C7",
    category: "seventh",
    difficulty: "Beginner",
    summary: "C major with an added bluesy 7th.",
    frets: ["x", 3, 2, 3, 1, 0],
    fingers: ["x", 3, 2, 4, 1, 0],
    notes: ["x", "C", "E", "Bb", "C", "E"],
    root: "C",
    theory: "C7 is built from C, E, G, and Bb. This open voicing omits one G but gives the dominant 7th sound.",
    tips: [
      "Start from C major, then add pinky on the 3rd fret of the G string.",
      "Strum from the A string downward.",
      "Keep the pinky rounded."
    ],
    mistakes: [
      "Flattening the pinky and muting nearby strings.",
      "Accidentally playing the low E.",
      "Losing the original C shape when adding the pinky."
    ],
    transitions: ["F", "G7", "C"]
  },
  {
    id: "d7",
    symbol: "D7",
    name: "D7",
    category: "seventh",
    difficulty: "Beginner",
    summary: "A small open dominant 7th shape.",
    frets: ["x", "x", 0, 2, 1, 2],
    fingers: ["x", "x", 0, 2, 1, 3],
    notes: ["x", "x", "D", "A", "C", "F#"],
    root: "D",
    theory: "D7 is built from D, F#, A, and C. It creates tension that often resolves to G.",
    tips: [
      "Strum from the D string downward.",
      "Think of a small triangle shape.",
      "Practice D7 to G slowly."
    ],
    mistakes: [
      "Playing the low strings.",
      "Confusing the B string 1st fret with D minor.",
      "Letting the fingers collapse into each other."
    ],
    transitions: ["G", "Em", "A7"]
  },
  {
    id: "e7",
    symbol: "E7",
    name: "E7",
    category: "seventh",
    difficulty: "Beginner",
    summary: "A bluesy E chord with less finger pressure than E major.",
    frets: [0, 2, 0, 1, 0, 0],
    fingers: [0, 2, 0, 1, 0, 0],
    notes: ["E", "B", "D", "G#", "B", "E"],
    root: "E",
    theory: "E7 is built from E, G#, B, and D. The open D string gives the dominant 7th color.",
    tips: [
      "Strum all six strings.",
      "Let the D string ring open.",
      "Compare it with E major to hear the added tension."
    ],
    mistakes: [
      "Accidentally fretting the D string like E major.",
      "Muting the open strings.",
      "Rushing the change to A."
    ],
    transitions: ["A", "A7", "B7"]
  },
  {
    id: "a7",
    symbol: "A7",
    name: "A7",
    category: "seventh",
    difficulty: "Beginner",
    summary: "An easy open dominant 7th chord.",
    frets: ["x", 0, 2, 0, 2, 0],
    fingers: ["x", 0, 1, 0, 2, 0],
    notes: ["x", "A", "E", "G", "C#", "E"],
    root: "A",
    theory: "A7 is built from A, C#, E, and G. The open G string creates the 7th sound.",
    tips: [
      "Strum from the A string downward.",
      "Let the G string ring open between the fretted notes.",
      "Use it before D for a classic resolution."
    ],
    mistakes: [
      "Accidentally muting the open G string.",
      "Playing the low E too loudly.",
      "Confusing it with A major."
    ],
    transitions: ["D", "E7", "A"]
  },
  {
    id: "fmaj7",
    symbol: "Fmaj7",
    name: "Fmaj7",
    category: "sus",
    difficulty: "Beginner",
    summary: "A gentler alternative to full F major.",
    frets: ["x", "x", 3, 2, 1, 0],
    fingers: ["x", "x", 3, 2, 1, 0],
    notes: ["x", "x", "F", "A", "C", "E"],
    root: "F",
    theory: "Fmaj7 is built from F, A, C, and E. The open high E is the major 7th and gives it a softer color.",
    tips: [
      "Use this as an easier substitute for F in many beginner songs.",
      "Strum from the D string downward.",
      "Keep the high E open and ringing."
    ],
    mistakes: [
      "Accidentally muting the open high E string.",
      "Playing too many bass strings.",
      "Thinking it is exactly the same as F major; it has a softer sound."
    ],
    transitions: ["C", "Am", "G"]
  },
  {
    id: "dsus2",
    symbol: "Dsus2",
    name: "Dsus2",
    category: "sus",
    difficulty: "Beginner",
    summary: "An airy D chord variation.",
    frets: ["x", "x", 0, 2, 3, 0],
    fingers: ["x", "x", 0, 1, 3, 0],
    notes: ["x", "x", "D", "A", "D", "E"],
    root: "D",
    theory: "Dsus2 replaces the 3rd of D major with the 2nd, E. That makes it sound open and unresolved.",
    tips: [
      "Start from D major and lift the middle finger.",
      "Strum from the D string downward.",
      "Try alternating D, Dsus2, and Dsus4."
    ],
    mistakes: [
      "Playing the A or low E string.",
      "Muting the open high E.",
      "Not hearing the suspended quality."
    ],
    transitions: ["D", "Dsus4", "G"]
  },
  {
    id: "dsus4",
    symbol: "Dsus4",
    name: "Dsus4",
    category: "sus",
    difficulty: "Beginner",
    summary: "A D chord with a lifted, suspended sound.",
    frets: ["x", "x", 0, 2, 3, 3],
    fingers: ["x", "x", 0, 1, 3, 4],
    notes: ["x", "x", "D", "A", "D", "G"],
    root: "D",
    theory: "Dsus4 replaces the 3rd of D major with the 4th, G. It creates suspension that resolves nicely back to D.",
    tips: [
      "Start from D major and add pinky to the 3rd fret of high E.",
      "Keep the ring finger planted on the B string.",
      "Practice Dsus4 to D."
    ],
    mistakes: [
      "Flattening the pinky.",
      "Moving the whole hand instead of adding one finger.",
      "Playing the low strings."
    ],
    transitions: ["D", "G", "A"]
  },
  {
    id: "asus2",
    symbol: "Asus2",
    name: "Asus2",
    category: "sus",
    difficulty: "Beginner",
    summary: "A spacious A chord variation.",
    frets: ["x", 0, 2, 2, 0, 0],
    fingers: ["x", 0, 1, 2, 0, 0],
    notes: ["x", "A", "E", "A", "B", "E"],
    root: "A",
    theory: "Asus2 replaces the 3rd of A major with the 2nd, B. It sounds open because it avoids the major/minor 3rd.",
    tips: [
      "Strum from the A string downward.",
      "Let the B and high E strings ring open.",
      "Compare it with A major."
    ],
    mistakes: [
      "Accidentally fretting the B string.",
      "Playing the low E too loudly.",
      "Muting the open high strings."
    ],
    transitions: ["A", "E", "D"]
  },
  {
    id: "asus4",
    symbol: "Asus4",
    name: "Asus4",
    category: "sus",
    difficulty: "Beginner",
    summary: "A classic suspended A sound.",
    frets: ["x", 0, 2, 2, 3, 0],
    fingers: ["x", 0, 1, 2, 3, 0],
    notes: ["x", "A", "E", "A", "D", "E"],
    root: "A",
    theory: "Asus4 replaces the 3rd of A major with the 4th, D. It creates tension that resolves well to A.",
    tips: [
      "Start from A major and move the ring finger to the 3rd fret on B.",
      "Strum from the A string downward.",
      "Practice Asus4 to A."
    ],
    mistakes: [
      "Muting the high E.",
      "Letting fingers flatten across the strings.",
      "Playing the low E too strongly."
    ],
    transitions: ["A", "D", "E"]
  },
  {
    id: "em7",
    symbol: "Em7",
    name: "Em7",
    category: "seventh",
    difficulty: "Beginner",
    summary: "A relaxed, open minor 7th sound.",
    frets: [0, 2, 2, 0, 3, 0],
    fingers: [0, 1, 2, 0, 3, 0],
    notes: ["E", "B", "E", "G", "D", "E"],
    root: "E",
    theory: "Em7 is built from E, G, B, and D. The D on the B string adds the minor 7th color.",
    tips: [
      "Strum all six strings.",
      "Keep the ring finger curved on the B string.",
      "Works beautifully with G, Cadd9, and Dsus4."
    ],
    mistakes: [
      "Muting the open high E.",
      "Confusing it with regular Em.",
      "Using too much hand tension."
    ],
    transitions: ["G", "Cadd9", "Dsus4"]
  },
  {
    id: "cadd9",
    symbol: "Cadd9",
    name: "Cadd9",
    category: "sus",
    difficulty: "Beginner",
    summary: "A modern, ringing C variation common in pop and rock.",
    frets: ["x", 3, 2, 0, 3, 3],
    fingers: ["x", 2, 1, 0, 3, 4],
    notes: ["x", "C", "E", "G", "D", "G"],
    root: "C",
    theory: "Cadd9 is C major with an added D. The top two fretted notes make it connect easily with G-style shapes.",
    tips: [
      "Keep ring and pinky planted when moving between G and Cadd9.",
      "Strum from the A string downward.",
      "Let the open G string ring."
    ],
    mistakes: [
      "Playing the low E string.",
      "Muting the open G string.",
      "Overstretching instead of relaxing the wrist."
    ],
    transitions: ["G", "Em7", "Dsus4"]
  }
,
  {
    id: "b7",
    symbol: "B7",
    name: "B7",
    category: "seventh",
    difficulty: "Beginner",
    summary: "A useful dominant 7th chord, especially in the key of E.",
    frets: ["x", 2, 1, 2, 0, 2],
    fingers: ["x", 2, 1, 3, 0, 4],
    notes: ["x", "B", "D#", "A", "B", "F#"],
    root: "B",
    theory: "B7 is built from B, D#, F#, and A. The A gives it the dominant 7th tension that resolves naturally to E.",
    tips: [
      "Place the index finger first on the D string 1st fret.",
      "Keep the B string open and ringing.",
      "Strum from the A string downward."
    ],
    mistakes: [
      "Muting the open B string.",
      "Playing the low E string.",
      "Letting the pinky collapse on the high E string."
    ],
    transitions: ["E", "E7", "A"]
  },
  {
    id: "bm",
    symbol: "Bm",
    name: "B Minor",
    category: "barre",
    difficulty: "Intermediate",
    summary: "A common minor barre chord based on the A minor shape.",
    frets: ["x", 2, 4, 4, 3, 2],
    fingers: ["x", 1, 3, 4, 2, 1],
    notes: ["x", "B", "F#", "B", "D", "F#"],
    root: "B",
    theory: "B minor is built from B, D, and F#. This shape moves the A minor chord shape up two frets with a barre.",
    tips: [
      "Use the side of the index finger for the barre.",
      "Do not force the low E string; it is muted.",
      "Place the non-barre fingers first, then settle the barre."
    ],
    mistakes: [
      "Pressing the barre with the soft flat part of the finger.",
      "Squeezing too hard with the thumb.",
      "Muting the B string with the ring finger."
    ],
    transitions: ["G", "D", "A"]
  },
  {
    id: "f-sharp-minor",
    symbol: "F#m",
    name: "F# Minor",
    category: "barre",
    difficulty: "Intermediate",
    summary: "A minor barre chord based on the E minor shape.",
    frets: [2, 4, 4, 2, 2, 2],
    fingers: [1, 3, 4, 1, 1, 1],
    notes: ["F#", "C#", "F#", "A", "C#", "F#"],
    root: "F#",
    theory: "F# minor is built from F#, A, and C#. This is the E minor shape moved up to the 2nd fret with a full barre.",
    tips: [
      "Let the index finger act as a movable nut.",
      "Keep the wrist relaxed and use arm weight.",
      "Check the G and B strings carefully; they often buzz in barre chords."
    ],
    mistakes: [
      "Twisting the wrist too far.",
      "Trying to solve everything with thumb pressure.",
      "Ignoring one muted string because the overall chord seems loud."
    ],
    transitions: ["A", "D", "E"]
  },
  {
    id: "bb-major",
    symbol: "Bb",
    name: "Bb Major",
    category: "barre",
    difficulty: "Intermediate",
    summary: "A compact A-shape barre chord.",
    frets: ["x", 1, 3, 3, 3, 1],
    fingers: ["x", 1, 3, 3, 3, 1],
    notes: ["x", "Bb", "F", "Bb", "D", "F"],
    root: "Bb",
    theory: "Bb major is built from Bb, D, and F. This is an A major shape moved up one fret with a barre.",
    tips: [
      "You can use the ring finger to mini-barre the 3rd fret notes.",
      "Mute the low E string.",
      "Aim for clarity before volume."
    ],
    mistakes: [
      "Letting the high E string ring badly if the barre is not clean.",
      "Pressing too hard with the ring finger.",
      "Playing the low E string."
    ],
    transitions: ["F", "C", "Gm"]
  },
  {
    id: "g-minor",
    symbol: "Gm",
    name: "G Minor",
    category: "barre",
    difficulty: "Intermediate",
    summary: "A movable minor barre shape.",
    frets: [3, 5, 5, 3, 3, 3],
    fingers: [1, 3, 4, 1, 1, 1],
    notes: ["G", "D", "G", "Bb", "D", "G"],
    root: "G",
    theory: "G minor is built from G, Bb, and D. This is the E minor shape moved to the 3rd fret.",
    tips: [
      "Keep the barre close to the 3rd fret.",
      "Use ring and pinky for the 5th fret notes.",
      "Practice moving between G and Gm to hear the emotional change."
    ],
    mistakes: [
      "Flattening the hand too much.",
      "Letting the B string buzz.",
      "Not rolling the index finger slightly onto its side."
    ],
    transitions: ["Bb", "F", "Cm"]
  }
];

const chordList = document.getElementById("chordList");
const chordCount = document.getElementById("chordCount");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const randomButton = document.getElementById("randomButton");
const themeToggle = document.getElementById("themeToggle");
const practiceButton = document.getElementById("practiceButton");
const soundButton = document.getElementById("soundButton");
const leftyButton = document.getElementById("leftyButton");
const practiceSelect = document.getElementById("practiceSelect");
const startPracticeButton = document.getElementById("startPracticeButton");
const nextPracticeButton = document.getElementById("nextPracticeButton");
const stopPracticeButton = document.getElementById("stopPracticeButton");
const practiceTimer = document.getElementById("practiceTimer");
const practiceChord = document.getElementById("practiceChord");
const practiceHint = document.getElementById("practiceHint");
const progressionList = document.getElementById("progressionList");
const lessonPath = document.getElementById("lessonPath");
const scaleRootSelect = document.getElementById("scaleRootSelect");
const scaleTypeSelect = document.getElementById("scaleTypeSelect");
const scaleText = document.getElementById("scaleText");
const scaleNotes = document.getElementById("scaleNotes");

const chordCategory = document.getElementById("chordCategory");
const chordName = document.getElementById("chordName");
const chordSummary = document.getElementById("chordSummary");
const tuningLabel = document.getElementById("tuningLabel");
const chordDiagram = document.getElementById("chordDiagram");
const handGuide = document.getElementById("handGuide");
const fingerGuide = document.getElementById("fingerGuide");
const stringGuide = document.getElementById("stringGuide");
const theoryText = document.getElementById("theoryText");
const noteRow = document.getElementById("noteRow");
const tipsList = document.getElementById("tipsList");
const mistakesList = document.getElementById("mistakesList");
const transitionRow = document.getElementById("transitionRow");

let selectedChordId = localStorage.getItem("fretwiseSelectedChord") || "c-major";
let practiceList = JSON.parse(localStorage.getItem("fretwisePracticeList") || "[]");
let theme = localStorage.getItem("fretwiseTheme") || "light";
let leftyMode = localStorage.getItem("fretwiseLefty") || "off";
let practiceInterval = null;
let practiceSeconds = 30;
let currentPracticeSequence = [];
let currentPracticeIndex = 0;

const PROGRESSIONS = [
  { id: "pop-axis", name: "C–G–Am–F", chords: ["C", "G", "Am", "Fmaj7"], note: "The classic pop progression. Use Fmaj7 as a beginner-friendly F." },
  { id: "g-family", name: "G–D–Em–C", chords: ["G", "D", "Em", "C"], note: "A guitar-friendly progression with lots of open strings." },
  { id: "blues-a", name: "12-bar blues in A", chords: ["A7", "D7", "A7", "A7", "D7", "D7", "A7", "A7", "E7", "D7", "A7", "E7"], note: "A simple dominant 7th blues form." }
];

const LESSONS = [
  { name: "First four chords", chords: ["Em", "G", "C", "D"], note: "Start here. These chords appear in thousands of songs." },
  { name: "Minor mood", chords: ["Am", "Dm", "Em", "C"], note: "Learn how minor chords change the emotional color." },
  { name: "Dominant 7th basics", chords: ["G7", "C7", "D7", "A7", "E7"], note: "Essential for blues, folk, country and classic progressions." },
  { name: "Suspended colors", chords: ["Dsus2", "Dsus4", "Asus2", "Asus4", "Cadd9"], note: "Add movement without changing the whole chord shape." },
  { name: "Barre chord entry", chords: ["F", "Bm", "F#m", "Bb"], note: "Train index-finger strength gradually. Clean beats loud." }
];

const SCALE_DEFS = {
  major: { name: "Major scale", intervals: [0, 2, 4, 5, 7, 9, 11], formula: "1 2 3 4 5 6 7" },
  minor: { name: "Natural minor", intervals: [0, 2, 3, 5, 7, 8, 10], formula: "1 2 ♭3 4 5 ♭6 ♭7" },
  pentatonicMinor: { name: "Minor pentatonic", intervals: [0, 3, 5, 7, 10], formula: "1 ♭3 4 5 ♭7" },
  blues: { name: "Blues scale", intervals: [0, 3, 5, 6, 7, 10], formula: "1 ♭3 4 ♭5 5 ♭7" }
};

const NOTE_NAMES = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"];

function getFilteredChords() {
  const search = searchInput.value.trim().toLowerCase();
  const category = categorySelect.value;

  return CHORDS.filter(chord => {
    const haystack = [
      chord.symbol,
      chord.name,
      chord.category,
      chord.difficulty,
      chord.root,
      chord.notes.join(" ")
    ].join(" ").toLowerCase();

    const matchesSearch = !search || haystack.includes(search);
    const matchesCategory = category === "all"
      || chord.category === category
      || (category === "favorites" && practiceList.includes(chord.id));

    return matchesSearch && matchesCategory;
  });
}

function renderChordList() {
  const chords = getFilteredChords();
  chordCount.textContent = `${chords.length} chord${chords.length === 1 ? "" : "s"}`;
  chordList.innerHTML = "";

  if (!chords.length) {
    chordList.innerHTML = `<div class="empty-state">No chords found.</div>`;
    return;
  }

  chords.forEach(chord => {
    const button = document.createElement("button");
    button.className = `chord-item${chord.id === selectedChordId ? " active" : ""}`;
    button.type = "button";
    button.innerHTML = `<strong>${escapeHTML(chord.symbol)}</strong><span>${escapeHTML(chord.name)} · ${escapeHTML(chord.difficulty)}</span>`;
    button.addEventListener("click", () => selectChord(chord.id));
    chordList.appendChild(button);
  });
}

function selectChord(id) {
  selectedChordId = id;
  localStorage.setItem("fretwiseSelectedChord", id);
  renderSelectedChord();
  renderChordList();
}

function getSelectedChord() {
  return CHORDS.find(chord => chord.id === selectedChordId) || CHORDS[0];
}

function renderSelectedChord() {
  const chord = getSelectedChord();

  chordCategory.textContent = `${chord.category} · ${chord.difficulty}`;
  chordName.textContent = chord.name;
  chordSummary.textContent = chord.summary;
  tuningLabel.textContent = "Standard tuning · E A D G B E";

  renderDiagram(chord);
  renderHandGuide(chord);
  renderFingerGuide(chord);
  renderStringGuide(chord);
  renderTheory(chord);
  renderLists(chord);
  renderTransitions(chord);
  updatePracticeButton(chord);
}

function renderDiagram(chord) {
  const width = 320;
  const height = 420;
  const marginX = 46;
  const topY = 62;
  const fretGap = 58;
  const stringGap = (width - marginX * 2) / 5;

  const positions = getFingerPositions(chord);

  let svg = `<div class="fretboard"><svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHTML(chord.name)} chord diagram">`;

  svg += `<rect x="18" y="18" width="${width - 36}" height="${height - 36}" rx="22" fill="var(--card-solid)" stroke="var(--border)" />`;

  for (let i = 0; i < 6; i++) {
    const x = marginX + i * stringGap;
    const strokeWidth = 4 - Math.min(i, 3) * 0.35;
    svg += `<line x1="${x}" y1="${topY}" x2="${x}" y2="${topY + fretGap * 5}" stroke="var(--ink)" stroke-opacity="0.45" stroke-width="${strokeWidth}" />`;
  }

  for (let fret = 0; fret <= 5; fret++) {
    const y = topY + fret * fretGap;
    svg += `<line x1="${marginX}" y1="${y}" x2="${width - marginX}" y2="${y}" stroke="var(--ink)" stroke-opacity="${fret === 0 ? "0.75" : "0.32"}" stroke-width="${fret === 0 ? 8 : 3}" />`;
  }

  STRINGS.forEach((string, index) => {
    const x = marginX + index * stringGap;
    const fret = chord.frets[index];

    svg += `<text x="${x}" y="42" text-anchor="middle" fill="var(--muted)" font-size="13" font-weight="800">${string.note}</text>`;

    if (fret === "x") {
      svg += `<text x="${x}" y="${topY - 16}" text-anchor="middle" fill="var(--mute)" font-size="20" font-weight="900">×</text>`;
    } else if (fret === 0) {
      svg += `<circle cx="${x}" cy="${topY - 20}" r="9" fill="none" stroke="var(--open)" stroke-width="3" />`;
    }
  });

  positions.forEach(pos => {
    const x = marginX + pos.stringIndex * stringGap;
    const y = topY + (pos.fret - 0.5) * fretGap;
    const color = FINGER_COLORS[pos.finger];

    svg += `<circle cx="${x}" cy="${y}" r="20" fill="${color}" stroke="white" stroke-width="3" />`;
    svg += `<text x="${x}" y="${y + 7}" text-anchor="middle" fill="white" font-size="19" font-weight="900">${pos.finger}</text>`;
  });

  for (let fret = 1; fret <= 5; fret++) {
    const y = topY + (fret - 0.5) * fretGap + 5;
    svg += `<text x="24" y="${y}" text-anchor="middle" fill="var(--muted)" font-size="12" font-weight="800">${fret}</text>`;
  }

  svg += `</svg></div>`;
  chordDiagram.innerHTML = svg;
}

function renderHandGuide(chord) {
  const positions = getFingerPositions(chord);
  const fingerRows = [1, 2, 3, 4].map(finger => {
    const pos = positions.find(item => item.finger === finger);
    const active = Boolean(pos);
    const color = FINGER_COLORS[finger];
    const label = active
      ? `${FINGER_NAMES[finger]} → String ${STRINGS[pos.stringIndex].number}, fret ${pos.fret}`
      : `${FINGER_NAMES[finger]} → relaxed / not used`;

    return { finger, active, color, label };
  });

  let svg = `<svg class="hand-svg" viewBox="0 0 360 360" role="img" aria-label="Hand position guide">`;
  svg += `<rect x="14" y="14" width="332" height="332" rx="28" fill="var(--card-solid)" stroke="var(--border)" />`;

  svg += `<path d="M132 248 C118 218, 116 184, 129 154 C141 125, 166 110, 192 118 C220 127, 236 151, 238 181 C240 213, 225 239, 202 256 C178 274, 146 276, 132 248 Z" fill="var(--soft)" stroke="var(--border)" stroke-width="3" />`;

  const fingerPaths = [
    "M128 164 C99 138, 86 113, 91 86",
    "M158 134 C144 96, 143 70, 153 47",
    "M190 132 C194 94, 202 68, 217 48",
    "M219 150 C243 120, 259 97, 270 73"
  ];

  fingerRows.forEach((row, index) => {
    const path = fingerPaths[index];
    const opacity = row.active ? "1" : "0.25";
    svg += `<path d="${path}" fill="none" stroke="${row.color}" stroke-width="${row.active ? 13 : 9}" stroke-linecap="round" opacity="${opacity}" />`;

    const tips = [
      [91, 86],
      [153, 47],
      [217, 48],
      [270, 73]
    ];

    const [cx, cy] = tips[index];
    svg += `<circle cx="${cx}" cy="${cy}" r="${row.active ? 18 : 13}" fill="${row.active ? row.color : "var(--border)"}" opacity="${opacity}" stroke="white" stroke-width="3" />`;
    svg += `<text x="${cx}" y="${cy + 6}" text-anchor="middle" fill="white" font-size="16" font-weight="900">${row.finger}</text>`;
  });

  svg += `<text x="180" y="304" text-anchor="middle" fill="var(--muted)" font-size="13" font-weight="800">Stylized guide: keep fingertips curved and wrist relaxed</text>`;
  svg += `</svg>`;

  const list = fingerRows.map(row => `
    <div class="guide-row">
      <span class="guide-badge" style="background:${row.color}; opacity:${row.active ? 1 : 0.35}">${row.finger}</span>
      <span class="guide-text"><strong>${escapeHTML(row.label)}</strong></span>
    </div>
  `).join("");

  handGuide.innerHTML = `${svg}<div class="guide-list">${list}</div>`;
}

function renderFingerGuide(chord) {
  const positions = getFingerPositions(chord);

  if (!positions.length) {
    fingerGuide.innerHTML = `<p>No fretted fingers needed. Let the open strings ring cleanly.</p>`;
    return;
  }

  fingerGuide.innerHTML = positions
    .sort((a, b) => a.finger - b.finger)
    .map(pos => {
      const string = STRINGS[pos.stringIndex];
      return `
        <div class="guide-row">
          <span class="guide-badge" style="background:${FINGER_COLORS[pos.finger]}">${pos.finger}</span>
          <span class="guide-text">
            <strong>${FINGER_NAMES[pos.finger]}</strong>
            <span>Place it on string ${string.number} (${string.name}), fret ${pos.fret}. Aim just behind the fret wire.</span>
          </span>
        </div>
      `;
    }).join("");
}

function renderStringGuide(chord) {
  stringGuide.innerHTML = STRINGS.map((string, index) => {
    const fret = chord.frets[index];
    const finger = chord.fingers[index];
    const note = chord.notes[index];

    let badge = "";
    let title = "";
    let detail = "";

    if (fret === "x") {
      badge = "×";
      title = `String ${string.number} (${string.name})`;
      detail = "Do not play this string. Lightly avoid or mute it.";
    } else if (fret === 0) {
      badge = "O";
      title = `String ${string.number} (${string.name})`;
      detail = `Play open. It rings as ${note}.`;
    } else {
      badge = String(finger);
      title = `String ${string.number} (${string.name})`;
      detail = `Fret ${fret} with finger ${finger}. This note is ${note}.`;
    }

    const bg = fret === "x" ? "var(--mute)" : fret === 0 ? "var(--open)" : FINGER_COLORS[finger];

    return `
      <div class="guide-row">
        <span class="guide-badge" style="background:${bg}">${badge}</span>
        <span class="guide-text">
          <strong>${title}</strong>
          <span>${detail}</span>
        </span>
      </div>
    `;
  }).join("");
}

function renderTheory(chord) {
  theoryText.textContent = chord.theory;
  const uniqueNotes = [...new Set(chord.notes.filter(note => note !== "x"))];
  noteRow.innerHTML = uniqueNotes
    .map(note => `<span class="note-pill">${escapeHTML(note)}${note === chord.root ? " · root" : ""}</span>`)
    .join("");
}

function renderLists(chord) {
  tipsList.innerHTML = chord.tips.map(tip => `<li>${escapeHTML(tip)}</li>`).join("");
  mistakesList.innerHTML = chord.mistakes.map(mistake => `<li>${escapeHTML(mistake)}</li>`).join("");
}

function renderTransitions(chord) {
  transitionRow.innerHTML = chord.transitions.map(symbol => {
    const target = CHORDS.find(item => item.symbol === symbol);
    return `<button class="transition-pill" type="button" data-target="${target ? target.id : ""}">${escapeHTML(symbol)}</button>`;
  }).join("");

  transitionRow.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      if (button.dataset.target) {
        selectChord(button.dataset.target);
      }
    });
  });
}

function getFingerPositions(chord) {
  return chord.frets
    .map((fret, stringIndex) => ({
      fret,
      finger: chord.fingers[stringIndex],
      stringIndex
    }))
    .filter(pos => typeof pos.fret === "number" && pos.fret > 0 && typeof pos.finger === "number" && pos.finger > 0);
}

function updatePracticeButton(chord) {
  const isSaved = practiceList.includes(chord.id);
  practiceButton.textContent = isSaved ? "In practice list" : "Add to practice";
  practiceButton.classList.toggle("saved", isSaved);
}

function togglePracticeChord() {
  const chord = getSelectedChord();

  if (practiceList.includes(chord.id)) {
    practiceList = practiceList.filter(id => id !== chord.id);
  } else {
    practiceList.push(chord.id);
  }

  localStorage.setItem("fretwisePracticeList", JSON.stringify(practiceList));
  updatePracticeButton(chord);
  renderChordList();
}

function randomChord() {
  const chords = getFilteredChords();

  if (!chords.length) {
    return;
  }

  const random = chords[Math.floor(Math.random() * chords.length)];
  selectChord(random.id);
}

function applyTheme(nextTheme) {
  const safeTheme = nextTheme === "dark" ? "dark" : "light";
  document.body.classList.toggle("dark", safeTheme === "dark");
  themeToggle.textContent = safeTheme === "dark" ? "Light Mode" : "Dark Mode";
  localStorage.setItem("fretwiseTheme", safeTheme);
  theme = safeTheme;
}

function toggleTheme() {
  applyTheme(theme === "dark" ? "light" : "dark");
}

function escapeHTML(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


function noteToFrequency(note, octave = 4) {
  const normalized = String(note).replace("♭", "b").replace("Db", "C#").replace("Gb", "F#").replace("Cb", "B").replace("Fb", "E");
  const semitoneMap = {
    C: 0, "C#": 1, Db: 1, D: 2, "D#": 3, Eb: 3, E: 4, F: 5, "F#": 6, Gb: 6, G: 7, "G#": 8, Ab: 8, A: 9, "A#": 10, Bb: 10, B: 11
  };
  const semitone = semitoneMap[normalized] ?? 0;
  const midi = (octave + 1) * 12 + semitone;
  return 440 * Math.pow(2, (midi - 69) / 12);
}

function playSelectedChordSound() {
  const chord = getSelectedChord();
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) {
    alert("Your browser does not support Web Audio.");
    return;
  }

  const context = new AudioContextClass();
  const uniqueNotes = [...new Set(chord.notes.filter(note => note !== "x"))];
  const now = context.currentTime;

  uniqueNotes.forEach((note, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = "triangle";
    oscillator.frequency.value = noteToFrequency(note, index < 2 ? 3 : 4);

    gain.gain.setValueAtTime(0, now + index * 0.11);
    gain.gain.linearRampToValueAtTime(0.12, now + index * 0.11 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.7 + index * 0.04);

    oscillator.connect(gain).connect(context.destination);
    oscillator.start(now + index * 0.11);
    oscillator.stop(now + 1.9 + index * 0.04);
  });
}

function applyLeftyMode(mode) {
  const safeMode = mode === "on" ? "on" : "off";
  document.body.classList.toggle("lefty", safeMode === "on");
  leftyButton.textContent = safeMode === "on" ? "Right-handed" : "Left-handed";
  leftyButton.classList.toggle("active", safeMode === "on");
  localStorage.setItem("fretwiseLefty", safeMode);
  leftyMode = safeMode;
}

function toggleLeftyMode() {
  applyLeftyMode(leftyMode === "on" ? "off" : "on");
}

function renderProgressions() {
  progressionList.innerHTML = PROGRESSIONS.map(prog => `
    <button class="progression-button" type="button" data-progression="${prog.id}">
      <strong>${escapeHTML(prog.name)}</strong>
      <span>${escapeHTML(prog.note)}</span>
    </button>
  `).join("");

  progressionList.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      const progression = PROGRESSIONS.find(item => item.id === button.dataset.progression);
      if (progression) {
        startSequence(progression.chords, progression.name);
      }
    });
  });
}

function renderLessonPath() {
  lessonPath.innerHTML = LESSONS.map((lesson, index) => `
    <button class="lesson-button" type="button" data-lesson="${index}">
      <strong>${index + 1}. ${escapeHTML(lesson.name)}</strong>
      <span>${escapeHTML(lesson.note)}</span>
    </button>
  `).join("");

  lessonPath.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      const lesson = LESSONS[Number(button.dataset.lesson)];
      if (lesson) {
        startSequence(lesson.chords, lesson.name);
      }
    });
  });
}

function symbolsToChordIds(symbols) {
  return symbols
    .map(symbol => CHORDS.find(chord => chord.symbol === symbol)?.id)
    .filter(Boolean);
}

function getPracticeSequence() {
  const choice = practiceSelect.value;

  if (choice === "practice-list") {
    return practiceList.length ? practiceList : ["c-major", "g-major", "a-minor", "fmaj7"];
  }

  if (choice === "random-beginner") {
    return CHORDS
      .filter(chord => chord.difficulty === "Beginner")
      .map(chord => chord.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 8);
  }

  const progression = PROGRESSIONS.find(item => item.id === choice);
  return progression ? symbolsToChordIds(progression.chords) : ["c-major", "g-major"];
}

function startSequence(symbolsOrIds, label = "Practice drill") {
  const ids = symbolsOrIds.every(value => CHORDS.some(chord => chord.id === value))
    ? symbolsOrIds
    : symbolsToChordIds(symbolsOrIds);

  if (!ids.length) {
    return;
  }

  currentPracticeSequence = ids;
  currentPracticeIndex = 0;
  practiceSelect.value = "practice-list";
  startPracticeTimer(label);
}

function startPracticeTimer(label = "") {
  const seq = currentPracticeSequence.length ? currentPracticeSequence : getPracticeSequence();

  if (!seq.length) {
    practiceHint.textContent = "Add chords to your practice list first.";
    return;
  }

  currentPracticeSequence = seq;
  practiceSeconds = 30;
  clearInterval(practiceInterval);
  showCurrentPracticeChord(label);
  practiceInterval = setInterval(() => {
    practiceSeconds -= 1;
    practiceTimer.textContent = practiceSeconds;

    if (practiceSeconds <= 0) {
      nextPracticeChord();
    }
  }, 1000);
}

function showCurrentPracticeChord(label = "") {
  const id = currentPracticeSequence[currentPracticeIndex % currentPracticeSequence.length];
  const chord = CHORDS.find(item => item.id === id);

  if (!chord) {
    return;
  }

  selectChord(chord.id);
  practiceTimer.textContent = practiceSeconds;
  practiceChord.textContent = chord.symbol;
  practiceHint.textContent = label
    ? `${label}: land the shape cleanly, then strum once.`
    : "Land the shape cleanly, then strum once.";
}

function nextPracticeChord() {
  if (!currentPracticeSequence.length) {
    currentPracticeSequence = getPracticeSequence();
  }

  currentPracticeIndex = (currentPracticeIndex + 1) % currentPracticeSequence.length;
  practiceSeconds = 30;
  showCurrentPracticeChord();
}

function stopPracticeTimer() {
  clearInterval(practiceInterval);
  practiceInterval = null;
  practiceSeconds = 30;
  practiceTimer.textContent = "30";
  practiceChord.textContent = "Practice stopped";
  practiceHint.textContent = "Choose a drill when you are ready.";
}

function populateScaleControls() {
  scaleRootSelect.innerHTML = NOTE_NAMES.map(note => `<option value="${note}">${note}</option>`).join("");
  scaleRootSelect.value = "C";
}

function renderScale() {
  const root = scaleRootSelect.value || "C";
  const type = scaleTypeSelect.value || "major";
  const scale = SCALE_DEFS[type];
  const rootIndex = NOTE_NAMES.indexOf(root);
  const notes = scale.intervals.map(interval => NOTE_NAMES[(rootIndex + interval) % 12]);

  scaleText.textContent = `${root} ${scale.name}: ${scale.formula}. Learn it slowly, say the note names out loud, then connect it to chords in the same key.`;
  scaleNotes.innerHTML = notes.map((note, index) => `<span class="note-pill">${escapeHTML(note)}${index === 0 ? " · root" : ""}</span>`).join("");
}


searchInput.addEventListener("input", renderChordList);
categorySelect.addEventListener("change", renderChordList);
randomButton.addEventListener("click", randomChord);
practiceButton.addEventListener("click", togglePracticeChord);
soundButton.addEventListener("click", playSelectedChordSound);
leftyButton.addEventListener("click", toggleLeftyMode);
startPracticeButton.addEventListener("click", () => {
  currentPracticeSequence = getPracticeSequence();
  currentPracticeIndex = 0;
  startPracticeTimer();
});
nextPracticeButton.addEventListener("click", nextPracticeChord);
stopPracticeButton.addEventListener("click", stopPracticeTimer);
scaleRootSelect.addEventListener("change", renderScale);
scaleTypeSelect.addEventListener("change", renderScale);
themeToggle.addEventListener("click", toggleTheme);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(error => {
      console.warn("Service worker registration failed:", error);
    });
  });
}

applyTheme(theme);
applyLeftyMode(leftyMode);
populateScaleControls();
renderScale();
renderProgressions();
renderLessonPath();
renderSelectedChord();
renderChordList();
