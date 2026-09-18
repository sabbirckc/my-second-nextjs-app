import React from 'react';
import Image from 'next/image';

const FoodCart = ({ food }) => {
    const { dish_name, image_link } = food;

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <Image
                    src={image_link}
                    width={400}
                    height={400}
                    alt={dish_name}
                />
            </figure>

            <div className="card-body">
                <h2 className="card-title">
                    {dish_name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>

                <p>
                    A delicious food item prepared with fresh ingredients.
                </p>

                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Food</div>
                    <div className="badge badge-outline">Menu</div>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;