import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineHeart } from "react-icons/ai";
import { NumberInput, Rating } from '@mantine/core';
import { BsCart2 } from "react-icons/bs";
import Tab from "@/components/Tab";
import RelatedProducts from "@/components/RelatedProducts";
import supabase from "@/config/supabase";

const fullProductDetailPage = () =>
{
    const [shopProduct, setShopProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter();
    const { id } = router.query;

    useEffect(() =>
    {
        if (id)
        {
            getProductDetails(id);
        }
    }, [id]);

    async function getProductDetails(productId)
    {
        const { data, error } = await supabase
            .from('shopproductdata')
            .select()
            .eq('id', productId)
            .single();

        if (error)
        {
            console.error(error);
        } else
        {
            setShopProduct(data);
        }
        setIsLoading(false);
    }



    useEffect(() =>
    {
    }, [shopProduct]);

    if (isLoading || !shopProduct)
    {
        return (
            <div className='fixed inset-0 flex items-center justify-center bg-white z-[999999]'>
                <div className="loader">
                </div>
            </div>
        )
    }


    return (
        <>
            <Head>
                <title>{shopProduct ? shopProduct.text : 'Product Detail'}</title>
            </Head>
            <div className="my-20">
                {shopProduct ? (
                    <div className="2xl:mx-24">
                        <div className="grid lg:grid-cols-2 lg:gap-x-2 xl:gap-x-5">
                            <div className="border border-borderColor rounded-2xl w-fit h-fit ssm:mx-auto lg:mx-0 ssm:mb-12 lg:mb-0">
                                <Image src={shopProduct.imageurl} width={500} height={500} alt="product Image" className="object-contain bg-contain bg-center ssm:w-72 ssm:h-72 lg:w-[30rem] lg:h-[30rem]" priority />
                            </div>
                            <div className="ssm:space-y-4 lg:space-y-2 xl:space-y-4 ssm:w-80 lg:w-fit">
                                <div className="bg-[#FDE0E9] w-24 text-center h-10 rounded-md">
                                    <p className="text-[#F74B81] p-2 font-semibold">Sale Off</p>
                                </div>
                                <h3 className="text-primaryText ssm:text-xl md:text-4xl font-semibold">{shopProduct.text}</h3>
                                <div className="flex items-center">
                                    <Rating value={shopProduct.rating} readOnly fractions={2} />
                                    <p className="text-secondaryText ml-24">({`${shopProduct.review}`} reviews)</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-primary font-semibold text-4xl">{`$ ${shopProduct.price}`}</p>
                                    <div className="ml-2">
                                        <p className="text-[#FDC040] text-sm">26% Off</p>
                                        <p className="text-secondaryText text-md"><s>{`$ ${shopProduct.changedprice}`}</s></p>
                                    </div>
                                </div>
                                <p className="text-secondaryText">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi,
                                    odio minus dolore impedit fuga eum eligendi.
                                </p>
                                <div className="text-secondaryText flex items-center ssm:space-x-1 lg:space-x-5 select-none">
                                    <p>
                                        Size / Weight:
                                    </p>
                                    <p className="hover:cursor-pointer hover:bg-primary p-2 rounded-md">50g</p>
                                    <p className="hover:cursor-pointer hover:bg-primary p-2 rounded-md">60g</p>
                                    <p className="hover:cursor-pointer hover:bg-primary p-2 rounded-md">80g</p>
                                    <p className="hover:cursor-pointer hover:bg-primary p-2 rounded-md">100g</p>
                                    <p className="hover:cursor-pointer hover:bg-primary p-2 rounded-md">150g</p>
                                </div>
                                <div className="flex items-center">
                                    <NumberInput
                                        placeholder="1"
                                        allowNegative={false}
                                        defaultValue={1}
                                        className="w-16"
                                    />
                                    <div className=" text-white bg-primary rounded-md hover:cursor-pointer ml-4">
                                        <div className="p-2 flex items-center">
                                            <BsCart2 />
                                            <p className="ml-2"> Add to cart</p>
                                        </div>
                                    </div>
                                    <div className="border-borderColor border rounded-md ml-4">
                                        <div className="p-2 hover:cursor-pointer">
                                            <AiOutlineHeart style={{ color: "#333333" }} className="text-xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Tab />
                    </div>
                ) : (
                    <p>Product not found</p>
                )}
                <RelatedProducts />
            </div>
        </>
    );
};

export default fullProductDetailPage;
