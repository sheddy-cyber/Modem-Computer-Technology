    const accessories = [
      // Keyboards & Mice
      { name: "Wireless Keyboard", category: "keyboards", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop" },
      { name: "Gaming Mouse RGB", category: "keyboards", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop" },
      { name: "Mechanical Keyboard", category: "keyboards", image: "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=400&h=300&fit=crop" },
      { name: "Ergonomic Mouse", category: "keyboards", image: "https://images.unsplash.com/photo-1563297007-0686b7003af7?w=400&h=300&fit=crop" },
      { name: "Bluetooth Keyboard", category: "keyboards", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop" },
      { name: "Wireless Mouse", category: "keyboards", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop" },
      { name: "Gaming Keyboard Pro", category: "keyboards", image: "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=400&h=300&fit=crop" },
      
      // Monitors
      { name: "24\" LED Monitor", category: "monitors", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop" },
      { name: "27\" Gaming Monitor", category: "monitors", image: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=400&h=300&fit=crop" },
      { name: "Ultrawide Monitor 34\"", category: "monitors", image: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=400&h=300&fit=crop" },
      { name: "4K Display Monitor", category: "monitors", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop" },
      { name: "Portable Monitor 15\"", category: "monitors", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop" },
      
      // Cables & Adapters
      { name: "USB-C Cable 2m", category: "cables", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop" },
      { name: "HDMI Cable 4K", category: "cables", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop" },
      { name: "USB Hub 7-Port", category: "cables", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop" },
      { name: "USB-C to HDMI Adapter", category: "cables", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop" },
      { name: "VGA to HDMI Converter", category: "cables", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop" },
      { name: "DisplayPort Cable", category: "cables", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop" },
      { name: "Ethernet Cable Cat6", category: "cables", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop" },
      { name: "USB Extension Cable", category: "cables", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop" },
      
      // Storage
      { name: "1TB External HDD", category: "storage", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop" },
      { name: "256GB SSD SATA", category: "storage", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop" },
      { name: "64GB Flash Drive", category: "storage", image: "https://images.unsplash.com/photo-1623573619038-c9f8c7e20f70?w=400&h=300&fit=crop" },
      { name: "2TB Portable SSD", category: "storage", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop" },
      { name: "Memory Card 128GB", category: "storage", image: "https://images.unsplash.com/photo-1623573619038-c9f8c7e20f70?w=400&h=300&fit=crop" },
      { name: "4TB External Drive", category: "storage", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop" },
      { name: "512GB M.2 NVMe SSD", category: "storage", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop" },
      
      // Other Accessories
      { name: "USB Webcam 1080p", category: "accessories", image: "https://images.unsplash.com/photo-1589739898338-f4e01c50c76e?w=400&h=300&fit=crop" },
      { name: "Laptop Cooling Pad", category: "accessories", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop" },
      { name: "Wireless Headset", category: "accessories", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop" },
      { name: "Laptop Stand Aluminum", category: "accessories", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop" },
      { name: "Cable Organizer Set", category: "accessories", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop" },
      { name: "Laptop Bag 15.6\"", category: "accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop" },
      { name: "Mouse Pad XL", category: "accessories", image: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=400&h=300&fit=crop" },
      { name: "Monitor Arm Mount", category: "accessories", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop" },
      { name: "Power Strip Surge 6", category: "accessories", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop" },
      { name: "Screen Cleaning Kit", category: "accessories", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop" },
      { name: "USB Microphone", category: "accessories", image: "https://images.unsplash.com/photo-1589739898338-f4e01c50c76e?w=400&h=300&fit=crop" },
      { name: "Desk Lamp LED", category: "accessories", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop" },
      { name: "Wireless Charger", category: "accessories", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop" },
      { name: "Laptop Privacy Screen", category: "accessories", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop" },
      { name: "USB Fan Portable", category: "accessories", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop" },
    ];

    // Duplicate to reach 70+ items
    const allAccessories = [];
    for (let i = 0; i < 2; i++) {
      accessories.forEach((item, index) => {
        allAccessories.push({
          ...item,
          name: i > 0 ? `${item.name} ${String.fromCharCode(65 + i)}` : item.name,
          id: `item-${i}-${index}`
        });
      });
    }

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
      itemsCount.textContent = `Showing ${displayedCount} of ${totalItems} items`;
      
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