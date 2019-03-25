const fs = require("fs");
fs.readdir(__dirname, (err, filenames) => {
    if (err) throw err;
    console.log(filenames);
});
