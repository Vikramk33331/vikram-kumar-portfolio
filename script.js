const panels={hr:{title:'Human Resources & HRMS · Days 01–21',intro:'Built foundational HR operations skills using spreadsheet-based exercises and software workflows. Days 19–20 focused on Zoho People rather than Excel, so the daily reports serve as the evidence for those activities.',items:[['Employee data & records','Employee master, data organization and record maintenance'],['Recruitment support','Resume screening, candidate tracking and interview evaluation'],['Payroll & reporting','Salary structure, PF exercises, HR dashboards and KPI summaries'],['HRMS practice','Zoho People employee profiles, attendance and onboarding (Days 19–20)'],['Recruitment tracker','Vacancy and recruitment tracking exercises (Day 21)']]},sales:{title:'Sales Executive & CRM · Days 22–27',intro:'Practiced sales tracking and customer workflow concepts. Days 26–27 involved Zoho CRM software practice rather than Excel workbook tasks; the daily reports document this work.',items:[['Sales tracking','Sales data and performance tracking exercises'],['Customer workflow','Lead and customer record handling concepts'],['Deal management','Deal pipeline and follow-up workflow practice'],['Inventory & documents','Inventory and sales document workflows'],['Zoho CRM','Software-based CRM practice documented in Days 26–27 reports']]},gst:{title:'GST & Reconciliation · Days 28–29',intro:'Worked through training examples covering GST calculations, invoice totals and purchase input tax credit reconciliation. Figures are practice data, not filed returns.',items:[['GST calculation','Taxable value and CGST, SGST and IGST exercises'],['Invoice totals','Combining taxable value and GST to calculate invoice totals'],['ITC matching','Comparing purchase ITC with matched and missing entries'],['Reconciliation','Documenting differences for follow-up']]},tds:{title:'TDS Fundamentals · Day 30',intro:'Completed an introductory TDS learning exercise using a workbook with section references and calculation practice. Actual tax applicability and rates must always be checked against current official rules.',items:[['TDS concepts','Introductory understanding of tax deduction at source'],['Section reference','Practice using a section reference sheet'],['Calculation practice','Worked through a TDS calculation worksheet'],['Review','Identified the importance of current-rule verification']]}};
const REPORTS = [
  {day:1, name:"HR_Training_Day_01_Final_Report-1.pdf", url:'reports/'+encodeURIComponent("HR_Training_Day_01_Final_Report-1.pdf")},
  {day:2, name:"HR_Training_Day_02_Final_Report.pdf", url:'reports/'+encodeURIComponent("HR_Training_Day_02_Final_Report.pdf")},
  {day:3, name:"HR_Training_Day_03_Final_Report.pdf", url:'reports/'+encodeURIComponent("HR_Training_Day_03_Final_Report.pdf")},
  {day:4, name:"HR_Training_Day_04_Final_Report.pdf", url:'reports/'+encodeURIComponent("HR_Training_Day_04_Final_Report.pdf")},
  {day:5, name:"HR_Training_Day_05_Final_Report.pdf", url:'reports/'+encodeURIComponent("HR_Training_Day_05_Final_Report.pdf")},
  {day:6, name:"HR_Training_Day_06_Final_Report.pdf", url:'reports/'+encodeURIComponent("HR_Training_Day_06_Final_Report.pdf")},
  {day:7, name:"HR_Training_Day_07_Final_Report.pdf", url:'reports/'+encodeURIComponent("HR_Training_Day_07_Final_Report.pdf")},
  {day:8, name:"HR_Training_Day_08_Final_Report.pdf", url:'reports/'+encodeURIComponent("HR_Training_Day_08_Final_Report.pdf")},
  {day:9, name:"HR_Training_Day_09_Final_Report.pdf", url:'reports/'+encodeURIComponent("HR_Training_Day_09_Final_Report.pdf")},
  {day:10, name:"HR_Training_Day_10_Final_Report.pdf", url:'reports/'+encodeURIComponent("HR_Training_Day_10_Final_Report.pdf")},
  {day:11, name:"HR_Training_Day_11_Final_Report.pdf", url:'reports/'+encodeURIComponent("HR_Training_Day_11_Final_Report.pdf")},
  {day:12, name:"HR_Training_Day_12_Final_Report.pdf", url:'reports/'+encodeURIComponent("HR_Training_Day_12_Final_Report.pdf")},
  {day:13, name:"HR_Training_Day_13_Final_Report.pdf", url:'reports/'+encodeURIComponent("HR_Training_Day_13_Final_Report.pdf")},
  {day:14, name:"HR_Training_Day_14_Final_Report.pdf", url:'reports/'+encodeURIComponent("HR_Training_Day_14_Final_Report.pdf")},
  {day:15, name:"HR_Training_Day_15_Final_Report.pdf", url:'reports/'+encodeURIComponent("HR_Training_Day_15_Final_Report.pdf")},
  {day:16, name:"HR_Training_Day_16_Final_Report.pdf", url:'reports/'+encodeURIComponent("HR_Training_Day_16_Final_Report.pdf")},
  {day:17, name:"HR_Training_Day_17_Final_Report.pdf", url:'reports/'+encodeURIComponent("HR_Training_Day_17_Final_Report.pdf")},
  {day:18, name:"HR_Training_Day_18_Final_Report.pdf", url:'reports/'+encodeURIComponent("HR_Training_Day_18_Final_Report.pdf")},
  {day:19, name:"HR_Training_Day_19_Report.pdf", url:'reports/'+encodeURIComponent("HR_Training_Day_19_Report.pdf")},
  {day:20, name:"HR_Training_Day_20_Report.pdf", url:'reports/'+encodeURIComponent("HR_Training_Day_20_Report.pdf")},
  {day:21, name:"HR_Training_Day_21_Report.pdf", url:'reports/'+encodeURIComponent("HR_Training_Day_21_Report.pdf")},
  {day:22, name:"Sales_Executive_Training_Day_22_Report.pdf", url:'reports/'+encodeURIComponent("Sales_Executive_Training_Day_22_Report.pdf")},
  {day:23, name:"Sales_Executive_Training_Day_23_Report.pdf", url:'reports/'+encodeURIComponent("Sales_Executive_Training_Day_23_Report.pdf")},
  {day:24, name:"Sales_Executive_Training_Day_24_Report.pdf", url:'reports/'+encodeURIComponent("Sales_Executive_Training_Day_24_Report.pdf")},
  {day:25, name:"Sales_Executive_Training_Day_25_Report.pdf", url:'reports/'+encodeURIComponent("Sales_Executive_Training_Day_25_Report.pdf")},
  {day:26, name:"Sales_Executive_Training_Day_26_Report.pdf", url:'reports/'+encodeURIComponent("Sales_Executive_Training_Day_26_Report.pdf")},
  {day:27, name:"Sales_Executive_Training_Day_27_Report.pdf", url:'reports/'+encodeURIComponent("Sales_Executive_Training_Day_27_Report.pdf")},
  {day:28, name:"Day_28_GST_Training_Report.pdf", url:'reports/'+encodeURIComponent("Day_28_GST_Training_Report.pdf")},
  {day:29, name:"Day_29_GST_Reconciliation_Report.pdf", url:'reports/'+encodeURIComponent("Day_29_GST_Reconciliation_Report.pdf")},
  {day:30, name:"Day_30_Complete_TDS_Training_Report.pdf", url:'reports/'+encodeURIComponent("Day_30_Complete_TDS_Training_Report.pdf")}
];

