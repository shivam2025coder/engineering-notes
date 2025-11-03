// Application State
const appState = {
  currentPage: 'home',
  currentSubject: null,
  currentChapter: null,
  editingTopicId: null,
  deletingTopicId: null,
  theme: 'light',
  subjects: [
    {
      id: 'math',
      name: 'Mathematics',
      description: 'Calculus, Algebra, Linear Algebra, and more',
      color: '#4A90E2',
      icon: '📐',
      gradient: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)',
      chapters: [
        { id: 'math_ch1', number: 1, title: 'Differential Calculus', description: 'Limits, Continuity, Derivatives, and Applications' },
        { id: 'math_ch2', number: 2, title: 'Integral Calculus', description: 'Integration techniques, Definite and Indefinite Integrals' },
        { id: 'math_ch3', number: 3, title: 'Linear Algebra', description: 'Matrices, Determinants, Eigenvalues and Eigenvectors' },
        { id: 'math_ch4', number: 4, title: 'Vector Calculus', description: 'Gradient, Divergence, Curl, Line and Surface Integrals' },
        { id: 'math_ch5', number: 5, title: 'Differential Equations', description: 'First and Second Order ODEs, Laplace Transforms' }
      ]
    },
    {
      id: 'physics',
      name: 'Physics',
      description: 'Mechanics, Thermodynamics, Electromagnetics, and Optics',
      color: '#E74C3C',
      icon: '⚛️',
      gradient: 'linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)',
      chapters: [
        { id: 'physics_ch1', number: 1, title: 'Mechanics', description: "Newton's Laws, Motion, Forces, Energy and Momentum" },
        { id: 'physics_ch2', number: 2, title: 'Thermodynamics', description: 'Laws of Thermodynamics, Heat Transfer, Entropy' },
        { id: 'physics_ch3', number: 3, title: 'Electromagnetism', description: "Electric and Magnetic Fields, Maxwell's Equations" },
        { id: 'physics_ch4', number: 4, title: 'Wave Optics', description: 'Interference, Diffraction, Polarization' },
        { id: 'physics_ch5', number: 5, title: 'Quantum Mechanics', description: 'Wave-Particle Duality, Schrodinger Equation' }
      ]
    },
    {
      id: 'chemistry',
      name: 'Chemistry',
      description: 'Atomic Structure, Bonding, Thermochemistry, and Polymers',
      color: '#27AE60',
      icon: '🧪',
      gradient: 'linear-gradient(135deg, #27AE60 0%, #1E8449 100%)',
      chapters: [
        { id: 'chemistry_ch1', number: 1, title: 'Atomic Structure', description: 'Quantum Numbers, Electronic Configuration, Periodic Table' },
        { id: 'chemistry_ch2', number: 2, title: 'Chemical Bonding', description: 'Ionic, Covalent, Metallic Bonds, Molecular Geometry' },
        { id: 'chemistry_ch3', number: 3, title: 'Thermochemistry', description: 'Enthalpy, Entropy, Gibbs Free Energy' },
        { id: 'chemistry_ch4', number: 4, title: 'Electrochemistry', description: 'Redox Reactions, Batteries, Corrosion, Electrolysis' },
        { id: 'chemistry_ch5', number: 5, title: 'Polymers', description: 'Types of Polymers, Polymerization, Properties and Applications' }
      ]
    },
    {
      id: 'programming',
      name: 'Programming',
      description: 'C/C++, Data Structures, and Object-Oriented Programming',
      color: '#9B59B6',
      icon: '💻',
      gradient: 'linear-gradient(135deg, #9B59B6 0%, #7D3C98 100%)',
      chapters: [
        { id: 'prog_ch1', number: 1, title: 'Introduction to C/C++', description: 'Syntax, Variables, Data Types, Operators, Input/Output' },
        { id: 'prog_ch2', number: 2, title: 'Control Structures', description: 'If-else, Loops, Switch Statements, Break and Continue' },
        { id: 'prog_ch3', number: 3, title: 'Functions and Recursion', description: 'Function Declaration, Scope, Call by Value/Reference, Recursion' },
        { id: 'prog_ch4', number: 4, title: 'Arrays and Strings', description: '1D and 2D Arrays, String Operations, Searching and Sorting' },
        { id: 'prog_ch5', number: 5, title: 'Pointers and Memory', description: 'Pointer Arithmetic, Dynamic Memory Allocation, Deallocation' }
      ]
    },
    {
      id: 'mechanics',
      name: 'Engineering Mechanics',
      description: 'Statics, Dynamics, Kinematics, and Material Strength',
      color: '#F39C12',
      icon: '⚙️',
      gradient: 'linear-gradient(135deg, #F39C12 0%, #D68910 100%)',
      chapters: [
        { id: 'mech_ch1', number: 1, title: 'Statics of Particles', description: 'Force Systems, Equilibrium, Free Body Diagrams, Resultant Forces' },
        { id: 'mech_ch2', number: 2, title: 'Rigid Bodies', description: 'Moments, Couples, Equilibrium of Rigid Bodies, Support Reactions' },
        { id: 'mech_ch3', number: 3, title: 'Friction', description: 'Laws of Friction, Static and Kinetic Friction, Applications' },
        { id: 'mech_ch4', number: 4, title: 'Kinematics', description: 'Motion of Particles, Velocity, Acceleration, Relative Motion' },
        { id: 'mech_ch5', number: 5, title: 'Introduction to Measurement and Mechatronics', description: "Concept of Measurement, Measurement of Pressure" }
      ]
    }
  ],
  topics: []
};

