import ListService from "../Services/ListService.js";

let _listService = new ListService();

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = ``
  let lists = _listService.List
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
    _listService.createList(newList)
    _drawLists()
  }

  addItem(event, listIndex){
    event.preventDefault()
    let form = event.target
    let newItem = form.item.value
    _listService.addItem(newItem, listIndex)
    _drawLists()
  }

  deleteList(index){
    _listService.deleteList(index)
    _drawLists()
  }

  deleteItem(listIndex, itemIndex){
    _listService.deleteItem(listIndex, itemIndex)
    _drawLists()
  }
}
