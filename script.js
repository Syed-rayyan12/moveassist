
const NAV = [
  ["Home","index.html"],["Business","business.html"],["Event Logistics","event-logistics.html"],
  ["Inventory","inventory-management.html"],["StoreAssist","storeassist.html"],["Community","community.html"],
  ["Students","students.html"],["Small Moves","small-moves.html"],["Blog","blog.html"],["About","about.html"],["Contact","contact.html"]
];
const SERVICES = [
  ["MoveAssist for Businesses","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","business.html","s1"],
  ["Event Logistics","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","event-logistics.html","s2"],
  ["Inventory Management","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","inventory-management.html","s3"],
  ["StoreAssist","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","storeassist.html","s4"],
  ["Community Shared Collection & Delivery","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","community.html","s5"],
  ["Students","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","students.html","s6"],
  ["Small Moves & Local Deliveries","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","small-moves.html","s7"],
  ["Regular Routes to & from London","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","contact.html","s8"]
];

function header(active="Home"){
  return `<header class="header"><div class="container nav">
    <a class="logo" href="index.html">Move<span>Assist</span>›<small>Practical. Flexible. Always There.</small></a>
    <nav class="mainNav">${NAV.map(([n,u])=>`<a class="${n===active?'active':''}" href="${u}">${n}</a>`).join("")}</nav>
    <div class="navRight"><a class="navPhone" href="tel:07891341414">☎ 00000 000000<span>Mon – Sat | 8am – 6pm</span></a><a class="quoteBtn" href="request-a-quote.html">REQUEST A QUOTE →</a></div>
    <button class="menuBtn" aria-label="Open menu">☰</button>
  </div><div class="mobileMenu">${NAV.map(([n,u])=>`<a href="${u}">${n}</a>`).join("")}<a class="quoteBtn" href="request-a-quote.html">REQUEST A QUOTE →</a></div></header>`;
}
function footer(){
 return `<footer class="footer"><div class="container footerGrid">
  <div><div class="logo">Move<span>Assist</span>›<small>Practical. Flexible. Always There.</small></div><p>Practical, flexible logistics solutions for businesses, events, communities, students and private customers.</p><p>●　◎　in　♪</p></div>
  <div><h4>SERVICES</h4>${SERVICES.slice(0,7).map(s=>`<a href="${s[2]}">${s[0]}</a>`).join("")}</div>
  <div><h4>COMPANY</h4><a href="about.html">About Us</a><a href="how-it-works.html">How It Works</a><a href="blog.html">Blog</a><a href="faqs.html">FAQs</a><a href="testimonials.html">Testimonials</a><a href="careers.html">Careers</a></div>
  <div><h4>HELP</h4><a href="contact.html">Contact Us</a><a href="request-a-quote.html">Get a Quote</a><a href="terms.html">Terms & Conditions</a><a href="privacy.html">Privacy Policy</a><a href="cookies.html">Cookie Policy</a></div>
  <div><h4>GET A QUOTE</h4><p>Fill out the form and we’ll get back to you as soon as possible.</p><form class="miniForm"><input required placeholder="Name"><input required type="email" placeholder="Email"><input placeholder="Phone"><textarea placeholder="Tell us about your job..."></textarea><button class="btn" type="submit">SEND REQUEST →</button><div class="formMessage">Thanks — your request has been prepared. Connect this form to your email endpoint.</div></form></div>
 </div><div class="container copyright">© 2026 MoveAssist. All rights reserved.　|　00000 000000　|　info@moveassist.co.uk</div></footer>`;
}
function pageShell(title, active, body, subText=""){
 document.title = `${title} | MoveAssist`;
 return header(active)+body+footer();
}
function subHero(title, text){
 return `<section class="subHero"><div class="container"><div class="crumb"><a href="index.html">Home</a>　/　${title}</div><h1>${title}</h1><p>${text}</p></div></section>`;
}
function cta(){
 return `<section class="cta"><div class="container ctaInner"><div><p class="eyebrow green">READY TO GET STARTED?</p><h2>Request a quote or discuss your job today.</h2><div class="actions"><a class="btn" href="request-a-quote.html">REQUEST A QUOTE →</a><a class="btn outline" href="contact.html">DISCUSS YOUR JOB</a></div></div><div class="ctaContact"><strong>00000 000000</strong><span>Mon – Sat | 8am – 6pm</span></div></div></section>`;
}
function cards(filter){
 return `<div class="serviceGrid">${SERVICES.filter(filter||(()=>true)).map((s,i)=>`<article class="card reveal"><div class="serviceImage ${s[3]}"><span class="serviceIcon">＋</span></div><div class="cardBody"><h3>${s[0]}</h3><p>${s[1]}</p><a class="learn" href="${s[2]}">LEARN MORE →</a></div></article>`).join("")}</div>`;
}
function form(){
 return `<form class="quoteBox quoteForm"><div class="formGrid">
 <div class="field"><label>Name *</label><input required name="name"></div><div class="field"><label>Email *</label><input required type="email" name="email"></div>
 <div class="field"><label>Phone *</label><input required name="phone"></div><div class="field"><label>Customer Type *</label><select required><option value="">Select</option><option>Business</option><option>Event</option><option>Community</option><option>Student</option><option>Private Customer</option><option>Storage</option></select></div>
 <div class="field"><label>Collection Address</label><input></div><div class="field"><label>Delivery Address</label><input></div>
 <div class="field"><label>Preferred Date</label><input type="date"></div><div class="field"><label>Preferred Time</label><input type="time"></div>
 <div class="field"><label>Job Type *</label><select required><option value="">Select</option><option>Collection</option><option>Delivery</option><option>Storage</option><option>Moving</option><option>Event Logistics</option><option>Inventory</option><option>Other</option></select></div>
 <div class="field"><label>Upload Images</label><input type="file" multiple accept="image/*"></div>
 <div class="field full"><label>Items / Requirements</label><textarea></textarea></div><div class="field full"><label>Additional Information</label><textarea></textarea></div>
 </div><div class="formActions"><button class="btn" type="submit">REQUEST A QUOTE →</button><div class="formMessage">Thank you. Your enquiry has been captured in the frontend demo. Connect the form endpoint/email service for live submissions.</div></div></form>`;
}

