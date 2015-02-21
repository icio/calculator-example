$(function() {
    $("form").submit(function(e) {
        calculate();
        e.preventDefault();
    });
});

function calculate() {
    var a = parseFloat($("#a").val()),
        b = parseFloat($("#b").val());

    // User input was bad
    if (Number.isNaN(a + b)) return;

    // Calculate the solution
    var soln = a * b;

    // Display it to the user
    $("#soln").val(soln);
}
