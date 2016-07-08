(function() {
    
    function OptionCtrl(){
        this.row_titles = ['','Small Tree', 'Medium Tree', 'Large Tree'];
        this.col_titles = ['Dead/Sucker Removal', 'Medium', 'Full', 'Tree Removal to Stump' ]
        this.img_arrays = [[],[],[]]; 
    }
    
    angular.module('treeMendous')
        .controller('OptionCtrl', OptionCtrl)
})();