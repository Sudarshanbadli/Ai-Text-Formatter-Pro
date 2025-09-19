// ======================
// DOM Elements
// ======================
const themeToggle = document.getElementById('themeToggle');
const inputText = document.getElementById('inputText');
const formatBtn = document.getElementById('formatBtn');
const clearBtn = document.getElementById('clearBtn');
const copyInputBtn = document.getElementById('copyInputBtn');
const printBtn = document.getElementById('printBtn');
const copyOutputBtn = document.getElementById('copyOutputBtn');
const saveBtn = document.getElementById('saveBtn');
const formattedContent = document.getElementById('formattedContent');
const statNumbers = document.querySelectorAll('.stat-number');
const getStartedBtn = document.getElementById('getStartedBtn');
const watchDemoBtn = document.getElementById('watchDemoBtn');
const templateSelect = document.getElementById('templateSelect'); // Added template selection
const shareBtn = document.getElementById('shareBtn'); // Added share button

// ======================
// Template Styles
// ======================
const templateStyles = {
    default: {
        name: "Default Style",
        css: `
            font-family: 'EB Garamond', serif;
            background: #f5f0e1;
            color: #5d4037;
            background-image: 
                linear-gradient(to bottom, #f5f0e1, #e8d9c4),
                url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noise)" opacity="0.1"/></svg>');
            padding: 20px;
        `,
        heading: `
            color: #3e2723;
            font-family: 'Cinzel', serif;
            border-bottom: 2px solid #8d6e63;
            padding-bottom: 10px;
            margin: 25px 0 15px 0;
        `,
        h1: `
            font-size: 2.2em;
            border-bottom: 3px solid #8d6e63;
            padding-bottom: 12px;
        `,
        h2: `
            font-size: 1.8em;
            border-bottom: 2px solid #a1887f;
            padding-bottom: 10px;
        `,
        h3: `
            font-size: 1.5em;
            border-left: 4px solid #8d6e63;
            padding-left: 15px;
        `,
        paragraph: `
            line-height: 1.8;
            margin-bottom: 18px;
            text-align: justify;
        `
    },
    professional: {
        name: "Professional Report",
        css: `
            font-family: 'Calibri', 'Helvetica Neue', Arial, sans-serif;
            background: #ffffff;
            color: #222222;
            padding: 30px;
            line-height: 1.6;
        `,
        heading: `
            color: #2c3e50;
            font-weight: 600;
            margin: 30px 0 20px 0;
            border-bottom: 1px solid #3498db;
            padding-bottom: 10px;
        `,
        h1: `
            font-size: 2.0em;
            color: #1a237e;
        `,
        h2: `
            font-size: 1.6em;
            color: #283593;
        `,
        h3: `
            font-size: 1.3em;
            color: #303f9f;
        `,
        paragraph: `
            line-height: 1.7;
            margin-bottom: 16px;
            text-align: left;
        `
    },
    modern: {
        name: "Modern Design",
        css: `
            font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
            background: #f8f9fa;
            color: #495057;
            padding: 25px;
            line-height: 1.7;
        `,
        heading: `
            color: #007bff;
            font-weight: 700;
            margin: 35px 0 20px 0;
        `,
        h1: `
            font-size: 2.5em;
            background: linear-gradient(90deg, #007bff, #00bcd4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        `,
        h2: `
            font-size: 1.9em;
            color: #6f42c1;
        `,
        h3: `
            font-size: 1.5em;
            color: #e83e8c;
        `,
        paragraph: `
            line-height: 1.9;
            margin-bottom: 20px;
            background: #ffffff;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        `
    },
    classic: {
        name: "Classic Paper",
        css: `
            font-family: 'Times New Roman', Times, serif;
            background: #fdfdfd;
            color: #333333;
            padding: 40px;
            line-height: 1.8;
            background-image: 
                repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 24px,
                    #e0e0e0 24px,
                    #e0e0e0 25px
                );
        `,
        heading: `
            color: #000000;
            font-weight: normal;
            font-style: italic;
            margin: 40px 0 20px 0;
            text-align: center;
        `,
        h1: `
            font-size: 2.2em;
            letter-spacing: 2px;
            border-top: 1px solid #000;
            border-bottom: 1px solid #000;
            padding: 15px 0;
        `,
        h2: `
            font-size: 1.7em;
            font-variant: small-caps;
        `,
        h3: `
            font-size: 1.4em;
            text-decoration: underline;
        `,
        paragraph: `
            line-height: 2.0;
            margin-bottom: 18px;
            text-indent: 30px;
            text-align: justify;
        `
    },
    minimal: {
        name: "Minimalist",
        css: `
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            background: #ffffff;
            color: #000000;
            padding: 40px;
            line-height: 1.5;
        `,
        heading: `
            color: #000000;
            font-weight: 300;
            letter-spacing: -0.5px;
            margin: 40px 0 20px 0;
        `,
        h1: `
            font-size: 2.8em;
            font-weight: 200;
            letter-spacing: -1.5px;
        `,
        h2: `
            font-size: 1.8em;
            font-weight: 300;
        `,
        h3: `
            font-size: 1.3em;
            font-weight: 400;
        `,
        paragraph: `
            line-height: 1.6;
            margin-bottom: 25px;
            max-width: 700px;
        `
    },
    colorful: {
        name: "Colorful",
        css: `
            font-family: 'Comic Sans MS', 'Marker Felt', 'Arial Rounded MT Bold', cursive;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #ffffff;
            padding: 30px;
            line-height: 1.6;
        `,
        heading: `
            color: #ffeb3b;
            font-weight: bold;
            margin: 30px 0 20px 0;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        `,
        h1: `
            font-size: 2.5em;
            background: #ff5722;
            padding: 15px;
            border-radius: 15px;
            display: inline-block;
        `,
        h2: `
            font-size: 1.9em;
            background: #4caf50;
            padding: 12px;
            border-radius: 12px;
            display: inline-block;
        `,
        h3: `
            font-size: 1.5em;
            background: #2196f3;
            padding: 10px;
            border-radius: 10px;
            display: inline-block;
        `,
        paragraph: `
            line-height: 1.7;
            margin-bottom: 20px;
            background: rgba(255, 255, 255, 0.2);
            padding: 20px;
            border-radius: 10px;
            backdrop-filter: blur(5px);
        `
    },
    dark: {
        name: "Dark Theme",
        css: `
            font-family: 'Courier New', 'Consolas', 'Monaco', monospace;
            background: #121212;
            color: #e0e0e0;
            padding: 30px;
            line-height: 1.7;
        `,
        heading: `
            color: #bb86fc;
            font-weight: bold;
            margin: 30px 0 20px 0;
        `,
        h1: `
            font-size: 2.2em;
            color: #03dac6;
            text-shadow: 0 0 10px rgba(3, 218, 198, 0.5);
        `,
        h2: `
            font-size: 1.8em;
            color: #cf6679;
        `,
        h3: `
            font-size: 1.5em;
            color: #ffa000;
        `,
        paragraph: `
            line-height: 1.8;
            margin-bottom: 20px;
            background: #1e1e1e;
            padding: 20px;
            border-left: 4px solid #bb86fc;
        `
    },
    elegant: {
        name: "Elegant",
        css: `
            font-family: 'Georgia', 'Times New Roman', serif;
            background: #f9f5f0;
            color: #5c433e;
            padding: 40px;
            line-height: 1.9;
        `,
        heading: `
            color: #7d5d4f;
            font-weight: normal;
            font-variant: small-caps;
            margin: 40px 0 25px 0;
            letter-spacing: 1px;
        `,
        h1: `
            font-size: 2.4em;
            text-align: center;
            border-bottom: 1px solid #d6c5b8;
            padding-bottom: 20px;
        `,
        h2: `
            font-size: 1.8em;
            text-align: center;
        `,
        h3: `
            font-size: 1.4em;
            font-style: italic;
        `,
        paragraph: `
            line-height: 2.0;
            margin-bottom: 25px;
            text-align: justify;
        `
    },
    academic: {
        name: "Academic",
        css: `
            font-family: 'Times New Roman', 'Computer Modern', serif;
            background: #ffffff;
            color: #000000;
            padding: 50px;
            line-height: 2.0;
            max-width: 700px;
            margin: 0 auto;
        `,
        heading: `
            color: #000000;
            font-weight: bold;
            margin: 40px 0 20px 0;
            text-align: center;
        `,
        h1: `
            font-size: 1.8em;
            text-transform: uppercase;
            letter-spacing: 2px;
        `,
        h2: `
            font-size: 1.4em;
        `,
        h3: `
            font-size: 1.2em;
        `,
        paragraph: `
            line-height: 2.2;
            margin-bottom: 18px;
            text-align: justify;
            font-size: 14px;
        `
    },
    creative: {
        name: "Creative",
        css: `
            font-family: 'Arial Rounded MT Bold', 'Helvetica Rounded', 'Quicksand', sans-serif;
            background: #fff8e1;
            color: #5d4037;
            padding: 35px;
            line-height: 1.7;
        `,
        heading: `
            color: #ff8f00;
            font-weight: bold;
            text-transform: uppercase;
            margin: 35px 0 20px 0;
            text-align: center;
        `,
        h1: `
            font-size: 2.3em;
            background: linear-gradient(45deg, #ff8f00, #ff5722);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        `,
        h2: `
            font-size: 1.8em;
            color: #e91e63;
        `,
        h3: `
            font-size: 1.4em;
            color: #9c27b0;
        `,
        paragraph: `
            line-height: 1.8;
            margin-bottom: 20px;
            background: #ffecb3;
            padding: 20px;
            border-left: 5px solid #ffc107;
            border-radius: 0 10px 10px 0;
        `
    }
};

