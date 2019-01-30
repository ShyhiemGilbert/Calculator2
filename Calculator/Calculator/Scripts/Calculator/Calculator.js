function Eval(op1, op2, oldOp, newOp) {
    $.ajax({
    method: "POST",
        url:"/Calculator/Evaluate",
        data:{first: op1, second:op2, oper:oldOp},
    success: function(result) {
        $("#op1").val(result);
        $("#op2").val("");
        debugger;
        $("#oldOperator").val(newOp);
        $("#newOperator").val("");
        $("#result").val(result + newOp);
        }
    })
}
$(document).ready(function () {
    $(".keypad").click(function(e) {
        debugger;
        var value = e.currentTarget.innerHTML;
        if (value != "=") {
            var result = $("#result").val();
            result = result + value;
          

            //Logic to populate the new text box
            var operators = ["+", "-", "*", "/"];
            var oldOp = $("#oldOperator").val();
            var newOp = $("#newOperator").val();
            var op1 = $("#op1").val();
            var op2 = $("#op2").val();

            if ($.inArray(value, operators) != -1) {
                if ($.trim(op1) == "") {
                    alert("You are entering an operator when an operand is expected.");
                    return false;
                }
                //Button pressed is an operator
                if ($.trim(oldOp) == "") {
                    $("#oldOperator").val(value);
                } //($.trim(oldOp) 
                else {
                    if ($.trim(newOp) == "" || newOp == undefined) {
                        if ($.trim(op2) == "") {
                            alert("You are entering an operator when an operand is expected.");

                            return false;
                        } else {
                            $("#newOperator").val(value);
                        }
                    } //($.trim(newOp)
                    else {

                        //Make the Ajax call and pass the parameters to controller
                        //and populate the result textbox with result returned from controller

                    }
                } //else
            } //$.inArray(value, operators
            else { //Button pressed is an number
                if (oldOp == undefined || $.trim(oldOp) == "") {
                    //This is op1
                    //We will concatenate this number to op1 and not replace since we can have multiple digit number
                    $("#op1").val(op1 + value);
                } //(oldOp == undefined
                else {
                    //Thisis op2
                    $("#op2").val(op2 + value);

                }

            } //else { //Button pressed is an number
            
            $("#result").val(result); //if there is nothing in op1, we should not move forward
        } //if(value !=...)
        else {
            return false;
        } //return false
       
    }); //keypadClickFunction
});//documentReadyFunction