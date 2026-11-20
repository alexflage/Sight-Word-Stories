/* SET 12 (GREEN DOTS): -ing and -ed endings */
Object.assign(BOOKS, {
  "12-1": { t: "Emerson Is Kicking", cover: 7, pages: [
    ["Emerson is learning soccer. She is very proud of it!", "out; E 200 hold:sball hs:.8 big s1.2"],
    ["At first, she kicked the ball and missed. Whoops!", "out; E 180 kick wow; sball 230 y215"],
    ["She kept trying. She practiced kicking every day.", "out; goal 320 s1.1; E 160 kick; sball 230 y190"],
    ["Dad helped her. He showed her how to use the side of her foot.", "out; D 140 point; E 250 kick; sball 300 y215"],
    ["Now she is passing the ball. She passed it to Olivia!", "out; E 120 kick; sball 200 y205; O 300 big"],
    ["She is dribbling down the field. Tap, tap, tap!", "out; E 180 run big #e5484d; sball 230 y215"],
    ["She kicked it hard. It zoomed into the net. Goal!", "out; spark; goal 300 s1.2; sball 300 y205; E 150 up big #e5484d"],
    ["Her team cheered and jumped. Emerson jumped, too!", "out; E 120 hop big #e5484d; Avery 200 hop big #e5484d; Crickett 280 hop big #e5484d"],
    ["Mom and Dad clapped and yelled. “Go, Emerson!”", "out; M 140 up big; D 260 up big"],
    ["After the game, she was resting and smiling.", "out; E 200 sit big #e5484d; sball 260 y228"],
    ["Emerson learned soccer because she kept trying. She is so proud!", "out; spark; E 200 up big #e5484d hold:trophy hs:.7 s1.2"]
  ], q: ["How did Emerson get better at soccer?", "Who helped Emerson practice?", "What is something you are proud you learned?"] },

  "12-2": { t: "Planting Beans", cover: 7, pages: [
    ["It is spring on Grandpa Mark's farm. It is time for planting!", "farm; Mark 200 wave"],
    ["Grandpa Mark is fixing the planter. He tightened the bolts.", "farm; Mark 110 sit; tractor 260 s1.3"],
    ["Emerson is helping. She handed him the tools.", "farm; Mark 120 sit; E 220 hold:box hs:.4 big hat:#e8c872; tractor 320 s1"],
    ["Then they started the tractor. Brrrm! They are planting black beans.", "farm; tractor 200 s1.5 who:Mark,E go"],
    ["The rain came and watered the seeds. Drip, drip!", "rain; soy 120 y236 s.5; soy 200 y236 s.5; soy 280 y236 s.5"],
    ["The sun is shining. The beans are growing.", "farm; sun 320 y55 face; sprout 120 y232 s1.6; sprout 200 y232 s1.6; sprout 280 y232 s1.6"],
    ["The plants grew and grew. They are getting tall!", "farm; soy 80 y236 s1.4; soy 160 y236 s1.4; soy 240 y236 s1.4; soy 320 y236 s1.4"],
    ["In the fall, they picked the beans. The pods popped open!", "farm; Mark 140 hold:beans hs:.8; E 250 wow hat:#e8c872"],
    ["Emerson counted the beans. One, two, three... she stopped at one hundred!", "farm; beans 200 s3 y228; E 300 big hat:#e8c872"],
    ["Grandma Becky cooked the beans in a big pot. They smelled so good!", "kitchen; Becky 130; pot 260 y142 s1.6 hot"],
    ["Emerson tasted them. “I planted these!” she said, grinning.", "kitchen; spark; E 200 eat hold:bowl hc:#e8c27a hs:.5 big"]
  ], q: ["What did Grandpa Mark and Emerson plant?", "What helped the seeds grow?", "Who cooked the beans?"] },

  "12-3": { t: "Baking with Grandma Lynette", cover: 9, pages: [
    ["At Grandma Camp, we are baking cookies!", "kitchen; Lyn 200 big"],
    ["Grandma Lynette is reading the recipe. Lauren is getting the flour.", "kitchen; Lyn 130 book; L 260 hold:bag hc:#fff hs:.6"],
    ["Olivia cracked the eggs. Crack! Crack! One fell on the floor. Oops!", "kitchen; O 200 wow; egg 260 y232; splash 260 y228"],
    ["Emerson poured in the sugar. She mixed and mixed.", "kitchen; E 200 big; bowl 290 y142 s1.4 empty #fff"],
    ["Grandma rolled the dough. The girls cut out shapes. Stars, hearts, and trees!", "kitchen; table 200 #fff; star 150 y150 s.5 #e8b46a; heart 200 y158 #e8b46a; star 250 y150 s.5 #e8b46a"],
    ["The cookies baked in the oven. The kitchen smelled sweet.", "kitchen; L 100 wow; O 200 wow; E 300 wow; q 200 y80 t:~_~"],
    ["Ding! Grandma pulled out the cookies. They are golden brown.", "kitchen; Lyn 160 hold:cookie; cookie 260 y142 s1.4; cookie 300 y142 s1.4"],
    ["Then we decorated them with pink frosting and sprinkles.", "kitchen; spark; table 200 #ff8fb3; cookie 160 y163; cookie 200 y163; cookie 240 y163"],
    ["Emerson tasted one. Then she tasted two!", "kitchen; E 200 eat hold:cookie big s1.2"],
    ["We packed some for Grandpa Lon. He loved them!", "garden; Lon 200 eat hold:cookie big"],
    ["Baking with Grandma Lynette is the best part of Grandma Camp!", "kitchen; heart 200 y50; L 90; Lyn 170 big hug; O 250; E 320 big"]
  ], q: ["What did they make at Grandma Camp?", "What happened to one egg?", "Who did they share cookies with?"] },

  "12-4": { t: "Making T-Shirts", cover: 9, pages: [
    ["Grandma Lynette has a special machine. It cuts out shapes for T-shirts!", "kitchen; Lyn 160 big; box 270 y142 s1.6 #9b6bff"],
    ["Every year, she makes Grandma Camp shirts. This year, the girls are helping.", "kitchen; L 100; O 180; E 260 big; Lyn 330"],
    ["Lauren picked a blue shirt. Olivia picked green. Emerson picked pink, of course!", "kitchen; shirt 120 y142 s1.4 #3b82f6; shirt 200 y142 s1.4 #2eb67d; shirt 280 y142 s1.4 #ff6fae"],
    ["They chose shapes on the computer. Emerson chose an elephant!", "kitchen; E 160 wow; elephant 270 y142 s.6"],
    ["The machine started cutting. Zip, zip, zip!", "kitchen; box 200 y142 s1.6 #9b6bff; q 280 y90 t:Zip!"],
    ["Grandma Lynette peeled the shapes. Then she pressed them on with a hot press.", "kitchen; Lyn 160; shirt 270 y142 s1.6 #ff6fae d:#333"],
    ["Press! Hiss! Lift! The shape stuck to the shirt.", "kitchen; spark; shirt 200 y142 s2 #ff6fae d:#333"],
    ["Then they made shirts for the cousins. Ramsey, Summer, and Ollie got shirts, too!", "kitchen; shirt 120 y142 s1.2 #2eb67d; shirt 200 y142 s1 #ffcf33; shirt 270 y142 s1 #4fb3e8"],
    ["Everyone is wearing a Grandma Camp shirt! Click! Grandma took a picture.", "out; sign 345 t:Grandma_Camp; Lyn 60 big; L 120 #3b82f6; O 180 #2eb67d; E 240 big; Ramsey 290 #2eb67d"],
    ["Emerson is wearing her shirt to school tomorrow.", "school; E 200 big s1.2"],
    ["She told Mrs. Hulla, “My grandma made it!”", "school; spark; Hulla 140 big; E 250 big"]
  ], q: ["What did Grandma Lynette's machine do?", "What shape did Emerson pick?", "Who else got shirts?"] },

  "12-5": { t: "Sledding Down the Hill", cover: 6, pages: [
    ["Minnesota winters are snowy and cold. Today, it snowed all night!", "snow"],
    ["The girls are bundling up. Hats, mittens, boots, and coats!", "snow; L 110 hat:#3b82f6; O 200 hat:#9b6bff; E 290 hat:#ff6fae big"],
    ["They are pulling the sleds up the big hill. Huff, puff!", "snow; L 140 hat:#3b82f6; sled 200 s1.2; E 290 hat:#ff6fae"],
    ["Emerson sat on the sled. Lauren pushed. Whoosh!", "snow; E 200 sit big hat:#ff6fae; sled 200 s1.4; splash 120 y210"],
    ["She is zooming down the hill! The wind is blowing her hair.", "snow; E 200 sit big hat:#ff6fae; sled 200 s1.4; splash 130 y210 s1.6"],
    ["Bump! She flipped into the snow. She is laughing!", "snow; E 160 sit big hat:#ff6fae; sled 290 s1.4; splash 160 y200"],
    ["Olivia and Lauren raced down. Olivia won!", "snow; O 140 sit big hat:#9b6bff; sled 140 s1.2; L 280 sit hat:#3b82f6; sled 280 s1.2"],
    ["They sledded again and again. Their cheeks turned pink.", "snow; spark; L 110 hat:#3b82f6 big; O 200 hat:#9b6bff big; E 290 hat:#ff6fae big"],
    ["Then they made snow angels. Flap, flap!", "snow; E 200 sit up big hat:#ff6fae"],
    ["Mom called, “Hot cocoa is ready!” They hurried inside.", "out; M 120 wave; L 220 run; E 300 run"],
    ["They sipped cocoa and warmed their toes. What a snowy, happy day!", "kitchen; L 110 hold:drink hc:#8b5a3c; O 200 hold:drink hc:#8b5a3c; E 290 eat hold:drink hc:#8b5a3c big"]
  ], q: ["What did the girls put on before going outside?", "Who won the race down the hill?", "What did they drink when they came inside?"] },

  "12-6": { t: "Lauren Is Acting", cover: 8, pages: [
    ["Lauren loves acting and singing. She is in a play!", "stage; L 200 up big"],
    ["She practiced her lines every night. She practiced in her bedroom.", "bedroom; L 200 book"],
    ["Emerson helped. She held the script and listened.", "bedroom; E 140 book; L 260 point big"],
    ["Olivia helped, too. She acted out the other parts. They giggled!", "bedroom; O 140 big; L 260 big"],
    ["On the big night, Lauren was nervous. Her tummy felt funny.", "stage; L 200 wow"],
    ["The curtain opened. The lights came on. Lauren started singing.", "stage; L 200 up big; mic 280; q 200 y60 t:♪"],
    ["Her voice filled the whole room. Everyone was listening.", "stage; L 200 up big crown; q 140 y70 t:♪; q 260 y60 t:♪"],
    ["Mom, Dad, Olivia, and Emerson watched from the front row.", "stage; M 70 sit y240; D 150 sit y240; O 240 sit y240; E 320 sit y240 big"],
    ["When she finished, everyone clapped and cheered. Lauren bowed.", "stage; spark; L 200 big crown"],
    ["Emerson gave her pink flowers. “You were amazing!”", "stage; L 150 big hold:flower hc:#ff6fae hs:.8; E 250 big"],
    ["Lauren smiled. “Maybe you will be in a play someday, too!”", "out; heart 200 y60; L 150 hug big; E 240 big"]
  ], q: ["What does Lauren love to do?", "How did Lauren feel before the play?", "What did Emerson give Lauren?"] },

  "12-7": { t: "Dexter and Leo Are Basking", cover: 3, pages: [
    ["Dexter and Leo love sunny spots. They like basking in the sun.", "room; sun 330 y66 s.5; dexter 160 sleep s1.6 y215; leo 260 sleep s1.6 y215"],
    ["In the morning, the sun is shining on the rug. Dexter is stretching out.", "room; mat 200 s3 #c76b6b; dexter 200 sleep s1.8 y212"],
    ["Then the sun moved to the couch. Leo jumped up and curled up.", "room; mat 200 s2.6 #9b6bff y190; leo 200 sleep s1.4 y188"],
    ["At lunch, the sun is beaming on the kitchen floor. Both cats moved there.", "kitchen; dexter 160 sleep s1.5 y230; leo 250 sleep s1.5 y230"],
    ["Emerson is giggling. “You lazy cats!” she said.", "kitchen; E 200 big s1.2; dexter 110 sleep y232; leo 300 sleep y232"],
    ["The cats are yawning. They are stretching. Then they are sleeping again.", "room; dexter 150 grumpy s1.6; leo 260 sleep s1.6"],
    ["In the afternoon, the sun shined on Emerson's bed. Guess who jumped up?", "bedroom; bed 200 #ff8fb3; dexter 230 sleep y172; leo 280 sleep y172"],
    ["The cats basked so long, they melted into cat puddles! Just kidding!", "room; puddle 150 s1.4 y232; puddle 260 s1.4 y232; q 200 y90 t:Ha_ha!"],
    ["At sunset, the sun was setting. The cats followed it to the window.", "room; dexter 315 y97 s.8; leo 350 y97 s.8"],
    ["At night, there was no sun. So they snuggled with Emerson.", "bedroom night; bed 200 #ff8fb3 who:E,dexter,leo sleep"],
    ["Dexter and Leo dreamed about tomorrow's sunny spots. Purr, purr.", "night; sun 200 y120 s1.4 face; q 300 y80 t:Z_z #c9d3ff"]
  ], q: ["What do Dexter and Leo love?", "Where did the cats go when the sun moved?", "Did the cats really melt? Why is that funny?"] },

  "12-8": { t: "Ollie Is Toddling", cover: 3, pages: [
    ["Cousin Ollie is two. He is learning to walk and talk.", "room; Ollie 200 s1.6 big"],
    ["He is toddling across the room. Wobble, wobble!", "room; hops 260 y214; Ollie 260 s1.6 run"],
    ["Oops! He tripped and landed on his bottom. He is laughing!", "room; Ollie 200 sit s1.6 big"],
    ["Ollie pointed at Dexter. “Kitty!” he yelled.", "room; Ollie 140 point s1.5 big; dexter 280 s1.6"],
    ["Dexter jumped onto the shelf. He is hiding!", "room; Ollie 140 s1.5 wow; box 290 s1.4; dexter 290 s1.1 y173"],
    ["Emerson is helping Ollie stack blocks. Up, up, up!", "room; box 200 s1; box 200 y185 s.8 #e5484d; box 200 y161 s.6 #3b82f6; Ollie 120 s1.4; E 290 big"],
    ["Crash! Ollie knocked them down. He clapped and giggled.", "room; box 160 s.8; box 250 s.8 #e5484d; Ollie 200 up s1.4 big; q 200 y60 t:Crash!"],
    ["Then Ollie is chasing Emerson around the table. Run, run!", "kitchen; table 200; E 120 run big; Ollie 280 run s1.3"],
    ["He is getting sleepy. He yawned a big yawn.", "room; Ollie 200 s1.5 mood:sleep"],
    ["Emerson read him a story. He fell asleep on her lap.", "room; E 200 sit book big; Ollie 150 sit s1.2 mood:sleep"],
    ["“I love my cousin Ollie,” Emerson whispered.", "room; heart 200 y60; E 200 sit big; Ollie 150 sit s1.2 mood:sleep"]
  ], q: ["How old is Ollie?", "What did Ollie call Dexter?", "What did Emerson do when Ollie got sleepy?"] },

  "12-9": { t: "Picking Apples", cover: 5, pages: [
    ["Grandpa Lon has apple trees. The apples are ready for picking!", "garden; tree 120 s1.4 fruit:#e5484d; tree 290 s1.4 fruit:#e5484d"],
    ["Grandpa Lon is carrying a ladder and baskets.", "garden; Lon 200 hold:basket hs:.7 nohat"],
    ["Lauren climbed the ladder. She picked the high apples.", "garden; tree 200 s1.6 fruit:#e5484d; L 220 up y150"],
    ["Emerson picked the low ones. She stretched and stretched!", "garden; tree 200 s1.6 fruit:#e5484d; E 250 up big"],
    ["Plop! An apple dropped on Olivia's head! Everyone laughed.", "garden; tree 200 s1.5 fruit:#e5484d; O 230 wow; apple 230 y110; q 300 y70 t:Bonk!"],
    ["They filled one basket. Then two. Then three!", "garden; basket 120 s1.6; basket 200 s1.6; basket 280 s1.6"],
    ["Grandpa Lon polished an apple on his shirt. He handed it to Emerson.", "garden; Lon 150 hold:apple; E 260 big"],
    ["Crunch! It is juicy and sweet.", "garden; spark; E 200 eat hold:apple big s1.2"],
    ["Back home, they baked an apple pie. Cinnamon smells drifted all over.", "kitchen; pie 200 y142 s2; apple 260 y142; apple 290 y142"],
    ["They made applesauce, too. Ollie and Summer loved it!", "kitchen; Ollie 140 s1.3 eat hold:bowl hc:#fff hs:.4; Summer 260 s1.3 eat hold:bowl hc:#fff hs:.4"],
    ["Thank you for the apples, Grandpa Lon! We had a fun time picking.", "garden; heart 200 y50; Lon 160 hug big nohat; E 250 big"]
  ], q: ["Who climbed the ladder?", "What fell on Olivia's head?", "What did they make with the apples?"] },

  "12-10": { t: "Snowed In", cover: 8, pages: [
    ["Snow is falling and falling. It is a blizzard! No school today.", "snow; snowfall"],
    ["Dad is shoveling the driveway. Scrape, scrape!", "snow; D 200 hold:shovel hs:.8"],
    ["The girls are building a snow fort. They stacked big snow blocks.", "snow; box 140 s1.6 #fff; box 210 s1.6 #fff; box 175 y167 s1.3 #fff; E 300 big hat:#ff6fae"],
    ["Then Olivia threw a snowball at Lauren. Splat! Snowball fight!", "snow; O 120 up big hat:#9b6bff; ball 200 y110 #fff s.7; L 300 wow hat:#3b82f6"],
    ["Emerson ducked behind the fort. She giggled and giggled.", "snow; box 180 s2 #fff; E 230 big hat:#ff6fae y230"],
    ["Inside, Mom is baking cookies. The house smells yummy.", "kitchen; M 160; cookie 260 y142 s1.4; cookie 300 y142 s1.4"],
    ["Dexter and Leo watched the snow falling. They did not want to go out!", "room; snowfall; dexter 315 y97 s.8; leo 350 y97 s.8"],
    ["Then the girls built a blanket fort in the living room.", "room; tent 200 s1.8 #ff8fb3; lamp 300 y232"],
    ["They played board games and told stories in the fort.", "room; tent 200 s1.8 #ff8fb3; L 80 sit big; E 320 sit big"],
    ["Emerson told her favorite joke. “Leaf me alone!” Everyone laughed again.", "room; tent 200 s1.8 #ff8fb3; E 320 big up; q 200 y80 t:Ha_ha!"],
    ["Being snowed in is fun when you are together!", "room; heart 200 y60; D 60; M 120; L 190; O 255; E 320 big"]
  ], q: ["Why was there no school?", "What did the girls build outside? What did they build inside?", "What do you like to do on a snow day?"] }
});
