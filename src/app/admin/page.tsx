"use client";
import { MenuItem, useMenu } from "@/contexts/MenuContext";
import { supabase } from "@/utils/supabaseClient";
import { useState } from "react";
import Modal from "@/Components/Modal";
import { FaSpinner, FaTrash } from "react-icons/fa";
import { categories } from "@/Data/Categories";
import 'react-loading-skeleton/dist/skeleton.css';


const AdminPanel = () => {
    const { menu, loading: tableLoading, refresh } = useMenu();
    const emptyForm = {
        name: "",
        price: "",
        category: "",
        description: "",
        ingredients: "",
        images: [] as string[], 
        isNewItem: false,
        isSpicy: false,
    };
    const [form, setForm] = useState(emptyForm);
    const [editId, setEditId] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [submitLoading, setSubmitLoading] = useState<boolean>(false);
    const [deletingLoadingId, setDeletingLoadingID] = useState<number | null>(null);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileExt = file.name.split(".").pop();
            const fileName = `${Date.now()}-${i}.${fileExt}`;
            const filePath = `${fileName}`;

            const { error } = await supabase.storage
                .from("bagro-images")
                .upload(filePath, file);

            if (error) {
                console.error("❌ Error uploading image:", error.message, error);
                continue;
            }

            const { data: publicUrlData } = supabase.storage
                .from("bagro-images")
                .getPublicUrl(filePath);

            if (publicUrlData?.publicUrl) {
                setForm(prev => ({
                    ...prev,
                    images: [...prev.images, publicUrlData.publicUrl],
                }));
            } else {
                console.error("No public URL returned for file:", filePath);
            }
        }
    };
    

    const handlesubmit = async () => {
        setSubmitLoading(true);
        if (editId === null) {
    const { error } = await supabase.from('menu').insert([
      {
        ...form,
        price: Number(form.price),
        ingredients: form.ingredients.split(",").map(s => s.trim()),
                    images: form.images
      }
    ]);
    if (!error) {
                setIsModalOpen(false);
                setSubmitLoading(false);
      refresh();
    }
        } else {
            setSubmitLoading(true);
    const { error } = await supabase.from('menu').update({
                ...form,
                price: Number(form.price),
                ingredients: form.ingredients.split(",").map(s => s.trim()),
                images: form.images
    }).eq('id', editId);
    if (!error) {
                setIsModalOpen(false);
      setEditId(null);
                setSubmitLoading(false);
      refresh();
            }
        }
    };

    const handleDelete = async (id: number) => {
        setDeletingLoadingID(id);
        const { error } = await supabase.from('menu').delete().eq('id', id);
    if (!error) {
      refresh();
            setDeletingLoadingID(null);
        }
    };


    const openAddModal = () => {
        setForm(emptyForm);
        setEditId(null);
        setIsModalOpen(true);
    };


    const openEditModal = (item: MenuItem) => {
        setForm({
            ...item,
            price: item.price?.toString() ?? "",
            ingredients: Array.isArray(item.ingredients) ? item.ingredients.join(", ") : "",
            images: Array.isArray(item.images) ? item.images : [],
        });
        setEditId(item.id);
        setIsModalOpen(true);
    };

    return (
        <div>
            {tableLoading ? (
                <div className=" flex items-center justify-center min-h-screen">
                    <FaSpinner className="animate-spin mr-2 text-[20rem] max-md:text-[12rem]" />
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center pt-[10vh]">
                    <h1 className="text-[3rem] font-[650] text-[var(--text-color)] mb-[5vh]">Admin panel</h1>
                    <div>
                        <button 
                            onClick={() => openAddModal()}
                            className="mb-[5vh] py-[0.8rem] px-[1.8rem] bg-[var(--table-bg-color)] border-[2px] border-[var(--brand-color)] rounded-[12px] text-[var(--text-color)] font-[570] cursor-pointer hover:bg-[var(--secondary-color)]"
                        >
                            Add Item
                        </button>
                    </div>
                    <table border={1} className="w-[90%] max-[700px]:w-[98%] mx-auto border-[2px] border-[var(--brand-color)] bg-[var(--table-bg-color)] text-[var(--text-color)] rounded-[12px] overflow-hidden">
                        {menu.map((item) => (
                            <tbody key={item.id}>
                                <tr className="border border-[var(--brand-color)]">
                                    <th className="py-4 max-[700px]:py-2 max-[700px]:text-[0.8rem] border border-[var(--brand-color)] max-[700px]:w-[30%]">{item.name}</th>
                                    <th className="py-4 max-[700px]:py-2 border max-[700px]:text-[0.8rem] border-[var(--brand-color)]">{item.category}</th>
                                    <th className="py-4 max-[700px]:py-2 border max-[700px]:text-[0.8rem]  border-[var(--brand-color)]">
                                        <button 
                                            className="max-[700px]:py-[0.4rem] max-[700px]:px-[1rem] py-[0.6rem] px-[1.2rem] bg-[var(--table-bg-color)] rounded-[12px] border border-[var(--brand-color)] cursor-pointer hover:bg-[var(--secondary-color)]"
                                            onClick={() => openEditModal(item)}
                                        >
                                            Edit
                                        </button>
                                    </th>
                                    <th className="py-4 max-[700px]:py-2 border max-[700px]:text-[0.8rem] border-[var(--brand-color)]">
                                        <button
                                            className="py-[0.6rem] px-[1.2rem] bg-[var(--table-bg-color)] rounded-[12px] border border-[var(--brand-color)] cursor-pointer hover:bg-[var(--secondary-color)]"
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            {deletingLoadingId === item.id ? 
                                                <>
                                                    <FaSpinner className="animate-spin text-xl mr-2" />
                                                </> :
                                                <>
                                                Delete  
                                                </>
                                            }
                                        </button>
                                    </th>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            )}
            {isModalOpen &&
                <Modal open={isModalOpen} onSubmit={handlesubmit} onClose={() => setIsModalOpen(false)}>
                        <div className="flex flex-col items-center justify-center gap-[20px]">
                            <h2 className="text-[1.8rem] text-[var(--text-color)] font-[570] my-[2rem]">
                                {editId ? "Edit Item" : "Add a new item"}
                            </h2>
                            <input 
                                type="text"
                                name="name"
                                value={form.name}
                                placeholder="Name" 
                                onChange={e => setForm({ ...form, name: e.target.value})}
                                className="w-[95%] px-[1rem] py-[0.6rem] border border-[var(--brand-color)] bg-[var(--table-bg-color)] rounded-[12px] text-[var(--text-color)] focus:border-2"
                            />
                            <input 
                                type="number"
                                name="price"
                                value={form.price}
                                placeholder="price" 
                                min={0}
                                onChange={e => setForm({ ...form, price: e.target.value})}
                                className="w-[95%] px-[1rem] py-[0.6rem] border border-[var(--brand-color)] bg-[var(--table-bg-color)] rounded-[12px] text-[var(--text-color)] focus:border-2"
                            />
                            <div className="flex flex-col items-center gap-[10px] w-[95%]">
                                <label>Category</label>
                            <select 
                                name="categories" 
                                id="categories"
                                value={form.category}
                                onChange={e => setForm({ ...form, category: e.target.value})}
                                className="w-[100%] px-[1rem] py-[0.6rem] border border-[var(--brand-color)] bg-[var(--table-bg-color)] rounded-[12px] text-[var(--text-color)] focus:border-2"
                            >
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>{cat.label}</option>
                                ))}
                            </select>
                            </div>
                            <textarea 
                                name="description" 
                                id="description"
                                value={form.description}
                                placeholder="Description"
                                onChange={e => setForm({ ...form, description: e.target.value})}
                                 className="w-[95%] px-[1rem] py-[0.6rem] border border-[var(--brand-color)] bg-[var(--table-bg-color)] rounded-[12px] text-[var(--text-color)] focus:border-2"
                            >
                            </textarea>
                            <input 
                                type="text"
                                name="ingridients"
                                value={form.ingredients}
                                placeholder="Ingredients (Seprate them by using comma)" 
                                onChange={e => setForm({ ...form, ingredients: e.target.value})}
                                className="w-[95%] px-[1rem] py-[0.6rem] border border-[var(--brand-color)] bg-[var(--table-bg-color)] rounded-[12px] text-[var(--text-color)] focus:border-2"
                            />
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="w-[95%] px-[1rem] py-[0.6rem] border border-[var(--brand-color)] bg-[var(--table-bg-color)] rounded-[12px] text-[var(--text-color)] focus:border-2"
                            />
                            <div className="w-full flex flex-col items-center">
                                <div className="relative flex flex-row gap-2 overflow-x-auto max-w-full py-2">
                                    {form.images.map((img, idx) => (
                                        <div key={idx} className="relative inline-block group">
                                            <img src={img} alt="uploaded" className="w-20 h-20 object-cover rounded" />
                                            <button
                                                type="button"
                                                aria-label="Remove image"
                                                onClick={() => setForm(prev => ({
                                                    ...prev,
                                                    images: prev.images.filter((_, i) => i !== idx),
                                                }))}
                                                className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 opacity-80 hover:opacity-100 hover:bg-red-700 transition z-10 shadow group-hover:scale-110"
                                            >
                                                <FaTrash size={16} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center gap-[10px] text-[var(--text-color)] font-[570]">
                                
                                <label>Is this a new item?</label>
                                <input 
                                    type="checkbox"
                                    name="isNewItem"
                                    checked={form.isNewItem}
                                    onChange={e => setForm({ ...form, isNewItem: e.target.checked })}
                                    className="size-4.5 rounded-[12px] cursor-pointer"
                                />
                            </div>
                            <div className="flex items-center gap-[10px] text-[var(--text-color)] font-[570]">
                                <label>Is this a spicy item?</label>
                                <input 
                                    type="checkbox"
                                    name="isSpicy"
                                    checked={form.isSpicy}
                                    onChange={e => setForm({ ...form, isSpicy: e.target.checked })}
                                    className="size-4.5 rounded-[12px] cursor-pointer"
                                />
                            </div>
                            <button className="mb-[5vh] py-[0.8rem] px-[1.8rem] bg-[var(--table-bg-color)] border-[2px] border-[var(--brand-color)] rounded-[12px] text-[var(--text-color)] font-[570] cursor-pointer hover:bg-[var(--secondary-color)]">
                                {submitLoading ?
                                    <>
                                        <FaSpinner className="animate-spin text-xl mr-2" />
                                    </> : editId ? "Save" : "Add"
                                }
                            </button>
                        </div>
                </Modal>
            }
        </div>
    )
}



export default AdminPanel;