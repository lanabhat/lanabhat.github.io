(function () {
    'use strict';

    angular.module('YakshadhwaniApp').factory('updateSer', [updateSer]);
function updateSer() {  
		var latestVersion = "1.0"

		function CheckifVersionUpdated(curVer)
		{
			if(curVer != latestVersion)
			{
				return true;

			}
			else
			{
				return false;
			}
			
		}

		    return {
            getVersionDetail: CheckifVersionUpdated,
          
        };

	 }; //Service finction
})(); //Self invocation

