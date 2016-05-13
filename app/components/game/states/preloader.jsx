/**
 * Created by philiplipman on 2/3/16.
 */

function Preloader() {}

Preloader.prototype = {
    preload() {
        const assetDirectory = './app/components/game/assets/';

        const wallAsset = 'wall.png';
        const dudeAsset = 'dude.png';
        const diamondAsset = 'diamond.png';
        const starAsset = 'star.png';

        this.load.image('wall', assetDirectory + wallAsset);
        this.load.spritesheet('dude', assetDirectory + dudeAsset, 32, 48);
        this.load.spritesheet('target', assetDirectory + diamondAsset, 32, 28);
        this.load.image('bullet', assetDirectory + starAsset);
    },
    create() {
        this.state.start('generate');
    },
    update() {},
};

module.exports = Preloader;