// ======================
// Theme Toggle
// ======================
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        const icon = themeToggle.querySelector('i');
        icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        
        // Add animation
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 500);
    });
}

// ======================
// Load Saved Theme
// ======================
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// ======================
// Stats Counter Animation
// ======================
function animateStats() {
    if (statNumbers.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const stat = entry.target;
                    const target = parseInt(stat.getAttribute('data-target'));
                    const increment = target / 100;
                    let current = 0;
                    
                    const updateCount = () => {
                        if (current < target) {
                            current += increment;
                            stat.innerText = Math.ceil(current);
                            setTimeout(updateCount, 40);
                        } else {
                            stat.innerText = target;
                        }
                    };
                    
                    updateCount();
                    observer.unobserve(stat);
                }
            });
        }, {
            threshold: 0.5
        });
        
        statNumbers.forEach(stat => {
            observer.observe(stat);
        });
    }
}

// Initialize stats animation when page loads
window.addEventListener('load', () => {
    // Small delay to ensure everything is loaded
    setTimeout(animateStats, 500);
});

// Fallback for stats animation if IntersectionObserver doesn't work properly
setTimeout(() => {
    if (statNumbers.length > 0) {
        // Check if stats are still at initial value (0)
        let needsAnimation = false;
        statNumbers.forEach(stat => {
            if (stat.innerText === '0') {
                needsAnimation = true;
            }
        });
        
        if (needsAnimation) {
            // Force animation
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                const increment = target / 100;
                let current = 0;
                
                const updateCount = () => {
                    if (current < target) {
                        current += increment;
                        stat.innerText = Math.ceil(current);
                        setTimeout(updateCount, 40);
                    } else {
                        stat.innerText = target;
                    }
                };
                
                updateCount();
            });
        }
    }
}, 2000);

