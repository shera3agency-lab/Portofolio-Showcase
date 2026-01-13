// Projects Data Array
const projects = [
    { title: "أطياب العالمية", url: "https://atiabintl.com/ar-eg/", cat: "zid" },
    { title: "Zenith Store", url: "https://zenithstore.zid.store/", cat: "zid" },
    { title: "Mkahel", url: "https://mkahel.sa/", cat: "zid" },
    { title: "Everyday KSA", url: "https://everydayksa.com/", cat: "zid" },
    { title: "Protak Metal", url: "https://protakmetaleg.com/", cat: "wordpress" },
    { title: "Refd Services", url: "https://www.refdservices.com/", cat: "wordpress" },
    { title: "Beyond Creativity", url: "https://beyondcreativity.sa/", cat: "wordpress" },
    { title: "جمعية ورفة", url: "https://warfah.org/", cat: "wordpress" },
    { title: "Sky Color", url: "https://skycolorksa.com/", cat: "wordpress" },
    { title: "Velvaya Store", url: "https://velvayastor.com/", cat: "wordpress" },
    { title: "Partners & Beyond", url: "https://partnersandbeyond.com/", cat: "wordpress" },
    { title: "Ivory Uniform", url: "https://ivoryuniformsa.com/", cat: "salla" },
    { title: "Tora SA", url: "https://tora-sa.com/", cat: "salla" },
    { title: "Kohl Alward", url: "https://kohlalward.com/ar", cat: "salla" },
    { title: "Captain Majid", url: "https://captainmajidc.com/ar", cat: "salla" },
    { title: "Dooja Shop", url: "https://doojashop.com/", cat: "salla" },
    { title: "Antika Store", url: "https://antika-store.com/", cat: "salla" },
    { title: "The Bloom Bottle", url: "https://www.thebloombottle.com/", cat: "shopify" }
];

/**
 * Renders all projects into the container
 */
function renderProjects() {
    const container = document.getElementById('projectsContainer');
    if (!container) return;

    container.innerHTML = projects.map((p, index) => `
        <div class="project-item glass-card" data-category="${p.cat}" data-aos="fade-up" data-aos-delay="${(index % 4) * 100}">
            <div class="screenshot-container">
                <img src="https://image.thum.io/get/width/600/crop/800/noanimate/${p.url}" 
                     alt="${p.title}" 
                     loading="lazy"
                     onerror="this.onerror=null; this.src='https://via.placeholder.com/600x400/001a2c/00f2ff?text=Preview+Unavailable';">
                <div class="absolute top-3 right-3">
                    <span class="px-2 py-1 bg-black/60 backdrop-blur-md text-cyan-400 text-[10px] rounded border border-white/10 uppercase font-bold tracking-widest">${p.cat}</span>
                </div>
            </div>
            <div class="p-6">
                <h4 class="text-xl font-bold text-white mb-4 line-clamp-1">${p.title}</h4>
                <div class="flex justify-between items-center">
                    <span class="text-slate-500 text-sm font-medium">Website Preview</span>
                    <a href="${p.url}" target="_blank" class="inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-white transition-colors group">
                        زيارة الموقع 
                        <span class="group-hover:translate-x-[-4px] transition-transform">←</span>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Filters project grid by category
 */
function filterProjects(category, btn) {
    // Update active tab UI
    document.querySelectorAll('.category-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Filter items
    const items = document.querySelectorAll('.project-item');
    items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 10);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// Initialize on Window Load
window.onload = () => {
    renderProjects();
    // Initialize AOS Animation library
    if (typeof AOS !== 'undefined') {
        AOS.init({ 
            duration: 800, 
            easing: 'ease-out-cubic', 
            once: true 
        });
    }
};