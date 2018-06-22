module.exports = function(sequelize, DataTypes){
    var to_do = sequelize.define("to_do", {
        todoitem: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[1, 200]
                
            }
        },
        complete:{
            type:DataTypes.BOOLEAN,
            defaultValue:false
        }
    });
    return to_do;
};