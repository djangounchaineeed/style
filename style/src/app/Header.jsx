import { MdOutlineShoppingCart } from "react-icons/md";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { BsPersonCircle } from "react-icons/bs";




export default function Header() {



    return (

        <div className="flex flex-col items-center lg:flex-row my-8 mx-auto justify-center">
            <div className="flex flex-col items-center sm:flex-row">
                <h1 className=" text-5xl font-black px-4">
                    SHOP.CO
                </h1>
                <NavigationMenu className="   px-4" >
                    <NavigationMenuList>
                        <NavigationMenuItem >
                            <NavigationMenuTrigger className="px-1">Shop</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Link <br /></NavigationMenuLink>
                                <NavigationMenuLink>Link<br /></NavigationMenuLink>
                                <NavigationMenuLink>Link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger  className="px-1">On Sale</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Link<br /></NavigationMenuLink>
                                <NavigationMenuLink>Link<br /></NavigationMenuLink>
                                <NavigationMenuLink>Link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger  className="px-1">New Arrivals</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Link<br /></NavigationMenuLink>
                                <NavigationMenuLink>Link<br /></NavigationMenuLink>
                                <NavigationMenuLink>Link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger  className="px-1">Brands</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Link<br /></NavigationMenuLink>
                                <NavigationMenuLink>Link<br /></NavigationMenuLink>
                                <NavigationMenuLink>Link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="relative w-96 flex flex-row items-center my-5">
                <Input className='w-[80%] pl-16' type="email" placeholder="Search for products..." />
                <Button className="absolute left-0 top-0 bg-transparent text-gray-500" type="submit"><CiSearch />
                </Button>
                <Button className="rounded-full	mx-2"> <LuShoppingCart className='text-2xl  ' /></Button>
                <Button className="rounded-full	 "><BsPersonCircle className='text-2xl  ' /></Button>

            </div>

        </div>


    )
}