// Initialize the application
function init() {
  loadSampleTopics();
  initTheme();
  renderHomePage();
  updateStats();
}

// Load sample topics
function loadSampleTopics() {
  const sampleTopics = [
    {
      id: generateId(),
      subjectId: 'math',
      chapterId: 'math_ch1',
      name: 'Limits and Continuity',
      content: "Limits are fundamental to calculus. A limit is the value that a function approaches as the input approaches some value.\n\nKey Concepts:\n- Definition of limit\n- Left-hand and right-hand limits\n- Continuity at a point\n- Continuity on an interval\n- Properties of limits\n\nApplications: Used in finding derivatives, understanding function behavior, and solving problems involving rates of change.",
      tags: ['limit', 'continuity'],
      favorite: false,
      createdDate: '2025-11-01',
      createdTime: '10:30',
      modifiedDate: '2025-11-01',
      modifiedTime: '10:30'
    },
    {
      id: generateId(),
      subjectId: 'math',
      chapterId: 'math_ch1',
      name: 'Derivatives and Applications',
      content: "Derivatives represent the rate of change of a function. The derivative of a function f(x) at a point x is denoted as f'(x) or df/dx.\n\nBasic Rules:\n- Power Rule: d/dx(x^n) = nx^(n-1)\n- Product Rule: d/dx(uv) = u'v + uv'\n- Quotient Rule: d/dx(u/v) = (u'v - uv')/v²\n- Chain Rule: d/dx(f(g(x))) = f'(g(x)) × g'(x)\n\nApplications: Finding maxima/minima, optimization problems, rate of change problems.",
      tags: ['derivatives', 'calculus', 'important'],
      favorite: true,
      createdDate: '2025-11-01',
      createdTime: '11:00',
      modifiedDate: '2025-11-01',
      modifiedTime: '11:00'
    },
    {
      id: generateId(),
      subjectId: 'physics',
      chapterId: 'physics_ch1',
      name: "Newton's First Law of Motion",
      content: "Newton's First Law (Law of Inertia) states that an object at rest remains at rest, and an object in motion remains in motion with constant velocity unless acted upon by an external force.\n\nKey Points:\n- Objects have inertia\n- Force is required to change motion\n- Inertial reference frames\n- Examples: Sliding on ice, seatbelts in cars\n\nFormula: F = 0 => a = 0 (no acceleration)",
      tags: ['newton-laws', 'motion'],
      favorite: false,
      createdDate: '2025-11-01',
      createdTime: '11:15',
      modifiedDate: '2025-11-01',
      modifiedTime: '11:15'
    },
    {
      id: generateId(),
      subjectId: 'physics',
      chapterId: 'physics_ch1',
      name: "Newton's Second Law",
      content: "The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.\n\nFormula: F = ma\n\nWhere:\n- F = Net force (Newtons)\n- m = Mass (kg)\n- a = Acceleration (m/s²)\n\nImplications:\n- Heavier objects require more force to accelerate\n- Same force produces greater acceleration in lighter objects\n- Direction of acceleration is same as direction of net force",
      tags: ['newton-laws', 'force', 'exam'],
      favorite: true,
      createdDate: '2025-11-01',
      createdTime: '12:00',
      modifiedDate: '2025-11-01',
      modifiedTime: '12:00'
    },
    {
      id: generateId(),
      subjectId: 'programming',
      chapterId: 'prog_ch1',
      name: 'Variables and Data Types in C++',
      content: "Variables are containers for storing data values. C++ is a strongly-typed language, meaning each variable must have a declared data type.\n\nBasic Data Types:\n- int: Integer values (-2147483648 to 2147483647)\n- float: Single precision floating-point\n- double: Double precision floating-point\n- char: Single character\n- bool: Boolean (true/false)\n- string: Sequence of characters\n\nExample:\nint age = 20;\nfloat height = 5.8;\nstring name = \"John\";",
      tags: ['variables', 'data-types'],
      favorite: false,
      createdDate: '2025-11-01',
      createdTime: '09:45',
      modifiedDate: '2025-11-01',
      modifiedTime: '09:45'
    },
    {
      id: generateId(),
      subjectId: 'chemistry',
      chapterId: 'chemistry_ch1',
      name: "Bohr's Model of Atom",
      content: "Bohr's Model explains the structure of hydrogen atom and provides quantum numbers.\n\nPostulates:\n1. Electrons orbit nucleus in discrete energy levels\n2. Electrons don't radiate energy while orbiting\n3. Energy is absorbed/emitted when electron changes orbits\n4. Angular momentum is quantized: mvr = nh/2π\n\nEnergy Levels: K(n=1), L(n=2), M(n=3), N(n=4)",
      tags: ['atom-structure', 'bohr-model'],
      favorite: false,
      createdDate: '2025-11-01',
      createdTime: '14:20',
      modifiedDate: '2025-11-01',
      modifiedTime: '14:20'
    },
    {
      id: generateId(),
      subjectId: 'mechanics',
      chapterId: 'mech_ch1',
      name: 'System of Coplanar Forces',
      content: "Coplanar forces are forces that lie in the same plane. When multiple coplanar forces act on a body, their combined effect can be represented by a single resultant force.\n\nMethods to Find Resultant:\n1. Parallelogram Law\n2. Triangle Law\n3. Polygon Law\n4. Component Method\n\nResultant Magnitude: R = √(ΣFx² + ΣFy²)\nDirection: θ = tan⁻¹(ΣFy/ΣFx)",
      tags: ['forces', 'resultant'],
      favorite: false,
      createdDate: '2025-11-01',
      createdTime: '13:00',
      modifiedDate: '2025-11-01',
      modifiedTime: '13:00'
    }
  ];
  
  appState.topics = sampleTopics;
}

