let Apple = require("../assets/images/apple.png");
let Banana = require("../assets/images/banana.png");
let Pear = require("../assets/images/pear.png");
let Grapes = require("../assets/images/grapes.png");
let Cherry = require("../assets/images/cherry.png");
let Watermelon = require("../assets/images/watermelon.png");
let Orange = require("../assets/images/orange.png");
let IceCream = require("../assets/images/icecream.png");
let Burger = require("../assets/images/grapes.png");
let Football = require("../assets/images/football.png");
let Cat = require("../assets/images/cat.png");
let Dog = require("../assets/images/dog.png");
let Elephant = require("../assets/images/elephant.png");
let Horse = require("../assets/images/horse.png");
let Lion = require("../assets/images/lion.png");
let Parrot = require("../assets/images/parrot.png");
let Pineapple = require("../assets/images/pineapple.png");
let Pencil = require("../assets/images/pencil.png");
let Bear = require("../assets/images/bear.png");
let Monkey = require("../assets/images/monkey.png");
let Strawberry = require("../assets/images/strawberry.png");
let Zebra = require("../assets/images/zebra.png");
let Pizza = require("../assets/images/Pizza.png");
let Fish = require("../assets/images/Fish.png");
let Dolphin = require("../assets/images/Dolphin.png");
let A = require("../assets/images/A.png");
let X = require("../assets/images/X.png");
let F = require("../assets/images/F.png");
let Z = require("../assets/images/Z.png");
let L = require("../assets/images/L.png");
let D = require("../assets/images/D.png");

