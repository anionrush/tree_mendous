(function() {
    
    function Dates($firebaseArray){
        var ref = new Firebase('https://treemendous-b5030.firebaseio.com/');
        
        var unavailDates = $firebaseArray(ref.child('unavailableDates'));
        
        var listDates = [];
        
        
        unavailDates.$loaded()
            .then(function(){
                angular.forEach(unavailDates, function(date) {
                    listDates.push(new Date(date["date"]));
                    console.log(date["date"])
                })
                
                //this.listDays = listDates;
            });
        
       
        return {
            dates: listDates,
            add: function(date){
                unavailDates.$add({date:date});
            }
        }
    }
    
    angular.module('treeMendous')
        .factory('Dates', ["$firebaseArray", Dates])
})();