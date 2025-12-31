// Additional items to be loaded dynamically (not in initial HTML for SEO)
const additionalAccessories = [
  // More Laptops & Printers
  {
    name: "HP EliteBook 840 G5",
    category: "laptops",
    image: "images/laptops/elitebook3.jpg.webp",
    id: "item-4",
  },
  {
    name: '14" Laptop',
    category: "laptops",
    image: "images/laptops/laptop.jpg",
    id: "item-5",
  },
  {
    name: "Canon Pixma G3410 (Black)",
    category: "laptops",
    image: "images/laptops/printer2.jpg",
    id: "item-6",
  },

  // More Keyboards & Mice
  {
    name: "Compact Keyboard",
    category: "keyboards",
    image: "images/keyboards/keyboard3.png",
    id: "item-9",
  },
  {
    name: "Gaming Keyboard (RGB)",
    category: "keyboards",
    image: "images/keyboards/keyboard4.png",
    id: "item-10",
  },
  {
    name: "Bluetooth Keyboard",
    category: "keyboards",
    image: "images/keyboards/keyboard5.png",
    id: "item-11",
  },
  {
    name: "Optical Mouse",
    category: "keyboards",
    image: "images/keyboards/mouse3.jpg",
    id: "item-14",
  },
  {
    name: "Ergonomic Mouse",
    category: "keyboards",
    image: "images/keyboards/mouse4.jpeg",
    id: "item-15",
  },

  // More Cables & Adapters
  {
    name: "Micro-USB to USB-A Adapter",
    category: "cables",
    image: "images/cables/adapter2.png",
    id: "item-20",
  },
  {
    name: "USB-C Hub 7-Port",
    category: "cables",
    image: "images/cables/adapter3.png",
    id: "item-21",
  },
  {
    name: "VGA to HDMI Converter",
    category: "cables",
    image: "images/cables/adapter5.png",
    id: "item-23",
  },
  {
    name: "DisplayPort to HDMI Adapter",
    category: "cables",
    image: "images/cables/adapter6.png",
    id: "item-24",
  },
  {
    name: "USB-A and Type-C Flashdrive",
    category: "cables",
    image: "images/cables/adapter7.jpg",
    id: "item-25",
  },
  {
    name: "USB-A and Type-C Flashdrive",
    category: "cables",
    image: "images/cables/adapter8.jpg",
    id: "item-26",
  },
  {
    name: "USB Type-A to Type-B Adapter",
    category: "cables",
    image: "images/cables/adapter9.png",
    id: "item-27",
  },
  {
    name: "USB-C Adapter (variant)",
    category: "cables",
    image: "images/cables/adapter10.png",
    id: "item-28",
  },
  {
    name: "Micro-USB OTG Adapter",
    category: "cables",
    image: "images/cables/adapter11.png",
    id: "item-29",
  },
  {
    name: "USB to Lightning Adapter",
    category: "cables",
    image: "images/cables/adapter12.png",
    id: "item-30",
  },
  {
    name: "USB to Serial Adapter",
    category: "cables",
    image: "images/cables/adapter13.png",
    id: "item-31",
  },
  {
    name: "USB to VGA Adapter",
    category: "cables",
    image: "images/cables/adapter14.png",
    id: "item-32",
  },
  {
    name: "USB-C to DisplayPort Adapter",
    category: "cables",
    image: "images/cables/adapter15.png",
    id: "item-33",
  },
  {
    name: "Multiport USB Adapter",
    category: "cables",
    image: "images/cables/adapter16.png",
    id: "item-34",
  },
  {
    name: "USB-C to Ethernet Adapter",
    category: "cables",
    image: "images/cables/adapter17.png",
    id: "item-35",
  },
  {
    name: "USB Power Splitter/Adapter",
    category: "cables",
    image: "images/cables/adapter18.png",
    id: "item-36",
  },
  {
    name: "Charging/Data Adapter",
    category: "cables",
    image: "images/cables/adapter19.png",
    id: "item-37",
  },
  {
    name: "Multi-adapter Kit",
    category: "cables",
    image: "images/cables/adapter20.png",
    id: "item-38",
  },
  {
    name: "Laptop Charger",
    category: "cables",
    image: "images/cables/charger2.jpeg",
    id: "item-40",
  },
  {
    name: "Laptop Charger",
    category: "cables",
    image: "images/cables/charger3.jpeg",
    id: "item-41",
  },
  {
    name: "Laptop Charger",
    category: "cables",
    image: "images/cables/charger4.jpg",
    id: "item-42",
  },
  {
    name: "HDMI Cable (Long)",
    category: "cables",
    image: "images/cables/hdmi2.jpg",
    id: "item-44",
  },
  {
    name: "HDMI Cable (Short)",
    category: "cables",
    image: "images/cables/hdmi3.jpg",
    id: "item-45",
  },
  {
    name: "HDMI Cable (Flat)",
    category: "cables",
    image: "images/cables/hdmi4.png",
    id: "item-46",
  },
  {
    name: "HDMI Cable (Gold-plated)",
    category: "cables",
    image: "images/cables/hdmi5.png",
    id: "item-47",
  },
  {
    name: "HDMI Cable (Braided)",
    category: "cables",
    image: "images/cables/hdmi6.png",
    id: "item-48",
  },
  {
    name: "HDMI Cable (High-Speed)",
    category: "cables",
    image: "images/cables/hdmi7.png",
    id: "item-49",
  },
  {
    name: "HDTV to AV Video Converter",
    category: "cables",
    image: "images/cables/hdtv-converter.avif",
    id: "item-50",
  },
  {
    name: "HDMI Cable (Multi-pack)",
    category: "cables",
    image: "images/cables/hdmi8.png",
    id: "item-51",
  },
  {
    name: "HDMI Joiner",
    category: "cables",
    image: "images/cables/hdmi-joiner.png",
    id: "item-52",
  },
  {
    name: "HDMI Splitter",
    category: "cables",
    image: "images/cables/hdmi-splitter.png",
    id: "item-53",
  },
  {
    name: "8-Port Ethernet Switch",
    category: "cables",
    image: "images/cables/switch.jpg",
    id: "item-54",
  },
  {
    name: "Ethernet Cable (Cat6) 2",
    category: "cables",
    image: "images/cables/network-cable2.jpg",
    id: "item-56",
  },
  {
    name: "Ethernet Cable (Cat6) 3",
    category: "cables",
    image: "images/cables/network-cable3.jpg",
    id: "item-57",
  },
  {
    name: "Ethernet Cable (Cat6) 4",
    category: "cables",
    image: "images/cables/network-cable4.jpg",
    id: "item-58",
  },
  {
    name: "Ethernet Cable (Cat6) 5",
    category: "cables",
    image: "images/cables/network-cable5.jpg",
    id: "item-59",
  },
  {
    name: "Printer USB Cable",
    category: "cables",
    image: "images/cables/printer-cable.webp",
    id: "item-60",
  },
  {
    name: "Printer USB Cable 2",
    category: "cables",
    image: "images/cables/printer-cable2.jpg",
    id: "item-61",
  },
  {
    name: "Printer USB Cable 3",
    category: "cables",
    image: "images/cables/printer-cable3.jpg",
    id: "item-62",
  },
  {
    name: "Printer USB Cable 4",
    category: "cables",
    image: "images/cables/printer-cable4.jpg",
    id: "item-63",
  },
  {
    name: "USB-A to USB-A Cable",
    category: "cables",
    image: "images/cables/usb-to-usb-cable.webp",
    id: "item-64",
  },
  {
    name: "USB Wi-Fi Adapter",
    category: "cables",
    image: "images/cables/usb-wifi.png",
    id: "item-65",
  },
  {
    name: "OTG Adapter",
    category: "cables",
    image: "images/cables/otg.png",
    id: "item-66",
  },

  // More Storage
  {
    name: "128GB Flash Drive",
    category: "storage",
    image: "images/storage/flashdrive2.png",
    id: "item-71",
  },
  {
    name: "Smartsync Flash Drive",
    category: "storage",
    image: "images/storage/flashdrive3.jpg",
    id: "item-72",
  },
  {
    name: "1TB External HDD",
    category: "storage",
    image: "images/storage/hdd2.jpg",
    id: "item-74",
  },
  {
    name: "Portable External HDD",
    category: "storage",
    image: "images/storage/hdd3.jpg",
    id: "item-75",
  },
  {
    name: "External HDD (Silver)",
    category: "storage",
    image: "images/storage/hdd4.png",
    id: "item-76",
  },
  {
    name: "External HDD Enclosure",
    category: "storage",
    image: "images/storage/hddcase.png",
    id: "item-77",
  },
  {
    name: "HDD Enclosure 2",
    category: "storage",
    image: "images/storage/hddcase2.png",
    id: "item-78",
  },
  {
    name: "HDD Enclosure 3",
    category: "storage",
    image: "images/storage/hddcase3.png",
    id: "item-79",
  },
  {
    name: "HDD Enclosure 4",
    category: "storage",
    image: "images/storage/hddcase4.png",
    id: "item-80",
  },
  {
    name: "HDD Enclosure 5",
    category: "storage",
    image: "images/storage/hddcase5.png",
    id: "item-81",
  },
  {
    name: "HDD Enclosure 6",
    category: "storage",
    image: "images/storage/hddcase6.png",
    id: "item-82",
  },
  {
    name: "Micro SD Card",
    category: "storage",
    image: "images/storage/memory-card3.png",
    id: "item-84",
  },
  {
    name: "128GB SD Card",
    category: "storage",
    image: "images/storage/memory-card4.png",
    id: "item-85",
  },
  {
    name: "16GB DDR4 RAM",
    category: "storage",
    image: "images/storage/ram2.png",
    id: "item-87",
  },
  {
    name: "32GB DDR4 RAM",
    category: "storage",
    image: "images/storage/ram3.png",
    id: "item-88",
  },

  // More Other Accessories
  {
    name: "Fire TV Stick 10K",
    category: "accessories",
    image: "images/others/tv-stick.png",
    id: "item-90",
  },
  {
    name: "Smart TV Box",
    category: "accessories",
    image: "images/others/tv-box.jpg",
    id: "item-91",
  },
  {
    name: "Wireless Microphone",
    category: "accessories",
    image: "images/others/microphone.jpg",
    id: "item-92",
  },
  {
    name: "Printer Ink",
    category: "accessories",
    image: "images/others/ink.jpg",
    id: "item-94",
  },
  {
    name: "Laptop Battery",
    category: "accessories",
    image: "images/others/battery.jpg",
    id: "item-95",
  },
  {
    name: "Adjustable Laptop Stand",
    category: "accessories",
    image: "images/others/laptop-stand.jpg",
    id: "item-96",
  },
  {
    name: "Heat Sink",
    category: "accessories",
    image: "images/others/heatsink.webp",
    id: "item-97",
  },
  {
    name: "Wireless Mobile Wifi",
    category: "accessories",
    image: "images/others/wifi.jpg",
    id: "item-98",
  },
  {
    name: "Google Chromecast",
    category: "accessories",
    image: "images/others/chromecast.jpg",
    id: "item-99",
  },
  {
    name: "USB GPS",
    category: "accessories",
    image: "images/others/gps.jpg",
    id: "item-100",
  },
  {
    name: "External DVD Drive",
    category: "accessories",
    image: "images/others/cddrive.jpg",
    id: "item-101",
  },
  {
    name: "External DVD Drive",
    category: "accessories",
    image: "images/others/cddrive2.jpg",
    id: "item-101b",
  },
  {
    name: "Wifi Security Camera",
    category: "accessories",
    image: "images/others/camera3.jpg",
    id: "item-104",
  },
  {
    name: "Wifi Indoor Security Camera",
    category: "accessories",
    image: "images/others/camera2.jpg",
    id: "item-105",
  },
  {
    name: "Computer Lock",
    category: "accessories",
    image: "images/others/computer-lock.jpg",
    id: "item-106",
  },
  {
    name: "Handboss Cleaning Kit",
    category: "accessories",
    image: "images/others/cleaner.jpg",
    id: "item-107",
  },
];

