const frauds = [
  {
  id: "digital-arrest",
  title: "Digital Arrest Scam",
  image: "digitalscam.jpeg",
  how: "You receive a call from someone pretending to be from police, CBI, or cybercrime department. They claim your Aadhaar, mobile number, or bank account is linked to illegal activities like money laundering, parcel fraud, or cybercrime. The caller creates extreme fear and tells you that you are under 'Digital Arrest'. You are forced to stay on a video call for hours where fake officers monitor you. They instruct you not to disconnect, not to contact anyone, and to cooperate silently. Under pressure, they demand money transfer to a 'safe government account' for verification or case closure.",

  redFlags: [
    "Unexpected call claiming police, CBI, or cybercrime authority",
    "Threats like 'you are under investigation' or 'you will be arrested today'",
    "Forcing you to stay on continuous video call",
    "Instructions not to inform family or friends",
    "Demand to transfer money to 'safe account' or 'verification account'",
    "Asking for OTP, Aadhaar, PAN, or bank details",
    "Creating extreme urgency and fear"
  ],

  impact: "Victims across India (students, working professionals, and elderly) have lost savings ranging from thousands to lakhs. Total losses in cybercrime reports exceed ₹100+ Crores. Psychological impact is severe due to fear, isolation, and manipulation.",

  actions: [
    "Immediately disconnect the call — do not stay on video call",
    "Do NOT share OTP, Aadhaar, PAN, bank details, or screenshots",
    "Do NOT transfer any money under pressure",
    "Contact family or trusted person immediately",
    "Call Cyber Crime Helpline: 1930",
    "Report incident on official portal: cybercrime.gov.in",
    "If money is transferred, report within minutes for higher recovery chances"
  ],

  mindset: "Real law enforcement agencies never arrest, interrogate, or demand money over phone or video calls. Fear and isolation are manipulation tools — staying calm and verifying is your strongest defense."
  
},
  {
  id: "upi-fraud",
  title: "UPI / QR Code Fraud",
  image: "upi.png",
  how: "This scam tricks you into believing you are RECEIVING money. The scammer contacts you as a buyer, seller, or support agent and sends a QR code or UPI request. They say you will get money after scanning or approving it. But in reality, UPI works in reverse — scanning or approving actually SENDS money from your account.",

  redFlags: [
    "Someone says 'scan QR to receive money'",
    "Unknown person sending payment request",
    "Urgent words like 'instant refund' or 'limited time offer'",
    "Pressure to act without reading details",
    "Random buyers/sellers on WhatsApp or social media",
    "Confusing payment screen (collect request)"
  ],

  impact: "Thousands of people in India lose money every day through small UPI transactions. Losses range from ₹500 to ₹50,000 per case, often repeated multiple times before detection.",

  actions: [
    "Never scan QR codes to receive money",
    "Always read UPI screen carefully before entering PIN",
    "Reject unknown payment requests immediately",
    "Do not trust unknown buyers or callers",
    "Verify transactions directly in your bank app",
    "If money is lost, call 1930 immediately"
  ],

  mindset: "UPI is designed for sending money — not receiving it through QR scans. If someone pushes you to act fast, stop and verify first."
},
  {
  id: "investment",
  title: "Investment Scam",
  image: "investment.png",
  how: "Scammers contact you through WhatsApp, Telegram, or social media pretending to be financial experts or trading advisors. They show fake profit screenshots and convince you to invest in stocks, crypto, or apps with promises of high and guaranteed returns. Initially, they may even show fake small profits to gain trust, then push for larger investments before disappearing with your money.",

  redFlags: [
    "Promises of guaranteed or fixed high returns",
    "Fake profit screenshots or dashboards",
    "Pressure to invest immediately",
    "Unknown trading apps or links",
    "Requests to deposit more money to 'unlock profits'"
  ],

  impact: "Large-scale financial losses in India, especially among students, beginners, and first-time investors. Victims often lose ₹10,000 to several lakhs in staged scams.",

  actions: [
    "Never trust guaranteed profit schemes",
    "Do proper research before investing",
    "Use only SEBI-registered platforms",
    "Avoid Telegram/WhatsApp investment groups",
    "Do not install unknown trading apps",
    "Report suspicious schemes immediately"
  ],

  mindset: "Real investments involve risk. Guaranteed returns are always a trap."
},
 {
  id: "job",
  title: "Job Scam",
  image: "jobscam.png",

  how: "Scammers target job seekers through WhatsApp, Telegram, email, or fake recruitment websites. They pretend to be HR recruiters from well-known companies and offer easy job selection. After initial contact, they demand money for registration, training, verification, or document processing. In some cases, they even conduct fake interviews to make it look legitimate before asking for payment.",

  redFlags: [
    "Job offer without proper interview or verification",
    "Demand for registration, training, or security fee",
    "Emails from unofficial or suspicious domains",
    "Too easy selection or instant job confirmation",
    "Pressure to pay quickly to 'secure the offer'",
    "No verifiable company presence online"
  ],

  impact: "Thousands of students, freshers, and job seekers lose money every year, often ranging from small fees to large deposits under fake recruitment promises.",

  actions: [
    "Never pay any money for getting a job",
    "Verify company on official website and LinkedIn",
    "Check if email domain is genuine (e.g., company.com)",
    "Do not trust WhatsApp-only recruiters",
    "Cross-check job postings on official portals",
    "Report suspicious recruitment immediately"
  ],

  mindset: "A real company hires based on skill and process — not payment."
},
{
  id: "ai-voice",
  title: "AI Voice Scam",
  image: "aivoicescam.png",
  how: "Scammers use AI voice cloning technology to copy the voice of someone you trust like a friend, family member, or colleague. They call you in urgent situations asking for money, help, or sensitive information. The voice sounds real, but it is artificially generated using short audio samples taken from social media or messaging apps. The goal is to create emotional panic so you act immediately without verification.",

  redFlags: [
    "Urgent emotional request for money or help",
    "Caller refuses video call or live verification",
    "Unknown or changed phone number",
    "Pressure to act immediately without thinking",
    "Story involves emergency like accident, hospital, or legal issue",
    "Voice sounds familiar but slightly unnatural or inconsistent"
  ],

  impact: "AI voice scams are rapidly increasing in India and globally, especially targeting families and working professionals. Losses can range from small emergency transfers to large financial frauds due to emotional manipulation.",

  actions: [
    "Always call back the person on their original number",
    "Verify through another family member if possible",
    "Ask personal questions only the real person would know",
    "Do not send money based on voice alone",
    "Never act under emotional pressure",
    "Report suspicious calls to cybercrime helpline (1930)"
  ],

  mindset: "In the AI era, voice is no longer proof of identity. Verification is the only truth."
},
{
  id: "ecommerce",
  title: "Fake E-commerce Scam",
  image: "ecomfinal.png",
  how: "Scammers create fake shopping websites, Instagram pages, or ads that look like popular brands or online stores. They offer heavy discounts on electronics, clothes, or gadgets to attract buyers. After payment, the product is never delivered, the website disappears, or fake low-quality items are sent. These scams often increase during festival sales and flash sale seasons.",

  redFlags: [
    "Extremely high discounts (50%–90%) on popular items",
    "No Cash on Delivery (only prepaid options)",
    "New or unknown website or Instagram page",
    "No proper contact details or customer support",
    "Poor website design or spelling mistakes",
    "Pressure like 'limited stock' or 'last few items left'"
  ],

  impact: "Hundreds of crores lost every year in India, especially during festive sales. Victims include students, first-time online shoppers, and bargain hunters.",

  actions: [
    "Always check website reviews before buying",
    "Prefer trusted platforms like Amazon, Flipkart, Myntra",
    "Avoid prepaid orders from unknown websites",
    "Verify domain name carefully before payment",
    "Search company name + 'scam' before buying",
    "Use secure payment methods with refund protection"
  ],

  mindset: "If a deal feels too cheap to be real, it is a trap."
},


{
  id: "kyc",
  title: "Bank KYC Scam",
  image:"bankkyc.png",

  how: "Scammers contact you through phone calls, SMS, or WhatsApp messages claiming your bank account will be blocked unless you immediately update your KYC details. They send fake links that look like official bank pages or ask you to share OTP, PIN, or card details. Once you enter the information, they gain access to your bank account and withdraw money instantly.",

  redFlags: [
    "Urgent message saying 'account will be blocked'",
    "Requests for OTP, PIN, CVV, or ATM details",
    "Unknown or suspicious KYC update links",
    "Calls pretending to be from bank support",
    "Pressure to act immediately without verification",
    "Poorly written SMS or unofficial sender IDs"
  ],

  impact: "Large-scale banking fraud affecting thousands of users in India every year. Losses range from small withdrawals to complete account draining within minutes.",

  actions: [
    "Never share OTP, PIN, or CVV with anyone",
    "Do not click unknown KYC update links",
    "Contact your bank using official customer care number",
    "Check bank app or official website directly",
    "Ignore urgent threats sent via SMS or WhatsApp",
    "Report suspicious messages to cybercrime (1930)"
  ],

  mindset: "No genuine bank will ever ask for OTP, PIN, or password."
},

{
  id: "phishing",
  title: "Phishing Links",
  image: "phishy.png",
  how: "Scammers send fake SMS, emails, or WhatsApp messages that look like they are from banks, delivery services, government portals, or social media platforms. These messages contain links that lead to fake websites designed to steal your login credentials, OTPs, card details, or banking information. Once entered, the attacker gains full access to your account.",

  redFlags: [
    "Suspicious or shortened links (bit.ly, tinyurl, etc.)",
    "Urgent messages like 'account locked' or 'verify immediately'",
    "Spelling mistakes or poor grammar in messages",
    "Unknown or slightly modified sender names",
    "Links that do not match official website domains",
    "Requests for login, OTP, or banking details"
  ],

  impact: "Phishing attacks are one of the most common cybercrimes globally, affecting millions of users each year and leading to financial loss, identity theft, and account takeovers.",

  actions: [
    "Never click unknown or suspicious links",
    "Always check the full URL before entering details",
    "Use official apps instead of browser links",
    "Enable two-factor authentication (2FA)",
    "Verify messages directly with the company or bank",
    "Report phishing messages to cybercrime authorities"
  ],

  mindset: "If a link creates fear or urgency, it is designed to trap you — not help you."
},

{
  id: "sim-swap",
  title: "SIM Swap Fraud",
  image: "simswapscam.png",
  how: "In SIM Swap fraud, attackers trick your mobile network provider into issuing a duplicate SIM card for your number. Once activated, your original SIM stops working. From that moment, all your calls, SMS, and OTPs are received by the scammer. This allows them to reset passwords and access your bank accounts, email, and digital wallets without your knowledge.",

  redFlags: [
    "Sudden loss of mobile network signal without reason",
    "SIM showing 'No Service' or emergency calls only",
    "Unexpected bank OTPs or login alerts",
    "Unable to make calls or receive messages",
    "Emails about password reset requests you did not initiate",
    "Bank account activity without your action"
  ],

  impact: "SIM Swap fraud can lead to complete takeover of bank accounts, UPI apps, and digital identities. Victims often lose significant savings within minutes once OTP access is compromised.",

  actions: [
    "Immediately contact your mobile network provider",
    "Request SIM block and verification of duplicate SIM issue",
    "Inform your bank and freeze transactions if possible",
    "Change passwords of email and banking apps immediately",
    "Enable SIM PIN security where available",
    "Report incident to cybercrime helpline (1930)"
  ],

  mindset: "If your mobile network suddenly disappears, treat it as a potential security attack, not a technical issue."
},

{
  id: "lottery",
  title: "Lottery Scam",
  image: "lotteryfinal.png",
  how: "In Lottery Scam, attackers send messages, emails, or WhatsApp texts claiming that you have won a large cash prize, lottery, or international reward. The victim is convinced that the money is already theirs, but before releasing it, scammers demand an upfront payment such as 'processing fee', 'tax clearance', or 'verification charge'. Once the victim pays, additional fake charges are introduced repeatedly until the victim realizes it is a scam. The promised lottery winnings never exist.",

  redFlags: [
    "You never participated in any lottery or lucky draw",
    "Request for upfront payment to claim winnings",
    "Messages creating urgency like 'claim within 24 hours'",
    "Unknown international numbers or suspicious email domains",
    "Poor grammar, fake official logos, or unrealistic prize amounts",
    "Requests to share bank details or ID documents",
    "Links asking to 'verify account' or 'activate reward'"
  ],

  impact: "Lottery scams lead to repeated financial losses through fake processing fees. Victims often lose money multiple times, believing each payment is the 'final step'. It is one of the most widespread fraud types targeting both rural and urban users due to emotional manipulation and excitement bias.",

  actions: [
    "Ignore the message completely — do not respond",
    "Never pay any fee, tax, or processing charge",
    "Do not click any links or download attachments",
    "Block the sender immediately",
    "Report the number/email to cybercrime authorities",
    "Warn family members to prevent chain victimization"
  ],

  emergency: [
    "If money is already paid, act immediately",
    "Call 1930 (Cyber Fraud Helpline India)",
    "Contact your bank to attempt transaction freeze",
    "File complaint at cybercrime.gov.in"
  ],

  mindset: "If you did not enter it, you did not win it. Free money claims are always designed to extract money from you."
},

{
  id: "deepfake",
  title: "Deepfake Scam",
   image: "deepFake.png",
  how: "In Deepfake Scam, attackers use Artificial Intelligence to generate highly realistic fake videos, voice calls, or audio messages of trusted individuals such as bosses, family members, government officials, or celebrities. These deepfakes are used to create urgency and authority, convincing victims to transfer money, share sensitive data, or approve fake requests. The victim believes they are interacting with a real person, but the entire communication is artificially generated.",

  redFlags: [
    "Urgent financial request from a known or high-authority person",
    "Pressure to act immediately without verification",
    "Refusal or avoidance of live video call verification",
    "Slight unnatural facial movements or voice mismatch",
    "Unexpected request for secrecy ('don’t tell anyone')",
    "Mismatch in communication style or behavior",
    "Calls coming from unknown or spoofed numbers even if voice seems familiar"
  ],

  impact: "Deepfake scams are rapidly increasing in India and globally, especially targeting corporate employees and individuals with financial access. They can lead to large-scale financial fraud, data breaches, and reputational damage. Since deepfakes mimic trusted identities, victims often react without questioning authenticity.",

  actions: [
    "Always verify through a separate direct call or known contact method",
    "Ask unexpected personal questions only the real person would know",
    "Do NOT transfer money or share OTPs under pressure",
    "Cross-check request through another communication channel (email/official number)",
    "Report suspicious incidents to cybercrime helpline (1930)",
    "Inform colleagues/family if impersonation is suspected"
  ],

  emergency: [
    "If money is transferred, immediately call 1930 (Cyber Fraud Helpline India)",
    "Contact your bank to freeze or trace transactions",
    "Preserve screenshots, recordings, or call logs as evidence",
    "File complaint at cybercrime.gov.in"
  ],

  mindset: "In the AI era, seeing and hearing is no longer proof. Verification is the only truth."
},
{
  id: "child-gaming-scam",
  title: "Child Gaming / App Scam",
  image: "childscam.png",
  how: "In Child Gaming Scam, attackers target children through popular online games and apps such as Free Fire, BGMI, Roblox, and similar platforms. Scammers pose as friendly players or game moderators and offer free rewards like coins, skins, diamonds, or premium items. To claim these fake rewards, children are tricked into sharing sensitive information such as OTPs, UPI details, or parents' payment credentials, or they are redirected to external malicious links. Once access is gained, attackers misuse linked bank accounts or digital wallets.",

  redFlags: [
    "Offers of free coins, skins, diamonds, or premium game items",
    "Unknown players sending reward or giveaway messages",
    "Requests for OTP, UPI PIN, or payment access",
    "External links outside official game platforms",
    "Pressure to act quickly to claim limited rewards",
    "Requests to use parents' phone or accounts secretly"
  ],

  impact: "This scam has led to thousands of cases where children unknowingly trigger financial losses from linked parental accounts. It exploits curiosity, excitement, and lack of awareness, making it one of the most dangerous digital fraud categories affecting families in India.",

  actions: [
    "Never click unknown or reward-based links inside games",
    "Do NOT share OTP, UPI PIN, or payment credentials under any condition",
    "Immediately inform parents or guardians if suspicious messages appear",
    "Parents should enable app locks and parental control settings",
    "Block and report suspicious players or accounts",
    "Keep payment methods separated from gaming devices if possible"
  ],

  emergency: [
    "If any payment is made, immediately call 1930 (Cyber Fraud Helpline India)",
    "Contact bank to block or reverse transactions if possible",
    "Check linked UPI apps and remove unauthorized access",
    "Report incident at cybercrime.gov.in"
  ],

  mindset: "In gaming, rewards feel exciting—but anything 'free' that asks for access is designed to steal, not give."
}

];


