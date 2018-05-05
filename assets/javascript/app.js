//Button to initiate quiz from start page
<button onclick="startQuiz()">Start</button>

var time = 120;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

function count()
{
    time--;
    $('#display').html(time);
}

function endscreen()
{
    document.getElementById("game").innerHTML =
    /*need to figure out how to incorporate variables for correct and incorrect answers*/
    "Results! <br> Correct Answers: <br> Incorrect Answers: ";
    $('#displayCorrect').html(correct);
    $('#displayIncorrect').html(incorrect);
    $('#displayUnanswered').html(unanswered);
}

function startQuiz()
{
    var counter = setInterval(count, 1000);

    if (time == 0)
    {
        endscreen();    
    }

    else
    { 
        document.getElementById("game").innerHTML = "Question 1 <br> How many scruples are in a dram? <br> " 
         
        <class button1 ="1"/>
        <class button1 ="2"/>
        <class button1 ="3"/>
                
        //adding one button press at a time
        jQuery(function($) {
            $('.button1').click(function() {
              $('.button1').not(this).removeClass('active').html(function() {
                return $(this).html().replace('SELECTED', 'SELECT');
              });
              $(this).addClass('active').html(jQuery(this).html().replace('SELECT', 'SELECTED'));
            });
          });

          //increment correct or incorrect answers
          if ('SELECTED' == 3)
            correct++;
          else
            incorrect++;

          "Question 2 <br> What color is the sky? <br> " 
        
        <class button2 ="grey"/>
        <class button2 ="pink"/>
        <class button2 ="violet"/>
                
        
        jQuery(function($) {
            $('.button2').click(function() {
              $('.button2').not(this).removeClass('active').html(function() {
                return $(this).html().replace('SELECTED', 'SELECT');
              });
              $(this).addClass('active').html(jQuery(this).html().replace('SELECT', 'SELECTED'));
            });
          });

          if ('SELECTED' == "grey")
            correct++;
          else
            incorrect++;

          unanswered = 2 - (correct + incorrect);
    }
}