const WORKBOOKS = [
  {day:1, name:"HR Training Day 01.xlsx", url:encodeURIComponent("HR Training Day 01.xlsx")},
  {day:2, name:"HR Training Day 02.xlsx", url:encodeURIComponent("HR Training Day 02.xlsx")},
  {day:3, name:"HR Training Day 03.xlsx", url:encodeURIComponent("HR Training Day 03.xlsx")},
  {day:4, name:"HR Training Day 04.xlsx", url:encodeURIComponent("HR Training Day 04.xlsx")},
  {day:5, name:"HR Training Day 05.xlsx", url:encodeURIComponent("HR Training Day 05.xlsx")},
  {day:6, name:"HR Training Day 06.xlsx", url:encodeURIComponent("HR Training Day 06.xlsx")},
  {day:7, name:"HR Training Day 07.xlsx", url:encodeURIComponent("HR Training Day 07.xlsx")},
  {day:8, name:"HR Training Day 08.xlsx", url:encodeURIComponent("HR Training Day 08.xlsx")},
  {day:9, name:"HR Training Day 09.xlsx", url:encodeURIComponent("HR Training Day 09.xlsx")},
  {day:10, name:"HR Training Day 10.xlsx", url:encodeURIComponent("HR Training Day 10.xlsx")},
  {day:11, name:"HR Training Day 11.xlsx", url:encodeURIComponent("HR Training Day 11.xlsx")},
  {day:12, name:"HR Training Day 12.xlsx", url:encodeURIComponent("HR Training Day 12.xlsx")},
  {day:13, name:"HR Training Day 13.xlsx", url:encodeURIComponent("HR Training Day 13.xlsx")},
  {day:14, name:"HR Training Day 14.xlsx", url:encodeURIComponent("HR Training Day 14.xlsx")},
  {day:15, name:"HR Training Day 15.xlsx", url:encodeURIComponent("HR Training Day 15.xlsx")},
  {day:16, name:"HR Training Day 16.xlsx", url:encodeURIComponent("HR Training Day 16.xlsx")},
  {day:17, name:"HR Training Day 17.xlsx", url:encodeURIComponent("HR Training Day 17.xlsx")},
  {day:18, name:"HR Training Day 18.xlsx", url:encodeURIComponent("HR Training Day 18.xlsx")},
  {day:21, name:"HR Training Day 21.xlsx", url:encodeURIComponent("HR Training Day 21.xlsx")},
  {day:22, name:"HR Training Day 22(sales).xlsx", url:encodeURIComponent("HR Training Day 22(sales).xlsx")},
  {day:23, name:"HR Training Day 23(Sales).xlsx", url:encodeURIComponent("HR Training Day 23(Sales).xlsx")},
  {day:24, name:"HR Training Day 24(Sales).xlsx", url:encodeURIComponent("HR Training Day 24(Sales).xlsx")},
  {day:25, name:"HR Training Day 25(Sales).xlsx", url:encodeURIComponent("HR Training Day 25(Sales).xlsx")},
  {day:28, name:"HR Training Day 28.xlsx", url:encodeURIComponent("HR Training Day 28.xlsx")},
  {day:29, name:"HR Training Day 29(Taxation).xlsx", url:encodeURIComponent("HR Training Day 29(Taxation).xlsx")},
  {day:30, name:"HR Training Day 30.xlsx", url:encodeURIComponent("HR Training Day 30.xlsx")}
];

