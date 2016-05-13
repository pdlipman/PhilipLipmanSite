/**
 * Created by philiplipman on 2/3/16.
 */

function Boot() {}

Boot.prototype = {
    preload() {},
    create() {
        this.state.start('preloader');
    },
    update() {},
};

module.exports = Boot;
