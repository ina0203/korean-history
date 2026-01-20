const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const DB_PATH = path.join(__dirname, '../data/korean-history.db');

let db = null;

const getConnection = () => {
  return new Promise((resolve, reject) => {
    db = new sqlite3.Database(DB_PATH, (err) => {
      if (err) reject(err);
      else resolve(db);
    });
  });
};

const initialize = async () => {
  const db = await getConnection();
  
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      // 역사 시대 테이블
      db.run(`
        CREATE TABLE IF NOT EXISTS history_periods (
          id INTEGER PRIMARY KEY,
          name TEXT NOT NULL,
          era TEXT NOT NULL,
          start_year INTEGER,
          end_year INTEGER,
          description TEXT,
          level INTEGER DEFAULT 1
        )
      `);

      // 역사 사건 테이블
      db.run(`
        CREATE TABLE IF NOT EXISTS history_events (
          id INTEGER PRIMARY KEY,
          period_id INTEGER NOT NULL,
          year INTEGER,
          title TEXT NOT NULL,
          description TEXT,
          importance INTEGER,
          FOREIGN KEY (period_id) REFERENCES history_periods(id)
        )
      `);

      // 퀴즈 테이블
      db.run(`
        CREATE TABLE IF NOT EXISTS quizzes (
          id INTEGER PRIMARY KEY,
          period_id INTEGER NOT NULL,
          question TEXT NOT NULL,
          question_type TEXT,
          correct_answer TEXT NOT NULL,
          options TEXT,
          level INTEGER DEFAULT 1,
          grade_level INTEGER DEFAULT 1,
          explanation TEXT,
          FOREIGN KEY (period_id) REFERENCES history_periods(id)
        )
      `);

      // 사용자 진행도 테이블 (게임화 시스템 추가)
      db.run(`
        CREATE TABLE IF NOT EXISTS user_progress (
          id INTEGER PRIMARY KEY,
          user_id TEXT NOT NULL,
          current_level INTEGER DEFAULT 1,
          total_correct INTEGER DEFAULT 0,
          total_attempted INTEGER DEFAULT 0,
          total_score INTEGER DEFAULT 0,
          current_streak INTEGER DEFAULT 0,
          max_streak INTEGER DEFAULT 0,
          accuracy INTEGER DEFAULT 0,
          last_studied_period INTEGER,
          badges TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);

      // 복습 목록 테이블
      db.run(`
        CREATE TABLE IF NOT EXISTS review_queue (
          id INTEGER PRIMARY KEY,
          user_id TEXT NOT NULL,
          quiz_id INTEGER NOT NULL,
          period_id INTEGER NOT NULL,
          attempts INTEGER DEFAULT 0,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (quiz_id) REFERENCES quizzes(id),
          FOREIGN KEY (period_id) REFERENCES history_periods(id)
        )
      `, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  });
};

const query = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject(new Error('데이터베이스가 초기화되지 않았습니다.'));
      return;
    }
    
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows || []);
    });
  });
};

const run = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject(new Error('데이터베이스가 초기화되지 않았습니다.'));
      return;
    }
    
    db.run(sql, params, function(err) {
      if (err) reject(err);
      else resolve({ id: this.lastID, changes: this.changes });
    });
  });
};

module.exports = {
  initialize,
  getConnection,
  query,
  run
};
