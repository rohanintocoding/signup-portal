


var citiesByState = {
    Odisha: ["Bhubaneswar","Puri","Cuttack"],
    Maharashtra: ["Mumbai","Pune","Nagpur"],
    Kerala: ["kochi","Kanpur"]
    }
    function makeSubmenu(value) {
    if(value.length==0) document.getElementById("citySelect").innerHTML = "<option></option>";
    else {
    var citiesOptions = "";
    for(cityId in citiesByState[value]) {
    citiesOptions+="<option>"+citiesByState[value][cityId]+"</option>";
    }
    document.getElementById("citySelect").innerHTML = citiesOptions;
    }
    }
    









