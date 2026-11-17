/* SET 9 (BROWN): vowel teams like rain, day, sheep, read, boat, moon */
Object.assign(BOOKS, {
  "9-1": { t: "Rain, Rain", cover: 9, pages: [
    ["It is a gray day. The rain will not stop.", "rain"],
    ["We can not play out in the rain. We stay in.", "bedroom; L 110 sad; O 200 sad; E 290 sad"],
    ["What can we play? Lauren has a plan.", "bedroom; L 200 point big"],
    ["We paint! Emerson paints a rainbow.", "kitchen; E 300 big; table 180 #fff; paper 180 y163 s1.6"],
    ["Olivia paints Dexter. He waits on a chair.", "kitchen; dexter 110 s1.4 y228; O 330; table 230 #fff s.8; paper 230 y173 s1.2"],
    ["Then the dolls have a tea party.", "bedroom; doll 150 y230 #e5484d h:#f7d35f; doll 250 y230 #9b6bff h:#333; table 200 s.7 #ff8fb3; cupcake 200 y178 s.6"],
    ["We wait and wait. Is the rain gone yet?", "bedroom; E 330 wow; q 280 y80"],
    ["Hooray! The rain stops! The sun is out!", "out; spark; sun 300 y55 face"],
    ["We play in the puddles. Splash! Hooray!", "out; rainbow 200 y200; puddle 200 s3 y234; L 120 hop; O 200 hop big; E 280 hop big; splash 200 y230"],
    ["What a fun rainy day! May we play again soon?", "out; rainbow 200 y200; L 110 big; O 200 big; E 290 up big"]
  ] },
  "9-2": { t: "Feed the Sheep", cover: 5, pages: [
    ["Grandpa Mark has sheep. We meet them.", "farm; Mark 100; sheep 230 s1.2; sheep 320 s1.2"],
    ["The sheep need to eat. They eat green grass.", "farm; sheep 160 s1.4; sheep 290 s1.4 flip"],
    ["We feed them hay. Baa, baa!", "farm; sheep 110 s1.3; hay 200 s1.4; sheep 300 s1.3 flip; q 200 y90 t:Baa!"],
    ["Emerson feeds a sheep. Its nose feels soft.", "farm; E 160 hold:hay hs:.4; sheep 270 s1.4 flip"],
    ["One sheep is a baby. It is a lamb. It is so sweet!", "farm; heart 200 y80; sheep 200 s1.8"],
    ["The lamb needs milk. Lauren feeds it.", "farm; L 160 hold:drink hc:#fff hs:.8; sheep 260 s1 flip"],
    ["The lamb leaps and leaps. It is so happy!", "farm; hops 260 y214; sheep 260 s1.2 y185"],
    ["At night, the sheep sleep in the barn.", "night; barn 200 s.9; sheep 110 s.9; sheep 300 s.9"],
    ["We sleep, too. We dream of sheep! One, two, three...", "bedroom night; bed 200 who:L,O,E sleep; sheep 290 s.6 y90; sheep 330 s.6 y70; sheep 370 s.6 y50"],
    ["Good night, sheep. See you next week!", "night; barn 200 s.9; Mark 90 wave; E 320 wave big"]
  ] },
  "9-3": { t: "Read with Grandma Becky", cover: 7, pages: [
    ["Grandma Becky reads each day. She loves books!", "library; Becky 200 book big bc:#2eb67d"],
    ["She takes Emerson to the library. They look at books.", "library; Becky 140; E 250 wow"],
    ["Emerson picks a book about the moon.", "library; E 200 hold:bk hc:#22306b hs:.8 big"],
    ["Grandma Becky shows her how to read the words.", "library; Becky 140 sit book bc:#2eb67d; E 250 sit book bc:#22306b"],
    ["Emerson reads, “The moon is up. The moon is cool.”", "night; moon 200 y110 s2.6"],
    ["She reads each page. She does not need help!", "library; E 200 sit book bc:#22306b big s1.2"],
    ["Then Emerson reads to Grandma Becky. Grandma beams!", "library; Becky 140 sit big; E 250 sit book bc:#22306b big"],
    ["Emerson gets a library card. It has her name on it.", "library; E 200 up big hold:bk hc:#ffcf33 hs:.6"],
    ["She can keep the books for three weeks!", "library; E 200 hold:books hs:.8 big"],
    ["Emerson and Grandma Becky agree. Reading is the best!", "library; spark; Becky 140 book big bc:#2eb67d; E 250 book big bc:#22306b"]
  ] },
  "9-4": { t: "The Boat", cover: 4, pages: [
    ["Grandpa Mark has a red boat on the pond.", "pond; boat 200 y232 s1.2"],
    ["We put on orange coats that float.", "pond; L 110 #ff8a2a; O 200 #ff8a2a; E 290 #ff8a2a big"],
    ["We get in the boat. Grandpa Mark rows.", "pond; boat 200 y232 s1.2 who:Mark,L,O,E"],
    ["Row, row, row! The boat floats on the pond.", "pond; splash 100 y226; boat 220 y232 s1.2 who:Mark,L,O,E big"],
    ["Look! A sheep on the bank. Baa!", "pond; sheep 335 s1 y205; boat 160 y232 who:Mark,L,O,E"],
    ["Emerson sees a fish. It swims by the boat.", "pond; boat 160 y232 who:Mark,L,O,E; fish 290 y226 s1.4"],
    ["A duck floats by. Quack!", "pond; boat 160 y232 who:Mark,L,O,E; duck 300 y234 s1.4"],
    ["The sun goes down. We row back to the dock.", "sunset sun180; boat 200 y232 who:Mark,L,O,E"],
    ["We hop out. We had a great time!", "pond; Mark 100 big; L 170; O 240; E 310 big up"],
    ["Thank you, Grandpa Mark! Boats are cool!", "pond; spark; heart 200 y60; Mark 160 hug big; E 250 big; boat 330 y236 s.6"]
  ] },
  "9-5": { t: "Moon and Stars", cover: 4, pages: [
    ["It is night at Grandma Camp. The moon is up.", "woods night"],
    ["Grandma Lynette has a blanket. We lie on the grass.", "night; mat 200 s3.6 #ff6f91; Lyn 90 sit; L 160 sit; O 240 sit; E 310 sit"],
    ["Look up! The stars glow so bright.", "night; star 100 y60 s.6; star 300 y80 s.6; E 200 point wow"],
    ["Grandma shows us the Big Dipper. It looks like a spoon!", "night; star 120 y60 s.4; star 160 y64 s.4; star 200 y70 s.4; star 230 y90 s.4; star 230 y120 s.4; star 290 y120 s.4; star 300 y92 s.4; Lyn 80 point"],
    ["A light zooms by. It is a shooting star!", "night; star 290 y60; q 235 y72 t:~_~ #fff39a; E 160 wow"],
    ["Make a wish! Emerson wishes on the star.", "night; star 300 y60; E 200 mood:sleep s1.2"],
    ["Then we see fireflies. They glow, glow, glow!", "night; flies; E 200 wow"],
    ["Lauren keeps one in her hands. Then she lets it go free.", "night; flies; L 200 hug big"],
    ["It is late. Soon we will sleep in the tent.", "woods night; tent 200 s1.8; lamp 300 y232"],
    ["Good night, moon! Good night, stars! Good night, Grandma!", "woods night; tent 200 s1.8; Lyn 330 wave; q 200 y90 t:Z_z_z #c9d3ff"]
  ] },
  "9-6": { t: "Sweet Treats", cover: 7, pages: [
    ["Today we will make sweet treats with Mom.", "kitchen; M 160 big; E 260 up big"],
    ["First, we make peach pie. Peaches are sweet!", "kitchen; pie 200 y142 s2; peach 265 y142; peach 290 y142"],
    ["Then we make cupcakes with pink cream on top.", "kitchen; cupcake 160 y142 s1.4; cupcake 200 y142 s1.4; cupcake 240 y142 s1.4"],
    ["Lauren makes cookies. She eats one. Yum!", "kitchen; L 200 eat hold:cookie"],
    ["Olivia makes a fruit bowl. Peaches, grapes, and melon.", "kitchen; O 160; bowl 270 y142 s1.4"],
    ["Emerson wants to eat the cream. Mom said, “Wait!”", "kitchen; M 90 point; E 200 wow; cupcake 280 y142 s1.4"],
    ["We set the treats on the table. What a feast!", "kitchen; E 345 big; table 190 #ffd1e0; pie 135 y163; cupcake 180 y163; cookie 210 y163; bowl 245 y163"],
    ["Grandma Becky and Grandpa Mark come to eat.", "kitchen; Becky 140 big; Mark 260 big nohat"],
    ["Each of us eats a treat. Then we eat one more!", "kitchen; L 100 eat hold:cookie; O 200 eat hold:cupcake; E 300 eat hold:pie hs:.4 big"],
    ["Sweet treats are a real treat! Yum, yum!", "kitchen; spark; E 345 big up; table 190 #ffd1e0; pie 150 y163; cupcake 200 y163; cookie 240 y163"]
  ] },
  "9-7": { t: "Team Day", cover: 8, pages: [
    ["Today is a big day for Olivia. Her team has a game!", "court; O 200 #e5484d hold:bball hs:.8 big s1.2"],
    ["Her team needs to beat the Blue team.", "court; O 200 #e5484d; q 280 y80 t:Go!"],
    ["Olivia keeps the ball. She is fast on her feet.", "court; O 200 run #e5484d hold:bball hs:.8"],
    ["She leaps! She shoots! It is in!", "court; hoop 300; bball 300 y96; O 160 up big #e5484d"],
    ["We cheer from our seats. Go, team, go!", "court; M 70 up big; D 150 up big; L 230 up big; E 310 up big"],
    ["Grandpa Lon and Grandma Lynette cheer, too.", "court; Lon 140 up big nohat; Lyn 260 up big"],
    ["The game is close. They need one more point!", "court; O 200 #e5484d wow hold:bball hs:.8; q 265 y80"],
    ["Olivia passes to her teammate. Swish! They win!", "court; spark; hoop 300; bball 300 y96; O 160 up big #e5484d"],
    ["The team cheers and leaps. What a great team!", "court; spark; O 200 hop big #e5484d hold:trophy hs:.7"],
    ["Olivia is tired but happy. She sleeps the whole way home.", "night; van 200 s1.2 who:D,M,L,O,E go"]
  ] },
  "9-8": { t: "Pool Day", cover: 3, pages: [
    ["It is hot. The pool is cool. Let's swim!", "pool; sun 330 y50 face"],
    ["Emerson puts on her goggles. She is ready!", "pool; E 200 y232 big s1.2"],
    ["She leaps in. Splash! The pool is so cool.", "pool; E 200 wade up big; splash 200 y172"],
    ["She floats on her back. She sees the blue sky.", "pool; E 200 wade r-90 y212"],
    ["Lauren and Olivia play a game. They toss a ball.", "pool; L 120 wade up; O 280 wade up; ball 200 y110 #ff6fae"],
    ["Dad swoops in. He tosses Emerson up! Wheee!", "pool; D 150 wade up big; E 250 up y140 big"],
    ["At noon, we eat lunch on the deck.", "pool; L 100 y242 eat hold:sandwich; O 200 y242 eat hold:melon; E 300 y242 eat hold:peach"],
    ["Then we swim some more. We swim and swim.", "pool; L 110 wade; O 200 wade; E 290 wade big"],
    ["Mom reads a book in the shade. She needs a rest.", "pool; M 170 sit y242 book; umbrella 240 y246 s2 #2eb67d"],
    ["Emerson yawns. What a cool pool day!", "bedroom night; bed 200 #ff8fb3 who:E sleep"]
  ] },
  "9-9": { t: "The Snowman", cover: 7, pages: [
    ["Look out the window! Snow fell all night.", "snow"],
    ["We put on coats, boots, and mittens.", "snow; L 110 hat:#3b82f6; O 200 hat:#9b6bff; E 290 hat:#e5484d big"],
    ["Let's make a snowman! We roll a big snowball.", "snow; ball 180 s3 #ffffff; E 300 hat:#e5484d"],
    ["Lauren rolls the next ball. Olivia rolls the head.", "snow; ball 140 s2.4 #ffffff; L 250 hat:#3b82f6"],
    ["Dad lifts it up. The snowman is so tall!", "snow; snowman 200 s1.4; D 320"],
    ["Emerson gets a carrot for his nose.", "snow; E 200 hold:carrot hs:.8 big hat:#e5484d"],
    ["Mom gives him a hat and a red scarf.", "snow; snowman 190 s1.4; M 320 big"],
    ["The wind blows. Snow floats down. It is so cold!", "snow; snowman 190 s1.4; E 320 hat:#e5484d wow"],
    ["We go in and have hot cocoa. We feel cozy.", "kitchen; L 110 hold:drink hc:#8b5a3c; O 200 hold:drink hc:#8b5a3c; E 290 eat hold:drink hc:#8b5a3c big"],
    ["Our snowman waits by the window. Hello, snowman!", "snow; snowman 200 s1.6; heart 280 y80"]
  ] },
  "9-10": { t: "A Day at Grandma Camp", cover: 6, pages: [
    ["Today is the last day of Grandma Camp. We will play all day!", "out; sign 335 t:Grandma_Camp; Lyn 190 big"],
    ["First, we paint. Lauren paints a tree. Emerson paints a boat.", "kitchen; L 80; E 330 big; table 200 #fff; paper 150 y163; paper 250 y163"],
    ["Then we bake treats. We each eat a cookie.", "kitchen; Lyn 120 hold:cookie hs:.6; E 260 eat hold:cookie big"],
    ["Next, we play in the creek. Splash! We keep cool.", "pond; L 120 wade up; O 200 wade big; E 280 wade up big"],
    ["We read books under a tree.", "out; tree 200 s1.5; L 110 sit book bc:#1fb5a3; O 200 sit book bc:#9b6bff; E 290 sit book bc:#ff6fae"],
    ["Grandma Lynette has a treat. It is ice cream!", "out; spark; Lyn 200 hold:icecream hs:.8 big"],
    ["We play hide and seek. Emerson hides by a tree.", "out; L 90 mood:sleep; tree 260 s1.5; E 300 wow s.9"],
    ["At night, we see the moon. We sleep in the tent.", "woods night; tent 200 s1.8"],
    ["Mom and Dad come to get us. We hug Grandma Lynette.", "out; van 310 s1 who:D,M; Lyn 140 hug big; E 210 big"],
    ["Bye, Grandma! We will come back next year! Grandma Camp is the greatest!", "out; spark; heart 200 y50; L 110 wave; Lyn 200 big up; O 280 wave; E 345 wave big"]
  ] }
});
