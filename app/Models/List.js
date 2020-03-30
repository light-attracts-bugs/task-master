import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();

    this.name = data.name
    this.items = data.items || []
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  getTemplate(index) {


    let template =
    `
    <div class="col-4">
      <h1>${this.name}</h1>
      <h1>${this.id}</h1>
      <ul>
    `
    template += this.drawItems(index)
    template += `
    </ul>
    <form onsubmit="app.Controllers.ListController.addItem(event, ${index})">
      <div class="form-group">
        <label for="item">Item</label>
        <input type="text" class="formcontrol" name="item" placeholder="list item" required>
        </div>
        <button type="submit">+</button>
      </form>
      <button type="button" onclick="app.Controllers.ListController.deleteList(${index})">X</button>
      </div> 
    `
  }

  drawItems(listIndex) {
    let itemTemplate = ""
    this.items.forEach((i, itemIndex) => {
      itemTemplate += `
      <li>${i}<span onclick="app.Controllers.ListController.deleteItem(${listIndex}, ${itemIndex})">X</span></li>
      `
    });
    return itemTemplate
  }
}
