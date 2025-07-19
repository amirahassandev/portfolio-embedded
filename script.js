
var certificate_links = 
    [
        '2024 C_Programming_Bootcamp.jpg', 'C_Programming.pdf',

    ];

var certificate_titles = 
    [
        '2024 C_Programming_Bootcamp (Udemy)', 'C_Programming (Mahara-Tech)',

    ];

var certificate_desc = 
    [
        'Completed a comprehensive revision course on C programming, reinforcing problem-solving skills, pointers, memory management, and algorithmic thinking. Gained hands-on experience in debugging, optimizing code, and implementing efficient data structures.',
        'Developed a deep understanding of C programming, covering core concepts such as pointers, memory management, structures, and unions. Enhanced problem-solving abilities through hands-on coding exercises and optimized algorithm implementation.',
    ];



var certification__grid = document.getElementById("certification__grid");
certification__grid.innerHTML = '';
var i = 0;
certificate_titles.forEach(certificate => {
    certification__grid.innerHTML += `
        <div class="certification__card">
            <h4><a style="color: #FF6B35" href="https://github.com/AmiraHassan2003/Certificates/blob/main/EmbeddedSystem/${certificate_links[i]}">${certificate}</a></h4>
            <p>
            ${certificate_desc[i]}
            </p>
        </div>`
        i++;
});






var projects_video = ['7-segment_counter', 'DC_Motor', 'Digital_clock', 'Keypad-Activated-LCD-Motor-System', 'LCD_Display_ADC_MonitoringSystem', 
    'LCD-Button-Motor-Control', 'LED-Pattern-Control-System-with-Button', 'LED-Pattern-Generator', 'Motor-Control-with-Relay'];

var altImg_video = ['7-segment_counter', 'DC_Motor', 'Digital_clock', 'Keypad-Activated-LCD-Motor-System', 'LCD_Display_ADC_MonitoringSystem',
    'LCD-Button-Motor-Control', 'LED-Pattern-Control-System-with-Button', 'LED-Pattern-Generator', 'Motor-Control-with-Relay'];

var links_video = ['7-segment_counter', 'DC_Motor', 'Digital_clock', 'Keypad-Activated-LCD-Motor-System', 'LCD_Display_ADC_MonitoringSystem',
    'LCD-Button-Motor-Control', 'LED-Pattern-Control-System-with-Button', 'LED-Pattern-Generator', 'Motor-Control-with-Relay'];

var titles_video = ['7-segment_counter', 'DC_Motor', 'Digital_clock', 'Keypad-Activated-LCD-Motor-System', 'LCD_Display_ADC_MonitoringSystem',
    'LCD-Button-Motor-Control', 'LED-Pattern-Control-System-with-Button', 'LED-Pattern-Generator', 'Motor-Control-with-Relay'];

var pic__grid = document.getElementById("pic__grid");
pic__grid.innerHTML = '';
var i = 0;
projects_video.forEach(project => {
    pic__grid.innerHTML += `
        
            <div class="project__card">
                <div class = "overlay">
                    <p>${titles_video[i]}</p>
                </div>
                <video width="320" height="240" controls>
                    <source src="assets/${project}.mp4" type="video/mp4">
                </video>
                <a href = "https://github.com/AmiraHassan2003/${links_video[i]}">GitHup Repo</a>
            </div>
        </a>`;
        i++;
});




