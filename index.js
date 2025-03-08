const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

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
            let location = $('.info.voting_address:contains("Voting Address")').first().text().replace(/\n/g, '').trim()
            location = location.replace('Voting Address:', '').trim()
    
            // Extract zip code from location
            const zipCodeMatch = location.match(/\b\d{5}(?:-\d{4})?\b/);
            const zipCode = zipCodeMatch ? zipCodeMatch[0] : null;


            // Extract district information
            const district = $(this).parent().find('small').filter(function() {
                return $(this).text().includes("District");
            }).text().trim();

                        // Extract and trim name
            let name = $(this).parent().find('span.info span a').text();
            name = name.split('Details')[0].trim();
           

            representive.push({
                name,
                email,
                emailURL,
                location,
                zipCode, 
                district,
            })
        })
        console.log(representive)
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))

