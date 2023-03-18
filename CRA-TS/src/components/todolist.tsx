import React, { useRef } from 'react'
import '../assets/styles.css'

interface todoListType {
    items: {id: string, name: string}[]
    handleInputDelete: Function,
    handleInputCreate: (id: string)=>void
}

const Todolist: React.FC<todoListType> = (
    {items, handleInputDelete, handleInputCreate}: todoListType
) => {
    const inputText = useRef<HTMLInputElement>(null)
    // 需加上 HTMLInputElement  不然會無法取得 inputText.current.value

    const handleInputChange = (e: React.FormEvent) =>{
        e.preventDefault()
    }

    const todoListCreate = (value: string) => {
        handleInputCreate(value)
        inputText.current!.value = ''
    }
  return (
    <div>
        <p>Todolist</p>
        <label htmlFor="todo-list">新增人名：</label>
        <input 
            type="text" 
            onChange={(e)=>handleInputChange(e)}
            ref={inputText}
            id="todo-list"
        />
        <button onClick={()=>todoListCreate(inputText.current!.value)} className='button'>
            加入
        </button>
        <div>
        {
            items.map((item)=>(
                <div>
                    <ul>
                        <li>
                            {item.name}
                            <button 
                                onClick={()=>handleInputDelete(item.id)}
                                className='li-button'
                            >
                                刪除
                            </button>
                        </li>
                    </ul>
                </div>
            ))
        }
        </div>
        
        {/* <p>{inputText.current!.value}</p> */}
    </div>
  )
}

export default Todolist