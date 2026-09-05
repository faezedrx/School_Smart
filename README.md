# School Smart — Interactive Demo

A portfolio-ready interactive demo of a school management platform.

## Why this version exists

This repository is intentionally **backend-free** for public GitHub / LinkedIn presentation. It is not a static mockup: the main workflows are functional and persist changes in the browser.

### Demo architecture

- Vanilla JavaScript UI and business logic
- `localStorage` as a temporary demo data store
- Cookie-based demo session with LocalStorage fallback when opened directly as `file://`
- Mock repository/API layer in `assets/js/api.js`
- Seed data in `data/demo-data.js`
- No MySQL / PostgreSQL
- No PHP
- No server-side authentication
- No real user data
- No uploaded/private files

The frontend is structured so a future production version can replace the local `DemoAPI` implementation with a real HTTP API without redesigning the UI flows.

## Functional demo flows

- Login with four roles: Admin, Teacher, Student, Parent
- Role-based navigation
- Dashboard metrics
- Student CRUD
- Teacher CRUD
- Parent CRUD
- Class CRUD
- Grade creation/deletion
- Attendance updates
- Assignment creation/deletion
- Announcement creation/deletion
- Search and filtering
- Browser persistence after refresh
- Demo reset to seed state
- Responsive RTL interface

## Demo accounts

| Role | Username | Password |
|---|---|---|
| Admin | `admin` | `demo123` |
| Teacher | `teacher` | `demo123` |
| Student | `student` | `demo123` |
| Parent | `parent` | `demo123` |

## Run locally

No build step is required.

1. Open `index.html` directly in a browser **or** serve the folder with any static web server. Direct `file://` opening is supported; the demo uses a LocalStorage fallback if the browser blocks cookies on local files.
2. Log in using one of the demo accounts.
3. Change data, refresh the page, and verify that changes persist.
4. Use **Reset Demo** to restore the original seed data.

For GitHub Pages, publish the repository as a static site. The application does not require a backend server.

## Production path

For a paid/production edition, replace the implementation behind `DemoAPI` with a real API and database layer:

```text
Current Demo
UI → DemoAPI → LocalStorage/Cookie

Production
UI → API → Auth + Database + File Storage
```

The current demo is therefore a product showcase layer, not a replacement for production security or persistence.

## Privacy note

This public demo contains fictional sample data only. Do not add real customer/student information to this repository.
