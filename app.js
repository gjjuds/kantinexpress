/* ===== Kantin Express - Shared App Logic ===== */

/* ---------- Dummy Users ---------- */
const USERS = [
    { username: 'customer',  password: '123', role: 'customer', name: 'Budi Santoso' },
    { username: 'tenant1',   password: '123', role: 'tenant',   name: 'Bu Tini',     warungId: 1 },
    { username: 'tenant2',   password: '123', role: 'tenant',   name: 'Pak Joko',    warungId: 2 },
    { username: 'tenant3',   password: '123', role: 'tenant',   name: 'Mbak Sari',   warungId: 3 },
    { username: 'kurir',     password: '123', role: 'kurir',    name: 'Andi Kurir' },
];

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-toggle').forEach(toggle => {
        const menu = toggle.closest('.nav-container')?.querySelector('.nav-menu');
        if (!menu) return;

        toggle.addEventListener('click', (event) => {
            event.stopPropagation();
            const isOpen = menu.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(isOpen));
            toggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        menu.querySelectorAll('a, button').forEach(item => {
            item.addEventListener('click', () => {
                menu.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
                toggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    });

    document.addEventListener('click', (event) => {
        document.querySelectorAll('.nav-menu.open').forEach(menu => {
            const container = menu.closest('.nav-container');
            if (container?.contains(event.target)) return;
            const toggle = container?.querySelector('.nav-toggle');
            menu.classList.remove('open');
            toggle?.setAttribute('aria-expanded', 'false');
            if (toggle) toggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
});

/* ---------- Warung & Menu Data ---------- */
const WARUNG_DATA = [
    {
        id: 1,
        name: "Warung Makan Bu Tini",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=200&fit=crop",
        desc: "Spesialis nasi goreng, mie goreng, dan ayam geprek pedas.",
        orders: 1247,
        rating: 4.7,
        menus: [
            { id: 101, name: "Nasi Goreng Spesial", price: 18000, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop" },
            { id: 102, name: "Mie Goreng Jawa",     price: 15000, image: "https://images.unsplash.com/photo-1645696301019-35adcc18fc21?w=300&h=200&fit=crop" },
            { id: 103, name: "Ayam Geprek Sambal",  price: 20000, image: "https://images.unsplash.com/photo-1626500155188-b8f01680ea4d?w=300&h=200&fit=crop" },
            { id: 104, name: "Es Teh Manis",        price: 5000,  image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=200&fit=crop" },
        ]
    },
    {
        id: 2,
        name: "Soto Ayam Pak Joko",
        image: "https://images.unsplash.com/photo-1677029969063-23ecbb98d0af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "Soto ayam kampung dengan kuah bening yang segar dan gurih.",
        orders: 987,
        rating: 4.5,
        menus: [
            { id: 201, name: "Soto Ayam Komplit", price: 17000, image: "https://images.unsplash.com/photo-1569059078571-a1f7a0fa1715?w=300&h=200&fit=crop" },
            { id: 202, name: "Soto Daging",       price: 22000, image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=300&h=200&fit=crop" },
            { id: 203, name: "Nasi Putih",        price: 5000,  image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=300&h=200&fit=crop" },
            { id: 204, name: "Es Jeruk",          price: 6000,  image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=300&h=200&fit=crop" },
        ]
    },
    {
        id: 3,
        name: "Ayam Bakar Mbak Sari",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=200&fit=crop",
        desc: "Ayam bakar madu dengan sambal matah dan lalapan segar.",
        orders: 1562,
        rating: 4.8,
        menus: [
            { id: 301, name: "Ayam Bakar Madu",   price: 25000, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop" },
            { id: 302, name: "Ayam Bakar Pedas",  price: 25000, image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=300&h=200&fit=crop" },
            { id: 303, name: "Tempe Goreng",      price: 5000,  image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=300&h=200&fit=crop" },
            { id: 304, name: "Es Teh Manis",      price: 5000,  image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=200&fit=crop" },
        ]
    },
    {
        id: 4,
        name: "Nasi Padang Ibu Aminah",
        image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&h=200&fit=crop",
        desc: "Rendang daging, ayam pop, sambal ijo, dan aneka lauk Padang.",
        orders: 2034,
        rating: 4.9,
        menus: [
            { id: 401, name: "Nasi Rendang",   price: 28000, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=200&fit=crop" },
            { id: 402, name: "Nasi Ayam Pop",  price: 23000, image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=300&h=200&fit=crop" },
            { id: 403, name: "Sambal Ijo",     price: 5000,  image: "https://images.unsplash.com/photo-1599321955726-7c3a1d3e1c08?w=300&h=200&fit=crop" },
        ]
    },
    {
        id: 5,
        name: "Burger Kantin Express",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=200&fit=crop",
        desc: "Burger premium dengan daging sapi impor dan keju leleh.",
        orders: 892,
        rating: 4.4,
        menus: [
            { id: 501, name: "Beef Burger",      price: 30000, image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop" },
            { id: 502, name: "Cheese Burger",    price: 32000, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
            { id: 503, name: "French Fries",     price: 12000, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=200&fit=crop" },
        ]
    },
    {
        id: 6,
        name: "Mie Ayam Cak No",
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=200&fit=crop",
        desc: "Mie ayam pangsit dengan bakso dan pentol kenyal.",
        orders: 1678,
        rating: 4.6,
        menus: [
            { id: 601, name: "Mie Ayam Original", price: 15000, image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=300&h=200&fit=crop" },
            { id: 602, name: "Mie Ayam Bakso",    price: 20000, image: "https://images.unsplash.com/photo-1543826173-70651703c5a4?w=300&h=200&fit=crop" },
            { id: 603, name: "Bakso Saja",        price: 12000, image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=300&h=200&fit=crop" },
        ]
    }
];

/* ---------- Constants ---------- */
const ONGKIR = 10000;
const STATUS_FLOW = ['Menunggu Konfirmasi', 'Diterima', 'Diproses', 'Siap Pick Up', 'Diambil Kurir', 'Selesai'];

/* ---------- Helpers ---------- */
function formatRupiah(num) {
    return 'Rp ' + Number(num).toLocaleString('id-ID');
}

function getCart() {
    return JSON.parse(localStorage.getItem('ke_cart') || '[]');
}
function saveCart(cart) {
    localStorage.setItem('ke_cart', JSON.stringify(cart));
}

function getOrders() {
    return JSON.parse(localStorage.getItem('ke_orders') || '[]');
}
function saveOrders(orders) {
    localStorage.setItem('ke_orders', JSON.stringify(orders));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('ke_user') || 'null');
}
function setCurrentUser(user) {
    localStorage.setItem('ke_user', JSON.stringify(user));
}
function logout() {
    localStorage.removeItem('ke_user');
    window.location.href = 'login.html';
}

function getKurirStatus() {
    return localStorage.getItem('ke_kurir_status') || 'off';
}
function setKurirStatus(s) {
    localStorage.setItem('ke_kurir_status', s);
}

/* ---------- Guard: redirect if not logged in for the right role ---------- */
function requireRole(role) {
    const u = getCurrentUser();
    if (!u) {
        window.location.href = 'login.html';
        return null;
    }
    if (u.role !== role) {
        // Redirect to their proper dashboard
        if (u.role === 'customer') window.location.href = 'index.html';
        else if (u.role === 'tenant') window.location.href = 'dashboard-tenant.html';
        else if (u.role === 'kurir') window.location.href = 'dashboard-kurir.html';
        return null;
    }
    return u;
}

/* ---------- Toast ---------- */
function showToast(message, type = 'success') {
    let toast = document.getElementById('globalToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'globalToast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.className = 'toast ' + (type === 'error' ? 'error' : '');
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => toast.classList.remove('show'), 2800);
}

/* ---------- Find menu by id (search across all warungs) ---------- */
function findMenu(menuId) {
    for (const w of WARUNG_DATA) {
        const m = w.menus.find(x => x.id === menuId);
        if (m) return { ...m, warungId: w.id, warungName: w.name };
    }
    return null;
}

function findWarung(id) {
    return WARUNG_DATA.find(w => w.id === id);
}