const path = location.pathname.split("/").pop() || "index.html";
let active = NAV.find(x=>x[1]===path)?.[0] || "";
let body = "";

if(path==="index.html"){
 body = `<section class="hero"><div class="container"><p class="eyebrow">MOVEASSIST</p><h1>Flexible logistics.<br>Smarter solutions.<br><span>Real support.</span></h1><p>Collection, delivery, moving, storage and logistics support for businesses, events, communities and students.</p><div class="actions"><a class="btn" href="request-a-quote.html">REQUEST A QUOTE →</a><a class="btn outline" href="contact.html">DISCUSS YOUR JOB</a></div><div class="heroMeta"><strong>00000 000000</strong><span>Mon – Sat | 8am – 6pm</span></div></div></section>
 <div class="benefits"><div class="container benefitGrid">${["Professional & Reliable","Fully Insured","On-Time, Every Time","Local Experts","Competitive Pricing"].map(x=>`<div>◉　${x}</div>`).join("")}</div></div>
 <section class="section"><div class="container"><div class="sectionHead"><p class="eyebrow green">OUR SERVICES</p><h2>One partner. Every solution.</h2><p>MoveAssist brings all your collection, delivery, storage and logistics needs under one roof so you can save time, reduce cost and stay focused on what matters.</p></div>${cards()}</div></section>
 <section class="splitDark"><div class="container splitInner"><div><p class="eyebrow green">STOREASSIST</p><h2>Smarter storage.<br>Lower cost.</h2><p>StoreAssist looks beyond the advertised unit price to find the storage solution that makes financial and practical sense.</p><ul class="checkList">${["Assess & reorganise existing storage","Find the most cost-effective storage solution","Collection & transfer between facilities","Short & long-term storage","Redelivery when you need it"].map(x=>`<li>${x}</li>`).join("")}</ul><a class="btn" href="storeassist.html">LEARN MORE ABOUT STOREASSIST →</a></div><div class="storageVisual"><div class="badge">PAY FOR<br>WHAT YOU NEED.<br>NOT MORE<br>SPACE.</div></div></div></section>
 <section class="section"><div class="container"><div class="process"><div><p class="eyebrow green">HOW IT WORKS</p><h2>Simple, transparent and hassle-free.</h2></div>${["Lorem Ipsum Dolor","Lorem Ipsum Sit","Lorem Ipsum Amet","Lorem Ipsum Elit"].map((x,i)=>`<div class="step"><b>0${i+1}</b><h3>${x}</h3><p>${["Share your collection, delivery or storage needs.","We confirm the best solution, timing and cost.","Our team collects, delivers, moves or stores with care.","Reliable support, clear communication and no unnecessary hassle."][i]}</p></div>`).join("")}</div></div></section>
 ${cta()}
 <section class="trustSection reveal"><div class="container">
 <div class="sectionHead"><p class="eyebrow green">TRUSTED BY BUSINESSES, ORGANISATIONS AND COMMUNITIES</p><h2>Practical support you can rely on.</h2></div>
 <div class="trustTrackWrap"><div class="trustTrack">
  ${["Storage King","BNI","Business West","FSB","Trustpilot","Storage King","BNI","Business West","FSB","Trustpilot"].map((x,i)=>`<div class="trustItem">${x}<span>Trusted partner</span></div>`).join("")}
 </div></div>
 </div></section>

 <section class="homeFeatureBand lightBand reveal"><div class="bandInner instagramShowcase">
  <div class="instagramCopy"><p class="eyebrow green">LOREM IPSUM</p><h2 class="bandTitle">MoveAssist in motion.</h2><p class="bandIntro">Follow <strong>@lorem_ipsum</strong> for logistics work, storage projects, business deliveries, London routes and day-to-day operations.</p><a class="btn dark" href="#">VIEW MORE ON INSTAGRAM →</a></div>
  <div class="instagramGallery">${[1,2,3,4,5,6].map(i=>`<div class="photo"></div>`).join("")}</div>
 </div></section>

 <section class="homeFeatureBand darkBand reveal"><div class="bandInner">
  <div class="blogShowcase">
   <div class="blogFeature"><p class="eyebrow green">LOREM IPSUM</p><h3>Practical ideas for smarter storage and logistics.</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p><a class="btn" href="blog.html">VIEW ALL BLOGS →</a></div>
   <div class="blogList">${["Lorem Ipsum Dolor Sit Amet","Lorem Ipsum Consectetur Elit","Lorem Ipsum Sed Tempor"].map((x,i)=>`<a class="blogListItem" href="blog-post-${i+1}.html"><div class="blogThumb"></div><div><h4>${x}</h4><p>Read the latest MoveAssist guidance →</p></div></a>`).join("")}</div>
  </div>
 </div></section>

 <section class="homeFeatureBand lightBand reveal"><div class="bandInner faqShowcase">
  <div class="faqLead"><p class="eyebrow green">FREQUENTLY ASKED QUESTIONS</p><h2>Questions?<br>We've got answers.</h2><p>Find quick answers about areas, bookings, shared routes, storage, business support and collections.</p><a class="btn dark" href="faqs.html">VIEW ALL FAQS →</a></div>
  <div class="faqCards">${["Lorem ipsum dolor sit amet?","Lorem ipsum consectetur elit?","Lorem ipsum tempor incididunt?","Lorem ipsum dolor magna?","Lorem ipsum adipiscing elit?"].map(x=>`<details><summary>${x}</summary><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></details>`).join("")}</div>
 </div></section>`;
}else if(["business.html","event-logistics.html","inventory-management.html","storeassist.html","community.html","students.html","small-moves.html"].includes(path)){
 const data={
 "business.html":["Business logistics without the overhead.","Flexible outsourced collection, delivery and logistics support for businesses.","MoveAssist can become a dependable logistics resource without the overhead of an additional vehicle or permanent driver.","Regular & Ad-Hoc Deliveries","Multi-Drop Routes","Supplier Collections","Customer Deliveries","Stock & Equipment Movement","Office & Retail Equipment","Storage Collection & Redelivery","Inventory Support","Relocation Support","Busy Period Support"],
 "event-logistics.html":["Event logistics that keep everything moving.","Support before, during and after your event.","From supplier collections and venue positioning to post-event returns, MoveAssist keeps event logistics organised.","Before the Event","During the Event","After the Event","Supplier Collections","Equipment Transport","Venue Delivery","Positioning","Stock Management","Temporary Storage","Post-Event Collection","Returns"],
 "inventory-management.html":["Practical inventory management.","Record, organise, store and retrieve your operational stock and equipment.","Create clear inventory records and keep items moving to the right place at the right time.","Inventory Recording","Labelling","Photographic Records","Stock Location Management","Storage","Scheduled Retrieval","Delivery","Collection"],
 "storeassist.html":["Stop paying for space you don't need.","Storage optimisation that looks beyond the advertised unit price.","StoreAssist helps you assess your current storage, reduce wasted space and find a solution that makes financial and practical sense.","Assess Your Current Storage","Reorganise Your Unit","Reduce Wasted Space","Compare Storage Options","Transfer Between Facilities","Short & Long-Term Storage","Retrieval & Redelivery"],
 "community.html":["Shared routes. Smarter costs.","Scheduled shared-user transport for non-urgent community collections and deliveries.","Compatible collections can be combined into planned local routes when customers can accept flexible collection and delivery windows.","Who It's For","How Shared Routes Work","Suitable Items","Flexible Delivery Windows","Charities & Community Organisations","Mobility Equipment"],
 "students.html":["Student storage without the stress.","Collection, storage and redelivery built around student moves and term dates.","From halls and private housing to summer storage and redelivery, MoveAssist makes student logistics simpler.","Move Out","Collection","Storage","Summer","Redelivery","Move In"],
 "small-moves.html":["Small move? Big job? We've got it covered.","Practical local moving and delivery support.","Room moves, student moves, furniture movement, packing support, collection, delivery and handling.","Room Moves","Student Moves","Local Relocations","Furniture Movement","Packing Support","Collection","Delivery","Handling"]
 }[path];
 body = subHero(data[0],data[1])+`<section class="section"><div class="container feature"><div><p class="eyebrow green">${data[0].split(" ")[0]}</p><h2>${data[2]}</h2><p>${data[1]} MoveAssist provides practical, flexible support tailored around your requirements.</p><ul>${data.slice(3).map(x=>`<li>${x}</li>`).join("")}</ul><a class="btn dark" href="request-a-quote.html">REQUEST A QUOTE →</a></div><div class="featureImage ${path==="storeassist.html"?"":"van"}"></div></div></section>
 <section class="section alt"><div class="container"><div class="sectionHead"><p class="eyebrow green">WHY MOVEASSIST</p><h2>Flexible support, without unnecessary overhead.</h2><p>Clear communication, practical planning and dependable logistics support designed around the job rather than a one-size-fits-all package.</p></div>${cards()}</div></section>${cta()}`;
}else if(path==="how-it-works.html"){
 body=subHero("How It Works","A simple, transparent process from first enquiry through collection, delivery, moving or storage.")+`<section class="section"><div class="container"><div class="process">${["Tell Us What You Need","We Review Your Requirements","We Plan the Best Solution","We Confirm Timing & Cost","We Collect / Deliver / Move / Store","Lorem Ipsum Elit"].map((x,i)=>`<div class="step"><b>0${i+1}</b><h3>${x}</h3><p>We keep the process clear and practical, with communication at each important stage.</p></div>`).join("")}</div></div></section>${cta()}`;
}else if(path==="about.html"){
 body=subHero("About MoveAssist","A flexible logistics partner for businesses, events, communities, students and private customers.")+`<section class="section"><div class="container feature"><div class="featureImage van"></div><div><p class="eyebrow green">ABOUT MOVEASSIST</p><h2>More than a vehicle and driver.</h2><p>MoveAssist provides practical logistics support across collection, delivery, moving, storage, inventory and local transport. The focus is on flexibility, dependable communication and finding the right solution for each job.</p><p>Where company history, team details, certifications or specific claims need to be supplied by the business owner, those details remain editable rather than being invented.</p><a class="btn dark" href="contact.html">DISCUSS YOUR JOB →</a></div></div></section>${cta()}`;
}else if(path==="contact.html"||path==="request-a-quote.html"){
 const title=path==="contact.html"?"Contact MoveAssist":"Request a Quote"; const text=path==="contact.html"?"Tell us what you need and we’ll help plan the most practical solution.":"Give us the details of your job and we’ll review the best way to help.";
 body=subHero(title,text)+`<section class="section alt"><div class="container">${form()}</div></section>`;
}else if(path==="blog.html"){
 const posts=[["How StoreAssist Can Save You Money on Storage","Storage Tips"],["Why Businesses Are Outsourcing Logistics in 2026","Business"],["Student Storage: The Ultimate Summer Guide","Students"]];
 body=subHero("Latest from our blog","Practical advice and useful insights around logistics, storage, moving and delivery.")+`<section class="section"><div class="container"><div class="blogGrid">${posts.map((p,i)=>`<article class="blogCard"><div class="blogImg"></div><div class="blogBody"><small>${p[1]}</small><h3>${p[0]}</h3><p>Helpful guidance from MoveAssist on planning practical logistics and making better use of your time and space.</p><a class="learn" href="blog-post-${i+1}.html">READ MORE →</a></div></article>`).join("")}</div></div></section>`;
}else if(path.startsWith("blog-post-")){
 const titles=["Lorem Ipsum Dolor Sit Amet","Lorem Ipsum Consectetur Elit","Lorem Ipsum Sed Tempor"];
 const idx=Math.max(0,parseInt(path.match(/(\d+)/)?.[1]||"1")-1);
 body=subHero(titles[idx],"Practical guidance from MoveAssist.")+`<section class="section"><div class="container contentGrid"><article class="prose"><p class="eyebrow green">MOVEASSIST BLOG</p><h2>${titles[idx]}</h2><p>Good logistics planning is often about more than the obvious headline price or the first available transport option. The right approach considers timing, access, handling, storage, collection and redelivery together.</p><h3>Plan the complete requirement</h3><p>Start by understanding what needs to move, where it needs to go, when it needs to arrive and whether anything needs to be stored between stages. A clear overview helps reduce unnecessary trips and avoid avoidable costs.</p><h3>Keep flexibility where it matters</h3><p>Flexible collection and delivery windows can create more practical options, especially for shared routes, student storage and business logistics.</p><h3>Talk through the job</h3><p>Every job is different. Discussing the requirement early allows MoveAssist to suggest a practical approach rather than forcing the job into a fixed package.</p></article><aside class="sideCard"><h3>Need logistics support?</h3><a href="request-a-quote.html">Request a Quote →</a><a href="contact.html">Discuss Your Job →</a><a href="storeassist.html">Explore StoreAssist →</a></aside></div></section>${cta()}`;
}else if(path==="faqs.html"){
 const qs=["What areas do you cover?","How does the shared delivery service work?","Do you provide packing materials?","Is my goods insured?","How far in advance should I book?","Can businesses use MoveAssist regularly?","Do you provide storage?","Can you move items between storage facilities?","Do you provide student summer storage?","Can you collect from suppliers?"];
 body=subHero("Frequently Asked Questions","Answers to common questions about MoveAssist services. Specific job requirements can be discussed directly.") + `<section class="section"><div class="container faqList">${qs.map(q=>`<details><summary>${q}</summary><p>Availability, timing and suitability depend on the individual requirement. Contact MoveAssist with your details and we’ll confirm the practical options for your job.</p></details>`).join("")}</div></section>`;
}else if(["terms.html","privacy.html","cookies.html"].includes(path)){
 const titles={"terms.html":"Terms & Conditions","privacy.html":"Privacy Policy","cookies.html":"Cookie Policy"}; const title=titles[path];
 body=subHero(title,"Editable legal content placeholder — final wording should be supplied and approved by the business owner or legal adviser.") + `<section class="section"><div class="container contentGrid"><article class="prose"><h2>${title}</h2><p>This page is intentionally structured as editable placeholder content. Replace this wording with the final legal policy supplied by the business owner or legal adviser before launch.</p><h3>1. Introduction</h3><p>MoveAssist aims to provide clear information about its services and how customers interact with the website.</p><h3>2. Website Information</h3><p>Information on this website should be reviewed and updated whenever business services, contact details or operational policies change.</p><h3>3. Contact</h3><p>For questions about this policy, contact info@moveassist.co.uk or call 00000 000000.</p></article><aside class="sideCard"><h3>Legal pages</h3><a href="terms.html">Terms & Conditions</a><a href="privacy.html">Privacy Policy</a><a href="cookies.html">Cookie Policy</a></aside></div></section>`;
}else if(path==="testimonials.html"){
 body=subHero("Testimonials","Customer feedback should be added here from verified real reviews only.")+`<section class="section alt"><div class="container"><div class="sectionHead"><p class="eyebrow green">CUSTOMER FEEDBACK</p><h2>What customers say.</h2><p>Real reviews and verified feedback can be added to this section through the content management layer.</p></div><div class="serviceGrid"><div class="card"><div class="cardBody"><h3>Review Placeholder</h3><p>Add a verified customer review here. Do not publish invented testimonials.</p></div></div><div class="card"><div class="cardBody"><h3>Review Placeholder</h3><p>Add a verified customer review here. Do not publish invented testimonials.</p></div></div></div></div></section>`;
}else if(path==="careers.html"){
 body=subHero("Careers","Join a practical, flexible logistics operation.")+`<section class="section"><div class="container feature"><div><p class="eyebrow green">WORK WITH US</p><h2>Opportunities will be listed here.</h2><p>Use this page for current vacancies, role information and application instructions when genuine positions are available.</p><a class="btn dark" href="contact.html">CONTACT MOVEASSIST →</a></div><div class="featureImage city"></div></div></section>`;
}else{
 body=subHero("Page Not Found","Looks like we’ve taken a wrong turn.")+`<section class="section"><div class="container" style="text-align:center"><h2>404</h2><p>That page could not be found.</p><div class="actions" style="justify-content:center"><a class="btn dark" href="index.html">BACK TO HOME</a><a class="btn" href="request-a-quote.html">REQUEST A QUOTE</a></div></div></section>`;
}
document.getElementById("app").innerHTML =
 `<div class="preloader"><div class="preloader-inner"><div class="loader-logo">Move<span>Assist</span>›</div><div class="loader-tag">Practical. Flexible. Always There.</div><div class="loader-line"><i></i></div></div></div>` +
 pageShell(document.title,active,body);


