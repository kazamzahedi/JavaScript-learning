/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
 import Backpack from "./Backpack.js";
 import Book from "./Book.js";

 const everydayPack = new Backpack(
   "Everyday Backpack",
   30,
   "grey",
   15,
   26,
   26,
   false,
   "December 5, 2019 15:00:00 PST"
 );

 const content = `
 <main>
 <article>
   <h1>${everydayPack.name}</h1>
   <ul>
     <li>Volume: ${everydayPack.volume}</li>
     <li>Color: ${everydayPack.color}</li>
     <li>Age: ${everydayPack.backpackAge()}</li>
     <li>Number of pockets: ${everydayPack.pocketNum}</li>
     <li>Left strap length: ${everydayPack.strapLength.left}</li>
     <li>Right strap length: ${everydayPack.strapLength.right}</li>
     <li>Lid status: ${everydayPack.lidOpen}</li>
   </ul>
 </article>
</main>
 `;
 document.body.innerHTML = content;

  console.log("The everydayPack object:", everydayPack);
  console.log("The pocketNum value:", everydayPack.pocketNum);
  console.log(everydayPack.strapLength.left);
  console.log("Data acquired", everydayPack.dateAcquired);
  console.log("Days since aquired", everydayPack.backpackAge());
 


// Book param order : title, author, ISBN, pubYear, pageNumber, currentPage, readStauts,
const HezaroYekShab = new Book(
  "The Age of HezaroYekShab",
  "Kazam Zahedi",
  "2021",
  700,
  701,
  "Finished",
);
console.log(HezaroYekShab);

const KaleShakh = new Book(
  "The Age of KaleShakh",
  "Kazam Zahedi",
  "2020",
  400,
  401,
  "Finished"
);
console.log(KaleShakh);

const Shirberenj = new Book(
  "The Age of Shirberenj",
  "Kazam Zahedi",
  "2022",
  900,
  901,
  "Finished"
);
console.log(Shirberenj);

const ShirDosh = new Book(
  "The Age of ShirDosh",
  "Kazam Zahedi",
  "2023",
  200,
  201,
  "Finished"
);
console.log(ShirDosh);