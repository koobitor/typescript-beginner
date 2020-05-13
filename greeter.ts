interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  const { firstName, lastName } = person;
  return `Hello, ${firstName} ${lastName}`;
}

let user = { firstName: "Sakol", lastName: "Assawasagool" };

document.body.textContent = greeter(user);
