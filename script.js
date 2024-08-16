const typingText = document.querySelector('.typing-text p');
const inputField = document.querySelector('.input-field');
const timeTag = document.querySelector('.time span b');
const mistakeTag = document.querySelector('.mistake span');
const wpmTag = document.querySelector('.wpm span');
const cpmTag = document.querySelector('.cpm span');
const tryAgainBtn = document.querySelector('.btn');

let timer,
    maxTime = 60,
    timeLeft = maxTime,
    charIndex = 0,
    mistakes = 0,
    isTyping = false;

function loadParagraph() {
    const paragraphs = [
        "As I sit in my room late at night, staring at the computer screen, I decide it would be a good idea to create this text. There isn't much meaning to it, other than to get some simple practice. A lot of the texts that have been created are rather short, and don't give a good representation of actual typing speed and accuracy. They lack the length to gauge where your strengths and weaknesses are when typing.",
        "Time management is a critical skill for students who want to succeed in their academic pursuits. With numerous assignments, readings, extracurricular activities, and personal commitments, it can be challenging to juggle everything effectively. Creating a well-structured schedule and prioritizing tasks based on their urgency and importance is key. Avoid procrastination by breaking down large tasks into smaller, more manageable chunks, and setting realistic deadlines. Time management tools like calendars, to-do lists, and productivity apps can help you stay organized and focused. Remember, effective time management is not about working harder, but about working smarter. By making the most of your time, you can reduce stress, increase productivity, and achieve your academic goals with greater ease.",


"The question mark (?) is the punctuation of inquiry. It turns statements into questions, inviting responses and sparking curiosity. Whether it's a simple 'How are you?' or a complex philosophical question, the question mark signals a desire for information or a deeper understanding.",

"A paralegal is a person trained in legal matters who performs tasks requiring knowledge of the law and legal procedures. A paralegal is not a lawyer but can be employed by a law office or work freelance at a company or law office. Paralegals are not allowed to offer legal services directly to the public on their own and must perform their legal work under an attorney or law firm.",

"Teamwork is the cornerstone of human achievement, a force that amplifies individual strengths and transforms them into collective success. When individuals with diverse skills, perspectives, and experiences come together with a shared purpose, the possibilities become limitless. In the workplace, teams can tackle complex problems, generate innovative ideas, and execute projects with greater efficiency and effectiveness. In sports, teams can achieve victory through coordinated effort and mutual support. In communities, teams can create positive change and build a better future for everyone. The power of collaboration lies in its ability to harness the collective wisdom, creativity, and energy of a group, unlocking potential that would otherwise remain untapped.",

"Trust is the glue that holds teams together, the invisible bond that enables members to rely on each other, share ideas openly, and take risks without fear of judgment or reprisal. Trust is not built overnight; it requires consistent communication, mutual respect, and a willingness to be vulnerable. When team members trust each other, they are more likely to collaborate effectively, share information freely, and support each other through challenges. A lack of trust, on the other hand, can breed suspicion, conflict, and ultimately undermine the team's performance.",

"Two competing software companies, AlphaTech and Beta Solutions, were constantly vying for market share. After years of rivalry, their CEOs, Mark and Lisa, found themselves seated next to each other on a long flight. They struck up a conversation, discovering shared frustrations with industry challenges. This chance encounter led to a groundbreaking partnership. By combining their strengths, AlphaTech and Beta Solutions developed a revolutionary product that captured 50% of the market within a year, proving that sometimes, collaboration can be more powerful than competition.",

"Two common terms used to describe a salesperson are Farmer and Hunter. The reality is that most professional salespeople have a little of both. A hunter is often associated with aggressive personalities who use aggressive sales technique. In terms of sales methodology, a hunter refers to a person whose focus is on bringing in and closing deals. This process is called sales capturing. An example is a commodity sale such as a long distance salesperson, shoe salesperson and to a degree a car salesperson. Their job is to find and convert buyers. A sales farmer is someone who creates sales demand through activities that directly influence and alter the buying process.",

"Learning keyboard shortcuts for common commands can significantly improve your typing efficiency. Practice using shortcuts for actions like copying, pasting, saving, and formatting text. Over time, these shortcuts will become second nature and save you valuable time.",

"A homeless man found a crumpled $20 bill on the sidewalk. Instead of spending it on himself, he bought a lottery ticket. The next day, he discovered he had won $100,000. Overwhelmed, he donated half to a local shelter and used the rest to get back on his feet, finding a job and a home. The small act of kindness and a chance $20 bill changed his life forever.",

"Transcription is the process of converting spoken language into written text. It is a valuable skill used in various fields, including legal, medical, academic, and media. Transcriptionists listen to audio recordings of interviews, meetings, lectures, or other events and accurately transcribe the spoken word into a written document. The transcription process requires strong listening skills, attention to detail, and a good understanding of grammar and punctuation. Transcriptionists must be able to accurately identify different speakers, transcribe specialized terminology, and format the document according to specific guidelines. Technology has significantly impacted the field of transcription. Speech recognition software can automatically transcribe audio, but it still requires human editing to ensure accuracy. Transcriptionists often use specialized software to control the playback speed, insert timestamps, and manage different audio files. The demand for transcription services continues to grow as businesses and organizations increasingly rely on audio and video content. Skilled transcriptionists are sought after in various industries, making it a viable career path for those with strong typing and language skills.",

"Mastering touch typing is the foundation of efficient typing. It involves memorizing the keyboard layout and using all fingers without looking down. Practice regularly to build muscle memory and gradually increase your speed. Pay attention to your posture, keeping your back straight, wrists relaxed, and fingers gently curved over the keys. Accuracy is as crucial as speed. Double-check your work for typos and grammatical errors to maintain professionalism in your documents. Take regular breaks to prevent fatigue and maintain consistent performance.",

"Well-formatted documents reflect professionalism and attention to detail. Use appropriate fonts, margins, and line spacing for readability. Create clear headings and subheadings to organize information. Utilize lists and tables to present data effectively.",

"Parentheses ( ) create a quiet space for asides, supplementary information, or clarifying details. They offer a brief detour from the main sentence without derailing its flow. The author (a renowned scholar) presented her research at the conference. Parentheses allow you to include additional information without interrupting the primary message.",

"The road to success is rarely a straight line. There will be detours, roadblocks, and unexpected challenges along the way. But with perseverance, resilience, and an unwavering belief in yourself, you can overcome any obstacle and achieve your dreams. Remember, every setback is an opportunity for growth, every failure a chance to learn and improve. Don't let fear or doubt hold you back. Keep pushing forward, one step at a time, and never lose sight of your goals. The power of perseverance is the key to unlocking your full potential and creating the life you envision.",

"Editing is a growing field of work in the service industry. Paid editing services may be provided by specialized editing firms or by self-employed (freelance) editors. Editing firms may employ a team of in-house editors, rely on a network of individual contractors or both. Such firms are able to handle editing in a wide range of topics and genres, depending on the skills of individual editors. The services provided by these editors may be varied and can include proofreading, copy editing, online editing, developmental editing, editing for search engine optimization (SEO), etc. Self-employed editors work directly for clients or offer their services through editing firms, or both. They may specialize in a type of editing and in a particular subject area. Those who work directly for authors and develop professional relationships with them are called authors' editors.",

"There are many idiosyncratic typing styles in between novice-style hunt and peck and touch typing. For example, many hunt and peck typists have the keyboard layout memorized and are able to type while focusing their gaze on the screen. Some use just two fingers, while others use 3-6 fingers. Some use their fingers very consistently, with the same finger being used to type the same character every time, while others vary the way they use their fingers.",

"Business casual is an ambiguously defined dress code that has been adopted by many professional and white-collar workplaces in Western countries. It entails neat yet casual attire and is generally more casual than informal attire but more formal than casual or smart casual attire. Casual Fridays preceded widespread acceptance of business casual attire in many offices.",

"In 1990, a Fortune 500 company launched a mentorship program aimed at developing the next generation of leaders. The program paired high-potential employees with experienced executives who provided guidance, support, and opportunities for growth. Over the next 30 years, the program produced a remarkable track record of success. 80% of mentees reported significant career advancement within 5 years of completing the program. Many went on to become senior leaders within the company, and some even rose to the C-suite. The mentorship program not only benefited individual employees but also had a positive impact on the company's culture and bottom line. The program fostered a sense of community and collaboration, improved employee engagement and retention, and contributed to a more diverse and inclusive leadership team. The company's investment in mentorship paid off in countless ways, demonstrating the long-term benefits of developing talent and fostering a culture of learning and growth.",

"Business casual is an ambiguously defined dress code that has been adopted by many professional and white-collar workplaces in Western countries. It entails neat yet casual attire and is generally more casual than informal attire but more formal than casual or smart casual attire. Casual Fridays preceded widespread acceptance of business casual attire in many offices.",

"The recent emergence of several competitive typing websites has allowed several fast typists on computer keyboards to emerge along with new records, though these are unverifiable for the most part. Two of the most notable online records that are considered genuine are 241.82 wpm on an English text on typingzone.com by Brazilian Guilherme Sandrini (equivalent to 290.184 wpm using the traditional definition for words per minute since this site defines a word as six characters rather than five) and 256 wpm (a record caught on video) on TypeRacer by American Sean Wrona, the inaugural Ultimate Typing Championship winner, which was considered the highest ever legitimate score ever set on the site, until Wrona claimed it has been surpassed. Both of these records are essentially sprint speeds on short text selections lasting much less than one minute and were achieved on the QWERTY keyboard. Wrona also maintained 174 wpm on a 50-minute test taken on hi-games.net, another online typing website to unofficially displace Blackburn as the fastest endurance typist, although disputes might still arise over differences in the difficulty of the texts as well as Wrona's use of a modern computer keyboard as opposed to the typewriter used by Blackburn.",

"Closed captions were created for deaf or hard of hearing individuals to assist in comprehension. They can also be used as a tool by those learning to read, learning to speak a non-native language, or in an environment where the audio is difficult to hear or is intentionally muted.",

"Data entry requires meticulous attention to detail. Double-check each entry against the source document to avoid costly errors. Utilize data validation tools to ensure consistency and accuracy. Take breaks to avoid fatigue, which can lead to mistakes.",

"Medical transcription, also known as MT, is an allied health profession dealing with the process of transcribing voice-recorded medical reports that are dictated by physicians, nurses and other healthcare practitioners. Medical reports can be voice files, notes taken during a lecture, or other spoken material. These are dictated over the phone or uploaded digitally via the Internet or through smart phone apps.",

"The bikers rode down the long and narrow path to reach the city park. When they reached a good spot to rest, they began to look for signs of spring. The sun was bright, and a lot of bright red and blue blooms proved to all that warm spring days were the very best. Spring rides were planned. They had a burger at the lake and then rode farther up the mountain. As one rider started to get off his bike, he slipped and fell. One of the other bikers saw him fall but could do nothing to help him. Neither the boy nor the bike got hurt. After a brief stop, everyone was ready to go on. All the bikers enjoyed the nice view when they came to the top. All the roads far below them looked like ribbons. A dozen or so boats could be seen on the lake. It was very quiet and peaceful and no one wished to leave. As they set out on their return, they all enjoyed the ease of pedaling. The bikers came upon a new bike trail. This route led to scenery far grander than that seen from the normal path. The end of the day brought laughs and cheers from everyone. The fact that each person was very, very tired did not keep anyone from eagerly planning for the exciting ride to come.",

"The road to success is rarely a straight line. There will be detours, roadblocks, and unexpected challenges along the way. But with perseverance, resilience, and an unwavering belief in yourself, you can overcome any obstacle and achieve your dreams. Remember, every setback is an opportunity for growth, every failure a chance to learn and improve. Don't let fear or doubt hold you back. Keep pushing forward, one step at a time, and never lose sight of your goals. The power of perseverance is the key to unlocking your full potential and creating the life you envision."
];

    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";

    paragraphs[randomIndex].split("").forEach(char => {
        let span = `<span>${char}</span>`;
        typingText.innerHTML += span;
    });

    typingText.querySelectorAll('span')[0].classList.add('active');
    document.addEventListener('keydown', () => inputField.focus());
    typingText.addEventListener('click', () => inputField.focus());
}

function initTyping() {
    const characters = typingText.querySelectorAll('span');
    const typedChar = inputField.value.split("")[charIndex];

    if (charIndex < characters.length && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }

        if (typedChar == null) {
            // Decrement charIndex to remove class from the previous character
            if (characters[charIndex].classList.contains('incorrect')) {
                mistakes--;
            }
            characters[charIndex].classList.remove('correct', 'incorrect');
            charIndex--;
        } else {
            if (characters[charIndex].innerText === typedChar) {
                characters[charIndex].classList.add('correct');
            } else {
                characters[charIndex].classList.add('incorrect');
                mistakes++;
            }
            charIndex++;
        }

        characters.forEach(span => span.classList.remove('active'));
        characters[charIndex]?.classList.add('active');

        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
        inputField.value = "";
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = 0;
    mistakes = 0;
    isTyping = false;
    timeTag.innerText = timeLeft;
    mistakeTag.innerText = mistakes;
    wpmTag.innerText = 0;
    cpmTag.innerText = 0;
    inputField.value = "";
}

inputField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);
window.addEventListener("load", resetGame);
