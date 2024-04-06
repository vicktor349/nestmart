import popularData from "@/data/populardata";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { NumberInput, Rating } from '@mantine/core';
import { BsCart2 } from "react-icons/bs";
import Tab from "@/components/Tab";
import RelatedProducts from "@/components/RelatedProducts";

const ProductDetailPage = () =>
{
    const router = useRouter();
    const { id } = router.query;

    const product = popularData.find(prod => prod.id === id);

    return (
        <>
            <Head>
                <title>{product ? product.text.toUpperCase() : 'Product Detail'}</title>
            </Head>
            <div className="my-20">
                {product ? (
                    <div className="mx-24">
                        <div className="grid grid-cols-2">
                            <div className="border border-borderColor rounded-2xl w-fit">
                                <Image src={product.imageUrl} width={2500} height={2500} alt="product Image" className="h-[30rem] w-[30rem]" priority />
                            </div>
                            <div className="space-y-4">
                                <div className="bg-[#FDE0E9] w-24 text-center h-10 rounded-md">
                                    <p className="text-[#F74B81] p-2 font-semibold">Sale Off</p>
                                </div>
                                <h3 className="text-primaryText text-4xl font-semibold">{product.text}</h3>
                                <div className="flex items-center">
                                    <Rating value={product.rating} readOnly fractions={2} />
                                    <p className="text-secondaryText ml-24">({`${product.review}`} reviews)</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-primary font-semibold text-4xl">{product.price}</p>
                                    <div className="ml-2">
                                        <p className="text-[#FDC040] text-sm">26% Off</p>
                                        <p className="text-secondaryText text-md"><s>{product.changedPrice}</s></p>
                                    </div>
                                </div>
                                <p className="text-secondaryText">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi,
                                    odio minus dolore impedit fuga eum eligendi.
                                </p>
                                <div className="text-secondaryText flex items-center space-x-5 select-nonex">
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

export default ProductDetailPage;
