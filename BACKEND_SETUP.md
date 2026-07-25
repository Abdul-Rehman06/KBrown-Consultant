# Backend (Laravel) Setup

This project now includes a Laravel backend under [api](file:///c:/xampp/htdocs/kbrown/api) that provides:
- Secure admin login (token-based)
- Resources CRUD (eBooks + Guides)
- Public resources API consumed by the React website

## Local Setup (XAMPP)

### 1) Create a MySQL database
- Start Apache + MySQL in XAMPP
- Create a database (example): `kbrown`

### 2) Configure Laravel environment
In [api](file:///c:/xampp/htdocs/kbrown/api):

```bash
copy .env.example .env
php artisan key:generate
```

Update `.env` with your local MySQL credentials:

```env
APP_URL=http://127.0.0.1:8001

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=kbrown
DB_USERNAME=root
DB_PASSWORD=

ADMIN_USERNAME=admin
ADMIN_PASSWORD=SET_A_STRONG_PASSWORD
ADMIN_EMAIL=admin@kbrownconsultant.com
```

### 3) Install + migrate
```bash
cd api
composer install
php artisan migrate --seed
```

### 4) Run Laravel backend
```bash
php artisan serve --host=127.0.0.1 --port=8001
```

### 5) Run React frontend
React uses `/api/...` endpoints. For local dev, Vite proxies `/api` to `http://127.0.0.1:8001` via [vite.config.ts](file:///c:/xampp/htdocs/kbrown/vite.config.ts).

```bash
npm install
npm run dev
```

### 6) Admin panel
- Login: `http://localhost:5173/admin/login`
- Dashboard: `http://localhost:5173/admin`

## Deployment Plan (Hostinger: same domain `/api`)

Goal:
- React stays in `public_html/` (static)
- Laravel backend lives inside `public_html/api/`
- React calls `https://kbrownconsultant.com/api/...`

High-level steps:
1) Upload the Laravel project folder to `public_html/api` (the Laravel entry point is `api/public/index.php`)
2) Ensure Apache rewrites are enabled and `public_html/api/public/.htaccess` is present (Laravel ships it)
3) Create a Hostinger MySQL DB + user, then set Laravel `.env` accordingly on the server
4) Run `php artisan migrate --seed` on server (needs SSH + PHP + Composer access)

If your Hostinger plan does not allow Composer/Artisan, the alternative is to deploy the backend to a VPS or a PHP host that supports Composer, and keep the frontend on Hostinger.

