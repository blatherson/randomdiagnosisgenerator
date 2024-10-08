// console.log('This is to be a random message in time'); // test running from terminal

// Below are the three lists of random psychoanalytic words
const personalityTypes = [
    "narcissistic",
    "obsessive-compulsive",
    "paranoid",
    "depressive",
    "hysterical",
    "schizoid",
    "borderline",
    "masochistic",
    "sadistic",
    "histrionic",
    "manic",
    "phobic",
    "anankastic",
    "passive-aggressive",
    "melancholic",
    "erotomanic",
    "antisocial",
    "dependent",
    "avoidant",
    "somatizing",
    "psychopathic",
    "neurotic",
    "compulsive",
    "hypochondriacal",
    "splitting",
    "psychosomatic",
    "fetishistic",
    "dissociative",
    "alexithymic",
    "narcissistic-grandiose"
];

const locusOfObject = [
    "egodystonic",
    "egosyntonic",
    "autoplastic",
    "alloplastic",
    "introversive",
    "extroversive",
    "cathectic",
    "autocathexis",
    "allocathexis",
    "anaclitic",
    "countercathexis",
    "libidinal",
    "object-cathexes",
    "objectless",
    "selfobject",
    "subjective-objective",
    "objectified",
    "self-representational",
    "other-directed",
    "self-directed",
    "self-objectification",
    "objectless",
    "intrapsychic"
];


const psychoanalyticWords = [
    "archetype",
    "catharsis",
    "unconscious",
    "sublimation",
    "libido",
    "anima",
    "idiosyncrasy",
    "phantasmagoria",
    "somnambulism",
    "abreaction",
    "repression",
    "projection",
    "introjection",
    "transference",
    "countertransference",
    "dissociation",
    "defense",
    "resilience",
    "melancholia",
    "manic",
    "neurosis",
    "psychosis",
    "complex",
    "fixation",
    "ambivalence",
    "mimesis",
    "phantasm",
    "atavism",
    "fugue",
    "hypnosis",
    "anhedonia",
    "compulsion",
    "paranoia",
    "regression",
    "suppression",
    "inhibition",
    "soma",
    "thanatos",
    "abjection",
    "phantasmatic",
    "schism",
    "serendipity",
    "solipsism",
    "synchronicity",
    "zeitgeist",
    "monomania",
    "nostalgia",
    "hermeneutic",
    "lachrymose",
    "narcissism"
];

// And let's not forget mama or papa
const mamaOrPapa = ["mother", "father"];

// Function to generate random diagnosis and print message containing it
const randomDiagnosisGenerator = () => {
    let randomPersonalityType = Math.floor(Math.random()*personalityTypes.length);
    let randomLocus = Math.floor(Math.random()*locusOfObject.length);
    let randomProblem = Math.floor(Math.random()*psychoanalyticWords.length);
    let randomParent = Math.floor(Math.random()*2);
    console.log(`You seem to suffer from ${personalityTypes[randomPersonalityType]} ${locusOfObject[randomLocus]} ${psychoanalyticWords[randomProblem]} based on my thorough analysis. 
    It all seems to stem from your ${mamaOrPapa[randomParent]}.`);
}

randomDiagnosisGenerator();