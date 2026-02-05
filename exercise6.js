const person = {
    species: 'Human',
    breathe() {
        return 'Breathing...';
    }
};

const employee = Object.create(person);
employee.name = 'Zalain';
employee.position = 'Janitor';
employee.company = 'UB Research Office';

const manager = Object.create(employee);
manager.name = 'Ian';
manager.department = 'Engineering';
manager.team = [];

manager.addTeamMember = function(member) {
    this.team.push(member);
};

console.log(manager.department);
console.log(manager.name);
console.log(manager.position);
console.log(manager.company);
console.log(manager.species);
console.log(manager.breathe());
console.log(Object.hasOwn(manager, 'department'));
console.log(Object.hasOwn(manager, 'position'));
console.log(Object.hasOwn(manager, 'species'));
console.log(manager.team);
manager.addTeamMember('Alice');
manager.addTeamMember('Bob');
console.log(manager.team);