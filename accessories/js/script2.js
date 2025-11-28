const accessories = [
  //Laptops & Printers
  { name: "HP Elitebook 840 G5", category: "laptops", image: "images/laptops/elitebook.jpg"},
  { name: "HP Elitebook 840 G5", category: "laptops", image: "images/laptops/elitebook2.jpg"},
  { name: "HP Elitebook 840 G5", category: "laptops", image: "images/laptops/elitebook3.jpg.webp"},
  { name: "HP Elitebook 840 G5", category: "laptops", image: "images/laptops/laptop2.jpg"},
  { name: "HP Elitebook 840 G5", category: "laptops", image: "images/laptops/laptop.jpg"},
  { name: "Canon Pixma G3410", category: "laptops", image: "images/laptops/printer.jpg"},
  { name: "Canon Pixma G3410", category: "laptops", image: "images/laptops/printer2.jpg"},

  // Keyboards & Mice
  { name: "Wireless Keyboard", category: "keyboards", image: "images/keyboards/keyboard.png"},
  { name: "Gaming Mouse RGB", category: "keyboards", image: "images/keyboards/keyboard3.png" },
  { name: "Mechanical Keyboard", category: "keyboards", image: "images/keyboards/keyboard2.png" },
  { name: "Ergonomic Mouse", category: "keyboards", image: "images/keyboards/keyboard4.png" },
  { name: "Bluetooth Keyboard", category: "keyboards", image: "images/keyboards/keyboard5.png" },
  { name: "Wireless Mouse", category: "keyboards", image: "images/keyboards/mouse.jpeg" },
  { name: "Gaming Keyboard Pro", category: "keyboards", image: "images/keyboards/mouse2.jpg" },
  { name: "Gaming Keyboard Pro", category: "keyboards", image: "images/keyboards/mouse3.jpeg" },
  { name: "Gaming Keyboard Pro", category: "keyboards", image: "images/keyboards/mouse4.jpeg" },

  // Monitors
  { name: "24\" LED Monitor", category: "monitors", image: "images/monitors/monitor.jpeg" },
  { name: "24\" LED Monitor", category: "monitors", image: "images/monitors/monitor2.jpg" },
  { name: "24\" LED Monitor", category: "monitors", image: "images/monitors/monitor3.png" },
  
  // Cables & Adapters
  { name: "USB-C Cable 2m", category: "cables", image: "images/cables/adapter.png" },
  { name: "HDMI Cable 4K", category: "cables", image: "images/cables/adapter2.png" },
  { name: "USB Hub 7-Port", category: "cables", image: "images/cables/adapter3.png" },
  { name: "USB-C to HDMI Adapter", category: "cables", image: "images/cables/adapter4.png" },
  { name: "VGA to HDMI Converter", category: "cables", image: "images/cables/adapter5.png" },
  { name: "DisplayPort Cable", category: "cables", image: "images/cables/adapter6.png" },
  { name: "Ethernet Cable Cat6", category: "cables", image: "images/cables/adapter7.jpg" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/adapter8.jpg" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/adapter9.png" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/adapter10.png" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/adapter11.png" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/adapter12.png" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/adapter13.png" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/adapter14.png" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/adapter15.png" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/adapter16.png" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/adapter17.png" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/adapter18.png" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/adapter19.png" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/adapter20.png" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/charger.jpeg" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/charger2.jpeg" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/charger3.jpeg" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/charger4.jpg" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/hdmi.png" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/hdmi2.jpg" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/hdmi3.jpg" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/hdmi4.png" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/hdmi5.png" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/hdmi6.png" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/hdmi7.png" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/hdmi8.png" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/hdmi-joiner.png" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/hdmi-splitter.png" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/network-cable.jpg" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/network-cable2.jpg" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/network-cable3.jpg" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/network-cable4.jpg" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/network-cable5.jpg" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/printer-cable.webp" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/printer-cable2.jpg" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/printer-cable3.jpg" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/printer-cable4.jpg" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/usb-to-usb-cable.webp" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/usb-wifi.png" },
  { name: "USB Extension Cable", category: "cables", image: "images/cables/otg.png" },

  // Storage
  { name: "1TB External HDD", category: "storage", image: "images/storage/flashdrive.png" },
  { name: "1TB External HDD", category: "storage", image: "images/storage/flashdrive2.png" },
  { name: "1TB External HDD", category: "storage", image: "images/storage/hdd.jpg" },
  { name: "1TB External HDD", category: "storage", image: "images/storage/hdd2.jpg" },
  { name: "1TB External HDD", category: "storage", image: "images/storage/hdd3.jpg" },
  { name: "1TB External HDD", category: "storage", image: "images/storage/hdd4.png" },
  { name: "1TB External HDD", category: "storage", image: "images/storage/hddcase.png" },
  { name: "1TB External HDD", category: "storage", image: "images/storage/hddcase2.png" },
  { name: "1TB External HDD", category: "storage", image: "images/storage/hddcase3.png" },
  { name: "1TB External HDD", category: "storage", image: "images/storage/hddcase4.png" },
  { name: "1TB External HDD", category: "storage", image: "images/storage/hddcase5.png" },
  { name: "1TB External HDD", category: "storage", image: "images/storage/hddcase6.png" },
  { name: "1TB External HDD", category: "storage", image: "images/storage/memory-card.png" },
  { name: "1TB External HDD", category: "storage", image: "images/storage/memory-card2.jpg" },
  { name: "1TB External HDD", category: "storage", image: "images/storage/memory-card3.png" },
  { name: "1TB External HDD", category: "storage", image: "images/storage/memory-card4.png" },
  { name: "1TB External HDD", category: "storage", image: "images/storage/ram.png" },
  { name: "1TB External HDD", category: "storage", image: "images/storage/ram2.png" },
  { name: "1TB External HDD", category: "storage", image: "images/storage/ram3.png" },

  // Other Accessories
  { name: "USB Webcam 1080p", category: "accessories", image: "images/others/router.png" },
];