function detectFraud() {
  const input = document.getElementById("scenarioInput").value.toLowerCase();
  const resultBox = document.getElementById("resultBox");

  if (!input) {
    resultBox.innerHTML = "⚠️ Please describe your situation.";
    return;
  }

  let detected = null;

  const rules = [
    { type: "Digital Arrest Scam", keywords: ["police", "arrest", "case", "crime"] },
    { type: "UPI / QR Code Fraud", keywords: ["qr", "scan", "upi", "request money"] },
    { type: "Investment Scam", keywords: ["investment", "profit", "trading", "returns"] },
    { type: "Job Scam", keywords: ["job", "offer", "salary", "registration fee"] },
    { type: "AI Voice Scam", keywords: ["voice", "call me urgently", "friend voice"] },
    { type: "Deepfake Scam", keywords: ["video call", "looked like", "boss video"] },
    { type: "Fake E-commerce Scam", keywords: ["order", "delivery", "shopping", "discount"] },
    { type: "Bank KYC Scam", keywords: ["kyc", "otp", "account blocked"] },
    { type: "Phishing Links", keywords: ["link", "sms", "email", "click"] },
    { type: "SIM Swap Fraud", keywords: ["no signal", "sim not working"] },
    { type: "Lottery Scam", keywords: ["lottery", "won", "prize","otp"] },
    { type: "Child Gaming Scam", keywords: ["game", "free fire", "diamonds", "coins"] }
  ];

  for (let rule of rules) {
    for (let keyword of rule.keywords) {
      if (input.includes(keyword)) {
        detected = rule.type;
        break;
      }
    }
    if (detected) break;
  }

  if (detected) {
    resultBox.innerHTML = `⚠️ Possible Fraud Detected: <strong>${detected}</strong>`;
  } else {
    resultBox.innerHTML = "❓ Unable to identify clearly. Stay cautious. Verify before acting.";
  }
}


