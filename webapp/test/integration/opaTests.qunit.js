sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'fpmdemo/test/integration/FirstJourney',
		'fpmdemo/test/integration/pages/BookedFlightsMain'
    ],
    function(JourneyRunner, opaJourney, BookedFlightsMain) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('fpmdemo') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBookedFlightsMain: BookedFlightsMain
                }
            },
            opaJourney.run
        );
    }
);