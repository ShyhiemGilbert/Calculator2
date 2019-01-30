$(document).ready(function ()
{
$(".keypad").click(function(e) {
    debugger;
    var value = e.currentTarget.innerHTML;
    if (value != "=") {
        var result = $("#result").val();
        result = result + value;
        $("#result").val(result);

        //Logic to populate the new text box
        var operators = ["+", "-", "*", "/"];

        if ($.inArray(value, operators) != -1) {
            //Button pressed is an operator
            $("#oldOperator").val(value);
        } //$.inArray(value, operators
        else { //Button pressed is an number
            var oldOp = $("#oldOperator").val();
            if (oldOp == undefined || $.trim(oldOp) == "") {
                //This is op1
                //We will concatenate this number to op1 and not replace since we can have multiple digit number
                $("#op1").val($("#op1").val()+value);
            } //(oldOp == undefined
            else {
                //Thisis op2
                $("#op2").val($("#op2").val() + value);
            }
        }//else { //Button pressed is an number
    } //if(value !=...)
    else {
        return false;
    }//return false
})//keypadClickFunction
})//documentReadyFunction