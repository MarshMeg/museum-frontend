import Item from "./item/Item.jsx";
import "./items_list.css"

export default function ItemsList({ items_list }) {
  let items_map = items_list.map(
    (item) => (
      <Item name={item.title} description={item.description} img_url={item.url} />
    )
  )

  return (
    <>
      { items_map }
    </>
  )
}