import Database from "better-sqlite3";

const db = new Database("resume.db");

// Create tables
db.prepare(`
  CREATE TABLE IF NOT EXISTS personal_info (
    id INTEGER PRIMARY KEY,
    name TEXT,
    dob TEXT,
    region TEXT,
    phone TEXT,
    email TEXT
  )
`).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS education (
    id INTEGER PRIMARY KEY,
    start_date TEXT,
    end_date TEXT,
    school TEXT,
    department TEXT
  )
`).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS work (
    id INTEGER PRIMARY KEY,
    start_date TEXT,
    end_date TEXT,
    company TEXT,
    role TEXT
  )
`).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS skills (
    id INTEGER PRIMARY KEY,
    skill TEXT
  )
`).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS certifications (
    id INTEGER PRIMARY KEY,
    certification TEXT
  )
`).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS self_pr (
    id INTEGER PRIMARY KEY,
    text TEXT
  )
`).run();

console.log("Database tables created successfully.");