// Generate unique ID
function generateId() {
  return 'topic_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Initialize theme
function initTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  appState.theme = prefersDark ? 'dark' : 'light';
  updateThemeIcon();
}

// Toggle theme
function toggleTheme() {
  appState.theme = appState.theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', appState.theme);
  updateThemeIcon();
  showToast(appState.theme === 'dark' ? '🌙 Dark mode enabled' : '☀️ Light mode enabled', 'info');
}

// Update theme icon
function updateThemeIcon() {
  const icon = document.querySelector('.theme-icon');
  if (icon) {
    icon.textContent = appState.theme === 'dark' ? '☀️' : '🌙';
  }
}

// Update statistics
function updateStats() {
  const totalChapters = appState.subjects.reduce((sum, s) => sum + s.chapters.length, 0);
  const totalTopics = appState.topics.length;
  
  const totalChaptersEl = document.getElementById('totalChapters');
  const totalTopicsEl = document.getElementById('totalTopics');
  
  if (totalChaptersEl) totalChaptersEl.textContent = totalChapters;
  if (totalTopicsEl) totalTopicsEl.textContent = totalTopics;
}

// Show specific page
function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  
  if (pageId === 'home') {
    document.getElementById('homePage').classList.add('active');
    appState.currentPage = 'home';
    appState.currentSubject = null;
    appState.currentChapter = null;
    renderHomePage();
  }
}

