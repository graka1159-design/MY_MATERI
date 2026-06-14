function executeAgentAuth(event) {
    event.preventDefault();
    const inputName = document.getElementById('agentNameInput').value;

    // 1. Sembunyikan Form, Munculkan Animasi Loading Scan
    document.getElementById('formContainer').style.display = 'none';
    document.getElementById('loadingContainer').style.display = 'block';
    
    const mainTitle = document.getElementById('mainAlertTitle');
    mainTitle.innerText = "VERIFYING CREDENTIALS...";
    mainTitle.style.fontSize = "1.7rem";

    // Efek teks loading berubah di detik ke-1.5
    setTimeout(() => {
        document.getElementById('loadStatusText').innerText = "SCANNING BIOMETRIC SIGNATURE...";
    }, 1500);

    // 2. Timer 3 Detik: Nyatakan Login Sukses & Ubah Tema ke Biru-Hijau HUD
    setTimeout(() => {
        document.getElementById('loadingContainer').style.display = 'none';
        
        // Switch Variabel Warna CSS ke Mode Akses Diterima (Biru)
        document.documentElement.style.setProperty('--primary-color', '#00d2ff');
        document.documentElement.style.setProperty('--glow-color', 'rgba(0, 210, 255, 0.5)');
        
        // Update Status Bar Kotak Atas
        const sysStatus = document.getElementById('sysStatusText');
        sysStatus.innerText = "[ ACCESS APPROVED ]";
        sysStatus.style.color = "#00ff66";
        sysStatus.style.textShadow = "0 0 10px #00ff66";

        // Ganti Teks Judul Utama dan Sub-title Taktis
        mainTitle.innerText = "ACCESS GRANTED";
        mainTitle.style.animation = "successGlow 1.5s infinite ease-in-out";
        document.getElementById('subAlertTitle').innerText = "TACTICAL COCKPIT LINK ESTABLISHED";

        // Set Tulisan Otorisasi Sesuai Nama Input
        document.getElementById('welcomeAgentText').innerText = "WELCOME BACK, AGENT " + inputName.toUpperCase();

        // Melebarkan Ukuran Bingkai Kotak agar Pas Menampung Pop-up ID Card Baru Lu
        const mainBox = document.getElementById('mainHudBox');
        mainBox.style.maxWidth = "780px";
        mainBox.style.borderColor = "#00d2ff";

        // Munculkan ID Card dengan menambahkan class 'show'
        document.getElementById('agentCardModal').classList.add('show');

        // 3. KUNCI TIMER 15 DETIK: Beri Waktu Tampil HUD, Lalu Buka Total Tirai Loginnya
        setTimeout(() => {
            const gateScreen = document.getElementById('security-gate');
            gateScreen.style.opacity = '0';
            gateScreen.style.transform = 'scale(1.05)';
            
            // Hilangkan element dari DOM & buka scroll body utama
            setTimeout(() => {
                gateScreen.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 800);
        }, 15000);

    }, 3000);
}
document.querySelector('.main-website-content').style.display = 'block';
