/* SET 14 (ORANGE PLAID): two-syllable words */
Object.assign(BOOKS, {
  "14-1": { t: "The Picnic Basket", cover: 6, pages: [
    ["It is a sunny Saturday. Mom packs a picnic basket.", "kitchen; M 160; basket 270 y142 s1.6"],
    ["She puts in sandwiches, apples, and a big melon. Then she adds napkins.", "kitchen; basket 150 y142 s1.4; sandwich 220 y142; apple 260 y142; wmelon 310 y142 s.8"],
    ["The family drives to the park by the lake.", "out; van 200 s1.2 who:D,M,L,O,E go"],
    ["Dad spreads out a blanket. It has red and white squares.", "out; D 120; mat 230 s3.4 #e5484d"],
    ["Everyone sits down. Lauren passes the sandwiches.", "out; mat 200 s3.6 #e5484d; D 80 sit; L 150 sit hold:sandwich hs:.5; O 230 sit; E 300 sit big"],
    ["Emerson takes a bite. Yummy! Then a robin hops over.", "out; mat 200 s3.6 #e5484d; E 200 sit eat hold:sandwich hs:.5; bird 300 #e5484d s1.4"],
    ["The robin wants a crumb. Emerson tosses it a tiny piece.", "out; E 160 point; bird 280 s1.6 #e5484d"],
    ["Then the ants come marching. One, two, three, a hundred ants!", "out; mat 200 s3.6 #e5484d; ant 120 y230; ant 150 y232; ant 180 y230; ant 210 y232; ant 240 y230; basket 300 y228"],
    ["“Hurry!” says Olivia. They pick up the basket and dash away.", "out; O 140 run big hold:basket hs:.6; E 240 run big"],
    ["They finish the picnic on a bench. The ants did not follow them!", "out; L 110 eat hold:melon; O 200 eat hold:apple; E 290 eat hold:melon big"],
    ["What a perfect picnic day. Next time, they will bring a bigger blanket!", "out; spark; sun 320 y55 face; basket 200 s1.6"]
  ], q: ["What did Mom pack in the picnic basket?", "What kind of bird came to the picnic?", "Why did they move to the bench?"] },

  "14-2": { t: "The Rabbit in the Garden", cover: 4, pages: [
    ["Grandpa Lon's garden is full of tomatoes, lettuce, and carrots.", "garden; plant 120 s2.2 y228 fruit:#ef3e36; carrot 220 y228 s1.2; plant 300 s2 y228"],
    ["One morning, Grandpa Lon sees holes in his lettuce. Someone is nibbling!", "garden; Lon 140 wow; plant 260 s2 y228; q 260 y90"],
    ["Emerson brings Buttons to help. “We will find the nibbler,” she says.", "garden; E 160 hold:buttons hs:.5 big; Lon 280"],
    ["They hide behind the tomato plants. They wait very quietly.", "garden; E 120 y232 wow; plant 180 s2.4 y228 fruit:#ef3e36; Lon 260 y232"],
    ["Then a little brown rabbit hops in. Hop, hop, hop!", "garden; hops 250 y228; bunny 250 s1.4 y228"],
    ["It nibbles a carrot. Crunch, munch! Its nose is twitching.", "garden; bunny 200 s2 y228; carrot 260 y228 s1.2"],
    ["Emerson holds up Buttons. “Look, Buttons. A real rabbit!”", "garden; E 120 up hold:buttons hs:.5 big; bunny 280 s1.6 y228"],
    ["The rabbit looks at Buttons. Then it hops away fast!", "garden; hops 340 y228; bunny 340 s1.2 y228; E 140 wow hold:buttons hs:.5"],
    ["Grandpa Lon builds a little fence around the lettuce.", "garden; Lon 140 hold:shovel hs:.7; fence 270 y232 w:140"],
    ["But he plants an extra row of carrots, just for the rabbit.", "garden; Lon 140 big; carrot 230 y228; carrot 260 y228; carrot 290 y228"],
    ["“Rabbits need dinner, too,” he says with a wink. Emerson giggles.", "garden; spark; Lon 140 big; E 240 big hold:buttons hs:.5; bunny 330 s1.2 y228"]
  ], q: ["What was nibbling Grandpa Lon's lettuce?", "What did Emerson bring to help?", "What kind thing did Grandpa Lon do for the rabbit?"] },

  "14-3": { t: "The Holiday Tea Party", cover: 7, pages: [
    ["Every holiday, the sisters have a special tea party.", "xmas; table 200 #ff8fb3; teapot 200 y163; L 90; O 300; E 350 big"],
    ["Lauren sets out the teapot. It is pink with white flowers.", "xmas; L 140; teapot 260 y232 s2"],
    ["Olivia puts out the teacups and saucers. Clink, clink!", "xmas; O 140; teacup 230 y232 s1.6; teacup 290 y232 s1.6 #ff8fb3"],
    ["Emerson brings the cookies and some lemon tarts.", "xmas; E 160 hold:cookie hs:.6 big; plate 270 y232 s1.6"],
    ["They put on fancy dresses and sparkly crowns.", "xmas; L 110 crown #9b6bff; O 200 crown #ff6fae; E 290 crown #1f1f1f big"],
    ["Their dolls come, too. Buttons and Finley sit at the table.", "xmas; doll 120 y232 #e5484d h:#f7d35f; buttons 200 y232 s1.2; finley 290 y232 s1.2"],
    ["“Would you like some tea?” asks Lauren in a fancy voice.", "xmas; L 120 crown #9b6bff big; table 220 #ff8fb3; teapot 220 y163; teacup 260 y163"],
    ["“Yes, please,” says Emerson. She sips with her pinky up.", "xmas; E 200 eat hold:teacup hs:.6 crown #1f1f1f big s1.2"],
    ["Dexter jumps on the table! The teacups wobble. Oh no!", "xmas; table 200 #ff8fb3; teacup 160 y163; dexter 220 hop s1.2 y163; q 300 y80 t:!"],
    ["Olivia catches the teapot just in time. Phew!", "xmas; O 200 up hold:teapot hs:.6 crown #ff6fae wow"],
    ["The sisters laugh and finish their tea. It is the best tradition!", "xmas; heart 200 y50; xtree 345 s.9; L 90 crown #9b6bff; O 170 crown #ff6fae; E 250 crown #1f1f1f big"]
  ], q: ["When do the sisters have their tea party?", "Who came to the tea party?", "What did Dexter do?"] },

  "14-4": { t: "Lauren's Volleyball Game", cover: 7, pages: [
    ["Lauren plays volleyball. Today is her big tournament.", "gym; L 200 hold:vball hs:.8 #3b82f6 big"],
    ["Her team has blue shirts with numbers. Lauren is number seven.", "gym; L 200 #3b82f6 big s1.2; q 260 y90 t:7"],
    ["The net is high in the middle of the court.", "gym; vnet 200"],
    ["Lauren serves the ball. She tosses it up and hits it. Pop!", "gym; vnet 280; L 120 up #3b82f6; vball 160 y100"],
    ["The ball flies over the net. The other team hits it back.", "gym; vnet 200; vball 200 y60"],
    ["Lauren jumps high and spikes it down! Slam!", "gym; vnet 260; L 200 hop l40 up big #3b82f6; vball 280 y150"],
    ["Point for Lauren's team! Her teammates give her high fives.", "gym; spark; L 200 up big #3b82f6"],
    ["Emerson cheers with a sign. It says GO LAUREN!", "gym; sign 250 t:GO_LAUREN!; E 150 up big"],
    ["The game is tied. It is the last point. Lauren is nervous.", "gym; L 200 #3b82f6 wow; q 260 y90"],
    ["She serves. The other team misses it! Lauren's team wins!", "gym; spark; vnet 280; L 140 hop big #3b82f6"],
    ["Lauren gets a medal. She puts it around Emerson's neck for a minute.", "gym; L 150 big #3b82f6; E 250 big hold:medal hs:.8"]
  ], q: ["What sport does Lauren play?", "What number is Lauren?", "What did Emerson's sign say?"] },

  "14-5": { t: "The Pumpkin Patch", cover: 5, pages: [
    ["It is October. The family goes to the pumpkin patch.", "farm; pumpkin 100 s1.2 y232; pumpkin 200 s1.4 y232; pumpkin 300 s1 y232"],
    ["They ride on a wagon full of hay. Bumpy, bumpy!", "farm; wagon 200 s2 who:L,O,E; hay 120 s.8"],
    ["There are pumpkins everywhere. Big ones, small ones, round ones, and bumpy ones.", "farm; pumpkin 60 s.8 y236; pumpkin 140 s1.6 y236; pumpkin 230 s.6 y236; pumpkin 300 s1.2 y236; pumpkin 370 s.7 y236"],
    ["Olivia finds a tall pumpkin. Lauren finds a white one.", "farm; O 110; pumpkin 180 s1.2 y236; L 260; pumpkin 330 s1 y236"],
    ["Emerson finds the biggest pumpkin in the patch. It is enormous!", "farm; pumpkin 220 s3 y236; E 90 wow"],
    ["She tries to lift it. Ugh! It will not budge.", "farm; pumpkin 220 s3 y236; E 110 sad"],
    ["Dad helps carry it to the wagon. Huff, puff!", "farm; D 200 up big; pumpkin 200 s1.6 y70"],
    ["They also go through a corn maze. Left, right, left!", "farm; stalk 60; stalk 110; E 200 wow; stalk 290; stalk 340"],
    ["At home, they carve the pumpkins. Mom scoops out the seeds.", "kitchen; M 130; pumpkin 260 y142 s1.4"],
    ["Emerson's pumpkin gets a big, happy face!", "kitchen; pumpkin 200 y142 s2.4 face"],
    ["At night, they put candles inside. The pumpkins glow on the porch.", "night; pumpkin 140 s1.4 face; pumpkin 250 s1 face; pumpkin 320 s2 face"]
  ], q: ["How did they ride through the pumpkin patch?", "Who found the biggest pumpkin?", "What did they put inside the pumpkins at night?"] },

  "14-6": { t: "Halloween Night", cover: 7, pages: [
    ["It is Halloween! Everyone is getting into costumes.", "night; pumpkin 200 s2 face"],
    ["Lauren is a witch. She has a tall black hat.", "night; L 200 witch #2b2b2b big"],
    ["Olivia is a basketball player. She has a jersey and a ball.", "night; O 200 #236192 hold:bball hs:.8 big"],
    ["Emerson is a cat! She wears black, white, and pink. Those are her favorite colors.", "night; E 200 ears #1f1f1f big s1.3"],
    ["Ramsey is a fairy. Summer is a bunny. Ollie is a pumpkin!", "night; Ramsey 120 #ff8fb3; Summer 200 bunny s1.2; Ollie 280 #f08a24 s1.2"],
    ["They walk down the street with candy buckets. Knock, knock!", "night; L 80 witch #2b2b2b hold:bucket hs:.6; O 160 #236192 hold:bucket hs:.6; E 250 ears #1f1f1f hold:bucket hs:.6 big; Ramsey 330 #ff8fb3"],
    ["“Trick or treat!” they shout. They get lollipops and candy bars.", "night; spark; E 200 ears #1f1f1f big hold:lolli hs:.6; q 280 y80 t:Trick_or_treat!"],
    ["A ghost pops out of a bush. Boo! Ollie hides behind Emerson.", "night; ghost 280 s1.6; E 170 ears #1f1f1f wow; Ollie 120 #f08a24 s1.1 wow"],
    ["It is just Dad in a sheet! Everyone laughs.", "night; ghost 260 s1.6; D 160 big; E 340 ears #1f1f1f big"],
    ["At home, they sort their candy. Emerson trades for more lollipops.", "room; E 200 sit ears #1f1f1f big; lolli 280 y228; lolli 310 y228 #e5484d; bucket 120 y228"],
    ["Then they watch Emerson's favorite movie, The Nightmare Before Christmas. Happy Halloween!", "room; tv 200 s1.4; popcorn 300 y232; E 100 sit ears #1f1f1f big"]
  ], q: ["What were Emerson, Lauren, and Olivia for Halloween?", "Who was the ghost?", "What movie did they watch?"] },

  "14-7": { t: "Summer and Ollie", cover: 9, pages: [
    ["Summer and Ollie are cousins. They are both two years old.", "room; Summer 160 s1.5 big; Ollie 250 s1.5 big"],
    ["Summer has short blond hair. Ollie has curly blond hair.", "room; Summer 160 s1.6; Ollie 250 s1.6"],
    ["Today, they are visiting Emerson. They are very busy toddlers!", "room; E 200 big; Summer 120 s1.3 run; Ollie 290 s1.3 run"],
    ["Summer wants to play with Buttons. Ollie wants to play with Finley.", "room; Summer 130 s1.3 hug; buttons 180 s1.1; Ollie 270 s1.3 hug; finley 330 s1"],
    ["They are hugging them and giggling. Emerson is happy to share.", "room; heart 200 y60; Summer 130 s1.3 big; Ollie 270 s1.3 big; E 200 big"],
    ["Then Summer wants a snack. Ollie wants a snack, too. They want jello!", "kitchen; Summer 130 s1.3 wow; Ollie 270 s1.3 wow; jello 200 y142 s1.4"],
    ["Wiggle, jiggle! The jello lands on Ollie's nose. Silly Ollie!", "kitchen; Ollie 200 s1.6 big; jello 220 y96 s.4 wob"],
    ["After the snack, they play peekaboo with Emerson. Peekaboo! I see you!", "room; E 200 big s1.2; Summer 120 s1.3 big; Ollie 290 s1.3 big"],
    ["Then they dance to music. Wiggle, jump, and spin!", "room; q 200 y60 t:♪; Summer 120 s1.3 hop; E 200 up big; Ollie 290 s1.3 hop"],
    ["Soon the toddlers are tired. They nap on a big pillow.", "room; mat 200 s2.4 #ffcf33; Summer 160 sit mood:sleep s1.3; Ollie 240 sit mood:sleep s1.3"],
    ["Emerson whispers, “I love being a big cousin!”", "room; heart 200 y60; E 200 big s1.3"]
  ], q: ["How old are Summer and Ollie?", "What did Ollie get on his nose?", "Why does Emerson like being a big cousin?"] },

  "14-8": { t: "Mom the Granny Nanny", cover: 6, pages: [
    ["Mom has her own business. She is called the Granny Nanny!", "room; M 200 big s1.1"],
    ["She helps older people who need care. She is kind and patient.", "room; M 140; Elder 260 hold:cane hs:.9"],
    ["Today, Emerson goes with Mom to visit Miss Ruth.", "out; van 200 s1.2 who:M,E go"],
    ["Miss Ruth has white hair. She uses a cane to walk.", "room; Elder 200 hold:cane hs:.9 big"],
    ["Mom helps Miss Ruth with her lunch. They have soup and crackers.", "kitchen; M 140; Elder 260 eat hold:bowl hc:#e8b46a hs:.5"],
    ["Emerson sings a song for Miss Ruth. Miss Ruth claps her hands.", "room; E 140 big; q 140 y80 t:♪; Elder 270 up big"],
    ["Then they do a puzzle together. Miss Ruth is very good at puzzles!", "room; table 200 #fff; E 120 big; Elder 290 big; box 200 y163 s.6"],
    ["Miss Ruth tells a story about when she was a little girl on a farm.", "farm; barn 300 s.8; Elder 160 book big"],
    ["“I want to be a farmer!” says Emerson. Miss Ruth smiles. “You will be a great one.”", "room; E 140 big hat:#e8c872; Elder 270 big"],
    ["At the end of the visit, Miss Ruth gives Emerson a hug.", "room; heart 200 y60; Elder 160 hug big; E 250 big"],
    ["On the way home, Emerson says, “Mom, you have the best job!”", "out; heart 200 y60; van 200 s1.2 who:M,E go"]
  ], q: ["What is the name of Mom's business?", "What did Emerson and Miss Ruth do together?", "How can you help an older person?"] },

  "14-9": { t: "Dexter and Leo Go to Space", cover: 5, pages: [
    ["Dexter and Leo love the sun. But clouds cover the sun today. They are grumpy!", "rain; dexter 140 s1.6 grumpy y232; leo 260 s1.6 grumpy y232"],
    ["“I know!” says Dexter. “Let's go closer to the sun!”", "room; dexter 200 s2 big; q 280 y80 t:!"],
    ["They build a rocket from a box. They paint it red and white.", "room; box 200 s2 #e5484d; dexter 110 s1.3; leo 300 s1.3"],
    ["Three, two, one, blast off! Whoosh!", "out; rocket 200 s1.4 y180 who:dexter,leo go; splash 200 y220 s2"],
    ["The rocket zooms past the clouds. It zooms past the moon.", "space; rocket 200 s1.4 y170 who:dexter,leo go; moon 80 y90"],
    ["They land on a planet. It is warm and sunny. Perfect!", "moonland; sun 330 y55 s1.4 face; rocket 120 s1.2 who:dexter,leo"],
    ["Dexter and Leo stretch out on the warm rocks. Ahh, bliss!", "moonland; sun 330 y55 face; dexter 160 sleep s1.6 y222; leo 250 sleep s1.6 y222"],
    ["Then they hear a sound. “Dexter! Leo! Dinner time!” It is Emerson!", "moonland; dexter 160 s1.6 wow y222; leo 250 s1.6 y222; q 300 y90 t:Dinner!"],
    ["They zoom back home in their rocket. Faster, faster!", "space; rocket 220 s1.4 y170 who:dexter,leo go; star 80 y80"],
    ["They land on the couch, just as Emerson walks in.", "room; box 200 s2 #e5484d; dexter 160 s1.3 y188; leo 240 s1.3 y188; E 340 wow"],
    ["“Were you two napping all day?” she asks. The cats just purr.", "room; spark; E 160 big; dexter 250 s1.4; leo 320 s1.4; q 200 y80 t:Purr"]
  ], q: ["Why did Dexter and Leo want to go to space?", "What did they make their rocket from?", "Is this story real or make-believe? How do you know?"] },

  "14-10": { t: "An Elephant at School", cover: 6, pages: [
    ["One Monday, something big walks into Mrs. Hulla's class. It is an elephant!", "school board:Monday; elephant 240 s1.5; Hulla 80 wow"],
    ["The kids gasp. Avery drops her pencil. Crickett drops her crayons.", "school; Avery 120 wow; Crickett 210 wow; elephant 330 s1"],
    ["Emerson is not scared. Elephants are her favorite animal!", "school; E 160 big up; elephant 290 s1.2"],
    ["The elephant sits in the back row. Crack! The chair breaks.", "school; elephant 200 s1.6; q 300 y70 t:Crack!"],
    ["Mrs. Hulla gives it a big rug instead. It sits nicely.", "school; mat 200 s3.8 #c76b6b y228; elephant 200 s1.4 y226; Hulla 340"],
    ["At reading time, the elephant listens. It flaps its big ears.", "school board:Read!; Hulla 100 book; elephant 270 s1.4"],
    ["At snack time, it eats a whole basket of apples! Munch, crunch!", "school; elephant 220 s1.4; basket 110 s1.4"],
    ["At recess, it gives the kids rides on its back. Wheee!", "out; elephant 200 s2; E 190 sit y120 big; Avery 230 sit y120 big"],
    ["Then it sprays water with its trunk. Everyone gets wet and laughs!", "out; elephant 140 s1.6; splash 260 y140 s2; Crickett 290 big; E 350 big"],
    ["At the end of the day, the elephant waves its trunk. It has to go home to the zoo.", "out; elephant 200 s1.6; E 330 wave big"],
    ["Emerson wakes up. It was a dream! But she still hopes an elephant comes to school someday.", "bedroom; bed 200 #ff8fb3 who:E big; elephant 320 y110 s.5"]
  ], q: ["What happened to the chair?", "What did the elephant eat at snack time?", "Was the story real? How do you know?"] }
});
