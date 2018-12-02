var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#Julia-Advent-Of-Code-1",
    "page": "Home",
    "title": "Julia Advent Of Code",
    "category": "section",
    "text": "Using the Advent of Code as an excuse to (finally) learn Julia."
},

{
    "location": "#Usage-1",
    "page": "Home",
    "title": "Usage",
    "category": "section",
    "text": "How to run the solutions, presumably from command line.\nHow to fetch your own inputs (-> learn http queries etc)\n..."
},

{
    "location": "#Tools-1",
    "page": "Home",
    "title": "Tools",
    "category": "section",
    "text": "Example.jl: project structure template.\nDocumenter.jl: documentation generator."
},

{
    "location": "#Disclaimer-1",
    "page": "Home",
    "title": "Disclaimer",
    "category": "section",
    "text": "I may present solutions that I\'ve found elsewhere on the web (with proper attribution, of course): while I certainly enjoy the puzzle-solving aspect, my primary goal is to get my hands dirty in Julia, and build a cheat-sheet repo for future projects."
},

{
    "location": "2018/day01/#",
    "page": "Day 1: Chronal Calibration",
    "title": "Day 1: Chronal Calibration",
    "category": "page",
    "text": ""
},

{
    "location": "2018/day01/#Day-1:-Chronal-Calibration-1",
    "page": "Day 1: Chronal Calibration",
    "title": "Day 1: Chronal Calibration",
    "category": "section",
    "text": "Jump to part one or part two of the solution."
},

{
    "location": "2018/day01/#Part-One-1",
    "page": "Day 1: Chronal Calibration",
    "title": "Part One",
    "category": "section",
    "text": "\"We\'ve detected some temporal anomalies,\" one of Santa\'s Elves at the Temporal Anomaly Research and Detection Instrument Station tells you. She sounded pretty worried when she called you down here. \"At 500-year intervals into the past, someone has been changing Santa\'s history!\"\"The good news is that the changes won\'t propagate to our time stream for another 25 days, and we have a device\" - she attaches something to your wrist - \"that will let you fix the changes with no such propagation delay. It\'s configured to send you 500 years further into the past every few days; that was the best we could do on such short notice.\"\"The bad news is that we are detecting roughly fifty anomalies throughout time; the device will indicate fixed anomalies with stars. The other bad news is that we only have one device and you\'re the best person for the job! Good lu–\" She taps a button on the device and you suddenly feel like you\'re falling. To save Christmas, you need to get all fifty stars by December 25th.Collect stars by solving puzzles. Two puzzles will be made available on each day in the advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!After feeling like you\'ve been falling for a few minutes, you look at the device\'s tiny screen. \"Error: Device must be calibrated before first use. Frequency drift detected. Cannot maintain destination lock.\" Below the message, the device shows a sequence of changes in frequency (your puzzle input). A value like +6 means the current frequency increases by 6; a value like -3 means the current frequency decreases by 3.For example, if the device displays frequency changes of +1, -2, +3, +1, then starting from a frequency of zero, the following changes would occur:Current frequency  0, change of +1; resulting frequency  1.\nCurrent frequency  1, change of -2; resulting frequency -1.\nCurrent frequency -1, change of +3; resulting frequency  2.\nCurrent frequency  2, change of +1; resulting frequency  3.In this example, the resulting frequency is 3.Here are other example situations:+1, +1, +1 results in  3\n+1, +1, -2 results in  0\n-1, -2, -3 results in -6Starting with a frequency of zero, what is the resulting frequency after all of the changes in frequency have been applied?"
},

{
    "location": "2018/day01/#Part-One-Solution-1",
    "page": "Day 1: Chronal Calibration",
    "title": "Part One Solution",
    "category": "section",
    "text": "Iunno."
},

{
    "location": "2018/day01/#Part-Two-1",
    "page": "Day 1: Chronal Calibration",
    "title": "Part Two",
    "category": "section",
    "text": "You notice that the device repeats the same frequency change list over and over. To calibrate the device, you need to find the first frequency it reaches twice.For example, using the same list of changes above, the device would loop as follows:Current frequency  1, change of -2; resulting frequency -1.\nCurrent frequency -1, change of +3; resulting frequency  2.\nCurrent frequency  2, change of +1; resulting frequency  3.\n(At this point, the device continues from the start of the list.)\nCurrent frequency  3, change of +1; resulting frequency  4.\nCurrent frequency  4, change of -2; resulting frequency  2, which has already been seen.In this example, the first frequency reached twice is 2. Note that your device might need to repeat its list of frequency changes many times before a duplicate frequency is found, and that duplicates might be found while in the middle of processing the list.Here are other examples:+1, -1 first reaches 0 twice.\n+3, +3, +4, -2, -4 first reaches 10 twice.\n-6, +3, +8, +5, -6 first reaches 5 twice.\n+7, +7, -2, -7, -4 first reaches 14 twice.What is the first frequency your device reaches twice?"
},

{
    "location": "2018/day01/#Part-Two-Solution-1",
    "page": "Day 1: Chronal Calibration",
    "title": "Part Two Solution",
    "category": "section",
    "text": "Still don\'t know."
},

{
    "location": "2018/day02/#",
    "page": "Day 2",
    "title": "Day 2",
    "category": "page",
    "text": ""
},

{
    "location": "2018/day02/#Day-2-1",
    "page": "Day 2",
    "title": "Day 2",
    "category": "section",
    "text": "Jump to part one or part two of the solution."
},

{
    "location": "2018/day02/#Part-One-1",
    "page": "Day 2",
    "title": "Part One",
    "category": "section",
    "text": ""
},

{
    "location": "2018/day02/#Part-One-Solution-1",
    "page": "Day 2",
    "title": "Part One Solution",
    "category": "section",
    "text": "Iunno."
},

{
    "location": "2018/day02/#Part-Two-1",
    "page": "Day 2",
    "title": "Part Two",
    "category": "section",
    "text": ""
},

{
    "location": "2018/day02/#Part-Two-Solution-1",
    "page": "Day 2",
    "title": "Part Two Solution",
    "category": "section",
    "text": "Still don\'t know."
},

{
    "location": "2019/#",
    "page": "2019",
    "title": "2019",
    "category": "page",
    "text": ""
},

{
    "location": "2019/#Solutions-1",
    "page": "2019",
    "title": "2019 Solutions",
    "category": "section",
    "text": "But of course I will be participating next year..."
},

]}
