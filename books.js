/* Book data.
   SETS: one entry per set (color + what it practices).
   BOOKS["set-book"] = { t: title, cover: page number to use as the cover picture, pages: [[text, scene], ...] }
   Scenes are drawn by art.js (see the notes at the top of that file).
   Set 1 uses the "First words" list from Sight Word Stars plus short-a words. */

var SETS = [
  { n: 1, name: "Red", c: "#e5484d", focus: "First sight words and short a", words: "I am a the and is it my see can we me in on go up yes no big run hop sit sat cat hat mat dog van sun kid dip Mom Dad" },
  { n: 2, name: "Green", c: "#2eb67d", focus: "Short i and short o, plus look, come, play, here, you, said" },
  { n: 3, name: "Blue", c: "#3b82f6", focus: "Short e and short u, plus he, she, they, was, are, have" },
  { n: 4, name: "Orange", c: "#f97316", focus: "All the short vowels, two sentences a page" },
  { n: 5, name: "Purple", c: "#8b5cf6", focus: "Ending sounds: -nd, -st, -mp, -ng, -nk" },
  { n: 6, name: "Yellow", c: "#e0a800", focus: "Beginning blends: fl, fr, gr, cl, sl, st, sw, tr" },
  { n: 7, name: "Pink", c: "#ec4899", focus: "sh, ch, th, wh, and ck" },
  { n: 8, name: "Teal", c: "#14b8a6", focus: "Silent e: cake, bike, home, cute" },
  { n: 9, name: "Brown", c: "#a0632d", focus: "Vowel teams: rain, sheep, boat, moon, read" },
  { n: 10, name: "Rainbow", c: "#7c3aed", bg: "linear-gradient(135deg,#e5484d,#f97316,#e0a800,#2eb67d,#3b82f6,#8b5cf6)", focus: "Bossy r (car, bird, corn) and longer stories" },
  { n: 11, name: "Red Stripes", c: "#e5484d", bg: "repeating-linear-gradient(45deg,#e5484d 0 12px,#f2777b 12px 24px)", focus: "Review of Sets 1-10 with longer sentences" },
  { n: 12, name: "Green Dots", c: "#2eb67d", bg: "radial-gradient(circle,rgba(255,255,255,.4) 0 4px,transparent 5px) 0 0/20px 20px,#2eb67d", focus: "Endings -ing and -ed (jumping, jumped)" },
  { n: 13, name: "Blue Checks", c: "#3b82f6", bg: "repeating-conic-gradient(#3b82f6 0 25%,#6aa1f9 0 50%) 0 0/28px 28px", focus: "Vowel teams ou, ow, oi, oy, au, aw" },
  { n: 14, name: "Orange Plaid", c: "#f97316", bg: "repeating-linear-gradient(0deg,rgba(255,255,255,.2) 0 6px,transparent 6px 22px),repeating-linear-gradient(90deg,rgba(255,255,255,.2) 0 6px,transparent 6px 22px),#f97316", focus: "Two-syllable words (picnic, basket, rabbit)" },
  { n: 15, name: "Purple Polka Dots", c: "#8b5cf6", bg: "radial-gradient(circle,rgba(255,255,255,.35) 0 7px,transparent 8px) 0 0/30px 30px,#8b5cf6", focus: "Soft c and g, -dge and -tch (ice, giant, fudge, catch)" },
  { n: 16, name: "Yellow Stripes", c: "#e0a800", bg: "repeating-linear-gradient(0deg,#e0a800 0 12px,#f2c230 12px 24px)", focus: "Plurals and -er, -est (bigger, biggest)" },
  { n: 17, name: "Pink Zebra", c: "#ec4899", bg: "repeating-linear-gradient(-45deg,#ec4899 0 14px,#1f1f1f 14px 19px,#ffffff 19px 23px,#1f1f1f 23px 28px)", focus: "Tricky words: because, friend, again, laugh, would, could" },
  { n: 18, name: "Teal Checks", c: "#14b8a6", bg: "repeating-conic-gradient(#14b8a6 0 25%,#3fd0bf 0 50%) 0 0/20px 20px", focus: "Contractions (can't, it's, I'm, we're)" },
  { n: 19, name: "Brown Plaid", c: "#a0632d", bg: "repeating-linear-gradient(0deg,rgba(255,255,255,.18) 0 5px,transparent 5px 20px),repeating-linear-gradient(90deg,rgba(255,255,255,.18) 0 5px,transparent 5px 20px),#a0632d", focus: "Chapter books with three short chapters" },
  { n: 20, name: "Rainbow Stripes", c: "#7c3aed", bg: "repeating-linear-gradient(90deg,#e5484d 0 20px,#f97316 20px 40px,#e0a800 40px 60px,#2eb67d 60px 80px,#3b82f6 80px 100px,#8b5cf6 100px 120px)", focus: "Big finale stories" }
];