// ======================
// Text Formatting Functions
// ======================
function processText(text) {
    // Split text into lines for processing
    let lines = text.split('\n');
    let html = '';
    let inCodeBlock = false;
    let inList = false;
    let listType = '';
    let codeBlockContent = '';
    let inTable = false;
    let tableHeaders = [];
    let tableRows = [];
    
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        
        // Handle code blocks (```code```)
        if (line.trim().startsWith('```') || line.trim().startsWith('~~~')) {
            if (inCodeBlock) {
                // End code block
                html += `<pre><code>${escapeHtml(codeBlockContent.trim())}</code></pre>\n`;
                inCodeBlock = false;
                codeBlockContent = '';
            } else {
                // Start code block
                inCodeBlock = true;
                codeBlockContent = '';
            }
            continue;
        }
        
        // If we're in a code block, accumulate content
        if (inCodeBlock) {
            codeBlockContent += line + '\n';
            continue;
        }
        
        // Handle table rows
        if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
            // Start table if not already started
            if (!inTable) {
                inTable = true;
                tableHeaders = [];
                tableRows = [];
            }
            
            let cells = line.trim().split('|').filter(cell => cell.trim() !== '');
            // Clean up cells by removing backticks and other formatting
            cells = cells.map(cell => {
                return cell.trim()
                    .replace(/`/g, '')  // Remove backticks
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')  // Bold
                    .replace(/\*(.*?)\*/g, '<em>$1</em>')  // Italic
                    .replace(/__(.*?)__/g, '<strong>$1</strong>')  // Bold
                    .replace(/_(.*?)_/g, '<em>$1</em>');  // Italic
            });
            
            // If this looks like a header (next line is a separator)
            if (i + 1 < lines.length && lines[i + 1].trim().match(/^[\|\-\s:]+$/)) {
                tableHeaders = cells;
                i++; // Skip the separator line
            } else if (cells.length > 0) {
                tableRows.push(cells);
            }
            continue;
        } else if (inTable) {
            // End table
            html += createTableHTML(tableHeaders, tableRows);
            inTable = false;
            tableHeaders = [];
            tableRows = [];
        }
        
        // Handle empty lines
        if (line.trim() === '') {
            if (inList) {
                html += listType === 'ul' ? '</ul>\n' : '</ol>\n';
                inList = false;
            }
            html += '<p><br></p>\n';
            continue;
        }
        
        // Remove markdown-style bold/italic markers and backticks
        line = line.replace(/`/g, '');  // Remove backticks
        line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        line = line.replace(/\*(.*?)\*/g, '<em>$1</em>');
        line = line.replace(/__(.*?)__/g, '<strong>$1</strong>');
        line = line.replace(/_(.*?)_/g, '<em>$1</em>');
        
        // Handle headings (lines that look like headings)
        if (isHeading(line)) {
            if (inList) {
                html += listType === 'ul' ? '</ul>\n' : '</ol>\n';
                inList = false;
            }
            
            let headingLevel = getHeadingLevel(line);
            let headingText = cleanHeadingText(line);
            html += `<h${headingLevel}>${headingText}</h${headingLevel}>\n`;
            continue;
        }
        
        // Handle numbered lists
        if (/^\s*\d+[\.\)]\s+/.test(line)) {
            if (!inList || listType !== 'ol') {
                if (inList) {
                    html += listType === 'ul' ? '</ul>\n' : '</ol>\n';
                }
                html += '<ol>\n';
                inList = true;
                listType = 'ol';
            }
            let listItem = line.replace(/^\s*\d+[\.\)]\s+/, '').trim();
            html += `<li>${listItem}</li>\n`;
            continue;
        }
        
        // Handle bullet points
        if (/^\s*[\*\-\+]\s+/.test(line)) {
            if (!inList || listType !== 'ul') {
                if (inList) {
                    html += listType === 'ul' ? '</ul>\n' : '</ol>\n';
                }
                html += '<ul>\n';
                inList = true;
                listType = 'ul';
            }
            let listItem = line.replace(/^\s*[\*\-\+]\s+/, '').trim();
            html += `<li>${listItem}</li>\n`;
            continue;
        }
        
        // Close list if we were in one
        if (inList) {
            html += listType === 'ul' ? '</ul>\n' : '</ol>\n';
            inList = false;
        }
        
        // Handle blockquotes
        if (line.trim().startsWith('>')) {
            let quoteText = line.replace(/^\s*>+\s*/, '').trim();
            html += `<blockquote>${quoteText}</blockquote>\n`;
            continue;
        }
        
        // Handle horizontal rules
        if (line.trim() === '---' || line.trim() === '***' || line.trim() === '___') {
            html += '<hr>\n';
            continue;
        }
        
        // Regular paragraph
        html += `<p>${line.trim()}</p>\n`;
    }
    
    // Close any open table
    if (inTable) {
        html += createTableHTML(tableHeaders, tableRows);
    }
    
    // Close any open list
    if (inList) {
        html += listType === 'ul' ? '</ul>\n' : '</ol>\n';
    }
    
    // Close any open code block
    if (inCodeBlock) {
        html += `<pre><code>${escapeHtml(codeBlockContent.trim())}</code></pre>\n`;
    }
    
    return html || '<p>No content to display.</p>';
}

