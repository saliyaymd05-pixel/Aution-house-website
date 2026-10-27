// AuctionHouse - Complete Vanilla JavaScript Interactive Logic

// 30-Item Expanded Inventory
let auctions = [
    { id: 1, title: "Claude Monet — Water Lilies Impressionist Study (1906)", category: "Art & Paintings", subcategory: "Impressionism", description: "An exquisite oil on canvas study capturing atmospheric light across water lily ponds. Framed in antique gilded wood.", startingPrice: 1500000, currentPrice: 1851000, reservePrice: 1700000, seller: "Parisian Fine Art Trust", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80", endDate: "2026-06-30T18:00:00", isPremium: true, bidsCount: 14, bidHistory: [{bidder: "Collector #402", amount: 1851000, time: "2 hours ago"}] },
    { id: 2, title: "Banksy-Inspired Street Art Canvas — Urban Echoes", category: "Art & Paintings", subcategory: "Contemporary Art", description: "A striking urban artwork featuring bold stencil-inspired imagery and a powerful social commentary message.", startingPrice: 25000, currentPrice: 38000, reservePrice: 30000, seller: "London Street Collective", image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-02T20:00:00", isPremium: false, bidsCount: 8, bidHistory: [{bidder: "Anonymous #11", amount: 38000, time: "1 hour ago"}] },
    { id: 3, title: "Original Banksy Artwork — Fictional Collector Showcase", category: "Art & Paintings", subcategory: "Collector's Showcase", description: "A demonstration listing representing contemporary street art. Fictional example; artist attribution unverified.", startingPrice: 500000, currentPrice: 720000, reservePrice: 650000, seller: "Gallery Vanguard", image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-10T15:00:00", isPremium: true, bidsCount: 19, bidHistory: [{bidder: "Mumbai Art Syndicate", amount: 720000, time: "3 hours ago"}] },
    { id: 4, title: "Vintage Oil Painting — European Countryside", category: "Art & Paintings", subcategory: "Landscape", description: "A landscape painting featuring a peaceful countryside scene, warm autumnal colors, and traditional framing.", startingPrice: 18000, currentPrice: 24000, reservePrice: 20000, seller: "Bavarian Estates", image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-05T12:00:00", isPremium: false, bidsCount: 6, bidHistory: [{bidder: "ArtLover99", amount: 24000, time: "5 hours ago"}] },
    { id: 5, title: "Abstract Modern Art — Midnight Dreams", category: "Art & Paintings", subcategory: "Abstract", description: "An expressive abstract composition with deep midnight blues, gold leaf accents, and bold geometric forms.", startingPrice: 12000, currentPrice: 17500, reservePrice: 15000, seller: "Studio Noir", image: "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=800&q=80", endDate: "2026-06-28T19:00:00", isPremium: false, bidsCount: 5, bidHistory: [{bidder: "Modernist #7", amount: 17500, time: "Yesterday"}] },
    { id: 6, title: "Antique Royal Portrait Painting", category: "Art & Paintings", subcategory: "Portraiture", description: "A decorative Victorian-inspired aristocratic portrait in an ornate gilded scrollwork frame.", startingPrice: 35000, currentPrice: 46000, reservePrice: 40000, seller: "Heritage Estates", image: "https://images.unsplash.com/photo-1582561226130-9b422a009477?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-12T14:30:00", isPremium: false, bidsCount: 9, bidHistory: [{bidder: "RegalCollector", amount: 46000, time: "6 hours ago"}] },
    { id: 7, title: "First-Edition Classic Literature Showcase", category: "Rare Books & Manuscripts", subcategory: "First Edition", description: "A fictional example of a first-edition literary collectible featuring embossed hardcover binding and gold leaf spine.", startingPrice: 8000, currentPrice: 12000, reservePrice: 10000, seller: "Oxford Bindery", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-04T16:00:00", isPremium: false, bidsCount: 7, bidHistory: [{bidder: "Bibliophile_IN", amount: 12000, time: "4 hours ago"}] },
    { id: 8, title: "Antique Illustrated Book Collection", category: "Rare Books & Manuscripts", subcategory: "Illustrated", description: "A collection of early 20th-century illustrated volumes featuring hand-colored plates and calfskin bindings.", startingPrice: 15000, currentPrice: 19000, reservePrice: 17000, seller: "Cambridge Antiquarian", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-08T18:00:00", isPremium: false, bidsCount: 6, bidHistory: [{bidder: "BookVault", amount: 19000, time: "12 hours ago"}] },
    { id: 9, title: "Vintage Astronomy Book with Celestial Charts", category: "Rare Books & Manuscripts", subcategory: "Science & Maps", description: "A 1950s illustrated astronomy volume featuring fold-out historical charts of planetary constellations.", startingPrice: 4000, currentPrice: 6500, reservePrice: 5000, seller: "Stellar Archives", image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-01T22:00:00", isPremium: false, bidsCount: 4, bidHistory: [{bidder: "Stargazer", amount: 6500, time: "1 day ago"}] },
    { id: 10, title: "Historical Manuscript Reproduction", category: "Rare Books & Manuscripts", subcategory: "Manuscripts", description: "A decorative medieval-inspired manuscript reproduction featuring gold calligraphy and illuminated borders.", startingPrice: 3500, currentPrice: 5000, reservePrice: 4000, seller: "Scriptorium Arts", image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-15T11:00:00", isPremium: false, bidsCount: 3, bidHistory: [{bidder: "HistoryBuff", amount: 5000, time: "2 days ago"}] },
    { id: 11, title: "Antique Brass Marine Telescope", category: "Antiques & Collectibles", subcategory: "Nautical", description: "An early 20th-century inspired brass telescope with leather grip and traditional optics in a mahogany box.", startingPrice: 12000, currentPrice: 16000, reservePrice: 14000, seller: "Maritime Heritage", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-06T17:00:00", isPremium: false, bidsCount: 5, bidHistory: [{bidder: "CaptainJack", amount: 16000, time: "8 hours ago"}] },
    { id: 12, title: "Vintage Royal Table Clock", category: "Antiques & Collectibles", subcategory: "Clocks", description: "An elegant 1940s-inspired desk clock with Roman numerals, brass filigree, and mechanical movement.", startingPrice: 9000, currentPrice: 13500, reservePrice: 11000, seller: "Swiss Horology Ltd", image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-03T19:30:00", isPremium: false, bidsCount: 7, bidHistory: [{bidder: "TimeKeeper", amount: 13500, time: "3 hours ago"}] },
    { id: 13, title: "Antique Wooden Jewelry Casket", category: "Antiques & Collectibles", subcategory: "Furniture & Decor", description: "A handcrafted wooden box featuring brass inlays, velvet-lined compartments, and traditional carving.", startingPrice: 6000, currentPrice: 8500, reservePrice: 7500, seller: "Carved Woods", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-09T14:00:00", isPremium: false, bidsCount: 4, bidHistory: [{bidder: "Antiquarian", amount: 8500, time: "1 day ago"}] },
    { id: 14, title: "Vintage Brass Oil Lamp", category: "Antiques & Collectibles", subcategory: "Brassware", description: "A decorative traditional brass lamp featuring detailed craftsmanship and a classic silhouette.", startingPrice: 2500, currentPrice: 4000, reservePrice: 3500, seller: "Oriental Curios", image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-11T13:00:00", status: "active", isPremium: false, bidsCount: 3, bidHistory: [{bidder: "BrassCollector", amount: 4000, time: "18 hours ago"}] },
    { id: 15, title: "Historical Coin Collection in Display Case", category: "Antiques & Collectibles", subcategory: "Numismatics", description: "A sample collection of mixed historical period replica and vintage coins presented in velvet showcase.", startingPrice: 7500, currentPrice: 11000, reservePrice: 9500, seller: "Numismatic Guild", image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-07T16:30:00", isPremium: false, bidsCount: 8, bidHistory: [{bidder: "CoinMaster", amount: 11000, time: "5 hours ago"}] },
    { id: 16, title: "Vintage Analog Film Camera Collection", category: "Antiques & Collectibles", subcategory: "Photography", description: "A curated trio of classic mechanical film cameras representing the golden era of analog photography.", startingPrice: 10000, currentPrice: 14500, reservePrice: 12000, seller: "Shutter Heritage", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-14T20:00:00", isPremium: false, bidsCount: 6, bidHistory: [{bidder: "RetroLens", amount: 14500, time: "9 hours ago"}] },
    { id: 17, title: "Rolex Daytona 1964 Heritage Showcase", category: "Luxury & Rare Watches", subcategory: "Vintage Chronograph", description: "A classic racing chronograph-inspired luxury watch with champagne dial and vintage steel bracelet.", startingPrice: 250000, currentPrice: 320000, reservePrice: 300000, seller: "Geneva Vault", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-05T21:00:00", isPremium: true, bidsCount: 12, bidHistory: [{bidder: "WatchCollector_IN", amount: 320000, time: "2 hours ago"}] },
    { id: 18, title: "Rolex Daytona Vintage Collection — 1984", category: "Luxury & Rare Watches", subcategory: "Chronograph", description: "A vintage racing-watch showcase with sophisticated sub-dials and classic oyster bracelet styling.", startingPrice: 300000, currentPrice: 375000, reservePrice: 350000, seller: "Swiss Luxury Group", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-08T19:00:00", isPremium: true, bidsCount: 11, bidHistory: [{bidder: "ApexCollector", amount: 375000, time: "4 hours ago"}] },
    { id: 19, title: "Rolex Daytona Collector's Edition — 1990", category: "Luxury & Rare Watches", subcategory: "Luxury Edition", description: "A luxury chronograph-inspired timepiece featuring tachymeter bezel and immaculate polished finish.", startingPrice: 350000, currentPrice: 410000, reservePrice: 390000, seller: "Chronos Gallery", image: "https://images.unsplash.com/photo-1547996160-81f273155991?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-12T17:00:00", isPremium: true, bidsCount: 10, bidHistory: [{bidder: "HorologyFan", amount: 410000, time: "7 hours ago"}] },
    { id: 20, title: "Luxury Swiss Automatic Skeleton Watch", category: "Luxury & Rare Watches", subcategory: "Automatic", description: "A contemporary luxury automatic watch showcase with exposed gear movement and sapphire crystal case.", startingPrice: 45000, currentPrice: 58000, reservePrice: 50000, seller: "Zurich Timepieces", image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-04T15:00:00", isPremium: false, bidsCount: 9, bidHistory: [{bidder: "AutomaticPro", amount: 58000, time: "3 hours ago"}] },
    { id: 21, title: "Vintage Gold-Tone Dress Watch", category: "Luxury & Rare Watches", subcategory: "Dress Watch", description: "An elegant 1970s-inspired dress watch with gold-tone case, minimalist sunburst dial, and leather strap.", startingPrice: 18000, currentPrice: 23500, reservePrice: 21000, seller: "Vintage Time Co.", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-09T18:30:00", isPremium: false, bidsCount: 5, bidHistory: [{bidder: "ClassicWrist", amount: 23500, time: "11 hours ago"}] },
    { id: 22, title: "Diamond-Style Luxury Crystal Watch", category: "Luxury & Rare Watches", subcategory: "Jewel Watch", description: "A decorative luxury-watch showcase with sparkling crystal stone bezel details.", startingPrice: 35000, currentPrice: 42000, reservePrice: 38000, seller: "Sparkle & Time", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-13T16:00:00", isPremium: false, bidsCount: 6, bidHistory: [{bidder: "GlamourBidding", amount: 42000, time: "1 day ago"}] },
    { id: 23, title: "Classic Sports Car — 1990 Collector Showcase", category: "Classic & Vintage Automobiles", subcategory: "Sports Car", description: "A fictional collector-car listing featuring timeless sports-car styling, aerodynamic lines, and enthusiast presentation.", startingPrice: 800000, currentPrice: 950000, reservePrice: 900000, seller: "Stuttgart Motor Heritage", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-20T18:00:00", isPremium: true, bidsCount: 15, bidHistory: [{bidder: "SpeedwayCollector", amount: 950000, time: "1 day ago"}] },
    { id: 24, title: "Vintage European Roadster Showcase", category: "Classic & Vintage Automobiles", subcategory: "Roadster", description: "A classic open-top roadster showcase featuring elegant curves, wire-spoke wheels, and racing green finish.", startingPrice: 1200000, currentPrice: 1400000, reservePrice: 1300000, seller: "Oxford Classics", image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-25T15:00:00", isPremium: true, bidsCount: 18, bidHistory: [{bidder: "RoadsterKing", amount: 1400000, time: "5 hours ago"}] },
    { id: 25, title: "Classic American Muscle Car Showcase", category: "Classic & Vintage Automobiles", subcategory: "Muscle Car", description: "A vintage muscle-car showcase with a bold aggressive stance, V8 engine presentation, and classic racing stripes.", startingPrice: 1500000, currentPrice: 1750000, reservePrice: 1650000, seller: "Detroit Legends", image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-28T19:00:00", isPremium: true, bidsCount: 22, bidHistory: [{bidder: "MuscleCarFan", amount: 1750000, time: "2 days ago"}] },
    { id: 26, title: "Vintage Motorcycle Collection Showcase", category: "Classic & Vintage Automobiles", subcategory: "Motorcycle", description: "A classic motorcycle showcase celebrating vintage engineering, chrome exhaust accents, and collectible styling.", startingPrice: 120000, currentPrice: 155000, reservePrice: 140000, seller: "Moto Heritage Club", image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-16T14:00:00", isPremium: false, bidsCount: 11, bidHistory: [{bidder: "BikerBidding", amount: 155000, time: "12 hours ago"}] },
    { id: 27, title: "Vintage Emerald-Style Necklace Showcase", category: "Jewellery & Precious Collectibles", subcategory: "Necklace", description: "An elegant necklace showcase featuring deep green emerald-inspired crystal gemstones set in antique silver.", startingPrice: 25000, currentPrice: 34000, reservePrice: 30000, seller: "Royal Gemstones", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-06T18:00:00", isPremium: false, bidsCount: 8, bidHistory: [{bidder: "JewelCollector", amount: 34000, time: "6 hours ago"}] },
    { id: 28, title: "Antique Silver Jewellery Collection", category: "Jewellery & Precious Collectibles", subcategory: "Silverware", description: "A decorative collection of vintage-style silver crafted bracelets, pendants, and filigree brooches.", startingPrice: 15000, currentPrice: 20000, reservePrice: 18000, seller: "Silver Vault", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-10T20:00:00", isPremium: false, bidsCount: 6, bidHistory: [{bidder: "SilverQueen", amount: 20000, time: "1 day ago"}] },
    { id: 29, title: "Collector's Gemstone Display Set", category: "Jewellery & Precious Collectibles", subcategory: "Gemstones", description: "A professionally presented gemstone collection featuring polished mineral specimens in a velvet glass case.", startingPrice: 12000, currentPrice: 16500, reservePrice: 15000, seller: "Mineralogical Society", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-12T16:00:00", isPremium: false, bidsCount: 7, bidHistory: [{bidder: "Gemologist", amount: 16500, time: "10 hours ago"}] },
    { id: 30, title: "Vintage Pocket Watch with Gold Chain", category: "Jewellery & Precious Collectibles", subcategory: "Pocket Watch", description: "An early 20th-century inspired mechanical pocket watch with ornate hunter case and matching fob chain.", startingPrice: 8000, currentPrice: 11500, reservePrice: 10000, seller: "Horology Curios", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80", endDate: "2026-07-05T19:00:00", isPremium: false, bidsCount: 9, bidHistory: [{bidder: "PocketWatchFan", amount: 11500, time: "4 hours ago"}] }
];

let currentUser = null;
let watchlist = [];
let activeDashboardTab = 'overview';

// Helper: Format INR currency
function formatINR(amount) {
    return '₹' + Number(amount).toLocaleString('en-IN');
}

// Helper: Show Toast Notification
function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--gold); margin-right: 8px;"></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Page Navigation
function switchPage(pageId) {
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

    const target = document.getElementById('page-' + pageId);
    if (target) target.classList.add('active');

    const navLink = document.querySelector(`.nav-links a[data-page="${pageId}"]`);
    if (navLink) navLink.classList.add('active');

    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Create Card HTML String
function createCardHTML(item) {
    const isWatched = watchlist.includes(item.id);
    const subcat = item.subcategory || 'Curated';
    return `
        <div class="auction-card">
            <div class="card-img-wrap">
                ${item.isPremium ? '<span class="premium-badge">Premium Lot</span>' : ''}
                <button class="watchlist-btn ${isWatched ? 'active' : ''}" data-watchlist-id="${item.id}" title="Watchlist">
                    <i class="fa-solid fa-heart"></i>
                </button>
                <img src="${item.image}" alt="${item.title}" onerror="this.src='https://picsum.photos/seed/lot${item.id}/800/600';">
            </div>
            <div class="card-body">
                <div>
                    <div class="card-meta">${item.category} — ${subcat}</div>
                    <h3 class="card-title">${item.title}</h3>
                </div>
                <div>
                    <div class="card-price-row">
                        <div>
                            <span class="price-label">Current Highest Bid</span>
                            <div class="price-val">${formatINR(item.currentPrice)}</div>
                        </div>
                        <div style="text-align: right;">
                            <span class="price-label">Total Bids</span>
                            <div style="font-weight: 600;">${item.bidsCount}</div>
                        </div>
                    </div>
                    <div class="card-footer-info">
                        <span><i class="fa-regular fa-clock"></i> <span class="countdown-timer" data-end="${item.endDate}">Calculating...</span></span>
                        <span>Seller: ${item.seller}</span>
                    </div>
                    <div class="card-actions">
                        <button class="btn-outline view-details-btn" data-id="${item.id}">Details</button>
                        <button class="btn-gold place-bid-btn" data-id="${item.id}">Place Bid</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Render Featured Grid
function renderFeatured() {
    const grid = document.getElementById('featured-auctions-grid');
    if (!grid) return;
    grid.innerHTML = auctions.slice(0, 4).map(createCardHTML).join('');
}

// Render All Auctions Grid
function renderAll(items) {
    const grid = document.getElementById('all-auctions-grid');
    const count = document.getElementById('results-count');
    if (!grid) return;

    if (count) count.innerText = `Showing ${items.length} lots`;

    if (items.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 50px; color: var(--text-muted);"><h3>No matching auction lots found.</h3></div>`;
        return;
    }
    grid.innerHTML = items.map(createCardHTML).join('');
}

// Filter Function
function applyFilters() {
    const searchVal = document.getElementById('search-input').value.toLowerCase();
    const catVal = document.getElementById('filter-category').value;
    const sortVal = document.getElementById('sort-by').value;

    let filtered = auctions.filter(item => {
        const matchText = item.title.toLowerCase().includes(searchVal) || item.description.toLowerCase().includes(searchVal) || item.seller.toLowerCase().includes(searchVal);
        const matchCat = (catVal === 'all' || item.category === catVal);
        return matchText && matchCat;
    });

    if (sortVal === 'ending-soon') {
        filtered.sort((a, b) => new Date(a.endDate) - new Date(b.endDate));
    } else if (sortVal === 'price-low') {
        filtered.sort((a, b) => a.currentPrice - b.currentPrice);
    } else if (sortVal === 'price-high') {
        filtered.sort((a, b) => b.currentPrice - a.currentPrice);
    } else if (sortVal === 'newest') {
        filtered.sort((a, b) => b.id - a.id);
    }

    renderAll(filtered);
}

// Countdown Timers
function updateTimers() {
    document.querySelectorAll('.countdown-timer').forEach(el => {
        const end = new Date(el.getAttribute('data-end')).getTime();
        const diff = end - new Date().getTime();

        if (diff <= 0) {
            el.innerText = "Auction Ended";
            el.style.color = "#ff6b6b";
        } else {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((diff % (1000 * 60)) / 1000);
            el.innerText = `${days}d ${hours}h ${mins}m ${secs}s`;
        }
    });
}

// Modal Handling
function openModal(id) {
    const item = auctions.find(a => a.id === Number(id));
    if (!item) return;

    document.getElementById('modal-title').innerText = item.title;
    const minBid = item.currentPrice + 5000;

    document.getElementById('modal-body-content').innerHTML = `
        <div>
            <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 280px; object-fit: cover; border-radius: 8px; margin-bottom: 15px;" onerror="this.src='https://picsum.photos/seed/m${item.id}/800/600';">
            <p style="color: var(--text-muted); font-size: 0.95rem;">${item.description}</p>
            <div style="margin-top: 15px; font-size: 0.85rem; color: var(--gold);">
                <p><strong>Category:</strong> ${item.category} (${item.subcategory || 'Curated'})</p>
                <p><strong>Seller:</strong> ${item.seller}</p>
            </div>
        </div>
        <div>
            <div style="background: var(--bg-body); padding: 20px; border-radius: 8px; border: 1px solid var(--border-color); margin-bottom: 20px;">
                <span style="font-size: 0.85rem; color: var(--text-muted);">Current Highest Bid</span>
                <div style="font-size: 2rem; font-weight: 700; color: var(--gold); margin-bottom: 10px;">${formatINR(item.currentPrice)}</div>
                <div style="font-size: 0.9rem; margin-bottom: 15px;">Minimum Acceptable Bid: <strong>${formatINR(minBid)}</strong></div>
                
                <div class="form-group">
                    <label>Enter Your Bid (₹)</label>
                    <input type="number" id="bid-input-amt" min="${minBid}" value="${minBid}" step="1000">
                </div>
                <button class="btn-gold" id="submit-bid-btn" data-modal-lot-id="${item.id}" style="width: 100%; padding: 12px;">Place Binding Bid</button>
            </div>

            <h4 style="font-size: 1rem; margin-bottom: 10px;">Bid History</h4>
            <div style="max-height: 140px; overflow-y: auto; font-size: 0.85rem; border: 1px solid var(--border-color); border-radius: 6px; padding: 10px;">
                ${item.bidHistory.map(b => `<div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid var(--border-color);"><span>${b.bidder}</span><strong>${formatINR(b.amount)}</strong></div>`).join('')}
            </div>
        </div>
    `;

    document.getElementById('auction-modal').classList.add('open');
}

function closeModal() {
    document.getElementById('auction-modal').classList.remove('open');
}

// Watchlist Toggle
function toggleWatchlist(id) {
    const numId = Number(id);
    const idx = watchlist.indexOf(numId);
    if (idx > -1) {
        watchlist.splice(idx, 1);
        showToast("Removed from Watchlist.");
    } else {
        watchlist.push(numId);
        showToast("Added to Watchlist!");
    }
    localStorage.setItem('ah_watchlist', JSON.stringify(watchlist));
    document.getElementById('watchlist-count').innerText = watchlist.length;
    renderFeatured();
    applyFilters();
    renderDashboard();
}

// Dashboard Tab Switch
function switchDashTab(tabName) {
    activeDashboardTab = tabName;
    document.querySelectorAll('.dash-tab-btn').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById('dtab-' + tabName);
    if (btn) btn.classList.add('active');
    renderDashboard();
}

// Render Dashboard Area
function renderDashboard() {
    const area = document.getElementById('dash-content-area');
    const usernameElem = document.getElementById('dash-username');
    if (!area) return;

    if (!currentUser) {
        if (usernameElem) usernameElem.innerText = "Guest Session";
        area.innerHTML = `
            <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 40px; border-radius: 8px; text-align: center;">
                <h3>Guest Session Active</h3>
                <p style="color: var(--text-muted); margin: 15px 0 25px;">Please register or log in to view bids and watchlist.</p>
                <button class="btn-gold" id="dash-login-btn">Go to Registration</button>
            </div>
        `;
        return;
    }

    if (usernameElem) usernameElem.innerText = currentUser.name;

    if (activeDashboardTab === 'overview') {
        area.innerHTML = `
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 30px;">
                <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 20px; border-radius: 8px;">
                    <span style="color: var(--text-muted); font-size: 0.85rem;">Active Bids</span>
                    <h3 style="font-size: 1.8rem; color: var(--gold); margin-top: 5px;">2</h3>
                </div>
                <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 20px; border-radius: 8px;">
                    <span style="color: var(--text-muted); font-size: 0.85rem;">Watchlist Items</span>
                    <h3 style="font-size: 1.8rem; color: var(--gold); margin-top: 5px;">${watchlist.length}</h3>
                </div>
                <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 20px; border-radius: 8px;">
                    <span style="color: var(--text-muted); font-size: 0.85rem;">Account Status</span>
                    <h3 style="font-size: 1.1rem; color: #4cd137; margin-top: 8px;">Verified Bidder</h3>
                </div>
            </div>
            <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 25px; border-radius: 8px;">
                <h3>Profile Summary</h3>
                <p style="margin-top: 10px;"><strong>Name:</strong> ${currentUser.name}</p>
                <p><strong>Email:</strong> ${currentUser.email}</p>
            </div>
        `;
    } else if (activeDashboardTab === 'bids') {
        area.innerHTML = `
            <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 25px; border-radius: 8px;">
                <h3 style="margin-bottom: 20px;">Active Bidding Activity</h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div style="display: flex; justify-content: space-between; padding: 15px; background: var(--bg-body); border-radius: 6px;">
                        <div><strong>Claude Monet — Water Lilies Impressionist Study (1906)</strong><br><span style="font-size: 0.85rem; color: var(--text-muted);">Your Bid: ₹18,51,000</span></div>
                        <span style="color: #4cd137; font-size: 0.85rem; font-weight: 600;">Winning</span>
                    </div>
                </div>
            </div>
        `;
    } else if (activeDashboardTab === 'watchlist') {
        const watchedItems = auctions.filter(a => watchlist.includes(a.id));
        area.innerHTML = `
            <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 25px; border-radius: 8px;">
                <h3 style="margin-bottom: 20px;">Watchlist (${watchedItems.length})</h3>
                ${watchedItems.length === 0 ? '<p style="color: var(--text-muted);">No items saved to watchlist yet.</p>' : `
                    <div class="auction-grid">${watchedItems.map(createCardHTML).join('')}</div>
                `}
            </div>
        `;
    } else if (activeDashboardTab === 'seller') {
        area.innerHTML = `
            <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 25px; border-radius: 8px;">
                <h3 style="margin-bottom: 20px;">List a New Consignment Lot</h3>
                <form id="new-lot-form">
                    <div class="form-grid-2">
                        <div class="form-group"><label>Item Title</label><input type="text" id="nl-title" required></div>
                        <div class="form-group"><label>Category</label>
                            <select id="nl-cat">
                                <option value="Art & Paintings">Art & Paintings</option>
                                <option value="Rare Books & Manuscripts">Rare Books & Manuscripts</option>
                                <option value="Antiques & Collectibles">Antiques & Collectibles</option>
                                <option value="Luxury & Rare Watches">Luxury & Rare Watches</option>
                                <option value="Classic & Vintage Automobiles">Classic Automobiles</option>
                                <option value="Jewellery & Precious Collectibles">Jewellery & Gemstones</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-grid-2">
                        <div class="form-group"><label>Starting Price (₹)</label><input type="number" id="nl-price" required></div>
                        <div class="form-group"><label>Image URL</label><input type="url" id="nl-img" required></div>
                    </div>
                    <div class="form-group"><label>Description</label><textarea id="nl-desc" rows="3" required></textarea></div>
                    <button type="submit" class="btn-gold">Publish Consignment</button>
                </form>
            </div>
        `;
    }
}

// Global Event Listeners Initializer
document.addEventListener('DOMContentLoaded', () => {
    // Load local storage states
    const savedUser = localStorage.getItem('ah_user');
    if (savedUser) currentUser = JSON.parse(savedUser);

    const savedWatchlist = localStorage.getItem('ah_watchlist');
    if (savedWatchlist) watchlist = JSON.parse(savedWatchlist);

    const savedTheme = localStorage.getItem('ah_theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
        document.getElementById('theme-icon').className = savedTheme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }

    document.getElementById('watchlist-count').innerText = watchlist.length;
    if (currentUser) {
        document.getElementById('auth-nav-btn').innerText = currentUser.name.split(' ')[0];
    }

    // Initial Renders
    renderFeatured();
    renderAll(auctions);
    renderDashboard();

    // Start Timer Engine
    setInterval(updateTimers, 1000);

    // Navigation Delegation
    document.addEventListener('click', (e) => {
        // Page switching links
        const pageTarget = e.target.closest('[data-page]');
        if (pageTarget) {
            e.preventDefault();
            const pageId = pageTarget.getAttribute('data-page');
            switchPage(pageId);
            return;
        }

        // View Details button
        const viewBtn = e.target.closest('.view-details-btn, .hero-view-btn');
        if (viewBtn) {
            const id = viewBtn.getAttribute('data-id');
            openModal(id);
            return;
        }

        // Place Bid button
        const bidBtn = e.target.closest('.place-bid-btn');
        if (bidBtn) {
            const id = bidBtn.getAttribute('data-id');
            openModal(id);
            return;
        }

        // Watchlist button
        const watchBtn = e.target.closest('[data-watchlist-id]');
        if (watchBtn) {
            e.stopPropagation();
            const id = watchBtn.getAttribute('data-watchlist-id');
            toggleWatchlist(id);
            return;
        }

        // Category Cards Explore Button
        const catCard = e.target.closest('.category-card');
        if (catCard) {
            const cat = catCard.getAttribute('data-cat');
            document.getElementById('filter-category').value = cat;
            applyFilters();
            switchPage('auctions');
            return;
        }

        // Modal Close Button
        if (e.target.id === 'modal-close-btn' || e.target.id === 'auction-modal') {
            closeModal();
            return;
        }

        // Theme Toggle
        if (e.target.closest('#theme-toggle-btn')) {
            const cur = document.body.getAttribute('data-theme');
            const next = cur === 'dark' ? 'light' : 'dark';
            document.body.setAttribute('data-theme', next);
            localStorage.setItem('ah_theme', next);
            document.getElementById('theme-icon').className = next === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
            return;
        }

        // Mobile Menu Toggle
        if (e.target.closest('#mobile-toggle-btn')) {
            document.getElementById('nav-menu').classList.toggle('mobile-open');
            return;
        }

        // Auth Nav Button
        if (e.target.id === 'auth-nav-btn' || e.target.id === 'dash-login-btn') {
            switchPage('register');
            return;
        }

        // Watchlist Nav Icon Button
        if (e.target.closest('#watchlist-nav-btn')) {
            switchPage('dashboard');
            switchDashTab('watchlist');
            return;
        }

        // Hero Buttons
        if (e.target.id === 'hero-explore-btn' || e.target.id === 'view-all-featured-btn') {
            switchPage('auctions');
            return;
        }
        if (e.target.id === 'hero-bidder-btn') {
            switchPage('register');
            return;
        }

        // Dashboard Tabs
        const dashTab = e.target.closest('.dash-tab-btn');
        if (dashTab) {
            const tabName = dashTab.getAttribute('data-tab');
            switchDashTab(tabName);
            return;
        }

        // Logout
        if (e.target.id === 'logout-btn' || e.target.closest('#logout-btn')) {
            currentUser = null;
            localStorage.removeItem('ah_user');
            document.getElementById('auth-nav-btn').innerText = "Login / Register";
            showToast("Logged out successfully.");
            switchPage('home');
            renderDashboard();
            return;
        }

        // Submit Bid in Modal
        if (e.target.id === 'submit-bid-btn') {
            if (!currentUser) {
                showToast("Please register or log in first.");
                closeModal();
                switchPage('register');
                return;
            }
            const lotId = Number(e.target.getAttribute('data-modal-lot-id'));
            const amt = Number(document.getElementById('bid-input-amt').value);
            const item = auctions.find(a => a.id === lotId);
            const minAccept = item.currentPrice + 5000;

            if (isNaN(amt) || amt < minAccept) {
                alert(`Bid must be at least ${formatINR(minAccept)}`);
                return;
            }

            item.currentPrice = amt;
            item.bidsCount += 1;
            item.bidHistory.unshift({
                bidder: currentUser.name,
                amount: amt,
                time: "Just now"
            });

            showToast(`Bid of ${formatINR(amt)} placed on ${item.title}!`);
            closeModal();
            renderFeatured();
            applyFilters();
            renderDashboard();
            return;
        }
    });

    // Inputs Filtering Event Listeners
    document.getElementById('search-input').addEventListener('input', applyFilters);
    document.getElementById('filter-category').addEventListener('change', applyFilters);
    document.getElementById('sort-by').addEventListener('change', applyFilters);
    document.getElementById('reset-filters-btn').addEventListener('click', () => {
        document.getElementById('search-input').value = '';
        document.getElementById('filter-category').value = 'all';
        document.getElementById('sort-by').value = 'ending-soon';
        applyFilters();
        showToast("Filters reset.");
    });

    // Forms Handlers
    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('reg-name').value;
        const email = document.getElementById('reg-email').value;
        const pass = document.getElementById('reg-pass').value;
        const confirm = document.getElementById('reg-pass-confirm').value;

        if (pass !== confirm) {
            alert("Passwords do not match.");
            return;
        }

        currentUser = { name, email };
        localStorage.setItem('ah_user', JSON.stringify(currentUser));
        document.getElementById('auth-nav-btn').innerText = name.split(' ')[0];
        showToast(`Welcome, ${name}! Logged in successfully.`);
        switchPage('dashboard');
        renderDashboard();
    });

    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        showToast("Inquiry sent successfully.");
        e.target.reset();
    });

    document.addEventListener('submit', (e) => {
        if (e.target.id === 'new-lot-form') {
            e.preventDefault();
            const title = document.getElementById('nl-title').value;
            const category = document.getElementById('nl-cat').value;
            const startingPrice = Number(document.getElementById('nl-price').value);
            const image = document.getElementById('nl-img').value;
            const description = document.getElementById('nl-desc').value;

            const newLot = {
                id: auctions.length + 1,
                title,
                category,
                subcategory: "Consignment Lot",
                description,
                startingPrice,
                currentPrice: startingPrice,
                reservePrice: startingPrice * 1.1,
                seller: currentUser ? currentUser.name : "Private Collector",
                image,
                endDate: "2026-08-20T18:00:00",
                isPremium: true,
                bidsCount: 0,
                bidHistory: []
            };

            auctions.unshift(newLot);
            showToast("New consignment lot published!");
            renderFeatured();
            applyFilters();
            switchDashTab('overview');
        }
    });
});