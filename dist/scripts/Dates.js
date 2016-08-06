(function() {
    
    function Dates($firebaseArray){
        var ref = new Firebase('https://treemendous-b5030.firebaseio.com/');
        
        var unavailDates = $firebaseArray(ref.child('unavailableDates'));
        
        var listDates = [];
        
        
        unavailDates.$loaded()
            .then(function(){
                angular.forEach(unavailDates, function(date) {
                    listDates.push(new Date(date["date"]));
                })
                
                //this.listDays = listDates;
            });
        
       
        return {
            dates: listDates
        }
    }
    
    angular.module('treeMendous')
        .factory('Dates', ["$firebaseArray", Dates])
})();