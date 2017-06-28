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
        mode = 1;
        //show stop and lap buttons
        hideshowButtons("stopButton", "#lapButton");
        //start counter
        startAction();
        
    });
    
    
    //functions
//shows two buttons    
function hideshowButtons(x,y){
    
    $(".control").hide();
    $(x).show();
    $(y).show();
   }
    
    //start counter
    function startAction(){
        action = setInterval(function(){
            timeCounter++;
            if(timeCounter == 100*60*100){
                timeCounter = 0;
            }    
            lapCounter++;
             if(lapCounter == 100*60*100){
                lapCounter = 0;
            } 
            updateTime();
        },10);
        
    }
    
    //updateTime - converts counters to minutes,se,centisec
    function updateTime(){
        //1 min = 60*100 cenitsecond=6000;
        timeMinutes = Math.floor(timeCounter/6000);
        timeSeconds = Math.floor((timeCounter%6000)/100);
        timeCentiseconds = (timeCounter%6000)%100;
        
        $("#timeminute").text(format(timeMinutes));
        $("#timesecond").text(format(timeSeconds));
        $("#timecentisecond").text(format(timeCentiseconds));
        
        //1 min = 60*100 cenitsecond=6000; Laps
        lapMinutes = Math.floor(lapCounter/6000);
        lapSeconds = Math.floor((lapCounter%6000)/100);
        lapCentiseconds = (lapCounter%6000)%100;
        
        $("#lapminute").text(format(lapMinutes));
        $("#lapsecond").text(format(lapSeconds));
        $("#lapcentisecond").text(format(lapCentiseconds));
    }
      
    //format numbers
    function format(number){
        if(number<10){
            return '0'+number;
        }else {
            return number;
        }
    }
});

