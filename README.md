# wisconsin-legislators-scraper
https://docs.legis.wisconsin.gov/2025/legislators/assembly

Wisconsin-legislators-scraper is a Node.js web scraper using Axios, Cheerio, and Express. It fetches data from the Wisconsin legislators' assembly page, extracts information such as email, location, zip code, district, and name of representatives, and logs the collected data. The extracted data is printed to the console.

<pre>
Example of output:
{
    name: 'Zimmerman, Shannon',
    email: 'Rep.Zimmerman@legis.wisconsin.gov',
    emailURL: 'mailto:Rep.Zimmerman@legis.wisconsin.gov',
    location: 'Waukesha, WI 53188',
    zipCode: '53188',
    district: 'District 30'
  }
</pre>
