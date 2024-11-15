import Imagen from '../img/qwer.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'


export default function FirstPage() {

    return (
        <div className='bg-my  '>
            <div className=' w-5/6 mx-auto flex flex-col items-center lg:flex-row'>

                <div className='w-[45%]'>
                    <div>
                        <h1 className=' text-5xl font-black my-3 '>FIND CLOTHES <br /> THAT MATCHES <br />  YOUR STYLE</h1>
                        <p className=' text-base font-normal my-3 '>Browse through our diverse range of meticulously crafted garments,
                            designed to bring out your individuality and cater to your sense of style.</p>
                        <Button className=' px-12 rounded-3xl	my-3 ' >Shop Now</Button>
                    </div>
                    <div className='  	my-5 flex col md:flex-row '>
                        <div className='px-3'>
                            <h1 className=' text-4xl font-medium   '>
                                200+
                            </h1>
                            <p>
                                International Brands
                            </p>
                        </div>
                        <div className='px-3'>
                            <h1 className=' text-4xl font-medium    '>
                                2,000+
                            </h1>
                            <p>
                                High-Quality Products
                            </p>
                        </div>
                        <div className='px-3'>
                            <h1 className='text-4xl font-medium   '>
                                30,000+
                            </h1>
                            <p>
                                Happy Customers
                            </p>
                        </div>
                    </div>
                </div>
                <Image className=' ' src={Imagen}></Image>
            </div>
        </div>
    )
}