$(function(){
    
    var mode = 0; //App Mode
    var timeCounter =0; //time counter
    var lapCounter = 0; //lap counter
    var action; //variable for setInterval
    var lapNumber = 0; //number of laps
    
    //minutes,seconds, centiseconds for time and lap
    var timeMinutes, timeSeconds, timeCentiseconds, lapMinutes, lapSeconds, lapCentiseconds;
    
    //On App load show start and lap button
    hideshowButtons("#startButton", "#lapButton");
    
    //click Start Button
    $("#startButton").click(function(){
       //mode on
        mode=1;
        //show stop and lap buttons
        hideShowButtons("stopButton", "#lapButton");
        //start counter
        startAction();
        
    });
    
    
    //functions
//shows tow buttons    
function hideshowButtons(x,y){
    
    $(".control").hide();
    $(x).show();
    $(y).show();
   }
    
    //start counter
    function startAction(){
        action = setInterval(function(){
            timeCounter++;
            lapCounter++;
            updateTime();
        },10);
        
    }
    
    //updateTime - convert counters to minutes,se,centisec
    function updateTime(){
        //1 min = 60*100 cenitsecond=6000;
        timeMinutes = Math.floor(timeCounter/6000);
        
    }
        
});

