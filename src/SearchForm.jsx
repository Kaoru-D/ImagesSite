import React from 'react'

const SearchForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const searchValues = e.target.elements.search.value;
        if (!searchValues) return;
    }
  return (
    <section>
        <h1 className="title"> almacenamiento de imágenes </h1>
        <form className="search-form" onSubmit={handleSubmit}>
            <input type="text" name="search" className="form-input search-input" placeholder="Animal" />
            <button type="submit" className="btn">buscar</button>
        </form>
    </section>
  )
}

export default SearchForm