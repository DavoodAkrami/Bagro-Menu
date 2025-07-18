import Menu from "@/Data/Menu";
import { MenuItem } from "@/Data/Menu";


const addItem = (item: MenuItem) => {
    Menu.push(item);
    return true;
} 

const editItem = (itemName: string | undefined) => {
    const editItem: MenuItem | undefined = Menu.find(item => item.name === itemName);
    return editItem;
}


const AdminPanel = () => {

    return (
        <div>
            
        </div>
    )
}