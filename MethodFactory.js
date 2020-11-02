function Factory() {
    this.createConection = function (type) {
        var conection;
 
        if (type === "Oracle") {
            conection = new ConectionOracle();
        } else if (type === "MySql") {
            conection = new ConectionMysql();
        } 
 
        conection.type = type;
 
        conection.say = function () {
            log.add(this.type + "Net... " + this.text );
        }
 
        return conection;
    }
}
 
var ConectionOracle = function () {
    this.text = "Loading Oracle...";
};
 
var ConectionMysql= function () {
    this.text = "Loading Mysql...";
};
 

 

var log = (function () {
    var log = "";
 
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();
 
function run() {
    var conections = [];
    var factory = new Factory();
 
    conections.push(factory.createConection("Oracle"));
    conections.push(factory.createConection("Mysql"));
    
    
    for (var i = 0, len = conections.length; i < len; i++) {
        conections[i].say();
    }
 
    log.show();
}

