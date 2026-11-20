/* SET 16 (YELLOW STRIPES): plurals and -er, -est */
Object.assign(BOOKS, {
  "16-1": { t: "Big, Bigger, Biggest", cover: 5, pages: [
    ["At the zoo, there are three elephants. Emerson wants to see them all!", "out; sign 330 t:Zoo; E 200 big up"],
    ["The first elephant is big. It is the baby.", "out; elephant 200 s.9"],
    ["The second elephant is bigger. It is the big sister.", "out; elephant 200 s1.4"],
    ["The third elephant is the biggest of all. It is the mom!", "out; elephant 200 s2.2"],
    ["Here they are together. Big, bigger, and biggest!", "out; elephant 80 s.7; elephant 180 s1.1; elephant 310 s1.7"],
    ["“That is just like us!” says Emerson. “Lauren is the tallest.”", "out; L 150 big; O 210; E 260 big"],
    ["“Olivia is taller than me. And I am the smallest... for now!”", "out; L 120; O 200; E 280 up big"],
    ["The baby elephant splashes in the mud. It is the messiest elephant.", "out; mud 200 s2.4 y230; elephant 200 s1 y224; splash 230 y190"],
    ["The mom elephant has the longest trunk. She sprays the cleanest water.", "out; elephant 140 s1.8; splash 290 y130 s2"],
    ["Emerson buys the smallest elephant toy at the shop. It fits in her pocket!", "out; E 200 hold:elephant hs:.2 big s1.2"],
    ["It was the greatest day at the zoo. Emerson had the biggest smile!", "out; spark; elephant 120 s1.2; E 260 big up s1.2"]
  ], q: ["Which elephant was the biggest?", "Which sister is the tallest?", "Which elephant toy did Emerson buy?"] },

  "16-2": { t: "The Sleepiest Cat", cover: 9, pages: [
    ["Dexter and Leo love naps. But which cat is the sleepiest?", "room; dexter 140 sleep s1.6 y222; leo 260 sleep s1.6 y222; q 200 y80"],
    ["Emerson has a plan. She will count their naps.", "room; E 200 book big s1.2"],
    ["At 8 o'clock, Dexter naps on the rug. Leo naps on the chair.", "room; mat 140 s2 #c76b6b; dexter 140 sleep s1.3 y212; box 280 s1.4 #9b6bff; leo 280 sleep s1.1 y173"],
    ["At 10, Dexter naps in the sun. Leo naps in a box. They are getting sleepier!", "room; dexter 140 sleep s1.4; box 280 s1.8; leo 280 sleep s1.1 y188"],
    ["At noon, they nap in the laundry basket. It is warmer there.", "room; basket 200 s3; dexter 185 sleep y170; leo 215 sleep y170"],
    ["Dexter has five naps. Leo has five naps. It is a tie!", "room; q 200 y90 t:5_=_5; dexter 140 s1.4; leo 260 s1.4"],
    ["Then Dexter wakes up. He chases his tail. He is the silliest cat!", "room; dexter 200 hop s1.8; hops 200 y214"],
    ["Leo is still sleeping. He has the longest nap of all.", "room; leo 200 sleep s2 y220; q 300 y80 t:Z_z_z #6b7bd6"],
    ["So Leo is the sleepiest cat! Emerson gives him a ribbon.", "room; spark; leo 200 s1.8; medal 270 y150"],
    ["Dexter gets a ribbon, too. He is the funniest cat!", "room; dexter 200 s1.8 big; medal 270 y150"],
    ["Both cats are the best cats. They are the cuddliest, too!", "room; heart 200 y60; E 200 hug big; dexter 150 s1.2 y214; leo 250 s1.2 y214"]
  ], q: ["How many naps did each cat take?", "Which cat was the sleepiest?", "Which cat was the funniest?"] },

  "16-3": { t: "Lots of Lollipops", cover: 7, pages: [
    ["Emerson has one lollipop. It is pink.", "room; E 200 hold:lolli hs:.7 big"],
    ["Grandma Becky gives her two more lollipops. Now she has three lollipops!", "room; Becky 140; E 250 big; lolli 300 y232 #e5484d; lolli 330 y232 #2eb67d"],
    ["At school, Avery gives her two cherries. Crickett gives her three grapes.", "school; Avery 100 hold:cherry hs:.6; Crickett 200 hold:grapes hs:.6; E 300 big"],
    ["She has a lot of treats! She puts them in boxes.", "room; box 150 s1.4; box 250 s1.4 #ff8fb3; E 330 big"],
    ["Then she has an idea. She will share them!", "room; E 200 wow s1.2; q 260 y90 t:!"],
    ["She gives lollipops to her sisters. Lauren and Olivia say thank you.", "room; L 110 hold:lolli hc:#e5484d hs:.6 big; E 200 big; O 290 hold:lolli hc:#2eb67d hs:.6 big"],
    ["She gives cherries to Mom and Dad. They smile.", "kitchen; M 120 hold:cherry hs:.6 big; D 200 hold:cherry hs:.6 big; E 290 big"],
    ["She gives grapes to the cousins. Ollie eats them all at once!", "room; Ramsey 120 hold:grapes hs:.6; Ollie 220 s1.3 eat big; Summer 300 s1.3"],
    ["Now Emerson has no treats left. Is she sad?", "room; E 200 wow s1.2; q 260 y90"],
    ["No! Sharing made her happiest of all.", "room; spark; E 200 up big s1.3"],
    ["Then Mom gives her a new lollipop. “For the kindest girl,” she says.", "room; heart 200 y60; M 140 big; E 250 hold:lolli hs:.7 big"]
  ], q: ["How many lollipops did Emerson have after Grandma Becky's gift?", "Who did Emerson share with?", "How did sharing make Emerson feel?"] },

  "16-4": { t: "Grandpa Mark's Fields", cover: 9, pages: [
    ["Grandpa Mark has many fields. Each field has a different crop.", "farm; Mark 200 wave"],
    ["The first field has rows of soybeans. The plants are green and bushy.", "farm; soy 60 y236; soy 130 y236; soy 200 y236; soy 270 y236; soy 340 y236"],
    ["The second field has black beans. The bean pods are long and thin.", "farm; soy 80 y236 s1.2; beans 160 y232; soy 240 y236 s1.2; beans 320 y232"],
    ["The third field has wheat. It is the tallest crop. It turns gold in summer.", "farm; wheat 60 y236 s1.6; wheat 120 y236 s1.6; wheat 180 y236 s1.6; wheat 240 y236 s1.6; wheat 300 y236 s1.6; wheat 360 y236 s1.6"],
    ["The fourth field has sugar beets. They are the heaviest crop. They grow under the ground.", "farm; beet 100 y236 s1.4; beet 200 y236 s1.4; beet 300 y236 s1.4"],
    ["Grandpa Mark has tractors, trucks, and wagons to help him.", "farm; tractor 130 s1.2; wagon 280 s1.6"],
    ["He works from the earliest morning to the latest night.", "sunset sun196; Mark 200"],
    ["Emerson thinks the wheat field is the prettiest. It sways like waves.", "farm; wheat 80 y236 s1.4; E 200 big hat:#e8c872; wheat 320 y236 s1.4"],
    ["She thinks the sugar beets are the sweetest. They make sugar!", "farm; E 200 hold:beet hs:.6 big hat:#e8c872"],
    ["Grandpa Mark says, “Farmers are the hardest workers. And the happiest!”", "farm; Mark 160 big; E 250 big hat:#e8c872"],
    ["Emerson wants to have the biggest farm when she grows up. With elephants, of course!", "farm; spark; elephant 300 s1; barn 140 s.8; E 230 big up hat:#e8c872"]
  ], q: ["Name the four crops in Grandpa Mark's fields.", "Which crop grows under the ground?", "What would Emerson add to her farm?"] },

  "16-5": { t: "The Coldest Day", cover: 6, pages: [
    ["It is January in Minnesota. Today is the coldest day of the year!", "snow; snowfall"],
    ["It is colder than the freezer. It is colder than a snowman's nose!", "snow; snowman 200 s1.4; q 290 y80 t:Brrr! #3b82f6"],
    ["The girls put on their warmest coats, mittens, and hats.", "snow; L 110 hat:#3b82f6; O 200 hat:#9b6bff; E 290 hat:#ff6fae big"],
    ["Their breath makes little clouds. Puff, puff!", "snow; cloud 140 y110 s.4; E 200 hat:#ff6fae big; cloud 250 y110 s.4"],
    ["Dad blows bubbles outside. They freeze into ice balls!", "snow; D 160 big; ball 250 y150 #e6f3ff s.6; ball 280 y120 #e6f3ff s.5"],
    ["Even the snowflakes look bigger and fluffier today.", "snow; snowfall; star 120 y80 #fff; star 280 y60 #fff"],
    ["Dexter and Leo stay on the warmest blanket by the heater.", "room; mat 200 s2.6 #ff6fae; dexter 160 sleep s1.4 y212; leo 240 sleep s1.4 y212"],
    ["Mom makes the hottest soup. It warms everyone up.", "kitchen; M 140; pot 260 y142 s1.6 hot"],
    ["The girls build the coziest fort in the living room.", "room; tent 200 s1.8 #ff8fb3; lamp 300 y232"],
    ["They dream about the warmest place they know. Florida!", "beach; palm 70; sun 330 y50 face; E 200 y238 big up"],
    ["“Only four more weeks until we go,” says Mom. The girls cheer!", "room; heart 200 y60; M 120 big; L 200 up big; E 290 up big"]
  ], q: ["What month is it in the story?", "What happened to Dad's bubbles?", "What warm place do they dream about?"] },

  "16-6": { t: "Shells and Starfish", cover: 6, pages: [
    ["In Florida, the beach has the softest sand and the warmest water.", "beach; palm 60; sun 330 y50 face"],
    ["The girls fill their buckets with shells. Pink shells, white shells, and striped shells!", "beach; pail 140 y242 s1.4; shell 200 y240 s1.4; shell 240 y240 s1.4 #fff; shell 280 y240 s1.4 #ffcf33"],
    ["Lauren finds the largest shell. Olivia finds the smallest shell.", "beach; L 120 y238 hold:shell hs:1.2; O 270 y238 hold:shell hs:.4"],
    ["Emerson finds two starfish. They are orange and bumpy.", "beach; starfish 160 y240 s1.4; starfish 240 y240 s1.4; E 330 y238 big"],
    ["She puts them back in the water gently. Starfish need the sea.", "beach; E 200 wade big; starfish 230 y180"],
    ["Then they see dolphins! Two, three, four dolphins jumping in the waves.", "beach; dolphin 120 y180; dolphin 220 y170 s1.2; dolphin 320 y185 s.9"],
    ["“Those are the happiest fish!” says Emerson. Lauren laughs. “Dolphins aren't fish!”", "beach; L 140 big y238; E 250 big y238; dolphin 340 y180 s.8"],
    ["The pelicans dive for fish. Splash!", "beach; bird 200 y110 s2 #cfcfcf; splash 280 y180"],
    ["They build sandcastles with towers and moats.", "beach; castle 150 s1.6 y240; castle 260 s1.2 y240; O 340 y238 big"],
    ["At sunset, the sky turns pink and orange. It is the prettiest sky.", "sunset sun180; palm 60"],
    ["“Florida has the best beaches,” says Emerson. “But Minnesota has the best snow!”", "beach; heart 200 y60; L 110 y238; O 200 y238; E 290 y238 big"]
  ], q: ["Who found the largest shell?", "What did Emerson do with the starfish?", "Are dolphins fish?"] },

  "16-7": { t: "The Loudest Cousin", cover: 9, pages: [
    ["The cousins are visiting. The house is getting louder and louder!", "room; Ramsey 100; Summer 170 s1.2; Ollie 230 s1.2; E 310 big"],
    ["Ramsey sings a song. She is loud.", "room; Ramsey 200 big; q 270 y80 t:♪"],
    ["Summer bangs on a pot. She is louder!", "room; Summer 180 s1.4 big; pot 260 y232 s1.2; q 260 y90 t:Bang!"],
    ["Ollie roars like a lion. He is the loudest! ROAR!", "room; Ollie 200 s1.6 big; q 280 y80 t:ROAR!"],
    ["Dexter and Leo run and hide under the bed. Too loud!", "bedroom; bed 200; dexter 130 hop s1.2; leo 280 hop s1.2"],
    ["Mom says, “Let's play the quietest game. Who can be the quietest?”", "room; M 200 point big"],
    ["Everyone tiptoes. Shh! Nobody makes a peep.", "room; Ramsey 90; Summer 160 s1.2; Ollie 230 s1.2; E 310; q 200 y70 t:Shh!"],
    ["Then Ollie sneezes. Ah-choo! It is the loudest sneeze ever!", "room; Ollie 200 s1.6 wow; q 270 y80 t:AH-CHOO!"],
    ["Everyone laughs, even Mom. The cats peek out.", "room; Ramsey 110 big; E 200 big; Summer 270 s1.2 big; dexter 340 s1.2"],
    ["Then they all sing together. It is a loud, happy song.", "room; spark; Ramsey 90 up big; Summer 160 s1.2 up big; Ollie 230 s1.2 up big; E 310 up big; q 200 y60 t:♪_♪"],
    ["The house is the noisiest house on the street. And the happiest!", "room; heart 200 y60; Ramsey 100; Summer 170 s1.2; Ollie 230 s1.2; E 310 big"]
  ], q: ["Who was the loudest cousin?", "What game did Mom suggest?", "What happened when Ollie sneezed?"] },

  "16-8": { t: "Dresses and Dishes", cover: 4, pages: [
    ["The sisters want to play dolls. They get out all their dolls and dresses.", "bedroom; doll 100 y232 #e5484d h:#f7d35f; doll 160 y232 #fff h:#333; doll 220 y232 #9b6bff h:#c0582f; doll 280 y232 #2eb67d h:#8b5a2b; doll 340 y232 #ffcf33 h:#f7d35f"],
    ["Lauren picks the fanciest dress. It is purple with sparkles.", "bedroom; L 200 hold:doll hc:#9b6bff hh:#c0582f hs:.9 big"],
    ["Olivia picks the sportiest outfit. Her doll will play basketball!", "bedroom; O 200 hold:doll hc:#236192 hh:#333 hs:.9; bball 270 y232 s.6"],
    ["Emerson picks the pinkest dress. And black shoes. And a white hat.", "bedroom; E 200 hold:doll hc:#ff6fae hh:#f7d35f hs:.9 big"],
    ["They set the table with tiny dishes, cups, and spoons.", "bedroom; table 200 s.7 #ff8fb3; teacup 170 y178 s.6; teacup 230 y178 s.6; teapot 200 y178 s.5"],
    ["The dolls have tea and the tiniest cupcakes.", "bedroom; table 200 s.7 #ff8fb3; cupcake 200 y178 s.4; doll 130 y232 #ff6fae h:#f7d35f; doll 270 y232 #9b6bff h:#c0582f"],
    ["Then the dolls go dancing. They twirl in their dresses.", "bedroom; q 200 y60 t:♪; doll 130 y200 s1.4 #ff6fae h:#f7d35f; doll 200 y190 s1.4 #9b6bff h:#c0582f; doll 270 y200 s1.4 #236192 h:#333"],
    ["Dexter steals a doll's hat. He runs away with it!", "bedroom; hops 300 y232; dexter 300 hop s1.2; hat 300 y180 s.4 #fff"],
    ["The sisters chase Dexter around the house. Faster, faster!", "room; L 80 run; O 160 run; E 240 run big; dexter 330 hop"],
    ["Finally, Dexter drops the hat. He wants a pet instead.", "room; E 200 sit hug big; dexter 260 s1.3; hat 150 y232 s.4 #fff"],
    ["Playing with sisters is the best. Even with a sneaky cat!", "bedroom; heart 200 y60; L 110 hold:doll hc:#9b6bff hh:#c0582f hs:.8; O 200 hold:doll hc:#236192 hh:#333 hs:.8; E 290 hold:doll hc:#ff6fae hh:#f7d35f hs:.8 big"]
  ], q: ["What color dress did Emerson pick for her doll?", "What did Dexter steal?", "What do you like to play with your family?"] },

  "16-9": { t: "Lauren's Birthday", cover: 7, pages: [
    ["Today is Lauren's birthday. She is turning twelve!", "party; spark; L 200 up big"],
    ["Mom bakes the tallest cake ever. It has three layers!", "kitchen; M 140; cake 260 y142 s1.4; cake 260 y100 s1.1; cake 260 y67 s.8"],
    ["The frosting is the sweetest. It is pink and purple.", "kitchen; cake 200 y142 s2.4 #d9c6ff"],
    ["Lauren's friends come over. They sing and dance.", "party; L 200 up big; q 280 y80 t:♪; Avery 100; Ramsey 310"],
    ["Olivia and Emerson put on a play for Lauren. It is the funniest play ever!", "stage; O 140 crown big; E 260 ears big"],
    ["Then it is time for the cake. Twelve candles glow.", "party; table 200 #ff8fb3; cake 200 y163 n:12"],
    ["Lauren makes a wish. She blows out the candles. Whoosh!", "party; L 200 wow; table 200 #ff8fb3; cake 200 y163"],
    ["She opens her presents. The biggest one is a new volleyball!", "party; L 200 hold:vball hs:.8 big; gift 300 y232 s1.2"],
    ["Emerson gives her a drawing. It shows the three sisters holding hands.", "party; L 150 big; paper 240 y180 s1.6; E 300 big"],
    ["Lauren says, “This is my favorite present!” She hugs Emerson.", "party; heart 200 y60; L 160 hug big; E 250 big"],
    ["Happy birthday, Lauren! You are the greatest big sister!", "party; spark; L 120 up big; O 200 up big; E 280 up big"]
  ], q: ["How old is Lauren turning?", "What was the biggest present?", "What did Emerson give Lauren?"] },

  "16-10": { t: "Sweeter and Sweeter", cover: 9, pages: [
    ["Emerson loves sweets. Jello is sweet. Lollipops are sweeter.", "kitchen; jello 150 y142 s1.4; lolli 260 y142 s1.4"],
    ["But what is the sweetest thing of all? She wants to find out.", "kitchen; E 200 wow s1.2; q 260 y90"],
    ["She tastes a strawberry. It is sweet.", "kitchen; E 200 eat hold:berry hs:.7 big"],
    ["She tastes a peach. It is sweeter.", "kitchen; E 200 eat hold:peach hs:.7 big"],
    ["She tastes a cupcake with sprinkles. It is even sweeter!", "kitchen; E 200 eat hold:cupcake hs:.7 big"],
    ["She tastes a sugar cookie made with Grandpa Mark's beets. Super sweet!", "kitchen; E 200 eat hold:cookie hs:.7 big"],
    ["Now her tummy feels funny. Too many sweets!", "kitchen; E 200 sad s1.2"],
    ["Mom gives her a big hug. “Maybe the sweetest thing isn't food,” she says.", "kitchen; heart 200 y60; M 160 hug big; E 250 sad"],
    ["Then Dexter and Leo cuddle on her lap. Lauren and Olivia snuggle close.", "room; E 200 sit big; dexter 150 s1.1 y220; leo 250 s1.1 y220; L 100; O 300"],
    ["Emerson smiles. “I know! The sweetest thing is my family!”", "room; heart 200 y60; spark; D 60; M 120; L 180; O 240; E 300 big"],
    ["And maybe one more cookie... tomorrow!", "kitchen; E 200 big s1.2; cookie 270 y142 s1.4"]
  ], q: ["Which sweet did Emerson taste first?", "Why did her tummy feel funny?", "What did Emerson decide was the sweetest thing?"] }
});