// Show subject page
function showSubject(subjectId) {
  const subject = appState.subjects.find(s => s.id === subjectId);
  if (!subject) return;
  
  appState.currentSubject = subject;
  appState.currentPage = 'subject';
  appState.currentChapter = null;
  
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  
  document.getElementById('subjectPage').classList.add('active');
  
  renderSubjectPage(subject);
}

// Show chapter
function showChapter(chapterId) {
  if (!appState.currentSubject) return;
  
  const chapter = appState.currentSubject.chapters.find(c => c.id === chapterId);
  if (!chapter) return;
  
  appState.currentChapter = chapter;
  
  // Update chapter list active state
  document.querySelectorAll('.chapter-item').forEach(item => {
    item.classList.remove('active');
  });
  document.querySelector(`[data-chapter-id="${chapterId}"]`)?.classList.add('active');
  
  // Render chapter content
  renderChapterContent(chapter);
}

// Render home page
function renderHomePage() {
  const grid = document.getElementById('subjectsGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  appState.subjects.forEach(subject => {
    const topicsCount = appState.topics.filter(t => t.subjectId === subject.id).length;
    
    const card = document.createElement('div');
    card.className = 'subject-card';
    card.style.setProperty('--subject-color', subject.color);
    card.onclick = () => showSubject(subject.id);
    
    card.innerHTML = `
      <span class="subject-card-icon">${subject.icon}</span>
      <h3 class="subject-card-title">${subject.name}</h3>
      <p class="subject-card-description">${subject.description}</p>
      <p class="subject-card-chapters">${subject.chapters.length} Chapters • ${topicsCount} Topics</p>
    `;
    
    grid.appendChild(card);
  });
}

// Filter subjects
function filterSubjects() {
  const searchTerm = document.getElementById('homeSearch').value.toLowerCase();
  const cards = document.querySelectorAll('.subject-card');
  
  cards.forEach((card, index) => {
    const subject = appState.subjects[index];
    const matches = subject.name.toLowerCase().includes(searchTerm) ||
                   subject.description.toLowerCase().includes(searchTerm);
    card.style.display = matches ? 'block' : 'none';
  });
}

// Render subject page
function renderSubjectPage(subject) {
  // Update breadcrumb
  document.getElementById('breadcrumbSubject').textContent = subject.name;
  document.getElementById('subjectIconLarge').textContent = subject.icon;
  
  // Render chapters sidebar
  renderChaptersSidebar(subject);
  
  // Show welcome message initially
  const container = document.getElementById('topicsContainer');
  container.innerHTML = `
    <div class="empty-state-large">
      <span class="empty-icon">📝</span>
      <h3>Welcome to ${subject.name}</h3>
      <p>Select a chapter from the sidebar to view and create topics</p>
    </div>
  `;
  
  // Hide search and sort
  document.getElementById('topicSearch').style.display = 'none';
  document.getElementById('topicSort').style.display = 'none';
  
  // Update title
  document.getElementById('chapterMainTitle').textContent = subject.name;
  document.getElementById('chapterMainDescription').textContent = subject.description;
}

