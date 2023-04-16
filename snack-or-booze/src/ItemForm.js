import React, { useState } from "react";
import { useEffect } from "react";
  
function ItemForm({addItem}) {

	// definte initial state: all are black and default to snack
	const INITIAL_STATE = {
		name        : '',
		description : '',
		recipe      : '',
		serve       : ''
	};

    //Sets inital state of form and form items.
    const [formData, setFormData] = useState(INITIAL_STATE)


    //Adds event listener to form
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(formData=>({
            ...formData,
            [name]: value,     
        }));
    }

    //Holds state to be sent to parent component AddItem
    function handleSubmit(e) {
        e.preventDefault();
        addItem(formData);
        setFormData(INITIAL_STATE);
    }

    //Returns form via JSX
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="category">category:</label>
        <select 
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}>
            <option>Snacks</option>
            <option>Drinks</option>
        </select>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
  
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
  
        <label htmlFor="recipe">Recipe:</label>
        <input
          id="recipe"
          name="recipe"
          value={formData.recipe}
          onChange={handleChange}
        />
  
        <label htmlFor="serve">Serve:</label>
        <input
          id="serve"
          name="serve"
          value={formData.serve}
          onChange={handleChange}
        />
  
        <button>Submit</button>
      </form>
  )
};

export default ItemForm;