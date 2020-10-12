let orm = require('../config/orm');

let burger = {
    //Display all burgers
    selectAll: function (controllerCallback) {
        orm.selectAll('burgers', function (result) {
            controllerCallback(result);
        });
    },
    // Create new burger
    insertBurger: function (column, values, controllerCallback) {
        orm.insertBurger('burgers', column, values, function (result) {
            controllerCallback(result);
        });
    },
    // Update if burger has been eaten
    updateBurger: function (columnValue, conditionID, controllerCallback) {
        orm.updateBurger('burgers', columnValue, conditionID, function (result) {
            controllerCallback(result);
        });
    }
}

module.exports = burger;