import React, { useEffect } from "react";
import { DiCss3, DiJavascript, DiNpm } from "react-icons/di";
import  { useState } from "react";
import { FaCheckSquare, FaList, FaMinusSquare, FaRegFolder, FaRegFolderOpen, FaSquare, FaUser } from "react-icons/fa";
import TreeView, { flattenTree } from "react-accessible-treeview";
import "./styles.css";
const folder = {
    name: "",
    ou: [
      {
        id :1,
        name: "src",
        ou: [{ name: "index.js", id :2 }, { name: "styles.css" ,  id :3}],
      },
      {
        name: "node_modules",
        id :4,
        ou: [{ name: "index.js", id :5 }, { name: "styles.css" ,  id :6}],
      },
      {
        name: ".npmignore",
        id :9
      },
      {
        name: "package.json",
        id :7
      },
      {
        name: "webpack.config.js",
        id :8 
      },
    ],
  };
function changeChildrenKeyToX(obj) {
    let newObj = { ...obj };
  
    if (newObj.ou) {
      newObj.children = newObj.ou.map(child => changeChildrenKeyToX(child));
      delete newObj.ou;
    }
  
    return newObj;
  }
  const newFolderStructure = changeChildrenKeyToX(folder);
  console.log(newFolderStructure);

  const data = flattenTree(newFolderStructure);
console.log("data", data)


function MultiSelectDirectoryTreeView() {
    const [selectedItems, setSelectedItems] = useState([]);
    const handleSelected = (id) => {
        setSelectedItems(prevSelectedItems =>
          prevSelectedItems.includes(id)
            ? prevSelectedItems.filter(item => item !== id)
            : [...prevSelectedItems, id]
        );
      };
     
  return (
    <div>
      <div className="ide">
        <TreeView
          data={data}
          aria-label="directory tree"
          multiSelect
          propagateSelect
          propagateSelectUpwards
          togglableSelect
          nodeRenderer={({
            element,
            isBranch,
            isExpanded,
            isSelected,
            isHalfSelected,
            getNodeProps,
            level,
            handleSelect,
            handleExpand,
          }) => (
            <div {...getNodeProps({ onClick: handleExpand })} style={{ paddingLeft: 20 * (level - 1) }}>
                  <CheckBoxIcon
                  className="checkbox-icon"
                  onClick={(e) => {
                    handleSelect(e);
                    handleSelected(element.id)
                    e.stopPropagation();
                  }}
                  variant={
                    isHalfSelected ? "some" : isSelected ? "all" : "none"
                  }
                />
              {isBranch ? (
                <FolderIcon isOpen={isExpanded} />
              ) : (
                <FaUser style={{
                    marginRight :"10px",olor :"gray"
                }} />
                // <FileIcon filename={element.name} />
              )}
            
              {element.name}
            </div>
          )}
        />
      </div>
      {
        selectedItems.length && selectedItems.map((item)=>(
            <p>{item}</p>
        ))
      }
    </div>
  );
}

const FolderIcon = ({ isOpen }) =>
  isOpen ? (
    <FaRegFolderOpen color="e8a87c" className="icon"  style={{
            marginRight :"10px"
        }}/>
  ) : (
    <FaRegFolder color="e8a87c" className="icon" style={{
            marginRight :"10px"
        }} />
  );

const FileIcon = ({ filename }) => {
  const extension = filename.slice(filename.lastIndexOf(".") + 1);
  switch (extension) {
    case "js":
      return <DiJavascript color="yellow" className="icon" />;
    case "css":
      return <DiCss3 color="turquoise" className="icon" />;
    case "json":
      return <FaList color="yellow" className="icon" />;
    case "npmignore":
      return <DiNpm color="red" className="icon" />;
    default:
      return null;
  }
};
const CheckBoxIcon = ({ variant, ...rest }) => {
    switch (variant) {
      case "all":
        return <FaCheckSquare  style={{
            marginRight :"14px" ,color :'orange'
        }} {...rest} />;
      case "none":
        return <FaSquare style={{
            marginRight :"14px" ,color :'orange'
        }}  {...rest} />;
      case "some":
        return <FaMinusSquare  style={{
            marginRight :"14px" ,color :'orange'
        }}  {...rest} />;
      default:
        return null;
    }
  };
export default MultiSelectDirectoryTreeView;
.ide {
  background: #242322;
  font-family: monospace;
  font-size: 16px;
  color: white;
  user-select: none;
  padding: 20px;
  border-radius: 0.4em;
}

.ide .tree,
.ide .tree-node,
.ide .tree-node-group {
  list-style: none;
  margin: 0;
  padding: 0;
}

.ide .tree-branch-wrapper,
.ide .tree-node__leaf {
  outline: none;
  outline: none;
}

.ide .tree-node {
  cursor: pointer;
}

.ide .tree-node:hover {
  background: rgba(255, 255, 255, 0.1);
}

.ide .tree .tree-node--focused {
  background: rgba(255, 255, 255, 0.2);
}

.ide .tree .tree-node--selected {
  background: rgba(48, 107, 176);
}

.ide .tree-node__branch {
  display: block;
}

.ide .icon {
  vertical-align: middle;
  margin-right: 5px;
}
