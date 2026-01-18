# AGENTS.md - Coconut Forest Export Website

## Konteks Proyek

Proyek ini adalah website untuk **Coconut Forest**, sebuah perusahaan exportir produk kelapa. Website dibangun menggunakan **SvelteKit** dengan **Bun** sebagai package manager dan runtime.

### Tema Visual
Desain mengikuti tema **kelapa dan tropis** dengan palet warna:
- **Hijau Kelapa** (`#2e7d32`, `#1a5f1a`) - Daun kelapa, alam
- **Coklat** (`#6d4c41`) - Batang dan kulit kelapa
- **Beige/Cream** (`#f5f1e8`, `#fff8f0`) - Daging kelapa
- **Tan/Sand** (`#d4a574`, `#e8ddd4`) - Warna pasir tropis

### Filosofi Desain
- **Natural & Organic**: Menggunakan warna alam, tekstur tropis
- **Clean & Modern**: Layout bersih dengan spacing yang baik
- **Elegant Typography**: Playfair Display untuk headings, Poppins untuk body
- **Responsive First**: Mobile-first approach dengan breakpoints yang jelas

---

## Tools & Teknologi

### Stack
- **Framework**: SvelteKit (latest)
- **Package Manager**: Bun (not npm/yarn/pnpm)
- **Build Tool**: Vite
- **Language**: JavaScript (TypeScript ready)
- **Styling**: Vanilla CSS dengan CSS Variables

### Package Installation
```bash
# Gunakan BUN, bukan npm
bun install

# Development
bun run dev

# Build
bun run build

# Preview
bun run preview
```

### MCP References
Gunakan **Ref MCP** untuk dokumentasi:
- **SvelteKit Docs**: Cek dokumentasi SvelteKit untuk routing, data loading, server-side rendering
- **Svelte Docs**: Referensi komponen Svelte, reactivity, stores
- **Vite Docs**: Konfigurasi build dan development server

Ketika membuat komponen atau fitur baru, gunakan Ref MCP untuk memastikan:
- Best practices SvelteKit
- Aksesibilitas (a11y)
- Performance optimization
- SEO considerations

---

## Struktur Proyek

```
coconutforest/
├── static/                    # Static assets (served from root)
│   └── images/               # Semua gambar
├── src/
│   ├── lib/
│   │   └── components/       # Komponen Svelte reusable
│   │       ├── Navigation.svelte
│   │       ├── Hero.svelte
│   │       ├── About.svelte
│   │       ├── Features.svelte
│   │       ├── Products.svelte
│   │       ├── Team.svelte
│   │       ├── Contact.svelte
│   │       └── Footer.svelte
│   ├── routes/               # SvelteKit routes
│   │   ├── +layout.svelte   # Layout wrapper
│   │   └── +page.svelte     # Homepage
│   ├── app.css              # Global styles & CSS variables
│   ├── app.d.ts             # TypeScript definitions
│   └── app.html             # HTML template
├── svelte.config.js         # SvelteKit configuration
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies (use Bun)
└── AGENTS.md               # This file
```

---

## Style Guidelines

### CSS Variables (src/app.css)
Semua warna dan spacing menggunakan CSS variables untuk konsistensi:

```css
--coconut-green-dark: #1a5f1a;
--coconut-green: #2e7d32;
--coconut-green-light: #4caf50;
--coconut-beige: #f5f1e8;
--coconut-brown: #6d4c41;
--coconut-tan: #d4a574;
--coconut-cream: #fff8f0;
```

### Typography
- **Headings**: `'Playfair Display', serif` - Elegant, serif font untuk judul
- **Body**: `'Poppins', sans-serif` - Modern, readable sans-serif untuk teks
- **Font Sizes**: Menggunakan `clamp()` untuk responsive typography

### Spacing & Layout
- **Container**: Max-width 1200px dengan padding responsif
- **Section Padding**: 80px (desktop), 50px (mobile)
- **Gap**: 20px, 30px, 40px, 60px untuk berbagai spacing needs

### Animations & Transitions
- **Fade-in**: Untuk elemen yang muncul saat scroll (IntersectionObserver)
- **Hover Effects**: Transform, shadow changes, color transitions
- **Duration**: 0.2s (fast), 0.3s (base), 0.5s (slow)
- **Easing**: `ease`, `ease-out`, `ease-in-out`

---

## Komponen Guidelines

### 1. Struktur Komponen
Setiap komponen Svelte harus mengikuti struktur:
```svelte
<script>
  // Logic & state
</script>

<!-- Markup -->

<style>
  /* Scoped styles */
</style>
```

### 2. Props & Events
- Gunakan `export let` untuk props
- Gunakan `dispatch` untuk custom events jika perlu
- Dokumentasikan props di komentar jika diperlukan

### 3. Responsive Design
- Gunakan mobile-first approach
- Breakpoints: 480px, 640px, 768px, 968px, 1200px
- Test di berbagai ukuran layar

### 4. Accessibility
- **Alt text** untuk semua images
- **ARIA labels** untuk interactive elements
- **Keyboard navigation** support
- **Focus states** yang jelas
- **Semantic HTML** (nav, section, article, etc.)

### 5. Performance
- **Lazy loading** untuk images di bawah fold
- **IntersectionObserver** untuk scroll animations (jangan gunakan scroll events)
- **CSS transforms** instead of position changes untuk animations
- **Debounce/throttle** untuk event handlers jika perlu

---

## Section-by-Section Guide

### Navigation
- Fixed position saat scroll
- Smooth scroll ke anchor links
- Mobile hamburger menu
- Active state pada current section

### Hero
- Full viewport height
- Background image dengan overlay
- Call-to-action buttons
- Scroll indicator

### About
- Two-column layout (image + text)
- Statistics showcase
- Fade-in animation saat scroll

### Features
- Grid layout (2 columns desktop, 1 mobile)
- Icon + title + description
- Hover effects dengan elevation

### Products
- Card grid dengan hover overlay
- Modal popup untuk detail
- Image lazy loading

### Team
- Carousel/slider untuk team members
- Auto-advance dengan manual controls
- Quote styling

### Contact
- Form dengan validation
- WhatsApp integration button
- Success/error messages

### Footer
- Links to all sections
- Contact information
- Dark background dengan gradient

---

## Best Practices

### DO ✅
- Gunakan **Bun** untuk semua package management
- Gunakan **Ref MCP** untuk referensi dokumentasi sebelum coding
- Follow existing code style dan patterns
- Test responsivitas di berbagai devices
- Optimize images sebelum menambahkannya
- Gunakan semantic HTML
- Maintain consistent spacing dan typography

### DON'T ❌
- Jangan gunakan npm/yarn/pnpm (gunakan Bun)
- Jangan hardcode warna (gunakan CSS variables)
- Jangan inline style (kecuali dynamic values)
- Jangan skip accessibility features
- Jangan lupa alt text untuk images
- Jangan gunakan jQuery atau library berat (vanilla JS only)
- Jangan import CSS libraries besar (kami pakai vanilla CSS)

---

## Workflow untuk Agen/AI

### Saat Membuat Komponen Baru
1. **Check Ref MCP** untuk SvelteKit best practices
2. Ikuti struktur folder yang ada (`src/lib/components/`)
3. Gunakan CSS variables dari `app.css`
4. Implement responsive design
5. Add accessibility features
6. Test hover states dan animations

### Saat Memodifikasi Komponen Existing
1. **Check Ref MCP** untuk update terbaru pada API yang digunakan
2. Maintain consistency dengan komponen lain
3. Update styles mengikuti theme colors
4. Test semua breakpoints

### Saat Menambah Fitur Baru
1. Diskusikan dengan user apakah perlu section baru atau extend existing
2. Follow design patterns yang sudah ada
3. Integrate dengan existing navigation jika perlu
4. Update documentation di AGENTS.md jika ada perubahan significant

---

## Troubleshooting

### Build Errors
- Pastikan menggunakan **Bun**, bukan npm
- Clear `.svelte-kit` folder: `rm -rf .svelte-kit`
- Reinstall dependencies: `bun install`

### Images Not Showing
- Pastikan images ada di `static/images/` (bukan `images/`)
- Path harus dimulai dengan `/images/` (not `./images/`)

### Styling Issues
- Check CSS variables di `app.css`
- Pastikan scoped styles tidak conflict
- Verify responsive breakpoints

---

## Resources

### External
- [SvelteKit Documentation](https://kit.svelte.dev)
- [Svelte Documentation](https://svelte.dev)
- [Bun Documentation](https://bun.sh)
- [Vite Documentation](https://vitejs.dev)

### MCP
- Gunakan **Ref MCP** untuk:
  - SvelteKit API references
  - Svelte component patterns
  - Vite configuration help
  - Accessibility guidelines

---

**Note untuk Agen/AI**: Ketika bekerja pada proyek ini, selalu refer ke Ref MCP untuk memastikan implementasi mengikuti best practices terbaru. Gunakan Bun untuk semua package operations. Maintain konsistensi dengan design system yang sudah ada.
