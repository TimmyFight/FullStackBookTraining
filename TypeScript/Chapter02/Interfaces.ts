interface Employee {
  name: string;
  id: number;
  isMenager: boolean;
  getUniqueID: () => string;
}

const linda: Employee = {
  name: 'Linda',
  id: 1,
  isMenager: false,
  getUniqueID: (): string => {
    let uniqueId = linda.id + "-" + linda.name;
    if(!linda.isMenager) {
      return "wrk-" + uniqueId;
    }
    return uniqueId;
  }
}
console.log(linda.getUniqueID());

const pamela: Employee = {
  name: 'Pamela',
  id: 2,
  isMenager: true,
  getUniqueID: (): string => {
    let uniqueId = pamela.id + "-" + pamela.name;
    if(pamela.isMenager) {
      return "mng-" + uniqueId;
    }
    return uniqueId;
  }
}
console.log(pamela.getUniqueID());