/* =========================
   HOMEPAGE CARDS
========================= */
function renderFraudCards() {
  const container = document.getElementById("fraudCards");
  if (!container) return;

  container.innerHTML = frauds.map(fraud => `
    <div class="card" onclick="openFraud('${fraud.id}')">
      <img src="${fraud.image}" class="card-img"/>
      <h3>${fraud.title}</h3>
      <p class="cta">Click to learn & protect →</p>
    </div>
  `).join("");
}

function openFraud(id) {
  window.location.href = `details.html?id=${id}`;
}

renderFraudCards();

/* =========================
   DETAILS PAGE
========================= */

if (document.getElementById("detailsContent")) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const fraud = frauds.find(f => f.id === id);

  const container = document.getElementById("detailsContent");
  
  if (fraud) {
    
    container.innerHTML = `
      <h1>${fraud.title}</h1>
      <img src="${fraud.image}" class="detail-img"/>

      <div class="section">
        <h2>How it works</h2>
        <p>${fraud.how}</p>
      </div>

      <div class="section">
        <h2>Red Flags</h2>
        <ul>${fraud.redFlags.map(f => `<li>${f}</li>`).join("")}</ul>
      </div>

      <div class="section">
        <h2>Impact</h2>
        <p>${fraud.impact}</p>
      </div>

      <div class="section">
        <h2>What to do</h2>
        <ul>${fraud.actions.map(a => `<li>${a}</li>`).join("")}</ul>
      </div>

      <div class="section">
        <h2>Mindset</h2>
        <p>${fraud.mindset}</p>
      </div>

      <div class="section">
        <h2>Real Incident</h2>
           <a href="https://youtu.be/iaDM-nM_xwE?si=cNceNWja5Sb74tiW" target="_blank" class="report-link">
    ▶ Watch Real Scam Case Video on Digital Arrest Scam
  </a><br>
            
           <a href="https://youtu.be/c3_1yCERQog?si=FpeiwAUYVYjF4x4K" target="_blank" class="report-link">
           ▶ Watch Real Scam Case Video on Gaming/App Scam </a><br>

            <a href="https://youtu.be/ahO6DfN0088?si=fBOc8YO1i5T2XkIR" target="_blank" class="report-link">
    ▶ Watch Real Scam Case Video on Job Scam
  </a><br>

   <a href="https://youtu.be/mxaPigPRlKM?si=71kyu3tdIvvwr0ob" target="_blank" class="report-link">
    ▶ Watch Real Scam Case Video on Deepfake Scam
  </a><br>

   <a href="https://youtu.be/l0jnRFKaLy0?si=JzJwcZoEU4bFhLOT" target="_blank" class="report-link">
    ▶ Watch Real Scam Case Video on Investment Scam
  </a><br>
</div>

      <div class="emergency">
        🚨 Don't panic. Stay calm.  
        📞 Call: 1930  
        🌐 Report:<a href="https://cybercrime.gov.in" target="_blank" class="report-link">
        cybercrime.gov.in
      </a>
      

      </div>
    `;
  }
}