// Add unique IDs to each item
const allAccessories = accessories.map((item, index) => ({
  ...item,
  id: `item-${index}`
}));

let currentFilter = 'all';
let displayedCount = 0;
const itemsPerLoad = 12;

const galleryGrid = document.getElementById('galleryGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const itemsCount = document.getElementById('itemsCount');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('imageModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

function getFilteredItems() {
  if (currentFilter === 'all') return allAccessories;
  return allAccessories.filter(item => item.category === currentFilter);
}

function renderItems() {
  const filtered = getFilteredItems();
  const itemsToShow = filtered.slice(0, displayedCount);
  
  galleryGrid.innerHTML = '';
  itemsToShow.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.style.animationDelay = `${(index % itemsPerLoad) * 0.04}s`;
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" loading="lazy" />
      <div class="item-info">
        <h3 class="item-name">${item.name}</h3>
        <span class="item-category">${item.category}</span>
      </div>
    `;
    
    div.addEventListener('click', () => openModal(item));
    galleryGrid.appendChild(div);
  });

  updateUI(filtered.length);
}

function updateUI(totalItems) {
  const actualShowing = Math.min(displayedCount, totalItems);
  itemsCount.textContent = `Showing ${actualShowing} of ${totalItems} items`;
  
  if (displayedCount >= totalItems) {
    loadMoreBtn.disabled = true;
    loadMoreBtn.innerHTML = '<i data-lucide="check-circle" class="icon"></i>All Items Loaded';
  } else {
    loadMoreBtn.disabled = false;
    loadMoreBtn.innerHTML = '<i data-lucide="plus-circle" class="icon"></i>Load More Items';
  }
  
  lucide.createIcons();
}

function loadMore() {
  const filtered = getFilteredItems();
  displayedCount = Math.min(displayedCount + itemsPerLoad, filtered.length);
  renderItems();
}

function setFilter(category) {
  currentFilter = category;
  displayedCount = itemsPerLoad;
  
  filterBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });
  
  renderItems();
}

function openModal(item) {
  modalContent.innerHTML = `
    <img src="${item.image}" alt="${item.name}" />
    <div class="modal-info">
      <h3 class="item-name">${item.name}</h3>
      <span class="item-category">${item.category}</span>
    </div>
  `;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  lucide.createIcons();
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Event listeners
loadMoreBtn.addEventListener('click', loadMore);
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => setFilter(btn.dataset.category));
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});

// Initialize
displayedCount = itemsPerLoad;
renderItems();
lucide.createIcons();

// Hide filter bar when scrolled past gallery
const filterControls = document.querySelector('.filter-controls');

window.addEventListener('scroll', () => {
  if (galleryGrid) {
    const galleryRect = galleryGrid.getBoundingClientRect();
    const galleryBottom = galleryRect.bottom;
    
    // Hide filter bar when gallery bottom is above viewport
    if (galleryBottom < 150) {
      filterControls.style.opacity = '0';
      filterControls.style.pointerEvents = 'none';
    } else {
      filterControls.style.opacity = '1';
      filterControls.style.pointerEvents = 'auto';
    }
  }
});