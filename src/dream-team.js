module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) { return false; };
  let dreamName = [];
  let res = /[a-z]/i;
  for (let i = 0; i < members.length; i++) {
      if ('string' === typeof (members[i])) {
          let s = res.exec(members[i])[0];
          s = s.toUpperCase();
          dreamName.push(s);
      };
  };
  dreamName = dreamName.sort().join('');
  return dreamName;
};