/* SET 6 (YELLOW): beginning blends fl, fr, gr, cl, sl, st, sw, tr, sn, sp */
Object.assign(BOOKS, {
  "6-1": { t: "The Green Frog", cover: 8, pages: [
    ["A green frog sits on a log at the pond.", "pond; log 200 s2 y230; frog 200 s1.6 y198"],
    ["Emerson and Olivia step up to it.", "pond; O 90; E 165; log 280 s1.6 y230; frog 280 s1.2 y204"],
    ["Emerson tries to grab it. Flip! Flop!", "pond; E 170 up wow; frog 265 y150 s1.4"],
    ["The frog jumps in the pond. Plop!", "pond; splash 230 y230 s1.4; frog 230 s1 y242"],
    ["The frog can swim fast. Swim, frog, swim!", "pond; frog 200 s1.8 y236; splash 140 y232"],
    ["It swims to a lily pad. It stops.", "pond; lily 200 s2.2 y236; frog 200 s1.4 y232"],
    ["Olivia grins. “I can grab it!”", "pond; O 200 big point"],
    ["She steps on the log. Slip! Splash!", "pond; log 200 s2 y230; O 200 wow y196 r25; splash 200 y228 s1.6"],
    ["Olivia is wet! The frog grins at her.", "pond; O 140 sad; splash 140 y170; lily 280 s2 y236; frog 280 s1.4 y232"],
    ["We will not grab the frog. We will just look.", "pond; O 110; E 190 big; frog 300 s1.6 y232"],
    ["So long, green frog! Stay on your lily pad.", "pond; lily 270 s2 y236; frog 270 s1.4 y232; E 140 wave big"]
  ] },
  "6-2": { t: "Flip and Spin", cover: 8, pages: [
    ["Emerson is at gym class. She is glad!", "gym; E 200 up big s1.2"],
    ["First she stretches. Stretch up! Stretch down!", "gym; E 200 up s1.2"],
    ["She can spin on one foot. Spin, spin, spin!", "gym; E 200 wave s1.2; q 265 y90 t:↻"],
    ["She can flip on the mat. Flip!", "gym; mat 200 s3 #ff6fae; E 200 up r90 s1.2 y175 big"],
    ["She can stand on her hands. Hold it, Emerson!", "gym; mat 200 s3 #ff6fae; E 200 up r180 s1.2 y230 big"],
    ["She steps on the beam. Step, step, step.", "gym; beam 200 s1.4; E 200 up y153"],
    ["Can she flip on the beam? She will try.", "gym; beam 200 s1.4; E 200 wow y153; q 265 y60"],
    ["Flip! She lands it! She stands still.", "gym; spark; beam 200 s1.4; E 200 up big y153"],
    ["Mom and Dad clap. Grandma Lynette claps, too.", "gym; M 90 up big; D 200 up big; Lyn 310 up big"],
    ["Emerson gets a gold star. She is so proud!", "gym; spark; E 200 up big hold:star hs:.7 s1.2"]
  ] },
  "6-3": { t: "Swim, Swim, Swim", cover: 9, pages: [
    ["Emerson has swim class at the pool.", "pool; E 200 y232 big s1.2"],
    ["She has a pink swim cap.", "pool; E 200 y232 hat:#ff6fae big s1.3"],
    ["Swim, Emerson, swim! Kick, kick, kick!", "pool; E 200 wade up big hat:#ff6fae; splash 160 y172; splash 240 y172"],
    ["She can float on her back. She is so still.", "pool; E 200 wade r-90 y212 hat:#ff6fae"],
    ["Then she swims to Mom. Splash, splash!", "pool; E 160 wade up big hat:#ff6fae; M 300 wade big; splash 160 y172"],
    ["Lauren can dive in. Splash!", "pool; L 200 up r160 y120; splash 235 y172"],
    ["Olivia swims fast. She swims to the end.", "pool; O 220 wade big; splash 160 y172; splash 120 y174"],
    ["Emerson wants to dive, too. She steps up.", "pool; E 200 y232 wow hat:#ff6fae s1.2"],
    ["She is brave. Splash! She did it!", "pool; spark; E 200 wade up big hat:#ff6fae; splash 200 y172"],
    ["Swim class is the best. Emerson is a fish!", "pool; E 200 wade up big hat:#ff6fae; fish 110 y200; fish 300 y196 #4fb3e8"]
  ] },
  "6-4": { t: "Grandpa Mark's Tractor", cover: 2, pages: [
    ["Grandpa Mark has a big green tractor.", "farm; tractor 200 s1.5"],
    ["Emerson climbs up. She sits with Grandpa Mark.", "farm; tractor 200 s1.5 who:Mark,E"],
    ["The tractor starts. Brrrm! Brrrm!", "farm; tractor 200 s1.5 who:Mark,E go; q 310 y80 t:Brrrm!"],
    ["They drive past the crops. The corn is tall and green.", "farm; stalk 50; stalk 95; stalk 140; tractor 270 s1.3 who:Mark,E go"],
    ["They drag the hay to the barn.", "farm; tractor 150 s1.3 who:Mark,E; hay 270 s1.2; hay 315 s1.2"],
    ["The cows are glad. They munch the hay.", "farm; cow 140 s1.2; hay 280 s1.4"],
    ["Then, clunk! The tractor stops.", "farm; tractor 200 s1.5 who:Mark,E; q 320 y80 t:Clunk! #e5484d"],
    ["Grandpa Mark can fix it. He has a plan.", "farm; Mark 100 point; tractor 250 s1.3"],
    ["He twists and taps. Clink, clank!", "farm; Mark 100 sit; tractor 250 s1.3; q 180 y110 t:Clink!"],
    ["Brrrm! It runs! Grandpa Mark is the best!", "farm; spark; tractor 200 s1.5 who:Mark,E go"]
  ] },
  "6-5": { t: "Snack Time", cover: 10, pages: [
    ["Emerson is hungry. She wants a snack.", "kitchen; E 200 wow s1.2"],
    ["Mom has a plate of snacks. Who wants one?", "kitchen; M 140; plate 270 y142 s1.4; apple 255 y136 s.7; grapes 285 y136 s.7"],
    ["Emerson grabs an apple. Crunch!", "kitchen; E 200 eat hold:apple big"],
    ["Olivia grabs a cluster of grapes.", "kitchen; O 200 hold:grapes hs:.7"],
    ["Lauren grabs a slice of melon.", "kitchen; L 200 eat hold:melon"],
    ["Dad grabs a cookie. It is a treat!", "kitchen; D 200 eat hold:cookie big"],
    ["Dexter and Leo want a snack, too.", "kitchen; dexter 150 s1.6 y228; leo 260 s1.6 y228"],
    ["Cats can not have grapes! They get cat snacks.", "kitchen; dexter 140 s1.4; bowl 200 y232 empty #e5484d; leo 260 s1.4"],
    ["Crunch, crunch! The cats are glad.", "kitchen; dexter 170 s1.4; bowl 205 y232 empty #e5484d; leo 240 s1.4"],
    ["Snack time is the best time!", "kitchen; spark; E 345 big up; table 190 #ffd1e0; bowl 130 y163; melon 185 y163; cookie 225 y163; grapes 255 y163"]
  ] },
  "6-6": { t: "Stop the Ball!", cover: 6, pages: [
    ["Emerson has a soccer game. She will stop the ball!", "out; goal 200 s1.4; E 200 y212 #ffcf33 big"],
    ["She stands in the net. She must not let it in.", "out; goal 200 s1.4; E 200 #ffcf33"],
    ["Here it comes! The ball is fast!", "out; goal 300 s1.2; E 300 #ffcf33 wow; sball 120 y190"],
    ["Emerson steps and grabs it. Stop!", "out; goal 200 s1.4; E 200 up #ffcf33 hold:sball hs:.8 big"],
    ["Here comes the ball again. Kick!", "out; goal 300 s1.2; E 300 #ffcf33; sball 160 y180"],
    ["Emerson jumps. She blocks it with her hands!", "out; goal 200 s1.4; E 200 hop l30 #ffcf33 big; sball 225 y108"],
    ["The ball can not get past Emerson.", "out; goal 200 s1.4; E 200 #ffcf33 up big; sball 110 y232"],
    ["Dad claps. Olivia claps. Lauren claps.", "out; D 110 up big; O 200 up big; L 290 up big"],
    ["The game ends. Emerson did not let one in!", "out; spark; E 200 up big #ffcf33 hold:sball hs:.8"],
    ["She gets a big hug. “Best stops!” said Dad.", "out; heart 200 y60; D 160 hug big; E 250 #ffcf33 big"]
  ] },
  "6-7": { t: "The Sled", cover: 5, pages: [
    ["It snowed! The grass is white.", "snow; E 200 wow hat:#e5484d"],
    ["Dad gets the sled. It is red.", "snow; D 160; sled 280 s1.6"],
    ["Emerson sits on the sled. Dad gives a push.", "snow; E 200 sit hat:#e5484d; sled 200 s1.4; D 310 point"],
    ["Swish! The sled slips down the hill.", "snow; E 200 sit hat:#e5484d; sled 200 s1.4; splash 120 y212"],
    ["Fast, fast! Snow sprays up!", "snow; E 200 sit big hat:#e5484d; sled 200 s1.4; splash 140 y210 s1.6"],
    ["Then, flop! The sled flips! Emerson is in the snow.", "snow; E 160 sit wow hat:#e5484d; sled 290 s1.4"],
    ["She is not sad. She grins! She is a snow kid.", "snow; E 200 big up hat:#e5484d s1.2"],
    ["Olivia and Lauren slide, too. Slip, slide, crash!", "snow; O 140 sit big; sled 140 s1.2; L 270 sit big; sled 270 s1.2"],
    ["We make a snowman. It has a red scarf.", "snow; snowman 190 s1.2; E 310 big hat:#e5484d"],
    ["Then we go in. Mom has hot cocoa. Yum!", "kitchen; L 110 hold:drink hc:#8b5a3c; O 200 hold:drink hc:#8b5a3c; E 290 eat hold:drink hc:#8b5a3c big"]
  ] },
  "6-8": { t: "The Parade", cover: 10, pages: [
    ["Grandma Lynette has a plan. We will have a parade!", "out; Lyn 190 big point; sign 330 t:Grandma_Camp"],
    ["Lauren gets a flag. It is blue.", "out; L 200 hold:flag hc:#3b82f6 hs:.9"],
    ["Olivia gets a drum. Bam, bam, bam!", "out; O 180 big; drum 260 s1.4"],
    ["Emerson gets a flag, too. Her flag is pink.", "out; E 200 hold:flag hc:#ff6fae hs:.9 big"],
    ["Grandma Lynette claps. Clap, clap, clap!", "out; Lyn 200 up big"],
    ["Dexter and Leo trot in the parade, too!", "out; dexter 150 hop; leo 250 hop"],
    ["We stomp and march. Stomp, stomp!", "out; L 80 hold:flag hc:#3b82f6 hs:.9; O 160; drum 205 s1; E 290 hold:flag hc:#ff6fae hs:.9 hop big"],
    ["Grandpa Lon and Grandpa Mark clap and cheer.", "out; Lon 140 up big; Mark 260 up big"],
    ["Grandma Becky has a flag. She steps in, too!", "out; Becky 200 hold:flag hc:#9b6bff hs:.9 big"],
    ["It is the best parade! We stop and grin.", "out; spark; Lyn 55; Becky 120 hold:flag hc:#9b6bff hs:.9; L 190 hold:flag hc:#3b82f6 hs:.9; O 255; E 320 hold:flag hc:#ff6fae hs:.9 big"]
  ] },
  "6-9": { t: "Grow, Plants, Grow", cover: 8, pages: [
    ["Grandpa Lon has a plan. We will plant a garden!", "garden; Lon 200 big"],
    ["Emerson digs a spot. Lauren drops in the seeds.", "garden; E 140 hold:shovel hs:.7; L 260 point"],
    ["Olivia pats the dirt flat.", "garden; O 200 sit"],
    ["Grandpa Lon gets the can. Drip, drip, drip!", "garden; Lon 190 hold:can hs:.8"],
    ["We wait and wait. Grow, plants, grow!", "garden; E 200 sit wow"],
    ["Look! Green sprouts pop up!", "garden; sprout 120 s2 y228; sprout 200 s2 y228; sprout 280 s2 y228"],
    ["The plants grow and grow. They get tall.", "garden; plant 120 s2 y228; plant 200 s2.2 y228; plant 280 s2 y228"],
    ["Now there are red tomatoes and green peas.", "garden; plant 130 s2.4 y228 fruit:#ef3e36; plant 270 s2.4 y228 fruit:#6fbf4a"],
    ["We pick them. We fill a big basket.", "garden; L 100 hold:tomato hs:.7; O 190 hold:peas hs:.7; E 270 big; bowl 345 y230 empty #c9965a; tomato 335 y214 s.7; tomato 355 y214 s.7"],
    ["Grandpa Lon grins. “What a crop!”", "garden; spark; Lon 190 big up; bowl 300 y230 #c9965a"]
  ] },
  "6-10": { t: "Who Is in Bed?", cover: 7, pages: [
    ["It is night. The stars are out.", "night"],
    ["Who is in the bed? It is Emerson. She is snug.", "bedroom night; bed 200 #ff8fb3 who:E"],
    ["Who slips in next? It is Dexter!", "bedroom night; bed 200 #ff8fb3 who:E; dexter 260 s1.2 y172"],
    ["Who slips in next? It is Leo!", "bedroom night; bed 200 #ff8fb3 who:E; dexter 250 s1.2 y172; leo 300 s1.2 y172"],
    ["Who creeps in? It is Olivia! She had a bad dream.", "bedroom night; bed 200 #ff8fb3 who:E,O; dexter 250 s1.1 y172; leo 300 s1.1 y172"],
    ["Who steps in? It is Lauren! She wants a snuggle.", "bedroom night; bed 200 #ff8fb3 who:E,O,L; dexter 250 s1.1 y172; leo 300 s1.1 y172"],
    ["The bed is so full. Stretch! Bump! Flop!", "bedroom night; bed 200 #ff8fb3 who:E,O,L wow; dexter 250 hop s1.1 y172; leo 300 hop s1.1 y172"],
    ["Mom and Dad peek in. They grin.", "bedroom night; D 50 big; bed 200 #ff8fb3 who:E,O,L; M 350 big"],
    ["Mom gives a kiss. Dad gives a kiss.", "bedroom night; heart 200 y60; D 50; bed 200 #ff8fb3 who:E,O,L big; M 350"],
    ["Sleep tight, girls. Sweet dreams.", "bedroom night; bed 200 #ff8fb3 who:E,O,L sleep; dexter 250 sleep y172; leo 300 sleep y172; q 200 y70 t:Z_z_z #6b7bd6"]
  ] }
});
