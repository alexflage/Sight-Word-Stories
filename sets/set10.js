/* SET 10 (RAINBOW): bossy r (car, bird, corn, her) and longer stories */
Object.assign(BOOKS, {
  "10-1": { t: "A Day on the Farm", cover: 5, pages: [
    ["Grandpa Mark is a farmer. He starts work early in the morning, before the sun is up.", "sunset sun196; barn 300 s.8; Mark 140"],
    ["Emerson wants to be a farmer, too. She puts on her boots and a straw hat.", "farm; E 200 hat:#e8c872 big s1.2"],
    ["First, they feed the cows in the barn. The cows munch hay and say moo.", "farm; cow 130 s1.2; hay 270 s1.2; E 340 hat:#e8c872"],
    ["Next, they check the corn. The corn is tall, with yellow ears.", "farm; stalk 90; stalk 150; stalk 210; E 300 hat:#e8c872 hold:corn hs:.8"],
    ["Grandpa Mark drives the tractor to the far field. Emerson rides with him.", "farm; tractor 200 s1.5 who:Mark,E go"],
    ["They pick a cart full of corn. It is hard work, but it is fun!", "farm; Mark 80; box 200 s2 #d9a066; corn 180 y150; corn 200 y148; corn 220 y150; E 320 hat:#e8c872 big"],
    ["At lunch, Grandma Becky has a picnic for the farmers.", "farm; mat 200 s3.6 #e5484d; Becky 90 sit; Mark 165 sit; E 245 sit hat:#e8c872; sandwich 310 y230; corn 340 y230"],
    ["In the afternoon, the pigs roll in the dirt. They snort and grunt.", "farm; mud 200 s2.2 y230; pig 150 s1.4; pig 260 s1.4 flip"],
    ["As the sun sets, Grandpa Mark and Emerson sit on the porch. The first stars come out.", "sunset sun196; Mark 140 sit; E 240 sit hat:#e8c872 big"],
    ["Emerson yawns. “Farming is hard work,” she says. “But I love the farm!”", "night; barn 200 s1; Mark 90 big; E 310 hat:#e8c872 big"]
  ] },
  "10-2": { t: "Grandpa Lon's Garden", cover: 6, pages: [
    ["Grandpa Lon is a gardener. His garden is full of color.", "garden; flower 60; flower 100 #ffcf33; Lon 200 wave; flower 300 #9b6bff; flower 340"],
    ["Each spring, he turns the dirt with his shovel. Then he plants rows of seeds.", "garden; Lon 200 hold:shovel hs:.7"],
    ["Emerson helps him. She makes holes and drops in seeds, one by one.", "garden; E 200 sit; sprout 280 y228"],
    ["Lauren and Olivia water the garden. Drip, drip, drip! Grow, garden, grow!", "garden; L 120 hold:can hs:.8; O 280 hold:can hs:.8"],
    ["By summer, the garden is bursting. There are red tomatoes and green peas.", "garden; plant 110 s2.4 y228 fruit:#ef3e36; plant 220 s2.4 y228 fruit:#6fbf4a; flower 320 s1.6 #ffcf33"],
    ["Emerson pulls up a carrot. It is long and orange, with dirt on the end!", "garden; E 200 up hold:carrot hs:.9 big s1.2"],
    ["Olivia picks corn. Lauren picks herbs. Grandpa Lon picks flowers.", "garden; O 100 hold:corn hs:.8; L 200 hold:plant hs:.4; Lon 310 hold:flower hc:#ff5d8f hs:.8"],
    ["They sort it all into baskets. What a harvest!", "garden; bowl 120 y228 #c9965a s1.3; bowl 200 y228 #c9965a s1.3; bowl 280 y228 #c9965a s1.3"],
    ["Grandpa Lon makes a garden salad for the family. It is crunchy and fresh.", "kitchen; Lon 140 nohat big; bowl 270 y142 s1.4 #2eb67d"],
    ["Emerson says, “I will be a gardener, just like you!” Grandpa Lon gives her a hug.", "garden; spark; heart 200 y60; Lon 160 hug big; E 250 big"]
  ] },
  "10-3": { t: "Story Hour", cover: 8, pages: [
    ["Every week, Grandma Becky has story hour at the library. Kids come from all over town.", "library; Becky 200 book big bc:#2eb67d"],
    ["Today Emerson gets to help! She sits on a chair next to Grandma Becky.", "library; Becky 140 sit book bc:#2eb67d; E 260 sit big"],
    ["Grandma Becky reads the first story. It is about a turtle who wants to fly.", "library; Becky 200 sit book bc:#2eb67d; q 280 y80 t:?"],
    ["The kids laugh and laugh. The turtle tries and tries, but it can not fly!", "library; Becky 200 sit book big bc:#2eb67d; q 290 y80 t:Ha_ha!"],
    ["Then it is Emerson's turn. She opens her book. Her heart thumps.", "library; E 200 sit book wow s1.2"],
    ["She reads the words slowly. “The bird is red. The bird can sing.”", "out; bird 200 s3.4 y205 #e5484d; q 275 y90 t:♪"],
    ["She turns the page. She reads more and more. The kids sit still and listen.", "library; E 200 sit book big s1.2"],
    ["At the end, everyone claps and cheers for Emerson!", "library; spark; Becky 100 up big; E 220 up big s1.2"],
    ["Grandma Becky gives her a bookmark with a star on it. “You are a super reader!”", "library; Becky 140 big; E 250 hold:star hs:.6 big"],
    ["Emerson grins. She wants to read at story hour every week!", "library; spark; E 200 book big bc:#e5484d s1.3"]
  ] },
  "10-4": { t: "The Big Game", cover: 8, pages: [
    ["Olivia's basketball team is in the big game. If they win, they are the champs!", "court; O 200 #e5484d hold:bball hs:.8 s1.2"],
    ["The whole family comes to watch. All four grandparents are here!", "court; Mark 60 nohat; Becky 125; Lon 190 nohat; Lyn 255; E 320 big"],
    ["Emerson and Lauren made a sign. It says GO OLIVIA!", "court; L 90 big; sign 200 t:GO_OLIVIA!; E 310 up big"],
    ["The game starts. The other team is fast. They score first.", "court; O 200 #e5484d run wow"],
    ["Olivia does not give up. She dribbles down the court and shoots. Score!", "court; hoop 300; bball 300 y96; O 160 up big #e5484d"],
    ["At halftime, the score is tied. Olivia takes a drink. She is nervous.", "court; O 200 #e5484d hold:drink hc:#4fb3e8 hs:.8 wow"],
    ["In the last seconds, Olivia gets the ball. The crowd roars!", "court; hoop 320; O 180 up #e5484d hold:bball hs:.8"],
    ["She jumps and shoots. Swish! The buzzer sounds. They win!", "court; spark; hoop 300; bball 300 y96; O 160 up big #e5484d"],
    ["Her team lifts Olivia up. She holds the trophy high!", "court; spark; O 200 up big #e5484d hold:trophy hs:.7 s1.2"],
    ["That night, Emerson tells Olivia, “You are my hero!” Olivia hugs her little sister.", "bedroom night; heart 200 y60; O 160 hug big; E 250 big"]
  ] },
  "10-5": { t: "Star of the Floor", cover: 7, pages: [
    ["Emerson has her first gym meet! She wears a sparkly purple leotard.", "gym; E 200 #9b6bff up big s1.2"],
    ["Her tummy has butterflies. Mom gives her a squeeze. “You can do it!”", "gym; M 140 hug; E 240 #9b6bff wow"],
    ["First is the floor. Emerson runs, jumps, and does a cartwheel!", "gym; mat 200 s3.6 #ff6fae; E 200 up r90 s1.2 y175 #9b6bff big"],
    ["Then she does a handstand. Her toes point up to the ceiling.", "gym; mat 200 s3.6 #ff6fae; E 200 up r180 s1.2 y230 #9b6bff"],
    ["Next is the beam. Emerson takes a deep breath and climbs on.", "gym; beam 200 s1.4; E 200 #9b6bff wow y153"],
    ["She turns and twirls. She does not wobble one bit!", "gym; beam 200 s1.4; E 200 up #9b6bff big y153"],
    ["Last, she jumps and lands with her arms up high. Perfect!", "gym; spark; E 200 up big #9b6bff s1.2"],
    ["Her family cheers from the stands. The grandparents cheer, too!", "gym; D 45 up big; M 105 up big; L 165 up big; O 225 up big; Lyn 290 up big; Lon 355 up big nohat"],
    ["The judge gives Emerson a gold medal. She is the star of the floor!", "gym; spark; E 180 up big #9b6bff hold:medal hs:.8; star 300 y60 s1.4"],
    ["Emerson hangs her medal by her bed. She dreams of her next meet.", "bedroom night; bed 200 #ff8fb3 who:E sleep; medal 330 y120 s1.4"]
  ] },
  "10-6": { t: "Three Sisters", cover: 10, pages: [
    ["Lauren is eleven. Olivia is nine. Emerson is almost six. They are sisters.", "out; L 110; O 200; E 290 big"],
    ["Lauren is the oldest. She is smart and kind. She helps her sisters with their homework.", "room; L 130 point; E 260 sit book; table 210 s.8 #fff"],
    ["Olivia is in the middle. She is fast and strong. She loves basketball more than anything.", "court; hoop 320; O 190 hold:bball hs:.8 big"],
    ["Emerson is the youngest. She is brave and funny. She can flip and kick and swim!", "gym; mat 200 s3 #ff6fae; E 200 up r90 s1.2 y175 big"],
    ["Sometimes the sisters argue. “That is my doll!” “No, it is mine!”", "bedroom; O 140 sad hold:doll hc:#9b6bff hh:#333 hs:.8; E 250 sad point"],
    ["But they always make up. They say sorry and give hugs.", "bedroom; heart 195 y70; O 150 hug; E 240 hug big"],
    ["Together they play dolls, bake treats, and dance in the kitchen.", "kitchen; L 110 up big; O 200 hop big; E 290 up big; q 200 y60 t:♪"],
    ["Together they go to Grandma Camp, the farm, the garden, and the library.", "out; L 90; O 160; E 230 big; sign 330 t:Grandma_Camp"],
    ["At night, they whisper in the dark and giggle until Mom says, “Go to sleep!”", "bedroom night; bed 190 #ff8fb3 who:L,O,E big; M 345 point"],
    ["Three blond sisters. Three best friends. Forever and always.", "out; spark; heart 200 y50; L 110 hug big; O 200 up big; E 290 hug big"]
  ] },
  "10-7": { t: "Storm Night", cover: 6, pages: [
    ["One night, a storm rolls in. The sky turns dark. The wind roars.", "rain"],
    ["Boom! Thunder! Emerson jumps. Dexter and Leo hide under the bed.", "bedroom night; bed 200 #ff8fb3; dexter 110 s1.2 y232 grumpy; leo 300 s1.2 y232 grumpy; q 200 y60 t:BOOM! #e0a800"],
    ["Then the lights go out! It is very dark. Emerson is scared.", "night; E 200 wow s1.2; q 265 y90 t:!"],
    ["Lauren gets a flashlight. Click! “Do not worry,” she says.", "bedroom night; L 160 hold:lamp hs:.7; E 260 wow"],
    ["Olivia has an idea. “Let's make a fort!”", "bedroom night; O 200 point big; lamp 310 y232"],
    ["They drape blankets over chairs and stuff it with pillows. It is a cozy fort!", "bedroom night; tent 200 s1.8 #ff8fb3; lamp 310 y232"],
    ["In the fort, Lauren tells a story. Olivia hums a tune. Emerson starts to smile.", "bedroom night; tent 200 s1.8 #ff8fb3; q 300 y80 t:♪"],
    ["Mom and Dad crawl in, too. Dexter and Leo curl up on their laps.", "bedroom night; M 90 sit; dexter 160 sleep y222; lamp 200 y232; leo 240 sleep y222; D 310 sit"],
    ["The storm rumbles far away. The family is warm and snug together.", "bedroom night; tent 200 s1.8 #ff8fb3; q 200 y80 t:Z_z_z #c9d3ff"],
    ["In the morning, the sun is out. Emerson is not scared of storms anymore!", "out; rainbow 200 y200; sun 320 y55 face; E 200 up big s1.2"]
  ] },
  "10-8": { t: "Supper with Everyone", cover: 6, pages: [
    ["On Sunday, the whole family comes for a big supper. There are more people than chairs!", "room; Mark 45 nohat; Becky 105; Lon 165 nohat; Lyn 225; M 290; D 350"],
    ["Grandpa Mark brings corn from his farm. Grandpa Lon brings a salad from his garden.", "kitchen; Mark 120 hold:corn hs:.8 nohat; Lon 270 hold:bowl hc:#2eb67d hs:.6 nohat"],
    ["Grandma Becky brings books for after supper. Grandma Lynette brings a cherry pie.", "kitchen; Becky 120 hold:books hs:.6; Lyn 270 hold:pie hs:.6"],
    ["Mom and Dad cook burgers outside. They smell so good!", "out; M 140; D 260 hold:pan hs:.7; q 300 y90 t:~_~"],
    ["The girls set the table. Lauren sets the forks. Olivia sets the cups. Emerson sets the napkins.", "kitchen; L 70; E 330 big; table 200 #ffd1e0; plate 160 y163; plate 240 y163"],
    ["Before we eat, we hold hands. We say what we are thankful for.", "room; Mark 45 nohat; Becky 100; L 155; O 210; E 265 big; Lyn 320; Lon 372 nohat; table 205 #ffd1e0 s1.7"],
    ["Emerson says, “I am thankful for my family, my cats, and books!”", "room; dexter 120 s1.2; E 200 big up s1.2; leo 280 s1.2; books 340 s1.2"],
    ["We pass the corn and pass the salad. Everyone takes more and more.", "room; O 120; E 280 eat big; table 200 #ffd1e0 s1.6; corn 150 y132 s.8; bowl 200 y132 #2eb67d; pie 250 y132"],
    ["Then Grandma Lynette cuts the cherry pie. Everyone wants a big slice.", "room; Lyn 130 big; table 230 #ffd1e0; pie 230 y163 s1.4"],
    ["After supper, we sit on the porch. Grandma Becky reads, and the sun sets. What a perfect night.", "sunset sun196; Becky 110 sit book bc:#2eb67d; L 180 sit; O 245 sit; E 310 sit big"]
  ] },
  "10-9": { t: "Swim Star", cover: 7, pages: [
    ["Emerson loves to swim. This summer, she will swim in her first race!", "pool; E 200 y232 big hat:#ff6fae s1.2"],
    ["She practices every morning. She kicks her legs and swirls her arms.", "pool; E 200 wade up hat:#ff6fae; splash 160 y172; splash 240 y172"],
    ["On race day, there are lots of swimmers. Emerson's heart thumps hard.", "pool; E 200 y232 wow hat:#ff6fae s1.2"],
    ["On your mark, get set, GO! Emerson dives in!", "pool; E 200 up r160 y126 hat:#ff6fae; splash 235 y172"],
    ["She swims as fast as she can. Kick, kick, stroke, stroke!", "pool; E 200 wade r-90 y212 hat:#ff6fae; splash 270 y172; splash 300 y174"],
    ["Her family cheers from the side. “Go, Emerson, go!”", "pool; M 70 y242 up big; D 140 y242 up big; L 260 y242 up big; O 330 y242 up big"],
    ["She touches the wall. She is first! She won her very first race!", "pool; spark; E 200 wade up big hat:#ff6fae"],
    ["Emerson gets a blue ribbon. She wears it with a big smile.", "pool; E 200 y232 big hold:medal hs:.8 hat:#ff6fae s1.2"],
    ["That night, she sleeps with her ribbon next to her pillow.", "bedroom night; bed 200 #ff8fb3 who:E sleep; medal 330 y120 s1.4"],
    ["Emerson dreams of her next race. She is a swim star!", "night; star 200 y80 s1.6; spark; fish 120 y200; fish 290 y190 #4fb3e8"]
  ] },
  "10-10": { t: "Emerson Can Read Anything!", cover: 10, pages: [
    ["When Emerson was little, she could not read. Books were full of funny marks.", "bedroom; E 200 book wow s1.2"],
    ["Then Mom and Dad helped her learn her letters and sounds. A, B, C!", "room; M 100; E 200 book big; D 300; q 200 y70 t:A_B_C"],
    ["She read about Dexter and Leo, about hats and vans and the big sun.", "out; sun 330 y50 face; dexter 90 s1.3; leo 150 s1.3; hat 220 y230; van 320 s.6"],
    ["She read about the farm, the garden, the library, and Grandma Camp.", "out; barn 90 s.7; E 220 book big; sign 335 t:Grandma_Camp"],
    ["Each book was a little harder. But Emerson did not give up. She kept trying!", "bedroom; books 90 s1.6; E 200 book; books 310 s2"],
    ["Now she reads to her sisters. Lauren and Olivia listen and smile.", "bedroom; L 110 sit big; E 200 sit book big; O 290 sit big"],
    ["She reads to Dexter and Leo. They purr and purr.", "room; mat 200 s3 #c76b6b; dexter 115 sleep y222; E 200 sit book y208; leo 285 sleep y222"],
    ["She reads to Grandpa Mark, Grandma Becky, Grandpa Lon, and Grandma Lynette.", "room; Mark 55 nohat; Becky 115; E 200 book big; Lon 285 nohat; Lyn 345"],
    ["Everyone cheers! “Emerson, you are a reader!”", "party; spark; D 50 up big; M 110 up big; L 165 up big; E 220 book big; O 280 up big"],
    ["Emerson smiles a big smile. She has read every book. Now she can read anything!", "party; spark seed:3; books 70 s1.6; E 200 up big s1.4 hold:star hs:.6; books 330 s1.6"]
  ] }
});
