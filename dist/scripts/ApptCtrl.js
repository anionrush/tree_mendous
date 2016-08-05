(function() {
    
    function ApptCtrl($firebaseArray){
        var ref = new Firebase('https://treemendous-b5030.firebaseio.com/appointments');
        this.apptArray = $firebaseArray(ref);
        this.addAppt = function(){
            this.apptArray.$add({
                name: this.nameText,
                phone: this.phoneText,
                date: this.dateText,
                time: this.timeText,
                address: this.addressText,
                description: this.descriptionText
            })
            
            this.nameText=null;
            this.phoneText=null;
            this.dateText=null;
            this.timeText=null;
            this.addressText=null;
            this.descriptionText=null;
            
        };
    }
    
    angular.module('treeMendous')
        .controller('ApptCtrl', ["$firebaseArray", ApptCtrl])
})();