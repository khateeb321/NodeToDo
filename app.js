var fs = require('fs');

fs.readFile('README.md', 'utf8', function(err, data){
    console.log(data);
});