function createTableHTML(headers, rows) {
    if (headers.length === 0 && rows.length === 0) return '';
    
    let html = '<table>\n';
    
    // Add headers if they exist
    if (headers.length > 0) {
        html += '  <thead>\n    <tr>\n';
        headers.forEach(header => {
            html += `      <th>${header}</th>\n`;
        });
        html += '    </tr>\n  </thead>\n';
    }
    
    // Add rows
    if (rows.length > 0) {
        html += '  <tbody>\n';
        rows.forEach(row => {
            html += '    <tr>\n';
            row.forEach(cell => {
                html += `      <td>${cell}</td>\n`;
            });
            html += '    </tr>\n';
        });
        html += '  </tbody>\n';
    }
    
    html += '</table>\n';
    return html;
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

function isHeading(line) {
    // Check for common heading patterns
    return (
        line.startsWith('#') || 
        line.match(/^={3,}$/) || 
        line.match(/^-{3,}$/) ||
        (line.length > 0 && line.length < 100 && line.endsWith(':')) ||
        (line.length > 0 && line === line.toUpperCase() && line.length < 50)
    );
}

function getHeadingLevel(line) {
    // Determine heading level based on markdown or other patterns
    if (line.startsWith('#')) {
        let count = 0;
        while (count < line.length && line[count] === '#') {
            count++;
        }
        return Math.min(count, 6); // HTML only supports h1-h6
    }
    
    // Default to h2 for other headings
    return 2;
}

function cleanHeadingText(line) {
    // Remove markdown heading markers
    return line.replace(/^#+\s*/, '').replace(/\s*=+$/, '').replace(/\s*-+$/, '').trim();
}

// ======================
// Button Event Handlers
// ======================
formatBtn.addEventListener('click', (e) => {
    addRippleEffect(e);
    animateButton(formatBtn);
    
    const text = inputText.value.trim();
    const selectedTemplate = templateSelect.value; // Get selected template
    
    if (!text) {
        showNotification('Please enter some text to format.', 'error');
        return;
    }
    
    try {
        const formattedHTML = processText(text);
        formattedContent.innerHTML = formattedHTML;
        
        // Apply template styling
        applyTemplateStyle(selectedTemplate);
        
        // Add copy buttons to code blocks
        addCopyButtons();
        
        showNotification('Text formatted successfully!', 'success');
    } catch (error) {
        console.error('Formatting error:', error);
        showNotification('Error formatting text. Please try again.', 'error');
    }
});

// Function to apply template styling
function applyTemplateStyle(templateName) {
    const template = templateStyles[templateName] || templateStyles.default;
    
    // Apply general content styling
    formattedContent.style.cssText = template.css;
    
    // Apply specific styling to elements if defined
    if (template.heading) {
        const headings = formattedContent.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headings.forEach(heading => {
            heading.style.cssText += template.heading;
        });
    }
    
    // Apply specific styling for h1 elements
    if (template.h1) {
        const h1Elements = formattedContent.querySelectorAll('h1');
        h1Elements.forEach(h1 => {
            h1.style.cssText += template.h1;
        });
    }
    
    // Apply specific styling for h2 elements
    if (template.h2) {
        const h2Elements = formattedContent.querySelectorAll('h2');
        h2Elements.forEach(h2 => {
            h2.style.cssText += template.h2;
        });
    }
    
    // Apply specific styling for h3 elements
    if (template.h3) {
        const h3Elements = formattedContent.querySelectorAll('h3');
        h3Elements.forEach(h3 => {
            h3.style.cssText += template.h3;
        });
    }
    
    // Apply specific styling for paragraphs
    if (template.paragraph) {
        const paragraphs = formattedContent.querySelectorAll('p');
        paragraphs.forEach(p => {
            p.style.cssText += template.paragraph;
        });
    }
}

clearBtn.addEventListener('click', (e) => {
    addRippleEffect(e);
    animateButton(clearBtn);
    
    inputText.value = '';
    formattedContent.innerHTML = `
        <div class="placeholder-content">
            <i class="fas fa-file-alt"></i>
            <p>Your formatted content will appear here...</p>
        </div>
    `;
    showNotification('Text cleared!', 'info');
});

copyInputBtn.addEventListener('click', (e) => {
    addRippleEffect(e);
    animateButton(copyInputBtn);
    
    const text = inputText.value;
    if (!text.trim()) {
        showNotification('No text to copy!', 'error');
        return;
    }
    
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Input text copied to clipboard!', 'success');
    }).catch(err => {
        showNotification('Failed to copy text: ' + err, 'error');
    });
});

copyOutputBtn.addEventListener('click', (e) => {
    addRippleEffect(e);
    animateButton(copyOutputBtn);
    
    const content = formattedContent.innerText;
    if (content.includes('Your formatted content will appear here')) {
        showNotification('No formatted content to copy!', 'error');
        return;
    }
    
    navigator.clipboard.writeText(content).then(() => {
        showNotification('Formatted content copied to clipboard!', 'success');
    }).catch(err => {
        showNotification('Failed to copy content: ' + err, 'error');
    });
});

