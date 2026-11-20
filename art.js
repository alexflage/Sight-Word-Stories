/* Story Stars illustration engine.

   A scene can be an object  {bg:"out", i:[["E",200,{pose:"wave"}], ["dexter",300]]}
   or a short string         "out; E 200 wave; dexter 300 sleep"
   String format: first part is the background (plus optional sunNNN for a setting sun),
   then one item per ";":  type x  [flags...]
     numbers        -> x position (0-400; scene is 400 x 250, ground at y=215)
     pose words     -> stand wave up hop point run sit book kick eat hold hug ride sleep
     mood words     -> happy big wow sad grumpy
     s1.4           -> size      y180 -> y position     l30 -> hop height    r90 -> rotate
     #ff6fae        -> main color (shirt/dress for people)
     key:value      -> e.g. who:D,M,E (van, bus, bed, boat, tractor, bike)  hold:apple  hat:#e5484d  t:Hi  n:3  bc:#9b6bff
     any other word -> true flag, e.g. wade, flip, go, face, hot, bigHat, ears

   People:  E Emerson, O Olivia, L Lauren, M Mom, D Dad, Mark, Becky, Lon, Lyn (Grandma Lynette)
   Cats:    dexter (blue collar), leo (green collar), cat.   Dog: dog
*/
var ART = (function () {
  var SK = "#f9d3b4", INK = "#3b2f2f", BL = "#f7d35f", BL2 = "#d6a62c", CH = "#ff8fa3", GY = 215, BR = "#8a5a2b", BR2 = "#6b4423";
  var P = {
    E: { s: .84, hair: "pig", hc: BL, hd: BL2, top: "#ff6fae", tie: "#e83e8c", bot: "dress", shoe: "#c2185b" },
    O: { s: 1.0, hair: "pony", hc: BL, hd: BL2, top: "#9b6bff", tie: "#6a3fe0", bot: "dress", shoe: "#5b3cc4" },
    L: { s: 1.15, hair: "long", hc: BL, hd: BL2, top: "#1fb5a3", bot: "pants", pc: "#35548f", shoe: "#2d2d2d" },
    M: { s: 1.32, hair: "long", hc: "#f3d36e", hd: "#d4ab3c", top: "#ff8a5c", bot: "dress", shoe: "#7a3b1d", eye: "#3b82f6" },
    D: { s: 1.42, hair: "dad", hc: "#ecc85e", hd: "#c9a23a", top: "#4a90d9", bot: "pants", pc: "#3d3d55", shoe: "#2d2d2d", eye: "#3b82f6" },
    Mark: { s: 1.38, hair: "dad", hc: BR, hd: BR2, top: "#d9534f", bot: "overalls", pc: "#4a6fa5", shoe: "#5a3a1a", hat0: "straw" },
    Becky: { s: 1.28, hair: "bun", hc: BR, hd: BR2, top: "#8e6bbf", bot: "dress", shoe: "#4a3a6a" },
    Lon: { s: 1.36, hair: "dad", hc: BR, hd: BR2, top: "#5aa05a", bot: "pants", pc: "#8a6a42", shoe: "#4a3018", hat0: "sun" },
    Lyn: { s: 1.28, hair: "mom", hc: "#f3d36e", hd: "#d4ab3c", top: "#ff6f91", bot: "dress", shoe: "#9b2c55" },
    Ollie: { s: .6, hair: "curly", hc: BL, hd: BL2, top: "#4fb3e8", bot: "pants", pc: "#3d5a98", shoe: "#333" },
    Ramsey: { s: .8, hair: "long", hc: "#c8502a", hd: "#9c3a1c", top: "#2eb67d", bot: "dress", shoe: "#1f7a52" },
    Summer: { s: .6, hair: "bob", hc: "#f7e08a", hd: BL2, top: "#ffcf33", bot: "dress", shoe: "#e08a00" },
    Avery: { s: .86, hair: "pony", hc: "#6b4423", hd: "#4e3018", top: "#3b82f6", tie: "#1d4ed8", bot: "dress", shoe: "#1d4ed8" },
    Crickett: { s: .86, hair: "pig", hc: "#2b1d14", hd: "#000", top: "#ff8a5c", tie: "#e5484d", bot: "dress", shoe: "#c2410c" },
    Hulla: { s: 1.3, hair: "bun", hc: "#8a5a2b", hd: "#6b4423", top: "#e0a800", bot: "dress", shoe: "#7a3b1d" },
    Elder: { s: 1.22, hair: "bun", hc: "#f4f4f4", hd: "#c9c9c9", top: "#a78bfa", bot: "dress", shoe: "#555" }
  };
  var CATS = {
    cat: { c: "#f39237", d: "#d06a14" },
    dexter: { c: "#ef8420", d: "#b9590a", col: "#3b82f6" },
    leo: { c: "#f8b462", d: "#d98a2b", col: "#2eb67d", white: 1 }
  };
  function n(v) { return Math.round(v * 10) / 10; }
  function wrap(x, y, s, flip, g) { return '<g transform="translate(' + n(x) + ',' + n(y) + ') scale(' + (flip ? -s : s) + ',' + s + ')">' + g + '</g>'; }
  function shadow(rx) { return '<ellipse cx="0" cy="0" rx="' + rx + '" ry="3.5" fill="#000" opacity=".13"/>'; }
  function seeded(sd) { return function () { sd = (sd * 9301 + 49297) % 233280; return sd / 233280; }; }
  var MOTION = '<path d="M-30 -66 h-16 M-32 -50 h-22 M-30 -34 h-14" stroke="#7d8ca3" stroke-width="2.5" stroke-linecap="round" opacity=".6"/>';
  var TICKS = '<path d="M-12 6 l-3 6 M0 8 v7 M12 6 l3 6" stroke="#7d8ca3" stroke-width="2" stroke-linecap="round" opacity=".6"/>';
  var CONF = ["#ff5d8f", "#ffcf33", "#4fb3e8", "#2eb67d", "#9b6bff", "#ff8a5c"];

  function hatShape(c) {
    return '<ellipse cx="0" cy="0" rx="22" ry="5" fill="' + c + '"/><path d="M-12 -1 Q-13 -21 0 -21 Q13 -21 12 -1 Z" fill="' + c + '"/><rect x="-12" y="-7" width="24" height="4" fill="#000" opacity=".2"/>';
  }
  var STRAW = '<ellipse cx="0" cy="-12" rx="27" ry="5.5" fill="#e8c872" stroke="#c9a54a"/><path d="M-13 -12 Q-13 -29 0 -29 Q13 -29 13 -12 Z" fill="#e8c872" stroke="#c9a54a"/><rect x="-13" y="-17" width="26" height="4" fill="#c0392b"/>';
  var SUNHAT = '<ellipse cx="0" cy="-12" rx="24" ry="5" fill="#9cbf6a"/><path d="M-13 -12 Q-13 -27 0 -27 Q13 -27 13 -12 Z" fill="#9cbf6a"/><rect x="-13" y="-16" width="26" height="3" fill="#5a8a3a"/>';

  /* ---------- people ---------- */
  function head(k, o, part) {
    var p = P[k], c = p.hc, d = p.hd, h = "", st = ' stroke="' + d + '" stroke-width="1"', m = o.mood || "happy";
    if (part !== "front") {
      if (p.hair === "long") h += '<path d="M-17 -4 Q-21 30 -15 35 L15 35 Q21 30 17 -4 Z" fill="' + c + '"' + st + '/>';
      if (p.hair === "mom") h += '<path d="M-17 -4 Q-20 18 -14 22 L14 22 Q20 18 17 -4 Z" fill="' + c + '"' + st + '/>';
      if (p.hair === "bun") h += '<circle cx="0" cy="-18" r="8" fill="' + c + '"' + st + '/>';
      if (p.hair === "bob") h += '<path d="M-18 -4 Q-20 13 -13 14 L13 14 Q20 13 18 -4 Z" fill="' + c + '"' + st + '/>';
      if (p.hair === "pony") h += '<path d="M9 -13 Q32 -16 26 18 Q22 0 11 -5 Z" fill="' + c + '"' + st + '/><circle cx="11" cy="-12" r="3.2" fill="' + p.tie + '"/>';
      if (p.hair === "pig") h += '<ellipse cx="-20" cy="3" rx="6.5" ry="10.5" fill="' + c + '"' + st + '/><ellipse cx="20" cy="3" rx="6.5" ry="10.5" fill="' + c + '"' + st + '/><circle cx="-16" cy="-5" r="2.8" fill="' + p.tie + '"/><circle cx="16" cy="-5" r="2.8" fill="' + p.tie + '"/>';
    }
    if (part !== "back") {
      h += '<circle cx="-15" cy="1" r="3.2" fill="' + SK + '"/><circle cx="15" cy="1" r="3.2" fill="' + SK + '"/><circle r="15" fill="' + SK + '"/>';
      if (m === "sleep") h += '<path d="M-7 0 Q-5 2 -3 0 M3 0 Q5 2 7 0" stroke="' + INK + '" stroke-width="1.4" fill="none"/>';
      else if (p.eye) h += '<circle cx="-5" cy="0" r="2.4" fill="' + p.eye + '"/><circle cx="5" cy="0" r="2.4" fill="' + p.eye + '"/><circle cx="-5" cy="0" r="1.1" fill="' + INK + '"/><circle cx="5" cy="0" r="1.1" fill="' + INK + '"/>';
      else h += '<circle cx="-5" cy="0" r="1.9" fill="' + INK + '"/><circle cx="5" cy="0" r="1.9" fill="' + INK + '"/>';
      if (m === "wow") h += '<path d="M-8 -5 q3 -2 5 -1 M3 -6 q3 -1 5 1" stroke="' + d + '" stroke-width="1.2" fill="none"/>';
      h += '<circle cx="-9" cy="6" r="3" fill="' + CH + '" opacity=".55"/><circle cx="9" cy="6" r="3" fill="' + CH + '" opacity=".55"/>';
      if (m === "sad") h += '<path d="M-4 10 Q0 6 4 10" stroke="' + INK + '" stroke-width="1.6" fill="none" stroke-linecap="round"/>';
      else if (m === "big") h += '<path d="M-5.5 6 Q0 14.5 5.5 6 Z" fill="#c0392b"/>';
      else if (m === "wow") h += '<ellipse cx="0" cy="8.5" rx="2.6" ry="3.2" fill="#c0392b"/>';
      else h += '<path d="M-4 6 Q0 10 4 6" stroke="' + INK + '" stroke-width="1.6" fill="none" stroke-linecap="round"/>';
      if (p.hair === "dad") h += '<path d="M-15 -3 Q-16 -18 0 -18 Q16 -18 15 -3 Q12 -11 4 -11 Q-6 -13 -15 -3 Z" fill="' + c + '"/>';
      else if (p.hair === "curly") [[-14, -4], [-12, -11], [-6, -16], [1, -18], [8, -16], [13, -11], [15, -4]].forEach(function (q) { h += '<circle cx="' + q[0] + '" cy="' + q[1] + '" r="5.5" fill="' + c + '"' + st + '/>'; });
      else h +='<path d="M-16 2 Q-18 -18 0 -18 Q18 -18 16 2 Q15 -8 7 -9 Q1 -13 -4 -9 Q-12 -9 -16 2 Z" fill="' + c + '"' + st + '/>';
      if (o.ears) h += '<path d="M-14 -10 L-11 -27 L-3 -16 Z M14 -10 L11 -27 L3 -16 Z" fill="#f59e42" stroke="#d9771a"/>';
      if (o.bunny) h += '<ellipse cx="-7" cy="-27" rx="4.5" ry="12" fill="#fff" stroke="#ddd"/><ellipse cx="7" cy="-27" rx="4.5" ry="12" fill="#fff" stroke="#ddd"/><ellipse cx="-7" cy="-27" rx="2" ry="8" fill="#ffb3c1"/><ellipse cx="7" cy="-27" rx="2" ry="8" fill="#ffb3c1"/>';
      if (o.santa) h += '<g transform="translate(0,-13)"><path d="M-14 0 Q0 -30 20 -20 L13 0 Z" fill="#e5484d"/><rect x="-16" y="-3" width="32" height="7" rx="3" fill="#fff"/><circle cx="20" cy="-20" r="4" fill="#fff"/></g>';
      if (o.witch) h += '<g transform="translate(0,-12)"><ellipse rx="25" ry="4.5" fill="#2b2b2b"/><path d="M-12 -2 L5 -38 L12 -2 Z" fill="#2b2b2b"/><rect x="-11" y="-7" width="22" height="3.5" fill="#9b6bff"/></g>';
      if (o.crown) h += '<path transform="translate(0,-15)" d="M-12 0 L-12 -12 L-6 -5 L0 -14 L6 -5 L12 -12 L12 0 Z" fill="#ffcf33" stroke="#e0a800"/>';
      if (o.cap) h += '<g transform="translate(0,-13)"><path d="M-14 0 Q-14 -16 0 -16 Q14 -16 14 0 Z" fill="' + o.cap + '"/><path d="M8 -1 L26 1 L10 3 Z" fill="' + o.cap + '"/></g>';
      if (o.hat) h += '<g transform="' + (o.bigHat ? 'translate(0,4) scale(1.5)' : 'translate(0,-13)') + '">' + hatShape(o.hat) + '</g>';
      else if (p.hat0 && !o.nohat) h += p.hat0 === "straw" ? STRAW : SUNHAT;
    }
    return h;
  }
  var HANDS = {
    stand: [[-17, -33], [17, -33]], wave: [[-17, -33], [23, -86]], up: [[-23, -86], [23, -86]], hop: [[-23, -86], [23, -86]],
    point: [[-17, -33], [34, -64]], run: [[-20, -42], [19, -48]], sit: [[-19, -36], [19, -36]], book: [[-7, -47], [7, -47]],
    kick: [[-25, -52], [24, -48]], eat: [[-17, -33], [7, -70]], hold: [[-17, -33], [22, -46]], hug: [[-12, -48], [14, -46]], ride: [[16, -52], [24, -54]]
  };
  function openBook(c) {
    return '<g transform="translate(0,-50)"><path d="M0 -6 L-17 -10 L-17 7 L0 11 Z" fill="#fff" stroke="' + c + '" stroke-width="2.5" stroke-linejoin="round"/><path d="M0 -6 L17 -10 L17 7 L0 11 Z" fill="#fff" stroke="' + c + '" stroke-width="2.5" stroke-linejoin="round"/><path d="M-13 -4 l9 2 M-13 0 l9 2 M4 -2 l9 -2 M4 2 l9 -2" stroke="#aaa" stroke-width="1"/></g>';
  }
  function person(k, x, y, o) {
    var p = P[k], pose = o.pose || (o.hold ? "hold" : "stand"), s = (o.s || 1) * p.s, top = o.c || p.top;
    var lift = pose === "hop" ? -(o.lift || 18) : 0, dy = (pose === "sit" || pose === "ride") ? 24 : 0;
    var pants = p.bot !== "dress", legc = pants ? p.pc : SK;
    function shoe(sx, sy) { return '<ellipse cx="' + sx + '" cy="' + sy + '" rx="6" ry="3.5" fill="' + p.shoe + '"/>'; }
    var g = o.noshadow ? "" : shadow(dy ? 22 : 15), low = "", up = "";
    if (pose === "run") low = '<path d="M-3 -32 L-13 -5 M3 -32 L13 -3" stroke="' + legc + '" stroke-width="6" stroke-linecap="round" fill="none"/>' + shoe(-15, -3) + shoe(15, -2);
    else if (pose === "kick") low = '<path d="M-3 -32 L-6 -4 M3 -32 L22 -18" stroke="' + legc + '" stroke-width="6" stroke-linecap="round" fill="none"/>' + shoe(-7, -2) + shoe(25, -17);
    else if (dy) low = (pants ? '<rect x="-13" y="-12" width="10" height="10" rx="3" fill="' + legc + '"/><rect x="3" y="-12" width="10" height="10" rx="3" fill="' + legc + '"/>' : '') + shoe(-8, -2) + shoe(8, -2);
    else low = '<rect x="-9" y="-33" width="6" height="30" rx="3" fill="' + legc + '"/><rect x="3" y="-33" width="6" height="30" rx="3" fill="' + legc + '"/>' + shoe(-6, -2) + shoe(6, -2);
    up += '<g transform="translate(0,-79)">' + head(k, o, "back") + '</g>';
    if (!pants) up += '<path d="M-10 -62 Q0 -66 10 -62 L19 -30 Q0 -26 -19 -30 Z" fill="' + top + '"/>';
    else {
      up += '<rect x="-12" y="-39" width="24" height="9" rx="2" fill="' + p.pc + '"/><path d="M-11 -62 Q0 -66 11 -62 L13 -36 L-13 -36 Z" fill="' + top + '"/>';
      if (p.bot === "overalls") up += '<rect x="-8" y="-55" width="16" height="19" rx="2" fill="' + p.pc + '"/><path d="M-7 -55 L-9 -63 M7 -55 L9 -63" stroke="' + p.pc + '" stroke-width="3"/>';
    }
    up += '<rect x="-3" y="-67" width="6" height="7" fill="' + SK + '"/>';
    var hd = HANDS[pose] || HANDS.stand;
    [[-10, hd[0]], [10, hd[1]]].forEach(function (a) {
      up += '<path d="M' + a[0] + ' -59 L' + a[1][0] + ' ' + a[1][1] + '" stroke="' + SK + '" stroke-width="5" stroke-linecap="round"/><circle cx="' + a[1][0] + '" cy="' + a[1][1] + '" r="3.3" fill="' + SK + '"/><circle cx="' + a[0] + '" cy="-59" r="5" fill="' + top + '"/>';
    });
    if (pose === "book") up += openBook(o.bc || "#e5484d");
    up += '<g transform="translate(0,-79)">' + head(k, o, "front") + '</g>';
    if (o.hold && THINGS[o.hold]) up += '<g transform="translate(' + hd[1][0] + ',' + (hd[1][1] + 6) + ') scale(' + (o.hs || .5) + ')">' + THINGS[o.hold](0, 0, { c: o.hc, h: o.hh, n: o.hn }) + '</g>';
    if (pose === "run") g += MOTION;
    var body = '<g transform="translate(0,' + lift + ')">' + low + (pose === "hop" ? TICKS : '') + '<g transform="translate(0,' + dy + ')">' + up + '</g></g>';
    if (o.rot) body = '<g transform="rotate(' + o.rot + ' 0 -50)">' + body + '</g>';
    return wrap(x, y, s, o.flip, g + body);
  }

  /* ---------- animals ---------- */
  function catHead(m, c, d, white) {
    var e, mo;
    if (m === "sleep") e = '<path d="M-6 -1 q2 2 4 0 M2 -1 q2 2 4 0" stroke="' + INK + '" stroke-width="1.3" fill="none"/>';
    else if (m === "grumpy") e = '<path d="M-8 -4 l5 2 M8 -4 l-5 2" stroke="' + INK + '" stroke-width="1.6" stroke-linecap="round"/><circle cx="-4" cy="0" r="1.5" fill="' + INK + '"/><circle cx="4" cy="0" r="1.5" fill="' + INK + '"/>';
    else e = '<circle cx="-4" cy="-1" r="2" fill="#4a8a2a"/><circle cx="4" cy="-1" r="2" fill="#4a8a2a"/><circle cx="-4" cy="-1" r="1" fill="' + INK + '"/><circle cx="4" cy="-1" r="1" fill="' + INK + '"/>';
    mo = m === "grumpy" ? '<path d="M-3 7.5 q3 -3 6 0" stroke="' + INK + '" stroke-width="1.2" fill="none"/>' : '<path d="M-3 5.5 q1.5 2 3 0 q1.5 2 3 0" stroke="' + INK + '" stroke-width="1" fill="none"/>';
    return '<path d="M-10 -4 L-9 -17 L-1 -10 Z M10 -4 L9 -17 L1 -10 Z" fill="' + c + '" stroke="' + d + '" stroke-width="1"/><path d="M-8 -7 L-8 -13 L-4 -9.5 Z M8 -7 L8 -13 L4 -9.5 Z" fill="#ffb3c1"/><circle r="11" fill="' + c + '"/>' +
      '<path d="M-3 -10 l1 4 M0 -11 v4 M3 -10 l-1 4" stroke="' + d + '" stroke-width="1.3"/>' + (white ? '<ellipse cx="0" cy="5" rx="6" ry="4.5" fill="#fff4e6"/>' : '') + e +
      '<path d="M-1.8 2.5 h3.6 l-1.8 2 Z" fill="#ff7f9b"/>' + mo + '<path d="M-5 3.5 h-9 M-5 5.5 l-8 3 M5 3.5 h9 M5 5.5 l8 3" stroke="' + INK + '" stroke-width=".7" opacity=".5"/>';
  }
  function cat(kind, x, y, o) {
    var K = CATS[kind] || CATS.cat, c = o.c || K.c, d = K.d, pose = o.pose || "sit", g;
    if (pose === "sleep") {
      g = shadow(22) + '<path d="M16 -4 Q30 -4 24 -14" stroke="' + c + '" stroke-width="5" fill="none" stroke-linecap="round"/><ellipse cx="3" cy="-10" rx="19" ry="10.5" fill="' + c + '"/><path d="M0 -18 q3 5 0 9 M9 -18 q3 5 0 9" stroke="' + d + '" stroke-width="2" fill="none"/><g transform="translate(-14,-13) scale(.85)">' + catHead("sleep", c, d, K.white) + '</g><text x="8" y="-30" font-size="13" font-weight="700" fill="#6b7bd6" font-family="sans-serif">z z</text>';
    } else {
      var lift = pose === "hop" ? -(o.lift || 16) : 0;
      g = shadow(16) + '<g transform="translate(0,' + lift + ')"><path d="M10 -6 Q28 -8 22 -30" stroke="' + c + '" stroke-width="5" fill="none" stroke-linecap="round"/><ellipse cx="0" cy="-14" rx="13" ry="15" fill="' + c + '"/>' +
        (K.white ? '<ellipse cx="0" cy="-12" rx="7" ry="10" fill="#fff4e6"/>' : '<path d="M-9 -20 q4 3 0 6 M9 -20 q-4 3 0 6 M-10 -11 q4 3 0 6 M10 -11 q-4 3 0 6" stroke="' + d + '" stroke-width="2" fill="none"/>') +
        '<ellipse cx="-5" cy="-1.5" rx="4.5" ry="3" fill="' + (K.white ? "#fff4e6" : c) + '" stroke="' + d + '" stroke-width="1"/><ellipse cx="5" cy="-1.5" rx="4.5" ry="3" fill="' + (K.white ? "#fff4e6" : c) + '" stroke="' + d + '" stroke-width="1"/>' +
        (K.col ? '<path d="M-9 -25 Q0 -21 9 -25" stroke="' + K.col + '" stroke-width="3.2" fill="none" stroke-linecap="round"/><circle cx="0" cy="-21" r="2.2" fill="#ffcf33"/>' : '') +
        '<g transform="translate(0,-34)">' + catHead(o.mood, c, d, K.white) + '</g>' + (pose === "hop" ? TICKS : '') + '</g>';
    }
    return wrap(x, y, o.s || 1, o.flip, g);
  }
  var DC = "#d9a066", DD = "#9a6232", DL = "#f5dcb6";
  function dogHead(m) {
    return '<ellipse cx="-12" cy="2" rx="5" ry="11" fill="' + DD + '" transform="rotate(15 -12 2)"/><ellipse cx="12" cy="2" rx="5" ry="11" fill="' + DD + '" transform="rotate(-15 12 2)"/><circle r="13" fill="' + DC + '"/><ellipse cx="0" cy="6" rx="7" ry="5" fill="' + DL + '"/><ellipse cx="0" cy="3" rx="2.8" ry="2" fill="' + INK + '"/><circle cx="-5" cy="-3" r="1.9" fill="' + INK + '"/><circle cx="5" cy="-3" r="1.9" fill="' + INK + '"/>' +
      (m === "sad" ? '<path d="M-3 10 q3 -2 6 0" stroke="' + INK + '" stroke-width="1.2" fill="none"/>' : '<path d="M-3 8 q3 3 6 0" stroke="' + INK + '" stroke-width="1.2" fill="none"/><ellipse cx="1.5" cy="11.5" rx="2.5" ry="3" fill="#ff7f9b"/>');
  }
  function dog(x, y, o) {
    var pose = o.pose || "sit", g;
    if (pose === "sit") {
      g = shadow(18) + '<path d="M10 -6 Q26 -8 24 -24" stroke="' + DC + '" stroke-width="5" fill="none" stroke-linecap="round"/><ellipse cx="0" cy="-17" rx="15" ry="17" fill="' + DC + '"/><ellipse cx="0" cy="-13" rx="8" ry="10" fill="' + DL + '"/><ellipse cx="-6" cy="-1.5" rx="5" ry="3" fill="' + DL + '"/><ellipse cx="6" cy="-1.5" rx="5" ry="3" fill="' + DL + '"/><g transform="translate(0,-40)">' + dogHead(o.mood) + (o.hat ? '<g transform="translate(0,-12) scale(.8)">' + hatShape(typeof o.hat === "string" ? o.hat : "#e5484d") + '</g>' : '') + '</g>';
    } else {
      var lift = pose === "hop" ? -(o.lift || 16) : 0, legs;
      if (pose === "run") legs = '<path d="M-14 -16 L-24 -4 M-8 -16 L-2 -3 M10 -16 L4 -4 M15 -16 L26 -6" stroke="' + DC + '" stroke-width="5" stroke-linecap="round"/>';
      else legs = '<rect x="-18" y="-17" width="5" height="16" rx="2" fill="' + DC + '"/><rect x="-10" y="-17" width="5" height="16" rx="2" fill="' + DC + '"/><rect x="8" y="-17" width="5" height="16" rx="2" fill="' + DC + '"/><rect x="15" y="-17" width="5" height="16" rx="2" fill="' + DC + '"/>';
      g = shadow(24) + (pose === "run" ? '<g transform="translate(6,20)">' + MOTION + '</g>' : '') + '<g transform="translate(0,' + lift + ')">' + legs + '<path d="M-19 -27 Q-31 -34 -29 -44" stroke="' + DC + '" stroke-width="4.5" fill="none" stroke-linecap="round"/><ellipse cx="0" cy="-25" rx="22" ry="12" fill="' + DC + '"/><ellipse cx="2" cy="-20" rx="14" ry="5" fill="' + DL + '"/><g transform="translate(21,-40)"><circle r="11" fill="' + DC + '"/><ellipse cx="10" cy="3" rx="7" ry="5" fill="' + DL + '"/><circle cx="16" cy="1" r="2.6" fill="' + INK + '"/><circle cx="3" cy="-3" r="1.8" fill="' + INK + '"/><ellipse cx="10" cy="9.5" rx="2.2" ry="3" fill="#ff7f9b"/><ellipse cx="-5" cy="3" rx="4.5" ry="10" fill="' + DD + '" transform="rotate(20 -5 3)"/></g>' + (pose === "hop" ? TICKS : '') + '</g>';
    }
    return wrap(x, y, o.s || 1, o.flip, g);
  }
  function miniHead(k, mood) {
    if (P[k]) return head(k, { mood: mood, nohat: 1 }, "back") + head(k, { mood: mood, nohat: 1 }, "front");
    if (k === "dog") return '<g transform="scale(.9)">' + dogHead() + '</g>';
    if (CATS[k]) return catHead(mood, CATS[k].c, CATS[k].d, CATS[k].white);
    return "";
  }
  function heads(list, x0, x1, y, sc, mood) {
    var g = "";
    list.forEach(function (k, i) { g += '<g transform="translate(' + n(x0 + (x1 - x0) * (i + .5) / list.length) + ',' + y + ') scale(' + sc + ')">' + miniHead(k, mood) + '</g>'; });
    return g;
  }

  /* ---------- things (origin = bottom center) ---------- */
  var THINGS = {};
  function add(name, f) { THINGS[name] = function (x, y, o) { return wrap(x, y, o.s || 1, o.flip, f(o || {})); }; }
  function star(c) { return '<path d="M0 -8 L2.4 -2.4 L8 -2 L3.6 1.8 L5 8 L0 4.6 L-5 8 L-3.6 1.8 L-8 -2 L-2.4 -2.4 Z" fill="' + c + '"/>'; }
  function cloudShape(c) { return '<g fill="' + (c || "#fff") + '"><circle cx="-18" cy="0" r="12"/><circle cx="0" cy="-8" r="16"/><circle cx="18" cy="0" r="12"/><rect x="-18" y="0" width="36" height="12" rx="6"/></g>'; }
  function roundFruit(c, rx, ry) { return '<ellipse cx="0" cy="-' + ry + '" rx="' + rx + '" ry="' + ry + '" fill="' + c + '"/><ellipse cx="-' + (rx / 3) + '" cy="-' + (ry * 1.3) + '" rx="3" ry="4" fill="#fff" opacity=".3"/><path d="M0 -' + (ry * 2) + ' l1 -5" stroke="#6b4423" stroke-width="2"/><ellipse cx="5" cy="-' + (ry * 2 + 3) + '" rx="5" ry="2.5" fill="#4caf50"/>'; }

  add("hat", function (o) { return shadow(22) + '<g transform="translate(0,-5)">' + hatShape(o.c || "#e5484d") + '</g>'; });
  add("mat", function (o) { return '<path d="M-46 0 L46 0 L38 -12 L-38 -12 Z" fill="' + (o.c || "#5aa9e6") + '"/><path d="M-30 -12 L-34 0 M-10 -12 L-11 0 M10 -12 L11 0 M30 -12 L34 0" stroke="#fff" stroke-width="2.5" opacity=".55"/>'; });
  add("sun", function (o) {
    var c = o.c || "#ffcf33", r = "";
    for (var i = 0; i < 12; i++) { var a = i * Math.PI / 6; r += 'M' + n(Math.cos(a) * 28) + ' ' + n(Math.sin(a) * 28) + ' L' + n(Math.cos(a) * 38) + ' ' + n(Math.sin(a) * 38) + ' '; }
    return '<path d="' + r + '" stroke="' + c + '" stroke-width="4" stroke-linecap="round"/><circle r="22" fill="' + c + '"/>' + (o.face ? '<circle cx="-7" cy="-4" r="2.4" fill="' + INK + '"/><circle cx="7" cy="-4" r="2.4" fill="' + INK + '"/><path d="M-8 5 Q0 13 8 5" stroke="' + INK + '" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="-12" cy="4" r="3" fill="#ff9a62" opacity=".6"/><circle cx="12" cy="4" r="3" fill="#ff9a62" opacity=".6"/>' : '');
  });
  add("moon", function () { return '<path d="M5 -20 A20 20 0 1 0 5 20 A15 15 0 1 1 5 -20 Z" fill="#fff6c8"/>'; });
  add("cloud", function (o) { return cloudShape(o.c); });
  add("rain", function () { return cloudShape("#9aa5b4") + '<path d="M-20 18 l-4 10 M-6 20 l-4 10 M8 18 l-4 10 M22 20 l-4 10 M-13 34 l-4 10 M1 36 l-4 10 M15 34 l-4 10" stroke="#4fb3e8" stroke-width="2.5" stroke-linecap="round"/>'; });
  add("star", function (o) { return '<g transform="translate(0,-14) scale(1.8)">' + star(o.c || "#ffcf33") + '</g>'; });
  add("tree", function (o) {
    var f = "";
    if (o.fruit) [[-18, -78], [10, -92], [22, -66], [-4, -64], [-26, -60]].forEach(function (p) { f += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="5" fill="' + o.fruit + '"/>'; });
    if (o.face) f += '<circle cx="-9" cy="-80" r="3" fill="' + INK + '"/><circle cx="9" cy="-80" r="3" fill="' + INK + '"/><path d="M-9 -70 Q0 -62 9 -70" stroke="' + INK + '" stroke-width="2.5" fill="none" stroke-linecap="round"/>';
    var c1 = o.fall ? "#f08a24" : "#4caf50", c2 = o.fall ? "#e5484d" : "#5cc163", c3 = o.fall ? "#ffcf33" : "#6fd075";
    return shadow(26) + '<rect x="-7" y="-62" width="14" height="62" rx="3" fill="#8b5a2b"/><circle cx="0" cy="-86" r="30" fill="' + c1 + '"/><circle cx="-22" cy="-68" r="20" fill="' + c2 + '"/><circle cx="22" cy="-68" r="20" fill="' + c2 + '"/><circle cx="8" cy="-96" r="14" fill="' + c3 + '"/>' + f;
  });
  add("pine", function () { return '<rect x="-5" y="-20" width="10" height="20" fill="#7a4f2a"/><path d="M0 -100 L-26 -50 L-14 -50 L-32 -18 L32 -18 L14 -50 L26 -50 Z" fill="#2f8f4e"/>'; });
  add("flower", function (o) {
    var c = o.c || "#ff5d8f", p = "";
    for (var i = 0; i < 5; i++) { var a = i * Math.PI * 2 / 5; p += '<circle cx="' + n(Math.cos(a) * 7) + '" cy="' + n(Math.sin(a) * 7 - 34) + '" r="6" fill="' + c + '"/>'; }
    return '<path d="M0 0 V-30" stroke="#3f9d47" stroke-width="3"/><ellipse cx="6" cy="-12" rx="6" ry="3" fill="#4caf50"/>' + p + '<circle cx="0" cy="-34" r="4.5" fill="#ffcf33"/>';
  });
  add("heart", function (o) { return '<path d="M0 8 C-14 -3 -10 -16 0 -8 C10 -16 14 -3 0 8 Z" fill="' + (o.c || "#ff5d8f") + '"/>'; });
  add("splash", function () {
    var g = ""; [[-24, -6, -30], [-14, -18, -15], [0, -24, 0], [14, -18, 15], [24, -6, 30]].forEach(function (d) { g += '<ellipse cx="' + d[0] + '" cy="' + d[1] + '" rx="3" ry="5.5" fill="#bfe8ff" stroke="#fff" stroke-width="1" transform="rotate(' + d[2] + ' ' + d[0] + ' ' + d[1] + ')"/>'; }); return g;
  });
  add("ball", function (o) { return shadow(12) + '<circle cx="0" cy="-12" r="12" fill="' + (o.c || "#4fb3e8") + '"/><path d="M-12 -12 Q0 -4 12 -12" stroke="#fff" stroke-width="3" fill="none"/>'; });
  add("sball", function () { return shadow(12) + '<circle cx="0" cy="-12" r="12" fill="#fff" stroke="#333" stroke-width="1.2"/><path d="M0 -17 l5 3.5 -2 6 h-6 l-2 -6 Z" fill="#333"/><path d="M0 -17 V-24 M5 -13.5 L11 -16 M3 -7.5 L7 -2 M-3 -7.5 L-7 -2 M-5 -13.5 L-11 -16" stroke="#333" stroke-width="1.2"/>'; });
  add("bball", function () { return shadow(12) + '<circle cx="0" cy="-12" r="12" fill="#f08a24" stroke="#7a3b0a" stroke-width="1.2"/><path d="M-12 -12 H12 M0 -24 V0 M-8 -21 Q-3 -12 -8 -3 M8 -21 Q3 -12 8 -3" stroke="#7a3b0a" stroke-width="1.2" fill="none"/>'; });
  add("hoop", function () { return '<rect x="-3" y="-150" width="6" height="150" fill="#777"/><rect x="-28" y="-188" width="56" height="38" rx="3" fill="#fff" stroke="#e5484d" stroke-width="3"/><rect x="-10" y="-174" width="20" height="16" fill="none" stroke="#e5484d" stroke-width="2"/><path d="M-13 -152 L-9 -132 M-4 -152 L-3 -132 M4 -152 L3 -132 M13 -152 L9 -132 M-11 -142 H11" stroke="#ddd" stroke-width="1.5"/><ellipse cx="0" cy="-152" rx="14" ry="3.5" fill="none" stroke="#ff6a00" stroke-width="3"/>'; });
  add("goal", function () { var g = ""; for (var i = -50; i <= 50; i += 12) g += 'M' + i + ' -58 V0 '; for (var j = -48; j < 0; j += 12) g += 'M-58 ' + j + ' H58 '; return '<path d="' + g + '" stroke="#e0e0e0" stroke-width="1"/><path d="M-60 0 V-60 H60 V0" stroke="#fff" stroke-width="5" fill="none"/>'; });
  add("beam", function () { return '<rect x="-80" y="-44" width="160" height="9" rx="3" fill="#e8c38a" stroke="#b9925a"/><path d="M-60 -35 L-66 0 M-60 -35 L-54 0 M60 -35 L54 0 M60 -35 L66 0" stroke="#888" stroke-width="4"/>'; });
  add("trophy", function () { return '<rect x="-12" y="-6" width="24" height="6" fill="#8b5a2b"/><rect x="-3" y="-16" width="6" height="10" fill="#e0a800"/><path d="M-14 -40 H14 Q14 -18 0 -16 Q-14 -18 -14 -40 Z" fill="#ffcf33"/><path d="M-14 -36 q-9 2 -2 12 M14 -36 q9 2 2 12" stroke="#ffcf33" stroke-width="3" fill="none"/>'; });
  add("medal", function () { return '<path d="M-6 -36 L0 -20 L6 -36" stroke="#3b82f6" stroke-width="5" fill="none"/><circle cx="0" cy="-12" r="9" fill="#ffcf33" stroke="#e0a800" stroke-width="2"/>'; });
  /* food */
  add("apple", function (o) { return '<circle cx="0" cy="-12" r="12" fill="' + (o.c || "#e5484d") + '"/><path d="M0 -23 q2 -6 5 -8" stroke="#6b4423" stroke-width="2.5" fill="none"/><ellipse cx="7" cy="-28" rx="5" ry="2.5" fill="#4caf50" transform="rotate(-20 7 -28)"/><ellipse cx="-5" cy="-16" rx="3" ry="4" fill="#fff" opacity=".35"/>'; });
  add("banana", function () { return '<path d="M-18 -20 Q-14 -2 8 -2 Q16 -2 18 -8 Q14 -6 6 -7 Q-8 -8 -12 -22 Z" fill="#ffd84a" stroke="#d9a92c" stroke-width="1.5"/><path d="M-12 -22 l-3 -4" stroke="#6b4423" stroke-width="3"/>'; });
  add("grapes", function (o) { var g = ""; [[0, -6], [-6, -12], [6, -12], [-10, -19], [0, -19], [10, -19], [-5, -26], [5, -26]].forEach(function (p) { g += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="5.5" fill="' + (o.c || "#8e44ad") + '"/>'; }); return g + '<path d="M0 -30 v-7" stroke="#6b4423" stroke-width="2.5"/><ellipse cx="7" cy="-35" rx="6" ry="3" fill="#4caf50"/>'; });
  add("berry", function () { return '<path d="M0 0 Q-13 -10 -11 -20 Q0 -25 11 -20 Q13 -10 0 0 Z" fill="#e5484d"/><g fill="#ffe066"><circle cx="-5" cy="-14" r="1"/><circle cx="4" cy="-16" r="1"/><circle cx="0" cy="-8" r="1"/><circle cx="-3" cy="-19" r="1"/><circle cx="6" cy="-10" r="1"/></g><path d="M-9 -21 L-4 -26 L0 -22 L4 -26 L9 -21 L0 -19 Z" fill="#4caf50"/>'; });
  add("melon", function () { return '<path d="M-24 -24 A24 24 0 0 0 24 -24 Z" fill="#3f9d47"/><path d="M-21 -24 A21 21 0 0 0 21 -24 Z" fill="#f4f7e6"/><path d="M-18 -24 A18 18 0 0 0 18 -24 Z" fill="#ff5a6e"/><g fill="#333"><ellipse cx="-8" cy="-17" rx="1.3" ry="2"/><ellipse cx="0" cy="-12" rx="1.3" ry="2"/><ellipse cx="8" cy="-17" rx="1.3" ry="2"/><ellipse cx="-3" cy="-20" rx="1.3" ry="2"/><ellipse cx="4" cy="-20" rx="1.3" ry="2"/></g>'; });
  add("plum", function () { return roundFruit("#7b3fa0", 11, 11); });
  add("peach", function () { return roundFruit("#ffb07a", 12, 12) + '<path d="M2 -22 Q-2 -12 2 -2" stroke="#f08a5a" stroke-width="1.5" fill="none"/>'; });
  add("orange", function () { return roundFruit("#ff9f1c", 12, 12); });
  add("lemon", function () { return roundFruit("#ffe14d", 14, 10); });
  add("cherry", function () { return '<path d="M-6 -10 Q-2 -26 4 -30 M6 -10 Q4 -22 4 -30" stroke="#3f9d47" stroke-width="2" fill="none"/><circle cx="-6" cy="-7" r="7" fill="#c0392b"/><circle cx="7" cy="-7" r="7" fill="#d63a2f"/>'; });
  add("carrot", function () { return '<path d="M-6 -32 Q0 -34 6 -32 L1 -2 Q0 0 -1 -2 Z" fill="#ff8a2a"/><path d="M-3 -24 h3 M0 -16 h3 M-2 -9 h2" stroke="#d96a12" stroke-width="1.2"/><path d="M0 -32 l-6 -10 M0 -32 l0 -12 M0 -32 l6 -10" stroke="#4caf50" stroke-width="3" stroke-linecap="round"/>'; });
  add("corn", function () { return '<ellipse cx="0" cy="-18" rx="8" ry="17" fill="#ffd23f"/><path d="M-6 -26 H6 M-7 -18 H7 M-6 -10 H6 M-3 -32 V-4 M3 -32 V-4" stroke="#e0a800" stroke-width="1"/><path d="M-2 0 Q-14 -10 -10 -26 Q-6 -10 0 -2 Z M2 0 Q14 -10 10 -26 Q6 -10 0 -2 Z" fill="#6fbf4a"/>'; });
  add("tomato", function () { return '<ellipse cx="0" cy="-11" rx="13" ry="11" fill="#ef3e36"/><path d="M0 -22 l-6 -2 l4 -1 l-2 -4 l4 3 l4 -3 l-2 4 l4 1 Z" fill="#3f9d47"/>'; });
  add("peas", function () { return '<path d="M-20 -4 Q0 -18 20 -4 Q0 4 -20 -4 Z" fill="#6fbf4a"/><circle cx="-9" cy="-6" r="4" fill="#9be07a"/><circle cx="0" cy="-7" r="4" fill="#9be07a"/><circle cx="9" cy="-6" r="4" fill="#9be07a"/>'; });
  add("pumpkin", function (o) { return '<ellipse cx="-14" cy="-22" rx="16" ry="22" fill="#f08a24"/><ellipse cx="14" cy="-22" rx="16" ry="22" fill="#f08a24"/><ellipse cx="0" cy="-22" rx="14" ry="22" fill="#f79a35"/><rect x="-3" y="-50" width="6" height="9" rx="2" fill="#5a8a3a"/>' + (o.face ? '<path d="M-14 -30 l5 -8 l5 8 Z M4 -30 l5 -8 l5 8 Z M-14 -16 l4 4 l4 -4 l4 4 l4 -4 l4 4 l4 -4 l4 4 Q0 -2 -14 -16 Z" fill="#5a2d0c"/>' : ''); });
  add("cake", function (o) {
    var c = "", k = +o.n || 0;
    for (var i = 0; i < k; i++) { var cx = n(-18 + 36 * (i + .5) / k); c += '<rect x="' + (cx - 1.5) + '" y="-46" width="3" height="13" fill="' + CONF[i % 6] + '"/><ellipse cx="' + cx + '" cy="-49" rx="2.2" ry="3.5" fill="#ffb800"/>'; }
    return '<ellipse cx="0" cy="0" rx="32" ry="4" fill="#eee"/><rect x="-26" y="-32" width="52" height="32" rx="5" fill="' + (o.c || "#ffd1e0") + '"/><path d="M-26 -24 Q-26 -33 -18 -33 L18 -33 Q26 -33 26 -24 Q22 -18 18 -24 Q13 -16 8 -24 Q3 -16 -2 -24 Q-7 -16 -12 -24 Q-17 -16 -22 -24 Z" fill="#fff"/>' + c;
  });
  add("cupcake", function (o) { return '<path d="M-12 -14 L12 -14 L9 0 L-9 0 Z" fill="#7fc8f8"/><path d="M-6 -14 l1 14 M0 -14 v14 M6 -14 l-1 14" stroke="#5aa9e6"/><path d="M-14 -14 Q-16 -24 -6 -26 Q0 -34 6 -26 Q16 -24 14 -14 Z" fill="' + (o.c || "#ff8fb3") + '"/><circle cx="0" cy="-31" r="3.5" fill="#e5484d"/>'; });
  add("cookie", function () { return '<circle cx="0" cy="-12" r="12" fill="#d9a066"/><g fill="#5a3a1a"><circle cx="-4" cy="-15" r="1.8"/><circle cx="4" cy="-9" r="1.8"/><circle cx="5" cy="-17" r="1.5"/><circle cx="-5" cy="-7" r="1.5"/></g>'; });
  add("icecream", function (o) {
    var g = '<path d="M-9 -20 L9 -20 L0 0 Z" fill="#e0a85a"/><path d="M-6 -14 L3 -20 M-3 -7 L6 -16 M6 -14 L-3 -20 M3 -7 L-6 -16" stroke="#b9824a" stroke-width="1"/>', cs = ["#ffb3c7", "#fff3d6", "#8b5a3c"];
    for (var i = 0; i < (+o.n || 1); i++) g += '<circle cx="0" cy="' + (-25 - i * 13) + '" r="10" fill="' + cs[i % 3] + '"/>';
    return g;
  });
  add("pie", function () { return '<path d="M-26 -8 L26 -8 L22 0 L-22 0 Z" fill="#c9c9c9"/><path d="M-24 -8 Q0 -24 24 -8 Z" fill="#e8b46a"/><path d="M-14 -11 L-6 -17 M-2 -12 L6 -19 M10 -11 L14 -14" stroke="#c98a3a" stroke-width="2"/>'; });
  add("hotdog", function () { return '<ellipse cx="0" cy="-8" rx="22" ry="8" fill="#f0c27a"/><rect x="-25" y="-15" width="50" height="8" rx="4" fill="#c8553d"/><path d="M-18 -11 q3 -3 6 0 t6 0 t6 0 t6 0 t6 0" stroke="#ffd23f" stroke-width="2" fill="none"/>'; });
  add("egg", function (o) { return '<ellipse cx="0" cy="-9" rx="7" ry="9" fill="' + (o.c || "#fff8e7") + '" stroke="#e0d4b8"/>'; });
  add("jam", function () { return '<rect x="-10" y="-22" width="20" height="22" rx="4" fill="#c0392b"/><rect x="-11" y="-27" width="22" height="6" rx="2" fill="#f4d03f"/><rect x="-6" y="-16" width="12" height="8" fill="#fff"/>'; });
  add("drink", function (o) { return '<path d="M-9 -26 L9 -26 L7 0 L-7 0 Z" fill="' + (o.c || "#ff8fb3") + '" opacity=".9"/><path d="M-9 -26 H9" stroke="#fff" stroke-width="2"/><path d="M3 -26 L8 -40" stroke="#4fb3e8" stroke-width="2.5"/>'; });
  add("pot", function (o) { return '<path d="M-20 -26 L20 -26 L17 0 L-17 0 Z" fill="#7d8ca3"/><rect x="-22" y="-29" width="44" height="5" rx="2" fill="#5c6b80"/><path d="M-22 -22 h-6 M22 -22 h6" stroke="#5c6b80" stroke-width="4" stroke-linecap="round"/>' + (o.hot ? '<path d="M-8 -34 q-4 -6 0 -12 q4 -6 0 -12 M8 -34 q-4 -6 0 -12 q4 -6 0 -12" stroke="#bbb" stroke-width="2" fill="none"/>' : ''); });
  add("pan", function () { return '<ellipse cx="0" cy="-4" rx="18" ry="5" fill="#444"/><rect x="16" y="-6" width="22" height="4" rx="2" fill="#444"/>'; });
  add("sandwich", function () { return '<path d="M-18 0 L18 0 L0 -26 Z" fill="#f2d39b" stroke="#c99a52"/><path d="M-13 -5 H13" stroke="#7bc96f" stroke-width="3"/><path d="M-9 -11 H9" stroke="#e5484d" stroke-width="3"/>'; });
  add("chips", function () { return '<path d="M-12 0 L12 0 L14 -30 L-14 -30 Z" fill="#ffcf33"/><path d="M-14 -30 l4 -3 l4 3 l4 -3 l4 3 l4 -3 l4 3" stroke="#d9a92c" fill="none"/><circle cx="0" cy="-14" r="6" fill="#e5484d"/>'; });
  add("pizza", function () { return '<path d="M-16 -4 L16 -4 L0 -36 Z" fill="#ffd36b" stroke="#d9963a" stroke-width="3" stroke-linejoin="round"/><circle cx="-3" cy="-14" r="3" fill="#c0392b"/><circle cx="4" cy="-22" r="2.5" fill="#c0392b"/><circle cx="3" cy="-10" r="2.5" fill="#c0392b"/>'; });
  add("bowl", function (o) { return (o.empty ? '' : '<circle cx="-10" cy="-20" r="7" fill="#e5484d"/><circle cx="2" cy="-23" r="7" fill="#ff9f1c"/><circle cx="12" cy="-20" r="6" fill="#8e44ad"/><path d="M-4 -26 Q6 -34 14 -24" stroke="#ffd84a" stroke-width="5" fill="none"/>') + '<path d="M-24 -18 Q-22 0 0 0 Q22 0 24 -18 Z" fill="' + (o.c || "#4fb3e8") + '"/>'; });
  add("plate", function () { return '<ellipse cx="0" cy="-3" rx="24" ry="5" fill="#fff" stroke="#ddd"/>'; });
  add("table", function (o) { return '<rect x="-62" y="-44" width="7" height="44" fill="#9a6838"/><rect x="55" y="-44" width="7" height="44" fill="#9a6838"/><rect x="-72" y="-52" width="144" height="9" rx="3" fill="#b07a45"/>' + (o.c ? '<path d="M-74 -53 H74 V-36 Q66 -32 58 -36 Q50 -32 42 -36 Q34 -32 26 -36 Q18 -32 10 -36 Q2 -32 -6 -36 Q-14 -32 -22 -36 Q-30 -32 -38 -36 Q-46 -32 -54 -36 Q-62 -32 -74 -36 Z" fill="' + o.c + '"/>' : ''); });
  /* animals */
  add("pig", function () { return shadow(24) + '<g fill="#f4a6b8"><rect x="-17" y="-14" width="6" height="14" rx="2"/><rect x="-8" y="-14" width="6" height="14" rx="2"/><rect x="6" y="-14" width="6" height="14" rx="2"/><rect x="14" y="-14" width="6" height="14" rx="2"/></g><path d="M-23 -28 q-9 -1 -6 -8 q5 -2 2 5" stroke="#f4a6b8" stroke-width="2.5" fill="none"/><ellipse cx="0" cy="-25" rx="24" ry="15" fill="#ffb6c8"/><circle cx="20" cy="-31" r="12" fill="#ffb6c8"/><path d="M13 -40 L12 -50 L20 -42 Z" fill="#f4a6b8"/><ellipse cx="31" cy="-29" rx="5" ry="6" fill="#ff8fab"/><circle cx="30" cy="-31" r="1.2" fill="' + INK + '"/><circle cx="32" cy="-27" r="1.2" fill="' + INK + '"/><circle cx="22" cy="-35" r="1.8" fill="' + INK + '"/>'; });
  add("hen", function (o) { var c = o.c || "#c0582f"; return shadow(13) + '<path d="M-3 -8 V0 M4 -8 V0" stroke="#e0a800" stroke-width="2.5"/><path d="M-12 -22 L-20 -34 L-14 -20 L-22 -26 L-12 -14 Z" fill="' + c + '"/><ellipse cx="0" cy="-18" rx="14" ry="12" fill="' + c + '"/><ellipse cx="-2" cy="-17" rx="7" ry="5" fill="#000" opacity=".15"/><circle cx="10" cy="-31" r="7" fill="' + c + '"/><path d="M6 -38 q2 -5 4 0 q2 -5 4 0" fill="#e5484d"/><path d="M16 -32 L22 -30 L16 -28 Z" fill="#ffb800"/><path d="M14 -26 q2 4 -1 5" stroke="#e5484d" stroke-width="2" fill="none"/><circle cx="12" cy="-32" r="1.4" fill="' + INK + '"/>'; });
  add("chick", function () { return shadow(8) + '<path d="M-2 -3 V0 M2 -3 V0" stroke="#e08a00" stroke-width="1.5"/><circle cx="0" cy="-10" r="9" fill="#ffe14d"/><path d="M7 -12 L12 -10 L7 -8 Z" fill="#ff9f1c"/><circle cx="3" cy="-13" r="1.3" fill="' + INK + '"/><path d="M-6 -10 q-3 3 2 4" stroke="#e0b800" stroke-width="1.5" fill="none"/>'; });
  add("cow", function () { return shadow(34) + '<g fill="#f2f2f2" stroke="#999" stroke-width=".8"><rect x="-28" y="-26" width="7" height="26" rx="2"/><rect x="-18" y="-26" width="7" height="26" rx="2"/><rect x="12" y="-26" width="7" height="26" rx="2"/><rect x="21" y="-26" width="7" height="26" rx="2"/></g><path d="M-32 -48 Q-42 -38 -38 -24" stroke="#999" stroke-width="2.5" fill="none"/><rect x="-34" y="-58" width="66" height="36" rx="16" fill="#fafafa" stroke="#999" stroke-width="1"/><path d="M-20 -56 q10 4 4 14 q-12 2 -12 -8 Z M8 -46 q10 -4 12 6 q-6 6 -14 0 Z" fill="#333"/><ellipse cx="-2" cy="-22" rx="7" ry="4" fill="#ffb6c8"/><g transform="translate(36,-58)"><path d="M-8 -10 l-4 -6 M8 -10 l4 -6" stroke="#d9c79a" stroke-width="3" stroke-linecap="round"/><ellipse cx="0" cy="0" rx="12" ry="14" fill="#fafafa" stroke="#999"/><ellipse cx="0" cy="9" rx="10" ry="7" fill="#ffb6c8"/><circle cx="-4" cy="9" r="1.3" fill="' + INK + '"/><circle cx="4" cy="9" r="1.3" fill="' + INK + '"/><circle cx="-5" cy="-3" r="1.8" fill="' + INK + '"/><circle cx="5" cy="-3" r="1.8" fill="' + INK + '"/><ellipse cx="-14" cy="-4" rx="6" ry="3" fill="#333"/><ellipse cx="14" cy="-4" rx="6" ry="3" fill="#fafafa" stroke="#999"/></g>'; });
  add("duck", function (o) { var c = o.c || "#ffe14d"; return '<ellipse cx="0" cy="-10" rx="16" ry="10" fill="' + c + '"/><path d="M-14 -12 L-22 -18 L-16 -6 Z" fill="' + c + '"/><circle cx="12" cy="-24" r="8" fill="' + c + '"/><path d="M18 -25 L28 -23 L18 -20 Z" fill="#ff9f1c"/><circle cx="14" cy="-26" r="1.5" fill="' + INK + '"/><path d="M-6 -12 q6 6 12 0" stroke="#000" opacity=".15" stroke-width="3" fill="none"/>'; });
  add("frog", function () { return shadow(18) + '<ellipse cx="-14" cy="-3" rx="8" ry="4" fill="#4fae3a"/><ellipse cx="14" cy="-3" rx="8" ry="4" fill="#4fae3a"/><ellipse cx="0" cy="-13" rx="18" ry="12" fill="#6fcf4f"/><ellipse cx="0" cy="-10" rx="10" ry="7" fill="#c9f2a8"/><circle cx="-9" cy="-24" r="6" fill="#6fcf4f"/><circle cx="9" cy="-24" r="6" fill="#6fcf4f"/><circle cx="-9" cy="-25" r="3.5" fill="#fff"/><circle cx="9" cy="-25" r="3.5" fill="#fff"/><circle cx="-9" cy="-25" r="1.8" fill="' + INK + '"/><circle cx="9" cy="-25" r="1.8" fill="' + INK + '"/><path d="M-7 -15 Q0 -10 7 -15" stroke="' + INK + '" stroke-width="1.4" fill="none"/>'; });
  add("bug", function () { return '<path d="M-10 0 l-4 3 M0 0 v4 M10 0 l4 3" stroke="#333" stroke-width="1.5"/><path d="M-14 0 A14 14 0 0 1 14 0 Z" fill="#e5484d"/><path d="M0 -14 V0" stroke="#333" stroke-width="1.5"/><circle cx="16" cy="-4" r="5" fill="#333"/><g fill="#333"><circle cx="-6" cy="-8" r="2.2"/><circle cx="6" cy="-6" r="2.2"/><circle cx="-8" cy="-3" r="1.6"/><circle cx="8" cy="-11" r="1.6"/></g>'; });
  add("fish", function (o) { var c = o.c || "#ff9f1c"; return '<path d="M-12 -10 L-24 -18 L-24 -2 Z" fill="' + c + '"/><ellipse cx="0" cy="-10" rx="14" ry="9" fill="' + c + '"/><circle cx="7" cy="-12" r="2" fill="' + INK + '"/><path d="M-3 -16 q3 6 0 12" stroke="#000" opacity=".2" stroke-width="2" fill="none"/>'; });
  add("bird", function (o) { var c = o.c || "#4fb3e8"; return '<path d="M-2 -2 V0 M2 -2 V0" stroke="#e08a00" stroke-width="1.5"/><path d="M-8 -10 L-18 -14 L-16 -6 Z" fill="' + c + '"/><circle cx="0" cy="-10" r="9" fill="' + c + '"/><path d="M8 -12 L14 -10 L8 -8 Z" fill="#ffb800"/><circle cx="3" cy="-13" r="1.4" fill="' + INK + '"/><path d="M-6 -11 q4 5 9 0" fill="#000" opacity=".15"/>'; });
  add("sheep", function () { var g = shadow(24) + '<g fill="#333"><rect x="-16" y="-14" width="5" height="14"/><rect x="-7" y="-14" width="5" height="14"/><rect x="6" y="-14" width="5" height="14"/><rect x="14" y="-14" width="5" height="14"/></g><g fill="#fdfdfd" stroke="#ddd">'; [[-16, -24], [-6, -30], [6, -30], [16, -24], [-10, -18], [4, -18], [14, -16], [-18, -16]].forEach(function (p) { g += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="10"/>'; }); return g + '</g><ellipse cx="26" cy="-30" rx="8" ry="10" fill="#333"/><ellipse cx="19" cy="-34" rx="5" ry="2.5" fill="#333"/><circle cx="28" cy="-32" r="1.6" fill="#fff"/>'; });
  add("crab", function () { return '<path d="M-14 -4 l-8 4 M-12 -2 l-6 6 M14 -4 l8 4 M12 -2 l6 6 M-10 -14 l-8 -8 M10 -14 l8 -8" stroke="#e5484d" stroke-width="2.5"/><circle cx="-20" cy="-24" r="5" fill="#e5484d"/><circle cx="20" cy="-24" r="5" fill="#e5484d"/><ellipse cx="0" cy="-9" rx="16" ry="10" fill="#ef5b4b"/><path d="M-5 -18 V-24 M5 -18 V-24" stroke="#e5484d" stroke-width="2"/><circle cx="-5" cy="-25" r="2.5" fill="#fff"/><circle cx="5" cy="-25" r="2.5" fill="#fff"/><circle cx="-5" cy="-25" r="1.2" fill="' + INK + '"/><circle cx="5" cy="-25" r="1.2" fill="' + INK + '"/><path d="M-4 -6 q4 3 8 0" stroke="' + INK + '" fill="none"/>'; });
  /* objects */
  add("box", function (o) { return shadow(26) + '<rect x="-22" y="-30" width="44" height="30" fill="' + (o.c || "#d9a066") + '" stroke="#b07a45"/><path d="M-22 -30 L-30 -40 L-6 -40 L0 -30 M22 -30 L30 -40 L6 -40 L0 -30" fill="#e8b97c" stroke="#b07a45"/>'; });
  add("bag", function (o) { return '<path d="M-8 -24 Q0 -38 8 -24" stroke="' + (o.c || "#2eb67d") + '" stroke-width="3" fill="none"/><path d="M-14 -24 L14 -24 L16 0 L-16 0 Z" fill="' + (o.c || "#2eb67d") + '"/>'; });
  add("bed", function (o) {
    var c = o.c || "#7fb3ff", who = o.who || [];
    return '<rect x="-80" y="-74" width="12" height="74" rx="4" fill="#b07a45"/><rect x="68" y="-46" width="10" height="46" rx="3" fill="#b07a45"/><rect x="-70" y="-30" width="140" height="18" rx="4" fill="#fff"/><ellipse cx="-40" cy="-50" rx="26" ry="12" fill="#fff" stroke="#ddd"/>' +
      heads(who, -64, 40, -52, .62, o.mood) + '<path d="M-56 -42 Q-50 -46 -40 -44 L68 -44 Q74 -44 72 -36 L70 -14 L-58 -14 Z" fill="' + c + '"/><g fill="#fff" opacity=".45"><circle cx="-30" cy="-30" r="3"/><circle cx="0" cy="-36" r="3"/><circle cx="30" cy="-28" r="3"/><circle cx="55" cy="-36" r="3"/></g>';
  });
  add("tent", function (o) { return shadow(52) + '<path d="M-52 0 L0 -72 L52 0 Z" fill="' + (o.c || "#ff8a5c") + '"/><path d="M0 -72 L-15 0 L15 0 Z" fill="#000" opacity=".25"/><path d="M0 -72 v-12" stroke="#666" stroke-width="2"/><path d="M0 -84 l12 4 l-12 4 Z" fill="#ffcf33"/>'; });
  add("fire", function () { return '<path d="M-20 0 L20 -8 M-20 -8 L20 0" stroke="#7a4f2a" stroke-width="6" stroke-linecap="round"/><path d="M0 -6 Q-16 -18 -6 -34 Q-4 -24 2 -28 Q0 -40 8 -46 Q8 -32 14 -24 Q18 -12 0 -6 Z" fill="#ff8a2a"/><path d="M1 -8 Q-8 -16 -2 -26 Q2 -18 6 -22 Q10 -14 1 -8 Z" fill="#ffd23f"/>'; });
  add("lamp", function () { return '<path d="M-6 -36 Q0 -46 6 -36" stroke="#555" stroke-width="2" fill="none"/><rect x="-9" y="-36" width="18" height="5" fill="#555"/><rect x="-8" y="-31" width="16" height="24" rx="3" fill="#ffe680"/><circle cx="0" cy="-19" r="18" fill="#ffe680" opacity=".25"/><rect x="-9" y="-7" width="18" height="7" fill="#555"/>'; });
  add("fence", function (o) { var w = +o.w || 160, g = '<path d="M' + (-w / 2) + ' -30 H' + (w / 2) + ' M' + (-w / 2) + ' -14 H' + (w / 2) + '" stroke="#fff" stroke-width="5"/>'; for (var x = -w / 2; x <= w / 2; x += 26) g += '<path d="M' + x + ' 0 V-38 l-4 -5" stroke="#fff" stroke-width="7"/>'; return g; });
  add("barn", function () { return '<rect x="-60" y="-80" width="120" height="80" fill="#c0392b"/><path d="M-68 -78 L0 -122 L68 -78 Z" fill="#a93226" stroke="#fff" stroke-width="3"/><rect x="-24" y="-50" width="48" height="50" fill="#a93226" stroke="#fff" stroke-width="3"/><path d="M-24 -50 L24 0 M24 -50 L-24 0" stroke="#fff" stroke-width="3"/><rect x="-10" y="-100" width="20" height="16" fill="#fff6c8" stroke="#fff" stroke-width="2"/>'; });
  add("tractor", function (o) { return shadow(50) + '<rect x="-24" y="-46" width="66" height="28" rx="5" fill="#2e9e4f"/><rect x="-34" y="-84" width="34" height="40" rx="3" fill="none" stroke="#2e9e4f" stroke-width="5"/>' + heads(o.who || [], -30, -4, -64, .6) + '<rect x="-36" y="-88" width="38" height="6" rx="2" fill="#2e9e4f"/><rect x="30" y="-62" width="5" height="18" fill="#555"/><circle cx="-20" cy="-24" r="24" fill="#333"/><circle cx="-20" cy="-24" r="10" fill="#ffcf33"/><circle cx="34" cy="-13" r="13" fill="#333"/><circle cx="34" cy="-13" r="5" fill="#ffcf33"/>' + (o.go ? '<g transform="translate(-20,10)">' + MOTION + '</g>' : ''); });
  add("bus", function (o) { var who = o.who || []; return shadow(92) + '<rect x="-92" y="-82" width="180" height="70" rx="12" fill="#ffc72c"/><path d="M88 -70 Q100 -66 100 -50 L100 -20 Q100 -12 92 -12 L80 -12 Z" fill="#ffc72c"/><rect x="-84" y="-74" width="150" height="26" rx="4" fill="#cdeeff"/>' + heads(who, -84, 66, -56, .58) + '<rect x="-92" y="-48" width="180" height="8" fill="#ffc72c"/><rect x="-92" y="-36" width="190" height="5" fill="#333"/><rect x="70" y="-74" width="16" height="58" fill="#cdeeff" stroke="#e0a800" stroke-width="2"/><circle cx="-56" cy="-12" r="13" fill="#333"/><circle cx="-56" cy="-12" r="5" fill="#ccc"/><circle cx="58" cy="-12" r="13" fill="#333"/><circle cx="58" cy="-12" r="5" fill="#ccc"/>' + (o.go ? '<g transform="translate(-62,10)">' + MOTION + '</g>' : ''); });
  add("bike", function (o) { var c = o.c || "#ff6fae", r = o.who && P[o.who] ? person(o.who, -8, -34, { pose: "ride", noshadow: 1, c: o.wc }) : ""; return shadow(42) + '<circle cx="-26" cy="-16" r="16" fill="none" stroke="#333" stroke-width="3"/><circle cx="26" cy="-16" r="16" fill="none" stroke="#333" stroke-width="3"/>' + r + '<path d="M-26 -16 L-6 -16 L-12 -40 M-6 -16 L18 -40 L26 -16 M-12 -40 L18 -40 M18 -40 L16 -50" stroke="' + c + '" stroke-width="4" fill="none" stroke-linejoin="round"/><rect x="-20" y="-44" width="14" height="5" rx="2" fill="#333"/><path d="M10 -52 h12" stroke="#333" stroke-width="4" stroke-linecap="round"/>' + (o.go ? '<g transform="translate(-14,10)">' + MOTION + '</g>' : ''); });
  add("kite", function (o) { var c = o.c || "#ff5d8f"; return '<path d="M0 10 Q-30 70 -' + (o.len || 70) + ' 150" stroke="#888" stroke-width="1.2" fill="none"/><path d="M0 10 q8 10 0 20 q-8 10 0 20" stroke="#ffcf33" stroke-width="2" fill="none"/><path d="M0 -40 L18 -16 L0 10 L-18 -16 Z" fill="' + c + '"/><path d="M0 -40 V10 M-18 -16 H18" stroke="#fff" stroke-width="1.5"/>'; });
  add("boat", function (o) { return heads(o.who || [], -46, 46, -38, .6, o.mood) + '<path d="M-60 -26 L60 -26 L46 0 L-46 0 Z" fill="' + (o.c || "#e5484d") + '"/><rect x="-62" y="-30" width="124" height="6" rx="3" fill="#fff"/><path d="M-50 -24 L-80 6 M50 -24 L80 6" stroke="#a0632d" stroke-width="4" stroke-linecap="round"/>'; });
  add("sled", function () { return '<rect x="-36" y="-16" width="70" height="7" rx="3" fill="#c0392b"/><path d="M-30 -9 V-2 M24 -9 V-2" stroke="#555" stroke-width="3"/><path d="M-38 0 H32 Q44 0 42 -14" stroke="#555" stroke-width="3" fill="none"/>'; });
  add("snowman", function () { return shadow(24) + '<circle cx="0" cy="-20" r="22" fill="#fff" stroke="#dde"/><circle cx="0" cy="-56" r="16" fill="#fff" stroke="#dde"/><circle cx="0" cy="-82" r="12" fill="#fff" stroke="#dde"/><rect x="-11" y="-96" width="22" height="3" fill="#333"/><rect x="-7" y="-110" width="14" height="15" fill="#333"/><circle cx="-4" cy="-84" r="1.6" fill="#333"/><circle cx="4" cy="-84" r="1.6" fill="#333"/><path d="M0 -80 l10 2 l-10 2 Z" fill="#ff8a2a"/><path d="M-12 -70 Q0 -64 12 -70 L14 -64 Q0 -58 -14 -64 Z" fill="#e5484d"/><path d="M-15 -58 L-34 -70 M15 -58 L34 -72" stroke="#7a4f2a" stroke-width="2.5"/><g fill="#333"><circle cx="0" cy="-58" r="1.8"/><circle cx="0" cy="-50" r="1.8"/></g>'; });
  add("shell", function (o) { return '<path d="M0 0 L-15 -13 Q0 -28 15 -13 Z" fill="' + (o.c || "#ffb3c1") + '"/><path d="M0 0 L-9 -20 M0 0 L-3 -22 M0 0 L3 -22 M0 0 L9 -20" stroke="#e58a9b" stroke-width="1.3"/>'; });
  add("castle", function () { return '<rect x="-30" y="-30" width="60" height="30" fill="#e8c27a"/><rect x="-36" y="-50" width="18" height="50" fill="#e8c27a"/><rect x="18" y="-50" width="18" height="50" fill="#e8c27a"/><rect x="-10" y="-46" width="20" height="16" fill="#e8c27a"/><path d="M-36 -50 v-5 h5 v5 h4 v-5 h5 v5 M18 -50 v-5 h5 v5 h4 v-5 h5 v5" stroke="#e8c27a" stroke-width="2" fill="#e8c27a"/><rect x="-6" y="-16" width="12" height="16" rx="6" fill="#c9a05a"/><path d="M0 -46 V-62 L10 -58 L0 -54" stroke="#888" fill="#e5484d"/>'; });
  add("pail", function (o) { return '<path d="M-12 -24 Q0 -40 12 -24" stroke="#666" stroke-width="2" fill="none"/><path d="M-14 -24 L14 -24 L11 0 L-11 0 Z" fill="' + (o.c || "#4fb3e8") + '"/><path d="M14 -10 L28 -34" stroke="#ffcf33" stroke-width="3"/><path d="M26 -36 l6 -6 l4 6 Z" fill="#ffcf33"/>'; });
  add("net", function () { return '<path d="M0 0 V-46" stroke="#a0632d" stroke-width="3"/><ellipse cx="0" cy="-58" rx="11" ry="13" fill="#fff" fill-opacity=".5" stroke="#2eb67d" stroke-width="2.5"/>'; });
  add("doll", function (o) { var h = o.h || "#8b5a2b"; return shadow(8) + '<path d="M-3 -10 V0 M3 -10 V0" stroke="' + SK + '" stroke-width="3"/><path d="M-5 -28 L5 -28 L10 -9 L-10 -9 Z" fill="' + (o.c || "#2eb67d") + '"/><path d="M-5 -26 L-10 -14 M5 -26 L10 -14" stroke="' + SK + '" stroke-width="2.5" stroke-linecap="round"/><path d="M-9 -34 Q-11 -20 -7 -18 L7 -18 Q11 -20 9 -34 Z" fill="' + h + '"/><circle cx="0" cy="-35" r="7" fill="' + SK + '"/><path d="M-8 -34 Q-8 -44 0 -44 Q8 -44 8 -34 Q4 -39 0 -38 Q-4 -39 -8 -34 Z" fill="' + h + '"/><circle cx="-2.5" cy="-35" r="1" fill="' + INK + '"/><circle cx="2.5" cy="-35" r="1" fill="' + INK + '"/><path d="M-2 -32 q2 1.5 4 0" stroke="' + INK + '" stroke-width=".8" fill="none"/>'; });
  add("drum", function () { return '<rect x="-16" y="-22" width="32" height="22" fill="#e5484d"/><path d="M-16 -18 l8 14 l8 -14 l8 14 l8 -14" stroke="#fff" stroke-width="2" fill="none"/><ellipse cx="0" cy="-22" rx="16" ry="5" fill="#f5f0e6" stroke="#ccc"/><path d="M-8 -26 L-20 -40 M8 -26 L20 -40" stroke="#a0632d" stroke-width="2.5"/>'; });
  add("flag", function (o) { return '<path d="M0 0 V-56" stroke="#888" stroke-width="2.5"/><path d="M0 -56 L26 -48 L0 -40 Z" fill="' + (o.c || "#e5484d") + '"/>'; });
  add("gift", function (o) { return '<rect x="-18" y="-28" width="36" height="28" fill="' + (o.c || "#9b6bff") + '"/><rect x="-20" y="-32" width="40" height="7" fill="' + (o.c || "#9b6bff") + '" stroke="#000" stroke-opacity=".1"/><rect x="-3" y="-32" width="6" height="32" fill="#ffcf33"/><path d="M0 -32 Q-14 -44 -10 -34 Q-6 -30 0 -32 Q14 -44 10 -34 Q6 -30 0 -32 Z" fill="#ffcf33"/>'; });
  add("balloon", function (o) { return '<path d="M0 0 Q-6 -16 0 -30 Q6 -40 0 -46" stroke="#999" stroke-width="1" fill="none"/><ellipse cx="0" cy="-62" rx="13" ry="16" fill="' + (o.c || "#ff5d8f") + '"/><path d="M-3 -46 L0 -46 L3 -46 L0 -43 Z" fill="' + (o.c || "#ff5d8f") + '"/><ellipse cx="-5" cy="-68" rx="3" ry="5" fill="#fff" opacity=".4"/>'; });
  add("bk", function (o) { return '<rect x="-11" y="-30" width="22" height="30" rx="2" fill="' + (o.c || "#3b82f6") + '"/><rect x="-11" y="-30" width="4" height="30" fill="#000" opacity=".2"/><rect x="-3" y="-24" width="10" height="4" fill="#fff" opacity=".7"/>'; });
  add("books", function () { return '<rect x="-20" y="-8" width="40" height="8" rx="1" fill="#e5484d"/><rect x="-17" y="-16" width="34" height="8" rx="1" fill="#3b82f6"/><rect x="-19" y="-24" width="38" height="8" rx="1" fill="#2eb67d"/><rect x="-15" y="-32" width="30" height="8" rx="1" fill="#ffcf33"/>'; });
  add("shelf", function () { var r = seeded(4), g = '<rect x="-60" y="-140" width="120" height="140" fill="#9a6838"/>'; for (var s = 0; s < 4; s++) { var y = -132 + s * 34, x = -54; while (x < 50) { var w = 6 + Math.floor(r() * 6), h = 20 + Math.floor(r() * 8); g += '<rect x="' + x + '" y="' + (y + 28 - h) + '" width="' + w + '" height="' + h + '" fill="' + CONF[Math.floor(r() * 6)] + '"/>'; x += w + 1; } g += '<rect x="-60" y="' + (y + 28) + '" width="120" height="6" fill="#7a4f2a"/>'; } return g; });
  add("plant", function (o) { return '<path d="M0 0 V-40" stroke="#3f9d47" stroke-width="3"/><path d="M0 -14 Q-16 -18 -18 -30 Q-4 -28 0 -14 M0 -26 Q16 -30 18 -42 Q4 -40 0 -26 M0 -38 Q-10 -46 -8 -54 Q2 -48 0 -38" fill="#4caf50"/>' + (o.fruit ? '<circle cx="-8" cy="-12" r="5" fill="' + o.fruit + '"/><circle cx="9" cy="-22" r="5" fill="' + o.fruit + '"/>' : ''); });
  add("sprout", function () { return '<path d="M0 0 V-12" stroke="#3f9d47" stroke-width="2.5"/><path d="M0 -12 Q-10 -12 -12 -20 Q-2 -20 0 -12 M0 -12 Q10 -12 12 -20 Q2 -20 0 -12" fill="#5cc163"/><ellipse cx="0" cy="0" rx="12" ry="3" fill="#7a4f2a"/>'; });
  add("nest", function (o) { var e = ""; for (var i = 0; i < (o.n != null ? +o.n : 3); i++) e += '<ellipse cx="' + (-8 + i * 8) + '" cy="-12" rx="4.5" ry="6" fill="#9fd8f0"/>'; return e + '<path d="M-20 -12 Q-18 0 0 0 Q18 0 20 -12 Z" fill="#a0632d"/><path d="M-18 -8 q9 4 18 0 q9 -4 18 0 M-16 -4 q8 3 16 0 q8 -3 16 0" stroke="#7a4f2a" fill="none"/>'; });
  add("can", function () { return '<path d="M-14 -26 L14 -26 L12 0 L-12 0 Z" fill="#2eb67d"/><path d="M14 -18 L30 -32" stroke="#2eb67d" stroke-width="5"/><ellipse cx="31" cy="-33" rx="4" ry="2" fill="#239a68"/><path d="M-12 -26 Q0 -40 12 -26" stroke="#239a68" stroke-width="3" fill="none"/><path d="M36 -30 l4 6 M38 -36 l6 4 M34 -24 l2 7" stroke="#4fb3e8" stroke-width="2" stroke-linecap="round"/>'; });
  add("tub", function () { return '<path d="M-70 -50 L70 -50 Q70 -12 40 -10 L-40 -10 Q-70 -12 -70 -50 Z" fill="#fff" stroke="#cfdde3" stroke-width="2"/><path d="M-50 -10 l-4 10 M50 -10 l4 10" stroke="#aaa" stroke-width="4"/><g fill="#fff" stroke="#cfe8f3"><circle cx="-50" cy="-54" r="9"/><circle cx="-34" cy="-58" r="11"/><circle cx="-16" cy="-54" r="8"/><circle cx="20" cy="-56" r="10"/><circle cx="38" cy="-54" r="9"/><circle cx="54" cy="-57" r="7"/></g>'; });
  add("log", function () { return '<rect x="-34" y="-16" width="68" height="16" rx="8" fill="#8b5a2b"/><ellipse cx="32" cy="-8" rx="5" ry="8" fill="#c9965a"/><path d="M-20 -10 h16 M-6 -5 h18" stroke="#6b4423" stroke-width="1.5"/>'; });
  add("lily", function () { return '<path d="M0 0 A20 6 0 1 1 1 0 L0 -6 Z" fill="#3f9d47"/>'; });
  add("rock", function () { return '<path d="M-22 0 Q-24 -18 -6 -22 Q14 -26 22 -10 Q24 0 18 0 Z" fill="#9a9a9a"/>'; });
  add("puddle", function () { return '<ellipse cx="0" cy="-3" rx="34" ry="7" fill="#7ec8f0"/>'; });
  add("umbrella", function (o) { return '<path d="M0 -60 V-8 q0 6 -6 6" stroke="#555" stroke-width="2.5" fill="none"/><path d="M-30 -56 Q0 -90 30 -56 Q22 -62 15 -56 Q8 -62 0 -56 Q-8 -62 -15 -56 Q-22 -62 -30 -56 Z" fill="' + (o.c || "#ffcf33") + '"/>'; });
  add("hay", function () { return '<rect x="-24" y="-26" width="48" height="26" rx="4" fill="#e8c35a"/><path d="M-24 -18 H24 M-24 -9 H24 M-14 -26 v26 M14 -26 v26" stroke="#c9a03a" stroke-width="1.5"/>'; });
  add("stalk", function () { return '<path d="M0 0 V-110" stroke="#4caf50" stroke-width="4"/><path d="M0 -30 Q-24 -40 -28 -56 M0 -56 Q24 -66 28 -82 M0 -80 Q-18 -92 -20 -104" stroke="#5cc163" stroke-width="5" fill="none" stroke-linecap="round"/><g transform="translate(8,-46) scale(.7)"><ellipse cx="0" cy="-18" rx="8" ry="17" fill="#ffd23f"/><path d="M-2 0 Q-14 -10 -10 -26 Q-6 -10 0 -2 Z" fill="#6fbf4a"/></g>'; });
  add("stand", function (o) { var t = o.t || ""; return '<rect x="-56" y="-100" width="5" height="100" fill="#b07a45"/><rect x="51" y="-100" width="5" height="100" fill="#b07a45"/><path d="M-62 -100 H62 L56 -84 H-56 Z" fill="#ff8fb3"/><path d="M-40 -100 l-4 16 M-16 -100 l-2 16 M8 -100 l0 16 M32 -100 l3 16" stroke="#fff" stroke-width="7"/><rect x="-58" y="-50" width="116" height="50" fill="#f4e1b8" stroke="#c9a05a" stroke-width="2"/><text x="0" y="-20" font-size="' + (t.length > 10 ? 13 : 17) + '" font-weight="700" fill="#e5484d" text-anchor="middle" font-family="Andika,Trebuchet MS,sans-serif">' + t + '</text>'; });
  add("sign", function (o) { var t = o.t || ""; return '<rect x="-3" y="-60" width="6" height="60" fill="#8b5a2b"/><rect x="-' + (t.length * 4.6 + 12) + '" y="-82" width="' + (t.length * 9.2 + 24) + '" height="30" rx="5" fill="#fff4dc" stroke="#8b5a2b" stroke-width="3"/><text x="0" y="-61" font-size="16" font-weight="700" fill="#5a3a1a" text-anchor="middle" font-family="Andika,Trebuchet MS,sans-serif">' + t + '</text>'; });
  add("paper", function () { return '<rect x="-20" y="-4" width="40" height="4" fill="#fff" stroke="#ddd"/><path d="M-14 -3 A14 14 0 0 1 14 -3" stroke="#e5484d" stroke-width="2.5" fill="none"/><path d="M-10 -3 A10 10 0 0 1 10 -3" stroke="#ffcf33" stroke-width="2.5" fill="none"/><path d="M-6 -3 A6 6 0 0 1 6 -3" stroke="#3b82f6" stroke-width="2.5" fill="none"/>'; });
  add("rope", function () { return '<path d="M-22 -40 Q-30 14 0 10 Q30 14 22 -40" stroke="#e5484d" stroke-width="2.5" fill="none"/>'; });
  add("pond", function (o) { return '<ellipse cx="0" cy="-8" rx="' + (o.w || 120) + '" ry="16" fill="#5bbbe8"/><ellipse cx="0" cy="-10" rx="' + ((o.w || 120) - 10) + '" ry="11" fill="#7ccbf0"/>'; });
  add("mud", function () { return '<ellipse cx="0" cy="-3" rx="34" ry="8" fill="#8b5a2b"/><ellipse cx="-8" cy="-5" rx="12" ry="3" fill="#a0703c"/>'; });
  add("shovel", function () { return '<path d="M0 -6 V-56" stroke="#a0632d" stroke-width="3.5"/><path d="M-6 -60 H6" stroke="#a0632d" stroke-width="3.5" stroke-linecap="round"/><path d="M-8 -8 L8 -8 L6 6 L0 12 L-6 6 Z" fill="#9aa5b4"/>'; });
  add("wmelon", function () { return '<ellipse cx="0" cy="-16" rx="26" ry="16" fill="#3f9d47"/><path d="M-20 -24 Q0 -30 20 -24 M-24 -14 Q0 -20 24 -14 M-20 -6 Q0 -10 20 -6" stroke="#2c7a34" stroke-width="3" fill="none"/>'; });
  add("bell", function () { return '<path d="M0 -40 V-34" stroke="#a0632d" stroke-width="3"/><path d="M-14 -6 Q-14 -34 0 -34 Q14 -34 14 -6 Z" fill="#ffcf33" stroke="#e0a800"/><circle cx="0" cy="-3" r="4" fill="#e0a800"/>'; });
  add("rod", function () { return '<path d="M0 0 L46 -70" stroke="#a0632d" stroke-width="3"/><path d="M46 -70 Q60 -40 58 10" stroke="#999" stroke-width="1" fill="none"/>'; });
  add("brush", function () { return '<rect x="-3" y="-34" width="6" height="22" rx="3" fill="#ff8fb3"/><rect x="-9" y="-48" width="18" height="16" rx="5" fill="#ff6fae"/><path d="M-6 -48 v-4 M-2 -48 v-4 M2 -48 v-4 M6 -48 v-4" stroke="#fff" stroke-width="1.5"/>'; });
  add("rainbow", function () { var g = ""; ["#e5484d", "#f97316", "#ffcf33", "#2eb67d", "#3b82f6", "#8b5cf6"].forEach(function (c, i) { var r = 120 - i * 9; g += '<path d="M-' + r + ' 0 A' + r + ' ' + r + ' 0 0 1 ' + r + ' 0" stroke="' + c + '" stroke-width="9" fill="none" opacity=".85"/>'; }); return g; });
  /* ---- Sets 11-20 additions ---- */
  function plushBunny(c, btn) {
    var eye = btn ? '<circle cx="-5" cy="-37" r="3" fill="#333"/><circle cx="5" cy="-37" r="3" fill="#333"/><circle cx="-5.8" cy="-37" r=".7" fill="#fff"/><circle cx="-4.2" cy="-37" r=".7" fill="#fff"/><circle cx="4.2" cy="-37" r=".7" fill="#fff"/><circle cx="5.8" cy="-37" r=".7" fill="#fff"/>' : '<circle cx="-5" cy="-37" r="1.9" fill="' + INK + '"/><circle cx="5" cy="-37" r="1.9" fill="' + INK + '"/>';
    return shadow(14) + '<ellipse cx="-7" cy="-2" rx="6" ry="3.5" fill="' + c + '" stroke="#ccc"/><ellipse cx="7" cy="-2" rx="6" ry="3.5" fill="' + c + '" stroke="#ccc"/><ellipse cx="0" cy="-14" rx="13" ry="14" fill="' + c + '" stroke="#ccc"/><ellipse cx="-6" cy="-58" rx="4.5" ry="13" fill="' + c + '" stroke="#ccc"/><ellipse cx="6" cy="-58" rx="4.5" ry="13" fill="' + c + '" stroke="#ccc"/><ellipse cx="-6" cy="-58" rx="2" ry="9" fill="#ffb3c1"/><ellipse cx="6" cy="-58" rx="2" ry="9" fill="#ffb3c1"/><circle cx="0" cy="-36" r="12" fill="' + c + '" stroke="#ccc"/>' + eye + '<path d="M-1.6 -32 h3.2 l-1.6 2 Z" fill="#ff7f9b"/><path d="M-3 -29 q1.5 1.5 3 0 q1.5 1.5 3 0" stroke="' + INK + '" stroke-width=".8" fill="none"/>' + (btn ? '<path d="M-7 -24 L0 -21 L7 -24 L7 -18 L0 -21 L-7 -18 Z" fill="#ff6fae"/>' : '');
  }
  add("buttons", function () { return plushBunny("#f6f6f6", 1); });
  add("bunny", function () { return plushBunny("#c49a6c", 0); });
  add("finley", function () { return shadow(24) + '<g fill="#6b4423"><rect x="-18" y="-10" width="8" height="10" rx="3"/><rect x="10" y="-10" width="8" height="10" rx="3"/></g><path d="M-22 -22 q-8 4 -6 12" stroke="#5a3a1a" stroke-width="3" fill="none"/><ellipse cx="0" cy="-18" rx="22" ry="15" fill="#8b5a2b"/><ellipse cx="-2" cy="-30" rx="17" ry="12" fill="#5a3a1a"/><g transform="translate(18,-28)"><circle r="12" fill="#5a3a1a"/><path d="M-9 -8 q-5 -6 -2 -10 M9 -8 q5 -6 2 -10" stroke="#f5e6c8" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse cx="3" cy="5" rx="7" ry="5" fill="#a0703c"/><circle cx="-3" cy="-2" r="2.6" fill="#222"/><circle cx="7" cy="-2" r="2.6" fill="#222"/><circle cx="-3.6" cy="-2.6" r=".8" fill="#fff"/><circle cx="6.4" cy="-2.6" r=".8" fill="#fff"/><path d="M1 7 q2 2 4 0" stroke="' + INK + '" fill="none"/></g>'; });
  add("elephant", function () { return shadow(42) + '<g fill="#98a3b2"><rect x="-32" y="-32" width="13" height="32" rx="4"/><rect x="-16" y="-32" width="13" height="32" rx="4"/><rect x="10" y="-32" width="13" height="32" rx="4"/><rect x="24" y="-32" width="13" height="32" rx="4"/></g><path d="M-42 -50 q-10 6 -6 18" stroke="#98a3b2" stroke-width="3" fill="none"/><ellipse cx="-2" cy="-50" rx="42" ry="29" fill="#a9b4c2"/><path d="M50 -56 Q64 -30 56 -8 q-3 5 -8 2 Q54 -30 40 -46 Z" fill="#a9b4c2"/><circle cx="38" cy="-62" r="21" fill="#a9b4c2"/><ellipse cx="26" cy="-58" rx="15" ry="19" fill="#98a3b2" stroke="#8792a2"/><path d="M48 -48 q6 6 12 4" stroke="#fffaf0" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="44" cy="-67" r="2.4" fill="' + INK + '"/><circle cx="50" cy="-58" r="3" fill="' + CH + '" opacity=".5"/>'; });
  add("jello", function (o) { return '<ellipse cx="0" cy="-2" rx="32" ry="5" fill="#fff" stroke="#ddd"/><path d="M-22 -4 Q-25 -36 -10 -40 Q0 -44 10 -40 Q25 -36 22 -4 Z" fill="' + (o.c || "#ff4d6d") + '" opacity=".88"/><path d="M-12 -32 Q-14 -18 -10 -10" stroke="#fff" stroke-width="3" opacity=".5" fill="none" stroke-linecap="round"/>' + (o.wob ? '<path d="M-34 -24 q-4 4 0 8 M34 -24 q4 4 0 8 M-30 -36 q-4 4 0 8 M30 -36 q4 4 0 8" stroke="#7d8ca3" stroke-width="2" fill="none"/>' : ''); });
  add("lolli", function (o) { return '<rect x="-1.5" y="-30" width="3" height="30" fill="#f5f5f5" stroke="#ddd"/><circle cx="0" cy="-42" r="14" fill="' + (o.c || "#ff6fae") + '"/><path d="M0 -42 m-2 0 a2 2 0 1 1 4 0 a5 5 0 1 1 -9 0 a8 8 0 1 1 16 0 a11 11 0 1 1 -21 0" stroke="#fff" stroke-width="2.2" fill="none"/>'; });
  add("desk", function (o) { return '<rect x="-30" y="-44" width="60" height="7" rx="2" fill="#e8b46a"/><path d="M-24 -37 V0 M24 -37 V0" stroke="#7d8ca3" stroke-width="4"/>' + (o.c ? '<rect x="-14" y="-50" width="28" height="6" fill="' + o.c + '"/>' : ''); });
  add("hole", function (o) { return '<ellipse cx="0" cy="-2" rx="9" ry="3" fill="#2d4a22"/><path d="M0 -2 V-70" stroke="#ddd" stroke-width="2.5"/><path d="M0 -70 L28 -62 L0 -54 Z" fill="' + (o.c || "#e5484d") + '"/>'; });
  add("club", function () { return '<path d="M0 0 L2 -56" stroke="#999" stroke-width="2.5"/><rect x="-2" y="-62" width="7" height="9" rx="2" fill="#333"/><path d="M-6 2 L8 2" stroke="#666" stroke-width="4" stroke-linecap="round"/>'; });
  add("gball", function () { return '<circle cx="0" cy="-3.5" r="3.5" fill="#fff" stroke="#ccc"/>'; });
  add("xtree", function () { var g = '<rect x="-7" y="-14" width="14" height="14" fill="#7a4f2a"/><path d="M0 -112 L-30 -70 L-18 -70 L-42 -40 L-26 -40 L-50 -12 L50 -12 L26 -40 L42 -40 L18 -70 L30 -70 Z" fill="#2f8f4e"/>'; [[-20, -24, "#e5484d"], [14, -30, "#ffcf33"], [-6, -52, "#3b82f6"], [20, -56, "#ff6fae"], [-14, -80, "#ffcf33"], [8, -88, "#e5484d"], [34, -20, "#9b6bff"], [-34, -30, "#2eb67d"]].forEach(function (p) { g += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4.5" fill="' + p[2] + '"/>'; }); return g + '<path d="M-36 -18 Q0 -10 36 -34 M-26 -46 Q0 -40 26 -62 M-16 -76 Q0 -70 16 -88" stroke="#ffe680" stroke-width="2" fill="none"/><g transform="translate(0,-116) scale(1.4)">' + star("#ffcf33") + '</g>'; });
  add("stocking", function (o) { return '<path d="M-8 -40 L8 -40 L8 -14 Q8 0 -6 0 L-16 0 Q-22 -4 -16 -10 L-8 -14 Z" fill="' + (o.c || "#e5484d") + '"/><rect x="-10" y="-46" width="20" height="9" rx="3" fill="#fff"/>'; });
  add("ghost", function () { return '<path d="M-18 0 L-18 -30 Q-18 -50 0 -50 Q18 -50 18 -30 L18 0 L12 -6 L6 0 L0 -6 L-6 0 L-12 -6 Z" fill="#fff" stroke="#ddd"/><ellipse cx="-6" cy="-32" rx="3" ry="4.5" fill="#333"/><ellipse cx="6" cy="-32" rx="3" ry="4.5" fill="#333"/><ellipse cx="0" cy="-22" rx="3" ry="3.5" fill="#333"/>'; });
  add("bucket", function () { return '<path d="M-12 -24 Q0 -40 12 -24" stroke="#333" stroke-width="2" fill="none"/><path d="M-15 -24 L15 -24 L12 0 L-12 0 Z" fill="#f08a24"/><path d="M-8 -16 l3 -4 l3 4 Z M2 -16 l3 -4 l3 4 Z M-7 -8 Q0 -2 7 -8" fill="#5a2d0c" stroke="#5a2d0c"/><circle cx="-6" cy="-27" r="3.5" fill="#e5484d"/><rect x="2" y="-30" width="7" height="5" rx="2" fill="#9b6bff"/>'; });
  add("basket", function () { return '<path d="M-20 -24 Q0 -54 20 -24" stroke="#a0632d" stroke-width="4" fill="none"/><ellipse cx="-9" cy="-26" rx="5" ry="6.5" fill="#ff8fb3"/><ellipse cx="1" cy="-28" rx="5" ry="6.5" fill="#7ccbf0"/><ellipse cx="11" cy="-26" rx="5" ry="6.5" fill="#ffe14d"/><path d="M-22 -24 L22 -24 L17 0 L-17 0 Z" fill="#c9965a"/><path d="M-20 -16 H20 M-19 -8 H19 M-10 -24 V0 M0 -24 V0 M10 -24 V0" stroke="#a0632d" stroke-width="1.5"/><path d="M-22 -24 Q-16 -30 -10 -24 Q-4 -30 2 -24 Q8 -30 14 -24 Q18 -28 22 -24" fill="#6fbf4a"/>'; });
  add("usflag", function () { var g = '<path d="M0 0 V-80" stroke="#888" stroke-width="3"/><rect x="0" y="-80" width="56" height="36" fill="#fff"/>'; for (var i = 0; i < 7; i++) g += '<rect x="0" y="' + (-80 + i * 5.2) + '" width="56" height="2.6" fill="#d63a2f"/>'; return g + '<rect x="0" y="-80" width="24" height="18" fill="#1e3a8a"/><g fill="#fff"><circle cx="5" cy="-75" r="1"/><circle cx="12" cy="-75" r="1"/><circle cx="19" cy="-75" r="1"/><circle cx="8" cy="-70" r="1"/><circle cx="16" cy="-70" r="1"/><circle cx="5" cy="-66" r="1"/><circle cx="12" cy="-66" r="1"/><circle cx="19" cy="-66" r="1"/></g>'; });
  THINGS.fireworks = function (x, y, o) { var g = "", r = seeded(+o.seed || 21); [[80, 60], [200, 45], [320, 70], [140, 110], [270, 120]].forEach(function (b, i) { var c = CONF[i % 6], d = ""; for (var k = 0; k < 12; k++) { var a = k * Math.PI / 6, l = 18 + r() * 10; d += 'M' + n(b[0] + Math.cos(a) * 6) + ' ' + n(b[1] + Math.sin(a) * 6) + ' L' + n(b[0] + Math.cos(a) * l) + ' ' + n(b[1] + Math.sin(a) * l) + ' '; } g += '<path d="' + d + '" stroke="' + c + '" stroke-width="2.5" stroke-linecap="round"/><circle cx="' + b[0] + '" cy="' + b[1] + '" r="3" fill="#fff"/>'; }); return g; };
  add("palm", function () { return '<path d="M0 0 Q-6 -50 6 -110" stroke="#a0703c" stroke-width="10" fill="none"/><path d="M-4 -20 h10 M-4 -40 h10 M-1 -60 h10 M2 -80 h10" stroke="#8b5a2b" stroke-width="2"/><g fill="#3f9d47"><path d="M6 -110 Q-30 -120 -50 -96 Q-24 -108 6 -106 Z"/><path d="M6 -110 Q40 -124 62 -98 Q34 -110 6 -106 Z"/><path d="M6 -110 Q-14 -140 -36 -138 Q-10 -128 4 -108 Z"/><path d="M6 -110 Q28 -142 50 -136 Q26 -126 8 -108 Z"/><path d="M6 -110 Q4 -86 -20 -70 Q0 -90 4 -108 Z"/></g><circle cx="2" cy="-104" r="5" fill="#7a4f2a"/><circle cx="11" cy="-103" r="5" fill="#7a4f2a"/>'; });
  add("dolphin", function () { return '<path d="M-36 0 Q-30 -40 10 -44 Q34 -44 40 -30 Q30 -34 22 -32 Q30 -20 24 -16 Q16 -26 4 -26 Q-20 -24 -28 4 Z" fill="#7d9bb8"/><path d="M-34 0 l-8 8 l10 -2 Z" fill="#7d9bb8"/><path d="M-4 -42 l6 -14 l6 12 Z" fill="#7d9bb8"/><circle cx="26" cy="-38" r="2" fill="' + INK + '"/>'; });
  add("plane", function () { return '<path d="M-60 -10 Q-60 -22 -40 -22 L50 -22 Q66 -22 70 -12 Q66 -2 50 -2 L-44 -2 Q-60 -2 -60 -10 Z" fill="#fff" stroke="#c9d6e3"/><path d="M-50 -22 L-62 -46 L-46 -46 L-30 -22 Z" fill="#3b82f6"/><path d="M-6 -12 L-30 14 L-14 14 L18 -12 Z" fill="#c9d6e3"/><g fill="#7ccbf0">' + [-30, -18, -6, 6, 18, 30].map(function (x) { return '<circle cx="' + x + '" cy="-14" r="3"/>'; }).join("") + '</g><path d="M56 -18 Q64 -16 66 -12 L56 -12 Z" fill="#7ccbf0"/>'; });
  add("coaster", function (o) { return '<path d="M-150 0 V-40 M-90 0 V-110 M-30 0 V-60 M30 0 V-20 M90 0 V-90 M150 0 V-50" stroke="#c9b28a" stroke-width="4"/><path d="M-170 -30 Q-120 -50 -90 -110 Q-60 -170 -30 -60 Q0 10 30 -20 Q60 -50 90 -90 Q120 -130 150 -50 L170 -40" stroke="#e5484d" stroke-width="6" fill="none"/>' + (o.who ? '<g transform="translate(-74,-128) rotate(-40)"><rect x="-20" y="-8" width="40" height="16" rx="5" fill="#3b82f6"/>' + heads(o.who, -20, 20, -14, .45, "big") + '</g>' : ''); });
  add("palace", function () { var t = function (x, h) { return '<rect x="' + (x - 11) + '" y="' + (-h) + '" width="22" height="' + h + '" fill="#f6d7ef"/><path d="M' + (x - 14) + ' ' + (-h) + ' L' + x + ' ' + (-h - 30) + ' L' + (x + 14) + ' ' + (-h) + ' Z" fill="#8b5cf6"/><path d="M' + x + ' ' + (-h - 30) + ' v-10 l9 3 l-9 3" stroke="#888" fill="#ffcf33"/>'; }; return '<rect x="-50" y="-60" width="100" height="60" fill="#f6d7ef"/><path d="M-12 0 V-28 Q0 -40 12 -28 V0 Z" fill="#c084fc"/>' + t(-52, 90) + t(52, 90) + t(0, 120) + '<path d="M-50 -60 v-6 h8 v6 h8 v-6 h8 v6 h8 v-6 h8 v6 h8 v-6 h8 v6 h8 v-6 h8 v6 h8 v-6 h8 v6 h8 v-6 h8 v6" fill="#f6d7ef" stroke="#f6d7ef"/>'; });
  add("mic", function () { return '<path d="M-12 0 H12 M0 0 V-60" stroke="#444" stroke-width="3"/><rect x="-5" y="-78" width="10" height="20" rx="5" fill="#666"/>'; });
  add("vball", function () { return shadow(12) + '<circle cx="0" cy="-12" r="12" fill="#fff" stroke="#999"/><path d="M-12 -12 Q-2 -14 4 -23 M0 -12 Q8 -6 10 4 M0 -12 Q-8 -4 -6 -1" stroke="#3b82f6" stroke-width="3" fill="none"/><path d="M4 -23 Q10 -18 12 -12" stroke="#ffcf33" stroke-width="3" fill="none"/>'; });
  add("vnet", function () { var g = '<path d="M-90 0 V-110 M90 0 V-110" stroke="#666" stroke-width="5"/><rect x="-90" y="-110" width="180" height="34" fill="#fff" fill-opacity=".3" stroke="#fff" stroke-width="3"/>'; for (var x = -80; x < 90; x += 10) g += '<path d="M' + x + ' -110 V-76" stroke="#fff" stroke-width="1"/>'; return g + '<path d="M-90 -93 H90" stroke="#fff" stroke-width="1"/>'; });
  add("teapot", function (o) { return '<path d="M18 -16 Q30 -18 32 -32" stroke="' + (o.c || "#ff8fb3") + '" stroke-width="5" fill="none"/><path d="M-18 -26 q-12 2 -8 14" stroke="' + (o.c || "#ff8fb3") + '" stroke-width="4" fill="none"/><ellipse cx="0" cy="-15" rx="20" ry="15" fill="' + (o.c || "#ff8fb3") + '"/><ellipse cx="0" cy="-30" rx="10" ry="3.5" fill="#fff"/><circle cx="0" cy="-34" r="3" fill="#fff"/><path d="M-10 -14 h20" stroke="#fff" stroke-width="2" stroke-dasharray="3 3"/>'; });
  add("teacup", function (o) { return '<ellipse cx="0" cy="-2" rx="14" ry="3" fill="#fff" stroke="#ddd"/><path d="M-10 -14 L10 -14 Q10 -2 0 -2 Q-10 -2 -10 -14 Z" fill="' + (o.c || "#fff") + '" stroke="#e0b8c8"/><path d="M10 -12 q6 0 4 6 q-2 2 -5 1" stroke="#e0b8c8" stroke-width="2" fill="none"/>'; });
  add("shirt", function (o) { return '<path d="M-12 -40 L-24 -34 L-30 -22 L-20 -18 L-18 -24 L-18 0 L18 0 L18 -24 L20 -18 L30 -22 L24 -34 L12 -40 Q0 -34 -12 -40 Z" fill="' + (o.c || "#ff6fae") + '"/><g transform="translate(0,-18) scale(.8)"><path d="M0 8 C-14 -3 -10 -16 0 -8 C10 -16 14 -3 0 8 Z" fill="' + (o.d || "#fff") + '"/></g>'; });
  add("loon", function () { return '<ellipse cx="0" cy="-8" rx="20" ry="8" fill="#222"/><g fill="#fff"><circle cx="-10" cy="-10" r="1.3"/><circle cx="-4" cy="-11" r="1.3"/><circle cx="2" cy="-10" r="1.3"/><circle cx="-7" cy="-6" r="1.3"/><circle cx="-1" cy="-6" r="1.3"/></g><path d="M12 -12 Q14 -24 20 -26" stroke="#222" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="21" cy="-27" r="5.5" fill="#1f3a2a"/><path d="M25 -27 L34 -25 L25 -24 Z" fill="#333"/><circle cx="23" cy="-28" r="1.4" fill="#e5484d"/><path d="M14 -18 h6" stroke="#fff" stroke-width="1.5" stroke-dasharray="1.5 1.5"/>'; });
  add("rocket", function (o) { return (o.go ? '<path d="M-10 4 Q0 40 10 4 Z" fill="#ff8a2a"/><path d="M-5 4 Q0 24 5 4 Z" fill="#ffd23f"/>' : '') + '<path d="M-18 0 L-30 10 L-18 -24 Z M18 0 L30 10 L18 -24 Z" fill="#e5484d"/><path d="M-18 0 L-18 -60 Q0 -100 18 -60 L18 0 Z" fill="#f4f4f4" stroke="#ccc"/><circle cx="0" cy="-50" r="11" fill="#7ccbf0" stroke="#999" stroke-width="2"/>' + heads(o.who || [], -6, 6, -50, .5) + '<rect x="-18" y="-10" width="36" height="6" fill="#e5484d"/>'; });
  add("ant", function () { return '<path d="M-8 -2 l-3 3 M0 -2 v4 M8 -2 l3 3" stroke="#222" stroke-width="1.2"/><circle cx="-8" cy="-5" r="4" fill="#222"/><circle cx="0" cy="-5" r="3" fill="#222"/><circle cx="8" cy="-6" r="3.6" fill="#222"/><path d="M10 -9 l3 -5 M8 -9 l1 -6" stroke="#222"/>'; });
  add("cane", function () { return '<path d="M0 0 V-46 Q0 -54 -7 -54 Q-12 -54 -12 -49" stroke="#8b5a2b" stroke-width="3.5" fill="none" stroke-linecap="round"/>'; });
  add("weights", function (o) { return '<rect x="-14" y="-6" width="28" height="4" fill="#666"/><rect x="-18" y="-10" width="6" height="12" rx="2" fill="' + (o.c || "#ff6fae") + '"/><rect x="12" y="-10" width="6" height="12" rx="2" fill="' + (o.c || "#ff6fae") + '"/>'; });
  add("tv", function () { return '<rect x="-46" y="-70" width="92" height="56" rx="5" fill="#222"/><rect x="-40" y="-64" width="80" height="44" fill="#1f2a5a"/><circle cx="18" cy="-52" r="9" fill="#fff6c8"/><path d="M-40 -20 Q-10 -46 10 -30 L10 -20 Z" fill="#111"/><path d="M-10 -14 L-16 0 M10 -14 L16 0" stroke="#444" stroke-width="3"/>'; });
  add("popcorn", function () { return '<g fill="#fffbe6" stroke="#f0e2b0"><circle cx="-8" cy="-30" r="6"/><circle cx="2" cy="-34" r="6"/><circle cx="10" cy="-29" r="6"/><circle cx="-2" cy="-28" r="5"/></g><path d="M-14 -26 L14 -26 L10 0 L-10 0 Z" fill="#fff"/><path d="M-9 -26 L-7 0 M0 -26 V0 M9 -26 L7 0" stroke="#e5484d" stroke-width="3.5"/>'; });
  add("wheat", function () { var g = ""; [-12, -6, 0, 6, 12].forEach(function (x, i) { g += '<path d="M' + x + ' 0 Q' + (x + (i - 2) * 2) + ' -30 ' + (x + (i - 2) * 4) + ' -52" stroke="#d9b45a" stroke-width="2" fill="none"/><ellipse cx="' + (x + (i - 2) * 4) + '" cy="-60" rx="3.5" ry="10" fill="#e8c35a"/>'; }); return g; });
  add("beet", function () { return '<path d="M0 -36 Q-14 -50 -10 -62 M0 -36 Q2 -54 8 -64 M0 -36 Q14 -46 16 -56" stroke="#4caf50" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M-12 -34 Q-14 -10 0 4 Q14 -10 12 -34 Q0 -40 -12 -34 Z" fill="#f2e8d5" stroke="#d6c8a8"/>'; });
  add("soy", function () { return '<g fill="#5cc163"><circle cx="-12" cy="-16" r="10"/><circle cx="10" cy="-18" r="11"/><circle cx="0" cy="-28" r="11"/><circle cx="0" cy="-10" r="10"/></g><path d="M-6 -20 q4 -2 6 2 M6 -12 q4 -2 6 2 M-2 -32 q4 -2 6 2" stroke="#a7d878" stroke-width="3" fill="none" stroke-linecap="round"/>'; });
  add("beans", function () { var g = "", r = seeded(31); for (var i = 0; i < 18; i++) g += '<ellipse cx="' + n(r() * 30 - 15) + '" cy="' + n(-3 - r() * 10) + '" rx="3" ry="2" fill="#222"/>'; return g; });
  THINGS.leaves = function (x, y, o) { var r = seeded(+o.seed || 17), g = "", cs = ["#f08a24", "#e5484d", "#ffcf33", "#c0582f"]; for (var i = 0; i < 18; i++) g += '<ellipse cx="' + n(r() * 390 + 5) + '" cy="' + n(r() * 190 + 10) + '" rx="6" ry="3" fill="' + cs[i % 4] + '" transform="rotate(' + n(r() * 180) + ' ' + n(r() * 390 + 5) + ' ' + n(r() * 190 + 10) + ')"/>'; return g; };
  add("suitcase", function (o) { return '<path d="M-8 -34 V-40 H8 V-34" stroke="#555" stroke-width="3" fill="none"/><rect x="-20" y="-34" width="40" height="32" rx="5" fill="' + (o.c || "#ff6fae") + '"/><path d="M-10 -34 V-2 M10 -34 V-2" stroke="#000" opacity=".15" stroke-width="3"/><circle cx="-14" cy="0" r="3" fill="#333"/><circle cx="14" cy="0" r="3" fill="#333"/>'; });
  add("owl", function () { return '<ellipse cx="0" cy="-20" rx="15" ry="19" fill="#8b5a2b"/><ellipse cx="0" cy="-16" rx="9" ry="12" fill="#d9b48a"/><path d="M-14 -34 L-12 -44 L-6 -36 Z M14 -34 L12 -44 L6 -36 Z" fill="#8b5a2b"/><circle cx="-6" cy="-30" r="6" fill="#fff"/><circle cx="6" cy="-30" r="6" fill="#fff"/><circle cx="-6" cy="-30" r="3" fill="' + INK + '"/><circle cx="6" cy="-30" r="3" fill="' + INK + '"/><path d="M-2 -24 L0 -20 L2 -24 Z" fill="#ffb800"/><path d="M-6 0 v-3 M6 0 v-3" stroke="#ffb800" stroke-width="2"/>'; });
  add("mouse", function () { return '<path d="M-12 -4 Q-24 -2 -26 -10" stroke="#ff9eb5" stroke-width="1.5" fill="none"/><ellipse cx="0" cy="-6" rx="12" ry="7" fill="#9aa5b4"/><circle cx="8" cy="-13" r="4.5" fill="#9aa5b4"/><circle cx="8" cy="-13" r="2.5" fill="#ffb3c1"/><circle cx="12" cy="-6" r="1.4" fill="' + INK + '"/><circle cx="16" cy="-4" r="1.3" fill="#ff7f9b"/>'; });
  add("starfish", function () { return '<g transform="translate(0,-10) scale(1.6)">' + star("#ff8a5c") + '</g>'; });
  add("ghouse", function () { return '<path d="M-36 -46 L0 -80 L36 -46 Z" fill="#a0632d" stroke="#fff" stroke-width="3"/><rect x="-30" y="-46" width="60" height="46" fill="#b9773a"/><path d="M-30 -46 q5 6 10 0 q5 6 10 0 q5 6 10 0 q5 6 10 0 q5 6 10 0 q5 6 10 0" stroke="#fff" stroke-width="3" fill="none"/><rect x="-8" y="-24" width="16" height="24" rx="8" fill="#e5484d"/><circle cx="-18" cy="-32" r="4" fill="#2eb67d"/><circle cx="18" cy="-32" r="4" fill="#ffcf33"/><circle cx="0" cy="-60" r="4" fill="#ff6fae"/>'; });
  add("fudge", function () { return '<ellipse cx="0" cy="-3" rx="26" ry="5" fill="#fff" stroke="#ddd"/><g fill="#5a3a1a" stroke="#3b2414"><rect x="-18" y="-14" width="11" height="9"/><rect x="-5" y="-14" width="11" height="9"/><rect x="8" y="-14" width="11" height="9"/><rect x="-11" y="-23" width="11" height="9"/><rect x="2" y="-23" width="11" height="9"/></g>'; });
  add("bridge", function () { return '<path d="M-90 0 Q0 -60 90 0" stroke="#a0632d" stroke-width="10" fill="none"/><path d="M-70 -14 V-34 M-35 -30 V-50 M0 -36 V-56 M35 -30 V-50 M70 -14 V-34" stroke="#8b5a2b" stroke-width="4"/><path d="M-70 -34 Q0 -74 70 -34" stroke="#8b5a2b" stroke-width="4" fill="none"/>'; });
  add("icehole", function () { return '<ellipse cx="0" cy="-3" rx="16" ry="5" fill="#1f4f7a" stroke="#fff" stroke-width="2"/>'; });
  add("wagon", function (o) { return heads(o.who || [], -26, 26, -30, .55) + '<rect x="-30" y="-24" width="60" height="16" rx="3" fill="#e5484d"/><circle cx="-18" cy="-6" r="6" fill="#333"/><circle cx="18" cy="-6" r="6" fill="#333"/><path d="M30 -16 L52 -30" stroke="#333" stroke-width="3"/>'; });
  add("cart", function (o) { return heads(o.who || [], -14, 22, -44, .55) + '<path d="M-36 -64 H34 M-30 -64 V-30 M28 -64 V-30" stroke="#fff" stroke-width="4"/><rect x="-36" y="-34" width="72" height="22" rx="6" fill="#fff" stroke="#ccc"/><circle cx="-22" cy="-10" r="9" fill="#333"/><circle cx="22" cy="-10" r="9" fill="#333"/>' + (o.go ? '<g transform="translate(-10,10)">' + MOTION + '</g>' : ''); });
  THINGS.flies = function () { var r = seeded(13), g = ""; for (var i = 0; i < 14; i++) { var x = n(r() * 380 + 10), y = n(r() * 150 + 40); g += '<circle cx="' + x + '" cy="' + y + '" r="7" fill="#fff39a" opacity=".3"/><circle cx="' + x + '" cy="' + y + '" r="2.5" fill="#fff39a"/>'; } return g; };
  THINGS.spark = function (x, y, o) { var r = seeded(+o.seed || 7), g = ""; for (var i = 0; i < 16; i++) g += '<g transform="translate(' + n(r() * 390 + 5) + ',' + n(r() * 105 + 10) + ') scale(' + n(.5 + r() * .7) + ') rotate(' + n(r() * 90) + ')">' + star(CONF[i % 6]) + '</g>'; return g; };
  THINGS.snowfall = function (x, y, o) { var r = seeded(9), g = ""; for (var i = 0; i < 40; i++) g += '<circle cx="' + n(r() * 400) + '" cy="' + n(r() * 200) + '" r="' + n(r() * 2 + 1.2) + '" fill="#fff"/>'; return g; };
  THINGS.rainfall = function () { var r = seeded(5), g = ""; for (var i = 0; i < 45; i++) { var x = n(r() * 400), y = n(r() * 190); g += 'M' + x + ' ' + y + ' l-4 10 '; } return '<path d="' + g + '" stroke="#7ec8f0" stroke-width="2" stroke-linecap="round"/>'; };
  THINGS.q = function (x, y, o) { return '<text x="' + x + '" y="' + y + '" font-size="' + (o.size || 44) + '" font-weight="800" fill="' + (o.c || "#ff7a59") + '" stroke="#fff" stroke-width="2" paint-order="stroke" text-anchor="middle" font-family="Andika,Trebuchet MS,sans-serif">' + (o.t || "?") + '</text>'; };
  THINGS.hops = function (x, y, o) { var sx = x - 190, d = "M" + sx + " " + y; for (var i = 0; i < 3; i++) d += " Q" + (sx + 27 + i * 55) + " " + (y - 60) + " " + (sx + 55 + i * 55) + " " + y; return '<path d="' + d + '" stroke="#7d8ca3" stroke-width="3" stroke-dasharray="6 7" fill="none" stroke-linecap="round" opacity=".7"/>'; };
  THINGS.van = function (x, y, o) {
    var c = o.c || "#e5484d", who = o.who || [], back = who.filter(function (k) { return k !== "D"; }), g = shadow(88);
    if (o.go) g += '<path d="M-96 -66 h-26 M-98 -48 h-32 M-96 -30 h-22" stroke="#7d8ca3" stroke-width="3" stroke-linecap="round" opacity=".6"/>';
    g += '<path d="M-84 -14 L-84 -68 Q-84 -84 -68 -84 L40 -84 Q52 -84 58 -74 L80 -46 Q86 -42 86 -32 L86 -18 Q86 -10 78 -10 L-76 -10 Q-84 -10 -84 -14 Z" fill="' + c + '"/><rect x="-74" y="-76" width="108" height="28" rx="6" fill="#cdeeff"/><path d="M42 -76 L54 -76 L72 -48 L42 -48 Z" fill="#cdeeff"/>';
    g += heads(back, -74, 34, -57, .6);
    if (who.indexOf("D") >= 0) g += '<g transform="translate(52,-59) scale(.6)">' + miniHead("D") + '</g>';
    g += '<rect x="-84" y="-48" width="164" height="10" fill="' + c + '"/><rect x="-84" y="-34" width="166" height="5" fill="#fff" opacity=".45"/><path d="M10 -46 V-14" stroke="#000" opacity=".15" stroke-width="2"/><circle cx="-50" cy="-12" r="13" fill="#333"/><circle cx="-50" cy="-12" r="5" fill="#ccc"/><circle cx="52" cy="-12" r="13" fill="#333"/><circle cx="52" cy="-12" r="5" fill="#ccc"/><circle cx="81" cy="-34" r="4" fill="#ffe680"/>';
    return wrap(x, y, o.s || 1, o.flip, g);
  };
  var DEF_Y = { sun: 55, moon: 50, cloud: 40, rain: 40, heart: 60, q: 90, spark: 0, kite: 70, star: 60, rainbow: 190 };

  /* ---------- backgrounds ---------- */
  function hills(a, b) { return '<path d="M0 196 Q100 184 200 196 T400 194 V250 H0 Z" fill="' + a + '"/><path d="M0 206 Q120 198 250 208 T400 206 V250 H0 Z" fill="' + b + '"/>'; }
  function tufts(c) { var g = ""; [30, 120, 210, 300, 370].forEach(function (x, i) { g += '<path d="M' + x + ' ' + (232 + (i % 2) * 8) + ' l3 -8 l3 8 l3 -10 l3 10" stroke="' + c + '" stroke-width="2" fill="none"/>'; }); return g; }
  function clouds() { return '<g transform="translate(70,45)">' + cloudShape() + '</g><g transform="translate(250,30) scale(.8)">' + cloudShape() + '</g>'; }
  function wall(c, dot) { return '<rect width="400" height="250" fill="' + c + '"/><g fill="' + dot + '">' + [40, 120, 200, 260].map(function (x, i) { return '<circle cx="' + x + '" cy="' + (30 + (i % 2) * 40) + '" r="4"/><circle cx="' + (x + 30) + '" cy="' + (140 + (i % 2) * 20) + '" r="4"/>'; }).join("") + '</g>'; }
  var WOODFLOOR = '<rect y="196" width="400" height="54" fill="#d9a066"/><rect y="191" width="400" height="7" fill="#fff6e8"/><path d="M0 214 H400 M0 232 H400 M90 198 V214 M240 214 V232 M150 232 V250 M330 198 V214" stroke="#b9824a" stroke-width="1.5"/>';
  var WINDOW = '<rect x="292" y="34" width="76" height="64" rx="4" fill="#bfe6ff" stroke="#fff" stroke-width="6"/><path d="M330 34 V98 M292 66 H368" stroke="#fff" stroke-width="4"/>';
  function bg(t, sc) {
    var sun = sc.sunY ? '<circle cx="200" cy="' + sc.sunY + '" r="44" fill="#ff6a3d"/>' : '';
    switch (t) {
      case "room": return wall("#fde9cf", "#f6d4ab") + WINDOW + WOODFLOOR;
      case "bedroom": return wall("#ece4ff", "#d9cdfa") + WINDOW.replace("#bfe6ff", sc.night ? "#22306b" : "#bfe6ff") + '<rect y="196" width="400" height="54" fill="#c9a0dc"/><rect y="191" width="400" height="7" fill="#fff"/>';
      case "kitchen": return '<rect width="400" height="250" fill="#fff1d6"/><g stroke="#f2dcb0" stroke-width="1">' + [20, 50, 80, 110].map(function (y) { return '<path d="M0 ' + y + ' H400"/>'; }).join("") + '</g>' + WINDOW + '<rect y="150" width="400" height="100" fill="#8fc1e3"/><rect y="142" width="400" height="10" fill="#f5f5f5"/><path d="M100 160 V245 M200 160 V245 M300 160 V245" stroke="#6fa3c7" stroke-width="2"/><g fill="#e0e0e0"><circle cx="90" cy="200" r="3"/><circle cx="110" cy="200" r="3"/><circle cx="290" cy="200" r="3"/><circle cx="310" cy="200" r="3"/></g>';
      case "library": return '<rect width="400" height="250" fill="#f3e5c8"/><g transform="translate(70,190)">' + THINGS.shelf(0, 0, {}) + '</g><g transform="translate(330,190)">' + THINGS.shelf(0, 0, {}) + '</g><rect y="190" width="400" height="60" fill="#c76b6b"/><rect y="190" width="400" height="5" fill="#a85656"/>';
      case "party": var b = ""; for (var i = 0; i < 12; i++) b += '<path d="M' + (i * 34) + ' 14 l17 0 l-8.5 18 Z" fill="' + CONF[i % 6] + '"/>'; return wall("#fde9cf", "#f6d4ab") + '<path d="M0 14 Q200 30 400 14" stroke="#999" fill="none"/>' + b + WOODFLOOR;
      case "gym": return '<rect width="400" height="250" fill="#e6f0ff"/><g fill="#cfe0fb">' + [0, 80, 160, 240, 320].map(function (x) { return '<rect x="' + (x + 8) + '" y="20" width="64" height="120"/>'; }).join("") + '</g><rect y="190" width="400" height="60" fill="#6aa7e8"/><path d="M0 220 H400" stroke="#4f8fd6" stroke-width="2"/>';
      case "court": return '<rect width="400" height="250" fill="#f0e6d6"/><rect y="0" width="400" height="16" fill="#9b6bff"/><rect y="190" width="400" height="60" fill="#e3b36b"/><path d="M0 205 H400 M0 222 H400 M0 238 H400" stroke="#c9944a" stroke-width="1"/><path d="M120 250 Q200 196 280 250" stroke="#fff" stroke-width="3" fill="none"/>';
      case "pool": return '<rect width="400" height="250" fill="#bfe6ff"/>' + clouds() + '<rect y="110" width="400" height="20" fill="#e8f4f8"/><rect y="128" width="400" height="82" fill="#4fc3f7"/><path d="M0 150 H400" stroke="#e5484d" stroke-width="3" stroke-dasharray="10 10"/><rect y="204" width="400" height="46" fill="#dfeff5"/><path d="M0 226 H400 M60 204 V250 M140 204 V250 M220 204 V250 M300 204 V250 M380 204 V250" stroke="#c4dde6" stroke-width="1.5"/>';
      case "bath": return '<rect width="400" height="250" fill="#dff3f7"/><path d="M0 40 H400 M0 80 H400 M0 120 H400 M0 160 H400 M50 0 V196 M110 0 V196 M170 0 V196 M230 0 V196 M290 0 V196 M350 0 V196" stroke="#c4e4ec" stroke-width="2"/><rect y="196" width="400" height="54" fill="#b9dce6"/>';
      case "snow": return '<rect width="400" height="250" fill="#dbeaff"/>' + clouds() + '<path d="M0 190 Q100 176 200 190 T400 186 V250 H0 Z" fill="#fbfdff"/><path d="M0 214 Q140 204 260 216 T400 212" stroke="#dbe6f5" stroke-width="3" fill="none"/>' + THINGS.snowfall();
      case "rain": return '<rect width="400" height="250" fill="#a9b6c6"/><g transform="translate(80,40)">' + cloudShape("#8996a8") + '</g><g transform="translate(300,30) scale(1.2)">' + cloudShape("#8996a8") + '</g>' + hills("#6fa05a", "#5f9150") + THINGS.rainfall();
      case "farm": return '<rect width="400" height="250" fill="#bfe6ff"/>' + clouds() + THINGS.barn(330, 198, { s: .75 }) + hills("#8ed26b", "#7cc35a") + THINGS.fence(110, 206, { s: .8, w: 260 }) + tufts("#5ea444");
      case "garden": return '<rect width="400" height="250" fill="#bfe6ff"/>' + sun + clouds() + hills("#8ed26b", "#7cc35a") + '<rect x="10" y="218" width="380" height="11" rx="5" fill="#8b5a2b"/><rect x="10" y="236" width="380" height="11" rx="5" fill="#8b5a2b"/>';
      case "pond": return '<rect width="400" height="250" fill="#bfe6ff"/>' + clouds() + hills("#8ed26b", "#7cc35a") + '<ellipse cx="200" cy="228" rx="170" ry="20" fill="#5bbbe8"/><ellipse cx="200" cy="226" rx="155" ry="14" fill="#7ccbf0"/>';
      case "woods": var p = ""; [[30, .9], [90, 1.2], [160, .8], [250, 1.1], [330, .9], [385, 1.2]].forEach(function (q) { p += THINGS.pine(q[0], 196, { s: q[1] }); }); return '<rect width="400" height="250" fill="' + (sc.night ? "#22306b" : "#bfe6ff") + '"/>' + (sc.night ? '<path d="M335 30 A20 20 0 1 0 335 70 A15 15 0 1 1 335 30 Z" fill="#fff6c8"/>' : clouds()) + p + hills(sc.night ? "#3d6b3c" : "#8ed26b", sc.night ? "#335c33" : "#7cc35a");
      case "sunset": return '<rect width="400" height="250" fill="#ffd2a1"/><rect width="400" height="70" fill="#ff9f8a" opacity=".6"/><rect y="60" width="400" height="60" fill="#ffb58f" opacity=".5"/>' + sun + hills("#6fb552", "#5ea444");
      case "night": var r = seeded(3), st = ""; for (var j = 0; j < 24; j++) st += '<circle cx="' + n(r() * 400) + '" cy="' + n(r() * 150) + '" r="' + n(r() * 1.5 + .6) + '" fill="#fff"/>'; return '<rect width="400" height="250" fill="#22306b"/>' + st + '<path d="M335 30 A20 20 0 1 0 335 70 A15 15 0 1 1 335 30 Z" fill="#fff6c8"/><path d="M0 196 Q100 184 200 196 T400 194 V250 H0 Z" fill="#3d6b3c"/>';
      case "beach": return '<rect width="400" height="250" fill="#bfe6ff"/><g transform="translate(80,40)">' + cloudShape() + '</g><rect y="118" width="400" height="92" fill="#5bbbe8"/><rect y="118" width="400" height="8" fill="#8fd3f2"/><path d="M0 204 Q100 197 200 205 T400 203 V250 H0 Z" fill="#f4dfa6"/><path d="M60 230 q4 -3 8 0 M250 238 q4 -3 8 0" stroke="#d9bd7a" stroke-width="2" fill="none"/>';
      case "school": var ab = ""; "ABCDEFGHIJ".split("").forEach(function (ch, i) { ab += '<rect x="' + (12 + i * 38) + '" y="8" width="30" height="22" rx="3" fill="' + CONF[i % 6] + '"/><text x="' + (27 + i * 38) + '" y="25" font-size="15" font-weight="700" fill="#fff" text-anchor="middle" font-family="Andika,sans-serif">' + ch + '</text>'; }); return '<rect width="400" height="250" fill="#fef6e4"/>' + ab + '<rect x="40" y="42" width="190" height="96" rx="4" fill="#2f6b4f" stroke="#a0632d" stroke-width="6"/><text x="135" y="100" font-size="26" fill="#fff" text-anchor="middle" font-family="Andika,sans-serif">' + (sc.board || "Hello!") + '</text>' + WINDOW + '<rect y="190" width="400" height="60" fill="#e8d9b5"/><path d="M0 210 H400 M0 230 H400 M60 190 V250 M140 190 V250 M220 190 V250 M300 190 V250 M380 190 V250" stroke="#d6c49c" stroke-width="1.5"/>';
      case "stage": return '<rect width="400" height="250" fill="#3b1f4a"/><path d="M110 0 L80 200 L320 200 L290 0 Z" fill="#fff6c8" opacity=".14"/><path d="M0 0 H70 Q60 100 80 196 H0 Z" fill="#b3242a"/><path d="M400 0 H330 Q340 100 320 196 H400 Z" fill="#b3242a"/><path d="M15 0 Q10 100 18 196 M40 0 Q34 100 48 196 M385 0 Q390 100 382 196 M360 0 Q366 100 352 196" stroke="#8c1b20" stroke-width="3" fill="none"/><path d="M0 0 H400 V22 Q300 34 200 22 Q100 34 0 22 Z" fill="#c9302c"/><rect y="196" width="400" height="54" fill="#b9824a"/><path d="M0 196 H400" stroke="#8b5a2b" stroke-width="4"/>';
      case "space": case "moonland": var rr = seeded(7), ss = ""; for (var q = 0; q < 40; q++) ss += '<circle cx="' + n(rr() * 400) + '" cy="' + n(rr() * 250) + '" r="' + n(rr() * 1.5 + .5) + '" fill="#fff"/>'; return '<rect width="400" height="250" fill="#0b1036"/>' + ss + '<circle cx="330" cy="60" r="22" fill="#e8b46a"/><ellipse cx="330" cy="60" rx="38" ry="8" fill="none" stroke="#f5d9a8" stroke-width="3"/><circle cx="70" cy="50" r="14" fill="#4fb3e8"/><path d="M62 44 q6 -4 10 2 q2 6 -4 8 Z" fill="#4caf50"/>' + (t === "moonland" ? '<path d="M0 196 Q100 182 200 194 T400 190 V250 H0 Z" fill="#b9bec7"/><ellipse cx="90" cy="226" rx="26" ry="6" fill="#9aa0aa"/><ellipse cx="290" cy="236" rx="34" ry="7" fill="#9aa0aa"/><ellipse cx="200" cy="212" rx="14" ry="4" fill="#9aa0aa"/>' : '');
      case "ice": return '<rect width="400" height="250" fill="#dbeaff"/>' + clouds() + THINGS.pine(40, 190, { s: .8 }) + THINGS.pine(360, 190, { s: .9 }) + '<path d="M0 186 Q200 176 400 186 V250 H0 Z" fill="#fbfdff"/><ellipse cx="200" cy="222" rx="190" ry="24" fill="#cfe9f7"/><path d="M80 218 l30 4 M240 228 l40 -3 M150 232 l20 2" stroke="#fff" stroke-width="2"/>' + THINGS.snowfall();
      case "arena": var cr = "", r3 = seeded(11); for (var row = 0; row < 4; row++) for (var cx = 8; cx < 400; cx += 16) cr += '<circle cx="' + (cx + (row % 2) * 8) + '" cy="' + (40 + row * 26) + '" r="6" fill="' + ["#236192", "#78be20", "#ff6fae", "#ffcf33", "#e8b46a", "#f9d3b4"][Math.floor(r3() * 6)] + '"/>'; return '<rect width="400" height="250" fill="#1d2b44"/>' + cr + '<rect y="140" width="400" height="12" fill="#236192"/><rect y="146" width="400" height="4" fill="#78be20"/><rect y="152" width="400" height="98" fill="#e3b36b"/><path d="M0 200 H400 M0 226 H400" stroke="#c9944a" stroke-width="1"/><path d="M110 250 Q200 196 290 250" stroke="#fff" stroke-width="3" fill="none"/>';
      case "golf": return '<rect width="400" height="250" fill="#bfe6ff"/>' + clouds() + THINGS.tree(40, 196, { s: .7 }) + THINGS.tree(370, 196, { s: .8 }) + hills("#7cc35a", "#6fbf4a") + '<ellipse cx="260" cy="226" rx="120" ry="16" fill="#8fe07a"/><ellipse cx="80" cy="236" rx="44" ry="8" fill="#f4dfa6"/>';
      case "xmas": var gl = ""; for (var j = 0; j < 14; j++) gl += '<circle cx="' + (14 + j * 28) + '" cy="' + (22 + (j % 2) * 6) + '" r="4" fill="' + CONF[j % 6] + '"/>'; return wall("#fde9cf", "#f6d4ab") + '<path d="M0 18 Q100 34 200 18 T400 18" stroke="#2f8f4e" stroke-width="7" fill="none"/>' + gl + '<rect x="20" y="96" width="110" height="100" fill="#b5523b"/><path d="M20 116 H130 M20 136 H130 M20 156 H130 M20 176 H130 M50 96 V116 M90 116 V136 M50 136 V156 M90 156 V176 M50 176 V196" stroke="#8c3a28" stroke-width="2"/><rect x="12" y="88" width="126" height="10" fill="#f5f0e6"/><rect x="45" y="140" width="60" height="56" fill="#2b1d14"/>' + THINGS.fire(75, 194, { s: .8 }) + WOODFLOOR;
      case "city": var bl = ""; [[0, 120, 60], [55, 80, 50], [100, 140, 45], [140, 60, 55], [190, 110, 40], [225, 40, 50], [270, 100, 45], [310, 70, 50], [355, 130, 45]].forEach(function (b) { bl += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (196 - b[1]) + '" fill="#6b7a99"/>'; for (var wy = b[1] + 8; wy < 186; wy += 16) for (var wx = b[0] + 6; wx < b[0] + b[2] - 8; wx += 12) bl += '<rect x="' + wx + '" y="' + wy + '" width="6" height="8" fill="#fff39a" opacity=".8"/>'; }); return '<rect width="400" height="250" fill="#bfe6ff"/>' + bl + '<rect y="196" width="400" height="54" fill="#9aa5b4"/><path d="M0 222 H400" stroke="#fff" stroke-width="3" stroke-dasharray="20 14"/>';
      case "plain": return '<rect width="400" height="250" fill="' + (sc.c || "#fff4dc") + '"/>';
      default: return '<rect width="400" height="250" fill="#bfe6ff"/>' + sun + clouds() + hills("#8ed26b", "#7cc35a") + tufts("#5ea444");
    }
  }
  function waterFront(c) {
    var d = "M0 170";
    for (var x = 0; x < 400; x += 40) d += " Q" + (x + 10) + " 163 " + (x + 20) + " 170 Q" + (x + 30) + " 177 " + (x + 40) + " 170";
    return '<path d="' + d + ' V207 H0 Z" fill="' + (c || "#5bbbe8") + '" opacity=".94"/><path d="' + d + '" stroke="#fff" stroke-width="2.5" fill="none" opacity=".7"/>';
  }

  /* ---------- parsing + drawing ---------- */
  var POSES = { stand: 1, wave: 1, up: 1, hop: 1, point: 1, run: 1, sit: 1, book: 1, kick: 1, eat: 1, hold: 1, hug: 1, ride: 1 };
  var MOODS = { happy: 1, big: 1, wow: 1, sad: 1, grumpy: 1 };
  function parse(str) {
    var segs = str.split(";").map(function (s) { return s.trim(); }).filter(Boolean), headT = (segs.shift() || "out").split(/\s+/), sc = { bg: headT[0], i: [] };
    headT.slice(1).forEach(function (t) { if (/^sun\d+$/.test(t)) sc.sunY = +t.slice(3); else if (t.indexOf(":") > 0) sc[t.slice(0, t.indexOf(":"))] = t.slice(t.indexOf(":") + 1).replace(/_/g, " "); else sc[t] = 1; });
    segs.forEach(function (seg) {
      var tk = seg.split(/\s+/), o = {}, x = 200;
      tk.slice(1).forEach(function (t) {
        if (/^-?\d+(\.\d+)?$/.test(t)) x = +t;
        else if (POSES[t]) o.pose = t;
        else if (MOODS[t]) o.mood = t;
        else if (t === "sleep") { o.pose = "sleep"; o.mood = "sleep"; }
        else if (/^s\d*\.?\d+$/.test(t)) o.s = +t.slice(1);
        else if (/^y-?\d+$/.test(t)) o.y = +t.slice(1);
        else if (/^l\d+$/.test(t)) o.lift = +t.slice(1);
        else if (/^r-?\d+$/.test(t)) o.rot = +t.slice(1);
        else if (t.charAt(0) === "#") o.c = t;
        else if (t.indexOf(":") > 0) { var k = t.slice(0, t.indexOf(":")), v = t.slice(t.indexOf(":") + 1); o[k] = k === "who" ? v.split(",") : v.replace(/_/g, " "); }
        else o[t] = 1;
      });
      sc.i.push([tk[0], x, o]);
    });
    return sc;
  }
  function draw(it) {
    var t = it[0], o = it[2] || {}, x = it[1] == null ? 200 : it[1];
    var y = o.y != null ? o.y : (DEF_Y[t] != null ? DEF_Y[t] : GY) - (o.wade ? 15 : 0);
    if (P[t]) return person(t, x, y, o);
    if (CATS[t]) return cat(t, x, y, o);
    if (t === "dog") return dog(x, y, o);
    return THINGS[t] ? THINGS[t](x, y, o) : "";
  }
  function scene(sc) {
    if (typeof sc === "string") sc = parse(sc);
    sc = sc || {};
    var items = sc.i || [], out = bg(sc.bg || "out", sc);
    var wade = items.filter(function (it) { return it[2] && it[2].wade; });
    wade.forEach(function (it) { out += draw(it); });
    if (wade.length || sc.water) out += waterFront(sc.bg === "pool" ? "#4fc3f7" : null);
    items.forEach(function (it) { if (!(it[2] && it[2].wade)) out += draw(it); });
    return '<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">' + out + '</svg>';
  }
  return { scene: scene, parse: parse, people: P, things: THINGS };
})();
