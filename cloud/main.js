// Cloud Code entry point

// FOODS
/*Parse.Cloud.define("getAllFoods", async () => {
    //var Food = new Parse.Object.extend("Food");
    var query = new Parse.Query("Food");
    
    var result = await query.find();
    result.then((e) => {
        console.log(e);
        response(e.message);
    }).catch((e) => Promise.reject(e.message));

    return result;
});
*/

Parse.Cloud.define("getAllFoods", async function(resolve,error){
    //var Food = new Parse.Object.extend("Food");
    var query = new Parse.Query("Foods");
    console.log(query);
    query.find()
        .then(function(e){
            resolve(e);
        }).catch(function(e){
            console.log("Aqui \n"+e.message+"\n");
            error(e);
        });
});

// PEOPLE
Parse.Cloud.define("getAllPeople", function (request, response) {
    var query = new Parse.Query("Person");
    query.find({
        success: (people) => {
            console.log(people);
            response.success(people);
        },
        error: (error) => {
            console.log(error);
            response.error(error);  
        }
    });
});

// PLACES
Parse.Cloud.define("getAllPlaces", function (request, response) {
    var query = new Parse.Query("Place");
    query.find({
        success: (places) => {
            console.log(places);
            response.success(places);
        },
        error: (error) => {
            console.log(error);
            response.error(error);  
        }
    });
});