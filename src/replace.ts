interface replaceRule {
  reg: string;
  target?: string;
}

function replaceFun(source: string, rule: replaceRule): string {
  let reg = new RegExp(rule.reg);
  return source.replace(reg, rule.target || "");
}

export default replaceFun;
