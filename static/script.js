document.addEventListener("DOMContentLoaded", () => {
    // --- MULTILINGUAL FEATURE ---

    const translations = {
        "en": {
            // Navbar
            "site_title": "Xplor Bharat",
            "nav_home": "Home",
            "nav_overview": "Overview",
            "nav_updates": "Latest Updates",
            "nav_features": "Features",
            "nav_ai_planner": "AI Planner",
            "nav_blog": "Travel Blog",
            "nav_explore": "Explore",
            "nav_top_destinations": "Top Destinations",
            "nav_indian_delicacy": "Indian Delicacy",
            "nav_filter": "Filter",
            "nav_by_budget": "By Budget",
            "nav_by_adventure": "By Adventure",
            // Hero Section
            "hero_quote_1": "Discover Beautiful Destinations",
            "hero_quote_2": "Explore the Wonders of India",
            "hero_quote_3": "Adventure Awaits You",
            "hero_quote_4": "Taste Local Cuisines",
            "search_placeholder": "🔍 Enter destination city...",
            "plan_trip_btn": "✈️ Plan Your Trip",
            // Filters
            "filter_duration": "Duration",
            "filter_to": "to",
            "filter_festive": "Festive Season",
            "filter_holiday": "Holiday",
            "filter_rating": "Hotel Rating",
            "filter_yes": "Yes",
            "filter_no": "No",
            "get_predictions_btn": "🔮 Get Predictions",
            // Results Section
            "results_title": "Travel Predictions",
            "results_weather": "🌤️ Weather Conditions",
            "results_condition": "Condition",
            "results_temp": "Temperature",
            "results_wind": "Wind Speed",
            "results_safety": "🛡️ Safety Analysis",
            "results_price": "💰 Hotel Price Estimate",
            "results_crowd": "📊 Crowd Index",
            // Destinations
            "destinations_title": "Top Destinations",
            "dest_goa_title": "Goa Beaches",
            "dest_goa_desc": "Golden sands & nightlife.",
            "dest_himalayas_title": "Himalayan Peaks",
            "dest_himalayas_desc": "Snow-clad adventures.",
            "dest_jaipur_title": "Jaipur Palaces",
            "dest_jaipur_desc": "Royal heritage.",
            "dest_kodaikanal_title": "Kodaikanal",
            "dest_kodaikanal_desc": "Serene lakes.",
            "dest_ziro_title": "Ziro",
            "dest_ziro_desc": "Verdant Valley.",
            // Cuisine
            "cuisine_title": "Indian Delicacies",
            "cuisine_biryani": "Biryani",
            "cuisine_butter_chicken": "Butter Chicken",
            "cuisine_dosa": "Dosa",
            "cuisine_mysore_pak": "Mysore Pak",
            "cuisine_gulab_jamun": "Gulab Jamun",
            // Modals & Chatbot
            "loading_text": "Getting predictions...",
            "chatbot_greeting": "Hi, I am YatraGenie, your personalised trip planner.",
            "chatbot_placeholder": "Type your message...",
            "footer_text": "© 2025 Xplor Bharat. All Rights Reserved."
        },
        "hi": {
            // Navbar
            "site_title": "एक्सप्लोर भारत",
            "nav_home": "होम",
            "nav_overview": "अवलोकन",
            "nav_updates": "नवीनतम अपडेट",
            "nav_features": "विशेषताएँ",
            "nav_ai_planner": "एआई प्लानर",
            "nav_blog": "यात्रा ब्लॉग",
            "nav_explore": "अन्वेषण करें",
            "nav_top_destinations": "शीर्ष गंतव्य",
            "nav_indian_delicacy": "भारतीय व्यंजन",
            "nav_filter": "फ़िल्टर",
            "nav_by_budget": "बजट के अनुसार",
            "nav_by_adventure": "साहसिक कार्य के अनुसार",
            // Hero Section
            "hero_quote_1": "सुंदर स्थलों की खोज करें",
            "hero_quote_2": "भारत के आश्चर्यों का अन्वेषण करें",
            "hero_quote_3": "साहसिक कार्य आपका इंतजार कर रहा है",
            "hero_quote_4": "स्थानीय व्यंजनों का स्वाद लें",
            "search_placeholder": "🔍 गंतव्य शहर दर्ज करें...",
            "plan_trip_btn": "✈️ अपनी यात्रा की योजना बनाएं",
            // Filters
            "filter_duration": "अवधि",
            "filter_to": "तक",
            "filter_festive": "उत्सव का मौसम",
            "filter_holiday": "छुट्टी",
            "filter_rating": "होटल रेटिंग",
            "filter_yes": "हाँ",
            "filter_no": "नहीं",
            "get_predictions_btn": "🔮 भविष्यवाणियाँ प्राप्त करें",
            // Results Section
            "results_title": "यात्रा भविष्यवाणियाँ",
            "results_weather": "🌤️ मौसम की स्थिति",
            "results_condition": "स्थिति",
            "results_temp": "तापमान",
            "results_wind": "हवा की गति",
            "results_safety": "🛡️ सुरक्षा विश्लेषण",
            "results_price": "💰 होटल मूल्य अनुमान",
            "results_crowd": "📊 भीड़ सूचकांक",
            // Destinations
            "destinations_title": "शीर्ष गंतव्य",
            "dest_goa_title": "गोवा के समुद्र तट",
            "dest_goa_desc": "सुनहरी रेत और नाइटलाइफ़।",
            "dest_himalayas_title": "हिमालय की चोटियाँ",
            "dest_himalayas_desc": "बर्फ से ढके रोमांच।",
            "dest_jaipur_title": "जयपुर के महल",
            "dest_jaipur_desc": "शाही विरासत।",
            "dest_kodaikanal_title": "कोडैकनाल",
            "dest_kodaikanal_desc": "शांत झीलें।",
            "dest_ziro_title": "ज़ीरो",
            "dest_ziro_desc": "हरी-भरी घाटी।",
            // Cuisine
            "cuisine_title": "भारतीय व्यंजन",
            "cuisine_biryani": "बिरयानी",
            "cuisine_butter_chicken": "बटर चिकन",
            "cuisine_dosa": "डोसा",
            "cuisine_mysore_pak": "मैसूर पाक",
            "cuisine_gulab_jamun": "गुलाब जामुन",
            // Modals & Chatbot
            "loading_text": "भविष्यवाणियाँ प्राप्त हो रही हैं...",
            "chatbot_greeting": "नमस्ते, मैं यात्राजिनी हूँ, आपका व्यक्तिगत यात्रा योजनाकार।",
            "chatbot_placeholder": "अपना संदेश टाइप करें...",
            "footer_text": "© 2025 एक्सप्लोर भारत। सर्वाधिकार सुरक्षित।"
        },
        "mr": {
            // Navbar
            "site_title": "एक्सप्लोर भारत",
            "nav_home": "मुख्यपृष्ठ",
            "nav_overview": "आढावा",
            "nav_updates": "नवीनतम अद्यतने",
            "nav_features": "वैशिष्ट्ये",
            "nav_ai_planner": "एआय प्लॅनर",
            "nav_blog": "प्रवास ब्लॉग",
            "nav_explore": "अन्वेषण करा",
            "nav_top_destinations": "शीर्ष गंतव्ये",
            "nav_indian_delicacy": "भारतीय स्वादिष्ट पदार्थ",
            "nav_filter": "फिल्टर",
            "nav_by_budget": "बजेटनुसार",
            "nav_by_adventure": "साहसानुसार",
            // Hero Section
            "hero_quote_1": "सुंदर स्थळांचा शोध घ्या",
            "hero_quote_2": "भारताच्या आश्चर्यांचा शोध घ्या",
            "hero_quote_3": "साहस तुमची वाट पाहत आहे",
            "hero_quote_4": "स्थानिक पदार्थांची चव घ्या",
            "search_placeholder": "🔍 गंतव्य शहर प्रविष्ट करा...",
            "plan_trip_btn": "✈️ आपल्या सहलीची योजना करा",
            // Filters
            "filter_duration": "कालावधी",
            "filter_to": "पर्यंत",
            "filter_festive": "सणासुदीचा हंगाम",
            "filter_holiday": "सुट्टी",
            "filter_rating": "हॉटेल रेटिंग",
            "filter_yes": "होय",
            "filter_no": "नाही",
            "get_predictions_btn": "🔮 अंदाज मिळवा",
            // Results Section
            "results_title": "प्रवासाचे अंदाज",
            "results_weather": "🌤️ हवामान",
            "results_condition": "स्थिती",
            "results_temp": "तापमान",
            "results_wind": "वाऱ्याचा वेग",
            "results_safety": "🛡️ सुरक्षा विश्लेषण",
            "results_price": "💰 हॉटेल किमतीचा अंदाज",
            "results_crowd": "📊 गर्दी निर्देशांक",
            // Destinations
            "destinations_title": "शीर्ष गंतव्ये",
            "dest_goa_title": "गोव्याचे समुद्रकिनारे",
            "dest_goa_desc": "सोनेरी वाळू आणि नाईटलाइफ.",
            "dest_himalayas_title": "हिमालयीन शिखरे",
            "dest_himalayas_desc": "बर्फाच्छादित साहसे.",
            "dest_jaipur_title": "जयपूरचे राजवाडे",
            "dest_jaipur_desc": "शाही वारसा.",
            "dest_kodaikanal_title": "कोडाइकनाल",
            "dest_kodaikanal_desc": "शांत सरोवर.",
            "dest_ziro_title": "झिरो",
            "dest_ziro_desc": "हिरवीगार दरी.",
            // Cuisine
            "cuisine_title": "भारतीय स्वादिष्ट पदार्थ",
            "cuisine_biryani": "बिर्याणी",
            "cuisine_butter_chicken": "बटर चिकन",
            "cuisine_dosa": "डोसा",
            "cuisine_mysore_pak": "म्हैसूर पाक",
            "cuisine_gulab_jamun": "गुलाब जामुन",
            // Modals & Chatbot
            "loading_text": "अंदाज मिळत आहेत...",
            "chatbot_greeting": "नमस्कार, मी यात्राजिनी आहे, तुमचा वैयक्तिक सहल नियोजक.",
            "chatbot_placeholder": "तुमचा संदेश टाइप करा...",
            "footer_text": "© 2025 एक्सप्लोर भारत. सर्व हक्क राखीव."
        },
        "es": {
            // Navbar
            "site_title": "Xplor Bharat",
            "nav_home": "Inicio",
            "nav_overview": "Visión general",
            "nav_updates": "Últimas actualizaciones",
            "nav_features": "Características",
            "nav_ai_planner": "Planificador de IA",
            "nav_blog": "Blog de viajes",
            "nav_explore": "Explorar",
            "nav_top_destinations": "Mejores destinos",
            "nav_indian_delicacy": "Delicadeza india",
            "nav_filter": "Filtro",
            "nav_by_budget": "Por presupuesto",
            "nav_by_adventure": "Por aventura",
            // Hero Section
            "hero_quote_1": "Descubre Destinos Hermosos",
            "hero_quote_2": "Explora las Maravillas de la India",
            "hero_quote_3": "La Aventura te Espera",
            "hero_quote_4": "Prueba las Cocinas Locales",
            "search_placeholder": "🔍 Ingrese la ciudad de destino...",
            "plan_trip_btn": "✈️ Planifica Tu Viaje",
            // Filters
            "filter_duration": "Duración",
            "filter_to": "a",
            "filter_festive": "Temporada festiva",
            "filter_holiday": "Feriado",
            "filter_rating": "Calificación del hotel",
            "filter_yes": "Sí",
            "filter_no": "No",
            "get_predictions_btn": "🔮 Obtener Predicciones",
            // Results Section
            "results_title": "Predicciones de Viaje",
            "results_weather": "🌤️ Condiciones Climáticas",
            "results_condition": "Condición",
            "results_temp": "Temperatura",
            "results_wind": "Velocidad del viento",
            "results_safety": "🛡️ Análisis de Seguridad",
            "results_price": "💰 Estimación de Precio de Hotel",
            "results_crowd": "📊 Índice de Multitud",
            // Destinations
            "destinations_title": "Mejores Destinos",
            "dest_goa_title": "Playas de Goa",
            "dest_goa_desc": "Arenas doradas y vida nocturna.",
            "dest_himalayas_title": "Picos del Himalaya",
            "dest_himalayas_desc": "Aventuras nevadas.",
            "dest_jaipur_title": "Palacios de Jaipur",
            "dest_jaipur_desc": "Herencia real.",
            "dest_kodaikanal_title": "Kodaikanal",
            "dest_kodaikanal_desc": "Lagos serenos.",
            "dest_ziro_title": "Ziro",
            "dest_ziro_desc": "Valle verde.",
            // Cuisine
            "cuisine_title": "Delicias Indias",
            "cuisine_biryani": "Biryani",
            "cuisine_butter_chicken": "Pollo a la mantequilla",
            "cuisine_dosa": "Dosa",
            "cuisine_mysore_pak": "Mysore Pak",
            "cuisine_gulab_jamun": "Gulab Jamun",
            // Modals & Chatbot
            "loading_text": "Obteniendo predicciones...",
            "chatbot_greeting": "Hola, soy YatraGenie, tu planificador de viajes personalizado.",
            "chatbot_placeholder": "Escribe tu mensaje...",
            "footer_text": "© 2025 Xplor Bharat. Todos los derechos reservados."
        }
    };

    const setLanguage = (language) => {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[language] && translations[language][key]) {
                if (element.placeholder) {
                    element.placeholder = translations[language][key];
                } else {
                    element.textContent = translations[language][key];
                }
            }
        });
        document.documentElement.lang = language;
    };

    document.querySelectorAll('.lang-switcher button').forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            localStorage.setItem('language', lang);
            setLanguage(lang);
        });
    });

    // Handle dropdown language switcher
    document.querySelectorAll('.dropdown-menu a[data-lang]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('data-lang');
            localStorage.setItem('language', lang);
            setLanguage(lang);
        });
    });

    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);

  // Global variables to store user selections
  let selectedFestival = null;
  let selectedHoliday = null;
  let selectedRating = 0;
  let isSpeaking = false; // Variable for TTS state

  // --- NEW TEXT-TO-SPEECH (TTS) FEATURE ---
  const ttsButton = document.getElementById('text-to-speech-btn');
    ttsButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            isSpeaking = false;
        } else {
            let textToSpeak = '';
            document.querySelectorAll('[data-key]').forEach(el => {
                 textToSpeak += el.innerText + '. ';
            });
            const utterance = new SpeechSynthesisUtterance(textToSpeak);
            utterance.lang = localStorage.getItem('language') || 'en';
            utterance.onend = () => { isSpeaking = false; };
            window.speechSynthesis.speak(utterance);
            isSpeaking = true;
        }
    });

  // Theme Toggle
  const themeToggle = document.getElementById("theme-toggle");
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
  }
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const dark = document.body.classList.contains("dark");
    themeToggle.textContent = dark ? "☀️" : "🌙";
    localStorage.setItem("theme", dark ? "dark" : "light");
  });

  // Enhanced Chatbot Toggle and Functionality
  const chatBtn = document.getElementById("chatbot-btn");
  const chatPop = document.getElementById("chatbot-popup");
  const chatInput = chatPop.querySelector('input');
  const chatMessages = document.createElement('div');

  // --- AI Planner Link to open Chatbot ---
  const aiPlannerLink = document.getElementById('ai-planner-link');
  const chatbotPopup = document.getElementById('chatbot-popup');

  aiPlannerLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevents the link from trying to navigate
    chatbotPopup.style.display = 'block'; // Opens the chatbot
  });

  // Add chat messages container to popup
  chatMessages.className = 'chat-messages';
  chatPop.insertBefore(chatMessages, chatInput);

  chatBtn.addEventListener("click", () => {
    const isVisible = chatPop.style.display === "block";
    chatPop.style.display = isVisible ? "none" : "block";
  });

  // Handle chat input
  chatInput.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter' && chatInput.value.trim()) {
      await sendMessage(chatInput.value.trim());
      chatInput.value = '';
    }
  });

  async function sendMessage(message) {
    // Add user message to chat
    addMessageToChat('user', message);

    // Show loading
    addMessageToChat('bot', 'Thinking...');

    try {
      const response = await fetch('/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message })
      });

      const data = await response.json();

      // Remove loading message and add bot response
      chatMessages.removeChild(chatMessages.lastChild);

      if (data.status === 'success') {
        addMessageToChat('bot', data.response);
      } else {
        addMessageToChat('bot', 'Sorry, I encountered an error.');
      }
    } catch (error) {
      chatMessages.removeChild(chatMessages.lastChild);
      addMessageToChat('bot', 'Sorry, I could not connect to the server.');
    }
  }

  function addMessageToChat(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}-message`;
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Hero Background + Quotes
  const heroBgs = document.querySelectorAll(".hero-bg");
  const heroQuote = document.getElementById("hero-quote");
  // --- FIX START ---
  // Use keys to look up quotes from the translations object
  const quoteKeys = ["hero_quote_1", "hero_quote_2", "hero_quote_3", "hero_quote_4"];
  let quoteIndex = 0;

  function nextHero() {
      if (heroBgs.length === 0) return; // Prevent errors if no hero backgrounds
      heroBgs.forEach(bg => bg.classList.remove("active"));
      heroBgs[quoteIndex].classList.add("active");

      // Get the current language from local storage
      const currentLang = localStorage.getItem('language') || 'en';
      // Fetch the correct quote using the key for the current language
      const newQuote = translations[currentLang][quoteKeys[quoteIndex]];

      heroQuote.style.opacity = 0;
      setTimeout(() => {
          heroQuote.textContent = newQuote;
          heroQuote.setAttribute('data-key', quoteKeys[quoteIndex]); // Keep data-key in sync
          heroQuote.style.opacity = 1;
      }, 500);
      quoteIndex = (quoteIndex + 1) % heroBgs.length;
  }
  // --- FIX END ---
  nextHero();
  setInterval(nextHero, 4000);


  // Scroll reveal
  const revealEls = document.querySelectorAll(".section,.card,.food-card");
  function reveal() {
    const trig = window.innerHeight * 0.85;
    revealEls.forEach(el => {
      if (el.getBoundingClientRect().top < trig) {
        el.classList.add("show");
      }
    });
  }
  window.addEventListener("scroll", reveal);
  reveal();

  // Star Rating Logic
  const stars = document.querySelectorAll(".star-rating span");
  const ratingContainer = document.querySelector(".star-rating");

  stars.forEach((star, index) => {
    star.addEventListener("mouseover", () => {
      stars.forEach((s, i) => s.classList.toggle("hovered", i <= index));
    });

    star.addEventListener("click", () => {
      selectedRating = index + 1;
      stars.forEach((s, i) => {
        s.classList.remove("hovered");
        s.classList.toggle("selected", i < selectedRating);
      });
    });
  });

  ratingContainer.addEventListener("mouseout", () => {
    stars.forEach(s => s.classList.remove("hovered"));
    stars.forEach((s, i) => {
      s.classList.toggle("selected", i < selectedRating);
    });
  });

  // Handle Yes/No dropdowns
  const optionDropdowns = document.querySelectorAll('.filter-dropdown');
  optionDropdowns.forEach(dropdown => {
    const valueSpan = dropdown.querySelector('.selected-value');
    if (!valueSpan) return;

    dropdown.querySelectorAll('.option-yn').forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedValue = option.getAttribute('data-value');
        const dataType = option.getAttribute('data-type');

        valueSpan.textContent = `: ${selectedValue}`;

        // Store the selected values
        if (dataType === 'festival') {
          selectedFestival = selectedValue;
        } else if (dataType === 'holiday') {
          selectedHoliday = selectedValue;
        }
      });
    });
  });

  // --- NEW REDIRECTION LOGIC: Separate event listeners for the two buttons ---

  // Event listener for the "Plan Your Trip" button (WITH REDIRECTION)
  document.getElementById('plan-trip-btn').addEventListener('click', () => {
    const destination = document.getElementById('destination-input').value.trim();

    // Check if the destination is Manali and redirect
    if (destination.toLowerCase() === 'manali') {
      // Create the static folder structure if it doesn't exist and redirect to manali page
      window.location.href = "/manali";
      return; // Exit to prevent calling getPredictions()
    }

    // If not Manali, proceed with the prediction logic
    getPredictions();
  });

  // Event listener for the "Get Predictions" button (NO REDIRECTION)
  document.getElementById('prediction-btn').addEventListener('click', getPredictions);

  // --- END OF REDIRECTION LOGIC ---

  async function getPredictions() {
    const destination = document.getElementById('destination-input').value.trim();

    // Validation
    if (!destination) {
      alert('Please enter a destination!');
      return;
    }

    if (!selectedFestival) {
      alert('Please select Festive Season (Yes/No)!');
      return;
    }

    if (!selectedHoliday) {
      alert('Please select Holiday (Yes/No)!');
      return;
    }

    if (selectedRating === 0) {
      alert('Please select Hotel Rating!');
      return;
    }

    // Show loading modal
    document.getElementById('loading-modal').style.display = 'flex';

    try {
      const response = await fetch('/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          destination: destination,
          festival: selectedFestival,
          holiday: selectedHoliday,
          hotel_rating: selectedRating
        })
      });

      const data = await response.json();

      // Hide loading modal
      document.getElementById('loading-modal').style.display = 'none';

      if (data.status === 'success') {
        displayResults(data);
      } else {
        alert('Error: ' + data.message);
      }
    } catch (error) {
      document.getElementById('loading-modal').style.display = 'none';
      alert('Error getting predictions: ' + error.message);
    }
  }

  function displayResults(data) {
    // Update weather info
    document.getElementById('weather-condition').textContent = data.weather.condition;
    document.getElementById('weather-temp').textContent = data.weather.temperature.toFixed(1);
    document.getElementById('weather-wind').textContent = data.weather.wind_speed.toFixed(1);

    // Update predictions
    const safetyResult = document.getElementById('safety-result');
    safetyResult.textContent = data.predictions.safety;

    // Add safety color coding
    safetyResult.className = 'result-value safety-' + data.predictions.safety.toLowerCase();

    document.getElementById('price-result').textContent = '₹' + data.predictions.price.toLocaleString();
    document.getElementById('popularity-result').textContent = data.predictions.popularity + '/100';

    // Show results section
    document.getElementById('results').style.display = 'block';

    // Scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });

    // Add show class for animation
    setTimeout(() => {
      document.getElementById('results').classList.add('show');
    }, 100);
  }

  // Add event listeners for quick destination selection from cards
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const destination = card.querySelector('h4').textContent.split(' ')[0]; // Get first word
      document.getElementById('destination-input').value = destination;
    });
  });

  // Auto-complete suggestions for destinations
  const commonDestinations = [
    'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad',
    'Pune', 'Ahmedabad', 'Jaipur', 'Surat', 'Lucknow', 'Kanpur',
    'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Vadodara',
    'Firozabad', 'Ludhiana', 'Rajkot', 'Agra', 'Siliguri', 'Nashik',
    'Faridabad', 'Patiala', 'Ghaziabad', 'Kalyan', 'Vasai-Virar',
    'Varanasi', 'Srinagar', 'Dhanbad', 'Jodhpur', 'Amritsar', 'Raipur',
    'Allahabad', 'Coimbatore',
    'Jabalpur', 'Gwalior', 'Vijayawada',
    'Madurai', 'Guwahati', 'Chandigarh', 'Hubli', 'Amroha', 'Moradabad',
    'Goa', 'Udaipur', 'Ooty', 'Shimla', 'Manali', 'Darjeeling',
    'Rishikesh', 'Haridwar', 'Mysore', 'Kochi', 'Trivandrum', 'Calicut'
  ];

  const destinationInput = document.getElementById('destination-input');

  // Create datalist for autocomplete
  const datalist = document.createElement('datalist');
  datalist.id = 'destinations';
  commonDestinations.forEach(dest => {
    const option = document.createElement('option');
    option.value = dest;
    datalist.appendChild(option);
  });
  document.body.appendChild(datalist);
  destinationInput.setAttribute('list', 'destinations');

  // Enter key support for destination input
  destinationInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      getPredictions();
    }
  });

  // Clear results when destination changes
  destinationInput.addEventListener('input', () => {
    document.getElementById('results').style.display = 'none';
  });

  // Add smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Add loading state to buttons
  function setButtonLoading(button, isLoading) {
    if (isLoading) {
      button.disabled = true;
      button.textContent = '⏳ Loading...';
    } else {
      button.disabled = false;
      if (button.id === 'prediction-btn') {
        button.textContent = '🔮 Get Predictions';
      } else {
        button.textContent = '✈️ Plan Your Trip';
      }
    }
  }

  // Enhanced error handling with retry functionality
  function showError(message, canRetry = false) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
      <div class="error-content">
        <h4>⚠️ Error</h4>
        <p>${message}</p>
        ${canRetry ? '<button onclick="this.parentElement.parentElement.remove()">Try Again</button>' : ''}
      </div>
    `;

    // Style the error message
    errorDiv.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(244, 67, 54, 0.9);
      color: white;
      padding: 20px;
      border-radius: 10px;
      z-index: 3000;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      max-width: 400px;
      text-align: center;
    `;

    document.body.appendChild(errorDiv);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (errorDiv.parentElement) {
        errorDiv.remove();
      }
    }, 5000);
  }

  // Add success animation for results
  function animateResults() {
    const resultCards = document.querySelectorAll('.result-card');
    resultCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';

        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 100);
      }, index * 200);
    });
  }

  // Enhanced displayResults function
  const originalDisplayResults = displayResults;
  displayResults = function (data) {
    originalDisplayResults(data);
    animateResults();

    // Add confetti effect for good predictions
    if (data.predictions.safety === 'Safe' && data.predictions.popularity > 60) {
      // Simple confetti effect (you can enhance this)
      console.log('🎉 Great destination choice!');
    }
  };

  // Add keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + Enter to get predictions
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      getPredictions();
    }

    // Escape to close modals
    if (e.key === 'Escape') {
      document.getElementById('loading-modal').style.display = 'none';
      document.getElementById('chatbot-popup').style.display = 'none';
    }
  });

  // Add tooltip functionality
  function addTooltips() {
    const tooltipElements = [
      { selector: '.star-rating', text: 'Click stars to select hotel rating (1-5 stars)' },
      { selector: '#prediction-btn', text: 'Get AI-powered travel predictions' },
      { selector: '#destination-input', text: 'Enter any Indian city name' }
    ];

    tooltipElements.forEach(({ selector, text }) => {
      const element = document.querySelector(selector);
      if (element) {
        element.setAttribute('title', text);
      }
    });
  }

  addTooltips();

  // Add social sharing functionality
  function shareResults(data) {
    if (navigator.share) {
      navigator.share({
        title: 'Xplor Bharat - Travel Predictions',
        text: `Check out my travel predictions for ${data.destination}! Safety: ${data.predictions.safety}, Price: ₹${data.predictions.price}, Popularity: ${data.predictions.popularity}/100`,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      const text = `Check out my travel predictions for ${data.destination}! Visit ${window.location.href}`;
      navigator.clipboard.writeText(text).then(() => {
        alert('Results copied to clipboard!');
      });
    }
  }

  // Initialize page
  console.log('🚀 Xplor Bharat initialized successfully!');
});
