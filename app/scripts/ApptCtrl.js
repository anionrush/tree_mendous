(function() {
    
    function ApptCtrl($firebaseArray, Dates){
        var ref = new Firebase('https://treemendous-b5030.firebaseio.com/');
        
//        var unavailDates = $firebaseArray(ref.child('unavailableDates'));        
//        var listDates = ['8/12/2016'];
        this.listDays = Dates.dates;
        this.Dates = Dates;
        
        
//        unavailDates.$loaded()
//            .then(function(){
//                angular.forEach(unavailDates, function(date) {
//                    listDates.push(new Date(date["date"]));
//                })
//                
//                //this.listDays = listDates;
//            });
        
        this.apptArray = $firebaseArray(ref.child('appointments'));
        this.addAppt = function(){
            this.apptArray.$add({
                name: this.nameText,
                phone: this.phoneText,
                date: this.dateText,
                time: this.timeText,
                address: this.addressText,
                description: this.descriptionText
            })
            
            //this.listDates.$add(this.dateText);
            
            this.nameText=null;
            this.phoneText=null;
            this.dateText=null;
            this.timeText=null;
            this.addressText=null;
            this.descriptionText=null;
            
            
        };
    }
    
    angular.module('treeMendous')
        .controller('ApptCtrl', ["$firebaseArray", 'Dates', ApptCtrl])
})();