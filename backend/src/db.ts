import Database from 'better-sqlite3';


export async function initDB() {
  const db = new Database(__dirname + '/resume.sqlite');
//     db.exec(`
//     CREATE TABLE IF NOT EXISTS personal_info (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       name TEXT,
//       dob TEXT,
//       city TEXT,
//       phone TEXT,
//       email TEXT
//     );
//     CREATE TABLE IF NOT EXISTS education (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       school TEXT,
//       degree TEXT,
//       start TEXT,
//       end TEXT,
//       description TEXT
//     );
//     CREATE TABLE IF NOT EXISTS experience (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       company TEXT,
//       title TEXT,
//       start TEXT,
//       end TEXT,
//       description TEXT
//     );
//     CREATE TABLE IF NOT EXISTS skills (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       skill TEXT,
//       category TEXT
//     );
//   `);

  return db;
}