let currentFilter = "all";
let displayedCount = 0;
const itemsPerLoad = 12;
let additionalItemsLoaded = false;

const galleryGrid = document.getElementById("galleryGrid");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const itemsCount = document.getElementById("itemsCount");
const filterBtns = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("imageModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

// Get initial items from HTML
let initialItems = Array.from(galleryGrid.querySelectorAll(".gallery-item"));
let allGalleryItems = [...initialItems];

function createGalleryItem(item) {
  const div = document.createElement("div");
  div.className = "gallery-item";
  div.setAttribute("data-category", item.category);
  div.setAttribute("data-id", item.id);
  div.innerHTML = `
    <img src="${item.image}" alt="${item.name}" loading="lazy" />
    <div class="item-info">
      <h3 class="item-name">${item.name}</h3>
      <span class="item-category">${item.category}</span>
    </div>
  `;
  div.addEventListener("click", () => openModal(div));
  return div;
}

function loadAdditionalItems() {
  if (!additionalItemsLoaded) {
    additionalAccessories.forEach((item) => {
      const itemElement = createGalleryItem(item);
      galleryGrid.appendChild(itemElement);
    });
    allGalleryItems = Array.from(galleryGrid.querySelectorAll(".gallery-item"));
    additionalItemsLoaded = true;
  }
}

function getTotalItemCount() {
  // Calculate total including both loaded and unloaded items
  if (currentFilter === "all") {
    return initialItems.length + additionalAccessories.length;
  } else {
    const loadedCount = initialItems.filter(
      (item) => item.getAttribute("data-category") === currentFilter
    ).length;
    const unloadedCount = additionalAccessories.filter(
      (item) => item.category === currentFilter
    ).length;
    return loadedCount + unloadedCount;
  }
}

function getFilteredItems() {
  if (currentFilter === "all") return allGalleryItems;
  return allGalleryItems.filter(
    (item) => item.getAttribute("data-category") === currentFilter
  );
}

function renderItems() {
  const filtered = getFilteredItems();
  const totalCount = getTotalItemCount();

  // Hide all items first
  allGalleryItems.forEach((item) => {
    item.style.display = "none";
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
  });

  // Show only filtered items up to displayedCount
  const itemsToShow = filtered.slice(0, displayedCount);
  itemsToShow.forEach((item, index) => {
    item.style.display = "block";
    item.style.animationDelay = `${(index % itemsPerLoad) * 0.04}s`;

    void item.offsetWidth;

    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
      item.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    }, 10);
  });

  updateUI(totalCount, filtered.length);
}

