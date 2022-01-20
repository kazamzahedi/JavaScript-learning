/**
 * A standard function
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

const greenPack = {
    name: "Frog Pack",
    color: "green",
    volume: 8,
    pocketNum: 3 
};

const addPack = (currentPack) => {
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
        <h1>${currentPack.name}</h1>
        <ul>
            <li>Volume: ${currentPack.volume}</li>
            <li>Color: ${currentPack.color}</li>
            <li>Number of packets: ${currentPack.pocketNum}</li>
        </ul>
    `;
    return newArticle;
};

const theArticle = addPack(greenPack);
console.log(theArticle);

const main = document.querySelector("main");
main.append(addPack(greenPack));
