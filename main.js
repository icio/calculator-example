$(function() {
    $("form").submit(function(e) {
        calculate();
        e.preventDefault();
        return false;
    });
});

function inputValue(selector) {
    var input = $(selector),
        val = parseFloat(input.val());
    if (Number.isNaN(val)) {
        input.parents('.form-control').addClass('has-error');
    } else {
        input.parents('.form-control').removeClass('has-error');
    }
    return val;
}

function calculate() {
    var a = inputValue("#a"),
        b = inputValue("#b");

    // User input was bad
    if (Number.isNaN(a + b)) return;

    // Calculate the solution
    var soln = a * b;

    // Display it to the user
    $("#soln").val(soln);
}
