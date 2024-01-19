import React from 'react'
import SectionHeading from '../../CommonComponents/SectionHeading'

const MenuSection = () => {
    return (
        <div className=' section py-16 bg-[#FAFAFA]'>
            <SectionHeading
                tile='Discover Our Exclusive Menu'
                subTitle='OUR MENU'
            />

            <div className=' grid  grid-cols-1 md:grid-cols-2 py-16'>
                <div className=' flex  shadow-xl p-4 '>
                    <div className=''><img src="https://preview.colorlib.com/theme/tasty/images/dish-3.jpg" alt=""
                     className=' object-cover rounded-full  w-[80px]  h-[80px]' /></div>
                    <div>
                        <h4>Grilled Beef with potatoes</h4>
                        <p>Meat, Potatoes, Rice, Tomatoe</p>
                    </div>
                    <div>
                        $29
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MenuSection