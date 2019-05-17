var Promise = require("bluebird");

Promise.delay(1000)
  .then(() => {
    console.log(1);
  })
  .delay(1000)
  .then(() => {
    console.log(2);
  });
