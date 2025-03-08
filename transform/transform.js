const fs = require('fs');
const path = require('path');

// Read the JSON data from the file
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'output.txt'), 'utf8'));

// Transform the JSON structure
const transformedData = data.reduce((acc, item) => {
    if (!acc[item.zipCode]) {
        acc[item.zipCode] = [];
    }
    acc[item.zipCode].push({
        repName: item.repName,
        firstName: item.firstName,
        lastName: item.lastName,
        email: item.email,
        emailURL: item.emailURL,
        location: item.location,
        zipCode: item.zipCode,
        district: item.district
    });
    return acc;
}, {});

// Write the transformed JSON data to a new file
fs.writeFileSync(path.join(__dirname, 'transformedOutput.json'), JSON.stringify(transformedData, null, 2));

console.log('JSON data transformed successfully.');