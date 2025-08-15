(() => {
    'use strict';

    // Theme initialization
    const THEME_NAME = 'Modern Aurora Theme';
    const THEME_VERSION = '1.0.0';

    // Theme configuration
    const themeConfig = {
        enableAnimations: true,
        enableGradients: true,
        enableBlur: true,
        messageStyle: 'modern'
    };

    // Initialize theme
    function initializeTheme() {
        console.log(`[${THEME_NAME}] v${THEME_VERSION} - Initializing...`);
        
        // Add theme class to body
        document.body.classList.add('aurora-theme');
        
        // Setup theme controls
        setupThemeControls();
        
        // Apply dynamic styles
        applyDynamicStyles();
        
        // Setup message observers
        setupMessageObservers();
        
        console.log(`[${THEME_NAME}] - Successfully initialized`);
    }

    // Setup theme control panel
    function setupThemeControls() {
        // Create theme settings button
        const themeButton = $(`
            <div class="fa-solid fa-palette menu_button" 
                 title="Aurora Theme Settings" 
                 id="aurora-theme-button">
            </div>
        `);
        
        // Create settings panel
        const settingsPanel = $(`
            <div id="aurora-theme-settings" class="aurora-settings-panel" style="display: none;">
                <div class="aurora-settings-header">
                    <h3>Aurora Theme Settings</h3>
                    <div class="fa-solid fa-times aurora-close-btn"></div>
                </div>
                <div class="aurora-settings-content">
                    <label class="aurora-setting-item">
                        <input type="checkbox" id="aurora-animations" ${themeConfig.enableAnimations ? 'checked' : ''}>
                        <span>Enable Animations</span>
                    </label>
                    <label class="aurora-setting-item">
                        <input type="checkbox" id="aurora-gradients" ${themeConfig.enableGradients ? 'checked' : ''}>
                        <span>Enable Gradients</span>
                    </label>
                    <label class="aurora-setting-item">
                        <input type="checkbox" id="aurora-blur" ${themeConfig.enableBlur ? 'checked' : ''}>
                        <span>Enable Blur Effects</span>
                    </label>
                    <div class="aurora-setting-item">
                        <label>Message Style:</label>
                        <select id="aurora-message-style">
                            <option value="modern" ${themeConfig.messageStyle === 'modern' ? 'selected' : ''}>Modern</option>
                            <option value="minimal" ${themeConfig.messageStyle === 'minimal' ? 'selected' : ''}>Minimal</option>
                            <option value="bubble" ${themeConfig.messageStyle === 'bubble' ? 'selected' : ''}>Bubble</option>
                        </select>
                    </div>
                </div>
            </div>
        `);

        // Add event listeners
        themeButton.on('click', () => {
            $('#aurora-theme-settings').toggle();
        });

        $('.aurora-close-btn').on('click', () => {
            $('#aurora-theme-settings').hide();
        });

        // Setting change handlers
        $('#aurora-animations').on('change', function() {
            themeConfig.enableAnimations = this.checked;
            document.body.classList.toggle('aurora-no-animations', !this.checked);
            saveThemeConfig();
        });

        $('#aurora-gradients').on('change', function() {
            themeConfig.enableGradients = this.checked;
            document.body.classList.toggle('aurora-no-gradients', !this.checked);
            saveThemeConfig();
        });

        $('#aurora-blur').on('change', function() {
            themeConfig.enableBlur = this.checked;
            document.body.classList.toggle('aurora-no-blur', !this.checked);
            saveThemeConfig();
        });

        $('#aurora-message-style').on('change', function() {
            themeConfig.messageStyle = this.value;
            document.body.className = document.body.className.replace(/aurora-style-\w+/g, '');
            document.body.classList.add(`aurora-style-${this.value}`);
            saveThemeConfig();
        });

        // Append to DOM
        $('#extensionsMenu').prepend(themeButton);
        $('body').append(settingsPanel);
    }

    // Apply dynamic styles based on configuration
    function applyDynamicStyles() {
        if (!themeConfig.enableAnimations) {
            document.body.classList.add('aurora-no-animations');
        }
        if (!themeConfig.enableGradients) {
            document.body.classList.add('aurora-no-gradients');
        }
        if (!themeConfig.enableBlur) {
            document.body.classList.add('aurora-no-blur');
        }
        document.body.classList.add(`aurora-style-${themeConfig.messageStyle}`);
    }

    // Setup message observers for dynamic styling
    function setupMessageObservers() {
        // Observe for new messages
        const chatContainer = document.getElementById('chat');
        if (chatContainer) {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1 && node.classList.contains('mes')) {
                            enhanceMessage(node);
                        }
                    });
                });
            });

            observer.observe(chatContainer, { childList: true, subtree: true });
        }

        // Enhance existing messages
        document.querySelectorAll('.mes').forEach(enhanceMessage);
    }

    // Enhance individual messages
    function enhanceMessage(messageElement) {
        // Add hover effects
        messageElement.addEventListener('mouseenter', function() {
            this.classList.add('aurora-message-hover');
        });

        messageElement.addEventListener('mouseleave', function() {
            this.classList.remove('aurora-message-hover');
        });

        // Add typing indicator enhancement
        const typingElement = messageElement.querySelector('.typing_indicator');
        if (typingElement) {
            typingElement.classList.add('aurora-typing');
        }
    }

    // Save theme configuration
    function saveThemeConfig() {
        localStorage.setItem('aurora-theme-config', JSON.stringify(themeConfig));
    }

    // Load theme configuration
    function loadThemeConfig() {
        const saved = localStorage.getItem('aurora-theme-config');
        if (saved) {
            Object.assign(themeConfig, JSON.parse(saved));
        }
    }

    // Initialize when jQuery is ready
    jQuery(() => {
        loadThemeConfig();
        initializeTheme();
    });

    // CSS Injection for dynamic styles
    const dynamicCSS = `
        .aurora-settings-panel {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--SmartThemeBodyColor, #1a1a1a);
            border: 1px solid var(--SmartThemeBorderColor, #333);
            border-radius: 12px;
            padding: 20px;
            z-index: 10000;
            min-width: 300px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(10px);
        }

        .aurora-settings-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            border-bottom: 1px solid var(--SmartThemeBorderColor, #333);
            padding-bottom: 10px;
        }

        .aurora-settings-header h3 {
            margin: 0;
            color: var(--SmartThemeQuoteColor, #fff);
        }

        .aurora-close-btn {
            cursor: pointer;
            padding: 5px;
            border-radius: 4px;
            transition: background-color 0.2s;
        }

        .aurora-close-btn:hover {
            background-color: var(--SmartThemeBorderColor, #333);
        }

        .aurora-setting-item {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            color: var(--SmartThemeQuoteColor, #fff);
        }

        .aurora-setting-item input[type="checkbox"] {
            margin-right: 10px;
        }

        .aurora-setting-item select {
            margin-left: 10px;
            background: var(--SmartThemeTextareaColor, #2a2a2a);
            color: var(--SmartThemeQuoteColor, #fff);
            border: 1px solid var(--SmartThemeBorderColor, #333);
            border-radius: 4px;
            padding: 4px 8px;
        }

        #aurora-theme-button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            transition: all 0.3s ease;
        }

        #aurora-theme-button:hover {
            transform: scale(1.1);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }
    `;

    // Inject dynamic CSS
    const styleElement = document.createElement('style');
    styleElement.textContent = dynamicCSS;
    document.head.appendChild(styleElement);
})();