
// Calculate the interest
function compute()
{   
    // Find the numbers entered by user
    var principal = document.getElementById("principal").value
    // Error check for non-positive integers
    if (principal == "" || principal == 0  || principal < 0) {
        alert("Enter a positive number")
        document.getElementById("principal").focus();
        return false;
    }
    var rate = document.getElementById("rate").value
    var years = document.getElementById("years").value
    
    // Interest formulaf
    var interest = principal * years * rate / 100

    // Create new date and get years only
    var date = new Date();
    date.setFullYear(date.getFullYear() + Number(years));

    // Set inner HTML to display the different variables
    document.getElementById('result').innerHTML = 
    `If you deposit <mark>${principal}</mark>, at an interest rate of <mark>${rate}%</mark>. You will receive an amount of <mark>${interest}</mark>, in the year <mark>${date.getFullYear()}</mark>`

    
}

// Display selected number in range tag
function slide() {
    var slide = document.getElementById('rate').value
    document.getElementById('slide').innerHTML = slide
}
        