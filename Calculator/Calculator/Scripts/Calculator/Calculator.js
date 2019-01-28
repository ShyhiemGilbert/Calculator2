//$(#num7) --  selecting an element
// $(".numbers") --  refers as add for multiple elements

//so it takes whole document to search for keypad instead of just above
//when compiled.

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
        }
        else
        {
            return false;
        }
    });
});