// Render chapters sidebar
function renderChaptersSidebar(subject) {
  const list = document.getElementById('chaptersList');
  list.innerHTML = '';
  
  subject.chapters.forEach(chapter => {
    const topicsCount = appState.topics.filter(t => 
      t.subjectId === subject.id && t.chapterId === chapter.id
    ).length;
    
    const item = document.createElement('div');
    item.className = 'chapter-item';
    item.setAttribute('data-chapter-id', chapter.id);
    item.onclick = () => showChapter(chapter.id);
    
    item.innerHTML = `
      <div class="chapter-item-number">Chapter ${chapter.number}</div>
      <div class="chapter-item-title">${chapter.title}</div>
      <div class="chapter-item-count">${topicsCount} topics</div>
    `;
    
    list.appendChild(item);
  });
}

// Render chapter content
function renderChapterContent(chapter) {
  const container = document.getElementById('topicsContainer');
  const subject = appState.currentSubject;
  
  // Update header
  document.getElementById('chapterMainTitle').textContent = `Chapter ${chapter.number}: ${chapter.title}`;
  document.getElementById('chapterMainDescription').textContent = chapter.description;
  
  // Show search and sort
  document.getElementById('topicSearch').style.display = 'block';
  document.getElementById('topicSearch').value = '';
  document.getElementById('topicSort').style.display = 'block';
  
  // Get topics for this chapter
  const topics = appState.topics.filter(t => 
    t.subjectId === subject.id && t.chapterId === chapter.id
  );
  
  // Render topics
  container.innerHTML = `
    <div class="add-topic-section">
      <button class="add-topic-btn" onclick="openAddTopicModal()">
        <span>➕</span> Add New Topic
      </button>
    </div>
    ${topics.length === 0 ? `
      <div class="empty-state">
        <p>No topics yet. Click "Add New Topic" to create your first topic.</p>
      </div>
    ` : ''}
    <div id="topicsList"></div>
  `;
  
  if (topics.length > 0) {
    renderTopicsList(topics);
  }
}

// Render topics list
function renderTopicsList(topics) {
  const list = document.getElementById('topicsList');
  if (!list) return;
  
  list.innerHTML = '';
  
  topics.forEach(topic => {
    const card = createTopicCard(topic);
    list.appendChild(card);
  });
}

// Create topic card
function createTopicCard(topic) {
  const card = document.createElement('div');
  card.className = 'topic-card';
  if (topic.favorite) card.classList.add('favorite');
  card.setAttribute('data-topic-id', topic.id);
  
  const wordCount = countWords(topic.content);
  const charCount = topic.content.length;
  const isLong = topic.content.length > 300;
  
  card.innerHTML = `
    <div class="topic-header">
      <div class="topic-title-area">
        <h3 class="topic-name">${escapeHtml(topic.name)}</h3>
        <div class="topic-meta">
          <span>📅 ${topic.createdDate} ${topic.createdTime}</span>
          <span>📊 ${wordCount} words</span>
          <span>🔤 ${charCount} chars</span>
        </div>
      </div>
      <div class="topic-actions">
        <button class="topic-action-btn favorite ${topic.favorite ? 'active' : ''}" onclick="toggleFavorite('${topic.id}')" title="Favorite">
          ${topic.favorite ? '⭐' : '☆'}
        </button>
        <button class="topic-action-btn" onclick="copyTopicContent('${topic.id}')" title="Copy to clipboard">📋</button>
        <button class="topic-action-btn" onclick="openEditModal('${topic.id}')" title="Edit">✏️</button>
        <button class="topic-action-btn" onclick="openDeleteModal('${topic.id}')" title="Delete">🗑️</button>
      </div>
    </div>
    <div class="topic-content ${isLong ? 'collapsed' : ''}" id="content-${topic.id}">
      ${escapeHtml(topic.content)}
    </div>
    ${isLong ? `<button class="expand-btn" onclick="toggleExpand('${topic.id}')">Show more ▼</button>` : ''}
    ${topic.tags.length > 0 ? `
      <div class="topic-tags">
        ${topic.tags.map(tag => `<span class="topic-tag">#${escapeHtml(tag)}</span>`).join('')}
      </div>
    ` : ''}
  `;
  
  return card;
}

