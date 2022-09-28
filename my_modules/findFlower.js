const fleurs = require('./fleurs');

const findFlower = {
        findFlower(flowerName) {
            const flowerFound = fleurs.find(flower => flower.name.toLowerCase() === flowerName.toLowerCase());
            return flowerFound;
    }
}

module.exports = findFlower;