interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentsList: Student[] = [
    {
        firstName: 'Bete',
        lastName: 'Goshme',
        age: 60,
        location: 'Bahir Dar'
    },
    {
        firstName: 'Mikael',
        lastName: 'Goshme',
        age: 51,
        location: 'Bahir Dar'
    }
]
const table = document.createElement('table');
const tableBody = document.createElement('tbody');

studentsList.forEach((obj) => {
  const tr = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');
  nameCell.textContent = obj.firstName;
  locationCell.textContent = obj.location;
  tr.appendChild(nameCell);
  tr.appendChild(locationCell);
  tableBody.appendChild(tr);
});
table.appendChild(tableBody);
document.body.appendChild(table);