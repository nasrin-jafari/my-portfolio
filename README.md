import React, { useState } from "react";
import { FaFile, FaFolder } from "react-icons/fa6";
const App = () => {
  const [activeFolder, setActiveFolder] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [items, setItems] = useState( [
    {
      id: 1,
      folder: true,
      name: "aba",
      content: [
        { id: 101, folder: false, name: "File 1-1" },
        {
          id: 102,
          folder: true,
          name: "Subfolder 1-2",
          content: [
            { id: 101, folder: false, name: "File 1-1" },
            // ... سایر آیتم‌ها
          ],
        },
        // ... سایر آیتم‌ها
      ],
    },
    {
      id: 2,
      folder: false,
      name: "aa",
    },
    {
      id: 4,
      folder: false,
      name: "aa",
    },
    {
      id: 3,
      folder: true,
      name: "ab2",
      content: [
        { id: 101, folder: false, name: "File 2-1" },
        {
          id: 102,
          folder: true,
          name: "Subfolder 1-2",
          content: [
            { id: 101, folder: false, name: "File 2-1" },
            {
              id: 101,
              folder: true,
              name: "folder 1-1",
              content: [
                { id: 101, folder: false, name: "File 1-1" },
                {
                  id: 102,
                  folder: true,
                  name: "Subfolder 1-2",
                  content: [
                    { id: 101, folder: false, name: "File 1-1" },
                    // ... سایر آیتم‌ها
                  ],
                },
                // ... سایر آیتم‌ها
              ],
            },
            // ... سایر آیتم‌ها
          ],
        },
        // ... سایر آیتم‌ها
      ],
    },
  
    {
      id: 5,
      folder: true,
      name: "ab",
      content: [
        { id: 101, folder: false, name: "File 1-1" },
        {
          id: 102,
          folder: true,
          name: "Subfolder 1-2",
          content: [
            { id: 101, folder: false, name: "File 1-1" },
            // ... سایر آیتم‌ها
          ],
        },
        // ... سایر آیتم‌ها
      ],
    },
  ]);


  const handleSelectItem = (id) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter((item) => item !== id)
        : [...prevSelectedItems, id]
    );
  };
  const handleDeleteSelectedItems = () => {
    const deleteSelected = (list) => {
      return list
        .filter(item => !selectedItems.includes(item.id)) // حذف آیتم‌های انتخاب شده
        .map(item => {
          if (item.folder && item.content) {
            // اگر آیتم یک فولدر با محتویات است، محتویات آن را بررسی کنید
            return { ...item, content: deleteSelected(item.content) };
          }
          return item; // اگر آیتم فولدر نیست، آن را بازگردانید
        });
    };
  
    setItems(deleteSelected(items));
    setSelectedItems([]);
    console.log("items", items) // پاک کردن لیست آیتم‌های انتخاب شده
  };
  const handleClick = (item) => {
    if (item.folder) {
      setActiveFolder(item);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <button onClick={handleDeleteSelectedItems}>Delete Selected</button>

        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item)}
            style={{ cursor: "pointer" }}
          >
            {item.folder ? (
              <FaFolder style={{ color: "orange", fontSize: "30px" }} />
            ) : (
              <FaFile style={{ color: "orange", fontSize: "30px" }} />
            )}
            {item.name}
          </div>
        ))}
      </div>
      {activeFolder && (
        <div style={{ marginLeft: "20px" }}>
          <h3>{activeFolder.name}</h3>
          {activeFolder.content.map((subItem) => (
           <div style={{
            display :"flex",
            alignItems :"center",
            justifyContent :"space-between"
           }}>
             <div
              key={subItem.id}
              onClick={() => handleClick(subItem)}
              style={{ cursor: "pointer" }}
            >
              {subItem.folder ? (
                <FaFolder style={{ color: "blue", fontSize: "20px" }} />
              ) : (
                <FaFile style={{ color: "blue", fontSize: "20px" }} />
              )}
              {subItem.name}
            </div>
            <div>
            <input
              type="checkbox"
              checked={selectedItems.includes(subItem.id)}
              onChange={() => handleSelectItem(subItem.id)}
            />
            </div>
           </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
  // const handleDeleteSelectedItems = () => {
  //   const deleteItems = (items, selectedIds) => {
  //     return items.reduce((result, item) => {
  //       if (selectedIds.includes(item.id)) {
  //         // اگر آیتم انتخاب شده است، آن را حذف کنید
  //         return result;
  //       }
  
  //       // اگر آیتم یک فولدر با محتویات باشد، محتویات آن را نیز بررسی کنید
  //       if (item.folder && item.content) {
  //         const filteredContent = deleteItems(item.content, selectedIds);
  //         result.push({ ...item, content: filteredContent });
  //       } else {
  //         // اگر آیتم فولدر نیست، آن را به نتیجه نهایی اضافه کنید
  //         result.push(item);
  //       }
  
  //       return result;
  //     }, []);
  //   };
  
  //   setItems(prevItems => deleteItems(prevItems, selectedItems));
  //   setSelectedItems([]); // پاک کردن لیست آیتم‌های انتخاب شده
  // };
  
