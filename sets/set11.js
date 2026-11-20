/* SET 11 (RED STRIPES): review of Sets 1-10 with longer sentences.
   Every book from Set 11 on has a "q" list: questions for the Think and Talk page. */
Object.assign(BOOKS, {
  "11-1": { t: "Buttons and Finley", cover: 2, pages: [
    ["Emerson has a white rabbit. His name is Buttons. He has button eyes.", "bedroom; buttons 200 s2.6"],
    ["Emerson has a brown bison, too. His name is Finley. He is soft and fuzzy.", "bedroom; finley 200 s2.6"],
    ["Buttons and Finley go with Emerson to the kitchen for a snack.", "kitchen; E 200 hold:buttons hs:.6; finley 280 y228 s1.2"],
    ["They go with her in the van. They look out the window.", "out; van 200 s1.2 who:D,M,E"],
    ["They go with her to Grandma Lynette's. Grandma gives them each a hug.", "out; Lyn 140 hug big; E 250 hold:finley hs:.5"],
    ["Buttons likes to hop. Hop, hop, hop! Emerson hops with him.", "out; hops 220 y214; buttons 230 s1.2 y185; E 320 hop big"],
    ["Finley likes to stomp. Stomp, stomp! Emerson stomps with him.", "out; finley 160 s1.5; E 280 hop"],
    ["Dexter sniffs Buttons. Leo sniffs Finley. They are not sure about them!", "room; buttons 140 s1.4; dexter 200 s1.4; finley 260 s1.3; leo 330 s1.4"],
    ["Then Dexter and Leo nap next to them. Now they are all friends.", "room; mat 200 s3.4 #c76b6b; buttons 120 s1.2 y210; dexter 190 sleep s1.3 y212; leo 260 sleep s1.3 y212; finley 330 s1.1 y212"],
    ["At night, Buttons and Finley sleep in Emerson's bed. They keep her safe.", "bedroom night; bed 200 #ff8fb3 who:E sleep; buttons 250 y172 s.8; finley 300 y172 s.8"],
    ["Good night, Buttons. Good night, Finley. Good night, Emerson!", "bedroom night; q 200 y90 t:Z_z_z #6b7bd6; buttons 150 s1.6 y228; finley 260 s1.6 y228"]
  ], q: ["What is the name of Emerson's rabbit?", "What kind of animal is Finley?", "Do you have a stuffed animal? What is its name?"] },

  "11-2": { t: "Mrs. Hulla's Class", cover: 5, pages: [
    ["Emerson is in kindergarten. Her teacher is Mrs. Hulla.", "school board:Mrs._Hulla; Hulla 200 wave big"],
    ["Emerson gets on the bus with Olivia and Lauren. The bus is big and yellow.", "out; bus 200 who:L,O,E"],
    ["Avery and Crickett are in her class. They are her best friends!", "school board:Hi_friends!; Avery 120 big; E 200 big; Crickett 280 big"],
    ["Mrs. Hulla says, “Good morning, class!” The kids say, “Good morning!”", "school board:Good_morning!; Hulla 110 big; Avery 210; E 270; Crickett 330"],
    ["First, they sing the ABC song. A, B, C, D!", "school board:A_B_C_D; Hulla 100 big; Avery 200 big; E 260 big; Crickett 320 big; q 200 y60 t:♪"],
    ["Then they read a big book. Emerson can read some of the words!", "school board:Read!; Hulla 120 book; E 260 sit big"],
    ["At lunch, Avery has a sandwich. Crickett has a jello cup. Emerson has an apple.", "school; Avery 100 hold:sandwich hs:.6; Crickett 200 hold:jello hs:.4; E 300 eat hold:apple"],
    ["At recess, they run and play tag. Tag, you are it!", "out; Avery 110 run; E 200 run big; Crickett 290 run"],
    ["Then they paint. Emerson paints a pink elephant.", "school board:Art; desk 200 #ff6fae; E 290 big"],
    ["At the end of the day, Mrs. Hulla gives Emerson a sticker. It is a gold star!", "school; spark; Hulla 140 big; E 250 big hold:star hs:.6"],
    ["Emerson runs to Mom. “I love kindergarten!” she says.", "out; heart 200 y60; M 160 hug big; E 250 big"]
  ], q: ["Who is Emerson's teacher?", "What are the names of Emerson's friends?", "What did Emerson paint?"] },

  "11-3": { t: "Leaf Me Alone!", cover: 7, pages: [
    ["It is fall. The leaves are red, orange, and yellow.", "out; leaves; tree 120 s1.4 fall; tree 300 s1.2 fall"],
    ["Lauren and Olivia rake the leaves into a big pile.", "out; leaves; L 110 hold:shovel hs:.7; O 290 hold:shovel hs:.7; tree 200 s1.2 fall"],
    ["Emerson jumps in! Crunch, crunch! Leaves fly up.", "out; leaves seed:4; E 200 hop l30 big; splash 200 y210 s1.4"],
    ["Then Lauren says, “Emerson, I have a joke for you.”", "out; leaves; L 150 point big; E 260 wow"],
    ["“What did the big tree say to the little tree?”", "out; tree 140 s1.6 fall face; tree 300 s.9 fall face; q 220 y80"],
    ["Emerson thinks and thinks. She does not know!", "out; E 200 wow s1.2; q 260 y90"],
    ["“Leaf me alone!” says Olivia. Emerson laughs and laughs.", "out; leaves; tree 120 s1.4 fall face; L 230 big; O 290 big; E 350 big up"],
    ["Then the wind blows. Whoosh! The leaves blow all over.", "out; leaves seed:9; leaves seed:3; tree 200 s1.3 fall"],
    ["Dexter and Leo watch the leaves from the window. They want to chase them!", "room; leaves; dexter 315 y97 s.8; leo 350 y97 s.8"],
    ["Emerson tells the joke to Mom. Mom laughs. She tells it to Dad. Dad laughs, too!", "room; M 100 big; E 200 point big; D 300 big"],
    ["Now Emerson tells the joke to everyone. Leaf me alone!", "out; spark; leaves; tree 200 s1.4 fall face; E 320 big up"]
  ], q: ["What did the big tree say to the little tree?", "What colors are the leaves in fall?", "Do you know a funny joke?"] },

  "11-4": { t: "Emerson's Elephant", cover: 4, pages: [
    ["Emerson's favorite animal is the elephant. Today she goes to the zoo!", "out; sign 320 t:Zoo; E 180 big up"],
    ["First she sees a bird with pink feathers. It stands on one leg!", "out; bird 160 s2 #ff8fb3; E 280 point"],
    ["Then she sees the elephants! There is a big one and a little one.", "out; fence 200 y232 w:360; elephant 140 s1.4; elephant 280 s.8"],
    ["The big elephant has big ears and a long trunk. It is so tall!", "out; elephant 190 s2.2"],
    ["The little elephant splashes in the mud. Splash!", "out; mud 220 s2.4 y230; elephant 200 s1 y224; splash 250 y190 s1.4"],
    ["The big elephant sprays water with its trunk. Whoosh!", "out; elephant 140 s1.6; splash 270 y120 s2; splash 300 y150 s1.6"],
    ["The water gets on Dad! Dad is wet. Everyone laughs.", "out; D 200 wow; splash 200 y90 s2; L 90 big; E 310 big"],
    ["The zookeeper says elephants eat hay, fruit, and leaves.", "out; elephant 140 s1.4; hay 290 s1.4"],
    ["Emerson gets an elephant in the zoo shop. It is gray and soft.", "out; E 200 hold:elephant hs:.3 big s1.2"],
    ["She names it Peanut. Now Buttons and Finley have a new friend.", "bedroom; buttons 120 s1.4; elephant 210 s.6; finley 300 s1.3"],
    ["Emerson loves elephants! When she grows up, she will see them in Africa.", "out; spark; elephant 140 s1.4; elephant 230 s.9; E 330 big up"]
  ], q: ["What is Emerson's favorite animal?", "Who got wet at the zoo?", "What did Emerson name her new elephant?"] },

  "11-5": { t: "Jiggle, Jiggle, Jello", cover: 9, pages: [
    ["Emerson loves jello. It is her favorite food!", "kitchen; jello 200 y142 s2.2 wob"],
    ["Today Mom and Emerson will make jello. It is pink!", "kitchen; M 140; E 260 big"],
    ["Mom heats the water. Emerson pours in the pink mix. Stir, stir, stir!", "kitchen; M 110; pot 210 y142 s1.4 hot; E 310 big"],
    ["They put it in the fridge. Now they must wait and wait.", "kitchen; E 200 sit wow"],
    ["Is it done yet? No. Is it done yet? No!", "kitchen; E 200 wow s1.2; q 260 y90"],
    ["At last, it is done! Mom flips it on a plate. Plop!", "kitchen; spark; jello 200 y142 s2"],
    ["Emerson taps the jello. It jiggles and wiggles!", "kitchen; E 130 point big; jello 260 y142 s1.8 wob"],
    ["Olivia and Lauren come to look. “Can we have some?” they ask.", "kitchen; L 100 big; O 180 big; jello 290 y142 s1.6"],
    ["Everyone gets a bowl. Wiggle, jiggle, yum!", "kitchen; L 100 eat hold:jello hs:.4; O 200 eat hold:jello hs:.4; E 300 eat hold:jello hs:.4 big"],
    ["Dexter looks at the jello. It wiggles. Dexter jumps back!", "kitchen; jello 160 y232 s1.4 wob; dexter 270 hop l30 s1.4 wow"],
    ["Jello is the best. Next time, Emerson wants to make green jello!", "kitchen; jello 150 y142 s1.4 #2eb67d; jello 250 y142 s1.4 wob"]
  ], q: ["What color jello did they make?", "Why did they have to wait?", "What did Dexter do when the jello wiggled?"] },

  "11-6": { t: "The Cousins Come", cover: 8, pages: [
    ["Ding dong! Who is at the door? It is the cousins!", "room; q 200 y80 t:Ding_dong!"],
    ["Ramsey has long red hair. She is five. She is almost as big as Emerson.", "room; Ramsey 160 wave big; E 250 big"],
    ["Summer has short blond hair. She is two. She likes to giggle.", "room; Summer 200 s1.3 big"],
    ["Ollie has curly blond hair. He is two, too. He likes to run!", "room; Ollie 200 s1.3 run big"],
    ["Ramsey and Emerson play dolls. They have a doll tea party.", "bedroom; Ramsey 120 hold:doll hc:#2eb67d hs:.8; E 280 hold:doll hc:#ff6fae hh:#f7d35f hs:.8; teapot 200 y230"],
    ["Summer and Ollie play with blocks. Then they knock them down. Crash!", "room; box 200 s1.2; box 200 y179 s.9 #e5484d; Summer 120 big; Ollie 290 big; q 200 y60 t:Crash!"],
    ["Ollie chases Leo. Leo runs under the bed!", "bedroom; bed 200; leo 120 hop s1.2; Ollie 300 run big"],
    ["Lauren and Olivia put on a show. Everyone claps!", "room; L 140 up big; O 250 up big; Ramsey 60 sit; Summer 330 sit; Ollie 370 sit"],
    ["Then it is time for a snack. Everyone has apples and jello.", "kitchen; Ramsey 70; Summer 130 s1.1; E 200 big; Ollie 270 s1.1; O 330; table 200 #ffd1e0; jello 170 y163; apple 230 y163"],
    ["Summer and Ollie fall asleep on the couch. Shh!", "room; mat 200 s2.6 #9b6bff; Summer 160 sit mood:sleep; Ollie 240 sit mood:sleep; q 200 y80 t:Z_z #6b7bd6"],
    ["Bye, cousins! Come back soon. We love you!", "out; heart 200 y50; Ramsey 120 wave; Summer 180 wave; Ollie 230 wave; E 310 wave big"]
  ], q: ["How old are Summer and Ollie?", "What color is Ramsey's hair?", "What did Lauren and Olivia do for everyone?"] },

  "11-7": { t: "Golf with Dad", cover: 6, pages: [
    ["Dad likes to play golf. Today Emerson gets to go with him!", "golf; D 160 hold:club hs:.8 big; E 260 big up"],
    ["Dad has a bag of golf clubs. Some are long and some are short.", "golf; D 200 hold:club hs:.8; bag 280 s1.6 #3b82f6"],
    ["He sets a little white ball on a tee. Then he swings. Whack!", "golf; D 160 up big; gball 260 y120; q 280 y80 t:Whack!"],
    ["The ball goes far, far away. Where did it go?", "golf; gball 340 y60; E 160 wow; q 220 y80"],
    ["They ride in a golf cart to find it. Zoom!", "golf; cart 200 s1.3 who:D,E go"],
    ["Now it is Emerson's turn. Dad gives her a little club.", "golf; D 140 point; E 250 hold:club hs:.6"],
    ["She swings and misses! She swings again. Tap! The ball rolls a little.", "golf; E 180 up; gball 240 y230; q 280 y90 t:Tap!"],
    ["The hole has a red flag. Emerson must get the ball in the hole.", "golf; hole 280 s1.3; E 140 hold:club hs:.6; gball 200 y232"],
    ["Tap, tap, plop! The ball goes in the hole!", "golf; spark; hole 260 s1.3; gball 262 y230; E 140 up big"],
    ["Dad gives her a big high five. “You did it!”", "golf; D 160 up big; E 240 up big; q 200 y70 t:Smack!"],
    ["Emerson and Dad play golf all day. Golf is fun with Dad!", "golf; heart 200 y60; cart 200 s1.3 who:D,E go"]
  ], q: ["What did Dad and Emerson ride in?", "What color is the flag on the hole?", "What sport does your family like to play?"] },

  "11-8": { t: "Mom Can Run", cover: 3, pages: [
    ["Mom likes to stay strong. Every morning, she goes for a run.", "out; sun 320 y60; M 200 run"],
    ["Today Emerson wants to run with Mom. She puts on her shoes.", "room; E 200 big s1.2"],
    ["Mom and Emerson run down the street. Run, run, run!", "out; M 140 run; E 240 run big"],
    ["They run past a big tree. They run past a red barn.", "out; tree 90 s1.2; M 200 run; E 260 run; barn 360 s.6"],
    ["Emerson gets tired. Mom says, “Let's walk for a bit.”", "out; M 150; E 250 sad"],
    ["Then they run again. They run all the way back home!", "out; M 140 run big; E 240 run big"],
    ["Next, Mom lifts weights. Up, down! Up, down!", "room; M 200 up hold:weights hs:.8"],
    ["Emerson lifts little weights. They are pink!", "room; E 200 up hold:weights hc:#ff6fae hs:.7 big"],
    ["Then they stretch on a mat. Stretch up high! Stretch down low!", "room; mat 200 s3 #9b6bff; M 150 up y210; E 260 up y210"],
    ["After that, Mom reads a book. She loves to read, just like Emerson.", "room; M 160 sit book bc:#2eb67d; E 260 sit book"],
    ["“We are strong and smart,” says Mom. Emerson gives her a big hug.", "room; heart 200 y60; M 160 hug big; E 250 big"]
  ], q: ["What does Mom do every morning?", "What color were Emerson's weights?", "What does Mom love to do after exercising?"] },

  "11-9": { t: "The Lollipop Shop", cover: 6, pages: [
    ["Emerson and Lauren go to the candy shop in town.", "city; sign 320 t:Candy; L 140; E 220 big"],
    ["The shop has lots of candy. There is red, green, pink, and blue!", "room; lolli 80 s1.4 #e5484d; lolli 140 s1.4 #2eb67d; lolli 200 s1.4; lolli 260 s1.4 #3b82f6; lolli 320 s1.4 #ffcf33"],
    ["Emerson's favorite candy is a lollipop. Which one will she pick?", "room; E 200 wow s1.2; q 260 y90"],
    ["Lauren picks a big red lollipop.", "room; L 200 hold:lolli hc:#e5484d hs:.7"],
    ["Emerson picks a pink and white one. It is as big as her hand!", "room; E 200 hold:lolli hs:.7 big s1.2"],
    ["Lick, lick, lick! It is sweet like a strawberry.", "room; spark; E 200 eat hold:lolli hs:.7 big s1.2"],
    ["Then they get a lollipop for Olivia. It is purple.", "room; L 140 hold:lolli hc:#9b6bff hs:.7; E 250 big"],
    ["At home, Olivia says, “Thank you!” She licks it fast.", "room; O 200 eat hold:lolli hc:#9b6bff hs:.7 big"],
    ["Uh oh! Emerson's lollipop is stuck in her hair!", "room; E 200 wow s1.3; lolli 225 y110 s.6; q 280 y80 t:!"],
    ["Lauren helps get it out. Then she brushes Emerson's hair.", "room; L 140 hold:brush hs:.6; E 240 big"],
    ["Next time, Emerson will hold her lollipop with care!", "room; E 200 hold:lolli hs:.7 big s1.2; heart 260 y80"]
  ], q: ["What is Emerson's favorite candy?", "What color lollipop did Olivia get?", "What happened to Emerson's lollipop?"] },

  "11-10": { t: "Emerson the Farmer", cover: 5, pages: [
    ["When Emerson grows up, she wants to be a farmer, just like Grandpa Mark.", "farm; Mark 140 big; E 240 hat:#e8c872 big"],
    ["Grandpa Mark grows soybeans, black beans, wheat, and sugar beets.", "farm; soy 70 y230 s1.2; wheat 150 y230; beet 240 y230 s1.2; beans 320 y232 s1.6"],
    ["The wheat is gold. It sways in the wind. Swish, swish!", "farm; wheat 80 y232 s1.4; wheat 140 y232 s1.4; wheat 200 y232 s1.4; wheat 260 y232 s1.4; wheat 320 y232 s1.4"],
    ["The soybeans grow in long green rows.", "farm; soy 70 y236; soy 140 y236; soy 210 y236; soy 280 y236; soy 350 y236"],
    ["Emerson rides with Grandpa Mark on the big tractor. She helps him drive!", "farm; tractor 200 s1.5 who:Mark,E go"],
    ["They pull up a sugar beet. It is big and white. It is so sweet!", "farm; E 200 up hold:beet hs:.7 big hat:#e8c872"],
    ["Sugar beets are made into sugar. The sugar goes in cookies!", "kitchen; beet 140 y142 s1.4; cookie 230 y142 s1.4; cookie 280 y142 s1.4"],
    ["Then they check the black beans. They are small and shiny.", "farm; Mark 120 hold:beans hs:.8; E 250 wow hat:#e8c872"],
    ["It is hard work on a farm. Emerson is tired, but she is happy.", "farm; hay 200 s2; E 200 sit y168 big hat:#e8c872"],
    ["Grandpa Mark gives Emerson a straw hat. “Now you are a farmer,” he says.", "farm; Mark 140 big; E 250 up big hat:#e8c872"],
    ["Emerson the Farmer! It has a nice ring to it.", "farm; spark; tractor 290 s1.2; E 140 big up hat:#e8c872"]
  ], q: ["What four crops does Grandpa Mark grow?", "What is made from sugar beets?", "What do you want to be when you grow up?"] }
});