function renderPanel(k){const p=panels[k];document.getElementById('workContent').innerHTML=`<h3>${p.title}</h3><p>${p.intro}</p><div class="activity-list">${p.items.map(x=>`<div class="activity"><b>${x[0]}</b>${x[1]}</div>`).join('')}</div><a class="btn secondary" href="#evidence" onclick="setEvidence('reports')">View supporting reports →</a>`;document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active',b.dataset.tab===k));}
document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>renderPanel(b.dataset.tab)));document.querySelectorAll('[data-filter]').forEach(a=>a.addEventListener('click',()=>renderPanel(a.dataset.filter)));renderPanel('hr');
let currentEvidence='reports';function setEvidence(type){currentEvidence=type;document.querySelectorAll('.e-tab').forEach(b=>b.classList.toggle('active',b.dataset.evidence===type));renderFiles();}window.setEvidence=setEvidence;document.querySelectorAll('.e-tab').forEach(b=>b.addEventListener('click',()=>setEvidence(b.dataset.evidence)));
function renderFiles(){const q=document.getElementById('searchFiles').value.toLowerCase().trim();let list=[];if(currentEvidence==='reports')list=REPORTS.map(x=>({...x,type:'PDF',kind:'reports'}));else if(currentEvidence==='workbooks')list=WORKBOOKS.map(x=>({...x,type:'XLSX',kind:'workbooks'}));else list=[{day:0,name:'Offer latter.docx',url:encodeURI('Offer latter.docx'),type:'DOCX',kind:'documents'}];list=list.filter(x=>(x.name+' day '+x.day).toLowerCase().includes(q));document.getElementById('fileGrid').innerHTML=list.map(x=>`<article class="file-card"><span class="file-icon ${x.type==='XLSX'?'xlsx':''}">${x.type}</span><div class="file-info"><b>${x.day?'Day '+String(x.day).padStart(2,'0')+' · ':''}${x.name}</b><small>${x.kind==='reports'?'Daily report':x.kind==='workbooks'?'Practical workbook':'Training document'}</small></div><a href="${x.url}" target="_blank" rel="noopener">Open ↗</a></article>`).join('')||'<p>No matching files found.</p>';document.getElementById('fileNote').textContent=currentEvidence==='reports'?`${list.length} of ${REPORTS.length} daily PDF reports shown.`:currentEvidence==='workbooks'?`${list.length} available Excel workbooks shown. No workbook was created for Days 19, 20, 26 and 27 because those activities were performed in Zoho People / Zoho CRM.`:'Offer Letter document included in the supplied training files.';}document.getElementById('searchFiles').addEventListener('input',renderFiles);renderFiles();
