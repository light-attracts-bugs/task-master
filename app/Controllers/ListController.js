import ListService from "../Services/ListService.js";
import _store from "../store.js"

//let _listService = new ListService();

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = ``
  let lists = _store.State.pizzas
  lists.forEach((list, index) => {
    template += lists.getTemplate(index)
  })
  document.querySelector(`#list`).innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
  addList(event){
    event.preventDefault()
    let form = event.target
    let newList = {
      name: form.name.value
    }
    ListService.createList(newList)
    _drawLists()
  }

  addItem(event, listID){
    event.preventDefault()
    let form = event.target
    let newItem = form.item.value
    ListService.addItem(newItem, listID)
    _drawLists()
  }

  deleteList(listID){
    ListService.deleteList(listID)
    _drawLists()
  }

  deleteItem(listID, itemIndex){
    ListService.deleteItem(listID, itemIndex)
    _drawLists()
  }
}
