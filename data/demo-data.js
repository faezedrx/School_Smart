window.DEMO_SEED = {
  users: [
    { id: 1, username: 'admin', password: 'demo123', name: 'مدیر دمو', role: 'admin', status: 'active' },
    { id: 2, username: 'teacher', password: 'demo123', name: 'سارا رضایی', role: 'teacher', status: 'active' },
    { id: 3, username: 'student', password: 'demo123', name: 'آرین کاظمی', role: 'student', status: 'active' },
    { id: 4, username: 'parent', password: 'demo123', name: 'مریم کاظمی', role: 'parent', status: 'active' }
  ],
  students: [
    { id: 101, name: 'آرین کاظمی', code: 'ST-1001', classId: 1, status: 'active', average: 18.7, attendance: 96 },
    { id: 102, name: 'هلیا احمدی', code: 'ST-1002', classId: 1, status: 'active', average: 17.9, attendance: 92 },
    { id: 103, name: 'پارسا نادری', code: 'ST-1003', classId: 2, status: 'active', average: 19.1, attendance: 98 },
    { id: 104, name: 'نیلا مرادی', code: 'ST-1004', classId: 2, status: 'active', average: 16.8, attendance: 89 },
    { id: 105, name: 'یونا کریمی', code: 'ST-1005', classId: 3, status: 'active', average: 18.2, attendance: 94 },
    { id: 106, name: 'رها محمدی', code: 'ST-1006', classId: 3, status: 'inactive', average: 15.6, attendance: 81 }
  ],
  teachers: [
    { id: 201, name: 'سارا رضایی', code: 'TC-201', subject: 'ریاضی', status: 'active' },
    { id: 202, name: 'امیر حسینی', code: 'TC-202', subject: 'علوم', status: 'active' },
    { id: 203, name: 'نگار احمدی', code: 'TC-203', subject: 'زبان انگلیسی', status: 'active' }
  ],
  parents: [
    { id: 301, name: 'مریم کاظمی', studentId: 101, relation: 'مادر', status: 'active' },
    { id: 302, name: 'رضا احمدی', studentId: 102, relation: 'پدر', status: 'active' },
    { id: 303, name: 'الهام نادری', studentId: 103, relation: 'مادر', status: 'active' }
  ],
  classes: [
    { id: 1, name: 'هفتم الف', grade: 'هفتم', teacherId: 201, capacity: 25 },
    { id: 2, name: 'هفتم ب', grade: 'هفتم', teacherId: 202, capacity: 25 },
    { id: 3, name: 'هشتم الف', grade: 'هشتم', teacherId: 203, capacity: 25 }
  ],
  subjects: [
    { id: 401, name: 'ریاضی', teacherId: 201, weeklyHours: 4 },
    { id: 402, name: 'علوم', teacherId: 202, weeklyHours: 3 },
    { id: 403, name: 'زبان انگلیسی', teacherId: 203, weeklyHours: 3 },
    { id: 404, name: 'ادبیات فارسی', teacherId: 201, weeklyHours: 2 }
  ],
  grades: [
    { id: 501, studentId: 101, subjectId: 401, score: 19, type: 'exam', term: 'نوبت اول' },
    { id: 502, studentId: 101, subjectId: 402, score: 18, type: 'continuous', term: 'نوبت اول' },
    { id: 503, studentId: 101, subjectId: 403, score: 19, type: 'project', term: 'نوبت اول' },
    { id: 504, studentId: 102, subjectId: 401, score: 17, type: 'exam', term: 'نوبت اول' },
    { id: 505, studentId: 103, subjectId: 401, score: 20, type: 'exam', term: 'نوبت اول' },
    { id: 506, studentId: 104, subjectId: 402, score: 16, type: 'exam', term: 'نوبت اول' },
    { id: 507, studentId: 105, subjectId: 403, score: 18, type: 'continuous', term: 'نوبت اول' }
  ],
  attendance: [
    { id: 601, studentId: 101, date: '2026-09-03', status: 'present' },
    { id: 602, studentId: 102, date: '2026-09-03', status: 'late' },
    { id: 603, studentId: 103, date: '2026-09-03', status: 'present' },
    { id: 604, studentId: 104, date: '2026-09-03', status: 'absent' },
    { id: 605, studentId: 105, date: '2026-09-03', status: 'present' }
  ],
  assignments: [
    { id: 701, title: 'تمرین فصل دوم ریاضی', subjectId: 401, classId: 1, deadline: '2026-09-08', status: 'open', submissions: 14 },
    { id: 702, title: 'گزارش آزمایش علوم', subjectId: 402, classId: 2, deadline: '2026-09-10', status: 'open', submissions: 11 },
    { id: 703, title: 'Vocabulary Practice', subjectId: 403, classId: 3, deadline: '2026-09-12', status: 'open', submissions: 8 }
  ],
  announcements: [
    { id: 801, title: 'جلسه اولیا و مربیان', text: 'جلسه معرفی برنامه آموزشی ترم جدید در سالن اجتماعات برگزار می‌شود.', date: '2026-09-04', type: 'info' },
    { id: 802, title: 'به‌روزرسانی برنامه هفتگی', text: 'برنامه کلاس‌ها برای هفته آینده در پنل قرار گرفت.', date: '2026-09-02', type: 'success' }
  ],
  messages: [
    { id: 901, from: 'مدیر دمو', toRole: 'teacher', subject: 'یادآوری ثبت نمرات', text: 'لطفاً نمرات نوبت اول را تا پایان هفته تکمیل کنید.', date: '2026-09-04', read: false }
  ],
  activity: [
    { id: 1001, text: 'ثبت نمره برای آرین کاظمی', date: 'امروز، 09:42' },
    { id: 1002, text: 'به‌روزرسانی حضور و غیاب هفتم الف', date: 'امروز، 08:30' },
    { id: 1003, text: 'ایجاد تکلیف جدید', date: 'دیروز، 16:10' }
  ]
};
