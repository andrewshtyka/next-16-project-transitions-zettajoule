# Next.js 16 Page Transition #2 (Next Transition Router)

**Transition with grid of blocks.**

Live website: https://pt-2-shtyka.vercel.app/ \
Inspired by: https://zetta-joule.com/

**Personal opinion:**
- Great for both simple and complex animation orchestration
- Works in all browsers
- Easy to configure (you can listen to current state, easily)
- A way better alternative to View Transition API


### Install

```bash
npm i
```

<br/>

### Run local server

```bash
npm run dev
```

<br />

---

### ✅ Done:
1. Click on <Link /> leads to the new page.
2. Scroll is blocked when navigation started. Unlocks after animation of transition is finished.
3. Works in all browsers.
4. Reveal animation works for page browser "Back" and "Forward" buttons.

### ⚠️ Nuances:
**By default, browser "Back" and "Forward" buttons don't trigger animation intentionally.** \
Such a behavior provides the UX people expect from websites. Although the creator of Next Transition Router [says](https://github.com/ismamz/next-transition-router/issues/2) it's still possible to implement, but highly NOT recommended.