document.querySelector(".menuBtn")?.addEventListener("click",()=>{
 document.querySelector(".mobileMenu").classList.toggle("open"); document.body.classList.toggle("menu-open");
});
document.querySelectorAll(".quoteForm,.miniForm").forEach(form=>{
 form.addEventListener("submit",e=>{e.preventDefault();const msg=form.querySelector(".formMessage");if(msg)msg.classList.add("show");});
});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.08});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

/* Premium cursor glow / mouse interaction */
const glow=document.createElement("div");
glow.className="floatGlow";
document.body.appendChild(glow);
let mouseTimer;
document.addEventListener("mousemove",(e)=>{
  document.body.classList.add("mouse-active");
  glow.style.left=e.clientX+"px"; glow.style.top=e.clientY+"px";
  clearTimeout(mouseTimer);
  mouseTimer=setTimeout(()=>document.body.classList.remove("mouse-active"),1200);
});

/* Card tilt effect on desktop */
if(window.matchMedia("(min-width: 900px)").matches){
 document.querySelectorAll(".card").forEach(card=>{
  card.addEventListener("mousemove",e=>{
   const r=card.getBoundingClientRect();
   const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
   card.style.transform=`perspective(900px) rotateX(${(-y*3).toFixed(2)}deg) rotateY(${(x*3).toFixed(2)}deg) translateY(-4px)`;
  });
  card.addEventListener("mouseleave",()=>card.style.transform="");
 });
}

/* Preloader */
window.addEventListener("load",()=>{
 setTimeout(()=>{
  document.querySelector(".preloader")?.classList.add("hide");
 },650);
});
