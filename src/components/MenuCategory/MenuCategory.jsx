import Cover from "../../shared/Cover";
import MenuItemsCard from "../../shared/MenuItemsCard";

const MenuCategory = ({items, title, img, subTitle}) => {
  return (
    <div className="mt-20">
        {title && <Cover img={img} title={title} subTitle={subTitle}></Cover>}
      <div className="container mx-auto grid grid-cols-1 gap-5 mt-16 lg:grid-cols-2 ">
        {items.map(item => 
          <MenuItemsCard key={item.id} item={item}></MenuItemsCard>
        )}
      </div>
    </div>
  );
};

export default MenuCategory;