printBtn.addEventListener('click', (e) => {
    addRippleEffect(e);
    animateButton(printBtn);
    
    const content = formattedContent.innerHTML;
    if (content.includes('Your formatted content will appear here')) {
        showNotification('Please format some text first!', 'error');
        return;
    }
    
    printDocument(content);
    showNotification('Printing document...', 'success');
});

saveBtn.addEventListener('click', (e) => {
    addRippleEffect(e);
    animateButton(saveBtn);
    
    const content = inputText.value;
    if (!content.trim()) {
        showNotification('No content to save!', 'error');
        return;
    }
    
    // Show export options
    showExportOptions(content);
});

function showExportOptions(content) {
    // Create modal for export options
    const modal = document.createElement('div');
    modal.className = 'export-modal';
    modal.innerHTML = `
        <div class="export-modal-content">
            <div class="export-modal-header">
                <h3>Export Document</h3>
                <span class="export-modal-close">&times;</span>
            </div>
            <div class="export-modal-body">
                <p>Select export format:</p>
                <div class="export-options">
                    <button class="btn btn-secondary export-btn" data-format="txt">
                        <i class="fas fa-file-alt"></i> Text (.txt)
                    </button>
                    <button class="btn btn-secondary export-btn" data-format="md">
                        <i class="fab fa-markdown"></i> Markdown (.md)
                    </button>
                    <button class="btn btn-secondary export-btn" data-format="html">
                        <i class="fas fa-code"></i> HTML (.html)
                    </button>
                    <button class="btn btn-secondary export-btn" data-format="pdf">
                        <i class="fas fa-file-pdf"></i> PDF (.pdf)
                    </button>
                    <button class="btn btn-secondary export-btn" data-format="docx">
                        <i class="fas fa-file-word"></i> DOCX (.docx)
                    </button>
                    <button class="btn btn-secondary export-btn" data-format="png">
                        <i class="fas fa-file-image"></i> PNG Image (.png)
                    </button>
                    <button class="btn btn-secondary export-btn" data-format="jpg">
                        <i class="fas fa-file-image"></i> JPEG Image (.jpg)
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .export-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        .export-modal-content {
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            max-width: 500px;
            width: 90%;
            animation: slideIn 0.3s ease;
        }
        
        .export-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            border-bottom: 1px solid #eee;
        }
        
        .export-modal-header h3 {
            margin: 0;
            color: #333;
        }
        
        .export-modal-close {
            font-size: 24px;
            cursor: pointer;
            color: #999;
        }
        
        .export-modal-close:hover {
            color: #333;
        }
        
        .export-modal-body {
            padding: 20px;
        }
        
        .export-options {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }
        
        .export-btn {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 15px;
            height: 80px;
        }
        
        .export-btn i {
            font-size: 24px;
            margin-bottom: 8px;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideIn {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // Add modal to document
    document.body.appendChild(modal);
    
    // Add event listeners
    const closeBtn = modal.querySelector('.export-modal-close');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
        document.head.removeChild(style);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.head.removeChild(style);
        }
    });
    
    // Add export button listeners
    const exportButtons = modal.querySelectorAll('.export-btn');
    exportButtons.forEach(button => {
        button.addEventListener('click', () => {
            const format = button.getAttribute('data-format');
            exportDocument(content, format);
            document.body.removeChild(modal);
            document.head.removeChild(style);
        });
    });
}

function exportDocument(content, format) {
    let blob;
    let filename;
    let mimeType;
    
    switch (format) {
        case 'txt':
            mimeType = 'text/plain';
            filename = 'ai-formatted-document.txt';
            blob = new Blob([content], { type: mimeType });
            break;
        case 'md':
            mimeType = 'text/markdown';
            filename = 'ai-formatted-document.md';
            blob = new Blob([content], { type: mimeType });
            break;
        case 'html':
            mimeType = 'text/html';
            filename = 'ai-formatted-document.html';
            // Create a simple HTML document
            const htmlContent = `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <title>AI Formatted Document</title>
                    <style>
                        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
                        h1, h2, h3 { color: #333; }
                        pre { background: #f5f5f5; padding: 15px; overflow-x: auto; }
                        code { background: #f5f5f5; padding: 2px 4px; }
                        blockquote { border-left: 4px solid #ddd; padding-left: 15px; margin: 0; }
                        table { border-collapse: collapse; width: 100%; }
                        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                        th { background: #f5f5f5; }
                    </style>
                </head>
                <body>
                    <h1>AI Formatted Document</h1>
                    ${processText(content)}
                </body>
                </html>
            `;
            blob = new Blob([htmlContent], { type: mimeType });
            break;
        case 'pdf':
            // For PDF, we'll create a print-friendly HTML and trigger print
            showNotification('Preparing PDF export...', 'info');
            setTimeout(() => {
                printDocument(processText(content));
            }, 500);
            return;
        case 'docx':
            // For DOCX, we'll save as HTML which can be opened in Word
            mimeType = 'application/msword';
            filename = 'ai-formatted-document.doc';
            const docxContent = `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <title>AI Formatted Document</title>
                    <style>
                        body { font-family: 'Times New Roman', serif; max-width: 800px; margin: 0 auto; padding: 20px; }
                        h1, h2, h3 { color: #333; }
                        pre { background: #f5f5f5; padding: 15px; overflow-x: auto; }
                        code { background: #f5f5f5; padding: 2px 4px; }
                        blockquote { border-left: 4px solid #ddd; padding-left: 15px; margin: 0; }
                        table { border-collapse: collapse; width: 100%; }
                        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                        th { background: #f5f5f5; }
                    </style>
                </head>
                <body>
                    <h1>AI Formatted Document</h1>
                    ${processText(content)}
                </body>
                </html>
            `;
            blob = new Blob([docxContent], { type: mimeType });
            break;
        case 'png':
        case 'jpg':
            // For image formats, we'll create a simple image representation
            showNotification(`Preparing ${format.toUpperCase()} export...`, 'info');
            setTimeout(() => {
                saveAsImage(format);
            }, 500);
            return;
        default:
            mimeType = 'text/plain';
            filename = 'ai-formatted-document.txt';
            blob = new Blob([content], { type: mimeType });
    }
    
    // Create download link
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification(`Document exported as ${format.toUpperCase()}!`, 'success');
}

// Hero button event listeners
if (getStartedBtn) {
    getStartedBtn.addEventListener('click', (e) => {
        addRippleEffect(e);
        animateButton(getStartedBtn);
        // Scroll to input section
        document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' });
    });
}

if (watchDemoBtn) {
    watchDemoBtn.addEventListener('click', (e) => {
        addRippleEffect(e);
        animateButton(watchDemoBtn);
        
        // Create video modal
        const videoModal = document.createElement('div');
        videoModal.className = 'video-modal';
        videoModal.innerHTML = `
            <div class="video-modal-content">
                <div class="video-modal-header">
                    <h3>Demo Video</h3>
                    <span class="video-modal-close">&times;</span>
                </div>
                <div class="video-modal-body">
                    <div class="video-container">
                        <iframe 
                            src="https://www.youtube.com/embed/Z1eMLyJqI_8" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                            width="100%" 
                            height="400">
                        </iframe>
                    </div>
                    <p class="video-description">
                        Watch how AI Text Formatter Pro transforms AI responses into beautifully formatted documents in seconds.
                    </p>
                </div>
            </div>
        `;
        
        // Add modal to document
        document.body.appendChild(videoModal);
        
        // Add event listeners
        const closeBtn = videoModal.querySelector('.video-modal-close');
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(videoModal);
        });
        
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                document.body.removeChild(videoModal);
            }
        });
    });
}

// Share button event listener
if (shareBtn) {
    shareBtn.addEventListener('click', (e) => {
        addRippleEffect(e);
        animateButton(shareBtn);
        
        const content = formattedContent.innerHTML;
        if (content.includes('Your formatted content will appear here')) {
            showNotification('Please format some text first!', 'error');
            return;
        }
        
        showShareOptions();
    });
}

function showShareOptions() {
    // Create modal for share options
    const modal = document.createElement('div');
    modal.className = 'share-modal';
    modal.innerHTML = `
        <div class="share-modal-content">
            <div class="share-modal-header">
                <h3>Share Document</h3>
                <span class="share-modal-close">&times;</span>
            </div>
            <div class="share-modal-body">
                <p>Share via:</p>
                <div class="share-options">
                    <button class="share-btn" data-platform="whatsapp">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </button>
                    <button class="share-btn" data-platform="instagram">
                        <i class="fab fa-instagram"></i> Instagram
                    </button>
                    <button class="share-btn" data-platform="telegram">
                        <i class="fab fa-telegram"></i> Telegram
                    </button>
                    <button class="share-btn" data-platform="email">
                        <i class="fas fa-envelope"></i> Email
                    </button>
                    <button class="share-btn" data-platform="twitter">
                        <i class="fab fa-twitter"></i> Twitter
                    </button>
                    <button class="share-btn" data-platform="facebook">
                        <i class="fab fa-facebook"></i> Facebook
                    </button>
                    <button class="share-btn" data-platform="linkedin">
                        <i class="fab fa-linkedin"></i> LinkedIn
                    </button>
                    <button class="share-btn" data-platform="image">
                        <i class="fas fa-image"></i> Save as Image
                    </button>
                    <button class="share-btn" data-platform="copy">
                        <i class="fas fa-link"></i> Copy Link
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to document
    document.body.appendChild(modal);
    
    // Add event listeners
    const closeBtn = modal.querySelector('.share-modal-close');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // Add share button listeners
    const shareButtons = modal.querySelectorAll('.share-btn');
    shareButtons.forEach(button => {
        button.addEventListener('click', () => {
            const platform = button.getAttribute('data-platform');
            shareDocument(platform);
            document.body.removeChild(modal);
        });
    });
}

function shareDocument(platform) {
    // Get the formatted content as text
    const content = formattedContent.innerText;
    const title = "AI Formatted Document";
    
    // Create a temporary element to convert HTML to text
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = formattedContent.innerHTML;
    const textContent = tempDiv.innerText;
    
    switch (platform) {
        case 'whatsapp':
            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(title + '\n\n' + textContent)}`;
            window.open(whatsappUrl, '_blank');
            break;
            
        case 'instagram':
            showNotification('To share on Instagram, save the document as an image and upload it to your Instagram story or post.', 'info');
            break;
            
        case 'telegram':
            const telegramUrl = `https://t.me/share/url?url=&text=${encodeURIComponent(title + '\n\n' + textContent)}`;
            window.open(telegramUrl, '_blank');
            break;
            
        case 'email':
            const emailSubject = encodeURIComponent(title);
            const emailBody = encodeURIComponent(textContent);
            window.location.href = `mailto:?subject=${emailSubject}&body=${emailBody}`;
            break;
            
        case 'twitter':
            const twitterText = encodeURIComponent(title + '\n\n' + textContent);
            const twitterUrl = `https://twitter.com/intent/tweet?text=${twitterText}`;
            window.open(twitterUrl, '_blank');
            break;
            
        case 'facebook':
            const facebookUrl = `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(title + '\n\n' + textContent)}`;
            window.open(facebookUrl, '_blank');
            break;
            
        case 'linkedin':
            const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
            window.open(linkedinUrl, '_blank');
            break;
            
        case 'image':
            saveAsImage();
            break;
            
        case 'copy':
            navigator.clipboard.writeText(window.location.href).then(() => {
                showNotification('Link copied to clipboard!', 'success');
            }).catch(err => {
                showNotification('Failed to copy link: ' + err, 'error');
            });
            break;
            
        default:
            showNotification('Sharing option not available.', 'error');
    }
}

function saveAsImage(format = 'png') {
    showNotification(`Preparing ${format.toUpperCase()} image...`, 'info');
    
    // Use html2canvas to capture the formatted content as an image
    setTimeout(() => {
        html2canvas(formattedContent, {
            backgroundColor: '#f5f0e1', // Match the background color
            scale: 2, // Higher quality image
            useCORS: true,
            logging: false
        }).then(canvas => {
            // Convert to data URL and trigger download
            const mimeType = format === 'png' ? 'image/png' : 'image/jpeg';
            const quality = format === 'png' ? undefined : 0.9;
            const dataUrl = canvas.toDataURL(mimeType, quality);
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = `ai-formatted-document.${format}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            showNotification(`${format.toUpperCase()} image saved successfully!`, 'success');
        }).catch(error => {
            console.error('Error generating image:', error);
            showNotification('Error generating image. Please try again.', 'error');
        });
    }, 1000);
}

// ======================
// Print Function
// ======================
function printDocument(content) {
    const selectedTemplate = templateSelect.value; // Get selected template
    const template = templateStyles[selectedTemplate] || templateStyles.default;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>AI Formatted Document</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                body {
                    font-family: 'EB Garamond', serif;
                    line-height: 1.7;
                    color: #3e2723;
                    max-width: 800px;
                }
                
                /* Template-specific styles */
                ${template.css || ''}
                
                h1, h2, h3 {
                    color: #5d4037;
                    margin: 25px 0 15px 0;
                    font-weight: 700;
                    line-height: 1.3;
                    font-family: 'Cinzel', serif;
                }
                
                /* Template-specific heading styles */
                ${template.heading ? `
                h1, h2, h3, h4, h5, h6 {
                    ${template.heading}
                }` : ''}
                
                /* Template-specific h1 styles */
                ${template.h1 ? `
                h1 {
                    ${template.h1}
                }` : `
                h1 {
                    font-size: 2.2em;
                    border-bottom: 3px solid #8d6e63;
                    padding-bottom: 12px;
                    color: #3e2723;
                }`}
                
                /* Template-specific h2 styles */
                ${template.h2 ? `
                h2 {
                    ${template.h2}
                }` : `
                h2 {
                    font-size: 1.8em;
                    border-bottom: 2px solid #a1887f;
                    padding-bottom: 10px;
                    color: #4e342e;
                }`}
                
                /* Template-specific h3 styles */
                ${template.h3 ? `
                h3 {
                    ${template.h3}
                }` : `
                h3 {
                    font-size: 1.5em;
                    color: #5d4037;
                    border-left: 4px solid #8d6e63;
                    padding-left: 15px;
                }`}
                
                p {
                    margin-bottom: 18px;
                    text-align: justify;
                    font-size: 1.1em;
                    line-height: 1.8;
                    color: #5d4037;
                }
                
                /* Template-specific paragraph styles */
                ${template.paragraph ? `
                p {
                    ${template.paragraph}
                }` : ''}
                
                strong {
                    color: #3e2723;
                    font-weight: 700;
                }
                em {
                    color: #5d4037;
                    font-style: italic;
                }
                ul, ol {
                    margin: 20px 0;
                    padding-left: 35px;
                }
                li {
                    margin-bottom: 12px;
                    line-height: 1.7;
                    font-size: 1.1em;
                }
                li::marker {
                    color: #8d6e63;
                    font-weight: bold;
                }
                pre {
                    background: #3e2723;
                    border: 1px solid #5d4037;
                    padding: 25px;
                    overflow-x: auto;
                    margin: 25px 0;
                    font-family: 'Special Elite', monospace;
                    font-size: 0.95em;
                    box-shadow: 0 5px 15px rgba(93, 64, 55, 0.3);
                    position: relative;
                }
                pre::before {
                    content: "CODE BLOCK";
                    position: absolute;
                    top: 0;
                    right: 0;
                    background: #8d6e63;
                    color: #f5f0e1;
                    font-size: 0.75em;
                    padding: 6px 12px;
                    font-family: 'Cinzel', serif;
                    font-weight: bold;
                    letter-spacing: 0.5px;
                }
                code {
                    background: #e8d9c4;
                    padding: 3px 8px;
                    font-family: 'Special Elite', monospace;
                    color: #3e2723;
                    font-size: 0.95em;
                    border: 1px solid #d3c0a9;
                }
                pre code {
                    background: transparent;
                    color: #f5f0e1;
                    padding: 0;
                    border: none;
                    font-size: 0.95em;
                }
                blockquote {
                    border-left: 5px solid #8d6e63;
                    padding: 20px 25px;
                    margin: 25px 0;
                    background: #e8d9c4;
                    font-style: italic;
                    border-radius: 0;
                    box-shadow: 0 3px 10px rgba(93, 64, 55, 0.2);
                }
                blockquote p {
                    margin: 0;
                    color: #3e2723;
                    font-size: 1.1em;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 25px 0;
                    box-shadow: 0 5px 15px rgba(93, 64, 55, 0.2);
                }
                table th, table td {
                    border: 1px solid #d3c0a9;
                    padding: 15px;
                    text-align: left;
                }
                table th {
                    background: #8d6e63;
                    color: #f5f0e1;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    font-family: 'Cinzel', serif;
                }
                table tr:nth-child(even) {
                    background-color: #e8d9c4;
                }
                table tr:hover {
                    background-color: #d3c0a9;
                }
                hr {
                    border: 0;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #8d6e63, transparent);
                    margin: 30px 0;
                }
                @media print {
                    @page {
                        size: auto;
                        margin: 0mm;
                    }
                    body {
                        margin: 0mm;
                        padding: 20px;
                        background: #ffffff;
                        -webkit-print-color-adjust: exact;
                        color-adjust: exact;
                    }
                    pre {
                        page-break-inside: avoid;
                        break-inside: avoid;
                    }
                    /* Hide browser-generated headers and footers */
                    @page {
                        margin: 0;
                    }
                    body {
                        margin: 0;
                    }
                }
            </style>
        </head>
        <body>
            <div class="content">
                ${content}
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    
    // Wait a bit for content to load before printing
    setTimeout(() => {
        printWindow.print();
        printWindow.close();
    }, 500);
}

// ======================
// Utility Functions
// ======================
function showNotification(message, type) {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Add animation
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    }, 100);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateY(-100%)';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function animateButton(button) {
    // Add visual feedback for button click
    const originalTransform = button.style.transform;
    const originalTransition = button.style.transition;
    
    button.style.transform = 'scale(0.95)';
    button.style.transition = 'transform 0.15s ease';
    
    setTimeout(() => {
        button.style.transform = originalTransform || 'scale(1)';
        button.style.transition = originalTransition || '';
    }, 150);
}

function addRippleEffect(event) {
    // Create ripple effect on button click
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `;
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'check-circle';
        case 'error': return 'exclamation-circle';
        case 'info': return 'info-circle';
        default: return 'bell';
    }
}

function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre');
    codeBlocks.forEach(block => {
        if (!block.querySelector('.copy-btn')) {
            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-btn';
            copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
            copyBtn.style.position = 'absolute';
            copyBtn.style.top = '10px';
            copyBtn.style.right = '10px';
            copyBtn.style.background = '#3e2723';
            copyBtn.style.color = '#f5f0e1';
            copyBtn.style.border = '1px solid #5d4037';
            copyBtn.style.borderRadius = '0';
            copyBtn.style.padding = '8px 12px';
            copyBtn.style.cursor = 'pointer';
            copyBtn.style.fontSize = '0.8em';
            copyBtn.style.fontWeight = '600';
            copyBtn.style.transition = 'all 0.3s ease';
            copyBtn.style.zIndex = '10';
            copyBtn.style.fontFamily = "'Cinzel', serif";
            
            copyBtn.addEventListener('mouseenter', () => {
                copyBtn.style.transform = 'translateY(-2px)';
                copyBtn.style.boxShadow = '0 4px 8px rgba(93, 64, 55, 0.3)';
            });
            
            copyBtn.addEventListener('mouseleave', () => {
                copyBtn.style.transform = 'translateY(0)';
                copyBtn.style.boxShadow = 'none';
            });
            
            copyBtn.onclick = function() {
                const code = block.querySelector('code').innerText;
                navigator.clipboard.writeText(code).then(() => {
                    const originalHTML = copyBtn.innerHTML;
                    copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                    setTimeout(() => {
                        copyBtn.innerHTML = originalHTML;
                    }, 2000);
                });
            };
            
            block.style.position = 'relative';
            block.appendChild(copyBtn);
        }
    });
}

// ======================
// Initialize
// ======================
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    animateStats();
    
    // Add click handlers to all buttons
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => {
        button.addEventListener('click', addRippleEffect);
    });
    
    // Add animations to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });
    
    // Add animations to testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 * index);
    });
    
    // Add floating animation to hero image
    const floatingCard = document.querySelector('.floating-card');
    if (floatingCard) {
        floatingCard.style.animation = 'float 3s ease-in-out infinite';
    }
});

// ======================
// Smooth Scrolling for Navigation
// ======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ======================
// Footer Contact Form Handling
// ======================
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('footerContactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const subject = document.getElementById('contactSubject').value.trim();
            const message = document.getElementById('contactMessage').value.trim();
            
            // Basic validation
            if (!name || !email || !subject) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading notification
            showNotification('Sending your message...', 'info');
            
            // Prepare form data for Formspree (primary method now)
            const formData = new FormData();
            formData.append('name', name);
            formData.append('_replyto', email);
            formData.append('_subject', 'Contact Form: ' + subject);
            formData.append('message', message);
            
            // Send data directly to Formspree
            fetch('https://formspree.io/f/xeolygnz', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Formspree submission failed');
                }
            })
            .then(data => {
                showNotification('Thank you for your message! We will get back to you soon.', 'success');
                contactForm.reset(); // Reset form on success
                // Redirect to thanks.html after successful submission
                setTimeout(() => {
                    window.location.href = 'thanks.html';
                }, 2000);
            })
            .catch(error => {
                console.error('Error with Formspree:', error);
                showNotification('Oops! Something went wrong. Please try again later.', 'error');
            });
        });
    }
});
