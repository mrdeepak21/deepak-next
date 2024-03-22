import fs from 'fs';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      let data = Object.values(req.body);
      let string = '';

      data.forEach(element => {
        string+= `"${element}",`;
      });
      string+= `\n`;

      // Write the CSV data to the file
      fs.appendFileSync('submission.csv', string);

      res.status(200).json({ message: 'Data Saved!' });
      
    } catch (error) {
      res.status(500).json({ message: '5xx Error saving data' });
    }
  } else {
    res.status(405).json({ message: '404 not found!' });
  }
}