// User-supplied MMD assets. Their original terms apply independently of app code.
export const MMD_CHARACTERS = [
  {id:'yixuan',name:'仪玄 · 墨形影踪',file:'仪玄.pmx',author:'观海子'},
  {id:'jiayin',name:'耀嘉音 · 水晶灯下',file:'耀嘉音.pmx',author:'观海子'},
  {id:'velina',name:'维琳娜',file:'维琳娜6.pmx',author:'去看流星雨'},
];
export const isMMD=id=>MMD_CHARACTERS.some(c=>c.id===id);
