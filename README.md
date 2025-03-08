# wisconsin-legislators-scraper
https://docs.legis.wisconsin.gov/2025/legislators/assembly

Wisconsin-legislators-scraper is a Node.js web scraper using Axios, Cheerio, and Express. It fetches data from the Wisconsin legislators' assembly page, extracts information such as email, location, zip code, district, and name of representatives, and logs the collected data. The extracted data is printed to the console.

<pre>
Example of output:
{
    "repName": "Paul Tittl",
    "firstName": "Paul",
    "lastName": "Tittl",
    "email": "Rep.Tittl@legis.wisconsin.gov",
    "emailURL": "mailto:Rep.Tittl@legis.wisconsin.gov",
    "location": "Rheaume Rd.Manitowoc, WI 54220",
    "zipCode": "54220",
    "district": "25"
  },
</pre>

then use node transform.js to convert textfile to json using the zip as identifier

Example output:
<pre>
  "53158": [
    {
      "repName": "Amanda Nedweski",
      "firstName": "Amanda",
      "lastName": "Nedweski",
      "email": "Rep.Nedweski@legis.wisconsin.gov",
      "emailURL": "mailto:Rep.Nedweski@legis.wisconsin.gov",
      "location": "Pleasant Prairie, WI 53158",
      "zipCode": "53158",
      "district": "32"
    }
  ],
</pre>
