function greeter(person) {
    var firstName = person.firstName, lastName = person.lastName;
    return "Hello, " + firstName + " " + lastName;
}
var user = { firstName: "Sakol", lastName: "Assawasagool" };
document.body.textContent = greeter(user);
