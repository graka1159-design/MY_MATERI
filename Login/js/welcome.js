function executeAgentAuth(event) {
    event.preventDefault();
    const inputName = document.getElementById('agentNameInput').value;

    // 1. Sembunyikan Form, Munculkan Animasi Loading Scan (KITA MODIF DI SINI, BRE!)
    document.getElementById('formContainer').style.display = 'none';
    
    const loadWrap = document.getElementById('loadingContainer');
    loadWrap.style.display = 'block';
    loadWrap.style.marginTop = '15px';
    
    const mainTitle = document.getElementById('mainAlertTitle');
    mainTitle.innerText = "SYSTEM BREACH: SATRIA DEWA PROJECT"; // Menyesuaikan Ref image_6
    mainTitle.style.fontSize = "1.7rem";
    mainTitle.style.color = "#ff0033";
    mainTitle.style.textShadow = "0 0 10px #ff0033";

    // DI SINI KITA SUNTIKKAN LAYOUT SATELIT JOGJA & SUBTITLE NYA
    loadWrap.innerHTML = `
        <div style="border: 2px solid #00ffff; background: rgba(0,0,0,0.9); padding: 12px; max-width: 650px; margin: 0 auto; box-shadow: 0 0 20px rgba(0,255,255,0.2); font-family: 'Courier New', monospace; color: #00ffff;">
            <div style="background: rgba(0,255,255,0.15); padding: 4px 10px; font-size: 0.75rem; border-bottom: 2px solid #00ffff; margin-bottom: 10px; display: flex; justify-content: space-between;">
                <span>[P|RANAS SERVER] CONNECTED TO YOGYAKARTA TACTICAL NODE-1159</span>
                <span>LAT: -7.7956° | LON: 110.3695°</span>
            </div>
            <div style="display: flex; gap: 10px; min-height: 180px;">
                <div style="flex: 1.5; border: 1px solid #00ffff; position: relative; background: linear-gradient(rgba(0,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.07) 1px, transparent 1px), radial-gradient(circle at 50% 50%, #002222 0%, #000000 85%); background-size: 15px 15px, 15px 15px, auto; overflow: hidden;">
                    <span style="position: absolute; top: 5px; left: 5px; font-size: 0.65rem; color: rgba(0,255,255,0.7);">HQ-1 // DRONE SCOUT // LIVE FEED</span>
                    <div style="position: absolute; top: 50%; left: 50%; width: 45px; height: 45px; border: 2px dashed #ff0033; border-radius: 50%; transform: translate(-50%, -50%); animation: radarSpin 4s linear infinite;"></div>
                    <div style="position: absolute; top: 50%; left: 50%; width: 6px; height: 6px; background: #ff0033; border-radius: 50%; transform: translate(-50%, -50%); box-shadow: 0 0 8px #ff0033;"></div>
                    <span style="position: absolute; top: 55%; left: 55%; font-size: 0.6rem; color: #ff0033; font-weight: bold;">LOCK ON YOGYAKARTA</span>
                </div>
                <div id="satSpecsBox" style="flex: 1; border: 1px solid #00ffff; background: rgba(0,20,20,0.4); padding: 8px; font-size: 0.65rem; line-height: 1.5; text-align: left;">
                    <p style="color: #00ff66; margin: 2px 0;">> PATH: ESTABLISHED</p>
                    <p style="margin: 2px 0;">> SATELLITE: ST-16_GATOTKACA</p>
                    <p style="margin: 2px 0;">> ALTITUDE: 35,786 KM</p>
                    <p style="margin: 2px 0;">> DOWNLINK: 4.5 GBPS</p>
                    <p style="color: #ffaa00; animation: textBlink 1s infinite; margin: 2px 0;">> DRONE FEED: ACTIVE</p>
                </div>
            </div>
            <div style="margin-top: 12px; background: #000; border: 1px solid rgba(0,255,255,0.3); padding: 10px; min-height: 55px; display: flex; align-items: center; justify-content: center;">
                <p id="movieSubtitleText" style="color: #ffffff; font-size: 0.85rem; text-align: center; margin: 0; text-shadow: 1px 1px 2px #000;">> INITIALIZING REGIONAL SCANNER...</p>
            </div>
        </div>
        <style>
            @keyframes radarSpin { 100% { transform: translate(-50%, -50%) rotate(360deg); } }
            @keyframes textBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        </style>
    `;

    // Efek teks dialog berganti di detik ke-1.5 (Sesuai kode lama lu)
    setTimeout(() => {
        const subtitleEl = document.getElementById('movieSubtitleText');
        if(subtitleEl) {
            subtitleEl.style.color = "#ffff00"; // Kuning subtitle film
            subtitleEl.innerHTML = '"Mereka akan bunuh senator sendiri demi mengambinghitamkan Reform."'; // Sesuai Ref image_4
        }
    }, 1500);

    // 2. KODINGAN ASLI LU DI BAWAH INI SAMA SEKALI GAK DISENTUH / DIHAPUS, TETEP AMAN!
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
        mainTitle.style.color = "#00d2ff"; // Kembalikan ke tema biru lu
        mainTitle.style.textShadow = "0 0 10px #00d2ff";
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

        // 3. KUNCI TIMER 15 DETIK: Beri Waktu Tampil HUD, Lalu PAKSA LEMPAR KE WEB UTAMA GYMSO
        setTimeout(() => {
            // A. Kasih tiket tanda sudah login ke browser
            sessionStorage.setItem("agent_authenticated", "true");

            // B. TEMBAK LANGSUNG LINK UTAMA REPO LU
            window.location.replace("https://graka1159-design.github.io/MY_MATERI/"); 
            
        }, 15000);

    }, 3000); // 3 detik loading, lalu ID card lu muncul
}
