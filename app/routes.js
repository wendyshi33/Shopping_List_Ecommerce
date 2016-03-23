var buying = require('./models/mock');

function getbuyList(res) {
    buying.find(function (err, buyList) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(buyList); // return all buyList in JSON format
    });
}
;

module.exports = function (app) {

    // api ---------------------------------------------------------------------

    app.get('/api/buyList', function (req, res) {
        // use mongoose to get all buyList in the database
        getbuyList(res);
    });

    // create buylist and send back all buyList after creation
    app.post('/api/buyList', function (req, res) {

        // create a buy list, information comes from AJAX request from Angular
        buying.create({
            text: req.body.text,
            done: false
        }, function (err, buying) {
            if (err)
                res.send(err);

            // get and return all the buyList after you create another
            getbuyList(res);
        });

    });

    // delete a buying
    app.delete('/api/buyList/:buying_id', function (req, res) {
        buying.remove({
            _id: req.params.buying_id
        }, function (err, buying) {
            if (err)
                res.send(err);

            getbuyList(res);
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};