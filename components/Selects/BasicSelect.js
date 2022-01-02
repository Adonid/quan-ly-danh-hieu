import React from "react"

export default function BasicSelect({title, name, color, items, onChange}) {
  const handlChange = e => onChange(e.target.value)
  return (
    <div className="col-span-6 sm:col-span-3">
      { title ?
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {title}
        </label>
        : null
        }
      <select
        name={name}
        className={ (color==="dark"?"bg-blueGray-700 text-white border-gray-400 ":"bg-white border-gray-300 ") + "block w-full py-2 px-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}
        onChange={handlChange}
      >
        {
          items.map((item, key) => <option key={key} value={item.value}>{item.label}</option>)
        }
      </select>
    </div>
  )
}
