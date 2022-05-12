function Form(props) {
  const { newname, newage, newaddress, handleFormSubmit, handleInputChange } = props;
  return (
    <div id="Form">
      <h3>Add a new item to the table:</h3>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">
          name:
          <input id="name" value={newname} type="text" name="name" onChange={handleInputChange} />
        </label>
        <label htmlFor="age">
          name:
          <input id="age" value={newage} type="text" name="age" onChange={handleInputChange} />
        </label>
        <label htmlFor="address">
          address:
          <input
            id="address"
            value={newaddress}
            type="address"
            name="address"
            onChange={handleInputChange}
          />
        </label>
        <button type="submit" value="Submit">
          Add Item
        </button>
      </form>
    </div>
  );
}

export default Form;
