const accessories = [
  //Laptops & Printers
  {
    name: "HP EliteBook 840 G5",
    category: "laptops",
    image: "images/laptops/elitebook.jpg",
  },
  {
    name: "HP EliteBook 840 G5 (Silver)",
    category: "laptops",
    image: "images/laptops/elitebook2.jpg",
  },
  {
    name: "HP EliteBook 840 G5",
    category: "laptops",
    image: "images/laptops/elitebook3.jpg.webp",
  },
  {
    name: '14" Laptop (Silver)',
    category: "laptops",
    image: "images/laptops/laptop2.jpg",
  },
  {
    name: '14" Laptop',
    category: "laptops",
    image: "images/laptops/laptop.jpg",
  },
  {
    name: "Canon Pixma G3410",
    category: "laptops",
    image: "images/laptops/printer.jpg",
  },
  {
    name: "Canon Pixma G3410 (Black)",
    category: "laptops",
    image: "images/laptops/printer2.jpg",
  },

  // Keyboards & Mice
  {
    name: "Logitech Keyboard (Standard)",
    category: "keyboards",
    image: "images/keyboards/keyboard.png",
  },
  {
    name: "Compact Keyboard",
    category: "keyboards",
    image: "images/keyboards/keyboard3.png",
  },
  {
    name: "Mechanical Keyboard",
    category: "keyboards",
    image: "images/keyboards/keyboard2.png",
  },
  {
    name: "Gaming Keyboard (RGB)",
    category: "keyboards",
    image: "images/keyboards/keyboard4.png",
  },
  {
    name: "Bluetooth Keyboard",
    category: "keyboards",
    image: "images/keyboards/keyboard5.png",
  },
  {
    name: "Wireless Mouse",
    category: "keyboards",
    image: "images/keyboards/mouse.jpeg",
  },
  {
    name: "Gaming Mouse RGB",
    category: "keyboards",
    image: "images/keyboards/mouse2.jpg",
  },
  {
    name: "Optical Mouse",
    category: "keyboards",
    image: "images/keyboards/mouse3.jpg",
  },
  {
    name: "Ergonomic Mouse",
    category: "keyboards",
    image: "images/keyboards/mouse4.jpeg",
  },

  // Monitors
  {
    name: '24" LED Monitor',
    category: "monitors",
    image: "images/monitors/monitor.jpeg",
  },
  {
    name: '27" Gaming Monitor',
    category: "monitors",
    image: "images/monitors/monitor2.jpg",
  },
  {
    name: 'Ultrawide Monitor 34"',
    category: "monitors",
    image: "images/monitors/monitor3.png",
  },

  // Cables & Adapters
  {
    name: "USB-C to USB-A Adapter",
    category: "cables",
    image: "images/cables/adapter.png",
  },
  {
    name: "Micro-USB to USB-A Adapter",
    category: "cables",
    image: "images/cables/adapter2.png",
  },
  {
    name: "USB-C Hub 7-Port",
    category: "cables",
    image: "images/cables/adapter3.png",
  },
  {
    name: "USB-C to HDMI Adapter",
    category: "cables",
    image: "images/cables/adapter4.png",
  },
  {
    name: "VGA to HDMI Converter",
    category: "cables",
    image: "images/cables/adapter5.png",
  },
  {
    name: "DisplayPort to HDMI Adapter",
    category: "cables",
    image: "images/cables/adapter6.png",
  },
  {
    name: "USB-A and Type-C Flashdrive",
    category: "cables",
    image: "images/cables/adapter7.jpg",
  },
  {
    name: "USB-A and Type-C Flashdrive",
    category: "cables",
    image: "images/cables/adapter8.jpg",
  },
  {
    name: "USB Type-A to Type-B Adapter",
    category: "cables",
    image: "images/cables/adapter9.png",
  },
  {
    name: "USB-C Adapter (variant)",
    category: "cables",
    image: "images/cables/adapter10.png",
  },
  {
    name: "Micro-USB OTG Adapter",
    category: "cables",
    image: "images/cables/adapter11.png",
  },
  {
    name: "USB to Lightning Adapter",
    category: "cables",
    image: "images/cables/adapter12.png",
  },
  {
    name: "USB to Serial Adapter",
    category: "cables",
    image: "images/cables/adapter13.png",
  },
  {
    name: "USB to VGA Adapter",
    category: "cables",
    image: "images/cables/adapter14.png",
  },
  {
    name: "USB-C to DisplayPort Adapter",
    category: "cables",
    image: "images/cables/adapter15.png",
  },
  {
    name: "Multiport USB Adapter",
    category: "cables",
    image: "images/cables/adapter16.png",
  },
  {
    name: "USB-C to Ethernet Adapter",
    category: "cables",
    image: "images/cables/adapter17.png",
  },
  {
    name: "USB Power Splitter/Adapter",
    category: "cables",
    image: "images/cables/adapter18.png",
  },
  {
    name: "Charging/Data Adapter",
    category: "cables",
    image: "images/cables/adapter19.png",
  },
  {
    name: "Multi-adapter Kit",
    category: "cables",
    image: "images/cables/adapter20.png",
  },
  {
    name: "Laptop Charger",
    category: "cables",
    image: "images/cables/charger.jpeg",
  },
  {
    name: "Laptop Charger",
    category: "cables",
    image: "images/cables/charger2.jpeg",
  },
  {
    name: "Laptop Charger",
    category: "cables",
    image: "images/cables/charger3.jpeg",
  },
  {
    name: "Laptop Charger",
    category: "cables",
    image: "images/cables/charger4.jpg",
  },
  {
    name: "HDMI Cable",
    category: "cables",
    image: "images/cables/hdmi.png",
  },
  {
    name: "HDMI Cable (Long)",
    category: "cables",
    image: "images/cables/hdmi2.jpg",
  },
  {
    name: "HDMI Cable (Short)",
    category: "cables",
    image: "images/cables/hdmi3.jpg",
  },
  {
    name: "HDMI Cable (Flat)",
    category: "cables",
    image: "images/cables/hdmi4.png",
  },
  {
    name: "HDMI Cable (Gold-plated)",
    category: "cables",
    image: "images/cables/hdmi5.png",
  },
  {
    name: "HDMI Cable (Braided)",
    category: "cables",
    image: "images/cables/hdmi6.png",
  },
  {
    name: "HDMI Cable (High-Speed)",
    category: "cables",
    image: "images/cables/hdmi7.png",
  },
  {
    name: " HDTV to AV Video Converter",
    category: "cables",
    image: "images/cables/hdtv-converter.avif",
  },
  {
    name: "HDMI Cable (Multi-pack)",
    category: "cables",
    image: "images/cables/hdmi8.png",
  },
  {
    name: "HDMI Joiner",
    category: "cables",
    image: "images/cables/hdmi-joiner.png",
  },
  {
    name: "HDMI Splitter",
    category: "cables",
    image: "images/cables/hdmi-splitter.png",
  },
  {
    name: "8-Port Ethernet Switch",
    category: "cables",
    image: "images/cables/switch.jpg",
  },
  {
    name: "Ethernet Cable (Cat6)",
    category: "cables",
    image: "images/cables/network-cable.jpg",
  },
  {
    name: "Ethernet Cable (Cat6) 2",
    category: "cables",
    image: "images/cables/network-cable2.jpg",
  },
  {
    name: "Ethernet Cable (Cat6) 3",
    category: "cables",
    image: "images/cables/network-cable3.jpg",
  },
  {
    name: "Ethernet Cable (Cat6) 4",
    category: "cables",
    image: "images/cables/network-cable4.jpg",
  },
  {
    name: "Ethernet Cable (Cat6) 5",
    category: "cables",
    image: "images/cables/network-cable5.jpg",
  },
  {
    name: "Printer USB Cable",
    category: "cables",
    image: "images/cables/printer-cable.webp",
  },
  {
    name: "Printer USB Cable 2",
    category: "cables",
    image: "images/cables/printer-cable2.jpg",
  },
  {
    name: "Printer USB Cable 3",
    category: "cables",
    image: "images/cables/printer-cable3.jpg",
  },
  {
    name: "Printer USB Cable 4",
    category: "cables",
    image: "images/cables/printer-cable4.jpg",
  },
  {
    name: "USB-A to USB-A Cable",
    category: "cables",
    image: "images/cables/usb-to-usb-cable.webp",
  },
  {
    name: "USB Wi-Fi Adapter",
    category: "cables",
    image: "images/cables/usb-wifi.png",
  },
  {
    name: "OTG Adapter",
    category: "cables",
    image: "images/cables/otg.png",
  },

  // Storage
  {
    name: "64GB Flash Drive",
    category: "storage",
    image: "images/storage/flashdrive.png",
  },
  {
    name: "128GB Flash Drive",
    category: "storage",
    image: "images/storage/flashdrive2.png",
  },
  {
    name: "Smartsync Flash Drive",
    category: "storage",
    image: "images/storage/flashdrive3.jpg",
  },
  {
    name: "1TB External HDD",
    category: "storage",
    image: "images/storage/hdd.jpg",
  },
  {
    name: "1TB External HDD",
    category: "storage",
    image: "images/storage/hdd2.jpg",
  },
  {
    name: "Portable External HDD",
    category: "storage",
    image: "images/storage/hdd3.jpg",
  },
  {
    name: "External HDD (Silver)",
    category: "storage",
    image: "images/storage/hdd4.png",
  },
  {
    name: "External HDD Enclosure",
    category: "storage",
    image: "images/storage/hddcase.png",
  },
  {
    name: "HDD Enclosure 2",
    category: "storage",
    image: "images/storage/hddcase2.png",
  },
  {
    name: "HDD Enclosure 3",
    category: "storage",
    image: "images/storage/hddcase3.png",
  },
  {
    name: "HDD Enclosure 4",
    category: "storage",
    image: "images/storage/hddcase4.png",
  },
  {
    name: "HDD Enclosure 5",
    category: "storage",
    image: "images/storage/hddcase5.png",
  },
  {
    name: "HDD Enclosure 6",
    category: "storage",
    image: "images/storage/hddcase6.png",
  },
  {
    name: "Memory Card 64GB",
    category: "storage",
    image: "images/storage/memory-card.png",
  },
  {
    name: "Micro SD Card",
    category: "storage",
    image: "images/storage/memory-card3.png",
  },
  {
    name: "128GB SD Card",
    category: "storage",
    image: "images/storage/memory-card4.png",
  },
  {
    name: "8GB DDR4 RAM",
    category: "storage",
    image: "images/storage/ram.png",
  },
  {
    name: "16GB DDR4 RAM",
    category: "storage",
    image: "images/storage/ram2.png",
  },
  {
    name: "32GB DDR4 RAM",
    category: "storage",
    image: "images/storage/ram3.png",
  },

  // Other Accessories
  {
    name: "50000mAh Powerbank",
    category: "accessories",
    image: "images/others/powerbank.webp",
  },
  {
    name: "Fire TV Stick 10K",
    category: "accessories",
    image: "images/others/tv-stick.png",
  },
  {
    name: "Smart TV Box",
    category: "accessories",
    image: "images/others/tv-box.jpg",
  },
  {
    name: "Wireless Microphone",
    category: "accessories",
    image: "images/others/microphone.jpg",
  },
  {
    name: "PS4 Gamepad",
    category: "accessories",
    image: "images/others/gamepad.jpg",
  },
  {
    name: "Printer Ink",
    category: "accessories",
    image: "images/others/ink.jpg",
  },
  {
    name: "Laptop Battery",
    category: "accessories",
    image: "images/others/battery.jpg",
  },
  {
    name: "Adjustable Laptop Stand",
    category: "accessories",
    image: "images/others/laptop-stand.jpg",
  },
  {
    name: "Heat Sink",
    category: "accessories",
    image: "images/others/heatsink.webp",
  },
  {
    name: "Wireless Mobile Wifi",
    category: "accessories",
    image: "images/others/wifi.jpg",
  },
  {
    name: "Google Chromecast",
    category: "accessories",
    image: "images/others/chromecast.jpg",
  },
  {
    name: "USB GPS",
    category: "accessories",
    image: "images/others/gps.jpg",
  },
  {
    name: "External DVD Drive",
    category: "accessories",
    image: "images/others/cddrive.jpg",
  },
  {
    name: "External DVD Drive",
    category: "accessories",
    image: "images/others/cddrive2.jpg",
  },
  {
    name: "Multimedia Speakers",
    category: "accessories",
    image: "images/others/speaker.webp",
  },
  {
    name: "Wifi Security Camera",
    category: "accessories",
    image: "images/others/camera.jpg",
  },
  {
    name: "Wifi Indoor Security Camera",
    category: "accessories",
    image: "images/others/camera2.jpg",
  },
  {
    name: "Computer Lock",
    category: "accessories",
    image: "images/others/computer-lock.jpg",
  },
  {
    name: "Handboss Cleaning Kit",
    category: "accessories",
    image: "images/others/cleaner.jpg",
  },
];

