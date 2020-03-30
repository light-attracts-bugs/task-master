import List from "../Models/List.js";
import _store from "../store.js"

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change

  deleteList(listID){
    let index = _store.State.lists.findIndex(list => list.id == listID)
    _store.State.lists.splice(index, 1)
    _store.saveState()
  }

  createList(newListData){
    let newList = new List(newListData)
    _store.State.lists.push(newList)
    _store.saveState()
  }

  addItem(newItemData, listID){
    let list = _store.State.lists.find(list => list.id == listID)
    list.items.push(newItemData)
    _store.saveState()
  }

  deleteItem(listID, itemIndex){
    let list = _store.State.lists.find(list => list.id == listID)
    list.
  }

}

const SERVICE = new ListService();
export default SERVICE;
