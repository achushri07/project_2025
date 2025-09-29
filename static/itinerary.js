document.addEventListener('DOMContentLoaded', () => {

    // =============================================================
    // ===== 1. GLOBAL STATE & TRANSLATIONS =====
    // =============================================================

    const translations = {
        en: {
            // Navbar
            nav_home: 'Home',
            nav_features: 'Features',
            nav_ai_planner: 'AI Planner',
            nav_tts: 'Text to Speech',
            nav_explore: 'Explore',
            nav_top_destinations: 'Top destinations',
            nav_indian_delicacy: 'Indian Delicacy',
            nav_filter: 'Filter',
            nav_language: 'Language',
            // Itinerary Page
            it_preloader_text: 'Loading AI Itinerary Planner...',
            it_title: 'AI-Powered Itinerary Generator',
            it_subtitle: 'Craft your perfect journey. Tailored to your interests, duration, and style.',
            it_form_title: 'Plan Your Journey',
            it_form_subtitle: 'Tell us your preferences and let AI create the perfect itinerary.',
            it_label_duration: 'Trip Duration',
            it_placeholder_duration: 'Select duration',
            it_label_interests: 'Your Interests',
            it_label_travel_type: 'Travel Type',
            it_placeholder_travel_type: 'Select travel type',
            it_label_budget: 'Budget Range',
            it_placeholder_budget: 'Select budget',
            it_generate_btn: 'Generate AI Itinerary',
            it_generate_btn_loading: 'Generating Your Perfect Trip...',
            it_empty_title: 'Your AI Itinerary',
            it_empty_desc: 'Fill out the form to generate your travel plan.',
            it_ready_desc: 'Your personalized itinerary is ready!',
        },
        hi: {
            nav_home: 'होम',
            nav_features: 'विशेषताएँ',
            nav_ai_planner: 'एआई प्लानर',
            nav_tts: 'टेक्स्ट टू स्पीच',
            nav_explore: 'अन्वेषण करें',
            nav_top_destinations: 'शीर्ष गंतव्य',
            nav_indian_delicacy: 'भारतीय व्यंजन',
            nav_filter: 'फ़िल्टर',
            nav_language: 'भाषा',
            it_preloader_text: 'एआई यात्रा प्लानर लोड हो रहा है...',
            it_title: 'एआई-संचालित यात्रा कार्यक्रम जेनरेटर',
            it_subtitle: 'अपनी आदर्श यात्रा तैयार करें। आपकी रुचियों, अवधि और शैली के अनुरूप।',
            it_form_title: 'अपनी यात्रा की योजना बनाएं',
            it_form_subtitle: 'हमें अपनी प्राथमिकताएं बताएं और एआई को सही यात्रा कार्यक्रम बनाने दें।',
            it_label_duration: 'यात्रा की अवधि',
            it_placeholder_duration: 'अवधि चुनें',
            it_label_interests: 'आपकी रुचियां',
            it_label_travel_type: 'यात्रा का प्रकार',
            it_placeholder_travel_type: 'यात्रा का प्रकार चुनें',
            it_label_budget: 'बजट सीमा',
            it_placeholder_budget: 'बजट चुनें',
            it_generate_btn: 'एआई यात्रा कार्यक्रम बनाएं',
            it_generate_btn_loading: 'आपकी आदर्श यात्रा बना रहे हैं...',
            it_empty_title: 'आपका एआई यात्रा कार्यक्रम',
            it_empty_desc: 'अपनी यात्रा योजना बनाने के लिए फॉर्म भरें।',
            it_ready_desc: 'आपका व्यक्तिगत यात्रा कार्यक्रम तैयार है!',
        },
        mr: {
            nav_home: 'मुख्यपृष्ठ',
            nav_features: 'वैशिष्ट्ये',
            nav_ai_planner: 'एआय प्लॅनर',
            nav_tts: 'टेक्स्ट टू स्पीच',
            nav_explore: 'अन्वेषण करा',
            nav_top_destinations: 'शीर्ष गंतव्ये',
            nav_indian_delicacy: 'भारतीय स्वादिष्ट पदार्थ',
            nav_filter: 'फिल्टर',
            nav_language: 'भाषा',
            it_preloader_text: 'एआय प्रवास योजना लोड करत आहे...',
            it_title: 'एआय-आधारित प्रवास योजना जनरेटर',
            it_subtitle: 'आपला परिपूर्ण प्रवास तयार करा. आपल्या आवडी, कालावधी आणि शैलीनुसार.',
            it_form_title: 'आपल्या प्रवासाची योजना करा',
            it_form_subtitle: 'आम्हाला आपल्या प्राधान्ये सांगा आणि एआयला परिपूर्ण प्रवास योजना तयार करू द्या.',
            it_label_duration: 'प्रवासाचा कालावधी',
            it_placeholder_duration: 'कालावधी निवडा',
            it_label_interests: 'तुमच्या आवडी',
            it_label_travel_type: 'प्रवासाचा प्रकार',
            it_placeholder_travel_type: 'प्रवासाचा प्रकार निवडा',
            it_label_budget: 'बजेट श्रेणी',
            it_placeholder_budget: 'बजेट निवडा',
            it_generate_btn: 'एआय प्रवास योजना तयार करा',
            it_generate_btn_loading: 'तुमचा परिपूर्ण प्रवास तयार करत आहे...',
            it_empty_title: 'तुमची एआय प्रवास योजना',
            it_empty_desc: 'तुमची प्रवास योजना तयार करण्यासाठी फॉर्म भरा.',
            it_ready_desc: 'तुमची वैयक्तिकृत प्रवास योजना तयार आहे!',
        },
        es: {
            nav_home: 'Inicio',
            nav_features: 'Características',
            nav_ai_planner: 'Planificador de IA',
            nav_tts: 'Texto a voz',
            nav_explore: 'Explorar',
            nav_top_destinations: 'Mejores destinos',
            nav_indian_delicacy: 'Delicadeza india',
            nav_filter: 'Filtro',
            nav_language: 'Idioma',
            it_preloader_text: 'Cargando el Planificador de Itinerarios con IA...',
            it_title: 'Generador de Itinerarios con IA',
            it_subtitle: 'Crea tu viaje perfecto. Adaptado a tus intereses, duración y estilo.',
            it_form_title: 'Planifica Tu Viaje',
            it_form_subtitle: 'Dinos tus preferencias y deja que la IA cree el itinerario perfecto.',
            it_label_duration: 'Duración del Viaje',
            it_placeholder_duration: 'Seleccionar duración',
            it_label_interests: 'Tus Intereses',
            it_label_travel_type: 'Tipo de Viaje',
            it_placeholder_travel_type: 'Seleccionar tipo de viaje',
            it_label_budget: 'Rango de Presupuesto',
            it_placeholder_budget: 'Seleccionar presupuesto',
            it_generate_btn: 'Generar Itinerario de IA',
            it_generate_btn_loading: 'Generando tu viaje perfecto...',
            it_empty_title: 'Tu Itinerario de IA',
            it_empty_desc: 'Completa el formulario para generar tu plan de viaje.',
            it_ready_desc: '¡Tu itinerario personalizado está listo!',
        }
    };

    // =============================================================
    // ===== 2. CORE SHARED FUNCTIONS (LANGUAGE, TTS, THEME) =====
    // =============================================================

    const setLanguage = (lang) => {
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang]?.[key]) {
                if (el.placeholder) {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });
        localStorage.setItem('language', lang);
    };

    const setupTheme = () => {
        const themeToggle = document.getElementById("theme-toggle");
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark");
            themeToggle.textContent = "☀️";
        }
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark");
            const isDark = document.body.classList.contains("dark");
            themeToggle.textContent = isDark ? "☀️" : "🌙";
            localStorage.setItem("theme", isDark ? "dark" : "light");
        });
    };

    // =============================================================
    // ===== 3. AI ITINERARY PAGE LOGIC =====
    // =============================================================

    const itState = {
        formData: { duration: '', interests: [], travelType: '', budget: '' },
        generatedItinerary: null,
        isGenerating: false,
    };

    const itInterests = [
        { id: 'waterfalls_lakes', label: 'Waterfalls & Lakes', icon: 'waves' },
        { id: 'adventure_trekking', label: 'Adventure & Trekking', icon: 'mountain' },
        { id: 'beaches_islands', label: 'Beaches & Islands', icon: 'ship' },
        { id: 'heritage_culture', label: 'Heritage & Culture', icon: 'landmark' },
        { id: 'nature_wildlife', label: 'Nature & Wildlife', icon: 'leaf' },
        { id: 'food_culinary', label: 'Food & Culinary', icon: 'utensils-crossed' },
        { id: 'shopping_markets', label: 'Shopping & Markets', icon: 'shopping-cart' },
        { id: 'festivals_nightlife', label: 'Festivals & Nightlife', icon: 'party-popper' }
    ];

    const itMockItineraries = {
        default: { 
            title: "Spiritual Rishikesh Escape", 
            days: [
                { 
                    day: 1, 
                    title: "Arrival & Spiritual Evening", 
                    activities: [
                        { time: "2:00 PM", title: "Arrive in Rishikesh", description: "Check into a serene ashram or riverside hotel.", location: "Rishikesh", type: "transport" }, 
                        { time: "5:00 PM", title: "Ganga Aarti Ceremony", description: "Witness the mesmerizing evening prayer ceremony at Parmarth Niketan.", location: "Parmarth Niketan Ghat", type: "cultural" }, 
                        { time: "7:30 PM", title: "Sattvic Dinner", description: "Enjoy a healthy and pure vegetarian meal at a local cafe.", location: "Ram Jhula", type: "food" }
                    ] 
                }, 
                { 
                    day: 2, 
                    title: "Yoga, Beatles & Bridges", 
                    activities: [
                        { time: "7:00 AM", title: "Sunrise Yoga", description: "Participate in a morning yoga session overlooking the Ganges.", location: "Your Ashram/Hotel", type: "activity" }, 
                        { time: "10:00 AM", title: "Beatles Ashram Exploration", description: "Explore the graffiti-covered domes where The Beatles stayed.", location: "Beatles Ashram", type: "attraction" }, 
                        { time: "1:00 PM", title: "Cross Laxman Jhula", description: "Walk across the iconic suspension bridge with stunning river views.", location: "Laxman Jhula", type: "attraction" }
                    ] 
                }
            ] 
        },
        adventure_trekking: { 
            title: "Himalayan Trekking Adventure", 
            days: [
                { 
                    day: 1, 
                    title: "Manali to Chika", 
                    activities: [
                        { time: "9:00 AM", title: "Drive to Jobra", description: "Start your journey with a scenic drive from Manali to the trek starting point.", location: "Jobra", type: "transport" }, 
                        { time: "11:00 AM", title: "Trek to Chika", description: "A gentle 2-hour trek through lush forests to the beautiful campsite of Chika.", location: "Chika Campsite", type: "trekking" }, 
                        { time: "6:00 PM", title: "Campfire & Stargazing", description: "Enjoy dinner by the campfire under a clear Himalayan sky.", location: "Chika", type: "activity" }
                    ] 
                }, 
                { 
                    day: 2, 
                    title: "Trek to Balu ka Ghera", 
                    activities: [
                        { time: "8:00 AM", title: "Begin Trek", description: "Trek along the river, crossing streams and boulder sections.", location: "Trail to Balu ka Ghera", type: "trekking" }, 
                        { time: "2:00 PM", title: "Reach Campsite", description: "Arrive at Balu ka Ghera (Heap of Sand), a flat plain at the base of Hampta Pass.", location: "Balu ka Ghera", type: "attraction" }
                    ] 
                }
            ] 
        },
        beaches_islands: { 
            title: "Andaman Islands Paradise", 
            days: [
                { 
                    day: 1, 
                    title: "Arrival in Port Blair & Cellular Jail", 
                    activities: [
                        { time: "11:00 AM", title: "Arrive at Port Blair", description: "Transfer to your hotel and relax.", location: "Port Blair", type: "transport" }, 
                        { time: "3:00 PM", title: "Cellular Jail Visit", description: "Visit the historic colonial prison and learn about India's freedom struggle.", location: "Cellular Jail", type: "heritage_culture" }, 
                        { time: "6:00 PM", title: "Light & Sound Show", description: "Experience the moving saga of the freedom fighters at the Cellular Jail.", location: "Cellular Jail", type: "activity" }
                    ] 
                }, 
                { 
                    day: 2, 
                    title: "Havelock Island & Radhanagar Beach", 
                    activities: [
                        { time: "8:00 AM", title: "Ferry to Havelock", description: "Take a high-speed ferry to the stunning Havelock Island (Swaraj Dweep).", location: "Havelock Island", type: "transport" }, 
                        { time: "2:00 PM", title: "Radhanagar Beach", description: "Relax and swim at one of Asia's best beaches, known for its white sand and turquoise water.", location: "Radhanagar Beach", type: "attraction" }
                    ] 
                }
            ] 
        },
        heritage_culture: { 
            title: "Royal Rajasthan Discovery", 
            days: [
                { 
                    day: 1, 
                    title: "Jaipur: The Pink City", 
                    activities: [
                        { time: "10:00 AM", title: "Amer Fort", description: "Explore the magnificent hilltop fort with its intricate architecture and stunning views.", location: "Amer Fort", type: "attraction" }, 
                        { time: "2:00 PM", title: "City Palace", description: "Visit the royal residence, a beautiful blend of Rajput and Mughal architecture.", location: "City Palace, Jaipur", type: "heritage_culture" }, 
                        { time: "5:00 PM", title: "Hawa Mahal", description: "Admire the iconic 'Palace of Winds' with its unique five-story facade.", location: "Hawa Mahal", type: "attraction" }
                    ] 
                }, 
                { 
                    day: 2, 
                    title: "Jodhpur: The Blue City", 
                    activities: [
                        { time: "10:00 AM", title: "Mehrangarh Fort", description: "Discover one of India's largest forts, towering over the blue city.", location: "Mehrangarh Fort", type: "attraction" }, 
                        { time: "3:00 PM", title: "Jaswant Thada", description: "Visit the beautiful marble cenotaph built in memory of Maharaja Jaswant Singh II.", location: "Jaswant Thada", type: "heritage_culture" }
                    ] 
                }
            ] 
        }
    };

    const itGetActivityIconName = (type) => ({ 
        'transport': 'car', 
        'attraction': 'map-pin', 
        'food': 'utensils-crossed', 
        'cultural': 'landmark', 
        'activity': 'gamepad-2', 
        'trekking': 'mountain', 
        'heritage_culture': 'landmark' 
    }[type] || 'map-pin');

    const setupItineraryInteractions = () => {
        const itGenerateBtn = document.getElementById('generate-btn-new');
        const itInterestContainer = document.getElementById('interest-buttons-container-it');
        const itItineraryContainer = document.getElementById('itinerary-container-it');

        if (!itGenerateBtn || !itInterestContainer || !itItineraryContainer) return;

        const itRenderInterestButtons = () => {
            itInterestContainer.innerHTML = itInterests.map(interest => {
                const isSelected = itState.formData.interests.includes(interest.id);
                return `<button data-interest-id="${interest.id}" class="interest-btn justify-start h-auto p-3 text-left w-full flex items-center rounded-md ${isSelected ? 'selected' : ''}"><i data-lucide="${interest.icon}" class="mr-2 h-4 w-4"></i><span class="text-sm">${interest.label}</span></button>`;
            }).join('');
            lucide.createIcons();
        };

        const itRenderGenerateButton = () => {
            const lang = localStorage.getItem('language') || 'en';
            if (itState.isGenerating) {
                itGenerateBtn.innerHTML = `<div class="spinner mr-2 w-5 h-5 border-2 border-white border-r-transparent rounded-full"></div>${translations[lang]['it_generate_btn_loading']}`;
                itGenerateBtn.disabled = true;
            } else {
                itGenerateBtn.innerHTML = `<i data-lucide="sparkles" class="mr-2 h-5 w-5"></i>${translations[lang]['it_generate_btn']}`;
                itGenerateBtn.disabled = !itState.formData.duration;
            }
            lucide.createIcons();
        };

        const itRenderItinerary = () => {
            const lang = localStorage.getItem('language') || 'en';
            if (itState.generatedItinerary) {
                const itinerary = itState.generatedItinerary;
                const daysHTML = itinerary.days.map(day => {
                    const activitiesHTML = day.activities.map(activity => `<div class="flex items-start space-x-3 p-3 rounded-lg bg-dark-blue-bg hover:bg-opacity-50 transition-colors"><div class="flex-shrink-0 mt-1"><div class="bg-light-blue-bg p-2 rounded-lg shadow-sm border border-card-border"><i data-lucide="${itGetActivityIconName(activity.type)}" class="h-4 w-4 text-neon-cyan"></i></div></div><div class="flex-1 min-w-0"><div class="flex items-center justify-between mb-1"><h4 class="font-medium text-text-primary-it">${activity.title}</h4><div class="flex items-center text-sm text-text-secondary-it"><i data-lucide="clock" class="mr-1 h-3 w-3"></i>${activity.time}</div></div><p class="text-sm text-text-secondary-it mb-2">${activity.description}</p><div class="flex items-center justify-between"><div class="flex items-center text-xs text-text-secondary-it"><i data-lucide="map-pin" class="mr-1 h-3 w-3"></i>${activity.location}</div></div></div></div>`).join('');
                    return `<div class="p-4"><div class="flex items-center mb-4"><div class="bg-neon-cyan text-dark-blue-bg rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">${day.day}</div><div><h3 class="font-semibold">${day.title}</h3><p class="text-sm text-text-secondary-it">Day ${day.day}</p></div></div><div class="space-y-3">${activitiesHTML}</div></div>`;
                }).join('');
                itItineraryContainer.innerHTML = `<div class="control-block rounded-lg"><div class="p-6 border-b-2 border-neon-cyan"><h2 class="flex items-center text-xl font-semibold"><i data-lucide="check-circle" class="mr-2 h-5 w-5"></i>${itinerary.title}</h2><p class="text-text-secondary-it mt-1">${translations[lang]['it_ready_desc']}</p></div><div class="max-h-[80vh] overflow-y-auto">${daysHTML}</div></div>`;
            } else {
                itItineraryContainer.innerHTML = `<div class="control-block border-dashed h-full"><div class="p-12 text-center flex flex-col justify-center items-center h-full"><div class="bg-light-blue-bg border border-card-border rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4"><i data-lucide="sparkles" class="h-10 w-10 text-neon-cyan"></i></div><h3 class="text-lg font-medium text-text-primary-it mb-2">${translations[lang]['it_empty_title']}</h3><p class="text-text-secondary-it">${translations[lang]['it_empty_desc']}</p></div></div>`;
            }
            lucide.createIcons();
        };

        const itInitializeCustomSelect = (containerId, stateKey) => {
            const container = document.getElementById(containerId);
            if (!container) return;
            const trigger = container.querySelector('.custom-select-trigger span');
            const options = container.querySelectorAll('.custom-option');

            options.forEach(option => {
                option.addEventListener('click', (e) => {
                    e.stopPropagation();
                    trigger.innerHTML = option.innerHTML;
                    trigger.style.color = 'var(--text-primary-it)';
                    itState.formData[stateKey] = option.getAttribute('data-value');
                    if (stateKey === 'duration') {
                        itRenderGenerateButton();
                    }
                    document.activeElement.blur();
                });
            });
        };

        itInterestContainer.addEventListener('click', (e) => {
            const button = e.target.closest('.interest-btn');
            if (button && button.dataset.interestId) {
                const interestId = button.dataset.interestId;
                const interestsState = itState.formData.interests;
                const index = interestsState.indexOf(interestId);
                if (index > -1) {
                    interestsState.splice(index, 1);
                } else {
                    interestsState.push(interestId);
                }
                itRenderInterestButtons();
            }
        });

        itGenerateBtn.addEventListener('click', () => {
            itState.isGenerating = true;
            itRenderGenerateButton();
            setTimeout(() => {
                const interests = itState.formData.interests;
                if (interests.includes('beaches_islands')) {
                    itState.generatedItinerary = itMockItineraries.beaches_islands;
                } else if (interests.includes('adventure_trekking')) {
                    itState.generatedItinerary = itMockItineraries.adventure_trekking;
                } else if (interests.includes('heritage_culture')) {
                    itState.generatedItinerary = itMockItineraries.heritage_culture;
                } else {
                    itState.generatedItinerary = itMockItineraries.default;
                }
                itState.isGenerating = false;
                itRenderGenerateButton();
                itRenderItinerary();
            }, 2000);
        });

        itInitializeCustomSelect('duration-select-it', 'duration');
        itInitializeCustomSelect('travelType-select-it', 'travelType');
        itInitializeCustomSelect('budget-select-it', 'budget');
        itRenderInterestButtons();
        itRenderGenerateButton();
        itRenderItinerary();
    };

    // =============================================================
    // ===== 4. PRELOADER & BACK BUTTON =====
    // =============================================================

    const preloader = document.getElementById('preloader');
    const backToHomeBtn = document.getElementById('back-to-home-btn');

    // Show preloader for 2 seconds
    setTimeout(() => {
        preloader.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Trigger fade-in animation for content
        document.querySelectorAll('.animatable').forEach((el, index) => {
            el.style.animationDelay = `${index * 0.15}s`;
        });
    }, 2000);

    // Back to home button
    if (backToHomeBtn) {
        backToHomeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = '/';
        });
    }

    // =============================================================
    // ===== 5. INITIALIZATION =====
    // =============================================================

    setupTheme();
    setupItineraryInteractions();
    
    // Initialize language switchers
    document.querySelectorAll('.lang-switcher').forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault();
        setLanguage(e.target.getAttribute('data-lang'));
    }));

    // Set initial language
    setLanguage(localStorage.getItem('language') || 'en');
});