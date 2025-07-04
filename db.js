// Install with: npm install mysql2
import { createConnection } from 'mysql2';

const connection = createConnection({
  host: '192.168.0.133',
  user: 'depeddavsur',
  password: '@Deped2025',
  database: 'your_database'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});
