// Dashboard interactions and animations
document.addEventListener('DOMContentLoaded', () => {
    
    // Check Auth
    if(localStorage.getItem('userLoggedIn') !== 'true') {
        window.location.href = 'login.html';
        return;
    }
    
    // Set User Profile
    const userName = localStorage.getItem('userName') || 'Alex';
    const userDp = localStorage.getItem('userDp') || 'https://i.pravatar.cc/150?img=11';
    
    const welcomeHeader = document.querySelector('.dashboard-header h1');
    if(welcomeHeader) welcomeHeader.innerText = `Welcome back, ${userName}! 👋`;
    
    const sidebarName = document.getElementById('sidebar-name');
    if(sidebarName) sidebarName.innerText = userName;
    
    const sidebarDp = document.getElementById('sidebar-dp');
    if(sidebarDp) sidebarDp.src = userDp;
    
    const editName = document.getElementById('edit-name');
    if(editName) {
        // Only set if not forcing a new setup
        if(localStorage.getItem('forceProfileEdit') !== 'true') {
            editName.value = userName;
        } else {
            editName.value = "";
            editName.placeholder = "Enter your full name";
        }
    }
    
    const dpPreview = document.getElementById('edit-dp-preview');
    if(dpPreview) dpPreview.src = userDp;
    
    // DP file upload logic
    const dpInput = document.getElementById('edit-dp');
    if(dpInput) {
        dpInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if(file) {
                const reader = new FileReader();
                reader.onload = function(evt) {
                    window.currentDpBase64 = evt.target.result;
                    if(dpPreview) dpPreview.src = window.currentDpBase64;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Load dynamic recent activity
    loadRecentActivity();
    loadNotifications();

    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });

    // Force Edit Profile if coming from fresh login
    if(localStorage.getItem('forceProfileEdit') === 'true') {
        setTimeout(() => {
            document.getElementById('edit-profile-modal').style.display = 'flex';
            localStorage.removeItem('forceProfileEdit');
            
            // Add a small notification explanation
            addNotification('Please complete your profile setup (Name & Number)', 'warning');
        }, 500);
    }
});

function loadRecentActivity() {
    const activityContainer = document.querySelector('.activity-list');
    if(!activityContainer) return;
    
    let activities = JSON.parse(localStorage.getItem('activities') || '[]');
    
    if(activities.length === 0) {
        activities = [
            { icon: 'fa-user', color: 'purple', title: 'Account Created', desc: 'Welcome to PlacementGPT', time: 'Just now' }
        ];
    }
    
    // Only show top 5
    activities = activities.slice(0, 5);
    
    activityContainer.innerHTML = '';
    activities.forEach(act => {
        activityContainer.innerHTML += `
            <li>
                <div class="activity-icon ${act.color}-bg"><i class="fa-solid ${act.icon}"></i></div>
                <div class="activity-text">
                    <h4>${act.title}</h4>
                    <p>${act.desc}</p>
                </div>
                <span class="activity-time">${act.time}</span>
            </li>
        `;
    });

    // Check daily notification
    const lastNotifDate = localStorage.getItem('lastNotifDate');
    const today = new Date().toDateString();
    
    if(lastNotifDate !== today) {
        setTimeout(() => {
            addNotification('Daily Coding: Solve 1 more problem to maintain your streak!', 'warning');
            localStorage.setItem('lastNotifDate', today);
        }, 2000);
    }
}

function saveProfile() {
    const name = document.getElementById('edit-name').value;
    localStorage.setItem('userName', name);
    if(window.currentDpBase64) {
        localStorage.setItem('userDp', window.currentDpBase64);
    }
    document.getElementById('edit-profile-modal').style.display='none';
    window.location.reload();
}

function toggleNotifications() {
    const drop = document.getElementById('notif-dropdown');
    drop.style.display = drop.style.display === 'none' ? 'block' : 'none';
}

function loadNotifications() {
    const notifs = JSON.parse(localStorage.getItem('notifications') || '[]');
    const badge = document.getElementById('notif-badge');
    const list = document.getElementById('notif-list');
    
    if(badge) badge.innerText = notifs.length;
    
    if(notifs.length > 0 && list) {
        list.innerHTML = '';
        notifs.reverse().forEach(n => {
            list.innerHTML += `<li style="margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05);">${n}</li>`;
        });
    }
}

function addNotification(msg, type='success') {
    const notifs = JSON.parse(localStorage.getItem('notifications') || '[]');
    const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    notifs.push(`[${time}] ${msg}`);
    localStorage.setItem('notifications', JSON.stringify(notifs));
    loadNotifications();
    showNotification(msg, type);
}

// Add notification HTML and CSS if not present, and function
function showNotification(msg, type='success') {
    let notif = document.getElementById('notification');
    if(!notif) {
        notif = document.createElement('div');
        notif.id = 'notification';
        notif.className = 'notification';
        notif.innerHTML = `<i class="fa-solid fa-circle-info" id="notif-icon"></i><span id="notif-text"></span>`;
        document.body.appendChild(notif);
        
        // Add basic styles dynamically if needed
        const style = document.createElement('style');
        style.innerHTML = `
        .notification {
            position: fixed; top: 20px; right: 20px; background: var(--bg-card);
            border-left: 4px solid var(--primary); padding: 15px 25px; border-radius: 8px;
            backdrop-filter: blur(10px); box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            display: flex; align-items: center; gap: 15px; transform: translateX(120%);
            transition: transform 0.3s ease; z-index: 2000; color: white; font-size: 14px;
        }
        .notification.show { transform: translateX(0); }
        .notification.warning { border-left-color: #ffcc00; }
        `;
        document.head.appendChild(style);
    }

    const icon = notif.querySelector('#notif-icon');
    const text = notif.querySelector('#notif-text');

    text.innerText = msg;
    notif.className = 'notification show ' + (type==='warning' ? 'warning' : '');
    icon.className = type==='warning' ? 'fa-solid fa-bell text-yellow' : 'fa-solid fa-check-circle text-green';

    setTimeout(() => {
        notif.classList.remove('show');
    }, 5000);
}