// Open add topic modal
function openAddTopicModal() {
  appState.editingTopicId = null;
  document.getElementById('modalTitle').textContent = 'Add New Topic';
  document.getElementById('editTopicName').value = '';
  document.getElementById('editTopicContent').value = '';
  document.getElementById('editTopicTags').value = '';
  document.getElementById('saveTopicBtn').textContent = 'Save Topic';
  updateCharCounters();
  document.getElementById('editModal').classList.add('active');
}

// Open edit modal
function openEditModal(topicId) {
  const topic = appState.topics.find(t => t.id === topicId);
  if (!topic) return;
  
  appState.editingTopicId = topicId;
  document.getElementById('modalTitle').textContent = 'Edit Topic';
  document.getElementById('editTopicName').value = topic.name;
  document.getElementById('editTopicContent').value = topic.content;
  document.getElementById('editTopicTags').value = topic.tags.join(', ');
  document.getElementById('saveTopicBtn').textContent = 'Update Topic';
  updateCharCounters();
  document.getElementById('editModal').classList.add('active');
}

// Close edit modal
function closeEditModal() {
  document.getElementById('editModal').classList.remove('active');
  appState.editingTopicId = null;
}

// Save topic
function saveTopic() {
  const name = document.getElementById('editTopicName').value.trim();
  const content = document.getElementById('editTopicContent').value.trim();
  const tagsInput = document.getElementById('editTopicTags').value.trim();
  
  if (!name || !content) {
    showToast('❌ Please fill in both topic name and content', 'error');
    return;
  }
  
  const tags = tagsInput ? tagsInput.split(',').map(t => t.trim()).filter(t => t) : [];
  const now = new Date();
  const date = now.toISOString().split('T')[0];
  const time = now.toTimeString().split(' ')[0].substring(0, 5);
  
  if (appState.editingTopicId) {
    // Update existing topic
    const topic = appState.topics.find(t => t.id === appState.editingTopicId);
    if (topic) {
      topic.name = name;
      topic.content = content;
      topic.tags = tags;
      topic.modifiedDate = date;
      topic.modifiedTime = time;
      showToast('✅ Topic updated successfully', 'success');
    }
  } else {
    // Create new topic
    const newTopic = {
      id: generateId(),
      subjectId: appState.currentSubject.id,
      chapterId: appState.currentChapter.id,
      name,
      content,
      tags,
      favorite: false,
      createdDate: date,
      createdTime: time,
      modifiedDate: date,
      modifiedTime: time
    };
    appState.topics.push(newTopic);
    showToast('✅ Topic created successfully', 'success');
  }
  
  closeEditModal();
  updateStats();
  renderChapterContent(appState.currentChapter);
  renderChaptersSidebar(appState.currentSubject);
}

// Open delete modal
function openDeleteModal(topicId) {
  const topic = appState.topics.find(t => t.id === topicId);
  if (!topic) return;
  
  appState.deletingTopicId = topicId;
  document.getElementById('deleteTopicName').textContent = topic.name;
  document.getElementById('deleteModal').classList.add('active');
}

// Close delete modal
function closeDeleteModal() {
  document.getElementById('deleteModal').classList.remove('active');
  appState.deletingTopicId = null;
}

// Confirm delete
function confirmDelete() {
  if (!appState.deletingTopicId) return;
  
  const index = appState.topics.findIndex(t => t.id === appState.deletingTopicId);
  if (index !== -1) {
    appState.topics.splice(index, 1);
    showToast('✅ Topic deleted successfully', 'success');
    closeDeleteModal();
    updateStats();
    renderChapterContent(appState.currentChapter);
    renderChaptersSidebar(appState.currentSubject);
  }
}

// Toggle favorite
function toggleFavorite(topicId) {
  const topic = appState.topics.find(t => t.id === topicId);
  if (topic) {
    topic.favorite = !topic.favorite;
    const card = document.querySelector(`[data-topic-id="${topicId}"]`);
    if (card) {
      if (topic.favorite) {
        card.classList.add('favorite');
      } else {
        card.classList.remove('favorite');
      }
      const btn = card.querySelector('.topic-action-btn.favorite');
      if (btn) {
        btn.textContent = topic.favorite ? '⭐' : '☆';
        btn.classList.toggle('active', topic.favorite);
      }
    }
    showToast(topic.favorite ? '⭐ Added to favorites' : '☆ Removed from favorites', 'info');
  }
}

