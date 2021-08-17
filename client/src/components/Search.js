function Search({ search, onSearchChange }){
    return (
        <div className="search">
            <label htmlFor="search">Search by Producer/Casting:</label>
            <input
                type="text"
                id="search"
                placeholder="Search your auditions..."
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    )
}
export default Search