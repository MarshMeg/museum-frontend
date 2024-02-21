import ItemsList from "../../../components/main/items_list/ItemsList.jsx"
import DataAPI from "../../../api/DataAPI.js";
import "./items.css"

export default function ItemsPage({ language }) {
  let data_api = new DataAPI()
  let items_ = data_api.get_items()

  let items = new Array(0)
  for (let id = 0; id<items_.length; id++) {
    items.push({
      "img": items_[id].img,
      "title": items_[id].title_map[language].title,
      "description": items_[id].title_map[language].description
    })
  }

  return (
    <main id={ "items" }>
      <div className="items">
        <ItemsList items_list={items} base_url={data_api.url.replace('api/data/', '')}/>
      </div>
    </main>
  )
}