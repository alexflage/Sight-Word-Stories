/* SET 13 (BLUE CHECKS): vowel teams ou, ow, oi, oy, au, aw */
Object.assign(BOOKS, {
  "13-1": { t: "The Cow Who Bowed", cover: 6, pages: [
    ["Grandpa Mark's neighbor has a brown cow. Her name is Daisy.", "farm; cow 200 s1.6 #8b5a2b"],
    ["Daisy is not like other cows. She likes to take a bow!", "farm; cow 200 s1.6; q 300 y80 t:?"],
    ["When the girls come to the fence, Daisy bows down low.", "farm; fence 200 y232 w:360; cow 200 s1.4; E 330 wow"],
    ["Wow! Emerson and Olivia bow back. Now Daisy bows again!", "farm; cow 160 s1.4; O 270 big; E 330 big"],
    ["Then Daisy says, “Moo-ow!” It is a very loud sound.", "farm; cow 200 s1.6; q 300 y70 t:MOO-OW!"],
    ["“Is that a cow or an owl?” asks Olivia. Everyone laughs.", "farm; owl 330 y110 s1.2; cow 150 s1.4; O 280 big"],
    ["Daisy trots around the field. She is showing off!", "farm; hops 260 y214; cow 260 s1.3"],
    ["Then she does a little hop and a bow. What a funny cow!", "farm; spark; cow 200 s1.6"],
    ["Grandpa Mark says, “Daisy should be in a show!”", "farm; Mark 140 big; cow 270 s1.3"],
    ["So the girls put on a cow show. Lauren is the host. Daisy is the star!", "farm; sign 330 t:Cow_Show; L 100 point big; cow 220 s1.3"],
    ["Daisy took one more bow. Now! Wow! What a brown cow!", "farm; spark; cow 200 s1.6; L 80 up big; O 320 up big; E 370 up big"]
  ], q: ["What is the cow's name?", "What funny thing does Daisy do?", "Who was the host of the cow show?"] },

  "13-2": { t: "What Was That Loud Sound?", cover: 10, pages: [
    ["One night, the house was very quiet. Shh!", "bedroom night; bed 200 #ff8fb3 who:E sleep"],
    ["Then, BOOM! A loud sound woke Emerson up.", "bedroom night; bed 200 #ff8fb3 who:E wow; q 300 y70 t:BOOM! #e0a800"],
    ["“What was that?” she whispered. She pulled her blanket around her.", "bedroom night; bed 200 #ff8fb3 who:E wow; q 300 y80"],
    ["She found Buttons and Finley. “Let's look around,” she said bravely.", "bedroom night; E 200 hold:buttons hs:.5 wow; finley 270 s1.2"],
    ["She tiptoed down the hall. Was it a mouse? Was it an owl?", "room; E 200 wow; mouse 300 y232; owl 90 y120"],
    ["She looked in the living room. No one was there.", "room; E 200 wow s1.1; mat 200 s3 #c76b6b"],
    ["She looked in the kitchen. A pot was on the floor!", "kitchen; pot 200 y232 s1.6; E 320 wow"],
    ["And there was Leo, next to the pot, looking proud.", "kitchen; pot 160 y232 s1.6; leo 260 s1.6 y232"],
    ["Leo had knocked it down! He was hunting for a snack.", "kitchen; leo 200 s1.8 y232 grumpy; q 270 y90 t:Oops"],
    ["Emerson laughed. “You silly cat! You made a big sound!”", "kitchen; E 160 big; leo 260 s1.6 y232"],
    ["She gave Leo a cat treat. Then they went back to bed. Now, no more sounds!", "bedroom night; bed 200 #ff8fb3 who:E,leo sleep; q 300 y80 t:Z_z #6b7bd6"]
  ], q: ["What woke Emerson up?", "What did Emerson bring with her?", "Who made the loud sound?"] },

  "13-3": { t: "Toys and Joy", cover: 7, pages: [
    ["It is Christmas Eve. The house is full of joy!", "xmas; xtree 300 s1.3"],
    ["The girls hang their stockings by the fire. One, two, three!", "xmas; stocking 60 y110; stocking 90 y110 #2eb67d; stocking 120 y110 #ff6fae; L 230; O 290; E 350 big"],
    ["They leave out cookies and milk for Santa. Will he come?", "xmas; table 230 #fff; cookie 210 y163; drink 250 y163 #fff; E 340 wow"],
    ["Emerson cannot sleep. She is too excited!", "bedroom night; bed 200 #ff8fb3 who:E wow"],
    ["In the morning, she hears Ollie shout, “Toys!” The cousins are here.", "xmas; xtree 300 s1.3; Ollie 150 s1.3 up big"],
    ["There are presents under the tree. Lots and lots of them!", "xmas; xtree 260 s1.3; gift 180 y230 #e5484d; gift 220 y232 #2eb67d s.8; gift 320 y232 #ffcf33"],
    ["Emerson opens a box. It is a pink and black toy farm! Oh, boy!", "xmas; spark; E 200 up big; barn 290 y232 s.4; gift 120 y232"],
    ["Olivia gets a new basketball. Lauren gets a microphone for singing.", "xmas; O 120 hold:bball hs:.8 big; L 260 hold:mic hs:.5 big"],
    ["Ramsey gets a doll. Summer and Ollie get toy trucks. They make noise. Vroom!", "xmas; Ramsey 120 hold:doll hc:#2eb67d hs:.7; Summer 220 s1.3 big; Ollie 300 s1.3 big"],
    ["Then the sisters have their holiday tea party with their dolls.", "xmas; table 200 s.8 #ff8fb3; teapot 200 y173; L 100; O 300; E 350 big"],
    ["Toys are fun. But being together is the best joy of all!", "xmas; heart 200 y60; xtree 340; D 50; M 110; L 170; O 230; E 290 big santa"]
  ], q: ["What did Emerson get for Christmas?", "What did the girls leave for Santa?", "What do the sisters do together on holidays?"] },

  "13-4": { t: "Draw a Paw", cover: 9, pages: [
    ["Emerson loves to draw. She draws with crayons and chalk.", "kitchen; E 280 big; table 180 #fff; paper 180 y163 s1.4"],
    ["Today she wants to draw Dexter and Leo. She sat on the floor with her paper.", "room; E 200 sit; paper 260 y228 s1.4"],
    ["“Hold still!” she said. Dexter yawned. Leo sprawled out.", "room; dexter 120 s1.5 sleep y222; leo 280 s1.5 sleep y222"],
    ["She drew Dexter's head. She drew his ears. She drew his paws.", "room; paper 200 y230 s2.4; dexter 200 s1 y200"],
    ["Then Dexter got up and walked away. Oh no! Now she cannot finish.", "room; E 160 sad sit; hops 300 y214; dexter 310 hop"],
    ["Leo was still lying in the sunny spot. So she drew Leo.", "room; leo 200 sleep s1.8 y215; E 320 sit"],
    ["Leo's tail went flick, flick. That was hard to draw!", "room; leo 200 s1.8 y215; q 270 y90 t:Flick!"],
    ["Then Leo put his paw on the paper. Now there was a paw print!", "room; paper 200 y232 s2.4; leo 270 s1.4; q 200 y150 t:🐾 size:40"],
    ["Emerson was not upset. She laughed. “Thank you for the autograph, Leo!”", "room; E 200 big up s1.2; leo 300 s1.3"],
    ["She hung the drawing on the fridge. Mom and Dad said, “Awesome!”", "kitchen; M 100 big; D 180 big; paper 280 y120 s1.8"],
    ["Now every time Emerson draws, Leo adds his paw!", "room; spark; E 200 sit big; paper 270 y228 s1.4; leo 330 s1.2"]
  ], q: ["What did Emerson want to draw?", "Why couldn't she finish drawing Dexter?", "What did Leo add to the paper?"] },

  "13-5": { t: "A Coin for a Wish", cover: 7, pages: [
    ["In the winter, the family flies to Florida. They are going to see the ocean!", "out; plane 200 y90 s1.4; cloud 80 y150"],
    ["Florida is hot and sunny. Emerson points at the palm trees.", "beach; sun 330 y50 face; palm 70; E 200 point big y238"],
    ["They walk around a town by the sea. There is a big fountain.", "city; palm 40; splash 200 y170 s2.6; rock 200 s3 y230"],
    ["Dad gives each girl a coin. “Make a wish,” he says.", "city; D 140 hold:gball hs:1.2; E 250 big"],
    ["Lauren tosses her coin. Plink! She wishes for a part in a play.", "city; splash 230 y180 s2; L 140 up big"],
    ["Olivia tosses her coin. Plunk! She wishes to see the Lynx win.", "city; splash 230 y180 s2; O 140 up big"],
    ["Emerson holds her coin. She points at the fountain and closes her eyes.", "city; E 200 point mood:sleep; q 260 y90 t:✨"],
    ["Plop! In goes her coin. What did she wish for?", "city; spark; splash 200 y170 s2.6; q 200 y60 t:?"],
    ["“I wished for a farm with elephants!” she says. Everyone laughs.", "farm; elephant 140 s1.2; barn 300 s.8; E 230 big hat:#e8c872"],
    ["Then they go to the beach. Emerson finds a shell with a pink point.", "beach; E 200 hold:shell hs:.8 big y238"],
    ["“This is the best wish of all,” she says. “I am with my family!”", "beach; heart 200 y60; D 60 y238; M 130 y238; L 200 y238; O 270 y238; E 340 y238 big"]
  ], q: ["Where does the family go in winter?", "What did Olivia wish for?", "What would you wish for?"] },

  "13-6": { t: "The Owl at Grandma Camp", cover: 5, pages: [
    ["It is night at Grandma Camp. The girls are camping out in the yard.", "woods night; tent 200 s1.8"],
    ["“Hoo! Hoo!” What is that sound? It is coming from a tree.", "woods night; tree 300 s1.3; q 300 y60 t:Hoo!"],
    ["Grandma Lynette shines the flashlight up. It is an owl!", "woods night; Lyn 140 up hold:lamp hs:.7; owl 300 y120 s1.6"],
    ["The owl has round eyes. It turns its head all the way around!", "night; owl 200 s3 y200"],
    ["“Wow!” says Emerson. “Can I turn my head like that?” She tries.", "night; E 200 wow s1.3"],
    ["Ouch! She cannot. Owls are special!", "night; E 200 sad s1.2; q 260 y90 t:Ouch!"],
    ["Grandma says owls hunt for mice at night. They fly without a sound.", "night; owl 130 y120 s1.4; mouse 280 y232 s1.4"],
    ["The owl swoops down. Then it flies up to the moon.", "night; owl 200 y80 s1.4"],
    ["The girls are howling like wolves. Ow-ooo!", "woods night; L 100 up big; O 200 up big; E 300 up big; q 200 y60 t:Ow-ooo!"],
    ["“Hoo, hoo,” answers the owl. Now the girls are giggling.", "woods night; owl 330 y110 s1.2; tree 330 s1.3; E 160 big"],
    ["They crawl into the tent and snuggle down. Good night, owl!", "woods night; tent 200 s1.8; owl 330 y110 s1.2; q 200 y60 t:Z_z #c9d3ff"]
  ], q: ["What sound does an owl make?", "What can an owl do with its head?", "What do owls hunt at night?"] },

  "13-7": { t: "Haul the Sugar Beets", cover: 7, pages: [
    ["In the fall, it is time to harvest the sugar beets.", "farm; beet 120 y232 s1.4; beet 200 y232 s1.4; beet 280 y232 s1.4"],
    ["Grandpa Mark drives a big machine. It digs up the beets.", "farm; tractor 200 s1.5 who:Mark go"],
    ["The beets bounce out of the ground. Out they pop!", "farm; beet 120 y200 s1.2; beet 200 y180 s1.2; beet 280 y200 s1.2; splash 200 y220 s1.4"],
    ["They load them into a big truck. Haul, haul, haul!", "farm; tractor 140 s1.3 who:Mark; box 290 s2.4 #e5484d; beet 280 y145; beet 300 y145"],
    ["The truck takes the beets to the factory. They make sugar there.", "city; box 200 s2.4 #e5484d; beet 190 y145; beet 210 y145"],
    ["Emerson rides in the truck with Grandpa Mark. She waves out the window.", "out; van 200 s1.2 #4a6fa5 who:Mark,E go"],
    ["“How many beets did we haul?” asks Emerson. “A thousand!” says Grandpa.", "farm; Mark 140 big; E 250 wow hat:#e8c872"],
    ["They work until the sun goes down. Their boots are covered in dirt.", "sunset sun196; Mark 140; E 240 hat:#e8c872"],
    ["Grandma Becky has hot soup waiting. They eat in the kitchen.", "kitchen; Becky 120; Mark 200 nohat eat hold:bowl hc:#e8b46a hs:.5; E 290 eat hold:bowl hc:#e8b46a hs:.5"],
    ["Then Emerson has a sugar cookie for dessert.", "kitchen; E 200 eat hold:cookie big s1.2"],
    ["“This sugar came from our beets!” she says proudly.", "kitchen; spark; E 200 big up hold:cookie hs:.6 s1.2"]
  ], q: ["What does Grandpa Mark harvest in the fall?", "Where do the beets go to become sugar?", "What did Emerson eat for dessert?"] },

  "13-8": { t: "A Mouse in the House", cover: 6, pages: [
    ["One day, a tiny mouse sneaks into the house. Squeak!", "room; mouse 200 s2.4 y232"],
    ["It runs past Dexter. Dexter is asleep in the sun.", "room; dexter 140 sleep s1.6 y222; hops 300 y232; mouse 300 y232 s1.4"],
    ["It runs past Leo. Leo is asleep, too!", "room; leo 140 sleep s1.6 y222; mouse 300 y232 s1.4"],
    ["The mouse found a cookie crumb. It nibbled and nibbled.", "kitchen; cookie 200 y232; mouse 240 y232 s1.6"],
    ["Emerson spots the mouse. “A mouse! A mouse in the house!” she shouts.", "kitchen; E 140 point wow; mouse 300 y232 s1.4"],
    ["Dexter and Leo open one eye. Then they go back to sleep.", "room; dexter 140 sleep s1.6 y222; leo 260 sleep s1.6 y222; q 200 y80 t:Yawn"],
    ["“Some hunters you are!” laughs Olivia.", "room; O 200 big point; dexter 300 sleep s1.2 y222"],
    ["The girls put a box down with cheese inside. The mouse runs in!", "kitchen; box 200 s1.6; mouse 200 y178 s1.2; L 90 big; E 320 big"],
    ["They carry the box outside. They open it by the barn.", "farm; box 200 s1.6; L 110; E 300"],
    ["The mouse hops out. It waves its little tail. Bye, mouse!", "farm; hops 300 y232; mouse 300 y232 s1.6; E 140 wave big"],
    ["Back inside, the cats are still sleeping. They never even saw the mouse!", "room; dexter 140 sleep s1.6 y222; leo 260 sleep s1.6 y222; q 200 y80 t:Z_z #6b7bd6"]
  ], q: ["Why didn't Dexter and Leo catch the mouse?", "How did the girls catch the mouse?", "Where did they let the mouse go?"] },

  "13-9": { t: "Olivia's Crown", cover: 9, pages: [
    ["Olivia loves acting, just like Lauren. She tried out for the town play.", "stage; O 200 big"],
    ["She found out she will be the queen! She will wear a crown and a gown.", "stage; spark; O 200 up big crown"],
    ["Every day, she practiced her lines out loud. “Bow to the queen!”", "bedroom; O 200 point big crown"],
    ["Emerson bowed. Dexter yawned. Leo rolled over.", "bedroom; E 140 big; dexter 240 sleep; leo 310 s1.2"],
    ["Mom sewed a purple gown with gold trim.", "room; M 140; O 260 #9b6bff big crown"],
    ["On the night of the play, Olivia felt nervous. Her hands felt cold.", "stage; O 200 #9b6bff wow crown"],
    ["Lauren gave her a hug. “You will be great! Just have fun!”", "stage; heart 200 y60; L 150 hug; O 250 #9b6bff crown"],
    ["The curtain went up. Olivia walked out with her chin up high.", "stage; O 200 #9b6bff big crown s1.2"],
    ["“Bow to the queen!” she said in a loud voice. The crowd bowed and cheered!", "stage; spark; O 200 #9b6bff up big crown s1.2"],
    ["After the show, Emerson ran up with flowers. “You are my queen!”", "stage; O 150 #9b6bff big crown hold:flower hc:#ff6fae hs:.8; E 250 big"],
    ["Olivia put the crown on Emerson. Now there are two queens!", "stage; O 140 #9b6bff big; E 250 big crown"]
  ], q: ["What part did Olivia get in the play?", "Who helped Olivia feel less nervous?", "Who got to wear the crown at the end?"] },

  "13-10": { t: "Shout for the Lynx!", cover: 6, pages: [
    ["Olivia loves the Minnesota Lynx. They are her favorite basketball team!", "arena; O 200 #236192 up big"],
    ["Tonight, the family is going to a Lynx game. Olivia is so excited!", "city; O 160 #236192 big; E 250 big"],
    ["The arena is huge. There are thousands of people in the crowd.", "arena; D 80; M 140; L 200; O 260 #236192 big; E 320"],
    ["Olivia's favorite player is Courtney Williams. She points to the court.", "arena; O 200 #236192 point big"],
    ["The players run out. The crowd is shouting and cheering. So loud!", "arena; q 200 y100 t:GO_LYNX! #78be20"],
    ["Bounce, bounce, shoot! Swish! The Lynx score!", "arena; hoop 300; bball 300 y96; spark"],
    ["Emerson eats popcorn. She waves her foam hand.", "arena; E 200 eat hold:popcorn hs:.6 big"],
    ["At halftime, Olivia gets on the big screen! She waves and waves.", "arena; spark; O 200 #236192 wave big s1.3"],
    ["The game is close. The Lynx need one more point!", "arena; O 160 #236192 wow; E 260 wow; q 210 y90"],
    ["Swish! The Lynx win! The crowd is jumping. Olivia shouts, “Yes!”", "arena; spark; L 90 up big; O 170 #236192 hop big; E 250 hop big; D 330 up big"],
    ["On the way home, Olivia falls asleep in the van. She is dreaming about basketball.", "night; van 200 s1.2 who:D,M,L,O,E go; q 300 y70 t:Z_z #c9d3ff"]
  ], q: ["What is Olivia's favorite basketball team?", "Who is Olivia's favorite player?", "What did Emerson eat at the game?"] }
});