// Add unique IDs to each item
const allAccessories = accessories.map((item, index) => ({
  ...item,
  id: `item-${index}`,
}));

let currentFilter = "all";
let displayedCount = 0;
const itemsPerLoad = 12;

const galleryGrid = document.getElementById("galleryGrid");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const itemsCount = document.getElementById("itemsCount");
const filterBtns = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("imageModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

function getFilteredItems() {
  if (currentFilter === "all") return allAccessories;
  return allAccessories.filter((item) => item.category === currentFilter);
}

function renderItems() {
  const filtered = getFilteredItems();
  const itemsToShow = filtered.slice(0, displayedCount);

  galleryGrid.innerHTML = "";
  itemsToShow.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "gallery-item";
    div.style.animationDelay = `${(index % itemsPerLoad) * 0.04}s`;
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" loading="lazy" />
      <div class="item-info">
        <h3 class="item-name">${item.name}</h3>
        <span class="item-category">${item.category}</span>
      </div>
    `;

    div.addEventListener("click", () => openModal(item));
    galleryGrid.appendChild(div);
  });

  updateUI(filtered.length);
}

function updateUI(totalItems) {
  const actualShowing = Math.min(displayedCount, totalItems);
  itemsCount.textContent = `Showing ${actualShowing} of ${totalItems} items`;

  if (displayedCount >= totalItems) {
    loadMoreBtn.disabled = true;
    loadMoreBtn.innerHTML =
      '<i data-lucide="check-circle" class="icon"></i>All Items Loaded';
  } else {
    loadMoreBtn.disabled = false;
    loadMoreBtn.innerHTML =
      '<i data-lucide="plus-circle" class="icon"></i>Load More Items';
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

  filterBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.category === category);
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
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  lucide.createIcons();
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Event listeners
loadMoreBtn.addEventListener("click", loadMore);
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => setFilter(btn.dataset.category));
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});

// Initialize
displayedCount = itemsPerLoad;
renderItems();
lucide.createIcons();

// Handle filter bar visibility and position
const filterControls = document.querySelector(".filter-controls");
const siteHeader = document.querySelector(".site-header");

if (filterControls && galleryGrid && siteHeader) {
  window.addEventListener("scroll", () => {
    const galleryRect = galleryGrid.getBoundingClientRect();
    const galleryBottom = galleryRect.bottom;

    // Hide filter bar when gallery bottom is above viewport
    if (galleryBottom < 150) {
      filterControls.style.opacity = "0";
      filterControls.style.pointerEvents = "none";
    } else {
      filterControls.style.opacity = "1";
      filterControls.style.pointerEvents = "auto";
    }

    // Adjust filter bar position based on header visibility
    if (siteHeader.classList.contains("hide-header")) {
      filterControls.style.top = "0px";
    } else {
      filterControls.style.top = "76px";
    }
  });
}
