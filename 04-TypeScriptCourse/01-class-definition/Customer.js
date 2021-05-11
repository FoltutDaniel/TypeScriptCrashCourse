var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer = new Customer("Martin", "Eliot");
/*
myCustomer.firstName = "Martin";
myCustomer.lastName = "Dixon";
*/
console.log(myCustomer.firstName + myCustomer.lastName);