function updateUI(totalItems, currentlyLoadedFilteredCount) {
  // actualShowing should be the minimum of:
  // - displayedCount (how many we want to show)
  // - currentlyLoadedFilteredCount (how many filtered items are actually loaded in DOM)
  // - totalItems (total available including unloaded)
  const actualShowing = Math.min(
    displayedCount,
    currentlyLoadedFilteredCount,
    totalItems
  );
  itemsCount.textContent = `Showing ${actualShowing} of ${totalItems} items`;

  // Determine if we should show "Load More" button
  if (actualShowing >= totalItems) {
    // All items are shown
    loadMoreBtn.disabled = true;
    loadMoreBtn.innerHTML =
      '<i data-lucide="check-circle" class="icon"></i>All Items Loaded';
  } else {
    // More items available to show
    loadMoreBtn.disabled = false;
    loadMoreBtn.innerHTML =
      '<i data-lucide="plus-circle" class="icon"></i>Load More Items';
  }

  lucide.createIcons();
}

function loadMore() {
  // Load additional items if not already loaded
  if (!additionalItemsLoaded) {
    loadAdditionalItems();
  }

  const totalCount = getTotalItemCount();
  displayedCount = Math.min(displayedCount + itemsPerLoad, totalCount);
  renderItems();
}

function setFilter(category) {
  currentFilter = category;
  displayedCount = itemsPerLoad;

  filterBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.category === category);
  });

  renderItems();

  // Scroll to top of gallery smoothly
  const gallerySection = document.querySelector(".gallery-section");
  if (gallerySection) {
    const offset = 100;
    const elementPosition = gallerySection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

function openModal(item) {
  const img = item.querySelector("img");
  const name = item.querySelector(".item-name").textContent;
  const category = item.querySelector(".item-category").textContent;

  modalContent.innerHTML = `
    <img src="${img.src}" alt="${img.alt}" />
    <div class="modal-info">
      <h3 class="item-name">${name}</h3>
      <span class="item-category">${category}</span>
      <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid var(--border);">
        <p style="color: var(--muted); margin-bottom: 16px; font-size: 14px;">Interested in this product?</p>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <a href="tel:+2348032310325" class="btn btn-primary" style="text-decoration: none; font-size: 14px;">
            <i data-lucide="phone" class="icon" style="width: 16px; height: 16px;"></i>
            Call Now
          </a>
          <a href="https://wa.me/2348032310325?text=Hi, I'm interested in ${encodeURIComponent(
            name
          )}" target="_blank" rel="noopener" class="btn btn-success" style="text-decoration: none; font-size: 14px;">
            <i data-lucide="message-circle" class="icon" style="width: 16px; height: 16px;"></i>
            WhatsApp
          </a>
        </div>
      </div>
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

// Add click handlers to initial gallery items
allGalleryItems.forEach((item) => {
  item.addEventListener("click", () => openModal(item));
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
(() => {
  const filterBar = document.querySelector(".filter-controls");
  const siteHeader = document.querySelector(".site-header");
  const galleryContainer = document.querySelector(".gallery-container");

  if (!filterBar || !siteHeader) return;

  const DESKTOP_BREAKPOINT = 900;
  let filterStart = null;
  let spacer = null;

  function setHeaderOffset() {
    const offset = siteHeader.classList.contains("hide-header")
      ? 0
      : siteHeader.offsetHeight;

    document.documentElement.style.setProperty(
      "--header-offset",
      offset + "px"
    );
  }

  function setupSpacer() {
    if (!spacer) {
      spacer = document.createElement("div");
      spacer.style.height = filterBar.offsetHeight + "px";
      spacer.style.display = "none";
      filterBar.after(spacer);
    }
  }

  function resetMobile() {
    filterBar.classList.remove("fixed-mobile");
    if (spacer) spacer.style.display = "none";
    filterStart = null;
  }

  function handleDesktop() {
    resetMobile();
    filterBar.classList.add("sticky-desktop");
  }

  function handleMobile(scrollY) {
    filterBar.classList.remove("sticky-desktop");

    if (filterStart === null) {
      const rect = filterBar.getBoundingClientRect();
      filterStart = rect.top + window.scrollY;
      setupSpacer();
    }

    if (scrollY >= filterStart - siteHeader.offsetHeight) {
      filterBar.classList.add("fixed-mobile");
      spacer.style.display = "block";
    } else {
      filterBar.classList.remove("fixed-mobile");
      spacer.style.display = "none";
    }
  }

  function isPastGalleryEnd() {
    if (!galleryContainer) return false;

    const rect = galleryContainer.getBoundingClientRect();
    const galleryBottom = rect.bottom;

    // When gallery bottom is near top of viewport
    return galleryBottom <= 690;
  }

  function onScroll() {
    setHeaderOffset();

    const pastGallery = isPastGalleryEnd();

    if (pastGallery) {
      filterBar.style.opacity = "0";
      filterBar.style.pointerEvents = "none";
      return;
    } else {
      filterBar.style.opacity = "1";
      filterBar.style.pointerEvents = "auto";
    }

    if (window.innerWidth > DESKTOP_BREAKPOINT) {
      handleDesktop();
    } else {
      handleMobile(window.scrollY);
    }
  }

  function onResize() {
    resetMobile();
    onScroll();
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);

  window.addEventListener("load", onScroll);

  console.log("Filter bar controller initialized");
})();
