class Programmer{
  constructor(name,language = "Ruby") {
    this.name = name;
    this.language = language;
  }
  evangelize() {
    return `${this.name}: ${this.language.toUpperCase()} IS THE BEST LANGUAGE EVER`;
  }

}

export var bestLanguages = ["Ruby", "Elixir"];
export function addJavaScript(languages){
 var newList = languages + [', JavaScript'];
 return newList;
}
export default Programmer;