var BOOKS = {
  /* ===================== SET 1 (RED) ===================== */
  "1-1": { t: "I Am Emerson", cover: 12, pages: [
    ["Emerson.", { bg: "out", i: [["flower", 80], ["flower", 320, { c: "#ffd23f" }], ["E", 200, { pose: "wave", s: 1.3 }]] }],
    ["I am Emerson.", { bg: "out", i: [["sun", 340], ["E", 200, { pose: "up", mood: "big", s: 1.3 }]] }],
    ["Olivia.", { bg: "out", i: [["tree", 70], ["O", 200, { pose: "wave", s: 1.2 }]] }],
    ["I am Olivia.", { bg: "out", i: [["O", 200, { pose: "up", mood: "big", s: 1.2 }], ["flower", 320]] }],
    ["Lauren.", { bg: "out", i: [["tree", 330], ["L", 200, { pose: "wave", s: 1.1 }]] }],
    ["I am Lauren.", { bg: "out", i: [["L", 200, { pose: "up", mood: "big", s: 1.1 }], ["flower", 90, { c: "#9b6bff" }]] }],
    ["A cat.", { bg: "room", i: [["dexter", 200, { s: 1.8 }]] }],
    ["I am Dexter.", { bg: "room", i: [["dexter", 200, { s: 2.4, y: 228 }], ["heart", 262, { y: 95 }]] }],
    ["A cat.", { bg: "room", i: [["leo", 200, { s: 1.8 }]] }],
    ["I am Leo.", { bg: "room", i: [["leo", 200, { s: 2.4, y: 228 }], ["heart", 140, { y: 95 }]] }],
    ["Emerson, Olivia, Lauren.", { bg: "out", i: [["L", 120, { pose: "wave" }], ["O", 200, { pose: "wave" }], ["E", 280, { pose: "wave" }]] }],
    ["Emerson, Olivia, Lauren, Dexter, and Leo!", { bg: "out", i: [["spark"], ["L", 80, { pose: "up", mood: "big" }], ["O", 150, { pose: "up", mood: "big" }], ["E", 220, { pose: "up", mood: "big" }], ["dexter", 290, { pose: "hop" }], ["leo", 350, { pose: "hop" }]] }]
  ] },

  "1-2": { t: "The Cat Sat", cover: 4, pages: [
    ["The cat.", { bg: "room", i: [["dexter", 200, { s: 1.8 }]] }],
    ["The mat.", { bg: "room", i: [["mat", 200, { s: 2 }]] }],
    ["The cat sat.", { bg: "room", i: [["dexter", 200, { s: 1.7 }]] }],
    ["The cat sat on the mat.", { bg: "room", i: [["mat", 200, { s: 2 }], ["dexter", 200, { s: 1.6, y: 208 }]] }],
    ["Emerson sat.", { bg: "room", i: [["E", 200, { pose: "sit", s: 1.3 }]] }],
    ["Emerson sat on the mat.", { bg: "room", i: [["mat", 200, { s: 2 }], ["E", 200, { pose: "sit", s: 1.3, y: 208 }]] }],
    ["The cat sat on Emerson!", { bg: "room", i: [["mat", 200, { s: 2 }], ["E", 200, { pose: "sit", s: 1.3, y: 208, mood: "big" }], ["dexter", 205, { s: 1.05, y: 216 }]] }],
    ["Olivia sat on the mat.", { bg: "room", i: [["mat", 200, { s: 2 }], ["O", 200, { pose: "sit", s: 1.15, y: 208 }]] }],
    ["Lauren sat on the mat.", { bg: "room", i: [["mat", 200, { s: 2 }], ["L", 200, { pose: "sit", s: 1.05, y: 208 }]] }],
    ["The cat sat on Lauren!", { bg: "room", i: [["mat", 200, { s: 2 }], ["L", 200, { pose: "sit", s: 1.05, y: 208, mood: "big" }], ["dexter", 205, { s: 1.05, y: 216 }]] }],
    ["We sat on the mat.", { bg: "room", i: [["mat", 200, { s: 3.6 }], ["L", 120, { pose: "sit", y: 208 }], ["O", 200, { pose: "sit", y: 208 }], ["E", 280, { pose: "sit", y: 208, mood: "big" }], ["dexter", 345, { pose: "sleep", y: 232 }]] }]
  ] },

  "1-3": { t: "The Red Hat", cover: 6, pages: [
    ["A hat.", { bg: "out", i: [["hat", 200, { s: 2 }]] }],
    ["A red hat.", { bg: "out", i: [["flower", 90], ["flower", 320, { c: "#ffd23f" }], ["hat", 200, { s: 2.6 }]] }],
    ["I see a red hat.", { bg: "out", i: [["E", 140, { pose: "point", s: 1.2 }], ["hat", 285, { s: 1.6 }]] }],
    ["It is a big red hat.", { bg: "out", i: [["hat", 200, { s: 4 }]] }],
    ["Is it my hat?", { bg: "out", i: [["E", 150, { s: 1.2, mood: "wow" }], ["hat", 280, { s: 1.6 }], ["q", 192, { y: 112 }]] }],
    ["Yes! It is my hat.", { bg: "out", i: [["spark"], ["E", 200, { s: 1.3, pose: "up", mood: "big", hat: "#e5484d" }]] }],
    ["A dog.", { bg: "out", i: [["tree", 330, { s: .8 }], ["dog", 200, { s: 1.8 }]] }],
    ["My hat is on the dog!", { bg: "out", i: [["E", 120, { s: 1.2, mood: "wow" }], ["dog", 270, { s: 1.6, hat: 1 }]] }],
    ["No, dog, no!", { bg: "out", i: [["E", 120, { s: 1.2, pose: "point", mood: "sad" }], ["dog", 280, { s: 1.6, hat: 1, mood: "sad" }]] }],
    ["It is my red hat.", { bg: "out", i: [["E", 165, { s: 1.3, pose: "wave", mood: "big", hat: "#e5484d" }], ["dog", 285, { s: 1.4 }]] }]
  ] },

  "1-4": { t: "The Big Dog", cover: 7, pages: [
    ["A dog.", { bg: "out", i: [["dog", 200, { s: 1.6 }]] }],
    ["A big dog.", { bg: "out", i: [["dog", 200, { s: 3 }]] }],
    ["The big dog can run.", { bg: "out", i: [["dog", 210, { s: 2.2, pose: "run" }]] }],
    ["Lauren can run.", { bg: "out", i: [["tree", 340, { s: .8 }], ["L", 200, { pose: "run", s: 1.1 }]] }],
    ["Olivia can run.", { bg: "out", i: [["tree", 70, { s: .8 }], ["O", 200, { pose: "run", s: 1.15 }]] }],
    ["Emerson can run.", { bg: "out", i: [["flower", 320], ["E", 200, { pose: "run", s: 1.3 }]] }],
    ["The big dog can run and run!", { bg: "out", i: [["L", 75, { pose: "run", s: .9 }], ["O", 150, { pose: "run", s: .9 }], ["E", 220, { pose: "run", s: .9 }], ["dog", 315, { pose: "run", s: 1.5 }]] }],
    ["Lauren sat.", { bg: "out", i: [["L", 200, { pose: "sit", s: 1.15 }]] }],
    ["Olivia sat.", { bg: "out", i: [["O", 200, { pose: "sit", s: 1.2 }]] }],
    ["Emerson sat.", { bg: "out", i: [["E", 200, { pose: "sit", s: 1.3 }]] }],
    ["The big dog sat on Emerson!", { bg: "out", i: [["E", 188, { pose: "sit", s: 1.3, mood: "big" }], ["dog", 226, { s: 1.5, y: 228 }]] }],
    ["The big dog and me!",{ bg: "out", i: [["heart", 200, { y: 70 }], ["heart", 238, { y: 48, s: .7 }], ["E", 150, { s: 1.3, mood: "big" }], ["dog", 255, { s: 1.8 }]] }]
  ] },

  "1-5": { t: "Hop, Hop, Hop", cover: 10, pages: [
    ["I can hop.", { bg: "out", i: [["E", 200, { pose: "hop", s: 1.3 }]] }],
    ["Hop, hop, hop!", { bg: "out", i: [["hops", 300, { y: 214 }], ["E", 310, { pose: "hop", s: 1.2, lift: 26 }]] }],
    ["Olivia can hop.", { bg: "out", i: [["O", 200, { pose: "hop", s: 1.2 }]] }],
    ["Lauren can hop up!", { bg: "out", i: [["L", 200, { pose: "hop", s: 1.1, lift: 45 }]] }],
    ["The cat can hop.", { bg: "out", i: [["dexter", 200, { pose: "hop", s: 1.8 }]] }],
    ["The cat can hop up!", { bg: "out", i: [["dexter", 200, { pose: "hop", s: 1.8, lift: 42 }]] }],
    ["Can the dog hop?", { bg: "out", i: [["dog", 200, { s: 1.8 }], ["q", 268, { y: 110 }]] }],
    ["Yes! The dog can hop.", { bg: "out", i: [["dog", 200, { s: 1.8, pose: "hop", lift: 22 }]] }],
    ["We can hop.", { bg: "out", i: [["L", 110, { pose: "hop" }], ["O", 200, { pose: "hop", lift: 26 }], ["E", 290, { pose: "hop" }]] }],
    ["Hop, hop, hop! We hop up!", { bg: "out", i: [["spark"], ["L", 75, { pose: "hop", lift: 30, mood: "big" }], ["O", 150, { pose: "hop", lift: 20, mood: "big" }], ["E", 225, { pose: "hop", lift: 30, mood: "big" }], ["dog", 300, { pose: "hop", s: 1 }], ["dexter", 370, { pose: "hop", s: .9 }]] }]
  ] },

  "1-6": { t: "Mom and Dad", cover: 8, pages: [
    ["Mom.", { bg: "out", i: [["flower", 80], ["flower", 320, { c: "#ffd23f" }], ["M", 200, { pose: "wave" }]] }],
    ["Dad.", { bg: "out", i: [["tree", 340, { s: .8 }], ["D", 200, { pose: "wave" }]] }],
    ["Mom and Dad.", { bg: "out", i: [["heart", 200, { y: 52 }], ["M", 160, { pose: "wave" }], ["D", 240, { pose: "wave", flip: 1 }]] }],
    ["Mom and me.", { bg: "out", i: [["heart", 200, { y: 64 }], ["M", 165], ["E", 240, { pose: "up", mood: "big" }]] }],
    ["Dad and me.", { bg: "out", i: [["D", 165], ["E", 245, { pose: "hop", mood: "big" }]] }],
    ["Mom, Dad, and me.", { bg: "out", i: [["M", 120], ["E", 200, { mood: "big", pose: "up" }], ["D", 280]] }],
    ["Olivia and Lauren.", { bg: "out", i: [["O", 165, { pose: "wave" }], ["L", 240, { pose: "wave", flip: 1 }]] }],
    ["Mom, Dad, Olivia, Lauren, and me!", { bg: "out", i: [["D", 65], ["M", 135], ["L", 205, { pose: "wave" }], ["O", 272, { pose: "wave" }], ["E", 338, { pose: "up", mood: "big" }]] }],
    ["And Dexter!", { bg: "room", i: [["dexter", 200, { s: 2.2 }]] }],
    ["And Leo!", { bg: "room", i: [["leo", 200, { s: 2.2 }]] }],
    ["Mom and Dad and me!", { bg: "out", i: [["spark", 0, { seed: 11 }], ["D", 50], ["M", 112], ["L", 174], ["O", 232], ["E", 285, { pose: "up", mood: "big" }], ["dexter", 335, { s: .9 }], ["leo", 375, { s: .9 }]] }]
  ] },

  "1-7": { t: "In the Van", cover: 11, pages: [
    ["A van.", { bg: "out", i: [["van", 200]] }],
    ["A red van.", { bg: "out", i: [["tree", 360, { s: .7 }], ["van", 190, { s: 1.3 }]] }],
    ["Dad is in the van.", { bg: "out", i: [["van", 200, { s: 1.3, who: ["D"] }]] }],
    ["Mom is in the van.", { bg: "out", i: [["van", 200, { s: 1.3, who: ["D", "M"] }]] }],
    ["Lauren is in the van.", { bg: "out", i: [["van", 200, { s: 1.3, who: ["D", "M", "L"] }]] }],
    ["Olivia is in the van.", { bg: "out", i: [["van", 200, { s: 1.3, who: ["D", "M", "L", "O"] }]] }],
    ["Is Dexter in the van?", { bg: "out", i: [["van", 160, { s: 1.2, who: ["D", "M", "L", "O"] }], ["dexter", 345, { s: 1.4 }], ["q", 345, { y: 125 }]] }],
    ["Yes! Dexter is in the van.", { bg: "out", i: [["van", 200, { s: 1.3, who: ["D", "M", "L", "O", "dexter"] }]] }],
    ["Is Emerson in the van?", { bg: "out", i: [["van", 160, { s: 1.2, who: ["D", "M", "L", "O", "dexter"] }], ["E", 345, { mood: "wow" }], ["q", 345, { y: 118 }]] }],
    ["Yes! Emerson is in the van.", { bg: "out", i: [["van", 200, { s: 1.3, who: ["D", "M", "L", "O", "E", "dexter"] }]] }],
    ["We go!", { bg: "out", i: [["van", 215, { s: 1.3, who: ["D", "M", "L", "O", "E", "dexter"], go: 1 }]] }],
    ["Go, van, go!", { bg: "out", i: [["tree", 50, { s: .7 }], ["van", 240, { s: 1.2, who: ["D", "M", "L", "O", "E", "dexter"], go: 1 }]] }]
  ] },

  "1-8": { t: "The Sun", cover: 4, pages: [
    ["The sun.", { bg: "out", i: [["sun", 200, { y: 105, s: 2.2, face: 1 }]] }],
    ["I see the sun.", { bg: "out", i: [["sun", 320, { y: 60, face: 1 }], ["E", 170, { pose: "wave", s: 1.3 }]] }],
    ["It is a big sun.", { bg: "out", i: [["sun", 200, { y: 100, s: 2.7, face: 1 }]] }],
    ["We sit in the sun.", { bg: "out", i: [["sun", 335, { y: 55 }], ["L", 110, { pose: "sit" }], ["O", 190, { pose: "sit" }], ["E", 265, { pose: "sit", mood: "big" }]] }],
    ["The cat sat in the sun.", { bg: "out", i: [["sun", 320, { y: 55 }], ["leo", 190, { pose: "sleep", s: 2 }]] }],
    ["The dog sat in the sun.", { bg: "out", i: [["sun", 80, { y: 55 }], ["dog", 220, { s: 1.9 }]] }],
    ["We can run in the sun.", { bg: "out", i: [["sun", 345, { y: 50 }], ["L", 90, { pose: "run" }], ["O", 180, { pose: "run" }], ["E", 265, { pose: "run" }]] }],
    ["We can hop in the sun.", { bg: "out", i: [["sun", 60, { y: 50 }], ["L", 140, { pose: "hop" }], ["O", 220, { pose: "hop", lift: 28 }], ["E", 300, { pose: "hop" }]] }],
    ["The sun is red.", { bg: "sunset", i: [["sun", 200, { y: 92, s: 1.6, c: "#ff5a3c" }]] }],
    ["The sun can go down.", { bg: "sunset", sunY: 178, i: [] }],
    ["I see the sun go down.", { bg: "sunset", sunY: 196, i: [["L", 120, { pose: "sit" }], ["O", 200, { pose: "sit" }], ["E", 280, { pose: "sit" }]] }]
  ] },

  "1-9": { t: "Dip In!", cover: 8, pages: [
    ["Lauren is a big kid.", { bg: "beach", i: [["L", 200, { s: 1.2, pose: "wave", y: 232 }]] }],
    ["Olivia is a big kid.", { bg: "beach", i: [["O", 200, { s: 1.25, pose: "wave", y: 232 }]] }],
    ["Emerson is a little kid.", { bg: "beach", i: [["L", 150, { s: 1.1, y: 232 }], ["E", 250, { s: 1.1, mood: "big", y: 232 }]] }],
    ["Lauren can dip in.", { bg: "beach", i: [["L", 200, { wade: 1, pose: "up", mood: "big", s: 1.1 }], ["splash", 200, { y: 172 }]] }],
    ["Olivia can dip in.", { bg: "beach", i: [["O", 200, { wade: 1, pose: "up", mood: "big", s: 1.15 }], ["splash", 200, { y: 172 }]] }],
    ["Can Emerson dip in?", { bg: "beach", i: [["L", 90, { wade: 1, pose: "wave" }], ["O", 170, { wade: 1, pose: "wave" }], ["E", 300, { mood: "wow", s: 1.1, y: 235 }], ["q", 300, { y: 125 }]] }],
    ["Yes! Emerson can dip in!", { bg: "beach", i: [["E", 200, { wade: 1, pose: "up", mood: "big", s: 1.3 }], ["splash", 200, { y: 172 }]] }],
    ["Dip, dip, dip!", { bg: "beach", i: [["L", 110, { wade: 1, pose: "up", mood: "big" }], ["O", 200, { wade: 1, pose: "up", mood: "big" }], ["E", 290, { wade: 1, pose: "up", mood: "big" }], ["splash", 110, { y: 172 }], ["splash", 200, { y: 172 }], ["splash", 290, { y: 172 }]] }],
    ["The dog can dip in.", { bg: "beach", i: [["dog", 200, { wade: 1, s: 1.6, pose: "run" }], ["splash", 230, { y: 172 }]] }],
    ["The cat? No, no, no!", { bg: "beach", i: [["dexter", 200, { s: 2, mood: "grumpy", y: 238 }], ["q", 255, { y: 120, t: "!" }]] }],
    ["The cat can sit and see.", { bg: "beach", i: [["L", 80, { wade: 1, pose: "wave" }], ["O", 160, { wade: 1, pose: "up" }], ["E", 235, { wade: 1, pose: "up", mood: "big" }], ["dog", 305, { wade: 1, s: .9 }], ["dexter", 335, { y: 242, s: 1.3 }]] }]
  ] },

  "1-10": { t: "I Can Read!", cover: 10, pages: [
    ["I am Emerson.", { bg: "room", i: [["E", 200, { pose: "wave", s: 1.35 }]] }],
    ["I am a big kid!", { bg: "room", i: [["spark"], ["E", 200, { pose: "up", mood: "big", s: 1.45 }]] }],
    ["I can run.", { bg: "out", i: [["E", 190, { pose: "run", s: 1.3 }], ["dog", 320, { pose: "run" }]] }],
    ["I can hop.", { bg: "out", i: [["hops", 260, { y: 214 }], ["E", 270, { pose: "hop", s: 1.2, lift: 26 }]] }],
    ["I can sit.", { bg: "room", i: [["mat", 200, { s: 2.4 }], ["E", 180, { pose: "sit", s: 1.3, y: 208 }], ["dexter", 262, { pose: "sleep", s: 1.1, y: 210 }]] }],
    ["I can dip in.", { bg: "beach", i: [["E", 200, { wade: 1, pose: "up", mood: "big", s: 1.3 }], ["splash", 200, { y: 172 }]] }],
    ["I can see a red hat.", { bg: "out", i: [["E", 140, { pose: "point", s: 1.2 }], ["hat", 285, { s: 1.6 }]] }],
    ["I can go up, up, up!", { bg: "out", i: [["E", 200, { pose: "hop", s: 1.15, lift: 62, mood: "big" }]] }],
    ["Can I read?", { bg: "room", i: [["E", 200, { pose: "book", s: 1.4, mood: "wow" }], ["q", 262, { y: 84 }]] }],
    ["Yes! I can read!", { bg: "room", i: [["spark"], ["E", 200, { pose: "book", s: 1.4, mood: "big" }]] }],
    ["We can read!", { bg: "room", i: [["spark", 0, { seed: 5 }], ["M", 55], ["L", 135, { pose: "book", bc: "#1fb5a3" }], ["O", 212, { pose: "book", bc: "#9b6bff" }], ["E", 285, { pose: "book", mood: "big" }], ["D", 355]] }]
  ] }
};
