/**
 * A standard function
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

const greenPack = {
    name: "Frog Pack",
    color: "green",
    volume: 8,
    pocketNum: 3,
    newVolume: function (volume) {
        console.log("this.volume in the method:", this.volume);
        this.volume = volume;
        console.log("this.volume after update:", this.volume);
    },
};

console.log(greenPack.newVolume(5));
