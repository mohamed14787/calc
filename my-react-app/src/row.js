import Box from "./box";

function Row({ items}) {
    if (!items) {
        return  <Box title={1} />; // or return some default content
      }
      return (

          <div className="row-posters">
            {items.map(item => (
              <Box title={item}  />
            ))}
          </div>
      );
}

export default Row;