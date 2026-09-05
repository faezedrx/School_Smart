(function () {
  const nextId = (items) => items.length ? Math.max(...items.map(x => Number(x.id) || 0)) + 1 : 1;
  const activity = (db, text) => {
    db.activity.unshift({ id: nextId(db.activity), text, date: 'همین الان' });
    db.activity = db.activity.slice(0, 12);
  };

  window.DemoAPI = {
    db() { return Store.get(); },
    currentUser() {
      const username = Store.session();
      if (!username) return null;
      return Store.get().users.find(u => u.username === username) || null;
    },
    login(username, password) {
      const user = Store.get().users.find(u => u.username === username && u.password === password && u.status === 'active');
      if (!user) return { ok: false, message: 'نام کاربری یا رمز عبور نادرست است.' };
      Store.setSession(user.username);
      return { ok: true, user };
    },
    logout() { Store.clearSession(); },
    reset() { Store.reset(); },
    add(collection, item, logText) {
      const db = Store.get(); item.id = nextId(db[collection]); db[collection].push(item); if (logText) activity(db, logText); Store.save(db); return item;
    },
    update(collection, id, patch, logText) {
      const db = Store.get(); const item = db[collection].find(x => Number(x.id) === Number(id)); if (!item) return null;
      Object.assign(item, patch); if (logText) activity(db, logText); Store.save(db); return item;
    },
    remove(collection, id, logText) {
      const db = Store.get(); const before = db[collection].length; db[collection] = db[collection].filter(x => Number(x.id) !== Number(id));
      if (before !== db[collection].length && logText) activity(db, logText); Store.save(db); return before !== db[collection].length;
    },
    addGrade(payload) {
      const db = Store.get(); const subject = db.subjects.find(s => s.id == payload.subjectId); const student = db.students.find(s => s.id == payload.studentId);
      const grade = { id: nextId(db.grades), studentId: +payload.studentId, subjectId: +payload.subjectId, score: +payload.score, type: payload.type, term: payload.term };
      db.grades.push(grade); activity(db, `ثبت نمره ${grade.score} برای ${student?.name || 'دانش‌آموز'} در ${subject?.name || 'درس'}`); Store.save(db); return grade;
    },
    setAttendance(studentId, status) {
      const db = Store.get(); const date = new Date().toISOString().slice(0, 10); let item = db.attendance.find(a => a.studentId == studentId && a.date === date);
      if (item) item.status = status; else item = { id: nextId(db.attendance), studentId: +studentId, date, status }, db.attendance.push(item);
      const student = db.students.find(s => s.id == studentId); activity(db, `تغییر حضور و غیاب ${student?.name || ''}`); Store.save(db); return item;
    }
  };
})();
