import Post from "../../components/Post/Post";
import "../../components/Post/Post.css";
import "./Home.css";
import Post1 from "../../assets/jpeg/1.jpeg";
import Post2 from "../../assets/jpeg/2.jpeg";
import Post3 from "../../assets/jpeg/3.jpeg";
import Post4 from "../../assets/jpeg/4.jpeg";
import Post5 from "../../assets/jpeg/5.jpeg";
import Post6 from "../../assets/jpeg/6.jpeg";
import Post7 from "../../assets/jpeg/7.jpeg";
import Post8 from "../../assets/jpeg/8.jpeg";
import Post9 from "../../assets/jpeg/9.jpeg";

const Home = () => {
    return (
        <div className="home-post">
            <Post blogImage= {Post1} title= 'The Future of Renewable Energy' author= 'John Stevens' content= "Renewable energy is no longer the future—it's the present. With climate change at the forefront of global discussions, nations are increasingly turning to renewable energy." date= '15th of October, 2023' />
            <Post blogImage= {Post2} title='The Benefits of Yoga for Mental Health' author='Sarah Carter' content="Yoga has been shown to reduce stress and anxiety, improve mood, and even help with sleep. It's a mind-body practice that cultivates mindfulness, allowing individuals to center themselves in a fast-paced world" date='27th of June, 2021' />
            <Post blogImage= {Post3} title=' A Guide to Sustainable Travel' author='Emily Richards' content='Sustainable travel is all about reducing your carbon footprint while exploring the world. This guide will help you travel with purpose.' date='20th of November, 2020' />
            <Post blogImage= {Post4} title='Mastering the Art of French Cooking' author='Chef Pierre Laurent' content=' French cooking is about precision, technique, and rich flavors. This blog covers essential recipes for dishes like Coq au Vin and Bouillabaisse, offering tips from a professional chef to help you elevate your home cooking.' date='18th of Febuary,2021' />
            <Post blogImage= {Post5} title='The Rise of Electric Vehicles' author='Mike Daniels' content="Electric vehicles (EVs) are taking over the automotive industry. As technology advances, they're becoming more affordable and efficient, offering a cleaner alternative to traditional gas-powered cars." date='1st of April, 2024' />
            <Post blogImage= {Post6} title='10 Essential Tips for Remote Workers' author='Jenna Anderson' content="Working remotely can be liberating but also challenging. To stay productive, it's essential to create a structured work environment, stick to a schedule, and take regular breaks to avoid burnout." date='7th of July,2022' />
            <Post blogImage= {Post7} title='Top 5 Photography Tips for Beginners' author="David O'Brien" content=" Whether you're using a DSLR or a smartphone, these five tips will help you capture stunning photos. From mastering composition to playing with lighting, photography is all about capturing moments creatively." date='12th of August, 2020' />
            <Post blogImage= {Post8} title='The Importance of Digital Detox' author='Lisa Turner' content='In our hyper-connected world, constant screen time can lead to burnout. Taking a digital detox allows you to reconnect with yourself and the physical world, improving your mental well-being.' date='3rd of June, 2019' />
            <Post blogImage= {Post9} title='How to Start Your Own Online Business' author='Mark Johnson' content=' Starting an online business has never been easier. From e-commerce to digital marketing services, this blog provides a step-by-step guide to get your business off the ground, including tools and platforms to use.' date='5th of July, 2023' />
        </div>
    )
}

export default Home