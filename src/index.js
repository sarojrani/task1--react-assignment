import React from 'react';
import ReactDOM from 'react-dom';

const img1="https://picsum.photos/id/0/200/300";
const img2="https://picsum.photos/id/65/200/300";
const img3="https://picsum.photos/id/76/200/300";
const img4="https://picsum.photos/id/49/200/300";
const img5="https://picsum.photos/id/152/200/300";
ReactDOM.render(
    <>
<h1 contentEditable="true">see some Beautiful picture by clicking 
indivisual picture you can see releted picture</h1>
<a href='https://unsplash.com/photos/yC-Yzbqy7PY'>
    <img src={img1} alt="laptopImage"/>
    </a>
    <a href='https://unsplash.com/photos/2FrX56QL7P8'>
    <img src={img2} alt="girlImage"/>
    </a>
    <a href='https://unsplash.com/photos/OxzhYtL-00Y'>
        <img src={img3} alt="dogImage"/>
    </a>
<a href='https://unsplash.com/photos/Qo51KwK1dKg'>
    <img src={img4} alt="naturalImg" />
</a>
<a href='https://unsplash.com/photos/tVIqMgGlAG0'>
    <img src={img5} alt="laptopImg" />
</a>
    </>,
    document.getElementById('root')
)