const questions = [
  [
    //Level1
    {
      Question: "SPOT THE BANANA",
      Option: [Football, Elephant, Banana],
      CorrectOption: Banana,
    },
    {
      Question: "SPOT THE LION",
      Option: [IceCream, Lion, Dog],
      CorrectOption: Lion,
    },
    {
      Question: "SPOT THE CAT",
      Option: [Apple, Cat, Pencil],
      CorrectOption: Cat,
    },
    {
      Question: "SPOT THE GRAPES",
      Option: [Grapes, Horse, Watermelon],
      CorrectOption: Grapes,
    },
    {
      Question: "SPOT THE DOG",
      Option: [Dog, Cherry, Monkey],
      CorrectOption: Dog,
    },
    {
      Question: "SPOT THE ICE-CREAM",
      Option: [IceCream, , Banana, Zebra],
      CorrectOption: IceCream,
    },
    {
      Question: "SPOT THE PARROT",
      Option: [Pencil, Pear, Parrot],
      CorrectOption: Parrot,
    },
    {
      Question: "SPOT THE HORSE",
      Option: [Horse, A, Strawberry],
      CorrectOption: Horse,
    },
    {
      Question: "SPOT THE FOOTBALL",
      Option: [Apple, Football, Elephant],
      CorrectOption: Football,
    },
    {
      Question: "SPOT THE WATERMELON",
      Option: [Watermelon, Zebra, Cherry],
      CorrectOption: Watermelon,
    },
  ],
  [
    //Level2
    {
      Question: "SPOT THE PARROT",
      Option: [X, Elephant, Parrot],
      CorrectOption: Parrot,
    },
    {
      Question: "SPOT THE LETTER 'F'",
      Option: [Burger, F, Cherry],
      CorrectOption: Lion,
    },
    {
      Question: "SPOT THE PEAR",
      Option: [Pencil, Pear, Pizza],
      CorrectOption: Pear,
    },

    {
      Question: "SPOT THE PINEAPPLE",
      Option: [Pineapple, Lion, Pencil],
      CorrectOption: Pineapple,
    },
    {
      Question: "SPOT THE MONEKY",
      Option: [Dog, Cherry, Monkey],
      CorrectOption: Monkey,
    },
    {
      Question: "SPOT THE ZEBRA",
      Option: [IceCream, Zebra, Banana],
      CorrectOption: Zebra,
    },
    {
      Question: "SPOT THE CAT",
      Option: [Grapes, Pizza, Cat],
      CorrectOption: Cat,
    },
    {
      Question: "SPOT THE LETTER 'D'",
      Option: [Dog, Grapes, D],
      CorrectOption: D,
    },
    {
      Question: "SPOT THE ELEPHANT",
      Option: [Apple, Elephant, Pizza],
      CorrectOption: Elephant,
    },
    {
      Question: "SPOT THE FOOTBALL",
      Option: [Football, Zebra, Cherry],
      CorrectOption: Football,
    },
  ],
  [
    //Level3
    {
      Question: "SPOT THE CHERRY",
      Option: [Football, Cherry, Elephant, Banana],
      CorrectOption: Cherry,
    },
    {
      Question: "SPOT THE LION",
      Option: [IceCream, Lion, Pear, Dog],
      CorrectOption: Lion,
    },
    {
      Question: "SPOT THE PENCIL",
      Option: [Pencil, Cat, Pineapple, Burger],
      CorrectOption: Pencil,
    },
    {
      Question: "SPOT THE BEAR",
      Option: [Bear, A, Horse, Cherry],
      CorrectOption: Bear,
    },
    {
      Question: "SPOT THE DOG",
      Option: [Dog, Cherry, Monkey, L],
      CorrectOption: Dog,
    },
    {
      Question: "SPOT THE ORANGE",
      Option: [Orange, Lion, Banana, Zebra],
      CorrectOption: Orange,
    },
    {
      Question: "SPOT THE FOOTBALL",
      Option: [Pencil, Pear, Parrot, Football],
      CorrectOption: Football,
    },
    {
      Question: "SPOT THE HORSE",
      Option: [Watermelon, F, Burger, Horse],
      CorrectOption: Horse,
    },
    {
      Question: "SPOT THE ELEPHANT",
      Option: [Pencil, Football, Elephant, Orange],
      CorrectOption: Elephant,
    },
    {
      Question: "SPOT THE ZEBRA",
      Option: [Grapes, Zebra, Cherry, Dog],
      CorrectOption: Zebra,
    },
  ],
  [
    //Level4
    {
      Question: "SPOT THE PINEAPPLE",
      Option: [Football, Elephant, Banana, Pineapple],
      CorrectOption: Pineapple,
    },
    {
      Question: "SPOT THE LETTER 'X'",
      Option: [IceCream, X, Lion, Dog],
      CorrectOption: X,
    },
    {
      Question: "SPOT THE CAT",
      Option: [Apple, Cat, Pencil, Burger],
      CorrectOption: Cat,
    },
    {
      Question: "SPOT THE STRAWBERRY",
      Option: [Grapes, Horse, Orange, Strawberry],
      CorrectOption: Strawberry,
    },
    {
      Question: "SPOT THE DOG",
      Option: [Dog, Cherry, Monkey, Pineapple],
      CorrectOption: Dog,
    },
    {
      Question: "SPOT THE FISH",
      Option: [IceCream, , Banana, Zebra, Fish],
      CorrectOption: Fish,
    },
    {
      Question: "SPOT THE PENCIL",
      Option: [Pencil, Pear, Parrot, Monkey],
      CorrectOption: Pencil,
    },
    {
      Question: "SPOT THE HORSE",
      Option: [Horse, A, Strawberry, Lion],
      CorrectOption: Horse,
    },
    {
      Question: "SPOT THE FOOTBALL",
      Option: [Orange, Fish, Football, Elephant],
      CorrectOption: Football,
    },
    {
      Question: "SPOT THE WATERMELON",
      Option: [Watermelon, Zebra, Cherry, Dolphin],
      CorrectOption: Watermelon,
    },
  ],
  [
    //Level5
    {
      Question: "SPOT THE LETTER 'A'",
      Option: [F, Elephant, Z, Apple, A],
      CorrectOption: A,
    },
    {
      Question: "SPOT THE PARROT",
      Option: [Pencil, Pear, F, Bear, Parrot],
      CorrectOption: Parrot,
    },

    {
      Question: "SPOT THE CAT",
      Option: [Apple, Cat, Pencil, Pizza, IceCream],
      CorrectOption: Cat,
    },
    {
      Question: "SPOT THE Dolphin",
      Option: [Watermelon, Burger, Dog, Dolphin, Cherry],
      CorrectOption: Dolphin,
    },
    {
      Question: "SPOT THE PINEAPPLE",
      Option: [Grapes, Horse, Pineapple, Cat, Burger],
      CorrectOption: Pineapple,
    },
    {
      Question: "SPOT THE DOG",
      Option: [Cherry, Monkey, Pear, Dog, A],
      CorrectOption: Dog,
    },
    {
      Question: "SPOT THE FISH",
      Option: [Watermelon, Zebra, Fish, Bear, F],
      CorrectOption: Fish,
    },
    {
      Question: "SPOT THE PEAR",
      Option: [IceCream, Orange, Zebra, Pear, Lion],
      CorrectOption: Pear,
    },
    {
      Question: "SPOT THE LION",
      Option: [IceCream, Cherry, Dog, A, Lion],
      CorrectOption: Lion,
    },

    {
      Question: "SPOT THE PINEAPPLE",
      Option: [Apple, Football, Elephant, Lion, Pineapple],
      CorrectOption: Pineapple,
    },
  ],
  [
    //Level6
    {
      Question: "SPOT THE PARROT",
      Option: [A, Elephant, Parrot, Fish, Burger],
      CorrectOption: Parrot,
    },
    {
      Question: "SPOT THE LETTER 'F'",
      Option: [IceCream, A, Cherry, Bear, F],
      CorrectOption: F,
    },
    {
      Question: "SPOT THE DOG",
      Option: [Pencil, Pear, Pizza, X, Dog],
      CorrectOption: Dog,
    },

    {
      Question: "SPOT THE PINEAPPLE",
      Option: [Pineapple, Lion, Pencil, Cat, Cherry],
      CorrectOption: Pineapple,
    },
    {
      Question: "SPOT THE MONEKY",
      Option: [Dog, Cherry, L, Monkey, Pear],
      CorrectOption: Monkey,
    },
    {
      Question: "SPOT THE ZEBRA",
      Option: [IceCream, Zebra, Banana, Dolphin, X],
      CorrectOption: Zebra,
    },
    {
      Question: "SPOT THE PENCIL",
      Option: [Grapes, Pizza, Pencil, Cat, Burger],
      CorrectOption: Pencil,
    },
    {
      Question: "SPOT THE LETTER 'D'",
      Option: [L, Grapes, D, Monkey, IceCream],
      CorrectOption: D,
    },
    {
      Question: "SPOT THE ELEPHANT",
      Option: [Apple, Elephant, Pizza, Banana, Lion],
      CorrectOption: Elephant,
    },
    {
      Question: "SPOT THE FOOTBALL",
      Option: [Football, Zebra, Cherry, Fish, Pencil],
      CorrectOption: Football,
    },
  ],
  [
    //Level7
    {
      Question: "SPOT THE LETTER 'Z'",
      Option: [F, Elephant, Z, Apple, Pencil, Burger],
      CorrectOption: Z,
    },
    {
      Question: "SPOT THE LION",
      Option: [IceCream, Cherry, Dog, A, Lion, Watermelon],
      CorrectOption: Lion,
    },
    {
      Question: "SPOT THE CAT",
      Option: [Apple, Cat, Pencil, Pizza, L, IceCream],
      CorrectOption: Cat,
    },
    {
      Question: "SPOT THE PINEAPPLE",
      Option: [Grapes, Horse, Orange, Pineapple, Dog, Cat],
      CorrectOption: Pineapple,
    },
    {
      Question: "SPOT THE DOG",
      Option: [Dog, Cherry, Monkey, Pear, Burger, A],
      CorrectOption: Dog,
    },
    {
      Question: "SPOT THE PEAR",
      Option: [IceCream, , Banana, Zebra, Pear, Lion, Pizza],
      CorrectOption: Pear,
    },
    {
      Question: "SPOT THE PARROT",
      Option: [Pencil, Pear, F, Bear, Banana, Parrot],
      CorrectOption: Parrot,
    },
    {
      Question: "SPOT THE Dolphin",
      Option: [Horse, Watermelon, Burger, Dog, Dolphin, A],
      CorrectOption: Dolphin,
    },
    {
      Question: "SPOT THE LION",
      Option: [Apple, Football, Elephant, Fish, Lion, Orange],
      CorrectOption: Lion,
    },
    {
      Question: "SPOT THE FISH",
      Option: [Watermelon, Zebra, Cherry, Fish, Bear, F],
      CorrectOption: Fish,
    },
  ],
];

export default questions;
