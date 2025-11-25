# Password Gate Setup

Your site now has a password gate to keep it private during development.

## How It Works

1. **Any visitor** trying to access your site will be redirected to `/gate`
2. They must **enter the correct password** to access the site
3. Once authenticated, a **secure cookie** is set for 24 hours
4. Visitors can browse freely during that session

## Current Setup

**Default Password:** `preview2025`

This password is stored in `.env.local` file (local) and will need to be set in Vercel (production).

## Changing the Password

### For Local Development:
Edit `/Users/admin/CodeFiles/WildSafeDefense-Main/nextjs-app/.env.local`:
```
SITE_PASSWORD=your-new-password
```

### For Production (Vercel):
1. Go to your Vercel project dashboard
2. Navigate to **Settings → Environment Variables**
3. Add new variable:
   - **Key:** `SITE_PASSWORD`
   - **Value:** `your-password-here`
   - **Environment:** Production (and Preview if needed)
4. Click **Save**
5. **Redeploy** your site for changes to take effect

## Files Created

- **`middleware.ts`** - Intercepts all requests and checks for access cookie
- **`app/gate/page.tsx`** - Password entry page UI
- **`app/api/gate/route.ts`** - API endpoint that validates password and sets cookie
- **`.env.local`** - Local environment variables (NOT committed to git)

## Security Features

✓ Password stored in environment variable (not in code)
✓ HttpOnly cookies (can't be accessed by JavaScript)
✓ Secure flag in production (HTTPS only)
✓ SameSite strict (prevents CSRF attacks)
✓ 24-hour expiration

## Removing the Gate Later

When you're ready to make the site public:

1. Delete these files:
   - `nextjs-app/middleware.ts`
   - `nextjs-app/app/gate/page.tsx`
   - `nextjs-app/app/api/gate/route.ts`

2. Remove from Vercel:
   - Delete the `SITE_PASSWORD` environment variable
   - Redeploy

## Testing Locally

```bash
cd nextjs-app
npm run dev
```

Visit http://localhost:3000 - you should see the password gate!

## Next Steps

1. **Set the password in Vercel** (see instructions above)
2. **Commit and push** your changes to GitHub
3. **Vercel will auto-deploy** with the new gate in place
4. **Test on your live site** - make sure the gate works!

---

**Need help?** The password gate is simple to remove or modify at any time.
