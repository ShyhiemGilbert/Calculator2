//$(#num7) --  selecting an element
// $(".numbers") --  refers as add for multiple elements

//so it takes whole document to search for keypad instead of just above
//when compiled.


var globalVariable = ""; //This is how you define a global not declard inside any function and hence retains its value
$(document).ready(function () {

    //e is the element
    //whenever something is clicked, this function needs to be performed
    $(".keypad").click(function (e) {

        //To find the value that the button will give when pressed
        //use debugger + consolelog to find current target and innerHtml
        //debugger;
        //console.log(e);
        //We have this value, now we need to put it in (id=result)
        var value = e.currentTarget.innerHTML;
        //When i press equal button i want the answer, not input into the box
        //Create a  condition that if input is not equal to = then follow function 
        if (value != "=") {


            var result = $("#result").val();

            result = result + value;
            $("#result").val(result);

            //logic to populate the new textboxes
            var operators = ["+", "-", "*", "/"]; 
            var oldOp = $("#oldOperator").val();    //These are not global variables these will be reinitialised on every click
            var newOp = $("#newOperator").val();    //These are not global variables these will be reinitialised on every click
            var op1 = $("#op1").val();              //These are not global variables these will be reinitialised on every click
            var op2 = $("#op2").val();              //These are not global variables these will be reinitialised on every click
            if ($.inArray(value.operators) != -1) {
                
                if ($.trim(oldOp) == "") {
                    $("#oldOperator").val(value);
                } else {
                    if ($.trim(newOp) == "") {
                        $("#newOperator").val(value);

                };
            } else {
                //button pressed is a number
                

                if (oldOp == undefined || $.trim(oldOp) == "") {
                    //this is op1
                    //We will concatenate this number to op1 and
                    //not replace since we can have multiple digits
                    $("#op1").val(op1 + value);
                } else {
                    //This is op2
                    //We will concatenate this number to op2 and
                    //not replace since we can have multiple digits
                    $("#op2").val(op2 + value);
                }
            }
        } else {
            return false;
        }
    });
});


