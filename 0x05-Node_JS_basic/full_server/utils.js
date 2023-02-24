const fs = require('fs');

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.trim().split('\n').map(line => line.split(','));
        const fields = [...new Set(lines.map(line => line[3].toLowerCase()))].sort();
        const studentsByField = fields.map(field => ({
          field,
          count: 0,
          students: []
        }));

        for (const line of lines) {
          const firstName = line[0];
          const fieldIndex = fields.findIndex(field => field === line[3].toLowerCase());
          studentsByField[fieldIndex].count++;
          studentsByField[fieldIndex].students.push(firstName);
        }

        const result = studentsByField.map(({field, count, students}) => ({
          field: field.toUpperCase(),
          count,
          students
        }));

        resolve(result);
      }
    });
  });
}