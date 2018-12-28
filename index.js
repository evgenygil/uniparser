const parser = require('./components/parser');
const fs = require('fs');

(async () => {

    if (fs.existsSync('./rules/' + process.argv[2] + '.json')) {
        let k = await parser.getContent();
        return true
    } else console.log('No rule detected.')

})();
