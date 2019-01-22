var db = require('../db.js');

save_user_information = (data) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO lottery_information SET ? ', data, function (err, results, fields) {
            if (err) {
                reject('could not insert into lottery information');
            }
            resolve('succesful');
        });
    });
};

module.exports = {
    save_user_information
}