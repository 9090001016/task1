import React, {useState,useEffect } from 'react';

// get the localStorage data back
const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const TodoList = () => {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(getLocalData());
    const [myeditItem, setMyeditItem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);
     

    //  const input = document.getElementById('myInput').value;
    //  input.addEventListner("keyup",function(event){
    //    if(event.keycode === 13){
    //      event.preventDefault();
    //     return document.getElementById('myBtn').addItem();
    //    }
    //  });
     const onKeyDownHandler= (event) =>{
      if(event.keyCode === 13){
        addItem();
      };
    };
    //  Additem function

     const addItem = () =>{
         if(!inputData){
             alert("plz fill the data");
         }else if(inputData && toggleButton){
             setItems(
                 items.map((curElem)=>{
                   if(curElem.id === myeditItem){
                       return { ...curElem, name:inputData };
                   }
                   return curElem;
                 })
             );
             setInputData("");
             setMyeditItem(null);
             setToggleButton(false);
              
         }else{
             const myNewInputData = {
                 id:new Date().getTime().toString(),
                 name:inputData,
             };
             setItems([...items, myNewInputData]);
             setInputData("");
         }
     };

    //  Edit the items
    const editItem = (index) =>{
        const item_edited = items.find((curElem)=>{
            return curElem.id === index;
        });
        setInputData(item_edited.name);
        setMyeditItem(index);
        setToggleButton(true);
    };
    
    // delete the items
    const deleteItem =(index)=>{
        const updatedItems = items.filter((curElem)=>{
            return curElem.id !== index;
        });
        setItems(updatedItems);
    }

    // remove all items
    const removeAll = () =>{
        setItems([]);
    }

    // adding localStorage
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));
  }, [items]);

    return (
        <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src="../images/todo1.jpeg" alt="todoLogo" />
                    <figcaption>Add Your List Here</figcaption>
                </figure>

            <div className="addItems">
                <input type="text" placeholder="✍ Add Item..." id="myInput"  className="form-control" value={inputData}
                onChange = {(e)=> setInputData(e.target.value)} onKeyDown ={onKeyDownHandler}/>

                {toggleButton ? (
              <i className="far fa-edit add-btn" onClick={addItem} id="myBtn"></i>
              ) : (
              <i className="fa fa-plus add-btn" onClick={addItem} id="myBtn"></i>
              )}
           </div>

            {/* show our Items */}
            <div className="showItems">
            {items.map((curElem)=>{
                return(
                     <div className="eachItem" key ={curElem.id}>
                     <h3>{curElem.name}</h3>
                     <div className="todo-btn">
                     <i className="far fa-edit add-btn" onClick={()=>editItem(curElem.id)}></i>
                     <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(curElem.id)}></i>
                 </div>
              </div>
            );  
            })}
          </div>

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All" onClick ={removeAll}>
              <span> CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList
