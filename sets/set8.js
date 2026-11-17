/* SET 8 (TEAL): silent e words like cake, bike, home, cute */
Object.assign(BOOKS, {
  "8-1": { t: "Make a Cake", cover: 9, pages: [
    ["Mom and Emerson will bake a cake.", "kitchen; M 140; E 240 big"],
    ["Emerson gets the eggs. Crack, crack!", "kitchen; E 180 hold:egg hs:.8; egg 260 y142; bowl 300 y142 empty #fff s1.2"],
    ["Mom adds the sugar. Emerson stirs it. Stir, stir!", "kitchen; M 110; E 220 big; bowl 300 y142 empty #fff s1.2"],
    ["They put the cake in to bake. It takes time.", "kitchen; E 200 sit wow"],
    ["Emerson waits and waits. She can smell it!", "kitchen; E 200 wow s1.2; q 265 y90 t:~_~"],
    ["Ding! The cake is done. It is hot.", "kitchen; cake 200 y142 s2 #e8b46a; q 280 y80 t:Ding!"],
    ["They make pink icing. They spread it on.", "kitchen; cake 190 y142 s2 #ffd1e0; E 310 big"],
    ["Emerson adds sprinkles. It looks so fine!", "kitchen; spark; cake 200 y142 s2.2 #ffd1e0"],
    ["They take the cake to the table. Time to eat!", "kitchen; M 80; E 320 big; table 200 #ff8fb3; cake 200 y163 s1.4"],
    ["We all have a slice. It is the best cake!", "kitchen; spark; L 60; O 120; D 345; E 280 eat hold:cake hs:.4 big; table 200 #ff8fb3; cake 200 y163 s1.1"]
  ] },
  "8-2": { t: "Ride a Bike", cover: 3, pages: [
    ["Emerson has a new bike. It is pink and white.", "out; bike 190 s1.4 #ff6fae; E 320 big"],
    ["Dad helps her ride. He holds the back.", "out; bike 180 s1.4 #ff6fae who:E; D 300 point"],
    ["Ride, Emerson, ride! Dad lets go!", "out; D 70 up big; bike 230 s1.4 #ff6fae who:E go"],
    ["Emerson rides and rides. She rides with no help!", "out; spark; bike 200 s1.4 #ff6fae who:E go"],
    ["Then she slides to the side. Bump!", "out; E 140 sit sad; bike 270 s1.4 #ff6fae"],
    ["She has a scrape. Dad gives her a hug.", "out; heart 200 y70; D 160 hug; E 240 sad"],
    ["Emerson gets up. She will try one more time.", "out; E 160 big; bike 280 s1.4 #ff6fae"],
    ["She rides to the lake. What a nice ride!", "out; tree 60 s.8; bike 200 s1.4 #ff6fae who:E go; tree 350 s.8"],
    ["Lauren and Olivia ride, too. They ride side by side.", "out; bike 115 s1.2 #1fb5a3 who:L go; bike 290 s1.2 #9b6bff who:O go"],
    ["Emerson likes to ride! Bikes are fine fun!", "out; spark; bike 200 s1.4 #ff6fae who:E go"]
  ] },
  "8-3": { t: "The Kite", cover: 9, pages: [
    ["Grandpa Lon has a kite. It is blue and white.", "out; Lon 160 hold:kite hc:#3b82f6 hs:.6"],
    ["We take it up a hill. It is a windy time.", "out; kite 300 y60 #3b82f6; Lon 140; E 230"],
    ["Emerson holds the line. The wind takes the kite!", "out; kite 260 y60 #3b82f6; E 170 up wow"],
    ["Up, up, up! The kite rides the wind.", "out; kite 230 y50 s1.4 #3b82f6; E 130 up big"],
    ["It dives and glides. It is a fine kite!", "out; kite 260 y80 #3b82f6; E 150 up big"],
    ["Then, oh no! The kite is stuck in a tree.", "out; tree 250 s1.5; kite 262 y82 #3b82f6 s.8; E 110 sad"],
    ["Grandpa Lon is tall. He gets it down.", "out; tree 270 s1.5; Lon 200 up; kite 212 y92 #3b82f6 s.8"],
    ["Olivia and Lauren have kites, too. One is pink. One is lime.", "out; kite 140 y60 #ff6fae; kite 300 y50 #84cc16; O 80; L 240"],
    ["Three kites in the sky! What a sight!", "out; kite 100 y60 #ff6fae; kite 200 y40 #3b82f6; kite 300 y60 #84cc16; L 60 up; O 160 up; E 260 up big; Lon 345"],
    ["We will fly kites with Grandpa Lon next time!", "out; spark; kite 120 y60 #3b82f6; Lon 200 big; E 300 up big"]
  ] },
  "8-4": { t: "Grape Shapes", cover: 4, pages: [
    ["Lauren has grapes on a plate. They are green.", "kitchen; L 160; plate 270 y142 s1.4; grapes 270 y138 #8fd04f"],
    ["Olivia has grapes on a plate. They are purple.", "kitchen; O 160; plate 270 y142 s1.4; grapes 270 y138"],
    ["Emerson has a plate. Her plate has nine grapes.", "kitchen; E 160; plate 270 y142 s1.4; grapes 270 y138 #8fd04f"],
    ["She makes a shape with them. It is a smile!", "kitchen; plate 200 y215 s4.4; q 200 y198 t:◡ size:110 #6fbf4a"],
    ["Then she makes a face. Two eyes, a nose, and a smile!", "kitchen; plate 200 y215 s4.4; q 200 y200 t:•‿• size:80 #6fbf4a"],
    ["Dexter came to taste one. No, Dexter, no!", "kitchen; dexter 200 s1.6 y228; E 310 point wow"],
    ["Grapes are not safe for cats. Dexter gets a cat treat.", "kitchen; bowl 200 empty y232 #e5484d; dexter 150 s1.4"],
    ["Emerson takes a bite. The grapes are sweet!", "kitchen; E 200 eat hold:grapes hc:#8fd04f big"],
    ["Olivia makes a star. Lauren makes a kite shape.", "kitchen; plate 120 y215 s3; q 120 y200 t:★ size:60 #8e44ad; plate 280 y215 s3; q 280 y200 t:◆ size:60 #6fbf4a"],
    ["Then we ate the shapes. Yum! That was fine!", "kitchen; spark; L 100 eat hold:grapes hc:#8fd04f; O 200 eat hold:grapes; E 300 eat hold:grapes hc:#8fd04f big"]
  ] },
  "8-5": { t: "The Lake", cover: 3, pages: [
    ["We drive to the lake. It is a fine day.", "out; van 200 s1.2 who:D,M,L,O,E go"],
    ["The lake is wide. The sun shines on it.", "beach; sun 320 y50 face"],
    ["Emerson wades in. The waves lap at her toes.", "beach; E 200 wade big s1.2"],
    ["She dives under. She is brave!", "beach; E 200 up r160 y128; splash 230 y172"],
    ["Lauren and Olivia ride in a boat.", "beach; boat 200 y190 who:L,O"],
    ["Dad skips a stone. Skip, skip, skip!", "beach; D 120 y238 point; hops 340 y190"],
    ["Mom has a nap in the shade.", "beach; M 180 sit y238 mood:sleep; umbrella 250 y244 s2 #ffcf33"],
    ["Emerson finds a smooth stone. She will take it home.", "beach; E 200 y238 hold:rock hs:.4 big s1.2"],
    ["The sun sets. The lake shines pink.", "sunset sun180"],
    ["We drive home. What a nice time at the lake!", "sunset sun196; van 200 s1.2 who:D,M,L,O,E go"]
  ] },
  "8-6": { t: "Game Time", cover: 6, pages: [
    ["It is game time! Emerson has on her red shirt.", "out; E 180 #e5484d up big; sball 260 y215"],
    ["She runs on the field. She lines up.", "out; goal 330 s1.2; E 160 #e5484d"],
    ["The whistle blows. The game is on!", "out; E 160 run #e5484d; sball 225 y215; q 300 y80 t:Tweet!"],
    ["Emerson kicks the ball to the side. She makes a pass.", "out; E 160 kick #e5484d; sball 265 y185"],
    ["The ball comes back. Emerson takes the shot!", "out; goal 325 s1.2; E 180 kick #e5484d; sball 250 y180"],
    ["Goal! Emerson made a goal!", "out; spark; goal 300 s1.2; sball 300 y210; E 160 up big #e5484d"],
    ["Olivia and Lauren cheer on the side.", "out; O 120 up big; L 220 up big; flag 310 #e5484d"],
    ["At half time, Emerson has an orange slice.", "out; E 200 eat hold:orange #e5484d big"],
    ["The game ends. Emerson's team won, five to three!", "out; spark; E 200 up big #e5484d hold:trophy hs:.7"],
    ["Emerson hugs Dad. What a fine game!", "out; heart 200 y60; D 160 hug big; E 250 #e5484d big"]
  ] },
  "8-7": { t: "Jump Rope", cover: 4, pages: [
    ["Grandma Lynette has a rope. It is a jump rope.", "out; Lyn 160 big; rope 280 s1.2"],
    ["Emerson hopes she can jump it. She will try.", "out; E 200 wow s1.2"],
    ["Grandma and Lauren hold the rope. They swing it.", "out; Lyn 80 hold; L 320 hold flip; E 200 wow"],
    ["Emerson jumps in. One, two, three, four, five!", "out; E 200 hop l26 big s1.2; rope 200 s1.4"],
    ["Six, seven, eight, nine! Then she trips.", "out; E 200 sit sad"],
    ["She does not give up. She tries one more time.", "out; E 200 big s1.2"],
    ["Emerson jumps and jumps. She jumps a long time!", "out; spark; E 200 hop l30 big s1.2; rope 200 s1.4"],
    ["Olivia jumps in, too! Two girls in one rope!", "out; O 165 hop; E 240 hop big; rope 200 s1.9"],
    ["Grandma Lynette sings a jump rope rhyme.", "out; Lyn 200 big; q 265 y90 t:♪"],
    ["We like to jump rope at Grandma Camp! It is so fun!", "out; spark; Lyn 80 up big; L 150 up; O 220 hop; E 290 hop big; rope 290 s1.1"]
  ] },
  "8-8": { t: "Ice Cream Cones", cover: 10, pages: [
    ["It is hot. Dad has a plan. We will get ice cream!", "out; sun 330 y50 face; D 200 big point"],
    ["We ride bikes to the ice cream shop.", "out; bike 100 s1 #1fb5a3 who:L go; bike 210 s1 #9b6bff who:O go; bike 320 s1 #ff6fae who:E go"],
    ["There is a long line. We wait in line.", "out; sign 345 t:Ice_Cream; D 80; L 140; O 200; E 260 wow"],
    ["Emerson picks a cone with pink ice cream on top.", "out; E 200 hold:icecream hs:.8 big s1.2"],
    ["Olivia picks a cone with three scoops! It is so tall!", "out; O 200 hold:icecream hn:3 hs:.8 wow"],
    ["Lauren likes vanilla. Dad likes chocolate.", "out; L 140 hold:icecream hc:#fff3d6 hs:.8; D 260 hold:icecream hs:.8"],
    ["Drip, drip! The ice cream melts in the sun!", "out; sun 330 y50; E 200 eat hold:icecream wow"],
    ["Emerson licks it fast. Lick, lick, lick!", "out; E 200 eat hold:icecream big s1.2"],
    ["Oh no! It is on her nose!", "out; E 200 big s1.5; q 265 y90 t:!"],
    ["We all smile. Ice cream is so nice!", "out; spark; D 60 hold:icecream hs:.8; L 140 hold:icecream hs:.8; O 210 hold:icecream hn:3 hs:.8; E 290 hold:icecream hs:.8 big"]
  ] },
  "8-9": { t: "Home, Sweet Home", cover: 10, pages: [
    ["We are home. It is time to rest.", "room; D 70; M 140; L 210; O 270; E 330 big"],
    ["Dexter naps on the rug. He is so cute.", "room; mat 200 s2.6 #c76b6b; dexter 200 sleep s1.6 y212"],
    ["Leo hides in a box. He likes it there.", "room; leo 200 s1.3 y188; box 200 s2.2"],
    ["Lauren reads a book. She likes a quiet time.", "room; L 200 sit book bc:#1fb5a3"],
    ["Olivia plays a game with Dad. She wins!", "room; O 130 sit big; D 270 sit wow"],
    ["Emerson makes a picture of the whole family.", "room; E 280 big; table 180 #fff; paper 180 y163 s1.4"],
    ["Mom makes a nice supper. It smells fine!", "kitchen; M 160; pot 270 y142 hot s1.4"],
    ["We eat at the table. We smile and joke.", "room; D 60; M 130; L 200; O 270; E 340 big; table 200 #ffd1e0; pot 200 y163"],
    ["Then it is bedtime. We line up to brush.", "bath; L 110 hold:brush hs:.5; O 200 hold:brush hs:.5; E 290 hold:brush hs:.5"],
    ["Home is the best place to be.", "bedroom night; bed 200 #ff8fb3 who:L,O,E sleep; dexter 245 sleep y172; leo 295 sleep y172"]
  ] },
  "8-10": { t: "The Huge Pumpkin", cover: 5, pages: [
    ["Grandpa Lon has a pumpkin plant in his garden.", "garden; Lon 140; plant 270 s2.2 y228 fruit:#f08a24"],
    ["In June, it is a cute little pumpkin.", "garden; pumpkin 200 s.6 y228"],
    ["Grandpa Lon uses his can. He gives it a drink.", "garden; Lon 140 hold:can hs:.8; pumpkin 250 s.8 y228"],
    ["It gets bigger and bigger.", "garden; pumpkin 200 s1.6 y228"],
    ["By fall, it is huge! It is as big as Emerson!", "garden; pumpkin 150 s2.6 y230; E 290 wow"],
    ["Can we lift it? We all push. It will not move!", "garden; L 70 point; pumpkin 200 s2.6 y230; O 310 point; E 360 wow"],
    ["Grandpa Mark comes with his tractor. He tows it!", "garden; tractor 130 s1.2 who:Mark go; pumpkin 290 s2 y230"],
    ["We take it to the fair. It wins a prize!", "out; pumpkin 190 s2.6 y230; trophy 320 s1.4"],
    ["Grandpa Lon is so proud. He has a huge smile.", "out; Lon 180 big up; pumpkin 300 s1.6 y230"],
    ["What a huge, cute pumpkin! We will make pie!", "out; spark; L 70; pumpkin 200 s2.6 y230; E 340 big; pie 340 y150 s1"]
  ] }
});