let currentLang = "en";

const bannerText = {
  en: "Stay Alert. Think Before You Act.",
  te: "జాగ్రత్తగా ఉండండి. ఆలోచించి ముందుకు వెళ్లండి."
};

function changeLanguage() {
  currentLang = document.getElementById("languageSelect").value;

  document.getElementById("bannerTitle").innerText =
    bannerText[currentLang];

  updateFraudCards();
}

function updateFraudCards() {
  const container = document.getElementById("fraudCards");

  container.innerHTML = frauds.map(fraud => `
    <div class="card">
      <h3>${fraud.title}</h3>
      <p>${fraud.how}</p>
    </div>
  `).join("");
}
function changeLanguage() {
  currentLang = document.getElementById("languageSelect").value;

  document.getElementById("bannerTitle").innerText =
    bannerText[currentLang];

  renderFraudCards();
}

function loadRealIncidentVideos(scamData) {
  const container = document.getElementById("videoSection");

  if (!container || !scamData.realIncidents) return;

  let html = "<h3>📹 Real Incident Examples</h3>";

  scamData.realIncidents.forEach(video => {
    html += `
      <div class="video-item">
        <a href="${video.url}" target="_blank">
          ▶ ${video.title}
        </a>
      </div>
    `;
  });

  container.innerHTML = html;
}
loadRealIncidentVideos(digitalArrest);
