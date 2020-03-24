import React, { useState, useEffect } from 'react'

function App() {
  const [selectedItems, setSelectedItems] = useState([])
  const checkAllRef = React.createRef()

  const onChange = event => {
    const { checked, value } = event.target

    if (checked) {
      setSelectedItems([...selectedItems, value])
    } else {
      setSelectedItems([...selectedItems.filter(item => item !== value)])
    }
  }

  useEffect(() => {
    checkAllRef.current.indeterminate =
      selectedItems.length > 0 && selectedItems.length < 3
    checkAllRef.current.checked = selectedItems.length === 3
  }, [selectedItems])

  const checkAll = event => {
    if (event.target.checked) {
      setSelectedItems(['item1', 'item2', 'item3'])
    } else {
      setSelectedItems([])
    }
  }

  const isChecked = item => {
    return selectedItems.includes(item)
  }

  return (
    <div className="App">
      <input
        type="checkbox"
        id="all"
        name="all"
        value="all"
        onChange={checkAll}
        ref={checkAllRef}
      />
      <label htmlFor="all">Check all</label>

      <ul>
        <li>
          <input
            type="checkbox"
            value="item1"
            name="Item 1"
            id="item1"
            onChange={onChange}
            checked={isChecked('item1')}
          />
          <label htmlFor="item1">Item 1</label>
        </li>

        <li>
          <input
            type="checkbox"
            value="item2"
            name="Item 2"
            id="item2"
            onChange={onChange}
            checked={isChecked('item2')}
          />
          <label htmlFor="item2">Item 2</label>
        </li>

        <li>
          <input
            type="checkbox"
            value="item3"
            name="Item 3"
            id="item3"
            onChange={onChange}
            checked={isChecked('item3')}
          />
          <label htmlFor="item3">Item 3</label>
        </li>
      </ul>
    </div>
  )
}

export default App
