const panels={hr:{title:'Human Resources & HRMS · Days 01–21',intro:'Built foundational HR operations skills using spreadsheet-based exercises and software workflows. Days 19–20 focused on Zoho People rather than Excel, so the daily reports serve as the evidence for those activities.',items:[['Employee data & records','Employee master, data organization and record maintenance'],['Recruitment support','Resume screening, candidate tracking and interview evaluation'],['Payroll & reporting','Salary structure, PF exercises, HR dashboards and KPI summaries'],['HRMS practice','Zoho People employee profiles, attendance and onboarding (Days 19–20)'],['Recruitment tracker','Vacancy and recruitment tracking exercises (Day 21)']]},sales:{title:'Sales Executive & CRM · Days 22–27',intro:'Practiced sales tracking and customer workflow concepts. Days 26–27 involved Zoho CRM software practice rather than Excel workbook tasks; the daily reports document this work.',items:[['Sales tracking','Sales data and performance tracking exercises'],['Customer workflow','Lead and customer record handling concepts'],['Deal management','Deal pipeline and follow-up workflow practice'],['Inventory & documents','Inventory and sales document workflows'],['Zoho CRM','Software-based CRM practice documented in Days 26–27 reports']]},gst:{title:'GST & Reconciliation · Days 28–29',intro:'Worked through training examples covering GST calculations, invoice totals and purchase input tax credit reconciliation. Figures are practice data, not filed returns.',items:[['GST calculation','Taxable value and CGST, SGST and IGST exercises'],['Invoice totals','Combining taxable value and GST to calculate invoice totals'],['ITC matching','Comparing purchase ITC with matched and missing entries'],['Reconciliation','Documenting differences for follow-up']]},tds:{title:'TDS Fundamentals · Day 30',intro:'Completed an introductory TDS learning exercise using a workbook with section references and calculation practice. Actual tax applicability and rates must always be checked against current official rules.',items:[['TDS concepts','Introductory understanding of tax deduction at source'],['Section reference','Practice using a section reference sheet'],['Calculation practice','Worked through a TDS calculation worksheet'],['Review','Identified the importance of current-rule verification']]}};

// REPORTS and WORKBOOKS are already declared in index.html.
// Do not declare them again here: that causes "Identifier has already been declared".
REPORTS.forEach(file => {
  file.url = 'reports/' + encodeURIComponent(file.name);
});
WORKBOOKS.forEach(file => {
  file.url = encodeURIComponent(file.name);
});

function renderPanel(k){
  const p=panels[k];
  document.getElementById('workContent').innerHTML=`<h3>${p.title}</h3><p>${p.intro}</p><div class="activity-list">${p.items.map(x=>`<div class="activity"><b>${x[0]}</b>${x[1]}</div>`).join('')}</div><a class="btn secondary" href="#evidence" onclick="setEvidence('reports')">View supporting reports →</a>`;
  document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active',b.dataset.tab===k));
}
document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>renderPanel(b.dataset.tab)));
document.querySelectorAll('[data-filter]').forEach(a=>a.addEventListener('click',()=>renderPanel(a.dataset.filter)));
renderPanel('hr');

let currentEvidence='reports';
function setEvidence(type){
  currentEvidence=type;
  document.querySelectorAll('.e-tab').forEach(b=>b.classList.toggle('active',b.dataset.evidence===type));
  renderFiles();
}
window.setEvidence=setEvidence;
document.querySelectorAll('.e-tab').forEach(b=>b.addEventListener('click',()=>setEvidence(b.dataset.evidence)));

function renderFiles(){
  const q=document.getElementById('searchFiles').value.toLowerCase().trim();
  let list=[];
  if(currentEvidence==='reports') list=REPORTS.map(x=>({...x,type:'PDF',kind:'reports'}));
  else if(currentEvidence==='workbooks') list=WORKBOOKS.map(x=>({...x,type:'XLSX',kind:'workbooks'}));
  else list=[{day:0,name:'Offer latter.docx',url:encodeURI('Offer latter.docx'),type:'DOCX',kind:'documents'}];

  list=list.filter(x=>(x.name+' day '+x.day).toLowerCase().includes(q));
  document.getElementById('fileGrid').innerHTML=list.map(x=>`<article class="file-card"><span class="file-icon ${x.type==='XLSX'?'xlsx':''}">${x.type}</span><div class="file-info"><b>${x.day?'Day '+String(x.day).padStart(2,'0')+' · ':''}${x.name}</b><small>${x.kind==='reports'?'Daily report':x.kind==='workbooks'?'Practical workbook':'Training document'}</small></div><a href="${x.url}" target="_blank" rel="noopener">Open ↗</a></article>`).join('')||'<p>No matching files found.</p>';

  document.getElementById('fileNote').textContent=currentEvidence==='reports'
    ?`${list.length} of ${REPORTS.length} daily PDF reports shown.`
    :currentEvidence==='workbooks'
      ?`${list.length} available Excel workbooks shown. No workbook was created for Days 19, 20, 26 and 27 because those activities were performed in Zoho People / Zoho CRM.`
      :'Offer Letter document included in the supplied training files.';
}
document.getElementById('searchFiles').addEventListener('input',renderFiles);
renderFiles();
