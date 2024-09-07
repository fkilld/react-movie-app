const SearchBox = ({ value, setSearchValue }) => {
  return (
    <div className='w-full sm:w-1/3'>
      <input
        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        value={value}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder='Type to search...'
      />
    </div>
  )
}

export default SearchBox
