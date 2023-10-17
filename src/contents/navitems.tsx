import React from 'react';
import './navitems.css'

interface Item{
    text: string;
    icon: string;
    href: string;
}
function Menu({ items }: { items: Item[] }){
    return (
        <div className="menu">
            {items.map((item) => (
                <a key={item.text} href={item.href} className="menu-item">
                    <img src={item.icon} alt="" />
                    <span>{item.text}</span>
                </a>
            ))}
        </div>
    )
}
// export menu and item
export { Menu };
export type { Item };
