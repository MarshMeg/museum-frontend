import Item from "./item/Item.jsx";
import "./items_list.css"

export default function ItemsList({ items_list, base_url }) {
  let items_map = items_list.map(
    (item) => (
      <Item name={item.title} description={item.description} img_url={base_url + item.img} />
    )
  )

  return (
    <>
      { items_map }
    </>
  )
}