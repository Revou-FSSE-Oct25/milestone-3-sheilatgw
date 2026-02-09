import { Metadata } from "next"
import Header from "@/components/Header"
import Image from "next/image"
import {IoEyeOutline, IoLocateOutline} from "react-icons/io5"

export const metadata: Metadata = {
    title:"About",
    description:"Who We Are"
}

const AboutPage = () => {
  return (
    <div>
        <Header title="About Us" subtitle="Lorem ipsum dolor sit amet."/>
        <div className="max-w-7xl mx-auto py-20 px-4">
            <div className="grid md:grid-cols-2 gap-8">
                <Image src="/about-image.webp" width={400} height={400} alt="about image"/>
                <div>
                    <h1 className="text-5xl font-semibold text-gray-900 mb-4">Who We Are?</h1>
                    <p className="text-gray-700 py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eligendi velit doloremque saepe voluptatem quae distinctio alias, modi perferendis temporibus sapiente!</p>
                    <ul className="list-item space-y-6 pt-8">
                        <li className="flex gap-5">
                            <div className="flex-none mt-1">
                                <IoEyeOutline className="size-7"/>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold mb-1">Vision :</h4>
                                <p className="text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                    Eveniet ducimus nostrum architecto, voluptatem maiores corrupti.</p>
                            </div>
                        </li>
                        <li className="flex gap-5">
                            <div className="flex-none mt-1">
                                <IoLocateOutline className="size-7"/>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold mb-1">Mission :</h4>
                                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Earum rem sit dolores quidem, necessitatibus tempore quisquam corrupti aliquam voluptates eum.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPage