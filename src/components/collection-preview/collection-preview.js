import React from "react";
import CollectionItem from "../collection-items/collection-item.component";
import "./collection-preview.scss";

function ColllectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, indx) => indx < 4)
          .map(({ id, ...restOfCollectionProps }) => (
            <CollectionItem key={id} {...restOfCollectionProps} />
          ))}
      </div>
    </div>
  );
}

export default ColllectionPreview;