// Copy topic content
function copyTopicContent(topicId) {
  const topic = appState.topics.find(t => t.id === topicId);
  if (topic) {
    const textArea = document.createElement('textarea');
    textArea.value = topic.content;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showToast('📋 Content copied to clipboard', 'success');
    } catch (err) {
      showToast('❌ Failed to copy content', 'error');
    }
    document.body.removeChild(textArea);
  }
}

// Toggle expand
function toggleExpand(topicId) {
  const content = document.getElementById(`content-${topicId}`);
  const btn = content.nextElementSibling;
  if (content.classList.contains('collapsed')) {
    content.classList.remove('collapsed');
    btn.textContent = 'Show less ▲';
  } else {
    content.classList.add('collapsed');
    btn.textContent = 'Show more ▼';
  }
}

// Filter topics
function filterTopics() {
  const searchTerm = document.getElementById('topicSearch').value.toLowerCase();
  const cards = document.querySelectorAll('.topic-card');
  
  cards.forEach(card => {
    const topicId = card.getAttribute('data-topic-id');
    const topic = appState.topics.find(t => t.id === topicId);
    if (topic) {
      const matches = topic.name.toLowerCase().includes(searchTerm) ||
                     topic.content.toLowerCase().includes(searchTerm) ||
                     topic.tags.some(tag => tag.toLowerCase().includes(searchTerm));
      card.style.display = matches ? 'block' : 'none';
    }
  });
}

// Sort topics
function sortTopics() {
  const sortValue = document.getElementById('topicSort').value;
  const subject = appState.currentSubject;
  const chapter = appState.currentChapter;
  
  let topics = appState.topics.filter(t => 
    t.subjectId === subject.id && t.chapterId === chapter.id
  );
  
  switch(sortValue) {
    case 'date-desc':
      topics.sort((a, b) => {
        const dateA = new Date(a.createdDate + ' ' + a.createdTime);
        const dateB = new Date(b.createdDate + ' ' + b.createdTime);
        return dateB - dateA;
      });
      break;
    case 'date-asc':
      topics.sort((a, b) => {
        const dateA = new Date(a.createdDate + ' ' + a.createdTime);
        const dateB = new Date(b.createdDate + ' ' + b.createdTime);
        return dateA - dateB;
      });
      break;
    case 'name-asc':
      topics.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      topics.sort((a, b) => b.name.localeCompare(a.name));
      break;
  }
  
  renderTopicsList(topics);
}

// Update character counters
function updateCharCounters() {
  const nameInput = document.getElementById('editTopicName');
  const contentInput = document.getElementById('editTopicContent');
  
  if (nameInput) {
    const counter = document.getElementById('nameCounter');
    nameInput.oninput = () => {
      counter.textContent = `${nameInput.value.length}/100`;
    };
  }
  
  if (contentInput) {
    contentInput.oninput = () => {
      const wordCount = countWords(contentInput.value);
      const charCount = contentInput.value.length;
      document.getElementById('wordCount').textContent = `${wordCount} words`;
      document.getElementById('charCount').textContent = `${charCount} characters`;
    };
  }
}

// Count words
function countWords(text) {
  return text.trim().split(/\s+/).filter(w => w.length > 0).length;
}

// Escape HTML
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Show toast notification
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast ${type} show`;
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Close modal on outside click
window.onclick = function(event) {
  const editModal = document.getElementById('editModal');
  const deleteModal = document.getElementById('deleteModal');
  
  if (event.target === editModal) {
    closeEditModal();
  }
  if (event.target === deleteModal) {
    closeDeleteModal();
  }
}

// Initialize app on load
window.addEventListener('DOMContentLoaded', init);
