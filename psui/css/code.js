const reset=function(e,x={}){let t,r,a,n,o,i=new Element(e).raw,l=i.textContent,c=0,s=l[0],d=1,u=i.innerHTML="",h=0;for(;r=t,t=h<7&&"\\"==t?1:d;){if(d=s,s=l[++c],n=u.length>1,!d||h>8&&"\n"==d||[/\S/.test(d),1,1,!/[$\w]/.test(d),("/"==t||"\n"==t)&&n,'"'==t&&n,"'"==t&&n,l[c-4]+r+t=="--\x3e",r+t=="*/"][h])for(u&&(i.appendChild(o=document.createElement("span")).setAttribute("style",["",x.keyword||"color:var(--hue)",x.punctuation||"color:var(--hue)",x.strings||"color:var(--hue);opacity:.65",x.comments||"opacity:.65"][h?h<3?2:h>6?4:h>3?3:+/^(a(wait|bstract|lias|nd|rguments|rray|s(m|sert)?|uto)|b(ase|egin|ool(ean)?|reak|yte)|c(ase|atch|har|hecked|lass|lone|ompl|onst|ontinue)|de(bugger|cimal|clare|f(ault|er)?|init|l(egate|ete)?)|do|double|e(cho|ls?if|lse(if)?|nd|nsure|num|vent|x(cept|ec|p(licit|ort)|te(nds|nsion|rn)))|f(allthrough|alse|inal(ly)?|ixed|loat|or(each)?|riend|rom|unc(tion)?)|global|goto|guard|i(f|mp(lements|licit|ort)|n(it|clude(_once)?|line|out|stanceof|t(erface|ernal)?)?|s)|l(ambda|et|ock|ong)|m(icrolight|odule|utable)|NaN|n(amespace|ative|ext|ew|il|ot|ull)|o(bject|perator|r|ut|verride)|p(ackage|arams|rivate|rotected|rotocol|ublic)|r(aise|e(adonly|do|f|gister|peat|quire(_once)?|scue|strict|try|turn))|s(byte|ealed|elf|hort|igned|izeof|tatic|tring|truct|ubscript|uper|ynchronized|witch)|t(emplate|hen|his|hrows?|ransient|rue|ry|ype(alias|def|id|name|of))|u(n(checked|def(ined)?|ion|less|signed|til)|se|sing)|v(ar|irtual|oid|olatile)|w(char_t|hen|here|hile|ith)|xor|yield)$/.test(u):0]),o.appendChild(document.createTextNode(u))),a=h&&h<7?h:a,u="",h=11;![1,/[\/{}[(\-+*=<>:;|\\.,?!&@~]/.test(d),/[\])]/.test(d),/[$\w]/.test(d),"/"==d&&a<2&&"<"!=t,'"'==d,"'"==d,d+s+l[c+1]+l[c+2]=="\x3c!--",d+s=="/*",d+s=="//","#"==d][--h];);u+=d}};

css.selector("code",{
  whiteSpace:"pre",
  maxWidth:"100%",
  maxHeight:"100%",
  boxSizing:"border-box",
  padding:"8px",
  fontSize:"0.8rem",
  userSelect:"initial",
  overflow:"auto"
})

Element.prototype.highlight=function(scheme){
  reset(this,scheme)
  return this
}

Elements.prototype.highlight=function(scheme){
  this.raw.forEach(e => e.highlight(scheme))
  return this
}
return function code(code = "", attr = {}) {
  const el = new Element(`<code>${code}`).attr(attr)
  reset(el)
  return el
}
