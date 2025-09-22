import Database from "better-sqlite3";

const db = new Database("resume.db");

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS personal_info (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    name TEXT,
    name_kana TEXT,
    dob TEXT, -- YYYYMMDD
    region TEXT,
    phone TEXT,
    email TEXT,
    photo_url TEXT,
    last_updated INTEGER
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS education (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    start_date TEXT, -- YYYYMM
    end_date TEXT,
    school TEXT,
    school_jp TEXT,
    notes TEXT,
    notes_jp TEXT,
    sort_ind INTEGER DEFAULT 0
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS work_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    start_date TEXT,
    end_date TEXT,
    company TEXT,
    company_jp TEXT,
    title TEXT,
    title_jp TEXT,
    desc TEXT,
    desc_jp TEXT,
    is_current INTEGER DEFAULT 0,
    sort_ind INTEGER DEFAULT 0
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS skills (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    skill TEXT,
    years INTEGER
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS certifications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cert TEXT,
    cert_jp TEXT,
    date_obtained TEXT
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS self_pr (
    id INTEGER PRIMARY KEY,
    text TEXT,
    text_jp TEXT
  )
`);

console.log("Database tables created successfully.");
