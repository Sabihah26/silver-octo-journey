const fs=require('fs');
const path=require('path');
const root='C:/Users/Sabiha/arabic-dictionary/src/data/verbs';
const files=[];
function walk(dir){
  for(const ent of fs.readdirSync(dir,{withFileTypes:true})){
    const p=path.join(dir,ent.name);
    if(ent.isDirectory()) walk(p);
    else if(p.endsWith('.js')) files.push(p);
  }
}
walk(root);

const rows=[];
for(const file of files){
  const txt=fs.readFileSync(file,'utf8');
  const id=txt.match(/id\s*:\s*(\d+)/);
  const form=txt.match(/form\s*:\s*"([^"]+)"/);
  rows.push({file, id:id?Number(id[1]):null, form:form?form[1]:null});
}

const dup = new Map();
for(const r of rows){
  if(r.id!==null){
    if(!dup.has(r.id)) dup.set(r.id,[]);
    dup.get(r.id).push(r.file);
  }
}

console.log('DUPLICATE ID FILES');
for(const [id, arr] of [...dup.entries()].filter(([,a])=>a.length>1)){
  console.log(id, arr.join(' | '));
}

console.log('\nALL RECORDS');
for(const r of rows)
  console.log(`${r.file} :: id=${r.id} form=${r.form}`);
