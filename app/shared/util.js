var fs = require('fs');

var q = {
    getNames: function($,rt){
        // get english
        var enName = $(rt).text();
        var fName = $(rt).parent().text();
        var jpName = fName.replace(enName,"");

        return {enName: enName, jpName: jpName};
    },
    getID : function (name){
        return name.toLowerCase().trim().replace(" ","").replace("-","");
    }
}

Array.prototype.test = function() {
    console.log("TEST" + this.length);
}

Array.prototype.findOne = function(prop,search){
    var matches = this.filter(el => el[prop].trim().toLowerCase() === search.trim().toLowerCase() );
    if(matches.length === 1) return matches[0];
    return null;
}

Array.prototype.findExact = function(prop,search){
    var matches = this.filter(el => el[prop] == search);
    if(matches.length === 1) return matches[0];
    return null;
}

Array.prototype.save = function(path){
    fs.writeFileSync(path,JSON.stringify(this));
}

Array.prototype.load = function(path){
    this.concat(JSON.parse(fs.readFileSync(path)));
}


Array.prototype.groupBy = function(key) {
    return this.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

Array.prototype.groupByArray = function(key) { 
    return this.reduce(function (rv, x) { let v = key instanceof Function ? key(x) : x[key]; let el = rv.find((r) => r && r.key === v); if (el) { el.values.push(x); } else { rv.push({ key: v, values: [x] }); } return rv; }, []); 
}

module.exports = q;