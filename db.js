// Install with: npm install mysql2
import { createConnection } from 'mysql2';

const connection = createConnection({
  host: '',
  user: '',
  password: '',
  database: 'your_database'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});
