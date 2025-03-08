const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const fs = require('fs');

const app = express();

const url = "https://docs.legis.wisconsin.gov/2025/legislators/assembly"
axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const representive = []


        $('.info.email', html).each(function () {

            // Email
            const email = $(this).find('span.info.email a').text();
            const emailURL = "mailto:" + email

             // Extract location
            let location = $(this).parent().find('.info.voting_address').text().replace(/\n/g, '').trim();
            location = location.replace('Voting Address:', '').trim();
            location = location.replace(/^\d+\s*/, '');


            // Extract zip code from location
            const zipCodeMatch = location.match(/\b\d{5}(?:-\d{4})?\b/);
            const zipCode = zipCodeMatch ? zipCodeMatch[0] : null;


            // Extract district information
            let district = $(this).parent().find('small').filter(function() {
                return $(this).text().includes("District");
            }).text().trim();
            district = district.slice(9);

                        // Extract and trim name
            let name = $(this).parent().find('span.info span a').text();
                name = name.split('Details')[0].trim();
            const lastName = name.split(',')[0].trim();
            const firstName = name.split(',')[1] ? name.split(',')[1].trim() : '';
            const repName = firstName + ' ' + lastName;
           

            representive.push({
                repName,
                firstName,
                lastName,
                email,
                emailURL,
                location,
                zipCode, 
                district,
            })
        })
        console.log(representive)


    // Write the scraped data to a file
    fs.writeFile('output.txt',  JSON.stringify(representive, null, 2), (err) => {
      if (err) throw err;
      console.log('Data has been written to output.txt');
    });
  })
  .catch(error => {
    console.error('Error fetching the URL:', error);
  });
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))

