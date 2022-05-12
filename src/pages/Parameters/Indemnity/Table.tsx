function Table(props) {
  const { items } = props;
  return (
    <div id="Table">
      <table>
        <tbody>
          <tr>
            <th>name</th>
            <th>address</th>
          </tr>
          {items.map((item) => {
            return (
              <tr>
                <td>{item.key}</td>
                <td>{item.name}</td>
                <td>{item.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
